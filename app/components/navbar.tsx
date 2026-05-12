"use client";
import Link from "next/link";
import { Road_Rage } from "next/font/google";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".nav-logo", {
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".nav-link",
        {
          y: -10,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="sticky h-14 top-0 left-0 w-full z-50 flex justify-between items-center pr-6 pl-4 py-1 glass text-white"
    >
      <Link href="/">
        <div className="nav-logo flex items-center gap-1">
          <img src="/mascot.png" alt="openCSE" className="w-8 h-11 pt-0.5" />
          <span
            className={`${roadRage.className} text-3xl font-bold`}
            style={{ color: "white", fontSize: "30px" }}
          >
            openCSE
          </span>
        </div>
      </Link>
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
        <li className="nav-link">
          <Link href="/">HOME</Link>
        </li>
        <li className="nav-link">
          <Link href="/#subjects">SUBJECTS</Link>
        </li>
        <li className="nav-link">
          <Link href="/#contribute">CONTRIBUTE</Link>
        </li>
        <li className="nav-link">
          <Link href="/#sponsor">SPONSOR</Link>
        </li>
      </ul>
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
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1B0D00]/95 shadow-lg">
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
              <Link href="#subjects" onClick={() => setMenuOpen(false)}>
                SUBJECTS
              </Link>
            </li>
            <li>
              <Link href="#contribute" onClick={() => setMenuOpen(false)}>
                CONTRIBUTE
              </Link>
            </li>
            <li>
              <Link href="#sponsor" onClick={() => setMenuOpen(false)}>
                SPONSOR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
