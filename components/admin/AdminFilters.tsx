import Link from "next/link";
import { Download, RotateCcw, Search } from "lucide-react";

import { createAdminLeadsExportPath, type LeadFilters } from "@/lib/admin-leads";
import { leadStatusOptions } from "@/types/lead";

type AdminFiltersProps = {
  filters: LeadFilters;
};

export function AdminFilters({ filters }: AdminFiltersProps) {
  const hasFilters = Boolean(filters.q || filters.status);

  return (
    <section className="mb-6 rounded-lg border border-white/10 bg-neutral-950/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
      <form method="get" className="grid gap-3 lg:grid-cols-[1fr_220px_auto_auto] lg:items-end">
        <label>
          <span className="mb-2 block text-sm font-medium text-neutral-300">Поиск</span>
          <input
            name="q"
            defaultValue={filters.q}
            className="focus-ring h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm text-white transition placeholder:text-neutral-500 hover:border-white/20 focus:border-cyan-200"
            placeholder="Имя, телефон, Telegram, комментарий"
          />
        </label>

        <label>
          <span className="mb-2 block text-sm font-medium text-neutral-300">Статус</span>
          <select
            name="status"
            defaultValue={filters.status ?? ""}
            className="focus-ring h-12 w-full rounded-md border border-white/10 bg-neutral-900 px-4 text-sm text-white transition hover:border-white/20 focus:border-cyan-200"
          >
            <option value="">Все заявки</option>
            {leadStatusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <button className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-cyan-100/25 bg-cyan-300/10 px-5 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/45 hover:bg-cyan-300/[0.16]">
          <Search className="size-4" />
          Найти
        </button>

        <div className="grid grid-cols-2 gap-3 lg:flex">
          <Link
            href={hasFilters ? "/admin/leads" : "#"}
            aria-disabled={!hasFilters}
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold text-neutral-200 transition hover:border-white/20 hover:bg-white/[0.04] aria-disabled:pointer-events-none aria-disabled:opacity-45"
          >
            <RotateCcw className="size-4" />
            Сброс
          </Link>
          <Link
            href={createAdminLeadsExportPath(filters)}
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-violet-200/25 bg-violet-300/10 px-4 text-sm font-semibold text-violet-50 transition hover:border-violet-200/45 hover:bg-violet-300/[0.16]"
          >
            <Download className="size-4" />
            CSV
          </Link>
        </div>
      </form>
    </section>
  );
}
