import { NextResponse } from "next/server";

import { getAdminPassword, safeCompare, setAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const expectedPassword = getAdminPassword();

  if (!expectedPassword) {
    return NextResponse.redirect(new URL("/admin/leads?error=not-configured", request.url), 303);
  }

  if (!safeCompare(password, expectedPassword)) {
    return NextResponse.redirect(new URL("/admin/leads?error=wrong-password", request.url), 303);
  }

  await setAdminSession();

  return NextResponse.redirect(new URL("/admin/leads", request.url), 303);
}
