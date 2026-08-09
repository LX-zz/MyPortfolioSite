import { qualityPoints } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="container-page grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <Reveal>
        <div
          role="img"
          aria-label="Нейтральный графический placeholder без фотографии человека"
          className="relative min-h-[330px] overflow-hidden rounded-lg border border-cyan-100/10 bg-[#071013] shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.2),transparent_34%),linear-gradient(45deg,rgba(167,139,250,0.14),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent)]" />
          <div className="absolute left-8 top-8 rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">
            <div className="h-3 w-20 rounded bg-cyan-300" />
            <div className="mt-4 h-4 w-44 rounded bg-white/70" />
            <div className="mt-2 h-3 w-32 rounded bg-white/20" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-3">
            {qualityPoints.slice(0, 3).map((point, index) => {
              const Icon = point.icon;

              return (
                <div key={point.label} className="rounded-md border border-white/10 bg-black/35 p-3 backdrop-blur">
                  <Icon className={cn("size-5", index % 2 === 0 ? "text-cyan-300" : "text-violet-200")} />
                  <p className="mt-3 text-sm font-medium text-neutral-200">{point.label}</p>
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
