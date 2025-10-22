// app/api/audit/route.js
import { dbConnect } from "@/lib/db";
import AuditLog from "@/models/AuditLog";
export async function GET() {
  try { await dbConnect(); const rows = await AuditLog.find().sort({ createdAt: -1 }).limit(200).lean(); return Response.json({ ok: true, rows }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await dbConnect(); const body = await req.json(); const row = await AuditLog.create(body); return Response.json({ ok: true, row }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
