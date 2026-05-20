import Link from "next/link";

import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { Ch7Content } from "../content/chapter7";
import { Ch8Content } from "../content/chapter8";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const chapters = [
  {
    id: "ch0",
    title: "Course Outline",
    component: Ch0Content,
  },

  {
    id: "ch1",
    title: "Introduction to Algorithms",
    component: Ch1Content,
  },

  {
    id: "ch2",
    title: "Time and Space Complexity",
    component: Ch2Content,
  },

  {
    id: "ch3",
    title: "Searching and Sorting Algorithms",
    component: Ch3Content,
  },

  {
    id: "ch4",
    title: "Divide and Conquer Technique",
    component: Ch4Content,
  },

  {
    id: "ch5",
    title: "Greedy Method",
    component: Ch5Content,
  },

  {
    id: "ch6",
    title: "Dynamic Programming",
    component: Ch6Content,
  },

  {
    id: "ch7",
    title: "Graph Algorithms",
    component: Ch7Content,
  },

  {
    id: "ch8",
    title: "Backtracking and Branch & Bound",
    component: Ch8Content,
  },
];

type ChapterProps = {
  params: { chapter: string };
};

export default function ChapterPage({ params }: ChapterProps) {

  const currentIndex = chapters.findIndex(
    (c) => c.id === params.chapter
  );

  const chapter = chapters[currentIndex];

  if (!chapter) {
    return (
      <h1 className="text-2xl font-bold text-[#e2d1c1]">
        Chapter not found
      </h1>
    );
  }

  const ChapterComponent = chapter.component;

  const prevChapter =
    currentIndex > 0
      ? chapters[currentIndex - 1]
      : null;

  const nextChapter =
    currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-3 pt-6 text-[#e2d1c1]">

      {/* Main Content */}
      <div className="flex-1">

        <h1
          className={`text-4xl md:text-5xl font-bold mb-3 ${righteous.className}`}
        >
          Algorithm Design and Analysis
        </h1>

        <p
          className={`text-2xl md:text-3xl ${righteous.className}`}
        >
          {chapter.title}
        </p>

        {/* Top Navigation */}
        <div className="flex justify-between mt-5 gap-4 flex-wrap">

          {prevChapter ? (
            <Link
              href={`/sem5/ada2/${prevChapter.id}`}
              className="px-4 py-2 text-xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded-lg hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" />
              Previous
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/sem5/ada2/${nextChapter.id}`}
              className="px-4 py-2 text-xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded-lg hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              Next
              <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}

        </div>

        <hr className="my-6 border-[#c7a669] opacity-40" />

        <ChapterComponent />

      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between gap-4 my-8 flex-wrap">

        {prevChapter ? (
          
          <Link
            href={`/sem5/ada2/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-lg md:text-xl flex items-center justify-center text-[#1b0d00] rounded-lg hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, serif" }}
          >
            <ArrowBigLeft className="inline-block mr-1" />
            {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem5/ada2/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-lg md:text-xl flex items-center justify-center text-[#1b0d00] rounded-lg hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, serif" }}
          >
            {nextChapter.title}
            <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : (
          <div />
        )}

      </div>

    </div>
  );
}