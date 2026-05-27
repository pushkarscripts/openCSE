"use client";

import Link from "next/link";
import { Road_Rage } from "next/font/google";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent opening when user is typing in an input/textarea
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed h-14 top-0 inset-x-0 z-50 flex justify-between items-center pr-6 pl-4 py-1 bg-[#1B0D00] text-white border-b border-[#C7A669]/10">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-1.5 hover:opacity-90 transition">
            <img src="/mascot.png" alt="openCSE" className="w-8 h-11 pt-0.5" />
            <span
              className={`${roadRage.className} text-3xl font-bold`}
              style={{ color: "white", fontSize: "30px" }}
            >
              openCSE
            </span>
          </div>
        </Link>

        {/* Center Search Bar Trigger (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center justify-between gap-3 px-4 py-1.5 rounded-full bg-[#FAE8D7]/5 hover:bg-[#FAE8D7]/10 border border-[#C7A669]/20 hover:border-[#C7A669]/40 text-[#FAE8D7]/60 text-sm font-medium transition duration-200 cursor-pointer shadow-inner"
            style={{ fontFamily: "Rockwell, serif" }}
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#C7A669] shrink-0" />
              <span>Search syllabus or notes...</span>
            </div>
            <kbd className="hidden lg:inline-block bg-[#1B0D00]/80 border border-[#C7A669]/30 px-2 py-0.5 rounded text-[10px] text-[#C7A669] font-sans font-bold uppercase select-none tracking-widest leading-none">
              /
            </kbd>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul
            className="flex gap-6 font-bold"
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
              <Link href="/" className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#subjects" className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                SUBJECTS
              </Link>
            </li>
            <li>
              <Link href="/#contribute" className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                CONTRIBUTE
              </Link>
            </li>
            <li>
              <Link href="/#sponsor" className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                SPONSOR
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                QUIZ
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-xl bg-[#FAE8D7]/5 border border-[#C7A669]/20 text-[#FAE8D7] cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[#C7A669]" />
          </button>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
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

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-[#1B0D00]/95 shadow-lg transition-all duration-300 origin-top ${
            menuOpen 
              ? "opacity-100 scale-y-100" 
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <ul
            className="flex flex-col items-center gap-4 py-6 font-bold"
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
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#subjects" onClick={() => setMenuOpen(false)} className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                SUBJECTS
              </Link>
            </li>
            <li>
              <Link href="/#contribute" onClick={() => setMenuOpen(false)} className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                CONTRIBUTE
              </Link>
            </li>
            <li>
              <Link href="/#sponsor" onClick={() => setMenuOpen(false)} className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                SPONSOR
              </Link>
            </li>
            <li>
              <Link href="/quiz" onClick={() => setMenuOpen(false)} className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer">
                QUIZ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}