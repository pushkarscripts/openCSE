"use client";

import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { flashcardDecks } from "@/lib/flashcardData";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function FlashcardsIndex() {
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
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1
            className={`font-bold ${roadRage.variable} text-black text-center text-5xl sm:text-6xl md:text-7xl leading-snug`}
            style={{
              fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
              fontWeight: 400,
            }}
          >
            Smart Flashcards
          </h1>
          <p
            className="sm:text-xl md:text-2xl text-[#3a2a14] mt-2 font-bold max-w-2xl text-center mx-auto"
            style={{ fontFamily: "Rockwell, serif" }}
          >
            Master core engineering concepts with an algorithmic Spaced Repetition System.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#f0d7a8] text-center" style={{ fontFamily: "Rockwell, serif" }}>
          Select a Subject
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flashcardDecks.map((deck) => (
            <div
              key={deck.slug}
              className="rounded-2xl border border-[#c7a669] bg-[#2a1b0f] p-8 shadow-xl flex flex-col transition hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-bold text-[#f0d7a8] mb-3" style={{ fontFamily: "Rockwell, serif" }}>
                {deck.subject}
              </h3>
              <p className="text-[#dcd2b8] mb-6 flex-grow">{deck.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-[#a07840]">
                  {deck.cards.length} Core Concepts
                </span>
                <Link
                  href={`/flashcards/${deck.slug}`}
                  className="px-6 py-2 rounded-lg text-lg font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] transition shadow-md"
                  style={{ fontFamily: "Rockwell, serif" }}
                >
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
