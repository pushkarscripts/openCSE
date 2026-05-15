// app/quiz/page.tsx
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Righteous } from "next/font/google";
import { quizzes } from "@/lib/quizData";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export const metadata = {
  title: "Quizzes | openCSE",
  description: "Test your CSE knowledge with subject-wise quizzes.",
};

export default function QuizIndexPage() {
  return (
    <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1]" style={{ fontFamily: "Rockwell, serif" }}>
      <Navbar />

      <div className="w-full px-4 py-12">
        <div className="max-w-2xl mx-auto">

          {/* Header — matches chapter title style */}
          <h1 className={`text-4xl font-bold mb-2 text-[#e2d1c1] ${righteous.className}`}>
            CSE Quizzes
          </h1>
          <p className={`text-2xl text-[#c7a669] mb-2 ${righteous.className}`}>
            All Subjects
          </p>

          <hr className="my-6 border-[#c7a669] opacity-40" />

          <p className="text-base text-[#c7a669] mb-8">
            Test yourself with 10-question quizzes for each subject. Instant feedback, no time limit.
          </p>

          {/* Subject cards — match chapter content card style */}
          <div className="flex flex-col gap-4">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.slug}
                href={`/quiz/${quiz.slug}`}
                className="flex items-center justify-between rounded-xl px-6 py-5 border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14] shadow-md hover:opacity-80 transition-opacity"
                style={{ textDecoration: "none", fontFamily: "Rockwell, serif" }}
              >
                <div>
                  <div className={`text-xl font-bold ${righteous.className}`}>
                    {quiz.subject}
                  </div>
                  <div className="text-sm mt-1 text-[#7a5c3a]">
                    {quiz.description}
                  </div>
                  <div className="text-xs mt-2 text-[#a07840]">
                    {quiz.questions.length} questions
                  </div>
                </div>
                <span className="text-2xl ml-4 text-[#3a2a14] opacity-40">→</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}