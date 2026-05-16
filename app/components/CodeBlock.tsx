"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="relative mt-4 w-full overflow-hidden">
      
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="
          absolute right-4 top-4 z-20
          flex items-center gap-1
          rounded-md
          border border-[#c7a669]
          bg-[#f3e7c2]
          px-3 py-1.5
          text-xs font-medium
          text-[#3a2a14]
          shadow-sm
          transition-all duration-200
          hover:bg-[#c7a669]
          hover:text-white
          active:scale-95
        "
      >
        {copied ? (
          <>
            <Check size={14} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={14} />
            Copy
          </>
        )}
      </button>

      {/* Code Block */}
      <pre
        className="
          w-full
          overflow-x-auto
          rounded-xl
          border border-[#24344d]
          bg-[#101b2d]
          p-6
          pt-16
          text-[15px]
          leading-7
          text-[#98f5a5]
          shadow-inner
          whitespace-pre
        "
      >
        <code className="font-mono block min-w-max">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};