import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delia's Torte | Artisan Cakes & Confections — Owerri",
  description: "Bespoke birthday cakes, wedding cakes, small chops & birthday surprises in Owerri and environs. Open 24 hours. Call 0911 733 9803.",
  keywords: "cakes Owerri, birthday cake Owerri, wedding cake Imo State, small chops, Delia Torte",
  openGraph: {
    title: "Delia's Torte | Artisan Cakes — Owerri",
    description: "Your best plug for cakes and birthday surprises in Owerri.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}