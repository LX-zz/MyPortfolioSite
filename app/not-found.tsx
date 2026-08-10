import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFrame } from "@/components/site/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <main className="container-page flex min-h-[70vh] items-center justify-center pt-28">
        <section className="max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Страница не найдена</h1>
          <p className="mt-4 text-neutral-300">
            Возможно, ссылка устарела или проект еще не опубликован.
          </p>
          <Link
            href="/"
            className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            На главную
          </Link>
        </section>
      </main>
    </SiteFrame>
  );
}
