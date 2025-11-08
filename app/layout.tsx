import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/page-transition";
import BackToTop from "@/components/back-to-top";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Easify",
  description: "Ease in. Level up. Live better. Discover small habits that lead to a better life — one step at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        {/* PageTransition wrapper for smooth page animations */}
        <div className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </div>

        {/* Back to Top button */}
        <BackToTop />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
