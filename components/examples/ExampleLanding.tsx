import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";

import type { SiteExample } from "@/config/examples";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const palette = {
  cyan: {
    text: "text-cyan-100",
    soft: "text-cyan-300",
    line: "bg-cyan-100/45",
    glow: "bg-[radial-gradient(circle,rgba(140,247,255,0.18),transparent_62%)]",
  },
  violet: {
    text: "text-violet-100",
    soft: "text-violet-300",
    line: "bg-violet-100/45",
    glow: "bg-[radial-gradient(circle,rgba(199,182,255,0.18),transparent_62%)]",
  },
  mint: {
    text: "text-emerald-100",
    soft: "text-emerald-300",
    line: "bg-emerald-100/45",
    glow: "bg-[radial-gradient(circle,rgba(110,231,183,0.18),transparent_62%)]",
  },
} satisfies Record<SiteExample["palette"], Record<string, string>>;

export function ExampleLanding({ example }: { example: SiteExample }) {
  const colors = palette[example.palette];

  return (
    <main className="min-h-screen pb-24 pt-28">
      <section className="container-page">
        <Link
          href="/#portfolio"
          className="focus-ring inline-flex items-center gap-2 py-3 text-sm font-semibold text-neutral-300 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Назад к примерам
        </Link>

        <div className="grid gap-12 pt-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <p className={cn("font-display text-sm font-semibold", colors.soft)}>
              {example.industry} / {example.format}
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.04] text-white md:text-6xl">
              {example.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{example.subline}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#demo-contact"
                className={cn(
                  "focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold transition hover:text-white",
                  colors.text,
                )}
              >
                {example.primaryAction}
                <span className={cn("h-px w-12 transition group-hover:w-16 group-hover:bg-white", colors.line)} />
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#demo-services"
                className="focus-ring inline-flex items-center gap-2 py-4 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                {example.secondaryAction}
              </a>
            </div>
          </div>

          <div className="relative min-h-72">
            <div className={cn("absolute inset-0 rounded-full blur-3xl", colors.glow)} />
            <div className="absolute right-2 top-8 text-[5rem] font-semibold leading-none text-white/[0.045] md:text-[7rem]">
              {example.brand}
            </div>
            <div className="absolute bottom-8 left-0 h-px w-72 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className={cn("absolute left-16 top-24 size-2 rounded-full bg-current shadow-[0_0_28px_currentColor]", colors.soft)} />
          </div>
        </div>

        <div className="mt-14 grid gap-4 text-sm text-neutral-300 md:grid-cols-3">
          {example.proof.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className={cn("size-4", colors.soft)} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="demo-services" className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className={cn("font-display text-sm font-semibold", colors.soft)}>{example.brand}</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Что показывает этот пример
            </h2>
          </div>

          <div className="grid gap-8">
            {example.sections.map((section, index) => (
              <article key={section.title} className="group grid gap-4 md:grid-cols-[0.18fr_1fr]">
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-display text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("h-px w-9 transition group-hover:w-14", colors.line)} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Услуги на странице
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
              Такой блок помогает клиенту быстро понять, что можно заказать и чем отличается
              предложение.
            </p>
          </div>

          <div className="grid gap-6">
            {example.offer.map((item, index) => (
              <div key={item.name} className="group grid gap-3 sm:grid-cols-[0.12fr_1fr_0.28fr] sm:items-center">
                <span className="font-display text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl font-semibold text-white">{item.name}</p>
                <p className="text-sm text-neutral-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-contact" className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className={cn("font-display text-sm font-semibold", colors.soft)}>Заявка</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              В реальном проекте эта кнопка отправляла бы заявку владельцу сайта
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400">
              Для твоего сайта заявки уже идут в Telegram. Для клиента можно подключить Telegram,
              почту, CRM или форму на сервере.
            </p>
          </div>
          <a
            href={siteConfig.contacts.telegramUrl}
            className={cn(
              "focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold transition hover:text-white",
              colors.text,
            )}
          >
            <MessageCircle className="size-4" />
            Обсудить такой сайт
            <span className={cn("h-px w-12 transition group-hover:w-16 group-hover:bg-white", colors.line)} />
          </a>
        </div>
      </section>
    </main>
  );
}
