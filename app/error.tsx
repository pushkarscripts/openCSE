"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertOctagon, RotateCcw, Home, Info } from "lucide-react";
import Navbar from "./components/navbar";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service
    console.error("Runtime Error caught by boundary:", error);
  }, [error]);

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col pt-14 bg-[#1B0D00]"
      style={{ fontFamily: "Rockwell, serif" }}
    >
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 max-w-2xl mx-auto animate-fade-in">
        <div className="w-20 h-20 bg-red-950/40 border border-red-500/30 rounded-full flex items-center justify-center mb-6 text-red-400 animate-pulse">
          <AlertOctagon className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold text-[#C7A669] uppercase tracking-[0.2em] mb-2">
          System Interrupted
        </span>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-[#FAE8D7] mb-4">
          Something went offline
        </h1>

        <p className="text-base sm:text-lg text-[#FAE8D7]/80 mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. Let&apos;s try reloading the section or going back to safety.
        </p>

        {/* Technical Error Details Drawer */}
        <div className="w-full bg-[#251506]/40 border border-[#C7A669]/10 rounded-2xl p-4 mb-8 text-left">
          <summary className="list-none flex items-center gap-2 text-xs font-bold text-[#C7A669] uppercase tracking-wider select-none cursor-pointer">
            <Info className="w-4 h-4 text-[#C7A669]" />
            <span>Diagnostic Details</span>
          </summary>
          <div className="mt-2 text-xs font-mono text-[#FAE8D7]/60 overflow-x-auto whitespace-pre-wrap break-all bg-[#1b0d00]/60 p-3 rounded-lg border border-black/40">
            {error.message || "Unknown error occurred"}
            {error.digest && <div className="mt-1 text-[#C7A669]/60">Digest: {error.digest}</div>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 bg-[#C7A669] text-[#1B0D00] px-6 py-3 rounded-xl font-bold text-base hover:scale-105 hover:bg-[#d5b376] transition-all cursor-pointer shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#251506] border border-[#C7A669]/30 text-[#FAE8D7] px-6 py-3 rounded-xl font-bold text-base hover:scale-105 hover:bg-[#321c08] transition-all cursor-pointer shadow-sm"
          >
            <Home className="w-4 h-4 text-[#C7A669]" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
