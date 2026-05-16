// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0,
  maximumScale: 5,
  userScalable: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#1B0D00] text-[#FAE8D7]`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}