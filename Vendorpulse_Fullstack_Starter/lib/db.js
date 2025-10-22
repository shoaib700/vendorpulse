// lib/db.js
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) console.warn("[Vendorpulse] MONGODB_URI not set. API routes will run without DB.");
let cached = global._vp_mongoose;
if (!cached) cached = global._vp_mongoose = { conn: null, promise: null };
export async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "vendorpulse" }).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
