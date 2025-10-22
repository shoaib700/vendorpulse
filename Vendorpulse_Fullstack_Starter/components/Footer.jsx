// components/Footer.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-2">
          <Image src="/snow-leopard-badge.png" alt="Snow Leopard Badge" width={28} height={28} className="rounded-full" />
          <p>© 2025 Travel in UK Ltd | Vendorpulse. All rights reserved.</p>
        </div>
        <button onClick={() => setShowDisclaimer(!showDisclaimer)} className="text-blue-400 hover:text-blue-200">
          {showDisclaimer ? "Hide Disclaimer" : "Show Disclaimer"}
        </button>
        {showDisclaimer && (
          <div className="mt-2 bg-gray-800 p-4 rounded-lg text-left text-xs leading-relaxed max-w-lg">
            <p>
              Vendorpulse is a platform owned and operated by <strong>Travel in UK Ltd</strong>.
              All content, trademarks, and intellectual property are protected under UK and international laws.
              Unauthorized reproduction, distribution, or use of this platform is strictly prohibited.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
