import { SUBJECTS } from "../metadata/subjectMetadata";
import { CHAPTER_REGISTRY } from "../metadata/chapterRegistry";
import { SearchableItem } from "./searchTypes";

// Build search index from metadata
export const buildSearchIndex = (): SearchableItem[] => {
  const items: SearchableItem[] = [];

  // Index subjects
  Object.values(SUBJECTS).forEach((subject) => {
    if (!subject.available) return;

    items.push({
      type: "subject",
      id: subject.code,
      title: subject.name,
      subtitle: `Semester ${subject.semester}`,
      url: `/sem${subject.semester}/${subject.code}/ch0`,
      semester: subject.semester,
      subjectCode: subject.code,
      keywords: subject.keywords,
      searchText: [
        subject.name,
        subject.fullName,
        ...subject.keywords,
        `semester ${subject.semester}`,
        `sem${subject.semester}`,
      ]
        .join(" ")
        .toLowerCase(),
    });
  });

  // Index chapters
  Object.values(CHAPTER_REGISTRY).forEach((subjectChapters) => {
    const subject = SUBJECTS[subjectChapters.subjectCode];
    if (!subject?.available) return;

    subjectChapters.chapters.forEach((chapter) => {
      items.push({
        type: "chapter",
        id: `${subjectChapters.subjectCode}-${chapter.id}`,
        title: chapter.title,
        subtitle: subject.name,
        url: `/sem${subject.semester}/${subjectChapters.subjectCode}/${chapter.id}`,
        semester: subject.semester,
        subjectCode: subjectChapters.subjectCode,
        subjectName: subject.name,
        keywords: chapter.keywords || [],
        searchText: [
          chapter.title,
          subject.name,
          ...subject.keywords,
          ...(chapter.keywords || []),
        ]
          .join(" ")
          .toLowerCase(),
      });
    });
  });

  return items;
};

// Memoized index (built once on client)
let cachedIndex: SearchableItem[] | null = null;

export const getSearchIndex = (): SearchableItem[] => {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
};

// Force rebuild index (useful for development/testing)
export const rebuildSearchIndex = (): SearchableItem[] => {
  cachedIndex = buildSearchIndex();
  return cachedIndex;
};
