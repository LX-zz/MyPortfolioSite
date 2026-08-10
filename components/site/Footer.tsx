import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-100/10 bg-[#05080a]/[0.72] py-10">
      <div className="container-page grid gap-9 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-baseline gap-3">
            <span className="text-lg font-semibold text-white/90">{siteConfig.name}</span>
            <span className="h-px w-10 bg-cyan-200/35" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">{siteConfig.tagline}</p>
          <p className="mt-6 text-sm text-neutral-500">© {year} 2К Digital</p>
        </div>

        <nav className="grid gap-3 text-sm" aria-label="Навигация в подвале">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="text-neutral-300 transition hover:text-cyan-100">
              {item.label}
            </a>
          ))}
          <Link href="/privacy" className="text-neutral-300 transition hover:text-cyan-100">
            Политика конфиденциальности
          </Link>
          <Link href="/consent" className="text-neutral-300 transition hover:text-cyan-100">
            Согласие на обработку данных
          </Link>
        </nav>

        <address className="not-italic">
          <div className="grid gap-3 text-sm text-neutral-300">
            <a
              href={siteConfig.contacts.telegramUrl}
              className="inline-flex items-center gap-2 transition hover:text-cyan-100"
            >
              <MessageCircle className="size-4 text-cyan-300" />
              {siteConfig.contacts.telegram}
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="inline-flex items-center gap-2 transition hover:text-cyan-100"
            >
              <Mail className="size-4 text-cyan-300" />
              {siteConfig.contacts.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-cyan-300" />
              {siteConfig.contacts.city}, {siteConfig.contacts.workTime}
            </span>
          </div>
        </address>
      </div>
    </footer>
  );
}
