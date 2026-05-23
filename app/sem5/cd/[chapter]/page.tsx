import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Righteous } from "next/font/google";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { LexicalAnalyzerGenContent } from "../content/ch4-lexical-analyzer-gen";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { NfaToDfaSubsetContent } from "../content/ch6-nfa-to-dfa-subset";
import { DfaMinimizationContent } from "../content/ch6-dfa-minimization";
import { DfaSolvedProblemContent } from "../content/ch6-dfa-solved-problem";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { chapters, SubTopic } from "../constants";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

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

const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
  ch1: Ch1Content,
  ch2: Ch2Content,
  ch3: Ch3Content,
  ch4: Ch4Content,
  "ch4-lexical-analyzer-gen": LexicalAnalyzerGenContent,
  ch5: Ch5Content,
  ch6: Ch6Content,
  "ch6-nfa-to-dfa-subset": NfaToDfaSubsetContent,
  "ch6-dfa-minimization": DfaMinimizationContent,
  "ch6-dfa-solved-problem": DfaSolvedProblemContent,
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
    ? `${chapterData.title} | Compiler Design | openCSE`
    : "Compiler Design | openCSE";

  return { title };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const { data: chapterData, isSubTopic, parentChapter } = findChapterOrSubtopic(
    chapterId
  );

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link
          href="/sem5/cd/ch0"
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
    if (currentIndex > 0) {
      const prevParent = chapters[currentIndex - 1];
      if (prevParent.subTopics && prevParent.subTopics.length > 0) {
        const pageSubTopics = prevParent.subTopics.filter(
          (s): s is SubTopic & { isPage: true } => !!s.isPage
        );
        prevChapter =
          pageSubTopics.length > 0
            ? pageSubTopics[pageSubTopics.length - 1]
            : prevParent;
      } else {
        prevChapter = prevParent;
      }
    }

    const currentParent = chapters[currentIndex];
    if (currentParent.subTopics && currentParent.subTopics.length > 0) {
      const pageSubTopics = currentParent.subTopics.filter(
        (s): s is SubTopic & { isPage: true } => !!s.isPage
      );
      nextChapter = pageSubTopics.length > 0 ? pageSubTopics[0] : null;
    } else if (currentIndex < chapters.length - 1) {
      nextChapter = chapters[currentIndex + 1];
    }
  }

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-4 pt-6 text-[#e2d1c1]">
      <div className="flex-1 max-w-4xl mx-auto w-full">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Compiler Design
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {isSubTopic && parentChapter
            ? `${parentChapter.title} / ${chapterData.title}`
            : chapterData.title}
        </p>

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          {prevChapter ? (
            <Link
              href={`/sem5/cd/${prevChapter.id}`}
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
              href={`/sem5/cd/${nextChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-2 border-[#c7a669]/40" />
        {ChapterComponent ? <ChapterComponent /> : <p>Content loading...</p>}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between my-8 max-w-4xl mx-auto w-full">
        {prevChapter ? (
          <Link
            href={`/sem5/cd/${prevChapter.id}`}
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
            href={`/sem5/cd/${nextChapter.id}`}
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
