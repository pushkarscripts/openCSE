"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, FileText, HelpCircle, Keyboard, CornerDownLeft } from "lucide-react";
import { searchIndex, SearchItem } from "@/lib/searchIndex";
import { useToast } from "./Toast";
import Skeleton from "./Skeleton";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const { success, info } = useToast();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Search input with simulated loading skeleton
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const delayDebounce = setTimeout(() => {
      const filtered = searchIndex.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const descMatch = item.description?.toLowerCase().includes(query.toLowerCase()) ?? false;
        const subMatch = item.subjectName.toLowerCase().includes(query.toLowerCase());
        const tagMatch = item.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ?? false;
        return titleMatch || descMatch || subMatch || tagMatch;
      });

      setResults(filtered);
      setIsLoading(false);
      setSelectedIndex(0);
    }, 400); // 400ms loading latency to show beautiful skeleton loaders

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Keyboard navigation inside search results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelectResult(results[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector(".search-item-active");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleSelectResult = (item: SearchItem) => {
    success(`Opening: ${item.title}`);
    router.push(item.path);
    onClose();
  };

  const handleQuickTagClick = (tag: string) => {
    setQuery(tag);
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fade-in">
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-[#1b0d00] border-2 border-[#C7A669]/40 rounded-3xl overflow-hidden shadow-2xl animate-scale-up flex flex-col max-h-[75vh]"
        style={{ fontFamily: "Rockwell, serif" }}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-4 border-b border-[#C7A669]/20 bg-[#251506]/60">
          <Search className="w-6 h-6 text-[#C7A669] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search subjects, chapters, quizzes (e.g. Pointers, Operating Systems)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#FAE8D7] placeholder-[#FAE8D7]/40 text-lg border-none outline-none focus:ring-0 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 hover:bg-[#FAE8D7]/10 rounded-full text-[#FAE8D7]/60 hover:text-[#FAE8D7] transition mr-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 bg-[#1b0d00] px-2 py-1 rounded border border-[#C7A669]/30 text-[10px] text-[#C7A669] select-none uppercase font-bold tracking-wider">
            esc
          </div>
        </div>

        {/* Search content / results */}
        <div className="flex-1 overflow-y-auto p-4 min-h-[300px] flex flex-col no-scrollbar">
          {isLoading ? (
            <div className="flex flex-col gap-3 flex-1 justify-start">
              <div className="text-[#C7A669]/60 text-xs font-semibold uppercase tracking-wider mb-1">
                Searching documentation...
              </div>
              <Skeleton variant="list-item" />
              <Skeleton variant="list-item" />
              <Skeleton variant="list-item" />
            </div>
          ) : query && results.length > 0 ? (
            <div ref={resultsContainerRef} className="flex flex-col gap-2">
              <div className="text-[#C7A669] text-xs font-semibold uppercase tracking-wider mb-2 flex justify-between">
                <span>{results.length} results matching &ldquo;{query}&rdquo;</span>
                <span className="hidden sm:flex items-center gap-1 text-[10px] text-[#FAE8D7]/40 font-normal normal-case">
                  Navigate with <Keyboard className="w-3.5 h-3.5 inline" /> ↑↓ &amp; Enter
                </span>
              </div>
              
              {results.map((item, index) => {
                const isActive = index === selectedIndex;
                const isSubject = item.type === "subject";
                const isChapter = item.type === "chapter";
                const isQuiz = item.type === "quiz";

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`search-item w-full text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-center gap-4 cursor-pointer ${
                      isActive
                        ? "search-item-active bg-[#d2b48c] text-[#1b0d00] border-[#C7A669] scale-[99%]"
                        : "bg-[#251506]/40 text-[#FAE8D7] border-transparent hover:bg-[#251506]/80"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isActive
                          ? "bg-[#1b0d00] text-[#C7A669]"
                          : "bg-[#1b0d00]/60 text-[#C7A669]"
                      }`}
                    >
                      {isSubject && <BookOpen className="w-5 h-5" />}
                      {isChapter && <FileText className="w-5 h-5" />}
                      {isQuiz && <HelpCircle className="w-5 h-5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm sm:text-base truncate block">
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ${
                            isActive
                              ? "bg-[#1b0d00] text-[#FAE8D7]"
                              : "bg-[#d2b48c]/20 text-[#d2b48c]"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      
                      {item.description && (
                        <p
                          className={`text-xs mt-1 truncate ${
                            isActive ? "text-[#1b0d00]/80" : "text-[#FAE8D7]/60"
                          }`}
                        >
                          {item.description}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-2 mt-1 text-[10px] sm:text-xs opacity-75">
                        <span className="font-semibold">{item.subjectName}</span>
                        <span>•</span>
                        <span>{item.semester}</span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="hidden sm:flex items-center text-[10px] bg-[#1b0d00]/10 px-2 py-1 rounded gap-1 shrink-0 font-semibold uppercase tracking-wider text-[#1b0d00]">
                        Go <CornerDownLeft className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ) : query ? (
            /* Premium Empty State Component */
            <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-[#251506] border border-[#C7A669]/20 rounded-full flex items-center justify-center mb-4 text-[#C7A669]">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#FAE8D7] mb-2">No notes or quizzes found</h3>
              <p className="text-sm text-[#FAE8D7]/60 max-w-sm mb-6 leading-relaxed">
                We couldn&apos;t find anything matching &ldquo;<span className="text-[#C7A669] font-semibold">{query}</span>&rdquo;. Try another search or explore our subjects below.
              </p>
              
              <div className="w-full max-w-md bg-[#251506]/40 rounded-2xl p-4 border border-[#C7A669]/10 text-left">
                <div className="text-xs text-[#C7A669] font-bold uppercase tracking-wider mb-2">
                  Popular topics
                </div>
                <div className="flex flex-wrap gap-2">
                  {["C Programming", "Pointers", "Java", "Linked List", "Compiler", "Machine Learning", "Quiz"].map((pop) => (
                    <button
                      key={pop}
                      onClick={() => handleQuickTagClick(pop)}
                      className="text-xs bg-[#1b0d00] hover:bg-[#d2b48c] hover:text-[#1b0d00] border border-[#C7A669]/30 text-[#FAE8D7] px-3 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      {pop}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Default Search State (Intro tips) */
            <div className="flex-1 flex flex-col justify-between">
              <div className="py-2 text-[#FAE8D7]/80">
                <div className="text-xs text-[#C7A669] font-bold uppercase tracking-wider mb-3">
                  Search Tips &amp; Hacks
                </div>
                <ul className="space-y-3.5 text-sm sm:text-base">
                  <li className="flex gap-2">
                    <span className="text-[#C7A669] font-bold">1.</span>
                    <span>Type key concepts like <code className="inline-code">pointers</code>, <code className="inline-code">recursion</code>, <code className="inline-code">lexical analyzer</code>, or <code className="inline-code">docker</code>.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C7A669] font-bold">2.</span>
                    <span>Directly search for quiz subjects like <code className="inline-code">java quiz</code> or <code className="inline-code">ml quiz</code> to practice.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C7A669] font-bold">3.</span>
                    <span>Filter down dynamically in real-time by semesters or subject names.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-[#C7A669]/10 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#FAE8D7]/40 bg-[#251506]/20 p-4 rounded-2xl">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#FAE8D7]/60">Quick search shortcut:</span>
                  <span className="bg-[#1b0d00] border border-[#C7A669]/20 px-2 py-0.5 rounded text-[10px] text-[#FAE8D7]/80 uppercase tracking-widest font-bold font-mono">/</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Press <strong className="text-[#C7A669]">Esc</strong> to exit</span>
                  <span>Made for openCSE 🚀</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
