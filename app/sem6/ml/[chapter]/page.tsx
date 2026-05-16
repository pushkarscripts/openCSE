import Link from "next/link";
import { Righteous } from "next/font/google";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { chapters } from "../constants";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// Map components to chapter IDs
const chapterComponents: Record<string, React.ComponentType> = {
  ch0: Ch0Content,
  ch1: Ch1Content,
};

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const chapterData = chapters[currentIndex];

  if (!chapterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
        <Link 
          href="/sem6/ml/ch0"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  const ChapterComponent = chapterComponents[chapterData.id];
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Machine Learning
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {chapterData.title}
        </p>

        {/* Navigation */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem6/ml/${prevChapter.id}`}
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
              href={`/sem6/ml/${nextChapter.id}`}
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

      {/* Bottom Navigation */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem6/ml/${prevChapter.id}`}
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
            href={`/sem6/ml/${nextChapter.id}`}
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
