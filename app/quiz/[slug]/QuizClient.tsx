"use client";
// app/quiz/[slug]/QuizClient.tsx

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Righteous, Road_Rage } from "next/font/google";
import type { Quiz, Question } from "@/lib/quizData";

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

type QuizQuestion = Question & {
  options: string[];
  answer: number;
};

function buildQuizQuestions(quiz: Quiz, limit = 10): QuizQuestion[] {
  const chosen = shuffleArray(quiz.questions).slice(0, Math.min(limit, quiz.questions.length));
  return chosen.map((question) => {
    const indexes = shuffleArray(question.options.map((_, idx) => idx));
    const options = indexes.map((idx) => question.options[idx]);
    const answer = indexes.findIndex((idx) => idx === question.answer);
    return { ...question, options, answer };
  });
}

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  quiz: Quiz;
  inline?: boolean;
  onClose?: () => void;
  autoStart?: boolean;
}

type QuizState = "idle" | "active" | "finished";

export default function QuizClient({ quiz, inline, onClose, autoStart }: Props) {
  const [state, setState] = useState<QuizState>("idle");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<
    { question: string; chosen: number; correct: number }[]
  >([]);
  const [questionSet, setQuestionSet] = useState<QuizQuestion[]>([]);
  const [didAutoStart, setDidAutoStart] = useState(false);
  const isInline = inline ?? false;

  const q = questionSet[current]!;
  const total = Math.min(10, quiz.questions.length);

  function startQuiz() {
    const questions = buildQuizQuestions(quiz, total);
    setQuestionSet(questions);
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setState("active");
    setDidAutoStart(true);
  }

  function handleOptionClick(idx: number) {
    if (answered || !q) return;
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
      return;
    }

    setSelected(null);
    setAnswered(false);
    setCurrent((c) => c + 1);
  }

  function returnToIntro() {
    setState("idle");
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setQuestionSet([]);
  }

  useEffect(() => {
    if (isInline && autoStart && state === "idle" && !didAutoStart) {
      startQuiz();
    }
  }, [autoStart, didAutoStart, isInline, state]);

  function getOptionClass(idx: number): string {
    const base =
      "w-full text-left px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all shadow-md flex items-center";
    if (!answered)
      return `${base} bg-[#d2b48c] text-[#2b1b0e] opacity-50 hover:opacity-100 hover:scale-[98%] cursor-pointer`;
    if (!q) return `${base} bg-[#d2b48c] text-[#2b1b0e] opacity-30 cursor-default`;
    if (idx === q.answer)
      return `${base} bg-[#C8E6C9] text-[#1B5E20] opacity-100 scale-[98%] cursor-default`;
    if (idx === selected && idx !== q.answer)
      return `${base} bg-[#FFCDD2] text-[#B71C1C] opacity-100 scale-[98%] cursor-default`;
    return `${base} bg-[#d2b48c] text-[#2b1b0e] opacity-30 cursor-default`;
  }

  const pct = Math.round((score / total) * 100);

  if (state === "idle") {
    return (
      <div className={isInline ? "w-full rounded-3xl border border-[#c7a669] bg-[#2a1b0f] p-8 shadow-xl text-left" : "min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14"}>
        {!isInline && <Navbar />}

        <section
          className={isInline ? "w-full text-left" : "relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"}
          style={isInline ? { backgroundColor: "transparent" } : {
            backgroundImage: "url('/HeroBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#cbb89d",
          }}
        >
          {!isInline && <div className="absolute inset-0 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }} />}
          
          <div className={`relative z-10 max-w-4xl ${isInline ? "" : "mx-auto flex flex-col items-center"}`}>
            {!isInline ? (
              <Link href="/quiz" className="inline-block mb-8 text-sm md:text-base font-bold hover:underline text-[#3a2a14]" style={{ fontFamily: "Rockwell, serif" }}>
                ← All Quizzes
              </Link>
            ) : null}

            <h1
              className={`font-bold ${roadRage.variable} ${isInline ? "text-[#f0d7a8] text-3xl md:text-4xl text-left" : "text-black text-center text-5xl sm:text-6xl md:text-7xl leading-snug"}`}
              style={{
                fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
                fontWeight: 400,
              }}
            >
              {quiz.subject}
            </h1>
            <p className={`text-lg ${isInline ? "text-[#f5e7c3] mt-3" : "sm:text-xl md:text-2xl text-[#3a2a14] mt-2 font-bold"}`} style={{ fontFamily: "Rockwell, serif" }}>
              {isInline ? quiz.description : "Quiz"}
            </p>
          </div>
        </section>

        <div className={isInline ? "w-full mt-6" : "w-full px-4 py-12"}>
          <div className={isInline ? "w-full" : "max-w-3xl mx-auto text-center flex flex-col items-center"}>
            {isInline ? (
              <div className="text-[#dcd2b8] mb-6" style={{ fontFamily: "Rockwell, serif" }}>
                <p className="text-base leading-relaxed">{quiz.description}</p>
                <div className="mt-4 text-sm text-[#a07840] flex flex-wrap gap-2">
                  <span>{total} questions</span>
                  <span>·</span>
                  <span>No time limit</span>
                  <span>·</span>
                  <span>Instant feedback</span>
                </div>
              </div>
            ) : (
              <>
                <p className="p-text">{quiz.description}</p>

                <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-10 text-sm md:text-base text-[#a07840] font-medium" style={{ fontFamily: "Rockwell, serif" }}>
                  <span>{total} questions</span>
                  <span className="hidden sm:inline">·</span>
                  <span>No time limit</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Instant feedback</span>
                </div>
              </>
            )}

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
      <div className={isInline ? "w-full rounded-3xl border border-[#c7a669] bg-[#2a1b0f] p-8 shadow-xl text-left" : "min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14"}>
        {!isInline && <Navbar />}
        
        <section
          className={isInline ? "w-full text-left mb-6" : "relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"}
          style={isInline ? { backgroundColor: "transparent" } : {
            backgroundImage: "url('/HeroBG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#cbb89d",
          }}
        >
          {!isInline && <div className="absolute inset-0 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }} />}
          
          <div className={`relative z-10 max-w-4xl ${isInline ? "" : "mx-auto flex flex-col items-center"}`}>
            <h1
              className={`font-bold ${roadRage.variable} ${isInline ? "text-[#f0d7a8] text-3xl md:text-4xl text-left" : "text-center text-4xl sm:text-5xl md:text-6xl leading-snug text-[#f0d7a8]"}`}
              style={{
                fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
                fontWeight: 400,
              }}
            >
              {grade}
            </h1>
            <p className={`text-xl ${isInline ? "text-[#f5e7c3] mt-3" : "sm:text-2xl md:text-3xl text-[#3a2a14] mt-2 font-bold"}`} style={{ fontFamily: "Rockwell, serif" }}>
              {score}/{total} &nbsp;({pct}%)
            </p>
          </div>
        </section>

        <div className={isInline ? "w-full" : "w-full px-4 py-12"}>
          <div className={isInline ? "max-w-full" : "max-w-2xl mx-auto course-content"}>

            <div className={isInline ? "mb-10" : "text-center mb-12"}>
              <div className={isInline ? "h-4 rounded-full bg-white/10 max-w-full mb-10 overflow-hidden shadow-inner" : "h-4 rounded-full bg-white/10 max-w-md mx-auto mb-10 overflow-hidden shadow-inner"}>
                <div
                  className="h-full rounded-full bg-[#c7a669] transition-all duration-1000 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className={isInline ? "flex flex-wrap gap-3" : "flex justify-center gap-4 flex-wrap"}>
                <button
                  onClick={startQuiz}
                  className="px-8 py-3 rounded-lg text-lg font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] transition-all shadow-md"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  Retry Quiz
                </button>
                {isInline ? (
                  <button
                    onClick={onClose}
                    className="px-8 py-3 rounded-lg text-lg border-2 border-[#d2b48c] text-[#d2b48c] hover:bg-[#d2b48c]/10 transition-all shadow-sm"
                    style={{ fontFamily: "Rockwell, serif" }}
                  >
                    Close Quiz
                  </button>
                ) : (
                  <Link
                    href="/quiz"
                    className="px-8 py-3 rounded-lg text-lg border-2 border-[#d2b48c] text-[#d2b48c] hover:bg-[#d2b48c]/10 transition-all shadow-sm"
                    style={{ fontFamily: "Rockwell, serif" }}
                  >
                    All Quizzes
                  </Link>
                )}
              </div>
            </div>

            <hr className="my-6 border-t-3" />

            <h3 className="section-heading">Review your answers</h3>
            <div className="flex flex-col gap-4 mt-4">
              {results.map((r, i) => {
                const qData = questionSet[i];
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
    <div className={isInline ? "w-full rounded-3xl border border-[#c7a669] bg-[#2a1b0f] p-8 shadow-xl text-left" : "min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14"}>
      {!isInline && <Navbar />}
      <section
        className={isInline ? "w-full text-left mb-6" : "relative overflow-hidden w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 text-center shadow-lg"}
        style={isInline ? { backgroundColor: "transparent" } : {
          backgroundImage: "url('/HeroBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#cbb89d",
        }}
      >
        {!isInline && (
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }}
          />
        )}
        
          <div className={`relative z-10 max-w-3xl ${isInline ? "" : "mx-auto"}`}>
          <div className={`flex flex-col gap-4 ${isInline ? "" : "items-center"} text-sm text-[#f0d7a8] font-bold mb-6`} style={{ fontFamily: "Rockwell, serif" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <button
                onClick={returnToIntro}
                className="rounded-full border border-[#f0d7a8] bg-[#3a2912] px-4 py-2 text-xs sm:text-sm font-semibold text-[#f0d7a8] hover:bg-[#5a421c] transition"
                style={{ fontFamily: "Rockwell, serif" }}
              >
                ← Back
              </button>
              <span className="text-sm text-[#edd9a5] uppercase tracking-[0.2em]">Quiz</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Question {current + 1} of {total}</span>
              <span>Score: {score}</span>
            </div>
          </div>

          <h2
            className={`font-bold ${isInline ? "text-[#f0d7a8] text-left text-xl sm:text-2xl md:text-3xl" : "text-black text-center text-xl sm:text-2xl md:text-3xl"} leading-snug`}
            style={{ fontFamily: "Rockwell, serif" }}
          >
            {q.question}
          </h2>
        </div>
      </section>

      <div className="w-full px-4 py-6">
        <div className={isInline ? "max-w-full" : "max-w-3xl mx-auto"}>

          <div key={`options-${current}`} className="flex flex-col gap-4">
            {q.options.map((opt, idx) => (
              <button
                key={`${current}-${idx}`}
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