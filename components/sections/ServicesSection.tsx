import { ArrowRight } from "lucide-react";

import { services } from "@/config/site";
import { cn } from "@/lib/utils";
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
        {services.slice(0, 3).map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 45}>
              <article className="group grid gap-5 py-7 md:grid-cols-[0.18fr_0.2fr_0.9fr_auto] md:items-center">
                <span className="text-sm font-medium text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                <div
                  className={cn(
                    "grid size-12 place-items-center border transition group-hover:border-white/25",
                    index % 2 === 0
                      ? "border-cyan-200/20 text-cyan-200"
                      : "border-violet-300/20 text-violet-200",
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">{service.description}</p>
                </div>
                <a href="#lead-form" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white">
                  Обсудить
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
