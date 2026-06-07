import Link from "next/link";
import { Metadata } from "next";
import { Righteous } from "next/font/google";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import { chapters, Chapter, SubTopic } from "../constants";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";

import BookmarkButton from "../../../components/BookmarkButton";

// Map chapter/subtopic IDs to their content components
const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
  ch1: Ch1Content,
  ch2: Ch2Content,
  ch3: Ch3Content,
  ch4: Ch4Content,
};

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Helper: find a chapter or subtopic by id
function findChapterOrSubtopic(chapterId: string) {
  const chapter = chapters.find((c) => c.id === chapterId);
  if (chapter) return { data: chapter, isSubTopic: false, parentChapter: null };

  for (const ch of chapters) {
    if (ch.subTopics) {
      const sub = ch.subTopics.find(
        (s) => s.id === chapterId && s.isPage
      ) as (SubTopic & { isPage: true }) | undefined;
      if (sub) return { data: sub, isSubTopic: true, parentChapter: ch };
    }
  }
  return { data: undefined, isSubTopic: false, parentChapter: null };
}

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

// Dynamic SEO metadata
export async function generateMetadata({ params }: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const { data: chapterData } = findChapterOrSubtopic(chapterId);

  const title = chapterData
    ? `${chapterData.title} | Entrepreneurship & Startup | openCSE`
    : "Entrepreneurship & Startup | openCSE";

  return { title };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;

  const { data: chapterData, isSubTopic, parentChapter } =
    findChapterOrSubtopic(chapterId);

  // 404 fallback
  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1] p-6">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link
          href="/sem7/eas/ch0"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  // For subtopics: use their parent chapter's content component
  const componentKey = isSubTopic && parentChapter ? parentChapter.id : chapterData.id;
  const ChapterComponent = chapterComponents[componentKey] ?? null;

  // Prev / Next navigation
  let prevChapter: { id: string; title: string } | null = null;
  let nextChapter: { id: string; title: string } | null = null;

  if (isSubTopic && parentChapter && parentChapter.subTopics) {
    const pageSubTopics = parentChapter.subTopics.filter(
      (s): s is SubTopic & { isPage: true } => !!s.isPage
    );
    const subIndex = pageSubTopics.findIndex((s) => s.id === chapterId);

    if (subIndex > 0) {
      prevChapter = pageSubTopics[subIndex - 1];
    } else {
      prevChapter = {
        id: parentChapter.id,
        title: `Back to ${parentChapter.title}`,
      };
    }

    if (subIndex < pageSubTopics.length - 1) {
      nextChapter = pageSubTopics[subIndex + 1];
    } else {
      const parentIndex = chapters.findIndex((c) => c.id === parentChapter.id);
      if (parentIndex < chapters.length - 1) {
        nextChapter = chapters[parentIndex + 1];
      }
    }
  } else {
    const currentIndex = chapters.findIndex((c) => c.id === chapterId);
    prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    nextChapter =
      currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  }

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        {/* Subject title */}
        <h1 className={`text-3xl sm:text-4xl font-bold ${righteous.className} mb-2`}>
          Entrepreneurship & Startup
        </h1>

        {/* Chapter title + bookmark */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className={`text-xl sm:text-2xl mt-[-4px] ${righteous.className}`}>
            {isSubTopic && parentChapter
              ? `${parentChapter.title} / ${chapterData.title}`
              : chapterData.title}
          </p>
          <BookmarkButton title={`EAS: ${chapterData.title}`} />
        </div>

        {/* Top navigation */}
        <div className="flex justify-between mt-3 gap-2">
          {prevChapter ? (
            <Link
              href={`/sem7/eas/${prevChapter.id}`}
              className="px-3 py-1 text-lg sm:text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/sem7/eas/${nextChapter.id}`}
              className="px-3 py-1 text-lg sm:text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-3" />

        {/* Chapter content */}
        {ChapterComponent ? (
          <ChapterComponent />
        ) : (
          <p className="text-[#e2d1c1] opacity-60 text-center mt-12">
            Content coming soon.
          </p>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-between my-8 gap-2 flex-wrap">
        {prevChapter ? (
          <Link
            href={`/sem7/eas/${prevChapter.id}`}
            className="px-3 py-2 bg-[#e2d1c1] text-base sm:text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition max-w-[45%] text-center"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="inline-block mr-1 shrink-0" />
            <span className="truncate">{prevChapter.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem7/eas/${nextChapter.id}`}
            className="px-3 py-2 bg-[#e2d1c1] text-base sm:text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition max-w-[45%] text-center"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <span className="truncate">{nextChapter.title}</span>
            <ArrowBigRight className="inline-block ml-1 shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
