"use client";
import { SearchResult } from "@/app/lib/search/searchTypes";
import SearchResultItem from "./SearchResultItem";

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

export default function SearchResults({ results, onClose }: SearchResultsProps) {
  // Group by type
  const subjects = results.filter((r) => r.type === "subject");
  const chapters = results.filter((r) => r.type === "chapter");

  return (
    <div className="absolute top-full mt-2 w-full max-h-[70vh] overflow-y-auto bg-[#2a1809] border border-[#c7a669] rounded-lg shadow-2xl z-50">
      {/* Subjects Section */}
      {subjects.length > 0 && (
        <div className="border-b border-[#3a2414]">
          <div className="px-4 py-2 text-xs font-semibold text-[#c7a669] uppercase tracking-wide">
            Subjects
          </div>
          {subjects.map((result) => (
            <SearchResultItem key={result.id} result={result} onClose={onClose} />
          ))}
        </div>
      )}

      {/* Chapters Section */}
      {chapters.length > 0 && (
        <div>
          <div className="px-4 py-2 text-xs font-semibold text-[#c7a669] uppercase tracking-wide">
            Topics
          </div>
          {chapters.map((result) => (
            <SearchResultItem key={result.id} result={result} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}
