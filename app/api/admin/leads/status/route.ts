import { NextResponse } from "next/server";
import { z } from "zod";

import { isAdminAuthed } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { leadStatusOptions } from "@/types/lead";

export const runtime = "nodejs";

const statusSchema = z.object({
  id: z.string().min(1),
  status: z.enum(leadStatusOptions),
});

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.redirect(new URL("/admin/leads", request.url), 303);
  }

  const formData = await request.formData();
  const parsed = statusSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    return NextResponse.redirect(new URL("/admin/leads?error=status", request.url), 303);
  }

  await prisma.lead.update({
    where: { id: parsed.data.id },
    data: { status: parsed.data.status },
  });

  return NextResponse.redirect(new URL("/admin/leads", request.url), 303);
}
