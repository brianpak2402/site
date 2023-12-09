import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@containers/Header";
import "./globals.css";

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Brian Pak's Personal Portfolio Website",
  title: "Brian Pak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black leading-relaxed text-white antialiased selection:bg-stone-800 selection:text-white ${inter.className}`}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background:
              "radial-gradient(600px at 283px 223px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <>{children}</>
          </div>
        </div>
      </body>
    </html>
  );
}
