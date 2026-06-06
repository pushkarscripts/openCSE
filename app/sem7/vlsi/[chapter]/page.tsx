import Link from "next/link";
import { Metadata } from "next";
import { Righteous } from "next/font/google";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import BookmarkButton from "../../../components/BookmarkButton";
import { chapters } from "../constants";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { Ch7Content } from "../content/chapter7";
import { Ch8Content } from "../content/chapter8";
import { Ch9Content } from "../content/chapter9";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
  ch1: Ch1Content,
  ch2: Ch2Content,
  ch3: Ch3Content,
  ch4: Ch4Content,
  ch5: Ch5Content,
  ch6: Ch6Content,
  ch7: Ch7Content,
  ch8: Ch8Content,
  ch9: Ch9Content,
};

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export async function generateMetadata({ params }: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const chapterData = chapters.find((chapter) => chapter.id === chapterId);

  return {
    title: chapterData
      ? `${chapterData.title} | VLSI and Embedded Systems | openCSE`
      : "VLSI and Embedded Systems | openCSE",
  };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const chapterData = chapters.find((chapter) => chapter.id === chapterId);

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link
          href="/sem7/vlsi/ch0"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  const ChapterComponent = chapterComponents[chapterData.id];
  const currentIndex = chapters.findIndex((chapter) => chapter.id === chapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          VLSI and Embedded Systems
        </h1>

        <div className="flex items-center justify-between gap-4">
          <p className={`text-2xl mt-[-8px] ${righteous.className}`}>{chapterData.title}</p>
          <BookmarkButton title={`VLSI: ${chapterData.title}`} />
        </div>

        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem7/vlsi/${prevChapter.id}`}
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
              href={`/sem7/vlsi/${nextChapter.id}`}
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
        <ChapterComponent />
      </div>

      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem7/vlsi/${prevChapter.id}`}
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
            href={`/sem7/vlsi/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title} <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
