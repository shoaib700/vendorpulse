import "../styles/globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vendorpulse",
  description: "Full-stack starter | Next.js + Tailwind + MongoDB | Travel in UK Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-50 text-gray-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
