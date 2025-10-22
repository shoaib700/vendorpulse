// app/api/products/sync/route.js
import { dbConnect } from "@/lib/db";
import Product from "@/models/Product";
import { fetchAmazonSample, fetchEbaySample, fetchTemuSample } from "@/utils/affiliates";

export async function POST() {
  try {
    await dbConnect();
    const sources = [
      ...(await fetchAmazonSample()),
      ...(await fetchEbaySample()),
      ...(await fetchTemuSample()),
    ];
    const ops = sources.map((p) => ({
      updateOne: {
        filter: { source: p.source, sourceId: p.sourceId },
        update: { $set: p },
        upsert: true,
      },
    }));
    if (ops.length) await Product.bulkWrite(ops);
    const count = await Product.countDocuments();
    return Response.json({ ok: true, synced: sources.length, total: count });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
