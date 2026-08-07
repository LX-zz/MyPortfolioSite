import { ArrowRight } from "lucide-react";

import { services } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Услуги"
          title="Сайт под задачу, а не просто красивый экран"
          description="Можно начать с лендинга, обновить текущий сайт или собрать полноценную структуру для компании, каталога и заявок."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 45}>
              <article className="group h-full rounded-lg border border-cyan-100/10 bg-[#071013]/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-[#0b1418]">
                <div
                  className={cn(
                    "grid size-12 place-items-center rounded-lg border transition",
                    index % 2 === 0
                      ? "border-cyan-200/20 bg-cyan-300/10 text-cyan-200 group-hover:bg-cyan-300/15"
                      : "border-violet-300/20 bg-violet-300/10 text-violet-200 group-hover:bg-violet-300/15",
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-neutral-400">{service.description}</p>
                <a
                  href="#lead-form"
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-cyan-100 transition hover:text-white"
                >
                  Подробнее
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
