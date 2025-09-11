"use client";
import Link from "next/link";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#1B0D00] text-white">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="openCSE" className="w-38 h-17" />
      </div>
      <ul
        className={`flex gap-6 font-bold`}
        style={{
          color: "#FAE8D7",
          textAlign: "right",
          fontFamily: '"Road Rage", sans-serif',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        <li><Link href="/">HOME</Link></li>
        <li><Link href="#subjects">SUBJECTS</Link></li>
        <li><Link href="#contribute">CONTRIBUTE</Link></li>
        <li><Link href="#sponsor">SPONSOR</Link></li>
      </ul>
    </nav>
  );
}
