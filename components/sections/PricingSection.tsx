import { Check } from "lucide-react";

import { pricingPlans } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Цены"
            title="Понятные стартовые цены"
            description="Итоговая стоимость рассчитывается после обсуждения проекта."
          />
        </Reveal>

        <div className="mt-12 grid border-y border-white/10 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 60}>
              <article
                className={cn(
                  "h-full px-0 py-7 lg:border-r lg:border-white/10 lg:px-7",
                  plan.highlighted ? "bg-gradient-to-b from-cyan-300/[0.055] to-transparent" : "",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={cn(
                      "flex items-center gap-3 text-sm",
                      plan.highlighted ? "text-cyan-100" : "text-violet-100",
                    )}
                  >
                    <span className="font-display text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "h-px w-10",
                        plan.highlighted ? "bg-cyan-100/55" : "bg-violet-200/40",
                      )}
                    />
                    <span
                      className={cn(
                        "size-1.5",
                        plan.highlighted
                          ? "bg-cyan-100 shadow-[0_0_18px_rgba(140,247,255,0.75)]"
                          : "bg-violet-200 shadow-[0_0_18px_rgba(199,182,255,0.58)]",
                      )}
                    />
                  </div>
                  {plan.highlighted ? (
                    <span className="font-display border-b border-cyan-200/45 px-1 py-1 text-xs font-bold text-cyan-50">
                      Популярно
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{plan.title}</h3>
                <p className="font-display mt-3 text-3xl font-semibold text-cyan-100">{plan.price}</p>
                <ul className="mt-7 grid gap-3">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-3 text-base leading-7 text-neutral-300">
                      <Check
                        className={cn(
                          "mt-1 size-4 shrink-0",
                          plan.highlighted ? "text-cyan-200" : "text-violet-200",
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead-form"
                  className={cn(
                    "focus-ring font-display mt-8 inline-flex w-full items-center justify-center border px-5 py-3 text-sm font-semibold transition",
                    plan.highlighted
                      ? "border-cyan-100/25 bg-cyan-300/[0.08] text-cyan-50 hover:border-cyan-200/45 hover:bg-cyan-300/[0.14]"
                      : "border-white/[0.12] text-white hover:border-violet-300/40 hover:bg-violet-300/10",
                  )}
                >
                  Обсудить тариф
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
