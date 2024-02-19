"use client";

import { Sora } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import PageAnimatePresence from "./components/PageAnimatePresence";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`page bg-mainbg text-white ${sora.variable} font-sora relative`}
      >
        <Nav />
        <Header />
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </body>
    </html>
  );
}
