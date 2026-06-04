"use client";
import { useState, useEffect } from "react";

export type Bookmark = {
  url: string;
  title: string;
};

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("openCSE_bookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (bookmark: Bookmark) => {
    const exists = bookmarks.find((b) => b.url === bookmark.url);
    let newBookmarks;
    if (exists) {
      newBookmarks = bookmarks.filter((b) => b.url !== bookmark.url);
    } else {
      newBookmarks = [...bookmarks, bookmark];
    }
    setBookmarks(newBookmarks);
    localStorage.setItem("openCSE_bookmarks", JSON.stringify(newBookmarks));
  };

  const isBookmarked = (url: string) => {
    return bookmarks.some((b) => b.url === url);
  };

  return { bookmarks, toggleBookmark, isBookmarked };
}