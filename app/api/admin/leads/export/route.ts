import { NextResponse } from "next/server";

import { createLeadWhere, parseLeadFilters } from "@/lib/admin-leads";
import { isAdminAuthed } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const csvHeaders = ["Дата", "Имя", "Телефон", "Telegram", "Услуга", "Бюджет", "Статус", "Комментарий"];

function escapeCsvCell(value: string | null | undefined) {
  const text = value ?? "";
  return `"${text.replaceAll('"', '""')}"`;
}

function formatCsvDate(date: Date) {
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export async function GET(request: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.redirect(new URL("/admin/leads", request.url), 303);
  }

  const url = new URL(request.url);
  const filters = parseLeadFilters(url.searchParams);
  const leads = await prisma.lead.findMany({
    where: createLeadWhere(filters),
    orderBy: {
      createdAt: "desc",
    },
  });

  const rows = leads.map((lead) =>
    [
      formatCsvDate(lead.createdAt),
      lead.name,
      lead.phone,
      lead.telegram,
      lead.service,
      lead.budget,
      lead.status,
      lead.comment,
    ]
      .map(escapeCsvCell)
      .join(";"),
  );
  const csv = [csvHeaders.map(escapeCsvCell).join(";"), ...rows].join("\n");
  const fileDate = new Date().toISOString().slice(0, 10);

  return new Response(`\uFEFF${csv}`, {
    headers: {
      "Content-Disposition": `attachment; filename="2k-digital-leads-${fileDate}.csv"`,
      "Content-Type": "text/csv; charset=utf-8",
    },
  });
}
