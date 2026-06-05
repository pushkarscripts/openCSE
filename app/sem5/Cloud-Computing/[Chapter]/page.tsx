import Link from "next/link";
import { Righteous } from "next/font/google";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { chapters } from "../constants";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Map chapter id to content component
import { Ch0Content } from "../content/chapter0"
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { Ch3Content } from "../content/chapter3";
import { Ch4Content } from "../content/chapter4";
import { Ch5Content } from "../content/chapter5";
import { Ch6Content } from "../content/chapter6";
import { Ch7Content } from "../content/chapter7";
import { Ch8Content } from "../content/chapter8";
import { Ch9Content } from "../content/chapter9";
import { Ch10Content } from "../content/chapter10";
import { Ch11Content } from "../content/chapter11";
import { Ch12Content } from "../content/chapter12";
import { Ch13Content } from "../content/chapter13";
import { Ch14Content } from "../content/chapter14";
import { Ch15Content } from "../content/chapter15";
import { Ch16Content } from "../content/chapter16";
import { Ch17Content } from "../content/chapter17";
import { Ch18Content } from "../content/chapter18";
import { Ch19Content } from "../content/chapter19";
import { Ch20Content } from "../content/chapter20";
import { Ch21Content } from "../content/chapter21";
import { Ch22Content } from "../content/chapter22";
import { Ch23Content } from "../content/chapter23";
import { Ch24Content } from "../content/chapter24";
import { Ch25Content } from "../content/chapter25";
import { Ch26Content } from "../content/chapter26";
import { Ch27Content } from "../content/chapter27";
import { Ch28Content } from "../content/chapter28";

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
  ch10: Ch10Content,
  ch11: Ch11Content,
  ch12: Ch12Content,
  ch13: Ch13Content,
  ch14: Ch14Content,
  ch15: Ch15Content,
  ch16: Ch16Content,
  ch17: Ch17Content,
  ch18: Ch18Content,
  ch19: Ch19Content,
  ch20: Ch20Content,
  ch21: Ch21Content,
  ch22: Ch22Content,
  ch23: Ch23Content,
  ch24: Ch24Content,
  ch25: Ch25Content,
  ch26: Ch26Content,
  ch27: Ch27Content,
  ch28: Ch28Content,
};

type Props = { params: Promise<{ Chapter: string }> };

export default async function ChapterPage({ params }: Props) {
  const { Chapter: chapterId } = await params;

  const chapterData = chapters.find((c) => c.id === chapterId);
  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link
          href="/sem5/Cloud-Computing/ch1"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Chapter 1
        </Link>
      </div>
    );
  }

  const ChapterComponent = chapterComponents[chapterId];

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Cloud Computing
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {chapterData.title}
        </p>

        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem5/Cloud-Computing/${prevChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : <div />}

          {nextChapter ? (
            <Link
              href={`/sem5/Cloud-Computing/${nextChapter.id}`}
              className="px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : <div />}
        </div>

        <hr className="my-6 border-t-3" />

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
            href={`/sem5/Cloud-Computing/${prevChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            <ArrowBigLeft className="inline-block mr-1" /> {prevChapter.title}
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link
            href={`/sem5/Cloud-Computing/${nextChapter.id}`}
            className="px-4 py-2 bg-[#e2d1c1] text-xl flex items-center justify-center text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
            style={{ fontFamily: "Rockwell, Serif, serif" }}
          >
            {nextChapter.title} <ArrowBigRight className="inline-block ml-1" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}