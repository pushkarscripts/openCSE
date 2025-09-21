"use client";
import Link from "next/link";
import { Road_Rage } from "next/font/google";
import { useState } from "react";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function NavbarShadow() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 flex justify-center items-center pr-6 pl-4 py-1 bg-[#000000] text-[#000000]">
      <div className="flex items-center justify-center gap-1">
        {/* <img src="/mascot.png" alt="openCSE" className="w-8 h-11 pt-0.5" /> */}
        {/* <img src="/logo.png" alt="openCSE" className="w-38 h-17" /> */}
        <span
          className={`${roadRage.className} text-3xl flex justify-center font-bold`}
          style={{ color: "white", fontSize: "35px" }}
        >
          You scrolled too far… and bumped into the navigation bar. Ouch.
        </span>
      </div>
    </nav>
  );
}
