// app/api/inventory/route.js
import { dbConnect } from "@/lib/db";
import InventoryItem from "@/models/InventoryItem";
export async function GET() {
  try { await dbConnect(); const items = await InventoryItem.find().limit(100).lean(); return Response.json({ ok: true, items }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await dbConnect(); const body = await req.json(); const created = await InventoryItem.create(body); return Response.json({ ok: true, item: created }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
