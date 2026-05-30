"use client";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "../hooks/useBookmarks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 

export default function BookmarkButton({ title }: { title: string }) { 
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  const bookmarked = isBookmarked(pathname);

  return (
    <button
      onClick={() => toggleBookmark({ url: pathname, title })}
      className="flex items-center gap-2 px-3 py-1 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
      title={bookmarked ? "Remove Bookmark" : "Save for Later"}
      style={{ fontFamily: "Rockwell, Serif, serif" }}
    >
      {bookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
      <span className="hidden sm:inline font-bold">{bookmarked ? "Saved" : "Save"}</span>
    </button>
  );
}