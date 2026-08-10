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
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Reveal key={plan.title} delay={index * 60}>
                <article
                  className={cn(
                    "h-full px-0 py-7 lg:border-r lg:border-white/10 lg:px-7",
                    plan.highlighted
                      ? "bg-gradient-to-b from-cyan-300/[0.055] to-transparent"
                      : "",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={cn(
                        "grid size-12 place-items-center border",
                        plan.highlighted
                          ? "border-cyan-200/25 text-cyan-200"
                          : "border-violet-300/20 text-violet-200",
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    {plan.highlighted ? (
                      <span className="border-b border-cyan-200/45 px-1 py-1 text-xs font-bold text-cyan-50">
                        Популярно
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{plan.title}</h3>
                  <p className="mt-3 text-3xl font-bold text-cyan-100">{plan.price}</p>
                  <ul className="mt-7 grid gap-3">
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
                    className={cn(
                      "focus-ring mt-8 inline-flex w-full items-center justify-center border px-5 py-3 text-sm font-semibold transition",
                      plan.highlighted
                        ? "border-cyan-100/25 bg-cyan-300/[0.08] text-cyan-50 hover:border-cyan-200/45 hover:bg-cyan-300/[0.14]"
                        : "border-white/[0.12] text-white hover:border-violet-300/40 hover:bg-violet-300/10",
                    )}
                  >
                    Обсудить тариф
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
