// Type definitions for the search system

export interface SearchableItem {
  type: "subject" | "chapter";
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  semester: number;
  subjectCode?: string;
  subjectName?: string;
  keywords: string[];
  searchText: string; // Concatenated text for searching
}

export interface SearchResult extends SearchableItem {
  score: number; // Relevance score
  matchedTerms: string[];
}
