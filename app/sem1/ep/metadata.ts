import { registerSubjectChapters } from "@/app/lib/metadata/chapterRegistry";

// Export chapters for reuse in [chapter]/page.tsx
export const EP_CHAPTERS = [
  { id: "ch0", title: "Course Outline", keywords: ["outline", "syllabus", "modules"] },
  { id: "ch1", title: "Vector Algebra & Fields", keywords: ["vector", "algebra", "fields", "gradient", "divergence", "curl"] },
  { id: "ch2", title: "Electrostatics & Magnetostatics", keywords: ["electrostatics", "magnetostatics", "electric", "magnetic", "field"] },
  { id: "ch3", title: "Electrodynamics & Maxwell's Equations", keywords: ["electrodynamics", "maxwell", "equations", "electromagnetic"] },
  { id: "ch4", title: "Semiconductors & Superconductivity", keywords: ["semiconductor", "superconductivity", "band theory", "diode"] },
  { id: "ch5", title: "LASERs & Optical Fiber", keywords: ["laser", "optical", "fiber", "light", "amplification"] },
];

// Auto-register on import
registerSubjectChapters("ep", EP_CHAPTERS);
