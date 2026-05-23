// app/quiz/[slug]/page.tsx
import { getQuizBySlug, moduleQuizzes, quizzes } from "@/lib/quizData";
import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";

// Pre-generate all quiz pages at build time
export function generateStaticParams() {
  return [...quizzes, ...moduleQuizzes].map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};
  return {
    title: `${quiz.subject} Quiz | openCSE`,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  return <QuizClient quiz={quiz} />;
}