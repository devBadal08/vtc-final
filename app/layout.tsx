import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Vestigo Insurance Brokers Pvt Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden relative">
        <Header />

        {/* ✅ HEADER SPACER – REQUIRED */}
        <div className="h-[90px]" />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">{children}</main>

        <Footer />

        {/* ✅ FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/6353703157"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat with us on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-7 h-7 md:w-8 md:h-8"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.062 3.963L0 16l4.223-1.108a7.9 7.9 0 0 0 3.77.954h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.004-3.639 2.964-6.598 6.606-6.598 1.763 0 3.42.687 4.667 1.934 1.246 1.247 1.933 2.905 1.933 4.668-.004 3.639-2.964 6.598-6.606 6.598zm3.628-4.96c-.198-.1-1.173-.58-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
