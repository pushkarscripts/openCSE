"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#1B0D00] text-white">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="openCSE" className="w-38 h-17" />
      </div>
      <ul className="flex gap-6 text-2xl font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#subjects">Subjects</Link></li>
        <li><Link href="#contribute">Contribute</Link></li>
        <li><Link href="#sponsor">Sponsor</Link></li>
      </ul>
    </nav>
  );
}
