import { processSteps } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Этапы работы"
          title="Понятный процесс без лишней бюрократии"
          description="Каждый этап помогает двигаться от идеи к работающему сайту: с понятной структурой, адаптивной версткой и базовой подготовкой к поиску."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 45}>
            <article className="relative min-h-40 rounded-lg border border-cyan-100/10 bg-[#071013]/80 p-6 transition hover:border-cyan-200/35">
              <span
                className={cn(
                  "text-5xl font-semibold",
                  index % 2 === 0 ? "text-cyan-300/[0.22]" : "text-violet-300/20",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step}</h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
