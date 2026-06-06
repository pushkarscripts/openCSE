"use client";
import { useState, useEffect } from "react";

export type Bookmark = {
  url: string;
  title: string;
};

const BOOKMARKS_STORAGE_KEY = "openCSE_bookmarks";

function parseSavedBookmarks(saved: string): Bookmark[] {
  const parsed = JSON.parse(saved);

  if (!Array.isArray(parsed)) {
    throw new Error("Saved bookmarks must be an array");
  }

  return parsed.filter(
    (bookmark): bookmark is Bookmark =>
      typeof bookmark?.url === "string" && typeof bookmark?.title === "string",
  );
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      setBookmarks(parseSavedBookmarks(saved));
    } catch (error) {
      console.warn("Invalid bookmark data found:", error);
      localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
      setBookmarks([]);
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
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(newBookmarks));
  };

  const isBookmarked = (url: string) => {
    return bookmarks.some((b) => b.url === url);
  };

  return { bookmarks, toggleBookmark, isBookmarked };
}
