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
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
            Website Not Available
          </h1>
          <p className="w-1/2 m-2 text-center">
            We are currently in the process of transforming this website to
            provide you with a better experience on this website. We'll be back
            soon before the 2024 year. Thank you for your patience! We hope to
            see you again soon.
          </p>
        </div>
      </body>
    </html>
  );
}
