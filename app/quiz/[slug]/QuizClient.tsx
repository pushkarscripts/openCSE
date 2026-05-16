"use client";
// app/quiz/[slug]/QuizClient.tsx

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Righteous, Road_Rage } from "next/font/google";
import type { Quiz } from "@/lib/quizData";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
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
      "w-full text-left px-6 py-4 rounded-lg text-lg font-medium transition-all shadow-md flex items-center";
    if (!answered)
      return `${base} bg-[#d2b48c] text-[#2b1b0e] opacity-50 hover:opacity-100 hover:scale-[98%] cursor-pointer`;
    if (idx === q.answer)
      return `${base} bg-[#C8E6C9] text-[#1B5E20] opacity-100 scale-[98%] cursor-default`;
    if (idx === selected && idx !== q.answer)
      return `${base} bg-[#FFCDD2] text-[#B71C1C] opacity-100 scale-[98%] cursor-default`;
    return `${base} bg-[#d2b48c] text-[#2b1b0e] opacity-30 cursor-default`;
  }

  const pct = Math.round((score / total) * 100);

  if (state === "idle") {
    return (
      <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14">
        <Navbar />

        <section
          className="relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"
          style={{
            backgroundImage: "url('/HeroBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#cbb89d",
          }}
        >
          <div className="absolute inset-0 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }} />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <Link href="/quiz" className="inline-block mb-8 text-sm md:text-base font-bold hover:underline text-[#3a2a14]" style={{ fontFamily: "Rockwell, serif" }}>
              ← All Quizzes
            </Link>

            <h1
              className={`font-bold ${roadRage.variable} text-black text-center text-5xl sm:text-6xl md:text-8xl leading-snug`}
              style={{
                fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
                fontWeight: 400,
              }}
            >
              {quiz.subject}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#3a2a14] mt-2 font-bold" style={{ fontFamily: "Rockwell, serif" }}>
              Quiz
            </p>
          </div>
        </section>

        <div className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <p className="p-text">
              {quiz.description}
            </p>

            <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-10 text-sm md:text-base text-[#a07840] font-medium" style={{ fontFamily: "Rockwell, serif" }}>
              <span>{total} questions</span>
              <span className="hidden sm:inline">·</span>
              <span>No time limit</span>
              <span className="hidden sm:inline">·</span>
              <span>Instant feedback</span>
            </div>

            <button
              onClick={startQuiz}
              className="px-10 py-4 rounded-xl text-xl font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] hover:scale-105 transition-all shadow-md"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              Start Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (state === "finished") {
    const grade = pct >= 80 ? "Excellent!" : pct >= 60 ? "Good work!" : "Keep studying!";

    return (
      <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14">
        <Navbar />
        
        <section
          className="relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"
          style={{
            backgroundImage: "url('/HeroBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#cbb89d",
          }}
        >
          <div className="absolute inset-0 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }} />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <h1
              className={`font-bold ${roadRage.variable} text-black text-center text-5xl sm:text-6xl md:text-8xl leading-snug`}
              style={{
                fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
                fontWeight: 400,
              }}
            >
              {grade}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#3a2a14] mt-2 font-bold" style={{ fontFamily: "Rockwell, serif" }}>
              {score}/{total} &nbsp;({pct}%)
            </p>
          </div>
        </section>

        <div className="w-full px-4 py-12">
          <div className="max-w-2xl mx-auto course-content">

            <div className="text-center mb-12">
              <div className="h-4 rounded-full bg-white/10 max-w-md mx-auto mb-10 overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full bg-[#c7a669] transition-all duration-1000 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={startQuiz}
                  className="px-8 py-3 rounded-lg text-lg font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] transition-all shadow-md"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  Retry Quiz
                </button>
                <Link
                  href="/quiz"
                  className="px-8 py-3 rounded-lg text-lg border-2 border-[#d2b48c] text-[#d2b48c] hover:bg-[#d2b48c]/10 transition-all shadow-sm"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  All Quizzes
                </Link>
              </div>
            </div>

            <hr className="my-6 border-t-3" />

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

  return (
    <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14">
      <Navbar />
      <section
        className="relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"
        style={{
          backgroundImage: "url('/HeroBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#cbb89d",
        }}
      >
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex justify-between text-base sm:text-xl text-black font-bold mb-6" style={{ fontFamily: "Rockwell, serif" }}>
            <span>Question {current + 1} of {total}</span>
            <span>Score: {score}</span>
          </div>

          <h2
            className="font-bold text-black text-center text-3xl sm:text-4xl md:text-5xl leading-snug"
            style={{ fontFamily: "Rockwell, serif" }}
          >
            {q.question}
          </h2>
        </div>
      </section>

      <div className="w-full px-4 py-8">
        <div className="max-w-3xl mx-auto">

          <div className="flex flex-col gap-5">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={getOptionClass(idx)}
                style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
              >
                <span className="mr-4 font-mono text-base md:text-lg opacity-80">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span>{opt}</span>
              </button>
            ))}
          </div>

          {answered && (
            <div
              className={`mt-8 rounded-lg px-5 py-4 text-base shadow-md border-l-4 ${
                selected === q.answer
                  ? "bg-[#C8E6C9] border-[#4CAF50] text-[#1B5E20]"
                  : "bg-[#FFCDD2] border-[#E53935] text-[#B71C1C]"
              }`}
            >
              <span className="font-semibold text-lg block mb-1">
                {selected === q.answer ? "Correct!" : "Incorrect."}
              </span>
              {q.explanation && (
                <span className="text-[#3a2a14]">{q.explanation}</span>
              )}
            </div>
          )}

          {answered && (
            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                className="px-8 py-3 text-xl flex items-center justify-center bg-[#e2d1c1] text-[#1b0d00] rounded hover:bg-[#ac9e91] transition shadow-md"
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