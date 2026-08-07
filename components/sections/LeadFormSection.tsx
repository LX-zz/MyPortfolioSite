import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadFormSection() {
  return (
    <section id="lead-form" className="container-page py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Заявка"
            title="Расскажите о вашем проекте"
            description="Заполните форму, и я свяжусь с вами в ближайшее время. Достаточно указать имя и один удобный способ связи."
          />
          <div className="mt-8 grid gap-4">
            {["Быстро уточню задачу", "Подскажу подходящий формат сайта", "Оценю сроки и стартовую стоимость"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-cyan-100/10 bg-white/[0.025] p-4 text-sm text-neutral-300">
                  {item}
                </div>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-cyan-100/10 bg-[#071013]/90 p-5 shadow-[0_24px_80px_rgba(103,232,249,0.08)] sm:p-7">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
