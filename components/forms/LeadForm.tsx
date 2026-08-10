"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { siteFormOptions } from "@/config/site";
import { cn } from "@/lib/utils";

type FieldErrors = Record<string, string[] | undefined>;

type SubmitResult = {
  ok: boolean;
  message: string;
  errors?: FieldErrors;
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  const normalized = digits.startsWith("8")
    ? `7${digits.slice(1)}`
    : digits.startsWith("7")
      ? digits
      : `7${digits}`;
  const phoneDigits = normalized.slice(0, 11);
  const area = phoneDigits.slice(1, 4);
  const prefix = phoneDigits.slice(4, 7);
  const firstPair = phoneDigits.slice(7, 9);
  const secondPair = phoneDigits.slice(9, 11);

  if (!area) {
    return "+7";
  }

  let formatted = `+7 (${area}`;

  if (area.length === 3) {
    formatted += ")";
  }

  if (prefix) {
    formatted += area.length === 3 ? ` ${prefix}` : prefix;
  }

  if (firstPair) {
    formatted += `-${firstPair}`;
  }

  if (secondPair) {
    formatted += `-${secondPair}`;
  }

  return formatted;
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return (
    <p className="mt-2 flex items-center gap-2 text-sm text-red-300">
      <AlertCircle className="size-4" />
      {errors[0]}
    </p>
  );
}

const inputClass =
  "focus-ring w-full rounded-none border-0 border-b border-cyan-100/20 bg-transparent px-0 py-3 text-base text-white transition placeholder:text-neutral-500 hover:border-cyan-100/35 focus:border-cyan-200 disabled:cursor-not-allowed disabled:opacity-60";

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    setErrors({});
    setIsSuccess(false);

    const form = event.currentTarget;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as SubmitResult;

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setMessage(result.message || "Проверьте поля формы.");
        return;
      }

      setIsSuccess(true);
      setMessage(result.message);
      form.reset();
    } catch {
      setMessage("Не удалось отправить заявку. Проверьте соединение и попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Сайт</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-200">Имя</span>
          <input
            className={cn(inputClass, errors.name?.length && "border-red-300/60")}
            name="name"
            type="text"
            maxLength={80}
            placeholder="Кирилл"
            autoComplete="name"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name?.length)}
          />
          <FieldError errors={errors.name} />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-200">Телефон</span>
          <input
            className={cn(inputClass, errors.phone?.length && "border-red-300/60")}
            name="phone"
            type="tel"
            inputMode="tel"
            maxLength={32}
            placeholder="+7 (999) 123-45-67"
            autoComplete="tel"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.phone?.length)}
            onChange={(event) => {
              event.currentTarget.value = formatPhone(event.currentTarget.value);
            }}
          />
          <FieldError errors={errors.phone} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-200">Telegram</span>
          <input
            className={cn(inputClass, errors.telegram?.length && "border-red-300/60")}
            name="telegram"
            type="text"
            maxLength={64}
            placeholder="@username"
            autoComplete="off"
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.telegram?.length)}
          />
          <FieldError errors={errors.telegram} />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-200">Вид сайта</span>
          <select
            className={cn(inputClass, "appearance-none", errors.service?.length && "border-red-300/60")}
            name="service"
            defaultValue=""
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.service?.length)}
          >
            <option value="" disabled>
              Выберите услугу
            </option>
            {siteFormOptions.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError errors={errors.service} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-neutral-200">Примерный бюджет</span>
        <select
          className={cn(inputClass, "appearance-none", errors.budget?.length && "border-red-300/60")}
          name="budget"
          defaultValue=""
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.budget?.length)}
        >
          <option value="" disabled>
            Выберите бюджет
          </option>
          {siteFormOptions.budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
        <FieldError errors={errors.budget} />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-neutral-200">Комментарий</span>
        <textarea
          className={cn(inputClass, "min-h-36 resize-y", errors.comment?.length && "border-red-300/60")}
          name="comment"
          maxLength={1000}
          placeholder="Расскажите, какой сайт нужен, что уже есть и какие сроки важны."
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.comment?.length)}
        />
        <FieldError errors={errors.comment} />
      </label>

      <label className="flex gap-3 border-y border-white/10 py-4 text-sm leading-6 text-neutral-300">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 size-4 accent-cyan-300"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.consent?.length)}
        />
        <span>
          Я даю согласие на обработку персональных данных и ознакомлен с{" "}
          <Link href="/privacy" className="text-cyan-200 underline-offset-4 hover:underline">
            политикой конфиденциальности
          </Link>{" "}
          и{" "}
          <Link href="/consent" className="text-cyan-200 underline-offset-4 hover:underline">
            согласием на обработку данных
          </Link>
          .
          <FieldError errors={errors.consent} />
        </span>
      </label>

      {message ? (
        <div
          className={cn(
            "flex items-start gap-3 border-l-2 py-3 pl-4 text-sm leading-6",
            isSuccess
              ? "border-emerald-300 text-emerald-100"
              : "border-red-300 text-red-100",
          )}
          role="status"
        >
          {isSuccess ? <CheckCircle2 className="mt-0.5 size-5" /> : <AlertCircle className="mt-0.5 size-5" />}
          <span>{message}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring inline-flex items-center justify-center gap-2 border border-cyan-100/25 bg-cyan-300/[0.08] px-6 py-4 text-sm font-bold text-cyan-50 shadow-[0_18px_58px_rgba(103,232,249,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/[0.14] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}
