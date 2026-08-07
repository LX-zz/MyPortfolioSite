"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-100/10 bg-[#05080a]/[0.78] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3" aria-label="2К Digital">
          <span className="grid size-10 place-items-center rounded-lg border border-cyan-100/20 bg-white/[0.03] text-sm font-black text-cyan-50 shadow-[0_0_34px_rgba(103,232,249,0.12)] backdrop-blur">
            2К
          </span>
          <span className="text-lg font-semibold text-white/90">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/[0.04] hover:text-cyan-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#lead-form"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-cyan-100/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-cyan-50 shadow-[0_14px_46px_rgba(103,232,249,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/10"
          >
            Обсудить проект
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring inline-grid size-11 place-items-center rounded-md border border-cyan-100/10 text-white transition hover:border-cyan-200/40 hover:bg-white/5 lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-cyan-100/10 bg-[#05080a] transition-[max-height,opacity] duration-300 lg:hidden",
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page grid gap-2 py-5" aria-label="Мобильная навигация">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            className="focus-ring rounded-md px-3 py-3 text-base font-medium text-neutral-200 transition hover:bg-white/5 hover:text-cyan-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setIsOpen(false)}
            className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-100/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-50"
          >
            Обсудить проект
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
