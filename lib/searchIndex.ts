export interface SearchItem {
  id: string;
  title: string;
  type: "subject" | "chapter" | "quiz";
  path: string;
  subjectName: string;
  semester: string;
  description?: string;
  tags?: string[];
}

export const searchIndex: SearchItem[] = [
  // SEMESTER 1
  {
    id: "sub-c",
    title: "C Programming",
    type: "subject",
    path: "/sem1/c/ch0",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Learn fundamental computing, variables, loops, arrays, structures, pointers, and memory management in C.",
    tags: ["c", "programming", "code", "syntax", "pointers", "arrays"]
  },
  {
    id: "ch-c-0",
    title: "Course Outline (C Programming)",
    type: "chapter",
    path: "/sem1/c/ch0",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Syllabus overview, reference books, evaluation criteria, and learning outcomes."
  },
  {
    id: "ch-c-1",
    title: "Introduction to Computing",
    type: "chapter",
    path: "/sem1/c/ch1",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Understanding hardware, software, compilers, interpreters, binary logic, and basic machine concepts."
  },
  {
    id: "ch-c-2",
    title: "Overview of C",
    type: "chapter",
    path: "/sem1/c/ch2",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "History of C, structure of a C program, compiling, linking, headers, tokens, and basic print statements."
  },
  {
    id: "ch-c-3",
    title: "Data Types, I/O, Decision Making and Loops",
    type: "chapter",
    path: "/sem1/c/ch3",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Int, float, char types, printf/scanf, if-else, switch case, while/for loops, break and continue."
  },
  {
    id: "ch-c-4",
    title: "Arrays, Strings, and Functions",
    type: "chapter",
    path: "/sem1/c/ch4",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "One-dimensional & multi-dimensional arrays, string manipulation, custom functions, parameters, and recursion."
  },
  {
    id: "ch-c-5",
    title: "Pointers, Structures, and Unions",
    type: "chapter",
    path: "/sem1/c/ch5",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Address-of operator, pointer dereferencing, pointer arithmetic, struct definition, arrow operator, and union vs structure."
  },
  {
    id: "ch-c-6",
    title: "File Management, Dynamic Memory, and Preprocessors",
    type: "chapter",
    path: "/sem1/c/ch6",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Malloc, calloc, realloc, free, fopen, fclose, fscanf, fprintf, #define macro definitions, and header guards."
  },

  {
    id: "sub-ep",
    title: "Engineering Physics",
    type: "subject",
    path: "/sem1/ep/ch0",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Vector fields, electrostatics, Maxwell's electrodynamics, superconductors, and fiber optics.",
    tags: ["physics", "quantum", "lasers", "semiconductors", "waves"]
  },
  {
    id: "ch-ep-0",
    title: "Course Outline (Physics)",
    type: "chapter",
    path: "/sem1/ep/ch0",
    subjectName: "Engineering Physics",
    semester: "Semester-1"
  },
  {
    id: "ch-ep-1",
    title: "Vector Algebra & Fields",
    type: "chapter",
    path: "/sem1/ep/ch1",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Gradient, divergence, curl, line/surface/volume integrals, and physical significance of vector fields."
  },
  {
    id: "ch-ep-2",
    title: "Electrostatics & Magnetostatics",
    type: "chapter",
    path: "/sem1/ep/ch2",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Gauss's law, electric potential, Laplace's and Poisson's equations, Ampere's law, and magnetic vector potential."
  },
  {
    id: "ch-ep-3",
    title: "Electrodynamics & Maxwell’s Equations",
    type: "chapter",
    path: "/sem1/ep/ch3",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Faraday's law, displacement current, Maxwell's four equations, Poynting vector, and electromagnetic wave propagation."
  },
  {
    id: "ch-ep-4",
    title: "Semiconductors & Superconductivity",
    type: "chapter",
    path: "/sem1/ep/ch4",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Intrinsic & extrinsic semiconductors, Fermi level, Meissner effect, Type-I and Type-II superconductivity, BCS theory."
  },
  {
    id: "ch-ep-5",
    title: "LASERs & Optical Fiber",
    type: "chapter",
    path: "/sem1/ep/ch5",
    subjectName: "Engineering Physics",
    semester: "Semester-1",
    description: "Einstein coefficients, population inversion, optical pumping, step index/graded index fibers, and attenuation."
  },

  {
    id: "sub-em1",
    title: "Engineering Mathematics-1",
    type: "subject",
    path: "/sem1/em1/ch0",
    subjectName: "Engineering Mathematics-1",
    semester: "Semester-1",
    description: "Calculus, infinite series, multivariable differentiation, and linear algebra matrices.",
    tags: ["math", "calculus", "matrices", "algebra", "derivatives"]
  },

  // SEMESTER 2
  {
    id: "sub-em2",
    title: "Engineering Mathematics-2",
    type: "subject",
    path: "/sem2/em2/ch0",
    subjectName: "Engineering Mathematics-2",
    semester: "Semester-2",
    description: "Ordinary & partial differential equations, vector integration, and Laplace transforms.",
    tags: ["math", "calculus", "vectors", "differential", "laplace"]
  },
  {
    id: "sub-oops",
    title: "OOPs with Java",
    type: "subject",
    path: "/sem2/oops/ch0",
    subjectName: "OOPs with Java",
    semester: "Semester-2",
    description: "Classes, objects, inheritance, polymorphism, encapsulation, abstraction, interfaces, exception handling in Java.",
    tags: ["java", "oop", "classes", "inheritance", "polymorphism", "interfaces"]
  },
  {
    id: "sub-dsc",
    title: "Data Structures using C",
    type: "subject",
    path: "/sem2/dsc/ch0",
    subjectName: "Data Structures using C",
    semester: "Semester-2",
    description: "Stacks, queues, linked lists, trees, graphs, sorting, searching, and algorithmic complexity.",
    tags: ["data structures", "stack", "queue", "linked list", "trees", "graphs", "sorting"]
  },

  // SEMESTER 3
  {
    id: "sub-coa",
    title: "Computer Organization & Architecture",
    type: "subject",
    path: "/sem3/coa/ch0",
    subjectName: "Computer Organization & Architecture",
    semester: "Semester-3",
    description: "CPU design, ALU, memory hierarchy, caching, pipelining, I/O systems, assembly programming.",
    tags: ["coa", "architecture", "hardware", "cpu", "memory", "cache", "pipelining"]
  },

  // SEMESTER 4
  {
    id: "sub-os",
    title: "Operating Systems",
    type: "subject",
    path: "/sem4/os/ch0",
    subjectName: "Operating Systems",
    semester: "Semester-4",
    description: "Processes, threads, CPU scheduling, synchronization, deadlocks, memory management, virtual memory, filesystems.",
    tags: ["os", "operating system", "processes", "threads", "deadlock", "paging", "scheduling"]
  },
  {
    id: "sub-dops",
    title: "DevOps & Linux Administration",
    type: "subject",
    path: "/sem4/dops/ch0",
    subjectName: "DevOps & Linux Administration",
    semester: "Semester-4",
    description: "Linux shell scripting, git, Docker containers, CI/CD pipelines, Kubernetes orchestration, infrastructure as code.",
    tags: ["devops", "linux", "docker", "kubernetes", "git", "ci/cd", "shell"]
  },

  // SEMESTER 5
  {
    id: "sub-cd",
    title: "Compiler Design",
    type: "subject",
    path: "/sem5/cd/ch0",
    subjectName: "Compiler Design",
    semester: "Semester-5",
    description: "Lexical analysis, syntax analysis (parsing), semantic analysis, intermediate code generation, and optimization.",
    tags: ["compiler", "compiler design", "lexer", "parser", "syntax", "grammar", "ast"]
  },
  {
    id: "sub-cle",
    title: "Cyber Laws and Ethics",
    type: "subject",
    path: "/sem5/cle/ch0",
    subjectName: "Cyber Laws and Ethics",
    semester: "Semester-5",
    description: "Cyber crimes, Information Technology Act, intellectual property rights, data privacy, ethics in computational systems.",
    tags: ["cyber", "law", "ethics", "security", "privacy", "copyright"]
  },

  // SEMESTER 6
  {
    id: "sub-ml",
    title: "Machine Learning",
    type: "subject",
    path: "/sem6/ml/ch0",
    subjectName: "Machine Learning",
    semester: "Semester-6",
    description: "Supervised and unsupervised learning, regression, classification, support vector machines, clustering, and neural networks.",
    tags: ["ml", "machine learning", "regression", "classification", "clustering", "svm", "knn"]
  },

  // QUIZZES
  {
    id: "qz-c",
    title: "C Programming Quiz",
    type: "quiz",
    path: "/quiz/c-programming",
    subjectName: "C Programming",
    semester: "Semester-1",
    description: "Test your skills on variables, decision making, pointers, structures, and files in C.",
    tags: ["quiz", "test", "c-programming", "practice"]
  },
  {
    id: "qz-ml",
    title: "Machine Learning Quiz",
    type: "quiz",
    path: "/quiz/ml",
    subjectName: "Machine Learning",
    semester: "Semester-6",
    description: "Assess your knowledge of supervised/unsupervised algorithms, metrics, and models.",
    tags: ["quiz", "test", "ml", "practice"]
  },
  {
    id: "qz-oops",
    title: "OOPs with Java Quiz",
    type: "quiz",
    path: "/quiz/oops",
    subjectName: "OOPs with Java",
    semester: "Semester-2",
    description: "Challenge yourself with classes, inheritance, encapsulation, and interface principles in Java.",
    tags: ["quiz", "test", "oops", "java", "practice"]
  }
];
