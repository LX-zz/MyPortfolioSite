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

        <div className="mt-12 grid gap-11">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 60}>
              <article
                className={cn(
                  "group grid gap-6 py-3 lg:grid-cols-[0.16fr_0.52fr_0.32fr] lg:items-start",
                  plan.highlighted ? "text-cyan-50" : "",
                )}
              >
                <div className="flex items-center gap-3 pt-2">
                  <span className="font-display text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "h-px w-10 transition group-hover:w-14",
                      plan.highlighted ? "bg-cyan-100/65" : "bg-violet-200/40",
                    )}
                  />
                </div>

                <div>
                  <div
                    className={cn(
                      "mb-4 inline-flex items-center gap-2 text-xs",
                      plan.highlighted ? "text-cyan-100" : "text-violet-100",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5",
                        plan.highlighted
                          ? "bg-cyan-100 shadow-[0_0_18px_rgba(140,247,255,0.75)]"
                          : "bg-violet-200 shadow-[0_0_18px_rgba(199,182,255,0.58)]",
                      )}
                    />
                    {plan.highlighted ? <span className="font-display font-semibold">Популярно</span> : null}
                  </div>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">{plan.title}</h3>
                  <p className="font-display mt-3 text-3xl font-semibold text-cyan-100 md:text-4xl">{plan.price}</p>
                </div>

                <div>
                  <ul className="grid gap-2">
                    {plan.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-neutral-300">
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
                    className="focus-ring font-display mt-6 inline-flex items-center gap-3 text-sm font-semibold text-cyan-50 transition hover:text-white"
                  >
                    Обсудить тариф
                    <span className="h-px w-8 bg-cyan-100/45 transition group-hover:w-12 group-hover:bg-white" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
