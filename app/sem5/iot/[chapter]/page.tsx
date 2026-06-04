import fs from "fs/promises";
import Link from "next/link";
import { Metadata } from "next";
import { Righteous } from "next/font/google";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import { MarkdownNotes } from "@/app/components/MarkdownNotes";
import {
  getIotChapter,
  iotChapters,
  iotNotesDir,
} from "@/lib/iotChapters";
import { Ch0Content } from "../content/chapter0";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export async function generateMetadata({
  params,
}: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const chapter = getIotChapter(chapterId);
  const title = chapter
    ? `${chapter.title} | IoT | openCSE`
    : "Internet of Things | openCSE";
  return { title };
}

async function loadMarkdown(fileName: string) {
  const filePath = `${iotNotesDir}/${fileName}`;
  return fs.readFile(filePath, "utf8");
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const currentIndex = iotChapters.findIndex((c) => c.id === chapterId);
  const chapter = iotChapters[currentIndex];

  if (!chapter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#e2d1c1]">
        <h1 className="text-2xl font-bold mb-4">Module not found</h1>
        <Link
          href="/sem5/iot/ch0"
          className="px-4 py-2 bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition font-bold"
        >
          Return to Course Outline
        </Link>
      </div>
    );
  }

  const prevChapter = currentIndex > 0 ? iotChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < iotChapters.length - 1
      ? iotChapters[currentIndex + 1]
      : null;

  let body: React.ReactNode;
  if (chapter.id === "ch0") {
    body = <Ch0Content />;
  } else if (chapter.markdownFile) {
    const markdown = await loadMarkdown(chapter.markdownFile);
    body = <MarkdownNotes content={markdown} />;
  } else {
    body = <p className="p-text">Content coming soon.</p>;
  }

  const navLinkClass =
    "px-4 py-1 text-2xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition";

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-16 text-[#e2d1c1]">
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Internet of Things (IoT)
        </h1>

        <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
          {chapter.title}
        </p>

        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem5/iot/${prevChapter.id}`}
              className={navLinkClass}
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              <ArrowBigLeft className="inline-block mr-1" /> Previous
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/sem5/iot/${nextChapter.id}`}
              className={navLinkClass}
              style={{ fontFamily: "Rockwell, Serif, serif" }}
            >
              Next <ArrowBigRight className="inline-block ml-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <hr className="my-6 border-t-3" />
        {body}
      </div>

      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem5/iot/${prevChapter.id}`}
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
            href={`/sem5/iot/${nextChapter.id}`}
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
