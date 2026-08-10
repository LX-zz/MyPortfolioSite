import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock3,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import type { SiteExample } from "@/config/examples";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function BackToPortfolio({ className }: { className?: string }) {
  return (
    <Link
      href="/#portfolio"
      className={cn("focus-ring inline-flex items-center gap-2 text-sm font-semibold transition", className)}
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
    <main className="min-h-screen overflow-hidden bg-[#050608] text-white">
      <section className="relative px-5 py-5 sm:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(70,221,255,0.22),transparent_29%),radial-gradient(circle_at_78%_10%,rgba(16,185,129,0.14),transparent_24%),linear-gradient(125deg,#050608_0%,#071617_58%,#020303_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-36 h-[44rem] w-[44rem] rounded-full border border-cyan-100/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-white">
                {example.brand}
              </span>
              <span className="hidden h-4 w-px bg-white/18 sm:block" />
              <BackToPortfolio className="text-cyan-100/70 hover:text-white" />
            </div>

            <nav className="hidden items-center gap-7 text-sm font-semibold text-white/62 lg:flex">
              <a href="#lead-menu" className="transition hover:text-cyan-100">
                Услуги
              </a>
              <a href="#lead-speed" className="transition hover:text-cyan-100">
                Скорость
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
          </header>

          <div className="grid min-h-[calc(100vh-5rem)] gap-12 py-20 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
            <div>
              <p className="font-display text-sm font-semibold text-cyan-200">{example.industry}</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.9] text-white sm:text-7xl lg:text-8xl">
                {example.headline}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66">{example.subline}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#lead-contact"
                  className="focus-ring group inline-flex items-center gap-3 rounded-full bg-cyan-100 px-6 py-4 text-sm font-extrabold text-[#031012] transition hover:bg-white"
                >
                  {example.primaryAction}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#lead-menu"
                  className="focus-ring inline-flex items-center gap-3 rounded-full border border-white/18 px-6 py-4 text-sm font-bold text-white/78 transition hover:border-cyan-100/70 hover:text-white"
                >
                  {example.secondaryAction}
                </a>
              </div>
            </div>

            <div className="relative min-h-[34rem]">
              <div className="absolute inset-x-6 top-8 h-48 rounded-[48%] border border-cyan-100/18 bg-cyan-100/[0.03] blur-[1px]" />
              <div className="absolute left-4 right-4 top-36 h-px bg-cyan-100/45" />
              <div className="absolute left-0 top-52 h-24 w-full rounded-[50%] border-t border-cyan-100/25 bg-gradient-to-b from-cyan-100/10 to-transparent" />
              <div className="absolute bottom-12 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-[50%] bg-cyan-100/[0.07] blur-3xl" />

              <div className="absolute right-0 top-0 w-52 border-l border-cyan-100/25 pl-5">
                <p className="font-display text-5xl font-semibold text-cyan-100">24ч</p>
                <p className="mt-2 text-sm leading-6 text-white/58">среднее время до первой записи после запуска рекламы</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full border-t border-white/12 pt-7">
                <div className="grid gap-5 sm:grid-cols-3">
                  {example.proof.map((item) => (
                    <div key={item} className="text-sm font-semibold text-white/72">
                      <Check className="mb-3 size-4 text-cyan-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute left-0 top-6 grid gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                <span>polish</span>
                <span>ceramic</span>
                <span>film</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead-menu" className="bg-[#eaf8f5] px-5 py-20 text-[#071111] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="font-display text-sm font-semibold text-cyan-800">{example.format}</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight md:text-6xl">
              Меню услуг без лишних экранов
            </h2>
          </div>

          <div className="divide-y divide-[#071111]/12 border-y border-[#071111]/12">
            {example.offer.map((item, index) => (
              <a
                key={item.name}
                href="#lead-contact"
                className="group grid gap-4 py-7 transition hover:px-3 sm:grid-cols-[0.12fr_1fr_0.24fr_0.1fr] sm:items-center"
              >
                <span className="font-display text-sm text-[#071111]/38">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-2xl font-semibold">{item.name}</span>
                <span className="text-sm font-semibold text-[#071111]/58">{item.detail}</span>
                <ArrowUpRight className="size-5 text-cyan-800 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-speed" className="bg-[#050608] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
            Тут важна не красота ради красоты, а короткий путь до заявки.
          </h2>
          <div className="grid gap-5 text-sm leading-7 text-white/62">
            <p>Первый экран сразу говорит, что делает бизнес. Услуги видны как меню, кнопки ведут в одну точку, а доверие не спрятано глубоко внизу.</p>
            <a
              href={siteConfig.contacts.telegramUrl}
              className="focus-ring group inline-flex items-center gap-3 pt-4 text-sm font-bold text-cyan-100 transition hover:text-white"
            >
              <MessageCircle className="size-4" />
              Хочу посадочную под рекламу
              <span className="h-px w-12 bg-cyan-100/55 transition group-hover:w-16 group-hover:bg-white" />
            </a>
          </div>
        </div>
      </section>

      <section id="lead-contact" className="bg-cyan-100 px-5 py-16 text-[#031012] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em]">быстрая заявка</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Записаться на осмотр автомобиля</h2>
          </div>
          <a
            href={siteConfig.contacts.telegramUrl}
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-[#031012] px-7 py-4 text-sm font-bold text-white transition hover:bg-black"
          >
            Написать в Telegram
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

function BusinessCardSite({ example }: { example: SiteExample }) {
  return (
    <main className="min-h-screen bg-[#f2eadc] text-[#241812] [font-family:Georgia,serif]">
      <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[18rem_1fr]">
        <aside className="border-b border-[#241812]/12 px-5 py-6 lg:min-h-screen lg:border-b-0 lg:border-r lg:px-8">
          <div className="lg:sticky lg:top-8">
            <div className="flex items-center justify-between gap-5 lg:block">
              <p className="text-2xl italic">{example.brand}</p>
              <BackToPortfolio className="text-[#6f5d50] hover:text-[#241812]" />
            </div>

            <nav className="mt-12 hidden gap-4 text-sm text-[#6f5d50] lg:grid">
              <a href="#card-story" className="hover:text-[#241812]">
                Подход
              </a>
              <a href="#card-services" className="hover:text-[#241812]">
                Услуги
              </a>
              <a href="#card-contact" className="hover:text-[#241812]">
                Контакт
              </a>
            </nav>

            <p className="mt-20 hidden text-sm leading-7 text-[#7a695b] lg:block">
              Сайт для эксперта должен быть похож на личное пространство, а не на рекламную листовку.
            </p>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-10 lg:px-14">
          <header className="flex items-center justify-between gap-5 text-sm text-[#6f5d50]">
            <span>{example.industry}</span>
            <a href="#card-contact" className="focus-ring underline-offset-8 hover:text-[#241812] hover:underline">
              Записаться на консультацию
            </a>
          </header>

          <div className="grid gap-12 pb-16 pt-16 xl:grid-cols-[0.58fr_0.42fr] xl:items-center">
            <div>
              <h1 className="max-w-5xl text-5xl font-normal leading-[0.98] md:text-7xl xl:text-8xl">
                {example.headline}
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-9 text-[#655448]">{example.subline}</p>
            </div>

            <div className="relative min-h-[34rem]">
              <div className="absolute right-0 top-0 h-72 w-56 bg-[#c7b49d]" />
              <div className="absolute left-0 top-20 h-80 w-64 bg-[#dfd1bd]" />
              <div className="absolute bottom-0 right-12 h-52 w-72 bg-[#7f6b5d]" />
              <div className="absolute left-8 top-28 h-64 w-44 bg-[linear-gradient(135deg,#efe5d2,#b89476)] shadow-2xl shadow-[#241812]/10" />
              <div className="absolute right-10 top-12 h-60 w-40 bg-[linear-gradient(160deg,#2c211b,#836f5d)] shadow-2xl shadow-[#241812]/14" />
              <p className="absolute bottom-10 left-0 max-w-xs text-sm leading-7 text-[#6f5d50]">
                Цвет, свет, материалы и планировка собираются в спокойную историю о будущем доме.
              </p>
            </div>
          </div>

          <section id="card-story" className="grid gap-10 border-y border-[#241812]/12 py-12 md:grid-cols-[0.45fr_0.55fr]">
            <p className="text-3xl leading-tight md:text-5xl">Меньше шума. Больше ощущения человека и вкуса.</p>
            <div className="grid gap-6 text-sm leading-8 text-[#69584b]">
              {example.sections.map((section) => (
                <p key={section.title}>
                  <span className="block text-base italic text-[#241812]">{section.title}</span>
                  {section.text}
                </p>
              ))}
            </div>
          </section>

          <section id="card-services" className="py-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <h2 className="text-4xl font-normal md:text-6xl">Что внутри</h2>
              <div className="w-full max-w-xl divide-y divide-[#241812]/12 border-y border-[#241812]/12">
                {example.offer.map((item) => (
                  <div key={item.name} className="flex justify-between gap-6 py-5 text-sm">
                    <span className="text-[#241812]">{item.name}</span>
                    <span className="text-[#7a695b]">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="card-contact" className="pb-16">
            <div className="grid gap-8 bg-[#241812] px-6 py-10 text-[#f8efe2] md:grid-cols-[0.58fr_0.42fr] md:px-10">
              <div>
                <p className="text-sm italic text-[#cdbda7]">{example.brand}</p>
                <h2 className="mt-4 text-4xl font-normal leading-tight md:text-6xl">
                  Спокойный сайт-визитка для первого доверия
                </h2>
              </div>
              <div className="grid content-end gap-5 text-sm leading-7 text-[#d8c8b4]">
                {example.proof.map((item) => (
                  <span key={item}>/ {item}</span>
                ))}
                <a
                  href={siteConfig.contacts.telegramUrl}
                  className="focus-ring mt-4 inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  Обсудить сайт-визитку
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function CompanySite({ example }: { example: SiteExample }) {
  return (
    <main className="min-h-screen bg-[#f6f8f4] text-[#122633] [font-family:Arial,sans-serif]">
      <section className="border-b border-[#122633]/12 bg-[#fbfcf8] px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#122633] text-sm font-black text-white">
              NB
            </span>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em]">{example.brand}</p>
              <p className="text-xs text-[#60717a]">{example.industry}</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#60717a]">
            <a href="#company-services" className="hover:text-[#122633]">
              Направления
            </a>
            <a href="#company-process" className="hover:text-[#122633]">
              Этапы
            </a>
            <a href="#company-contact" className="hover:text-[#122633]">
              Расчет
            </a>
            <BackToPortfolio className="text-[#60717a] hover:text-[#122633]" />
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,38,51,0.055)_1px,transparent_1px),linear-gradient(rgba(18,38,51,0.055)_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <p className="font-display text-sm font-semibold text-[#2f7d69]">{example.format}</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.96] md:text-7xl">
              {example.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#566a73]">{example.subline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#company-contact"
                className="focus-ring inline-flex items-center justify-center gap-3 rounded-sm bg-[#122633] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0b1b24]"
              >
                {example.primaryAction}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#company-process"
                className="focus-ring inline-flex items-center justify-center gap-3 rounded-sm border border-[#122633]/18 bg-white/70 px-6 py-4 text-sm font-bold text-[#122633] transition hover:bg-white"
              >
                {example.secondaryAction}
              </a>
            </div>
          </div>

          <div className="bg-[#122633] p-6 text-white shadow-2xl shadow-[#122633]/12">
            <div className="grid grid-cols-2 gap-px bg-white/12">
              {[
                { icon: Home, label: "Объекты", value: "54" },
                { icon: ShieldCheck, label: "Гарантия", value: "5 лет" },
                { icon: Ruler, label: "Смета", value: "точная" },
                { icon: CalendarCheck, label: "График", value: "по этапам" },
              ].map((item) => (
                <div key={item.label} className="bg-[#122633] p-5">
                  <item.icon className="size-5 text-[#9ee6cc]" />
                  <p className="mt-6 text-3xl font-black">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/48">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-white/14 pt-6">
              <p className="text-sm leading-7 text-white/68">
                Вместо лендинга тут нужна структура: услуги, процесс, доказательства, документы, вопросы и точки входа под разные запросы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="company-services" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-[#122633]/12 pb-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Направления вынесены как разделы сайта
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#5f7078]">
              Такой формат удобно расширять: отдельные страницы услуг, кейсы, SEO-страницы и посадочные под рекламу.
            </p>
          </div>

          <div className="grid gap-px bg-[#122633]/12 md:grid-cols-3">
            {example.offer.map((item, index) => (
              <article key={item.name} className="bg-[#f6f8f4] py-9 pr-8 md:min-h-72">
                <p className="font-display text-sm font-semibold text-[#2f7d69]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-3xl font-black">{item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f7078]">{item.detail}</p>
                <Wrench className="mt-10 size-6 text-[#122633]/34" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company-process" className="bg-[#122633] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-display text-sm font-semibold text-[#9ee6cc]">Процесс</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Сайт объясняет, как компания работает</h2>
          </div>

          <div className="divide-y divide-white/14 border-y border-white/14">
            {example.sections.map((section, index) => (
              <article key={section.title} className="grid gap-5 py-7 md:grid-cols-[0.18fr_1fr]">
                <span className="font-display text-sm text-white/42">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company-contact" className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.48fr_0.52fr] md:items-end">
          <div>
            <p className="font-display text-sm font-semibold text-[#2f7d69]">Расчет проекта</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Полноценный сайт выглядит как система, а не как одна длинная страница.
            </h2>
          </div>
          <div className="grid gap-5">
            {example.proof.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#40525b]">
                <Check className="size-4 text-[#2f7d69]" />
                {item}
              </div>
            ))}
            <a
              href={siteConfig.contacts.telegramUrl}
              className="focus-ring mt-4 inline-flex items-center justify-center gap-3 rounded-sm bg-[#122633] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0b1b24] md:w-fit"
            >
              Обсудить полноценный сайт
              <Clock3 className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
