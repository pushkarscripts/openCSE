// lib/progressTracker.ts

export interface RecentResource {
  pathname: string;
  semester: string;
  subjectCode: string;
  chapterId: string;
  subjectTitle: string;
  chapterTitle: string;
  timestamp: string;
}

export interface ProgressState {
  completedChapters: {
    [subjectCode: string]: {
      [chapterId: string]: boolean;
    };
  };
  timeLogs: {
    [dateStr: string]: number; // 'YYYY-MM-DD' -> seconds
  };
  subjectTimeLogs: {
    [subjectCode: string]: number; // subjectCode -> seconds
  };
  recentlyOpened: RecentResource[];
  lastActive: string | null;
  completedQuizzes: {
    [quizSlug: string]: {
      score: number;
      total: number;
      completedAt: string;
    };
  };
  unlockedBadges: string[];
}

export interface SubjectMetadata {
  code: string;
  name: string;
  semester: string;
  chapters: { id: string; title: string }[];
}

// Full metadata for the 12 available subjects on openCSE
export const SUBJECTS_METADATA: Record<string, SubjectMetadata> = {
  c: {
    code: "c",
    name: "C Programming",
    semester: "Semester-1",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Computing" },
      { id: "ch2", title: "Overview of C" },
      { id: "ch3", title: "Data Types, I/O, Decision Making and Loops" },
      { id: "ch4", title: "Arrays, Strings, and Functions" },
      { id: "ch5", title: "Pointers, Structures, and Unions" },
      { id: "ch6", title: "File Management, Dynamic Memory, and Preprocessors" },
    ],
  },
  em1: {
    code: "em1",
    name: "Engineering Mathematics-1",
    semester: "Semester-1",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Differential Calculus" },
      { id: "ch2", title: "Linear Algebra" },
      { id: "ch3", title: "Ordinary Differential Equations" },
      { id: "ch4", title: "Laplace Transforms" },
    ],
  },
  ep: {
    code: "ep",
    name: "Engineering Physics",
    semester: "Semester-1",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Vector Algebra & Fields" },
      { id: "ch2", title: "Electrostatics & Magnetostatics" },
      { id: "ch3", title: "Electrodynamics & Maxwell's Equations" },
      { id: "ch4", title: "Semiconductors & Superconductivity" },
      { id: "ch5", title: "LASERs & Optical Fiber" },
    ],
  },
  dsc: {
    code: "dsc",
    name: "Data Structures using C",
    semester: "Semester-2",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Arrays" },
      { id: "ch2", title: "Linked Lists" },
      { id: "ch3", title: "Stacks" },
    ],
  },
  em2: {
    code: "em2",
    name: "Engineering Mathematics-2",
    semester: "Semester-2",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Sequences and Series" },
      { id: "ch2", title: "Numerical Analysis" },
      { id: "ch3", title: "Complex Variables" },
      { id: "ch4", title: "Integral Calculus" },
    ],
  },
  oops: {
    code: "oops",
    name: "OOPs with Java",
    semester: "Semester-2",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Java" },
      { id: "ch2", title: "Classes and Objects" },
      { id: "ch3", title: "Inheritance & Polymorphism" },
      { id: "ch4", title: "Packages & Interfaces" },
      { id: "ch5", title: "Exception Handling" },
      { id: "ch6", title: "Threads" },
      { id: "ch7", title: "Generics" },
      { id: "ch8", title: "Java Library & Swing GUI" },
    ],
  },
  coa: {
    code: "coa",
    name: "Computer Organization & Architecture",
    semester: "Semester-3",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Computer Architecture" },
      { id: "ch2", title: "Performance Analysis" },
      { id: "ch3", title: "MIPS - Language of the Computer" },
      { id: "ch4", title: "Computer Arithmetic" },
      { id: "ch5", title: "Building a Datapath" },
      { id: "ch6", title: "Pipelining" },
      { id: "ch7", title: "Memory Hierarchy" },
      { id: "ch8", title: "Storage and I/O Systems" },
    ],
  },
  dbms: {
    code: "dbms",
    name: "Database Management Systems",
    semester: "Semester-4",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Databases" },
      { id: "ch2", title: "Entity-Relationship Model" },
      { id: "ch3", title: "Relational Model and SQL" },
    ],
  },
  dops: {
    code: "dops",
    name: "DevOps & Linux Administration",
    semester: "Semester-4",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Linux" },
      { id: "ch2", title: "Linux Terminal & File System" },
      { id: "ch3", title: "Basic Linux Commands" },
      { id: "ch4", title: "Users, Permissions & Packages" },
      { id: "ch5", title: "Shell Scripting Basics" },
      { id: "ch6", title: "Git & GitHub Basics" },
      { id: "ch7", title: "Introduction to DevOps" },
      { id: "ch8", title: "CI/CD, Docker & Cloud Basics" },
    ],
  },
  os: {
    code: "os",
    name: "Operating Systems",
    semester: "Semester-4",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Operating Systems" },
      { id: "ch2", title: "Process Management" },
      { id: "ch3", title: "CPU Scheduling" },
      { id: "ch4", title: "Process Synchronization" },
      { id: "ch5", title: "Deadlocks" },
      { id: "ch6", title: "Memory Management" },
      { id: "ch7", title: "Paging and Segmentation" },
      { id: "ch8", title: "File Systems and I/O Management" },
    ],
  },
  cd: {
    code: "cd",
    name: "Compiler Design",
    semester: "Semester-5",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Compiler Design" },
      { id: "ch2", title: "Structure & Phases of a Compiler" },
      { id: "ch3", title: "Compiler Writing Tools" },
      { id: "ch4", title: "Lexical Analysis & Tokens" },
      { id: "ch5", title: "Bootstrapping & Cross Compilers" },
      { id: "ch6", title: "Finite Automata & DFA Construction" },
      { id: "ch7", title: "Introduction to Syntax Analysis" },
      { id: "ch8", title: "Top-Down Parsing & LL(1)" },
      { id: "ch9", title: "Bottom-Up Parsing & Shift-Reduce" },
      { id: "ch10", title: "LR(0) & SLR Parsing" },
      { id: "ch11", title: "CLR(1) & LALR Parsing" },
      { id: "ch12", title: "Advanced Parsing & Ambiguity" },
    ],
  },
  cle: {
    code: "cle",
    name: "Cyber Laws and Ethics",
    semester: "Semester-5",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Cyber Laws & Ethics" },
      { id: "ch2", title: "Cyber Crimes" },
      { id: "ch3", title: "IT Act 2000 & Amendments" },
      { id: "ch4", title: "Data Privacy & Protection" },
      { id: "ch5", title: "Digital Signatures & IPR" },
      { id: "ch6", title: "Ethical Hacking & Security Ethics" },
      { id: "ch7", title: "Social Media & Internet Ethics" },
    ],
  },
  ml: {
    code: "ml",
    name: "Machine Learning",
    semester: "Semester-6",
    chapters: [
      { id: "ch0", title: "Course Outline" },
      { id: "ch1", title: "Introduction to Machine Learning" },
      { id: "ch2", title: "Supervised Learning: Regression" },
      { id: "ch3", title: "Supervised Learning: Classification" },
      { id: "ch4", title: "Unsupervised Learning" },
      { id: "ch5", title: "Unit 5: Trends and Applications" },
      { id: "ch6", title: "Unit 6: Advanced Topics & MLOps (Bonus)" },
    ],
  },
};

export interface BadgeDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const BADGES: BadgeDefinition[] = [
  {
    id: "first_chapter",
    title: "First Steps",
    description: "Visit or complete your first learning chapter",
    icon: "🧭",
  },
  {
    id: "study_novice",
    title: "Focused Scholar",
    description: "Spend 5 minutes in active study time",
    icon: "⏱️",
  },
  {
    id: "dedicated_learner",
    title: "Dedicated Learner",
    description: "Spend 30 minutes in active study time",
    icon: "📚",
  },
  {
    id: "quiz_whiz",
    title: "Quiz Whiz",
    description: "Complete your first inline chapter quiz",
    icon: "⚡",
  },
  {
    id: "consistency_champ",
    title: "Consistency Champ",
    description: "Study on at least 3 different days",
    icon: "🔥",
  },
  {
    id: "c_programming_master",
    title: "C Architect",
    description: "Complete all chapters of the C Programming course",
    icon: "💻",
  },
  {
    id: "os_expert",
    title: "Kernel Knight",
    description: "Complete all chapters of Operating Systems",
    icon: "🔧",
  },
  {
    id: "sem1_conqueror",
    title: "Semester 1 Pioneer",
    description: "Complete all available subjects in Semester 1",
    icon: "🎓",
  },
  {
    id: "ultimate_scholar",
    title: "Grand Scholar",
    description: "Complete 100% of at least 3 subjects",
    icon: "🏆",
  },
];

const LOCAL_STORAGE_KEY = "opencse_progress_v1";

const DEFAULT_STATE: ProgressState = {
  completedChapters: {},
  timeLogs: {},
  subjectTimeLogs: {},
  recentlyOpened: [],
  lastActive: null,
  completedQuizzes: {},
  unlockedBadges: [],
};

// Safe wrapper for server-side rendering (SSR) environments
function getStorage(): Storage | null {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return null;
}

export function loadProgressData(): ProgressState {
  const storage = getStorage();
  if (!storage) return DEFAULT_STATE;

  try {
    const raw = storage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      // Create fresh state
      storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_STATE));
      return DEFAULT_STATE;
    }
    const state = JSON.parse(raw) as ProgressState;
    // Backfill any missing arrays/objects to prevent runtime crashes
    return {
      completedChapters: state.completedChapters || {},
      timeLogs: state.timeLogs || {},
      subjectTimeLogs: state.subjectTimeLogs || {},
      recentlyOpened: state.recentlyOpened || [],
      lastActive: state.lastActive || null,
      completedQuizzes: state.completedQuizzes || {},
      unlockedBadges: state.unlockedBadges || [],
    };
  } catch (e) {
    console.error("Error loading progress data", e);
    return DEFAULT_STATE;
  }
}

export function saveProgressData(state: ProgressState) {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Error saving progress data", e);
  }
}

export function recordVisit(pathname: string) {
  // Parse semester, subject code, and chapter from pathname
  // Expected formats: /sem1/c/ch1 or /sem6/ml/ch2-data-preprocessing, etc.
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 3 || !parts[0].startsWith("sem")) return;

  const [semester, subjectCode, rawChapterId] = parts;
  const subjectMeta = SUBJECTS_METADATA[subjectCode];
  if (!subjectMeta) return;

  // Normalize chapter code (for subpages or subtopics, map to parent chapter)
  let chapterId = rawChapterId;
  let chapterTitle = rawChapterId;

  // Let's check if rawChapterId matches a predefined chapter, or if it is a subtopic
  const directChapter = subjectMeta.chapters.find((ch) => ch.id === rawChapterId);
  if (directChapter) {
    chapterTitle = directChapter.title;
  } else {
    // If it's a subtopic, map to its chapter code if it starts with chX
    const match = rawChapterId.match(/^(ch\d+)/);
    if (match) {
      const parentId = match[1];
      const parentCh = subjectMeta.chapters.find((ch) => ch.id === parentId);
      if (parentCh) {
        chapterId = parentId;
        chapterTitle = `${parentCh.title} (${rawChapterId.replace(parentId + "-", "").replace(/-/g, " ")})`;
      }
    }
  }

  const state = loadProgressData();
  state.lastActive = pathname;

  // Build the resource record
  const newRecord: RecentResource = {
    pathname,
    semester,
    subjectCode,
    chapterId,
    subjectTitle: subjectMeta.name,
    chapterTitle,
    timestamp: new Date().toISOString(),
  };

  // Add to recently opened, filtering duplicates and keeping max 8
  const filtered = state.recentlyOpened.filter((item) => item.pathname !== pathname);
  state.recentlyOpened = [newRecord, ...filtered].slice(0, 8);

  // Trigger Badge unlock checks
  if (!state.unlockedBadges.includes("first_chapter")) {
    state.unlockedBadges.push("first_chapter");
  }

  saveProgressData(state);
}

export function recordStudyTime(seconds: number, subjectCode?: string) {
  if (seconds <= 0) return;
  const state = loadProgressData();

  // 1. Log overall time by date (YYYY-MM-DD)
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD format
  state.timeLogs[today] = (state.timeLogs[today] || 0) + seconds;

  // 2. Log time by subject
  if (subjectCode && SUBJECTS_METADATA[subjectCode]) {
    state.subjectTimeLogs[subjectCode] = (state.subjectTimeLogs[subjectCode] || 0) + seconds;
  }

  // 3. Check for time-based badges
  const totalSeconds = Object.values(state.timeLogs).reduce((acc, curr) => acc + curr, 0);

  if (totalSeconds >= 300 && !state.unlockedBadges.includes("study_novice")) {
    state.unlockedBadges.push("study_novice");
  }
  if (totalSeconds >= 1800 && !state.unlockedBadges.includes("dedicated_learner")) {
    state.unlockedBadges.push("dedicated_learner");
  }

  // 4. Check for consistency badge (study on 3 distinct days)
  const activeDays = Object.keys(state.timeLogs).filter((date) => state.timeLogs[date] > 30);
  if (activeDays.length >= 3 && !state.unlockedBadges.includes("consistency_champ")) {
    state.unlockedBadges.push("consistency_champ");
  }

  saveProgressData(state);
}

export function toggleChapterCompletion(subjectCode: string, chapterId: string): boolean {
  const state = loadProgressData();

  if (!state.completedChapters[subjectCode]) {
    state.completedChapters[subjectCode] = {};
  }

  const isCompleted = !state.completedChapters[subjectCode][chapterId];
  state.completedChapters[subjectCode][chapterId] = isCompleted;

  // Perform badge check
  checkSubjectCompletionBadges(state, subjectCode);

  saveProgressData(state);
  return isCompleted;
}

export function isChapterCompleted(subjectCode: string, chapterId: string): boolean {
  const state = loadProgressData();
  return !!state.completedChapters[subjectCode]?.[chapterId];
}

export function recordQuizCompletion(quizSlug: string, score: number, total: number) {
  const state = loadProgressData();
  
  // Record quiz score (only keep highest score)
  const existing = state.completedQuizzes[quizSlug];
  if (!existing || existing.score < score) {
    state.completedQuizzes[quizSlug] = {
      score,
      total,
      completedAt: new Date().toISOString(),
    };
  }

  // Award quiz whiz badge
  if (!state.unlockedBadges.includes("quiz_whiz")) {
    state.unlockedBadges.push("quiz_whiz");
  }

  // Automatically mark the chapter as completed if they score >= 70%
  const quizToChapterMap: Record<string, { subject: string; chapter: string }> = {
    "c-intro": { subject: "c", chapter: "ch1" },
    "c-overview": { subject: "c", chapter: "ch2" },
    "c-data-types": { subject: "c", chapter: "ch3" },
    "c-arrays-functions": { subject: "c", chapter: "ch4" },
    "c-pointers-structures": { subject: "c", chapter: "ch5" },
    "c-file-memory-preprocessors": { subject: "c", chapter: "ch6" },
  };

  const mapping = quizToChapterMap[quizSlug];
  if (mapping && score / total >= 0.7) {
    if (!state.completedChapters[mapping.subject]) {
      state.completedChapters[mapping.subject] = {};
    }
    state.completedChapters[mapping.subject][mapping.chapter] = true;
    checkSubjectCompletionBadges(state, mapping.subject);
  }

  saveProgressData(state);
}

function checkSubjectCompletionBadges(state: ProgressState, subjectCode: string) {
  const meta = SUBJECTS_METADATA[subjectCode];
  if (!meta) return;

  const completed = state.completedChapters[subjectCode] || {};
  const allChaptersCompleted = meta.chapters.every((ch) => completed[ch.id]);

  if (allChaptersCompleted) {
    // 1. Award subject-specific badge
    if (subjectCode === "c" && !state.unlockedBadges.includes("c_programming_master")) {
      state.unlockedBadges.push("c_programming_master");
    }
    if (subjectCode === "os" && !state.unlockedBadges.includes("os_expert")) {
      state.unlockedBadges.push("os_expert");
    }

    // 2. Check Semester 1 complete
    const sem1Subjects = ["c", "em1", "ep"];
    const sem1Complete = sem1Subjects.every((code) => {
      const subMeta = SUBJECTS_METADATA[code];
      const subCompleted = state.completedChapters[code] || {};
      return subMeta.chapters.every((ch) => subCompleted[ch.id]);
    });
    if (sem1Complete && !state.unlockedBadges.includes("sem1_conqueror")) {
      state.unlockedBadges.push("sem1_conqueror");
    }

    // 3. Count fully completed subjects
    let fullyCompletedCount = 0;
    for (const code of Object.keys(SUBJECTS_METADATA)) {
      const subMeta = SUBJECTS_METADATA[code];
      const subCompleted = state.completedChapters[code] || {};
      const complete = subMeta.chapters.every((ch) => subCompleted[ch.id]);
      if (complete) fullyCompletedCount++;
    }

    if (fullyCompletedCount >= 3 && !state.unlockedBadges.includes("ultimate_scholar")) {
      state.unlockedBadges.push("ultimate_scholar");
    }
  }
}

// Experience points and Leveling
export function getLevelProgress(): { xp: number; nextLevelXp: number; level: number; rank: string } {
  const state = loadProgressData();

  // Compute total XP
  let xp = 0;

  // Visit = 5 XP (computed by recently opened resource length + a base if they studied)
  const uniqueVisited = state.recentlyOpened.length;
  xp += uniqueVisited * 5;

  // Completed chapter = 50 XP
  Object.keys(state.completedChapters).forEach((subj) => {
    const chapters = state.completedChapters[subj] || {};
    const count = Object.values(chapters).filter(Boolean).length;
    xp += count * 50;
  });

  // Completed quiz = 100 XP
  Object.keys(state.completedQuizzes).forEach(() => {
    xp += 100;
  });

  // Add study hours bonus: 1 XP per 10 seconds studied
  const totalSeconds = Object.values(state.timeLogs).reduce((acc, curr) => acc + curr, 0);
  xp += Math.floor(totalSeconds / 10);

  // Level calculation: Every 150 XP is a level
  const xpPerLevel = 150;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const xpInCurrentLevel = xp % xpPerLevel;

  // Student Ranks
  let rank = "CSE Novice";
  if (level >= 8) rank = "Grandmaster Coder";
  else if (level >= 6) rank = "Algorithmic Sage";
  else if (level >= 4) rank = "System Architect";
  else if (level >= 2) rank = "Code Warrior";

  return {
    xp: xpInCurrentLevel,
    nextLevelXp: xpPerLevel,
    level,
    rank,
  };
}

export function getWeeklyStudyDuration(): { [dayName: string]: number } {
  const state = loadProgressData();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result: { [dayName: string]: number } = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  // Get last 7 days including today
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toLocaleDateString("en-CA"); // YYYY-MM-DD
    const dayName = daysOfWeek[date.getDay()];
    
    // Add seconds spent
    const seconds = state.timeLogs[dateStr] || 0;
    result[dayName] = Math.round(seconds / 60); // convert to minutes
  }

  return result;
}

export function getMonthlyStudyDurationMinutes(): number {
  const state = loadProgressData();
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed

  let totalSeconds = 0;
  Object.keys(state.timeLogs).forEach((dateStr) => {
    const date = new Date(dateStr);
    if (date.getFullYear() === currentYear && date.getMonth() === currentMonth) {
      totalSeconds += state.timeLogs[dateStr] || 0;
    }
  });

  return Math.round(totalSeconds / 60);
}
