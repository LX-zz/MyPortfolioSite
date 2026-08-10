import { ArrowDownRight, ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function SignalField() {
  return (
    <div className="animate-float-panel relative h-[520px] w-[520px] opacity-80">
      <div className="absolute inset-0 rotate-[-10deg] border-l border-cyan-200/20" />
      <div className="absolute inset-y-8 left-20 w-px bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent" />
      <div className="absolute inset-y-0 left-40 w-px bg-gradient-to-b from-transparent via-violet-200/25 to-transparent" />
      <div className="absolute inset-y-16 left-64 w-px bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent" />
      <div className="absolute inset-x-2 top-24 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="absolute inset-x-16 top-52 h-px bg-gradient-to-r from-transparent via-violet-200/25 to-transparent" />
      <div className="absolute inset-x-8 bottom-24 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
      <div className="absolute left-14 top-16 h-28 w-28 border border-cyan-200/20" />
      <div className="absolute right-10 top-28 h-40 w-40 border border-violet-200/15" />
      <div className="absolute bottom-12 left-28 h-36 w-52 border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />
      <div className="absolute left-[46%] top-[47%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.85)]" />
      <div className="absolute bottom-20 right-20 h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_28px_rgba(167,139,250,0.7)]" />
      <div className="absolute -right-6 bottom-2 text-[12rem] font-semibold leading-none text-white/[0.04]">
        2К
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="container-page relative overflow-hidden pb-20 pt-32 lg:min-h-[700px] lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-24 z-0 hidden text-[13rem] font-black leading-none text-white/[0.018] blur-[0.2px] lg:block"
      >
        2К
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] top-20 z-0 hidden opacity-[0.48] blur-[0.2px] saturate-75 [mask-image:linear-gradient(90deg,transparent,black_18%,black_72%,transparent)] lg:block xl:right-0"
      >
        <SignalField />
      </div>
      <Reveal className="relative z-10 max-w-3xl">
        <p className="relative inline-flex items-center gap-3 text-sm font-medium text-cyan-50">
          <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
          {siteConfig.tagline}
        </p>
        <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Сайт, который понятно представляет бизнес и собирает заявки
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{siteConfig.description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#lead-form"
            className="focus-ring animate-button-glow inline-flex items-center justify-center gap-2 border border-cyan-100/25 bg-cyan-300/[0.08] px-6 py-4 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-100/45 hover:bg-cyan-300/[0.14]"
          >
            Рассчитать стоимость
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="focus-ring inline-flex items-center justify-center gap-2 border-b border-white/[0.25] px-2 py-4 text-sm font-semibold text-white transition hover:border-violet-300/55 hover:text-violet-50"
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
    </section>
  );
}
