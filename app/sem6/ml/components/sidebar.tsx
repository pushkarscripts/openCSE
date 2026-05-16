"use client";
import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { chapters } from "../constants";

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

  const quizSlugMap: Record<string, string> = {
    ml: "ml",
  };

  const subjectKey = pathname.split("/")[2] ?? "";
  const quizSlug = quizSlugMap[subjectKey];
  const quizHref = quizSlug ? `/quiz/${quizSlug}` : "/quiz";
  const quizActive = pathname.startsWith("/quiz");

  return (
    <>
      {/* Backdrop overlay - only on mobile when open */}
      <div 
        className={`fixed inset-0 md:hidden bg-black/50 z-30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      
      <div className="flex sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-[50px] md:w-auto pointer-events-none md:pointer-events-auto">
        {/* Sidebar */}
        <aside
          className={`h-full shrink-0 bg-[#fae8d7] text-[#1B0D00] p-0 flex flex-col transition-all duration-300 pointer-events-auto border-r-0 ${
            open ? "w-64 border-r-2 md:border-r-0" : "w-0 overflow-hidden"
          }`}
        >
        <h2
          className="flex items-center text-2xl font-normal pt-3 pl-3 mb-2 bg-[#cebb9c] text-[#1B0D00] pb-2 border-b-4 border-[#1B0D00]"
          style={{ fontFamily: "Rockwell, Serif, serif" }}
        >
          Chapters
        </h2>
        <ul className="flex-1 overflow-y-auto space-y-0">
          {chapters.map((ch) => {
            const active = pathname === `/sem6/ml/${ch.id}`;
            return (
              <li key={ch.id}>
                <Link
                  href={`/sem6/ml/${ch.id}`}
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

        <div className="border-t-4 border-[#1B0D00]">
          <h2
            className="flex items-center text-2xl font-normal pt-3 pl-3 mb-2 bg-[#cebb9c] text-[#1B0D00] pb-2"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            Quiz
          </h2>
          <Link
            href={quizHref}
            className={`flex items-center gap-2 px-3 py-2 text-xl transition ${
              quizActive ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
            } ${righteous.className}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            Take the Quiz
          </Link>
        </div>
      </aside>

      <button
        onClick={() => setOpen(!open)}
        className="toggle-sidebar shrink-0 pointer-events-auto bg-[#ffdda7] h-full w-[50px] text-[#1B0D00] text-center font-semibold text-2xl border-l-4 rounded-r-2xl border-[#1B0D00] flex items-center justify-center transition-all duration-300 md:shadow-none"
        style={{
          fontFamily: "Rockwell, Serif, serif",
          boxShadow: open ? "4px 0 15px rgba(0,0,0,0.1)" : "none"
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
