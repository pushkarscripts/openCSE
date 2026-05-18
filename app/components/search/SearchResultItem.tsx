"use client";
import Link from "next/link";
import { SearchResult } from "@/app/lib/search/searchTypes";
import { BookOpen, FileText } from "lucide-react";

interface SearchResultItemProps {
  result: SearchResult;
  onClose: () => void;
}

export default function SearchResultItem({ result, onClose }: SearchResultItemProps) {
  const Icon = result.type === "subject" ? BookOpen : FileText;

  return (
    <Link
      href={result.url}
      onClick={onClose}
      className="flex items-start gap-3 px-4 py-3 hover:bg-[#3a2414] transition-colors cursor-pointer border-b border-[#3a2414] last:border-b-0"
    >
      <Icon className="w-5 h-5 text-[#c7a669] mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-[#fae8d7] font-medium text-base truncate">
          {result.title}
        </div>
        {result.subtitle && (
          <div className="text-[#8b7355] text-sm mt-0.5">
            {result.subtitle}
          </div>
        )}
      </div>
      <div className="text-xs text-[#8b7355] flex-shrink-0">
        Sem {result.semester}
      </div>
    </Link>
  );
}
