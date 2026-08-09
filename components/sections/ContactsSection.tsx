import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactsSection() {
  return (
    <section id="contacts" className="border-y border-cyan-100/10 bg-[#061014]/[0.58] py-20">
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
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
            >
              <MessageCircle className="size-5 text-cyan-300" />
              {siteConfig.contacts.telegram}
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="focus-ring flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
            >
              <Mail className="size-5 text-cyan-300" />
              {siteConfig.contacts.email}
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <MapPin className="size-5 text-cyan-300" />
              {siteConfig.contacts.city}, {siteConfig.contacts.workTime}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-cyan-100/10 bg-[#071013]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.contacts.telegramUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cyan-100/25 bg-cyan-300/10 px-5 py-4 text-sm font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/[0.16]"
              >
                <Send className="size-4" />
                Написать в Telegram
              </a>
              <a
                href="#lead-form"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
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
