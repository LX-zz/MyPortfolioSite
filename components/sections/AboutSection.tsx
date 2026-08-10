import { qualityPoints } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="container-page grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
      <Reveal>
        <div className="border-y border-white/10 py-8">
          <p className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            Один человек ведет проект целиком: от смысла первого экрана до заявки в Telegram.
          </p>
          <div className="mt-8 divide-y divide-white/10">
            {qualityPoints.slice(0, 3).map((point, index) => {
              const Icon = point.icon;

              return (
                <div key={point.label} className="flex items-center gap-4 py-4">
                  <Icon className={cn("size-5", index % 2 === 0 ? "text-cyan-300" : "text-violet-200")} />
                  <p className="text-sm font-medium text-neutral-200">{point.label}</p>
                </div>
              );
            })}
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
