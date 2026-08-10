import { processSteps } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="container-page py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Этапы работы"
          title="Короткий и понятный процесс"
          description="Сначала фиксируем задачу, потом собираем структуру, запускаем сайт и спокойно дорабатываем детали."
        />
      </Reveal>

      <div className="mt-12 grid border-l border-white/10 lg:grid-cols-4 lg:border-l-0 lg:border-t">
        {processSteps.slice(0, 4).map((step, index) => (
          <Reveal key={step} delay={index * 45}>
            <article className="relative min-h-36 px-6 py-7 lg:border-r lg:border-white/10 lg:px-7">
              <span className="absolute -left-[5px] top-8 size-2 bg-cyan-200 lg:-top-[5px] lg:left-7" />
              <span
                className={cn(
                  "text-sm font-semibold",
                  index % 2 === 0 ? "text-cyan-200" : "text-violet-200",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 max-w-48 text-xl font-semibold leading-snug text-white">{step}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
