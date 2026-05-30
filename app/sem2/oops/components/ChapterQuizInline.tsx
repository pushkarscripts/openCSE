"use client";

import { useState } from "react";
import type { Quiz } from "@/lib/quizData";
import QuizClient from "@/app/quiz/[slug]/QuizClient";

interface Props {
  quiz: Quiz;
}

export default function ChapterQuizInline({ quiz }: Props) {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <QuizClient quiz={quiz} inline autoStart onClose={() => setShowQuiz(false)} />;
  }

  return (
    <div className="w-full">
      <div className="w-full rounded-3xl border border-[#c7a669] bg-[#2a1b0f] p-8 shadow-xl text-left">
        <p className="text-lg text-[#f5e7c3] mb-4" style={{ fontFamily: "Rockwell, serif" }}>
          Ready to test your {quiz.moduleTitle} knowledge?
        </p>
        <h2 className="text-3xl font-bold text-[#f0d7a8] mb-3" style={{ fontFamily: "Rockwell, serif" }}>
          {quiz.moduleTitle}
        </h2>
        <p className="text-base text-[#dcd2b8] mb-3" style={{ fontFamily: "Rockwell, serif" }}>
          {quiz.description}
        </p>
        <div className="text-sm text-[#a07840] mb-6 flex flex-wrap gap-3" style={{ fontFamily: "Rockwell, serif" }}>
          <span>{Math.min(5, quiz.questions.length)} questions</span>
          <span>·</span>
          <span>No time limit</span>
          <span>·</span>
          <span>Instant feedback</span>
        </div>
        <button
          onClick={() => setShowQuiz(true)}
          className="rounded-full bg-[#e2d1c1] px-6 py-3 text-xl font-semibold text-[#1b0d00] hover:bg-[#f7e0b3] transition"
          style={{ fontFamily: "Rockwell, serif" }}
        >
          Take Chapter Quiz
        </button>
      </div>
    </div>
  );
}
