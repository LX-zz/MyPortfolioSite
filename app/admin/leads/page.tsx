import type { Metadata } from "next";

import { AdminFilters } from "@/components/admin/AdminFilters";
import { AdminLoginPanel } from "@/components/admin/AdminLoginPanel";
import { AdminStats } from "@/components/admin/AdminStats";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { createAdminLeadsPath, createLeadWhere, parseLeadFilters } from "@/lib/admin-leads";
import { isAdminAuthed } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { leadStatusOptions, type LeadStatus } from "@/types/lead";

export const metadata: Metadata = {
  title: "Заявки",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

type AdminLeadsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminLeadsPage({ searchParams }: AdminLeadsPageProps) {
  const params = searchParams ? await searchParams : {};
  const error = typeof params.error === "string" ? params.error : undefined;
  const authed = await isAdminAuthed();

  if (!authed) {
    return (
      <main className="container-page min-h-[76vh] pt-32">
        <AdminLoginPanel error={error} />
      </main>
    );
  }

  const filters = parseLeadFilters(params);
  const where = createLeadWhere(filters);
  const [leads, totalCount, filteredCount, groupedStatuses] = await Promise.all([
    prisma.lead.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.lead.count(),
    prisma.lead.count({ where }),
    prisma.lead.groupBy({
      by: ["status"],
      _count: {
        _all: true,
      },
    }),
  ]);
  const statusCounts = Object.fromEntries(leadStatusOptions.map((status) => [status, 0])) as Record<LeadStatus, number>;

  groupedStatuses.forEach((item) => {
    if (leadStatusOptions.includes(item.status as LeadStatus)) {
      statusCounts[item.status as LeadStatus] = item._count._all;
    }
  });
  const returnTo = createAdminLeadsPath(filters);

  return (
    <main className="container-page min-h-[76vh] pb-20 pt-32">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Админка</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Заявки с сайта</h1>
          <p className="mt-3 text-neutral-400">
            Показываю {filteredCount} из {totalCount}
          </p>
        </div>
        <form action="/api/admin/logout" method="post">
          <button className="focus-ring rounded-md border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:border-cyan-200/40 hover:bg-white/5">
            Выйти
          </button>
        </form>
      </div>

      {error === "status" ? (
        <p className="mb-4 rounded-md border border-red-300/25 bg-red-300/10 p-3 text-sm text-red-100">
          Не удалось обновить статус заявки.
        </p>
      ) : null}

      <AdminStats filters={filters} filteredCount={filteredCount} statusCounts={statusCounts} totalCount={totalCount} />
      <AdminFilters filters={filters} />
      <LeadsTable leads={leads} returnTo={returnTo} />
    </main>
  );
}
