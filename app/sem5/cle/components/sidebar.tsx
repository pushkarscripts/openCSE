"use client";
import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { chapters } from "../constants";   // ← cle constants

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

  return (
    <>
      <div
        className={`fixed inset-0 md:hidden bg-black/50 z-30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div className="flex sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-[50px] md:w-auto pointer-events-none md:pointer-events-auto">
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
          <ul className="flex-1 overflow-y-auto no-scrollbar space-y-0">
            {chapters.map((ch) => {
              const active =
                pathname === `/sem5/cle/${ch.id}` ||   // ← cle path
                (ch.subTopics?.some(
                  (sub) => sub.isPage && pathname === `/sem5/cle/${sub.id}`
                ) ?? false);
              return (
                <li key={ch.id} className="flex flex-col">
                  <Link
                    href={`/sem5/cle/${ch.id}`}   // ← cle path
                    className={`block px-3 py-2 text-xl transition ${
                      active ? "bg-[#fccc7e]" : "hover:bg-[#ffdda7af]"
                    } ${righteous.className}`}
                  >
                    {ch.title}
                  </Link>
                  {active && ch.subTopics && (
                    <ul className="ml-4 border-l-2 border-[#1B0D00]/20 pl-2 my-2 space-y-2">
                      {ch.subTopics.map((sub) => {
                        const subActive =
                          sub.isPage &&
                          pathname === `/sem5/cle/${sub.id}`;   // ← cle path
                        return (
                          <li key={sub.id}>
                            <Link
                              href={
                                sub.isPage
                                  ? `/sem5/cle/${sub.id}`   // ← cle path
                                  : `/sem5/cle/${ch.id}#${sub.id}`
                              }
                              className={`block text-sm transition hover:font-bold ${
                                subActive
                                  ? "text-black font-bold"
                                  : "text-[#3a2a14] hover:text-black"
                              }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>

        <button
          onClick={() => setOpen(!open)}
          className="toggle-sidebar shrink-0 pointer-events-auto bg-[#ffdda7] h-full w-[50px] text-[#1B0D00] text-center font-semibold text-2xl border-l-4 rounded-r-2xl border-[#1B0D00] flex items-center justify-center transition-all duration-300 md:shadow-none"
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
