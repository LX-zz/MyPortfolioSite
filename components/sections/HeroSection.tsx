import { ArrowDownRight, ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

function SignalField() {
  return (
    <div className="animate-float-panel relative h-[520px] w-[520px] opacity-80">
      <div className="absolute left-10 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(140,247,255,0.12),transparent_62%)] blur-2xl" />
      <div className="absolute left-28 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(199,182,255,0.12),transparent_64%)] blur-2xl" />
      <div className="absolute left-14 top-20 h-px w-96 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
      <div className="absolute bottom-32 left-8 h-px w-[30rem] rotate-[-18deg] bg-gradient-to-r from-transparent via-violet-100/28 to-transparent" />
      <div className="absolute left-[46%] top-[47%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.85)]" />
      <div className="absolute bottom-20 right-20 h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_28px_rgba(167,139,250,0.7)]" />
      <div className="absolute -right-6 bottom-2 text-[12rem] font-semibold leading-none text-white/[0.035]">
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
            className="focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold text-cyan-50 transition hover:text-white"
          >
            Рассчитать стоимость
            <span className="h-px w-12 bg-cyan-100/50 transition group-hover:w-16 group-hover:bg-white" />
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="focus-ring inline-flex items-center gap-2 py-4 text-sm font-semibold text-white/80 transition hover:text-violet-50"
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
