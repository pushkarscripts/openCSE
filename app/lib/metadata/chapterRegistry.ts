// Dynamic chapter data registry
import { SUBJECTS } from "./subjectMetadata";

export interface ChapterMetadata {
  id: string;
  title: string;
  subjectCode: string;
  semester: number;
  keywords?: string[]; // Optional enhanced search terms
}

export interface SubjectChapters {
  subjectCode: string;
  chapters: ChapterMetadata[];
}

// This will be populated by importing from each subject's metadata
export const CHAPTER_REGISTRY: Record<string, SubjectChapters> = {};

// Dynamic registration function (called by each subject)
export const registerSubjectChapters = (
  subjectCode: string,
  chapters: Array<{ id: string; title: string; keywords?: string[] }>
) => {
  const subject = SUBJECTS[subjectCode];
  if (!subject) {
    console.warn(`Subject ${subjectCode} not found in SUBJECTS metadata`);
    return;
  }

  CHAPTER_REGISTRY[subjectCode] = {
    subjectCode,
    chapters: chapters.map((ch) => ({
      ...ch,
      subjectCode,
      semester: subject.semester,
    })),
  };
};

// Helper to get all registered chapters
export const getAllChapters = (): ChapterMetadata[] => {
  return Object.values(CHAPTER_REGISTRY).flatMap((sc) => sc.chapters);
};

// Helper to get chapters for a specific subject
export const getChaptersBySubject = (subjectCode: string): ChapterMetadata[] => {
  return CHAPTER_REGISTRY[subjectCode]?.chapters || [];
};
