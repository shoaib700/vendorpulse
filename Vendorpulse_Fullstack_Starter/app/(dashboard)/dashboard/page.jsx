// app/(dashboard)/dashboard/page.jsx
export const metadata = { title: "Dashboard | Vendorpulse" };
export default function Dashboard() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
      <div className="rounded-2xl p-6 border bg-white shadow-sm">
        <p className="text-sm text-gray-700">Coming soon: product feeds, profit simulator, audit log.</p>
      </div>
    </section>
  );
}
