// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const chapters = [
    { id: "ch1", title: "Introduction" },
    { id: "ch2", title: "Getting Started" },
    { id: "ch3", title: "Chapter 1" },
    { id: "ch4", title: "Chapter 2" },
    { id: "ch5", title: "Chapter 3" },
    { id: "ch6", title: "Chapter 4" },
    { id: "ch7", title: "Chapter 5" },
    { id: "ch8", title: "Conclusion" },
  ];

  return (
    <aside className="w-64 h-[100vh] bg-[#fae8d7] text-amber-950 p-0 overflow-y-auto">
      <h2 className="flex items-center text-2xl font-bold pt-3 pl-3 mb-2 bg-[#cebb9c] text-amber-950 pb-2 border-b-4 border-amber-950">Chapters</h2>
      <ul className="space-y-0">
        {chapters.map((ch) => {
          const active = pathname === `/toc/${ch.id}`;
          return (
            <li key={ch.id}>
              <Link
                href={`/toc/${ch.id}`}
                className={`block px-3 py-2 transition ${
                  active ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
                }`}
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
