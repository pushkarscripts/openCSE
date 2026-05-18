// Single source of truth for all subjects

export interface SubjectMetadata {
  code: string;
  name: string;
  fullName: string;
  semester: number;
  available: boolean;
  keywords: string[]; // For enhanced search
  icon?: string;
}

export const SUBJECTS: Record<string, SubjectMetadata> = {
  c: {
    code: "c",
    name: "C Programming",
    fullName: "Programming in C",
    semester: 1,
    available: true,
    keywords: ["c", "programming", "language", "pointers", "functions", "arrays", "structures"],
  },
  ep: {
    code: "ep",
    name: "Engineering Physics",
    fullName: "Engineering Physics",
    semester: 1,
    available: true,
    keywords: ["physics", "mechanics", "waves", "optics", "thermodynamics", "electromagnetism"],
  },
  em1: {
    code: "em1",
    name: "Engineering Mathematics-1",
    fullName: "Engineering Mathematics I",
    semester: 1,
    available: true,
    keywords: ["math", "mathematics", "calculus", "algebra", "differential", "linear", "laplace"],
  },
  em2: {
    code: "em2",
    name: "Engineering Mathematics-2",
    fullName: "Engineering Mathematics II",
    semester: 2,
    available: true,
    keywords: ["math", "mathematics", "transforms", "statistics", "probability", "fourier"],
  },
  oops: {
    code: "oops",
    name: "OOPs with Java",
    fullName: "Object-Oriented Programming in Java",
    semester: 2,
    available: true,
    keywords: ["java", "oop", "oops", "classes", "objects", "inheritance", "polymorphism", "encapsulation"],
  },
  // Future subjects (not yet available)
  bee: {
    code: "bee",
    name: "Basic Electrical and Electronics",
    fullName: "Basic Electrical and Electronics",
    semester: 1,
    available: false,
    keywords: ["electrical", "electronics", "circuits", "voltage", "current"],
  },
  egd: {
    code: "egd",
    name: "Engineering Graphics & Design",
    fullName: "Engineering Graphics & Design",
    semester: 1,
    available: false,
    keywords: ["graphics", "design", "drawing", "cad", "projection"],
  },
  ec: {
    code: "ec",
    name: "English Communication",
    fullName: "English Communication",
    semester: 1,
    available: false,
    keywords: ["english", "communication", "writing", "speaking", "grammar"],
  },
  delc: {
    code: "delc",
    name: "Digital Electronics & Logic Circuits",
    fullName: "Digital Electronics & Logic Circuits",
    semester: 2,
    available: false,
    keywords: ["digital", "electronics", "logic", "gates", "circuits", "boolean"],
  },
  dsc: {
    code: "dsc",
    name: "Data Structures using C",
    fullName: "Data Structures using C",
    semester: 2,
    available: false,
    keywords: ["data", "structures", "algorithms", "linked", "list", "tree", "graph"],
  },
  mb: {
    code: "mb",
    name: "Modern Biology",
    fullName: "Modern Biology",
    semester: 2,
    available: false,
    keywords: ["biology", "cell", "genetics", "evolution", "ecology"],
  },
  es: {
    code: "es",
    name: "Environmental Studies",
    fullName: "Environmental Studies",
    semester: 2,
    available: false,
    keywords: ["environment", "ecology", "pollution", "sustainability", "conservation"],
  },
  py: {
    code: "py",
    name: "Problem Solving using Python",
    fullName: "Problem Solving using Python",
    semester: 3,
    available: false,
    keywords: ["python", "programming", "problem", "solving", "algorithms"],
  },
  coa: {
    code: "coa",
    name: "Computer Organization & Architecture",
    fullName: "Computer Organization & Architecture",
    semester: 3,
    available: false,
    keywords: ["computer", "organization", "architecture", "cpu", "memory", "assembly"],
  },
  ps: {
    code: "ps",
    name: "Probability & Statistics",
    fullName: "Probability & Statistics",
    semester: 3,
    available: false,
    keywords: ["probability", "statistics", "distribution", "hypothesis", "regression"],
  },
  toc: {
    code: "toc",
    name: "Theory of Computation",
    fullName: "Theory of Computation",
    semester: 3,
    available: false,
    keywords: ["theory", "computation", "automata", "turing", "complexity", "languages"],
  },
  it: {
    code: "it",
    name: "Information Technology",
    fullName: "Information Technology",
    semester: 3,
    available: false,
    keywords: ["information", "technology", "it", "systems", "networks"],
  },
  tw: {
    code: "tw",
    name: "Technical Writing",
    fullName: "Technical Writing",
    semester: 3,
    available: false,
    keywords: ["technical", "writing", "documentation", "communication", "reports"],
  },
};

// Helper to get semester subjects
export const getSubjectsBySemester = (semester: number): SubjectMetadata[] => {
  return Object.values(SUBJECTS).filter((s) => s.semester === semester);
};

// Helper to get available subjects
export const getAvailableSubjects = (): SubjectMetadata[] => {
  return Object.values(SUBJECTS).filter((s) => s.available);
};
