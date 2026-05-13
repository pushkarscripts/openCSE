import { registerSubjectChapters } from "@/app/lib/metadata/chapterRegistry";

// Export chapters for reuse in [chapter]/page.tsx
export const EM2_CHAPTERS = [
  { id: "ch0", title: "Course Outline", keywords: ["outline", "syllabus", "modules"] },
  { id: "ch1", title: "Sequences and Series", keywords: ["sequences", "series", "convergence", "taylor", "maclaurin"] },
  { id: "ch2", title: "Numerical Analysis", keywords: ["numerical", "analysis", "methods", "interpolation", "integration"] },
  { id: "ch3", title: "Complex Variables", keywords: ["complex", "variables", "analytic", "functions", "residue"] },
  { id: "ch4", title: "Integral Calculus", keywords: ["integral", "calculus", "integration", "double", "triple"] },
];

// Auto-register on import
registerSubjectChapters("em2", EM2_CHAPTERS);
