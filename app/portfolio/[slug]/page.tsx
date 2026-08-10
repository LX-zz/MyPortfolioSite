import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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

  return (
    <main className="container-page min-h-[78vh] pt-32">
      <Link
        href="/#portfolio"
        className="focus-ring inline-flex items-center gap-2 py-3 text-sm font-semibold text-neutral-200 transition hover:text-cyan-50"
      >
        <ArrowLeft className="size-4" />
        Назад к портфолио
      </Link>

      <section className="mt-12 grid gap-12 lg:grid-cols-[0.74fr_0.26fr] lg:items-start">
        <div>
          <p className="font-display text-sm font-semibold text-cyan-50">
            {project.direction}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-sm text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-3 text-sm font-medium text-cyan-50">
            <span className="h-px w-10 bg-cyan-100/45" />
            Демонстрационный проект находится в разработке
          </p>
        </div>

        <div aria-hidden="true" className="relative hidden min-h-80 lg:block">
          <div className="absolute left-0 top-10 h-px w-72 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
          <div className="absolute left-8 top-32 h-px w-64 rotate-[-18deg] bg-gradient-to-r from-transparent via-violet-100/35 to-transparent" />
          <div className="absolute left-28 top-20 size-2 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(140,247,255,0.7)]" />
          <div className="absolute bottom-20 right-12 text-[8rem] font-semibold leading-none text-white/[0.035]">
            2К
          </div>
        </div>
      </section>
    </main>
  );
}
