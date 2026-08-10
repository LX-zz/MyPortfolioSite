import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  Phone,
} from "lucide-react";

import type { SiteExample } from "@/config/examples";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function BackToStudio({ className }: { className?: string }) {
  return (
    <Link
      href="/#portfolio"
      className={cn(
        "focus-ring inline-flex items-center gap-2 text-sm font-semibold transition",
        className,
      )}
    >
      <ArrowLeft className="size-4" />
      Все примеры
    </Link>
  );
}

export function ExampleLanding({ example }: { example: SiteExample }) {
  if (example.slug === "business-card") {
    return <BusinessCardSite example={example} />;
  }

  if (example.slug === "company-site") {
    return <CompanySite example={example} />;
  }

  return <LeadSite example={example} />;
}

function LeadSite({ example }: { example: SiteExample }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030506] text-white">
      <section className="relative min-h-screen px-5 py-5 sm:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,197,94,0.16),transparent_26%),linear-gradient(118deg,#030506,#071011_56%,#020303)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-28 h-px w-[52rem] rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-24 left-[-18rem] h-px w-[64rem] rotate-[-18deg] bg-gradient-to-r from-transparent via-emerald-100/35 to-transparent"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <a href="#" className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {example.brand}
            </a>
            <span className="hidden h-4 w-px bg-white/18 sm:block" />
            <BackToStudio className="text-cyan-100/72 hover:text-white" />
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-white/70 md:flex">
            <a href="#lead-services" className="transition hover:text-cyan-100">
              Услуги
            </a>
            <a href="#lead-proof" className="transition hover:text-cyan-100">
              Доверие
            </a>
            <a href="#lead-contact" className="transition hover:text-cyan-100">
              Запись
            </a>
          </nav>
          <a
            href="#lead-contact"
            className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition hover:text-white"
          >
            <Phone className="size-4" />
            Записаться
          </a>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-20 pt-20 lg:grid-cols-[0.68fr_0.32fr] lg:items-end lg:pt-28">
          <div>
            <p className="font-display text-sm font-semibold text-cyan-200">
              {example.brand} / {example.industry}
            </p>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              {example.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{example.subline}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-contact"
                className="focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold text-cyan-100 transition hover:text-white"
              >
                {example.primaryAction}
                <span className="h-px w-14 bg-cyan-100/60 transition group-hover:w-20 group-hover:bg-white" />
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#lead-services"
                className="focus-ring inline-flex items-center gap-2 py-4 text-sm font-semibold text-white/70 transition hover:text-white"
              >
                {example.secondaryAction}
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>

          <div id="lead-proof" className="grid gap-5 text-sm text-white/72">
            {example.proof.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="size-4 text-cyan-200" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-services" className="bg-[#f4fbf9] px-5 py-20 text-[#091111] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="font-display text-sm font-semibold text-cyan-700">{example.format}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
              Быстро понял услугу, быстро оставил заявку
            </h2>
          </div>
          <div className="grid gap-8">
            {example.offer.map((item, index) => (
              <div key={item.name} className="grid gap-3 sm:grid-cols-[0.12fr_1fr_0.25fr] sm:items-center">
                <span className="font-display text-sm text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-2xl font-semibold">{item.name}</p>
                <p className="text-sm text-black/55">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-contact" className="bg-[#030506] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold text-cyan-200">Заявка</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Один экран работает как посадочная под рекламу
            </h2>
          </div>
          <a
            href={siteConfig.contacts.telegramUrl}
            className="focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold text-cyan-100 transition hover:text-white"
          >
            <MessageCircle className="size-4" />
            Обсудить такой сайт
            <span className="h-px w-12 bg-cyan-100/55 transition group-hover:w-16 group-hover:bg-white" />
          </a>
        </div>
      </section>
    </main>
  );
}

function BusinessCardSite({ example }: { example: SiteExample }) {
  return (
    <main className="min-h-screen bg-[#f3eee5] text-[#201914] [font-family:Georgia,serif]">
      <section className="mx-auto min-h-screen max-w-7xl px-5 py-7 sm:px-8">
        <header className="flex items-center justify-between gap-5">
          <a href="#" className="text-lg text-[#201914]">
            {example.brand}
          </a>
          <div className="flex items-center gap-5">
            <BackToStudio className="hidden text-[#6d5f54] hover:text-[#201914] sm:inline-flex" />
            <a
              href="#card-contact"
              className="focus-ring text-sm font-semibold text-[#201914] underline-offset-8 hover:underline"
            >
              Связаться
            </a>
          </div>
        </header>

        <div className="grid gap-12 pb-20 pt-24 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-sm uppercase text-[#8a7867]">{example.industry}</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-normal leading-[1.02] md:text-7xl">
              {example.headline}
            </h1>
          </div>
          <div>
            <p className="max-w-md text-xl leading-8 text-[#5a4d42]">{example.subline}</p>
            <div className="mt-9 grid gap-3 text-sm text-[#6d5f54]">
              {example.proof.map((item) => (
                <span key={item}>/ {item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-3">
          {example.sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl font-normal">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#67584b]">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="card-contact" className="bg-[#211a15] px-5 py-20 text-[#f5eee6] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <p className="text-sm uppercase text-[#cbbba8]">{example.brand}</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-tight md:text-6xl">
              Сайт-визитка должен чувствоваться личным, а не собранным из блоков
            </h2>
          </div>
          <div className="grid content-end gap-5">
            {example.offer.map((item) => (
              <p key={item.name} className="flex justify-between gap-6 text-sm text-[#d8cbbc]">
                <span>{item.name}</span>
                <span>{item.detail}</span>
              </p>
            ))}
            <a
              href={siteConfig.contacts.telegramUrl}
              className="focus-ring mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Обсудить сайт-визитку
              <span className="h-px w-12 bg-white/45" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function CompanySite({ example }: { example: SiteExample }) {
  return (
    <main className="min-h-screen bg-[#f7f8f3] text-[#10201e]">
      <section className="px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <a href="#" className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#10201e]">
                {example.brand}
              </a>
              <span className="hidden h-4 w-px bg-[#10201e]/16 sm:block" />
              <BackToStudio className="text-[#60706b] hover:text-[#10201e]" />
            </div>
            <nav className="hidden items-center gap-7 text-sm font-semibold text-[#60706b] md:flex">
              <a href="#company-services" className="hover:text-[#10201e]">
                Направления
              </a>
              <a href="#company-process" className="hover:text-[#10201e]">
                Процесс
              </a>
              <a href="#company-contact" className="hover:text-[#10201e]">
                Расчет
              </a>
            </nav>
          </header>

          <div className="grid gap-14 pb-20 pt-20 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
            <div>
              <p className="font-display text-sm font-semibold text-emerald-700">
                {example.brand} / {example.industry}
              </p>
              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl">
                {example.headline}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#56645f]">{example.subline}</p>
            </div>
            <div className="grid gap-5">
              {example.proof.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#30403c]">
                  <Check className="size-4 text-emerald-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="company-services" className="bg-[#10201e] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="font-display text-sm font-semibold text-emerald-200">{example.format}</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight md:text-6xl">
              Полноценная структура для компании
            </h2>
          </div>
          <div className="grid gap-9 md:grid-cols-3">
            {example.offer.map((item, index) => (
              <article key={item.name}>
                <p className="font-display text-sm text-white/40">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company-process" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Не просто визитка, а основа для роста
          </h2>
          <div className="grid gap-8">
            {example.sections.map((section, index) => (
              <article key={section.title} className="grid gap-4 sm:grid-cols-[0.16fr_1fr]">
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-display text-sm text-[#7d8a84]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-emerald-700/35" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b6863]">{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company-contact" className="px-5 pb-24 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-[#10201e]/10 pt-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-sm font-semibold text-emerald-700">Расчет</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
              Такой сайт подходит, когда услуг много и важна структура.
            </h2>
          </div>
          <a
            href={siteConfig.contacts.telegramUrl}
            className="focus-ring group inline-flex items-center gap-3 text-sm font-bold text-emerald-800 transition hover:text-[#10201e]"
          >
            Обсудить полноценный сайт
            <span className="h-px w-12 bg-emerald-700/45 transition group-hover:w-16 group-hover:bg-[#10201e]" />
            <Clock3 className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
