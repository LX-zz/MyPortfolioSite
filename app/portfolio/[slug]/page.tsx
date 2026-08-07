import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, ExternalLink } from "lucide-react";

import { portfolioProjects, siteConfig } from "@/config/site";

type PortfolioPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — 2К Digital`,
      description: project.description,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
    },
  };
}

export default async function PortfolioProjectPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="container-page min-h-[78vh] pt-32">
      <Link
        href="/#portfolio"
        className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-neutral-200 transition hover:border-cyan-200/40 hover:bg-white/5"
      >
        <ArrowLeft className="size-4" />
        Назад к портфолио
      </Link>

      <section className="mt-10 grid gap-10 rounded-lg border border-white/10 bg-neutral-950/[0.86] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-md border border-cyan-200/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-50">
            <Icon className="size-4" />
            {project.direction}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-lg border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm font-medium text-cyan-50">
            <Clock3 className="size-4" />
            Демонстрационный проект находится в разработке
          </p>
        </div>

        <div
          role="img"
          aria-label={`Графическая заглушка проекта ${project.title}`}
          className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#111]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.18),transparent_34%),linear-gradient(45deg,rgba(167,139,250,0.13),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
          <div className="absolute left-6 right-6 top-6 h-12 rounded-lg border border-white/10 bg-black/30" />
          <div className="absolute left-6 top-28 h-8 w-3/4 rounded bg-white/80" />
          <div className="absolute left-6 top-[168px] h-3 w-2/3 rounded bg-white/[0.16]" />
          <div className="absolute left-6 top-[200px] h-3 w-1/2 rounded bg-white/10" />
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-black/35 p-4 backdrop-blur">
                <div className="h-3 w-10 rounded bg-cyan-200/60" />
                <div className="mt-4 h-3 rounded bg-white/[0.18]" />
                <div className="mt-2 h-3 w-2/3 rounded bg-white/10" />
              </div>
            ))}
          </div>
          <ExternalLink className="absolute right-8 top-28 size-10 text-cyan-200" />
        </div>
      </section>
    </main>
  );
}
