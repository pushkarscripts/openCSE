"use client";
// app/quiz/[slug]/QuizClient.tsx

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Righteous } from "next/font/google";
import type { Quiz } from "@/lib/quizData";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

interface Props {
  quiz: Quiz;
}

type QuizState = "idle" | "active" | "finished";

export default function QuizClient({ quiz }: Props) {
  const [state, setState] = useState<QuizState>("idle");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<
    { question: string; chosen: number; correct: number }[]
  >([]);

  const q = quiz.questions[current];
  const total = quiz.questions.length;

  function startQuiz() {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setState("active");
  }

  function handleOptionClick(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.answer) setScore((s) => s + 1);
    setResults((prev) => [
      ...prev,
      { question: q.question, chosen: idx, correct: q.answer },
    ]);
  }

  function handleNext() {
    if (current + 1 >= total) {
      setState("finished");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  function getOptionClass(idx: number): string {
    const base =
      "w-full text-left px-5 py-3 rounded-lg text-base font-medium transition-all border";
    if (!answered)
      return `${base} bg-[#f7e7bf] border-[#c7a669] text-[#3a2a14] cursor-pointer hover:bg-[#f0ddb6]`;
    if (idx === q.answer)
      return `${base} bg-[#C8E6C9] border-[#4CAF50] text-[#1B5E20] cursor-default`;
    if (idx === selected && idx !== q.answer)
      return `${base} bg-[#FFCDD2] border-[#E53935] text-[#B71C1C] cursor-default`;
    return `${base} bg-[#f0ddb6] border-[#c7a669] text-[#a07840] cursor-default opacity-60`;
  }

  const pct = Math.round((score / total) * 100);

  // ── Idle / intro screen ──────────────────────────────────────────────────
  if (state === "idle") {
    return (
      <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1]" style={{ fontFamily: "Rockwell, serif" }}>
        <Navbar />
        <div className="w-full px-4 py-12">
          <div className="max-w-lg mx-auto text-center">

            <Link href="/quiz" className="inline-block mb-8 text-sm hover:underline text-[#c7a669]">
              ← All Quizzes
            </Link>

            <h1 className={`text-4xl font-bold mb-2 text-[#e2d1c1] ${righteous.className}`}>
              {quiz.subject}
            </h1>
            <p className={`text-2xl mb-6 text-[#c7a669] ${righteous.className}`}>Quiz</p>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            <p className="text-base text-[#c7a669] mb-8">{quiz.description}</p>

            <div className="flex justify-center gap-6 mb-10 text-sm text-[#a07840]">
              <span>{total} questions</span>
              <span>·</span>
              <span>No time limit</span>
              <span>·</span>
              <span>Instant feedback</span>
            </div>

            <button
              onClick={startQuiz}
              className="px-8 py-3 rounded-xl text-lg font-bold bg-[#e2d1c1] text-[#1b0d00] hover:bg-[#ac9e91] transition"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              Start Quiz →
            </button>

          </div>
        </div>
      </div>
    );
  }

  // ── Finished screen ──────────────────────────────────────────────────────
  if (state === "finished") {
    const grade = pct >= 80 ? "Excellent!" : pct >= 60 ? "Good work!" : "Keep studying!";

    return (
      <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1]" style={{ fontFamily: "Rockwell, serif" }}>
        <Navbar />
        <div className="w-full px-4 py-12">
          <div className="max-w-2xl mx-auto course-content">

            {/* Score summary */}
            <div className="text-center mb-8">
              <h1 className={`text-4xl font-bold mb-2 ${righteous.className}`}>{grade}</h1>
              <p className={`text-2xl text-[#c7a669] mb-6 ${righteous.className}`}>
                {score}/{total} &nbsp;({pct}%)
              </p>

              {/* Score bar */}
              <div className="h-3 rounded-full bg-white/10 max-w-sm mx-auto mb-8 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#c7a669] transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={startQuiz}
                  className="px-6 py-2 rounded-lg font-bold bg-[#e2d1c1] text-[#1b0d00] hover:bg-[#ac9e91] transition"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  Retry Quiz
                </button>
                <Link
                  href="/quiz"
                  className="px-6 py-2 rounded-lg border border-[#c7a669] text-[#c7a669] hover:bg-[#c7a669]/10 transition"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  All Quizzes
                </Link>
              </div>
            </div>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Answer review */}
            <h3 className="section-heading">Review your answers</h3>
            <div className="flex flex-col gap-4 mt-4">
              {results.map((r, i) => {
                const qData = quiz.questions[i];
                const correct = r.chosen === r.correct;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-sm border"
                    style={{
                      background: correct ? "#f0fff4" : "#fff5f5",
                      border: correct ? "1px solid #4CAF50" : "1px solid #E53935",
                      color: "#3a2a14",
                      fontFamily: "Rockwell, serif",
                    }}
                  >
                    <p className="font-semibold mb-2">{i + 1}. {r.question}</p>
                    {!correct && (
                      <p className="text-[#C62828] mb-1">
                        Your answer: <span className="font-medium">{qData.options[r.chosen]}</span>
                      </p>
                    )}
                    <p className="text-[#2E7D32]">
                      Correct: <span className="font-medium">{qData.options[r.correct]}</span>
                    </p>
                    {qData.explanation && (
                      <p className="mt-2 italic text-[#7a5c3a] border-l-4 border-[#b8925d] pl-3 bg-[#f7e7bf] rounded">
                        {qData.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ── Active quiz screen ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1]" style={{ fontFamily: "Rockwell, serif" }}>
      <Navbar />
      <div className="w-full px-4 py-12">
        <div className="max-w-2xl mx-auto">

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-[#a07840] mb-2">
              <span className={righteous.className}>Question {current + 1} of {total}</span>
              <span className={righteous.className}>Score: {score}</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-[#c7a669]/20">
              <div
                className="h-full rounded-full bg-[#c7a669] transition-all duration-300"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          {/* Question card — matches chapter content card style */}
          <div className="rounded-2xl border border-[#c7a669] bg-[#f0ddb6] shadow-md p-6 mb-5 text-[#3a2a14]">

            {/* Question text styled like section-heading */}
            <p className="text-lg font-semibold mb-5" style={{ fontFamily: "Rockwell, serif" }}>
              {q.question}
            </p>

            <div className="flex flex-col gap-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={getOptionClass(idx)}
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  <span className="mr-3 font-mono text-xs text-[#a07840]">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>

            {/* Feedback — matches the tip/note box style from chapters */}
            {answered && (
              <div
                className={`mt-5 rounded-lg px-4 py-3 text-sm border-l-4 ${
                  selected === q.answer
                    ? "bg-[#C8E6C9] border-[#4CAF50] text-[#1B5E20]"
                    : "bg-[#FFCDD2] border-[#E53935] text-[#B71C1C]"
                }`}
              >
                <span className="font-semibold">
                  {selected === q.answer ? "Correct!" : "Incorrect."}
                </span>
                {q.explanation && (
                  <span className="ml-1 text-[#3a2a14]">{q.explanation}</span>
                )}
              </div>
            )}
          </div>

          {/* Next button — matches chapter nav button style */}
          {answered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2 text-xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition"
                style={{ fontFamily: "Rockwell, serif" }}
              >
                {current + 1 >= total ? "Finish Quiz" : "Next Question →"}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}