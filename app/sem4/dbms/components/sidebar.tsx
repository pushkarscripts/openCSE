"use client";

import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
  }, []);

  // Combined chapters (DBMS + ADA ready structure)
  const chapters = [
    { id: "ch0", title: "Course Outline" },
    { id: "ch1", title: "Introduction" },
    { id: "ch2", title: "Core Concepts" },
    { id: "ch3", title: "Advanced Topics" },
  ];

  const quizHref = "/quiz";
  const quizActive = pathname.startsWith("/quiz");

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 md:hidden bg-black/50 z-30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div className="flex sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-[50px] md:w-auto pointer-events-none md:pointer-events-auto">

        {/* Sidebar */}
        <aside
          className={`h-full shrink-0 bg-[#fae8d7] text-[#1B0D00] flex flex-col transition-all duration-300 pointer-events-auto ${
            open ? "w-64 border-r-2" : "w-0 overflow-hidden"
          }`}
        >
          {/* Heading */}
          <h2
            className="text-2xl p-3 border-b-4 bg-[#cebb9c]"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            Chapters
          </h2>

          {/* Chapters */}
          <ul className="flex-1 overflow-y-auto">
            {chapters.map((ch) => {
              const active = pathname.includes(ch.id);

              return (
                <li key={ch.id}>
                  <Link
                    href={`/sem4/${ch.id}`}
                    className={`block px-3 py-2 text-xl transition ${
                      active ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
                    } ${righteous.className}`}
                  >
                    {ch.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quiz Section */}
          <div className="border-t-4 border-[#1B0D00]">
            <Link
              href={quizHref}
              className={`block px-3 py-3 text-xl transition ${
                quizActive ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
              } ${righteous.className}`}
            >
              Take Quiz
            </Link>
          </div>
        </aside>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 pointer-events-auto bg-[#ffdda7] h-full w-[50px] text-[#1B0D00] text-center font-semibold text-2xl border-l-4 rounded-r-2xl border-[#1B0D00] flex items-center justify-center"
          style={{
            fontFamily: "Rockwell, Serif, serif",
            boxShadow: open ? "4px 0 15px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <p className="leading-5">
            C<br />H<br />A<br />P<br />T<br />E<br />R<br />S
          </p>
        </button>
      </div>
    </>
  );
}