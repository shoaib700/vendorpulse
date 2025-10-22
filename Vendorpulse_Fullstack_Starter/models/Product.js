// models/Product.js
import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  source: { type: String, enum: ["amazon","ebay","temu"], index: true },
  sourceId: { type: String, index: true },
  title: String,
  url: String,
  image: String,
  price: Number,
  currency: { type: String, default: "USD" },
  fees: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
