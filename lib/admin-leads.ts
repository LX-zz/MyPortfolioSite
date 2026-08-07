import type { Prisma } from "@prisma/client";

import { leadStatusOptions, type LeadStatus } from "@/types/lead";

export type LeadFilters = {
  q: string;
  status?: LeadStatus;
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

function readSearchValue(source: URLSearchParams | SearchParamsRecord, key: string) {
  if (source instanceof URLSearchParams) {
    return source.get(key) ?? undefined;
  }

  const value = source[key];
  return Array.isArray(value) ? value[0] : value;
}

export function isLeadStatus(value: string): value is LeadStatus {
  return leadStatusOptions.includes(value as LeadStatus);
}

export function parseLeadFilters(source: URLSearchParams | SearchParamsRecord): LeadFilters {
  const rawQuery = readSearchValue(source, "q") ?? "";
  const rawStatus = readSearchValue(source, "status") ?? "";
  const q = rawQuery.trim().slice(0, 120);

  return {
    q,
    status: isLeadStatus(rawStatus) ? rawStatus : undefined,
  };
}

export function createLeadWhere(filters: LeadFilters): Prisma.LeadWhereInput {
  const where: Prisma.LeadWhereInput = {};

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.q) {
    where.OR = [
      { name: { contains: filters.q } },
      { phone: { contains: filters.q } },
      { telegram: { contains: filters.q } },
      { service: { contains: filters.q } },
      { budget: { contains: filters.q } },
      { comment: { contains: filters.q } },
    ];
  }

  return where;
}

export function createAdminLeadsPath(filters: LeadFilters) {
  const params = new URLSearchParams();

  if (filters.q) {
    params.set("q", filters.q);
  }

  if (filters.status) {
    params.set("status", filters.status);
  }

  const query = params.toString();
  return query ? `/admin/leads?${query}` : "/admin/leads";
}

export function createAdminLeadsExportPath(filters: LeadFilters) {
  return createAdminLeadsPath(filters).replace("/admin/leads", "/api/admin/leads/export");
}
