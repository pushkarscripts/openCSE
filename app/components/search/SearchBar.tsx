"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import "@/app/lib/search/initializeSearch"; // Ensure metadata is loaded
import { getSearchIndex } from "@/app/lib/search/searchIndex";
import { search } from "@/app/lib/search/searchEngine";
import { SearchResult } from "@/app/lib/search/searchTypes";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut: / (forward slash)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Forward slash to focus search (like GitHub, Reddit)
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)) {
        event.preventDefault();
        const input = searchRef.current?.querySelector("input");
        input?.focus();
      }
      
      // Escape to close
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsFocused(false);
        const input = searchRef.current?.querySelector("input");
        input?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Perform search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchIndex = getSearchIndex();
    const searchResults = search(searchIndex, query, 8);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          isFocused
            ? "bg-[#2a1809] ring-2 ring-[#c7a669]"
            : "bg-[#2a1809] hover:bg-[#3a2414]"
        }`}
      >
        <Search className="w-5 h-5 text-[#c7a669] flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search subjects or topics..."
          className="flex-1 bg-transparent text-[#fae8d7] placeholder-[#8b7355] outline-none text-base min-w-0"
        />
        {query && (
          <button
            onClick={handleClear}
            className="text-[#8b7355] hover:text-[#fae8d7] transition flex-shrink-0"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <SearchResults results={results} onClose={handleClose} />
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#2a1809] border border-[#c7a669] rounded-lg p-4 text-center text-[#8b7355] z-50">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
