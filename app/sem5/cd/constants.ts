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
  { id: "ch7", title: "Introduction to Syntax Analysis" },
  {
    id: "ch8",
    title: "Top-Down Parsing & LL(1)",
    subTopics: [
      { id: "ch8-ll1-solved-problem", title: "Solved Problem: LL(1)", isPage: true },
    ],
  },
  { id: "ch9", title: "Bottom-Up Parsing & Shift-Reduce" },
  {
    id: "ch10",
    title: "LR(0) & SLR Parsing",
    subTopics: [
      { id: "ch10-slr-solved-problem", title: "Solved Problem: SLR", isPage: true },
    ],
  },
  {
    id: "ch11",
    title: "CLR(1) & LALR Parsing",
    subTopics: [
      { id: "ch11-lalr-solved-problem", title: "Solved Problem: LALR", isPage: true },
    ],
  },
  { id: "ch12", title: "Advanced Parsing & Ambiguity" },
  { id: "ch13", title: "Introduction to Semantic Analysis" },
  {
    id: "ch14",
    title: "Attribute Grammars",
    subTopics: [
      { id: "ch14-expr-eval-example", title: "Worked Example: Expression Evaluation", isPage: true },
    ],
  },
  { id: "ch15", title: "Syntax Directed Definitions (SDD)" },
  {
    id: "ch16",
    title: "Syntax Directed Translation (SDT)",
    subTopics: [
      { id: "ch16-sdt-postfix-trace", title: "SDT Trace: Infix to Postfix", isPage: true },
    ],
  },
  { id: "ch17", title: "S-Attributed & L-Attributed Definitions" },
  { id: "ch18", title: "Evaluation Order & Dependency Graphs" },
  {
    id: "ch19",
    title: "Symbol Table",
    subTopics: [
      { id: "ch19-scope-management", title: "Scope Management in Detail", isPage: true },
    ],
  },
  {
    id: "ch20",
    title: "Runtime Environment & Activation Records",
    subTopics: [
      { id: "ch20-parameter-passing", title: "Parameter Passing Mechanisms", isPage: true },
    ],
  },
  { id: "ch21", title: "Unit 3 Solved PYQs" },
];
