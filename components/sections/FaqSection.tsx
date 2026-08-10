import { ChevronDown } from "lucide-react";

import { faqs } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section className="container-page py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Частые вопросы"
          description="Самое важное перед стартом проекта."
        />
      </Reveal>

      <div className="mt-10 grid gap-5">
        {faqs.slice(0, 4).map((faq, index) => (
          <Reveal key={faq.question} delay={index * 35}>
            <details className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white transition hover:text-cyan-50">
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
