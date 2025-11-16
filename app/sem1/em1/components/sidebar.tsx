"use client";

import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const chapters = [
    { id: "ch0", title: "Course Outline" },
    { id: "ch1", title: "Differential Calculus" },
    { id: "ch2", title: "Linear Algebra" },
    { id: "ch3", title: "Ordinary Differential Equations" },
    { id: "ch4", title: "Laplace Transforms" },
  ];

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <aside
        className={`h-[100vh] sticky top-0 bg-[#fae8d7] text-[#1B0D00] p-0 flex flex-col transition-all duration-300 ${
          open ? "w-64" : "w-0 overflow-hidden"
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
            const active = pathname === `/sem1/em1/${ch.id}`;
            return (
              <li key={ch.id}>
                <Link
                  href={`/sem1/em1/${ch.id}`}
                  className={`block px-3 py-2 text-xl transition-all ${
                    active ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
                  } ${righteous.className}`}
                >
                  {ch.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="toggle-sidebar sticky top-[10%] left-full bg-[#ffdda7d0] h-[85vh] w-[50px] text-[#1B0D00] text-center font-semibold text-2xl border-l-4 rounded-r-2xl border-[#1B0D00] flex items-center justify-center transition-all duration-300"
        style={{ fontFamily: "Rockwell, Serif, serif" }}
      >
        <p className="leading-5">
          C<br />H<br />A<br />P<br />T<br />E<br />R<br />S
        </p>
      </button>
    </div>
  );
}
