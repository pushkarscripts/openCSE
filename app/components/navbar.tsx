"use client";
import Link from "next/link";
import { Road_Rage } from "next/font/google";
import { useState } from "react";
import SearchBar from "./search/SearchBar";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky h-auto min-h-14 top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 px-4 md:px-6 py-3 bg-[#1B0D00] text-white">
      {/* Logo and Menu Row */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/">
          <div className="flex items-center gap-1">
            <img src="/mascot.png" alt="openCSE" className="w-8 h-11 pt-0.5" />
            <span
              className={`${roadRage.className} text-3xl font-bold`}
              style={{ color: "white", fontSize: "30px" }}
            >
              openCSE
            </span>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-8 h-1 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <SearchBar />
      </div>

      {/* Desktop Menu */}
      <ul
        className="hidden md:flex gap-6 font-bold"
        style={{
          color: "white",
          textAlign: "right",
          fontFamily: '"Road Rage", sans-serif',
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/#subjects">SUBJECTS</Link>
        </li>
        <li>
          <Link href="/#contribute">CONTRIBUTE</Link>
        </li>
        <li>
          <Link href="/#sponsor">SPONSOR</Link>
        </li>
      </ul>

      {/* Mobile Search Bar */}
      <div className="flex md:hidden w-full px-2">
        <SearchBar />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#1B0D00]/95 shadow-lg">
          <ul
            className="flex flex-col items-center gap-4 py-4 font-bold"
            style={{
              color: "white",
              fontFamily: '"Road Rage", sans-serif',
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#subjects" onClick={() => setMenuOpen(false)}>
                SUBJECTS
              </Link>
            </li>
            <li>
              <Link href="/#contribute" onClick={() => setMenuOpen(false)}>
                CONTRIBUTE
              </Link>
            </li>
            <li>
              <Link href="/#sponsor" onClick={() => setMenuOpen(false)}>
                SPONSOR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
