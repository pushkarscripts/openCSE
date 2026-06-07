"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  title: string;
  code: string;
}

export const CodeBlock = ({ title, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="my-6 w-full block rounded-lg border border-[#c7a669]/30 bg-[#1e1b18] shadow-md overflow-hidden">
      {/* Block Header Toolbar */}
      <div className="flex items-center justify-between bg-[#ebdcb9] px-4 py-2.5 select-none">
        <span className="font-mono text-xs font-bold tracking-wider text-[#3a2a14] uppercase">
          {title}
        </span>
        
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded px-2.5 py-1 font-mono text-xs font-medium transition-all duration-150 border
            ${
              copied
                ? "bg-[#2d4a2e] border-[#4ade80]/40 text-[#4ade80]"
                : "bg-[#fdf6e2]/60 border-[#c7a669]/30 text-[#3a2a14] hover:bg-[#fdf6e2] hover:border-[#c7a669]"
            }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 shrink-0" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 shrink-0" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Text Body - Flattened Layout */}
      <pre className="w-full block m-0 p-5 overflow-x-auto bg-[#131110] font-mono text-sm leading-relaxed text-[#4ade80] textAlign-left">
        <code className="block whitespace-pre text-[#4ade80]">{code}</code>
      </pre>
    </div>
  );
};