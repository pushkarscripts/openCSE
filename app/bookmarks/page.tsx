"use client";
import { useBookmarks } from "../hooks/useBookmarks";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="p-8 pt-24 min-h-screen bg-[#1B0D00] text-[#FAE8D7]">
            <Navbar />
        <Link 
        href="/" 
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        style={{ fontFamily: "Rockwell, Serif, serif" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        Back to Home
      </Link>
      <h1 className={`text-5xl font-bold mb-8 ${roadRage.className}`}>My Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <p className="text-xl" style={{ fontFamily: "Rockwell, Serif, serif" }}>
          No bookmarks saved yet. Go explore some subjects!
        </p>
      ) : (
        <ul className="space-y-4 max-w-3xl">
          {bookmarks.map((b) => (
            <li key={b.url} className="flex items-center justify-between p-4 border border-[#FAE8D7] rounded hover:bg-[#2a1809] transition">
              <Link href={b.url} className="text-2xl font-bold hover:underline" style={{ fontFamily: "Rockwell, Serif, serif" }}>
                {b.title}
              </Link>
              <button 
                onClick={() => toggleBookmark(b)} 
                className="text-red-400 hover:text-red-300 font-bold px-4 py-2 border border-red-400 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}