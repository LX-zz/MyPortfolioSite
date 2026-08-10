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
      className="relative min-h-56 overflow-hidden border-l border-t border-cyan-100/15 bg-[#071013]/35"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.16),transparent_32%),linear-gradient(45deg,rgba(167,139,250,0.12),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-100/10" />
      <div className="absolute inset-y-0 left-1/3 w-px bg-cyan-100/10" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-violet-100/10" />
      <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-medium text-neutral-200">
        <Icon className="size-4 text-cyan-300" />
        {direction}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="mb-3 h-px w-16 bg-cyan-200/70" />
        <div className="h-5 w-4/5 bg-white/75" />
        <div className="mt-2 h-3 w-3/5 bg-white/[0.2]" />
      </div>
      <div className="absolute right-5 top-20 grid w-28 gap-2">
        <div className="h-px bg-white/25" />
        <div className="h-px bg-white/[0.16]" />
        <div className="h-px w-2/3 bg-cyan-300/70" />
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Портфолио"
            title="Примеры направлений"
            description="Несколько сценариев, под которые можно собрать сайт: услуги, компания, заявки и понятная структура."
          />
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {portfolioProjects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 45}>
              <article className="group grid gap-8 py-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
                <ProjectPlaceholder title={project.title} direction={project.direction} icon={project.icon} />
                <div>
                  <p className="text-sm font-medium text-cyan-300">
                    {String(index + 1).padStart(2, "0")} / {project.direction}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="border-b border-white/15 px-0 py-1 text-xs text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="focus-ring mt-6 inline-flex items-center gap-2 border-b border-cyan-100/35 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200 hover:text-white"
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
