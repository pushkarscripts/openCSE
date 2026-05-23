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
  { id: "ch1", title: "Introduction to Cyber Laws & Ethics" },
  { id: "ch2", title: "Cyber Crimes" },
  { id: "ch3", title: "IT Act 2000 & Amendments" },
  { id: "ch4", title: "Data Privacy & Protection" },
  { id: "ch5", title: "Digital Signatures & IPR" },
  { id: "ch6", title: "Ethical Hacking & Security Ethics" },
  { id: "ch7", title: "Social Media & Internet Ethics" },
];
