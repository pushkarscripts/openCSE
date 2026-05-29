"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandingBoxProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandingBox({
  title,
  children,
  defaultOpen = false,
}: ExpandingBoxProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#c7a669] rounded-xl overflow-hidden bg-[#fae8d7]/50 text-[#1b0d00] dark:text-[#fae8d7] shadow-sm mb-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-semibold text-lg md:text-xl text-left bg-[#ebdcb0]/50 hover:bg-[#ebdcb0]/80 transition duration-200 cursor-pointer"
        style={{ fontFamily: "Rockwell, Serif, serif" }}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 space-y-3 text-base md:text-lg leading-relaxed font-normal bg-[#ebdcb0]/10 border-t border-[#c7a669]/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
