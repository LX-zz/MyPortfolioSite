import { ArrowDownRight, ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function BrowserPreview() {
  return (
    <div className="animate-float-panel relative mx-auto w-full max-w-[530px] opacity-90" aria-label="Пример бизнес-сайта">
      <div className="rounded-lg border border-cyan-100/10 bg-[#071013]/75 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_80px_rgba(103,232,249,0.08)] backdrop-blur">
        <div className="flex h-12 items-center gap-2 border-b border-cyan-100/10 px-4">
          <span className="size-3 rounded-full bg-white/[0.18]" />
          <span className="size-3 rounded-full bg-cyan-200/45" />
          <span className="size-3 rounded-full bg-violet-300/45" />
          <span className="ml-3 h-5 flex-1 rounded bg-white/5" />
        </div>
        <div className="grid gap-5 p-5 sm:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 h-3 w-24 rounded bg-cyan-200/60" />
              <div className="h-7 w-11/12 rounded bg-white/90" />
              <div className="mt-3 h-7 w-7/12 rounded bg-white/80" />
              <div className="mt-5 grid gap-2">
                <div className="h-2.5 rounded bg-white/[0.16]" />
                <div className="h-2.5 w-10/12 rounded bg-white/[0.12]" />
                <div className="h-2.5 w-8/12 rounded bg-white/10" />
              </div>
              <div className="mt-6 flex gap-3">
                <div className="h-10 w-32 rounded-md border border-cyan-200/25 bg-cyan-300/10" />
                <div className="h-10 w-28 rounded-md border border-violet-300/25 bg-violet-300/10" />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0a1114] p-4">
              <div className="flex items-end gap-2">
                {[36, 48, 42, 64, 70, 86].map((height, index) => (
                  <div
                    key={height}
                    className="flex flex-1 items-end rounded bg-white/5"
                    style={{ height: 92 }}
                  >
                    <div
                      className={
                        index > 3 ? "w-full rounded bg-violet-300/55" : "w-full rounded bg-cyan-300/40"
                      }
                      style={{ height }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-300">Заявки</span>
                <span className="inline-flex items-center gap-1 rounded bg-cyan-300/[0.12] px-2 py-1 text-xs text-cyan-100">
                  <ArrowDownRight className="size-3 rotate-180" />
                  рост
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {["SEO", "Mobile", "Analytics"].map((label) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <div className="h-2 w-12 rounded bg-cyan-200/50" />
                <div className="mt-3 h-2 rounded bg-white/[0.12]" />
                <p className="mt-3 text-xs font-medium text-neutral-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-5 right-5 h-8 rounded-[100%] bg-black/50 blur-2xl" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="container-page relative grid gap-12 pb-20 pt-32 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-24 hidden text-[13rem] font-black leading-none text-white/[0.025] blur-[0.2px] lg:block"
      >
        2К
      </div>
      <Reveal>
        <p className="relative inline-flex items-center gap-2 rounded-md border border-cyan-200/20 bg-white/[0.035] px-3 py-2 text-sm font-medium text-cyan-50 backdrop-blur">
          <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
          {siteConfig.tagline}
        </p>
        <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Создаю сайты, которые помогают бизнесу получать клиентов
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{siteConfig.description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#lead-form"
            className="focus-ring animate-button-glow inline-flex items-center justify-center gap-2 rounded-md border border-cyan-100/25 bg-cyan-300/10 px-6 py-4 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-100/45 hover:bg-cyan-300/[0.16]"
          >
            Рассчитать стоимость
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.14] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-300/45 hover:bg-violet-300/10"
          >
            Посмотреть работы
            <ArrowDownRight className="size-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {siteConfig.advantages.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-neutral-200">
              <CheckCircle2 className="size-5 shrink-0 text-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <BrowserPreview />
      </Reveal>
    </section>
  );
}
