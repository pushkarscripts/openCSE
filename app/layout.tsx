// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "openCSE",
  description: "Free and Open Documentations for CSE subjects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* centralize body classes here */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen bg-[#1B0D00] text-[#FAE8D7]`}
      >
        {children}
      </body>
    </html>
  );
}
