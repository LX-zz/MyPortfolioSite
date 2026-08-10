import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteExamples } from "@/config/examples";
import type { SiteExample } from "@/config/examples";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function getPortfolioLook(slug: string) {
  if (slug === "business-card") {
    return {
      shell: "bg-[#f0e5d4] text-[#241812]",
      eyebrow: "text-[#7a6656]",
      title: "[font-family:Georgia,serif] font-normal text-[#241812]",
      description: "text-[#6b5a4d]",
      tag: "text-[#7a6656]",
      link: "text-[#241812] hover:text-black",
      line: "bg-[#241812]/35 group-hover:bg-[#241812]",
    };
  }

  if (slug === "company-site") {
    return {
      shell: "bg-[#f6f8f4] text-[#122633]",
      eyebrow: "text-[#2f7d69]",
      title: "font-black text-[#122633]",
      description: "text-[#5d707a]",
      tag: "text-[#4b606a]",
      link: "text-[#122633] hover:text-black",
      line: "bg-[#2f7d69]/45 group-hover:bg-[#122633]",
    };
  }

  return {
    shell: "bg-[#041012] text-white",
    eyebrow: "text-cyan-200",
    title: "font-semibold text-white",
    description: "text-white/62",
    tag: "text-cyan-100/72",
    link: "text-cyan-100 hover:text-white",
    line: "bg-cyan-100/45 group-hover:bg-white",
  };
}

function PortfolioPreview({ example }: { example: SiteExample }) {
  if (example.slug === "business-card") {
    return (
      <div className="relative min-h-72 overflow-hidden bg-[#dfd1bd] p-6 [font-family:Georgia,serif]">
        <div className="absolute right-6 top-6 h-36 w-24 bg-[#241812]" />
        <div className="absolute bottom-8 left-8 h-40 w-32 bg-[#b89576]" />
        <div className="absolute bottom-10 right-16 h-24 w-40 bg-[#f7eee0]" />
        <p className="relative max-w-xs text-4xl leading-[1.02] text-[#241812]">Orlova Studio</p>
        <p className="relative mt-6 max-w-[12rem] text-sm leading-6 text-[#6b5a4d]">
          личная подача, спокойная типографика, ощущение вкуса
        </p>
      </div>
    );
  }

  if (example.slug === "company-site") {
    return (
      <div className="min-h-72 bg-[#122633] p-6 text-white">
        <div className="grid grid-cols-2 gap-px bg-white/12">
          {["54", "5 лет", "смета", "этапы"].map((item) => (
            <div key={item} className="bg-[#122633] p-5">
              <p className="text-3xl font-black">{item}</p>
              <div className="mt-5 h-px w-full bg-[#9ee6cc]/35" />
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3">
          <span className="h-3 w-3/4 bg-white/18" />
          <span className="h-3 w-1/2 bg-white/18" />
          <span className="h-3 w-2/3 bg-[#9ee6cc]/45" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-72 overflow-hidden bg-[#061719] p-6 text-white">
      <div className="absolute left-8 right-8 top-16 h-px bg-cyan-100/45" />
      <div className="absolute left-4 right-4 top-32 h-28 rounded-[50%] border-t border-cyan-100/28 bg-cyan-100/[0.06]" />
      <div className="absolute -right-16 -top-16 size-64 rounded-full border border-cyan-100/18" />
      <div className="relative">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
          Prime Detail
        </p>
        <p className="mt-24 max-w-xs text-5xl font-semibold leading-none">24ч до заявки</p>
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
            eyebrow="Примеры"
            title="Три разных сайта, а не один шаблон"
            description="Сайт для заявок, личная визитка и полноценный сайт компании отличаются логикой, подачей, цветом и темпом страницы."
          />
        </Reveal>

        <div className="mt-14 grid gap-8">
          {siteExamples.map((example, index) => {
            const look = getPortfolioLook(example.slug);

            return (
              <Reveal key={example.slug} delay={index * 45}>
                <article className={cn("group grid overflow-hidden lg:grid-cols-[0.62fr_0.38fr]", look.shell)}>
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.16fr_1fr] lg:p-10">
                    <div className="flex items-center gap-3 lg:block">
                      <span className="font-display text-sm opacity-55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("h-px w-10 transition group-hover:w-14 lg:mt-5 lg:block", look.line)} />
                    </div>

                    <div>
                      <p className={cn("text-sm font-semibold", look.eyebrow)}>{example.format}</p>
                      <h3 className={cn("mt-4 max-w-3xl text-3xl leading-tight md:text-5xl", look.title)}>
                        {example.title}
                      </h3>
                      <p className={cn("mt-5 max-w-2xl text-sm leading-7", look.description)}>
                        {example.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        {[example.result, ...example.bestFor.slice(0, 2)].map((item) => (
                          <span key={item} className={cn("text-xs", look.tag)}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/examples/${example.slug}`}
                        className={cn(
                          "focus-ring mt-8 inline-flex items-center gap-3 text-sm font-bold transition",
                          look.link,
                        )}
                      >
                        Открыть пример
                        <span className={cn("h-px w-8 transition group-hover:w-12", look.line)} />
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>

                  <PortfolioPreview example={example} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
