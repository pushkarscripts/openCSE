import { registerSubjectChapters } from "@/app/lib/metadata/chapterRegistry";

// Export chapters for reuse in [chapter]/page.tsx
export const EM1_CHAPTERS = [
  { id: "ch0", title: "Course Outline", keywords: ["outline", "syllabus", "modules"] },
  { id: "ch1", title: "Differential Calculus", keywords: ["differential", "calculus", "derivatives", "differentiation"] },
  { id: "ch2", title: "Linear Algebra", keywords: ["linear", "algebra", "matrices", "vectors", "determinants"] },
  { id: "ch3", title: "Ordinary Differential Equations", keywords: ["ode", "differential equations", "ordinary"] },
  { id: "ch4", title: "Laplace Transforms", keywords: ["laplace", "transforms", "inverse laplace"] },
];

// Auto-register on import
registerSubjectChapters("em1", EM1_CHAPTERS);
