"use client";

import { useState } from "react";

interface CodeBlockProps {
  title?: string;
  code: string;
}

export const CodeBlock = ({ title, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="my-6 w-full overflow-hidden rounded-xl border border-[#c7a669]/40 bg-[#111c24] shadow-sm block clear-both text-left">
      
      {/* 1. TOP HEADER STRIP */}
      <div className="flex items-center justify-between bg-[#f0ddb6] px-4 py-2 border-b border-[#c7a669]/40 select-none w-full box-border">
        
        <h4 className="text-xs font-bold text-[#3a2a14] tracking-wider uppercase font-sans m-0 p-0 antialiased block">
          {title || "CODE SNIPPET"}
        </h4>
        
        {/* 2. COPY BUTTON WITH EXACT TARGET SYMBOL */}
        <button 
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className={`
            text-[11px] font-bold px-2.5 py-1 rounded border 
            transition-all duration-150 flex items-center gap-1.5 
            cursor-pointer select-none active:scale-95 outline-none font-sans shrink-0
            ${copied 
              ? "bg-[#1a7f37] text-white border-transparent" 
              : "bg-[#f3e7c2] hover:bg-[#ebd9bd] text-[#3a2a14] border-[#c7a669]"
            }
          `}
        >
          {copied ? (
            <>
              {/* Checkmark icon for active state */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              {/* EXACT MATCH SYMBOL: Left-Top overlapping layered sleek squares */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3.5 h-3.5 opacity-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m3.375-3.375V18a2.25 2.25 0 0 0 2.25 2.25H18A2.25 2.25 0 0 0 20.25 18v-5.25A2.25 2.25 0 0 0 18 10.5h-5.25a2.25 2.25 0 0 0-2.25 2.25Z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* 3. CODE FIELD DISPLAY PANEL */}
      <div className="p-4 bg-[#111c24] overflow-x-auto w-full block scrollbar-thin scrollbar-thumb-[#c7a669]/20">
        <pre className="m-0 p-0 border-none bg-transparent outline-none shadow-none text-left w-full block overflow-visible leading-relaxed">
          <code className="block font-mono text-[13.5px] text-[#98f5a5] whitespace-pre font-normal p-0 m-0 bg-transparent text-left tracking-wide">
            {code.trim()}
          </code>
        </pre>
      </div>

    </div>
  );
};