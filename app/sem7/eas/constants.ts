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
  {
    id: "ch1",
    title: "Fundamentals of Entrepreneurship",
    subTopics: [
      { id: "ch1-concept", title: "Concept of Entrepreneurship", isPage: true },
      { id: "ch1-characteristics", title: "Characteristics of an Entrepreneur", isPage: true },
      { id: "ch1-types", title: "Types of Entrepreneur", isPage: true },
      { id: "ch1-functions", title: "Functions of Entrepreneur", isPage: true },
      { id: "ch1-women", title: "Women Entrepreneurship in India", isPage: true },
    ],
  },
  {
    id: "ch2",
    title: "Startup Ecosystem",
    subTopics: [
      { id: "ch2-concept", title: "Concept of Startup", isPage: true },
      { id: "ch2-types", title: "Types of Startups", isPage: true },
      { id: "ch2-ecosystem", title: "Startup Ecosystems", isPage: true },
    ],
  },
  {
    id: "ch3",
    title: "Ideation and Design Thinking",
    subTopics: [
      { id: "ch3-concept", title: "Concept of Ideation", isPage: true },
      { id: "ch3-process", title: "Process of Ideation", isPage: true },
      { id: "ch3-incubation", title: "Idea Incubation", isPage: true },
      { id: "ch3-techniques", title: "Ideation Techniques", isPage: true },
    ],
  },
  {
    id: "ch4",
    title: "Funding and Sustainability",
    subTopics: [
      { id: "ch4-angel", title: "Angel Funding", isPage: true },
      { id: "ch4-venture", title: "Venture Funding", isPage: true },
      { id: "ch4-ownership", title: "Ownership of Startups", isPage: true },
      { id: "ch4-failure", title: "Causes of Startup Failure", isPage: true },
      { id: "ch4-funding", title: "Funding for Startups", isPage: true },
    ],
  },
];
