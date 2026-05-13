import { SearchableItem, SearchResult } from "./searchTypes";

// Simple fuzzy matching algorithm
const calculateScore = (item: SearchableItem, query: string): { score: number; matchedTerms: string[] } => {
  const lowerQuery = query.toLowerCase().trim();
  const words = lowerQuery.split(/\s+/).filter(w => w.length >= 2);
  
  let score = 0;
  const matchedTerms: string[] = [];

  // Exact title match (highest priority)
  if (item.title.toLowerCase() === lowerQuery) {
    score += 100;
    matchedTerms.push(item.title);
  }
  
  // Title starts with query
  else if (item.title.toLowerCase().startsWith(lowerQuery)) {
    score += 80;
    matchedTerms.push(item.title);
  }
  
  // Title contains query
  else if (item.title.toLowerCase().includes(lowerQuery)) {
    score += 60;
    matchedTerms.push(item.title);
  }

  // Word-by-word matching in searchText
  words.forEach((word) => {
    if (item.searchText.includes(word)) {
      score += 20;
      if (!matchedTerms.includes(word)) {
        matchedTerms.push(word);
      }
    }
    
    // Partial word matching (starts with)
    const searchWords = item.searchText.split(/\s+/);
    searchWords.forEach((searchWord) => {
      if (searchWord.startsWith(word) && searchWord !== word) {
        score += 10;
      }
    });
  });

  // Boost subjects over chapters
  if (item.type === "subject") {
    score += 15;
  }

  // Boost if query matches keywords exactly
  item.keywords.forEach((keyword) => {
    if (keyword.toLowerCase() === lowerQuery) {
      score += 40;
      matchedTerms.push(keyword);
    } else if (keyword.toLowerCase().includes(lowerQuery)) {
      score += 15;
    }
  });

  return { score, matchedTerms };
};

export const search = (
  items: SearchableItem[],
  query: string,
  limit: number = 10
): SearchResult[] => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const results: SearchResult[] = items
    .map((item) => {
      const { score, matchedTerms } = calculateScore(item, query);

      return {
        ...item,
        score,
        matchedTerms,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      // Sort by score first
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Then by type (subjects before chapters)
      if (a.type !== b.type) {
        return a.type === "subject" ? -1 : 1;
      }
      // Then alphabetically
      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);

  return results;
};
