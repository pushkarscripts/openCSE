// components/Sidebar.tsx
"use client";
import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const righteous = Righteous({
      subsets: ['latin'],
      weight: '400', 
      variable: '--font-righteous', 
    });


export default function Sidebar() {
  const pathname = usePathname();

  const chapters = [
    { id: "ch0", title: "Course Outline" },
    { id: "ch1", title: "Vector Algebra & Fields" },
    { id: "ch2", title: "Electrostatics & Magnetostatics" },
    { id: "ch3", title: "Electrodynamics & Maxwell’s Equations" },
    { id: "ch4", title: "Semiconductors & Superconductivity" },
    { id: "ch5", title: "LASERs & Optical Fiber" },
  ];

  return (
    <aside className="w-64 h-[100vh] sticky top-0 bg-[#fae8d7] text-[#1B0D00] p-0 flex flex-col">
      <h2 
        className="flex items-center text-2xl font-normal pt-3 pl-3 mb-2 bg-[#cebb9c] text-[#1B0D00] pb-2 border-b-4 border-[#1B0D00]"
        style={{ fontFamily: 'Rockwell, Serif, serif' }}>
      Chapters
      </h2>
      <ul className="flex-1 overflow-y-auto space-y-0">
      {chapters.map((ch) => {
        const active = pathname === `/sem1/ep/${ch.id}`;
        return (
        <li key={ch.id}>
          <Link
          href={`/sem1/ep/${ch.id}`}
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
    </aside>
  );
}
