// models/AuditLog.js
import mongoose from "mongoose";
const AuditLogSchema = new mongoose.Schema({
  actor: { type: String, default: "system" },
  action: { type: String, required: true },
  target: { type: String },
  metadata: { type: Object, default: {} },
  level: { type: String, enum: ["info","warn","error"], default: "info" },
}, { timestamps: true });
export default mongoose.models.AuditLog || mongoose.model("AuditLog", AuditLogSchema);
