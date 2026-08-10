import { qualityPoints } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="container-page grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
      <Reveal>
        <div className="py-8">
          <p className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            Один человек ведет проект целиком: от смысла первого экрана до заявки в Telegram.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-neutral-200">
            {qualityPoints.slice(0, 3).map((point, index) => (
              <span key={point.label} className="inline-flex items-center gap-3">
                <span className={index % 2 === 0 ? "text-cyan-200" : "text-violet-200"}>/</span>
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <SectionHeading eyebrow="Обо мне" title="Работаю лично и спокойно веду проект до запуска" />
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          Меня зовут Кирилл. Я собираю современные сайты для бизнеса: продумываю структуру,
          аккуратно верстаю, подключаю форму заявок и готовлю проект к запуску.
        </p>
      </Reveal>
    </section>
  );
}
