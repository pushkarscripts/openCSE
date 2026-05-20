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

    {
      id: "ch1",
      title: "Introduction to Algorithms",
    },

    {
      id: "ch2",
      title: "Time and Space Complexity",
    },

    {
      id: "ch3",
      title: "Searching and Sorting Algorithms",
    },

    {
      id: "ch4",
      title: "Divide and Conquer Technique",
    },

    {
      id: "ch5",
      title: "Greedy Method",
    },

    {
      id: "ch6",
      title: "Dynamic Programming",
    },

    {
      id: "ch7",
      title: "Graph Algorithms",
    },

    {
      id: "ch8",
      title: "Backtracking and Branch & Bound",
    },
  ];

  return (
    <div className="flex relative">

      <aside
        className={`h-screen sticky top-0 bg-[#fae8d7] text-[#1B0D00] flex flex-col transition-all duration-300 shadow-lg ${
          open ? "w-72" : "w-0 overflow-hidden"
        }`}
      >

        <h2
          className="flex items-center text-2xl font-normal pt-4 pl-4 pb-3 bg-[#cebb9c] text-[#1B0D00] border-b-4 border-[#1B0D00]"
          style={{ fontFamily: "Rockwell, serif" }}
        >
          ADA Chapters
        </h2>

        <ul className="flex-1 overflow-y-auto">

          {chapters.map((ch) => {
            const active = pathname.startsWith(`/sem5/ada2/${ch.id}`);

            return (
              <li key={ch.id}>
                <Link
                  href={`/sem5/ada2/${ch.id}`}
                  className={`block px-4 py-3 text-lg transition-all duration-200 border-b border-[#d9c5a3] ${
                    active
                      ? "bg-[#fccc7e] text-[#1B0D00]"
                      : "hover:bg-[#ffdda7af]"
                  } ${righteous.className}`}
                >
                  {ch.title}
                </Link>
              </li>
            );
          })}

        </ul>

      </aside>

      <button
        onClick={() => setOpen(!open)}
        className="sticky top-[10%] left-full bg-[#ffdda7d0] h-[85vh] w-[52px] text-[#1B0D00] text-center font-semibold text-2xl border-l-4 rounded-r-2xl border-[#1B0D00] flex items-center justify-center transition-all duration-300 hover:bg-[#ffd28a]"
        style={{ fontFamily: "Rockwell, serif" }}
      >
        <p className="leading-5 tracking-wide">
          C
          <br />
          H
          <br />
          A
          <br />
          P
          <br />
          T
          <br />
          E
          <br />
          R
          <br />
          S
        </p>
      </button>

    </div>
  );
}