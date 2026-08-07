import type { Lead } from "@prisma/client";
import { ExternalLink, Phone } from "lucide-react";

import { leadStatusOptions } from "@/types/lead";

type LeadsTableProps = {
  leads: Lead[];
  returnTo: string;
};

function getPhoneHref(phone: string | null) {
  if (!phone) {
    return null;
  }

  const normalized = phone.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : null;
}

function getTelegramHref(telegram: string | null) {
  if (!telegram) {
    return null;
  }

  const value = telegram.trim();

  if (!value) {
    return null;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://t.me/${value.replace(/^@/, "")}`;
}

export function LeadsTable({ leads, returnTo }: LeadsTableProps) {
  if (!leads.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-neutral-950 p-8 text-center text-neutral-300">
        Заявок по текущему фильтру нет.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-neutral-950 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <table className="w-full min-w-[980px] border-collapse text-left text-sm">
        <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-neutral-400">
          <tr>
            <th className="px-4 py-4 font-semibold">Дата</th>
            <th className="px-4 py-4 font-semibold">Имя</th>
            <th className="px-4 py-4 font-semibold">Телефон</th>
            <th className="px-4 py-4 font-semibold">Telegram</th>
            <th className="px-4 py-4 font-semibold">Услуга</th>
            <th className="px-4 py-4 font-semibold">Бюджет</th>
            <th className="px-4 py-4 font-semibold">Статус</th>
            <th className="px-4 py-4 font-semibold">Комментарий</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {leads.map((lead) => {
            const phoneHref = getPhoneHref(lead.phone);
            const telegramHref = getTelegramHref(lead.telegram);

            return (
              <tr key={lead.id} className="align-top text-neutral-200">
                <td className="px-4 py-4 text-neutral-400">
                  {lead.createdAt.toLocaleString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-4 py-4 font-medium text-white">{lead.name}</td>
                <td className="px-4 py-4">
                  {phoneHref ? (
                    <a
                      href={phoneHref}
                      className="focus-ring inline-flex items-center gap-2 rounded-md text-cyan-100 transition hover:text-cyan-200"
                    >
                      <Phone className="size-4" />
                      {lead.phone}
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="px-4 py-4">
                  {telegramHref ? (
                    <a
                      href={telegramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-md text-violet-100 transition hover:text-violet-200"
                    >
                      {lead.telegram}
                      <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="px-4 py-4">{lead.service}</td>
                <td className="px-4 py-4">{lead.budget}</td>
                <td className="px-4 py-4">
                  <form action="/api/admin/leads/status" method="post" className="flex min-w-44 gap-2">
                    <input type="hidden" name="id" value={lead.id} />
                    <input type="hidden" name="returnTo" value={returnTo} />
                    <select
                      name="status"
                      defaultValue={lead.status}
                      className="focus-ring w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white"
                    >
                      {leadStatusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <button className="focus-ring rounded-md border border-cyan-100/25 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-50 transition hover:border-cyan-200/45 hover:bg-cyan-300/[0.16]">
                      OK
                    </button>
                  </form>
                </td>
                <td className="max-w-xs whitespace-pre-wrap px-4 py-4 text-neutral-300">{lead.comment || "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
