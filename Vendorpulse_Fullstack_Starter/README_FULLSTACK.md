# Vendorpulse — Full‑stack Starter (GPT‑5 build)
Generated: 2025-09-25T05:19:52.461629Z

Includes:
- Next.js 14 + Tailwind (App Router)
- MongoDB (Mongoose) connection helper
- Models: Product, InventoryItem, Order, AuditLog
- API routes: /api/health, /api/inventory, /api/orders, /api/audit, /api/products/sync
- Legal footer under Travel in UK Ltd (static Snow Leopard badge)

Run locally:
```
npm i
cp .env.example .env.local  # set MONGODB_URI
npm run dev
```
Deploy to Vercel:
- Import project → add env vars → Deploy

Notes:
- /api/products/sync uses stubbed sample fetchers; replace utils/affiliates.js with real APIs.
