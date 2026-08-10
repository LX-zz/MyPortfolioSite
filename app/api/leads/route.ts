import { NextResponse } from "next/server";

import { sendTelegramLead } from "@/lib/telegram";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function json(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");

  return NextResponse.json(data, {
    ...init,
    headers,
  });
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);

    if (contentLength > MAX_BODY_BYTES) {
      return json(
        {
          ok: false,
          message: "Форма слишком большая. Сократите комментарий и попробуйте еще раз.",
        },
        { status: 413 },
      );
    }

    if (isRateLimited(getClientIp(request))) {
      return json(
        {
          ok: false,
          message: "Слишком много отправок подряд. Попробуйте еще раз через несколько минут.",
        },
        { status: 429 },
      );
    }

    const formData = await request.formData();
    const parsed = leadSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!parsed.success) {
      return json(
        {
          ok: false,
          message: "Проверьте поля формы.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.website) {
      return json({
        ok: true,
        message: "Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.",
      });
    }

    await sendTelegramLead(data);

    return json({
      ok: true,
      message: "Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.",
    });
  } catch (error) {
    console.error("Lead submit error", error);

    return json(
      {
        ok: false,
        message: "Не удалось отправить заявку. Попробуйте еще раз или напишите в Telegram.",
      },
      { status: 500 },
    );
  }
}
