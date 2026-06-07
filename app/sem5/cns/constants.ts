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
  { id: "ch1", title: "Symmetric Encryption (DES & AES)" },
  { id: "ch2", title: "Asymmetric Encryption (RSA)" },
  { id: "ch3", title: "Hash Functions & Digital Signatures" },
  { id: "ch4", title: "SSL/TLS & HTTPS Protocols" },
  { id: "ch5", title: "Firewalls & Intrusion Detection" },
  { id: "ch6", title: "Common Attacks & Defenses" },
];