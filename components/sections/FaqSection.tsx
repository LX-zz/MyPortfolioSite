import { ChevronDown } from "lucide-react";

import { faqs } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Частые вопросы"
          description="Короткие ответы на вопросы, которые обычно появляются перед стартом разработки."
        />
      </Reveal>

      <div className="mt-10 grid gap-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 35}>
            <details className="group rounded-lg border border-white/10 bg-neutral-950/[0.82] p-5 open:border-cyan-300/[0.35]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-cyan-300 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-300">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
