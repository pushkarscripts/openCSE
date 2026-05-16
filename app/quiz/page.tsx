// app/quiz/page.tsx
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Righteous } from "next/font/google";
import { quizzes } from "@/lib/quizData";
import { Road_Rage } from "next/font/google";

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

export const metadata = {
  title: "Quizzes | openCSE",
  description: "Test your CSE knowledge with subject-wise quizzes.",
};

export default function QuizIndexPage() {
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
            className={`font-bold ${roadRage.variable} text-black text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-snug`}
            style={{
              fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
              fontWeight: 400,
            }}
          >
            CSE Quizzes
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#3a2a14] mt-2 font-bold" style={{ fontFamily: "Rockwell, serif" }}>
            All Subjects
          </p>
        </div>
      </section>

      <div className="w-full px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-[#d2b48c] font-medium max-w-3xl mx-auto" style={{ fontFamily: "Rockwell, serif" }}>
            Test yourself with 10-question quizzes for each subject. Instant feedback, no time limit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-2xl sm:text-3xl" style={{ fontFamily: "Rockwell, serif" }}>
          {quizzes.map((quiz) => (
            <Link
              key={quiz.slug}
              href={`/quiz/${quiz.slug}`}
              className="relative bg-[#d2b48c] text-[#2b1b0e] flex items-center justify-center font-medium py-6 px-6 shadow-md hover:scale-[98%] transition-transform text-center min-h-[6rem]"
              style={{ textDecoration: "none" }}
            >
              {quiz.subject}
              <span className="absolute bottom-1 right-1 text-[9px] sm:text-[10px] bg-[#1B0D00] text-[#FAE8D7] px-1.5 py-0.5 rounded opacity-80 uppercase tracking-widest font-bold">
                {quiz.questions.length} qs
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}