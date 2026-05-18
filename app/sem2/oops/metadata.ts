import { registerSubjectChapters } from "@/app/lib/metadata/chapterRegistry";

// Export chapters for reuse in [chapter]/page.tsx
export const OOPS_CHAPTERS = [
  { id: "ch0", title: "Course Outline", keywords: ["outline", "syllabus", "modules"] },
  { id: "ch1", title: "Introduction to Java", keywords: ["java", "introduction", "data types", "variables", "operators"] },
  { id: "ch2", title: "Classes and Objects", keywords: ["classes", "objects", "methods", "constructors", "this"] },
  { id: "ch3", title: "Inheritance & Polymorphism", keywords: ["inheritance", "polymorphism", "extends", "super", "overriding"] },
  { id: "ch4", title: "Packages & Interfaces", keywords: ["packages", "interfaces", "abstract", "implements"] },
  { id: "ch5", title: "Exception Handling", keywords: ["exception", "handling", "try", "catch", "throw", "finally"] },
  { id: "ch6", title: "Threads", keywords: ["threads", "multithreading", "concurrency", "synchronization"] },
  { id: "ch7", title: "Generics", keywords: ["generics", "type parameters", "collections"] },
  { id: "ch8", title: "Java Library & Swing GUI", keywords: ["library", "swing", "gui", "awt", "components"] },
];

// Auto-register on import
registerSubjectChapters("oops", OOPS_CHAPTERS);
