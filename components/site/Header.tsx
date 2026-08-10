"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#05080a]/[0.48] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring group flex items-baseline gap-3" aria-label="2К Digital">
          <span className="text-xl font-semibold text-white transition group-hover:text-cyan-100">
            {siteConfig.name}
          </span>
          <span className="hidden h-px w-10 bg-cyan-200/40 transition group-hover:w-14 sm:block" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring px-3 py-2 text-sm font-medium text-neutral-300 transition hover:text-cyan-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#lead-form"
          className="focus-ring inline-flex items-center gap-2 border-b border-cyan-200/45 px-1 py-2 text-sm font-semibold text-cyan-50 transition hover:border-white hover:text-white"
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
          className="focus-ring inline-grid size-11 place-items-center text-white transition hover:text-cyan-50 lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-[#05080a]/95 transition-[max-height,opacity] duration-300 lg:hidden",
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-page grid gap-2 py-5" aria-label="Мобильная навигация">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="focus-ring px-0 py-3 text-base font-medium text-neutral-200 transition hover:text-cyan-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setIsOpen(false)}
            className="focus-ring mt-2 inline-flex items-center gap-2 py-3 text-sm font-semibold text-cyan-50"
          >
            Обсудить проект
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
