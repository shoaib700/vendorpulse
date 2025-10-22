// app/layout.jsx
import '../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vendorpulse",
  description: "Dropshipping & affiliate intelligence under Travel in UK Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
