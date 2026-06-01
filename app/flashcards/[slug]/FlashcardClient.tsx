"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import { Road_Rage } from "next/font/google";
import { FlashcardDeck } from "@/lib/flashcardData";
import { useSpacedRepetition, Rating } from "@/app/hooks/useSpacedRepetition";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  deck: FlashcardDeck;
}

export default function FlashcardClient({ deck }: Props) {
  const { isLoaded, getDueCardIds, getStats, reviewCard } = useSpacedRepetition(deck.slug);
  const [activeQueue, setActiveQueue] = useState<string[]>([]);
  const [queueStarted, setQueueStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isLoaded) {
    return <div className="min-h-screen bg-[#1B0D00]" />; // prevent hydration mismatch flash
  }

  const allCardIds = deck.cards.map(c => c.id);
  const { newCards, dueCards, learningCards } = getStats(allCardIds);
  
  const startReview = () => {
    const dueIds = getDueCardIds(allCardIds);
    // Shuffle the due cards for variety
    const shuffled = [...dueIds].sort(() => Math.random() - 0.5);
    setActiveQueue(shuffled);
    setCurrentIdx(0);
    setIsFlipped(false);
    setQueueStarted(true);
  };

  const handleRating = (rating: Rating) => {
    const cardId = activeQueue[currentIdx];
    reviewCard(cardId, rating);
    
    // Move to next card
    setIsFlipped(false);
    setCurrentIdx(prev => prev + 1);
  };

  const isFinished = currentIdx >= activeQueue.length;
  const currentCardId = activeQueue[currentIdx];
  const currentCard = deck.cards.find(c => c.id === currentCardId);

  return (
    <div className="min-h-screen bg-[#1B0D00] text-[#e2d1c1] pt-14 flex flex-col">
      <Navbar />

      <section
        className="relative overflow-hidden w-full py-12 px-4 text-center shadow-lg"
        style={{
          backgroundImage: "url('/HeroBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#cbb89d",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }} />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/flashcards" className="mb-4 text-sm font-bold hover:underline text-[#3a2a14]" style={{ fontFamily: "Rockwell, serif" }}>
            ← All Decks
          </Link>
          <h1 className={`font-bold ${roadRage.variable} text-black text-4xl sm:text-5xl md:text-6xl`} style={{ fontFamily: "var(--font-road-rage), cursive", fontWeight: 400 }}>
            {deck.subject}
          </h1>
        </div>
      </section>

      <div className="flex-grow flex items-center justify-center p-4">
        {!queueStarted ? (
          <div className="max-w-md w-full bg-[#2a1b0f] p-8 rounded-2xl border border-[#c7a669] shadow-xl text-center">
            <h2 className="text-2xl font-bold text-[#f0d7a8] mb-6" style={{ fontFamily: "Rockwell, serif" }}>
              Study Session
            </h2>
            
            <div className="flex justify-center gap-6 mb-8 text-lg font-semibold" style={{ fontFamily: "Rockwell, serif" }}>
              <div className="flex flex-col items-center">
                <span className="text-[#3b82f6] text-3xl">{newCards}</span>
                <span className="text-[#8e8476] text-sm">New</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#ef4444] text-3xl">{dueCards}</span>
                <span className="text-[#8e8476] text-sm">Due</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#22c55e] text-3xl">{learningCards}</span>
                <span className="text-[#8e8476] text-sm">Learning</span>
              </div>
            </div>

            <button
              onClick={startReview}
              disabled={newCards + dueCards === 0}
              className="w-full py-4 rounded-xl text-xl font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              {newCards + dueCards > 0 ? "Start Review →" : "All caught up!"}
            </button>
          </div>
        ) : isFinished ? (
          <div className="max-w-md w-full bg-[#2a1b0f] p-8 rounded-2xl border border-[#c7a669] shadow-xl text-center">
            <h2 className="text-3xl font-bold text-[#22c55e] mb-4" style={{ fontFamily: "Rockwell, serif" }}>
              Session Complete!
            </h2>
            <p className="text-[#dcd2b8] mb-8 text-lg" style={{ fontFamily: "Rockwell, serif" }}>
              You reviewed {activeQueue.length} cards today. Great job!
            </p>
            <Link
              href="/flashcards"
              className="inline-block px-8 py-3 rounded-xl text-lg font-bold bg-[#d2b48c] text-[#2b1b0e] hover:bg-[#c7a669] transition shadow-md"
              style={{ fontFamily: "Rockwell, serif" }}
            >
              Back to Decks
            </Link>
          </div>
        ) : (
          <div className="max-w-2xl w-full flex flex-col items-center" style={{ perspective: "1000px" }}>
            <div className="w-full flex justify-between mb-4 text-[#8e8476] text-sm font-bold" style={{ fontFamily: "Rockwell, serif" }}>
              <span>Card {currentIdx + 1} of {activeQueue.length}</span>
            </div>

            {/* Flip Card Container */}
            <div 
              className={`relative w-full aspect-[3/2] sm:aspect-[2/1] transition-all duration-500 ease-in-out cursor-pointer ${isFlipped ? '' : 'hover:scale-[1.02]'}`}
              style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}
              onClick={() => !isFlipped && setIsFlipped(true)}
            >
              {/* Front side (Term) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl border border-[#c7a669] bg-[#2a1b0f] shadow-2xl flex items-center justify-center p-8 text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-3xl sm:text-5xl font-bold text-[#f0d7a8]" style={{ fontFamily: "Rockwell, serif" }}>
                  {currentCard?.term}
                </h3>
                <div className="absolute bottom-6 text-[#8e8476] text-sm animate-pulse">
                  Click to reveal
                </div>
              </div>

              {/* Back side (Definition) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl border border-[#c7a669] bg-[#1a1008] shadow-2xl flex flex-col items-center justify-center p-8 text-center overflow-y-auto"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h4 className="text-xl font-bold text-[#c7a669] mb-4 border-b border-[#c7a669]/30 pb-2 w-full" style={{ fontFamily: "Rockwell, serif" }}>
                  {currentCard?.term}
                </h4>
                <p className="text-xl sm:text-2xl text-[#e2d1c1] leading-relaxed" style={{ fontFamily: "Rockwell, serif" }}>
                  {currentCard?.definition}
                </p>
              </div>
            </div>

            {/* Rating Buttons */}
            <div className={`mt-8 w-full flex gap-3 sm:gap-6 justify-center transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <button onClick={() => handleRating(0)} className="flex-1 py-3 sm:py-4 rounded-xl font-bold bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/30 transition">
                <span className="block sm:inline">Again</span>
                <span className="block text-xs opacity-70 mt-1 font-normal">&lt; 1 min</span>
              </button>
              <button onClick={() => handleRating(1)} className="flex-1 py-3 sm:py-4 rounded-xl font-bold bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/50 hover:bg-[#f97316]/30 transition">
                <span className="block sm:inline">Hard</span>
                <span className="block text-xs opacity-70 mt-1 font-normal">1 day</span>
              </button>
              <button onClick={() => handleRating(2)} className="flex-1 py-3 sm:py-4 rounded-xl font-bold bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/30 transition">
                <span className="block sm:inline">Good</span>
                <span className="block text-xs opacity-70 mt-1 font-normal">3 days</span>
              </button>
              <button onClick={() => handleRating(3)} className="flex-1 py-3 sm:py-4 rounded-xl font-bold bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/50 hover:bg-[#22c55e]/30 transition">
                <span className="block sm:inline">Easy</span>
                <span className="block text-xs opacity-70 mt-1 font-normal">7+ days</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
