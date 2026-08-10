"use client";

import { RotateCcw } from "lucide-react";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="container-page flex min-h-[70vh] items-center justify-center pt-28">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">Ошибка</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Что-то пошло не так</h1>
        <p className="mt-3 text-neutral-300">
          Страница не загрузилась корректно. Попробуйте обновить экран или вернуться позже.
        </p>
        <button
          type="button"
          onClick={reset}
          className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-50 transition hover:text-white"
        >
          <RotateCcw className="size-4" />
          Повторить
        </button>
      </section>
    </main>
  );
}
