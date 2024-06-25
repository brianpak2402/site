/* eslint-disable new-cap */
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import ShaderBackground from "@components/ui/ShaderBackground";
import Header from "@containers/Header";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

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
    <html
      className="dark"
      lang="en"
    >
      <body className="bg-black leading-relaxed text-white antialiased selection:bg-violet-800 selection:text-white">
        <div className={`${lora.className} relative`}>
          <ShaderBackground />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
