import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { portfolioProjects } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectPlaceholder({
  title,
  direction,
  icon: Icon,
}: {
  title: string;
  direction: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={`Графическая заглушка проекта: ${title}`}
      className="relative min-h-48 overflow-hidden rounded-lg border border-cyan-100/10 bg-[#071013]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.18),transparent_32%),linear-gradient(45deg,rgba(167,139,250,0.14),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent)]" />
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-md border border-cyan-300/20 bg-black/35 px-3 py-2 text-xs font-medium text-neutral-200 backdrop-blur">
        <Icon className="size-4 text-cyan-300" />
        {direction}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="mb-3 h-2 w-16 rounded bg-cyan-200/70" />
        <div className="h-5 w-4/5 rounded bg-white/80" />
        <div className="mt-2 h-3 w-3/5 rounded bg-white/[0.24]" />
      </div>
      <div className="absolute right-5 top-20 grid w-28 gap-2">
        <div className="h-3 rounded bg-white/20" />
        <div className="h-3 rounded bg-white/[0.12]" />
        <div className="h-3 w-2/3 rounded bg-cyan-300/70" />
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-y border-white/10 bg-neutral-950/[0.58] py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Портфолио"
            title="Примеры направлений"
            description="Несколько сценариев, под которые можно собрать сайт: услуги, компания, заявки и понятная структура."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 45}>
              <article className="group h-full rounded-lg border border-cyan-100/10 bg-[#071013]/85 p-4 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-[0_24px_70px_rgba(103,232,249,0.08)]">
                <ProjectPlaceholder
                  title={project.title}
                  direction={project.direction}
                  icon={project.icon}
                />
                <div className="p-2 pt-5">
                  <p className="text-sm font-medium text-cyan-300">{project.direction}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md border border-cyan-100/20 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/45 hover:bg-cyan-300/10"
                  >
                    Открыть проект
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
