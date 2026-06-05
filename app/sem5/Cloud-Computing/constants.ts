export type Chapter = {
  id: string;
  title: string;
  subTopics?: SubTopic[];
};

export type SubTopic = {
  id: string;
  title: string;
  isPage?: true;
};

export const chapters: Chapter[] = [
  { id: "ch0", title: "Course Outline" },
  { id: "ch1", title: "What is Cloud Computing" },
  { id: "ch2", title: "Cloud Computing Models" },
  { id: "ch3", title: "Benefits and Challenges" },
  { id: "ch4", title: "Cloud vs On-Premises" },
  { id: "ch5", title: "Infrastructure as a Service (IaaS)" },
  { id: "ch6", title: "Platform as a Service (PaaS)" },
  { id: "ch7", title: "Software as a Service (SaaS)" },
  { id: "ch8", title: "Comparing Service Models" },
  { id: "ch9", title: "Public Cloud" },
  { id: "ch10", title: "Private Cloud" },
  { id: "ch11", title: "Hybrid Cloud" },
  { id: "ch12", title: "Community Cloud" },
  { id: "ch13", title: "Cloud-Native Architecture" },
  { id: "ch14", title: "Microservices Architecture" },
  { id: "ch15", title: "Scalability Patterns" },
  { id: "ch16", title: "High Availability & Disaster Recovery" },
  { id: "ch17", title: "Identity & Access Management" },
  { id: "ch18", title: "Data Protection" },
  { id: "ch19", title: "Network Security" },
  { id: "ch20", title: "Compliance & Governance" },
  { id: "ch21", title: "Amazon Web Services (AWS)" },
  { id: "ch22", title: "Microsoft Azure" },
  { id: "ch23", title: "Google Cloud Platform" },
  { id: "ch24", title: "Provider Comparison & Cost Analysis" },
  { id: "ch25", title: "Docker Fundamentals" },
  { id: "ch26", title: "Container Best Practices" },
  { id: "ch27", title: "Kubernetes Basics" },
  { id: "ch28", title: "Managing Cloud Containers" },
];