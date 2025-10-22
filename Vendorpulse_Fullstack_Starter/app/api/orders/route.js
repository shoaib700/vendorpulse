// app/api/orders/route.js
import { dbConnect } from "@/lib/db";
import Order from "@/models/Order";
export async function GET() {
  try { await dbConnect(); const orders = await Order.find().sort({ createdAt: -1 }).limit(100).lean(); return Response.json({ ok: true, orders }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await dbConnect(); const body = await req.json(); const created = await Order.create(body); return Response.json({ ok: true, order: created }); }
  catch (err) { return Response.json({ ok: false, error: err.message }, { status: 500 }); }
}
