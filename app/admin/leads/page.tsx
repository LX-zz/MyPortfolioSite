import type { Metadata } from "next";

import { AdminLoginPanel } from "@/components/admin/AdminLoginPanel";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { isAdminAuthed } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

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

  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="container-page min-h-[76vh] pb-20 pt-32">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Админка</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Заявки с сайта</h1>
          <p className="mt-3 text-neutral-400">Всего заявок: {leads.length}</p>
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

      <LeadsTable leads={leads} />
    </main>
  );
}
