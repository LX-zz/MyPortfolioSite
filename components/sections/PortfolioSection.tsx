import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteExamples } from "@/config/examples";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Примеры"
            title="Три формата, которые проще показать клиенту"
            description="Сайт для заявок, сайт-визитка и полноценный сайт компании. Этого набора хватит, чтобы объяснить разные уровни задачи."
          />
        </Reveal>

        <div className="mt-14 grid gap-12">
          {siteExamples.map((example, index) => (
            <Reveal key={example.slug} delay={index * 45}>
              <article className="group relative grid gap-6 py-2 lg:grid-cols-[0.18fr_1fr_0.34fr] lg:items-start">
                <div className="flex items-center gap-3 pt-2">
                  <span className="font-display text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-cyan-100/25 transition group-hover:w-14 group-hover:bg-cyan-100/55" />
                </div>
                <div className="relative">
                  <p className="text-sm font-medium text-cyan-300">{example.format}</p>
                  <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                    {example.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400">{example.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {[example.result, ...example.bestFor.slice(0, 2)].map((item) => (
                      <span key={item} className="text-xs text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:pt-8">
                  <Link
                    href={`/examples/${example.slug}`}
                    className="focus-ring font-display inline-flex items-center gap-3 text-sm font-semibold text-cyan-50 transition hover:text-white"
                  >
                    Открыть пример
                    <span className="h-px w-8 bg-cyan-100/45 transition group-hover:w-12 group-hover:bg-white" />
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
