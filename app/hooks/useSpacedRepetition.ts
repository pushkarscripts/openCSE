"use client";

import { useState, useEffect } from "react";

// Represents the SRS state for a single card
export interface SRSState {
  cardId: string;
  interval: number; // in days
  repetitions: number;
  easeFactor: number;
  nextReviewDate: string; // ISO string
}

export type Rating = 0 | 1 | 2 | 3;
// 0: Again (Forgot)
// 1: Hard (Remembered, but difficult)
// 2: Good (Remembered with moderate effort)
// 3: Easy (Remembered instantly)

export function useSpacedRepetition(deckSlug: string) {
  const [states, setStates] = useState<Record<string, SRSState>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const storageKey = `openCSE_srs_${deckSlug}`;

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setStates(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse SRS state", e);
      }
    }
    setIsLoaded(true);
  }, [storageKey]);

  // SM-2 Algorithm implementation
  const reviewCard = (cardId: string, rating: Rating) => {
    setStates((prev) => {
      const current = prev[cardId] || {
        cardId,
        interval: 0,
        repetitions: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
      };

      let { interval, repetitions, easeFactor } = current;

      if (rating >= 2) {
        // Correct response (Good or Easy)
        if (repetitions === 0) {
          interval = 1;
        } else if (repetitions === 1) {
          interval = 6;
        } else {
          interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
      } else {
        // Incorrect or Hard response (Again or Hard)
        repetitions = 0;
        interval = 1;
      }

      // Update Ease Factor (EF)
      // EF = EF + (0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02))
      easeFactor = easeFactor + (0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02));
      if (easeFactor < 1.3) {
        easeFactor = 1.3;
      }

      // Calculate next review date
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + interval);

      const newState: SRSState = {
        cardId,
        interval,
        repetitions,
        easeFactor,
        nextReviewDate: nextDate.toISOString(),
      };

      const updatedStates = { ...prev, [cardId]: newState };
      localStorage.setItem(storageKey, JSON.stringify(updatedStates));
      return updatedStates;
    });
  };

  // Filter cards that are due for review today or earlier
  const getDueCardIds = (allCardIds: string[]): string[] => {
    const now = new Date().getTime();
    return allCardIds.filter((id) => {
      const state = states[id];
      if (!state) return true; // New card, never reviewed
      return new Date(state.nextReviewDate).getTime() <= now;
    });
  };

  const getStats = (allCardIds: string[]) => {
    let newCards = 0;
    let dueCards = 0;
    let learningCards = 0;
    const now = new Date().getTime();

    allCardIds.forEach((id) => {
      const state = states[id];
      if (!state) {
        newCards++;
      } else if (new Date(state.nextReviewDate).getTime() <= now) {
        dueCards++;
      } else {
        learningCards++;
      }
    });

    return { newCards, dueCards, learningCards };
  };

  return { isLoaded, states, reviewCard, getDueCardIds, getStats };
}
