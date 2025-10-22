// models/InventoryItem.js
import mongoose from "mongoose";
const InventoryItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  sku: String,
  qty: { type: Number, default: 0 },
  location: String,
  reorderLevel: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.models.InventoryItem || mongoose.model("InventoryItem", InventoryItemSchema);
