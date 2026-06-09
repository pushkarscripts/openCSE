import Link from "next/link";
import { Metadata } from "next";
import { Ch0Content } from "../content/chapter0";
import { Ch1Content } from "../content/chapter1";
import { Ch2Content } from "../content/chapter2";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Righteous } from "next/font/google";
import BookmarkButton from "../../../components/BookmarkButton";

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
});

const ComingSoon = () => (
  <div className="text-center py-12 text-[#c7a669]">
    <p className="text-2xl font-semibold">Coming Soon</p>
    <p className="mt-2 text-lg opacity-70">
      This chapter is under development. Check back soon!
    </p>
  </div>
);

// Chapter data
const chapters = [
  { id: "ch0", title: "Course Outline", component: Ch0Content },
  { id: "ch1", title: "Introduction to Cyber Laws & Ethics", component: Ch1Content },
  { id: "ch2", title: "Cyber Crimes", component: Ch2Content },
  { id: "ch3", title: "IT Act 2000 & Amendments", component: ComingSoon },
  { id: "ch4", title: "Data Privacy & Protection", component: ComingSoon },
  { id: "ch5", title: "Digital Signatures & IPR", component: ComingSoon },
  { id: "ch6", title: "Ethical Hacking & Security Ethics", component: ComingSoon },
  { id: "ch7", title: "Social Media & Internet Ethics", component: ComingSoon },
];

type ChapterProps = {
  params: Promise<{ chapter: string }>;
};

export async function generateMetadata({ params }: ChapterProps): Promise<Metadata> {
  const { chapter: chapterId } = await params;
  const chapterData = chapters.find((c) => c.id === chapterId);
  const title = chapterData
    ? `${chapterData.title} | Cyber Laws and Ethics | openCSE`
    : "Cyber Laws and Ethics | openCSE";
  return { title };
}

export default async function ChapterPage({ params }: ChapterProps) {
  const { chapter: chapterId } = await params;
  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-2xl font-bold">Chapter not found</h1>;
  }

  const ChapterComponent = chapter.component;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-2 pt-6 text-[#e2d1c1]">
      {/* Content */}
      <div className="flex-1">
        <h1 className={`text-4xl font-bold ${righteous.className} mb-2`}>
          Cyber Laws and Ethics
        </h1>
        <div className="flex items-center justify-between">
          <p className={`text-2xl mt-[-8px] ${righteous.className}`}>
            {chapter.title}
          </p>
          <BookmarkButton title={`CLE: ${chapter.title}`} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-3">
          {prevChapter ? (
            <Link
              href={`/sem5/cle/${prevChapter.id}`}
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
              href={`/sem5/cle/${nextChapter.id}`}
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
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between my-8">
        {prevChapter ? (
          <Link
            href={`/sem5/cle/${prevChapter.id}`}
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
            href={`/sem5/cle/${nextChapter.id}`}
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
