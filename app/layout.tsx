import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Raleway } from "next/font/google";

import clsx from "clsx";
import "./globals.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Z_INDEX } from "@/constants";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(raleway.variable)}>
        <main
          className={clsx(
            "relative font-raleway flex flex-col h-[100dvh] overflow-hidden pb-8",
            "bg-dark-default text-white"
          )}
        >
          {/* header */}
          <div
            style={{ zIndex: Z_INDEX.NAME }}
            className="absolute left-4 top-2 p-8 p-8 bg-dark-default flex flex-col gap-1"
          >
            <div className="md:text-5xl text-3xl">Supaluk Jaroensuk</div>
            <div className="md:text-base text-sm font-medium">
              Frontend Developer
            </div>
          </div>
          {/* sidebar */}
          <Sidebar />
          {/* divider */}
          <div className="px-8 pt-16">
            <div className="w-full h-px bg-white"></div>
          </div>
          <div className="pt-24 h-[100dvh_-_96px] overflow-auto grow">
            {children}
          </div>
          <div className="mx-12 border-t border-white"></div>
        </main>
      </body>
    </html>
  );
}
