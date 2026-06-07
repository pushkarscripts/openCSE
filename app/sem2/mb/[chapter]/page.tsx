import Link from "next/link";
import { Righteous } from "next/font/google";
import BookmarkButton from "../../../components/BookmarkButton";

import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { moduleQuizzes } from "@/lib/quizData";
import ChapterQuizInline from "../components/ChapterQuizInline";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Introduction to Biology", component: Ch1Content },
  { id: "ch2", title: "Genetics and Cytology", component: Ch2Content },
  { id: "ch3", title: "Biomolecules and Animal Physiology", component: Ch3Content },
  { id: "ch4", title: "Metabolism", component: Ch4Content },
  { id: "ch5", title: "Microbiology", component: Ch5Content },
];

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export default async function ChapterPage({ params }: ChapterProps) {
  const {chapter}=await params;
  const currentIndex = chapters.findIndex((c) => c.id === chapter);
  const chapterData = chapters[currentIndex];

  if (!chapterData) {
    return <h1 className="text-2xl font-bold">Chapter not found</h1>;
  }

  const ChapterComponent = chapterData.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const chapterQuizSlugMap: Record<string, string> = {
    ch1: "mb - Introduction to Biology",
  };
  const chapterQuiz = moduleQuizzes.find((quiz) => quiz.slug === chapterQuizSlugMap[chapter]);

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-16 text-[#e2d1c1]">

      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Modern Biology
        </h1>

        <div className="flex items-center justify-between">
          <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
            {chapterData.title}
          </p>
          <BookmarkButton  title={`mb: ${chapterData.title}`} />
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem2/mb/${prevChapter.id}`}
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
              href={`/sem2/mb/${nextChapter.id}`}
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

        {chapterQuiz ? (
          <div className="mt-12">
            <ChapterQuizInline quiz={chapterQuiz} />
          </div>
        ) : null}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem2/mb/${prevChapter.id}`}
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
            href={`/sem2/mb/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title}{" "}
            <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
