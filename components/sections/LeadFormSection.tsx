import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadFormSection() {
  return (
    <section id="lead-form" className="container-page py-20 lg:py-24">
      <div className="grid gap-12 py-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-12">
        <Reveal>
          <SectionHeading
            eyebrow="Заявка"
            title="Расскажите о вашем проекте"
            description="Достаточно имени и одного удобного способа связи."
          />
          <div className="mt-8 grid gap-4">
            {["Уточню задачу", "Оценю сроки и стартовую стоимость"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="h-px w-6 bg-cyan-100/35" />
                  {item}
                </div>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
