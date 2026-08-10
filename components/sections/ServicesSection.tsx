import { ArrowRight } from "lucide-react";

import { services } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="container-page py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Услуги"
          title="Основное, с чего можно начать"
          description="Выбираем формат под задачу: быстрый лендинг, сайт компании или обновление текущего проекта."
        />
      </Reveal>

      <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
        {services.slice(0, 3).map((service, index) => (
          <Reveal key={service.title} delay={index * 45}>
            <article className="group grid gap-5 py-7 md:grid-cols-[0.18fr_0.9fr_auto] md:items-center">
              <span className="font-display text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative pl-8">
                <span className="absolute left-0 top-3 h-px w-4 bg-cyan-100/35 transition group-hover:w-6 group-hover:bg-cyan-100/70" />
                <span className="absolute left-5 top-[0.62rem] size-1.5 bg-violet-200/80 shadow-[0_0_18px_rgba(199,182,255,0.55)]" />
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-400">{service.description}</p>
              </div>
              <a
                href="#lead-form"
                className="focus-ring font-display inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
              >
                Обсудить
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
