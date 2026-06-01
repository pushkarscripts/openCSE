import { flashcardDecks } from "@/lib/flashcardData";
import { notFound } from "next/navigation";
import FlashcardClient from "./FlashcardClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const deck = flashcardDecks.find((d) => d.slug === slug);
  if (!deck) return {};
  
  return {
    title: `${deck.subject} Flashcards - openCSE`,
    description: deck.description,
  };
}

export function generateStaticParams() {
  return flashcardDecks.map((deck) => ({
    slug: deck.slug,
  }));
}

export default function FlashcardDeckPage({ params }: { params: { slug: string } }) {
  const deck = flashcardDecks.find((d) => d.slug === slug);

  if (!deck) {
    notFound();
  }

  return <FlashcardClient deck={deck} />;
}
