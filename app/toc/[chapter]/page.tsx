import Link from "next/link";

type ChapterProps = {
  params: { chapter: string };
};

// Chapter data
const chapters = [
  { id: "ch1", title: "Introduction", content: "This is the introduction chapter." },
  { id: "ch2", title: "Getting Started", content: "Steps to get started..." },
  { id: "ch3", title: "Chapter 1", content: "Details of Chapter 1..." },
  { id: "ch4", title: "Chapter 2", content: "Details of Chapter 2..." },
  { id: "ch5", title: "Chapter 3", content: "Details of Chapter 3..." },
  { id: "ch6", title: "Chapter 4", content: "Details of Chapter 4..." },
  { id: "ch7", title: "Chapter 5", content: "Details of Chapter 5..." },
  { id: "ch8", title: "Conclusion", content: "Final remarks and conclusion." },
];

export default function ChapterPage({ params }: ChapterProps) {
  const currentIndex = chapters.findIndex((c) => c.id === params.chapter);
  const chapter = chapters[currentIndex];

  if (!chapter) {
    return <h1 className="text-2xl font-bold">Chapter not found</h1>;
  }

  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col bg-[#1B0D00] min-h-full p-0">
      {/* Content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{chapter.title}</h1>
        <p>{chapter.content}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {prevChapter ? (
          <Link
            href={`/toc/${prevChapter.id}`}
            className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
          >
            ← {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/toc/${nextChapter.id}`}
            className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
          >
            {nextChapter.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
