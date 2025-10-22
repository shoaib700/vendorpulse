// models/Order.js
import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  qty: { type: Number, default: 1 },
  buyPrice: Number,
  sellPrice: Number,
  fees: Number,
  status: { type: String, enum: ["pending","ordered","shipped","delivered","cancelled"], default: "pending" },
  notes: String,
}, { timestamps: true });
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
