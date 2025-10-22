// app/page.jsx
export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Vendorpulse</h1>
      <p className="text-gray-600">Full‑stack starter: Next.js + Tailwind + MongoDB models + API routes. Ready for Vercel.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl p-6 border bg-white shadow-sm">
          <h2 className="font-semibold">Status</h2>
          <ul className="list-disc ml-5 text-sm mt-2 text-gray-700">
            <li>Footer (static Snow Leopard badge + collapsible disclaimer)</li>
            <li>DB connection + models stubbed</li>
            <li>Health + Inventory + Orders + Audit API routes</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 border bg-white shadow-sm">
          <h2 className="font-semibold">Next Steps</h2>
          <ol className="list-decimal ml-5 text-sm mt-2 text-gray-700">
            <li>Set MONGODB_URI in Vercel</li>
            <li>Hook up marketplace ingestors (Amazon/eBay/Temu)</li>
            <li>Connect dashboard UI to these endpoints</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
