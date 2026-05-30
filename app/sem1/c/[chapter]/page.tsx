import Link from "next/link";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { moduleQuizzes } from "@/lib/quizData";
import ChapterQuizInline from "../components/ChapterQuizInline";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Righteous } from "next/font/google";
import BookmarkButton from "../../../components/BookmarkButton";
const righteous = Righteous({
      subsets: ['latin'], 
      weight: '400', 
      variable: '--font-righteous', 
    });

// Chapter data
const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Introduction to Computing", component: Ch1Content },
  { id: "ch2", title: "Overview of C", component: Ch2Content },
  { id: "ch3", title: "Data Types, I/O, Decision Making and Loops", component: Ch3Content },
  { id: "ch4", title: "Arrays, Strings, and Functions", component: Ch4Content },
  { id: "ch5", title: "Pointers, Structures, and Unions", component: Ch5Content },
  { id: "ch6", title: "File Management, Dynamic Memory, and Preprocessors", component: Ch6Content },
];

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const currentIndex =  chapters.findIndex((c) => c.id === chapterId);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-2xl font-bold">Chapter not found</h1>;
  }

  const ChapterComponent = chapter.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const chapterQuizSlugMap: Record<string, string> = {
    ch1: "c-intro",
    ch2: "c-overview",
    ch3: "c-data-types",
    ch4: "c-arrays-functions",
    ch5: "c-pointers-structures",
    ch6: "c-file-memory-preprocessors",
  };

  const chapterQuiz = moduleQuizzes.find(async (quiz) => quiz.slug === chapterQuizSlugMap[(await params).chapter]);

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      {/* Content */}
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Programming in C 
        </h1>
       <div className="flex items-center justify-between">
  <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
    {chapter.title}
  </p>
  <BookmarkButton title={`C Programming : ${chapter.title}`} />
</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem1/c/${prevChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: 'Rockwell, Serif, serif' }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/sem1/c/${nextChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: 'Rockwell, Serif, serif' }}
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

      {/* Navigation Buttons */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem1/c/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: 'Rockwell, Serif, serif' }}
          >
            <ArrowBigLeft className="inline-block mr-1" /> {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem1/c/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: 'Rockwell, Serif, serif' }}
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
