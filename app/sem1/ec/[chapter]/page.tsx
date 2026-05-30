import Link from "next/link";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Basics of Communication", component: Ch1Content },
  { id: "ch2", title: "Written Communication", component: Ch2Content },
  { id: "ch3", title: "Verbal & Non-Verbal Communication", component: Ch3Content },
  { id: "ch4", title: "Reading Comprehension", component: Ch4Content },
  { id: "ch5", title: "Grammar Essentials", component: Ch5Content },
  { id: "ch6", title: "Presentation & Interview Skills", component: Ch6Content },
];

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;

  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-3xl font-bold text-[#e2d1c1]">Chapter not found</h1>;
  }

  const ChapterComponent = chapter.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">

      <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
        English Communication
      </h1>

      <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
        {chapter.title}
      </p>

      <div className="flex justify-between mt-4">
        {prevChapter ? (
          <Link href={`/sem1/ec/${prevChapter.id}`}
            className="px-4 py-1 text-2xl flex items-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition">
            <ArrowBigLeft className="mr-1" /> Previous
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link href={`/sem1/ec/${nextChapter.id}`}
            className="px-4 py-1 text-2xl flex items-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition">
            Next <ArrowBigRight className="ml-1" />
          </Link>
        ) : <div />}
      </div>

      <hr className="my-6 border-t border-[#c7a669] opacity-40" />

      <ChapterComponent />

      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link href={`/sem1/ec/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl text-[#1b0d00] flex items-center rounded hover:bg-[#ac9e91] transition">
            <ArrowBigLeft className="mr-1" /> {prevChapter.title}
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link href={`/sem1/ec/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl text-[#1b0d00] flex items-center rounded hover:bg-[#ac9e91] transition">
            {nextChapter.title} <ArrowBigRight className="ml-1" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}