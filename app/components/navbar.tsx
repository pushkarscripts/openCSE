"use client";
import Link from "next/link";
import { Road_Rage } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ["subjects", "contribute", "sponsor"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const linkClass = (section: string) => {
    const isActive = isHomePage && activeSection === section;
    return `transition-colors duration-200 cursor-pointer ${isActive
      ? "text-[#d2b48c] border-b-2 border-[#d2b48c] pb-0.5"
      : "hover:text-[#d2b48c]"
      }`;
  };

  const navLinks = (onClickFn?: () => void) => (
    <>
      <li>
        <Link href="/" onClick={onClickFn} className={linkClass("home")}>
          HOME
        </Link>
      </li>
      <li>
        <Link href="/#subjects" onClick={onClickFn} className={linkClass("subjects")}>
          SUBJECTS
        </Link>
      </li>
      <li>
        <Link href="/#contribute" onClick={onClickFn} className={linkClass("contribute")}>
          CONTRIBUTE
        </Link>
      </li>
      <li>
        <Link href="/#sponsor" onClick={onClickFn} className={linkClass("sponsor")}>
          SPONSOR
        </Link>
      </li>
      <li>
        <Link
          href="/quiz"
          onClick={onClickFn}
          className="hover:text-[#d2b48c] transition-colors duration-200 cursor-pointer"
        >
          QUIZ
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed h-14 top-0 inset-x-0 z-50 flex justify-between items-center pr-6 pl-4 py-1 bg-[#1B0D00] text-white">
      <Link href="/">
        <div className="flex items-center gap-1">
          <img src="/mascot.png" alt="openCSE" className="w-8 h-11 pt-0.5" />
          <span
            className={`${roadRage.className} text-3xl`}
            style={{ color: "white", fontSize: "30px" }}
          >
            openCSE
          </span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul
        className="hidden md:flex gap-6"
        style={{
          color: "white",
          fontFamily: '"Road Rage", sans-serif',
          fontSize: "28px",
          fontWeight: 400,
        }}
      >
        {navLinks()}
        <li>
          <Link href="/bookmarks" className="hover:opacity-80 transition-opacity">
            BOOKMARKS
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block w-8 h-1 bg-white mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`block w-8 h-1 bg-white mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block w-8 h-1 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1B0D00]/95 shadow-lg transition-all duration-300 origin-top ${menuOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
          }`}
      >
        <ul
          className="flex flex-col items-center gap-4 py-4"
          style={{
            color: "white",
            fontFamily: '"Road Rage", sans-serif',
            fontSize: "28px",
            fontWeight: 400,
          }}
        >
          {navLinks(() => setMenuOpen(false))}
        </ul>
      </div>
    </nav>
  );
}