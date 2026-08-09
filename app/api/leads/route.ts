import { NextResponse } from "next/server";

import { sendTelegramLead } from "@/lib/telegram";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = leadSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!parsed.success) {
      return NextResponse.json(
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
      return NextResponse.json({
        ok: true,
        message: "Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.",
      });
    }

    await sendTelegramLead(data);

    return NextResponse.json({
      ok: true,
      message: "Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.",
    });
  } catch (error) {
    console.error("Lead submit error", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Не удалось отправить заявку. Попробуйте еще раз или напишите в Telegram.",
      },
      { status: 500 },
    );
  }
}
