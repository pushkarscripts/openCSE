export type SubTopic = 
  | { id: string; title: string; isPage: true }
  | { id: string; title: string; isPage?: false };

export type Chapter = {
  id: string;
  title: string;
  subTopics?: SubTopic[];
};

export const chapters: Chapter[] = [
  { id: "ch0", title: "Course Outline" },
  { id: "ch1", title: "Introduction to Compiler Design" },
  { id: "ch2", title: "Structure & Phases of a Compiler" },
  { id: "ch3", title: "Compiler Writing Tools" },
  {
    id: "ch4",
    title: "Lexical Analysis & Tokens",
    subTopics: [
      { id: "ch4-lexical-analyzer-gen", title: "Hand-written vs Tool Lexers", isPage: true },
    ],
  },
  { id: "ch5", title: "Bootstrapping & Cross Compilers" },
  {
    id: "ch6",
    title: "Finite Automata & DFA Construction",
    subTopics: [
      { id: "ch6-nfa-to-dfa-subset", title: "Subset Construction", isPage: true },
      { id: "ch6-dfa-minimization", title: "DFA Minimization", isPage: true },
      { id: "ch6-dfa-solved-problem", title: "Solved Problem: Min DFA", isPage: true },
    ],
  },
];
