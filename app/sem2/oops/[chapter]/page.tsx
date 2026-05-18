import Link from "next/link";
import { Righteous } from "next/font/google";

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
import { moduleQuizzes } from "@/lib/quizData";
import ChapterQuizInline from "../components/ChapterQuizInline";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Syncing meta titles with the absolute C++ Object-Oriented content blocks created inside /content
const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Paradigm Shift: POP vs. OOP", component: Ch1Content },
  { id: "ch2", title: "Classes, Objects, and Access Specifiers", component: Ch2Content },
  { id: "ch3", title: "Constructors and Destructors", component: Ch3Content },
  { id: "ch4", title: "Data Hiding and Encapsulation", component: Ch4Content },
  { id: "ch5", title: "Inheritance Paradigms", component: Ch5Content },
  { id: "ch6", title: "Polymorphism and Virtual Interfaces", component: Ch6Content },
  { id: "ch7", title: "Exception Handling Mechanisms", component: Ch7Content },
  { id: "ch8", title: "Generic Programming & SOLID Principles", component: Ch8Content },
];

type ChapterProps = {
  params: Promise<{ chapter: string }> | { chapter: string };
};

export default async function ChapterPage({ params }: ChapterProps) {
  // NEXT.JS 15 COMPLIANCE: Awaiting unified async evaluation for incoming segment route parameters
  const resolvedParams = await params;
  
  const currentIndex = chapters.findIndex((c) => c.id === resolvedParams.chapter);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-2xl font-bold p-6">Chapter not found</h1>;
  }

  const ChapterComponent = chapter.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const chapterQuizSlugMap: Record<string, string> = {
    ch1: "oops-intro-java",
    ch2: "oops-classes-objects",
    ch3: "oops-inheritance-polymorphism",
    ch4: "oops-packages-interfaces",
    ch5: "oops-exception-handling",
    ch6: "oops-threads",
    ch7: "oops-generics",
    ch8: "oops-java-lib-swing",
  };
  const chapterQuiz = moduleQuizzes.find((quiz) => quiz.slug === chapterQuizSlugMap[params.chapter]);

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Object-Oriented Programming
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {chapter.title}
        </p>

        {/* Top Navigation */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem2/oops/${prevChapter.id}`}
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
              href={`/sem2/oops/${nextChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-3 border-[#c7a669] opacity-50" />
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
            href={`/sem2/oops/${prevChapter.id}`}
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
            href={`/sem2/oops/${nextChapter.id}`}
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