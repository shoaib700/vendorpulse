// app/api/health/route.js
export async function GET() {
  return new Response(JSON.stringify({ ok: true, service: "vendorpulse", time: new Date().toISOString() }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
