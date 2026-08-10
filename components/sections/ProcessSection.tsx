import { processSteps } from "@/config/site";
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

      <div className="mt-12 grid gap-8 lg:grid-cols-4">
        {processSteps.slice(0, 4).map((step, index) => (
          <Reveal key={step} delay={index * 45}>
            <article className="group relative py-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-cyan-100/25 transition group-hover:w-14 group-hover:bg-cyan-100/55" />
              </div>
              <h3 className="mt-5 max-w-56 text-xl font-semibold leading-snug text-white">{step}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
