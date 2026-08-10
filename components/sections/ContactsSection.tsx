import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 lg:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Можно начать с короткого сообщения"
            description="Опишите нишу и задачу в двух-трех предложениях."
          />
          <div className="mt-8 grid gap-4 text-neutral-300">
            <a
              href={siteConfig.contacts.telegramUrl}
              className="focus-ring flex items-center gap-3 transition hover:text-cyan-50"
            >
              <MessageCircle className="size-5 text-cyan-300" />
              {siteConfig.contacts.telegram}
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="focus-ring flex items-center gap-3 transition hover:text-cyan-50"
            >
              <Mail className="size-5 text-cyan-300" />
              {siteConfig.contacts.email}
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-cyan-300" />
              {siteConfig.contacts.city}, {siteConfig.contacts.workTime}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="max-w-xl text-2xl font-semibold leading-snug text-white">
              Быстрее всего начать с сообщения в Telegram. Если удобнее оставить бриф, форма выше отправит заявку туда же.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.contacts.telegramUrl}
                className="focus-ring group inline-flex items-center gap-3 py-4 text-sm font-bold text-cyan-50 transition hover:text-white"
              >
                <Send className="size-4" />
                Написать в Telegram
                <span className="h-px w-10 bg-cyan-100/45 transition group-hover:w-14 group-hover:bg-white" />
              </a>
              <a
                href="#lead-form"
                className="focus-ring inline-flex items-center gap-2 py-4 text-sm font-semibold text-white/80 transition hover:text-cyan-50"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
