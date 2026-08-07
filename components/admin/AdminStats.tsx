import Link from "next/link";
import { Circle, Clock3, ListChecks, XCircle } from "lucide-react";

import { createAdminLeadsPath, type LeadFilters } from "@/lib/admin-leads";
import { cn } from "@/lib/utils";
import { leadStatusOptions, type LeadStatus } from "@/types/lead";

type AdminStatsProps = {
  filters: LeadFilters;
  filteredCount: number;
  statusCounts: Record<LeadStatus, number>;
  totalCount: number;
};

const statusMeta: Record<LeadStatus, { icon: typeof Circle; tone: string }> = {
  Новая: {
    icon: Circle,
    tone: "text-cyan-200",
  },
  "В работе": {
    icon: Clock3,
    tone: "text-violet-200",
  },
  Завершена: {
    icon: ListChecks,
    tone: "text-emerald-200",
  },
  Отказ: {
    icon: XCircle,
    tone: "text-red-200",
  },
};

export function AdminStats({ filters, filteredCount, statusCounts, totalCount }: AdminStatsProps) {
  return (
    <section className="mb-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      <Link
        href={createAdminLeadsPath({ q: filters.q })}
        className={cn(
          "focus-ring rounded-lg border p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.04]",
          filters.status
            ? "border-white/10 bg-neutral-950/70 text-neutral-300"
            : "border-cyan-200/30 bg-cyan-300/10 text-white",
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">Всего</p>
        <p className="mt-3 text-3xl font-semibold">{totalCount}</p>
        <p className="mt-1 text-xs text-neutral-500">По фильтру: {filteredCount}</p>
      </Link>

      {leadStatusOptions.map((status) => {
        const Icon = statusMeta[status].icon;
        const isActive = filters.status === status;

        return (
          <Link
            key={status}
            href={createAdminLeadsPath({ q: filters.q, status })}
            className={cn(
              "focus-ring rounded-lg border p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.04]",
              isActive ? "border-cyan-200/30 bg-cyan-300/10 text-white" : "border-white/10 bg-neutral-950/70 text-neutral-300",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{status}</p>
              <Icon className={cn("size-4", statusMeta[status].tone)} />
            </div>
            <p className="mt-3 text-3xl font-semibold">{statusCounts[status]}</p>
            <p className="mt-1 text-xs text-neutral-500">Нажми, чтобы отфильтровать</p>
          </Link>
        );
      })}
    </section>
  );
}
