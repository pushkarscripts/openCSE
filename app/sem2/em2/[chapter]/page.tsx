import Link from "next/link";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Sequences and Series", component: Ch1Content },
  { id: "ch2", title: "Numerical Analysis", component: Ch2Content },
  { id: "ch3", title: "Complex Variables", component: Ch3Content },
  { id: "ch4", title: "Integral Calculus", component: Ch4Content },
];

type ChapterProps = {
  params: { chapter: string };
};

export default function ChapterPage({ params }: ChapterProps) {
  const currentIndex = chapters.findIndex((c) => c.id === params.chapter);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-3xl font-bold text-[#e2d1c1]">Chapter not found</h1>;
  }

  const ChapterComponent = chapter.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">

      <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
        Engineering Mathematics II
      </h1>

      <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
        {chapter.title}
      </p>

      {/* Top Navigation */}
      <div className="flex justify-between mt-4">
        {prevChapter ? (
          <Link
            href={`/sem2/em2/${prevChapter.id}`}
            className="px-4 py-1 text-2xl flex items-center bg-[#e2d1c1] text-[#1B0D00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="mr-1" /> Previous
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem2/em2/${nextChapter.id}`}
            className="px-4 py-1 text-2xl flex items-center bg-[#e2d1c1] text-[#1B0D00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            Next <ArrowBigRight className="ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      <hr className="my-6 border-t border-[#c7a669] opacity-40" />

      <ChapterComponent />

      {/* Bottom Navigation */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem2/em2/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl text-[#1B0D00] flex items-center rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="mr-1" /> {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/sem2/em2/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl text-[#1B0D00] flex items-center rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title} <ArrowBigRight className="ml-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
