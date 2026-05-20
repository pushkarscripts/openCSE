import Link from "next/link";
import { Metadata } from "next";
import { Righteous } from "next/font/google";
import { Ch0Content } from "../content/chapter0";   // ← only ch0 for now
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { chapters, Chapter, SubTopic } from "../constants";  // ← cle constants

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

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Only ch0 is available for now — more chapters added in future PRs
const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
};

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export async function generateMetadata({
  params,
}: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const { data: chapterData } = findChapterOrSubtopic(chapterId);

  const title = chapterData
    ? `${chapterData.title} | Cyber Laws and Ethics | openCSE`  // ← subject name
    : "Cyber Laws and Ethics | openCSE";

  return { title };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;

  const {
    data: chapterData,
    isSubTopic,
    parentChapter,
  } = findChapterOrSubtopic(chapterId);

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link
          href="/sem5/cle/ch0"   // ← cle path
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  const ChapterComponent = chapterComponents[chapterData.id];
  let prevChapter = null;
  let nextChapter = null;

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
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Cyber Laws and Ethics    {/* ← subject name */}
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {isSubTopic && parentChapter
            ? `${parentChapter.title} / ${chapterData.title}`
            : chapterData.title}
        </p>

        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem5/cle/${prevChapter.id}`}   // ← cle path
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : (
            <div />
          )}
          {nextChapter ? (
            <Link
              href={`/sem5/cle/${nextChapter.id}`}   // ← cle path
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-3" />

        {/* Show content if available, else show coming soon message */}
        {ChapterComponent ? (
          <ChapterComponent />
        ) : (
          <div className="text-center py-12 text-[#c7a669]">
            <p className="text-2xl font-semibold">Coming Soon</p>
            <p className="mt-2 text-lg opacity-70">
              This chapter is under development. Check back soon!
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem5/cle/${prevChapter.id}`}   // ← cle path
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="inline-block mr-1" /> {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link
            href={`/sem5/cle/${nextChapter.id}`}   // ← cle path
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title} {" "}
            <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
