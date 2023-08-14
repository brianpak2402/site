import "./globals.css";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Pak",
  description: "Brian Pak's personal portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
