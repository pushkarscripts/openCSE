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
  { id: "ch1", title: "Thermodynamics" },
  { id: "ch2", title: "Steam Properties and Steam Tables" },
  { id: "ch3", title: "Otto, Diesel and Carnot Cycles" },
  { id: "ch4", title: "IC Engines" },
  { id: "ch5", title: "Engineering Materials" },
  { id: "ch6", title: "Manufacturing Processes" },
  { id: "ch7", title: "Stress-Strain Concepts" },
  { id: "ch8", title: "SFD and BMD" },
  { id: "ch9", title: "Bending and Torsion" },
];