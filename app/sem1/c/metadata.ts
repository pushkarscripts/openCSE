import { registerSubjectChapters } from "@/app/lib/metadata/chapterRegistry";

// Export chapters for reuse in [chapter]/page.tsx
export const C_CHAPTERS = [
  { id: "ch0", title: "Course Outline", keywords: ["outline", "syllabus", "modules"] },
  { id: "ch1", title: "Introduction to Computing", keywords: ["computing", "history", "fundamentals", "computer"] },
  { id: "ch2", title: "Overview of C", keywords: ["c language", "structure", "syntax", "basics"] },
  { id: "ch3", title: "Data Types, I/O, Decision Making and Loops", keywords: ["data types", "input", "output", "if", "else", "for", "while", "loops"] },
  { id: "ch4", title: "Arrays, Strings, and Functions", keywords: ["arrays", "strings", "functions", "recursion"] },
  { id: "ch5", title: "Pointers, Structures, and Unions", keywords: ["pointers", "structures", "unions", "memory"] },
  { id: "ch6", title: "File Management, Dynamic Memory, and Preprocessors", keywords: ["files", "malloc", "dynamic", "preprocessor", "macros"] },
];

// Auto-register on import
registerSubjectChapters("c", C_CHAPTERS);
