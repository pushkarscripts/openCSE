// lib/flashcardData.ts

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

export interface FlashcardDeck {
  subject: string;
  slug: string;
  description: string;
  cards: Flashcard[];
}

export const flashcardDecks: FlashcardDeck[] = [
  {
    subject: "Programming in C",
    slug: "c-programming",
    description: "Core concepts, keywords, and fundamental definitions for C programming.",
    cards: [
      { id: "c-1", term: "Pointer", definition: "A variable that stores the memory address of another variable as its value." },
      { id: "c-2", term: "malloc()", definition: "A function in stdlib.h that allocates a specified number of bytes of uninitialized memory and returns a void pointer to the first byte." },
      { id: "c-3", term: "Macro", definition: "A fragment of code defined by #define that is replaced by its value during the preprocessing stage." },
      { id: "c-4", term: "Struct", definition: "A user-defined data type in C that groups related variables of different data types under a single name." },
      { id: "c-5", term: "Dangling Pointer", definition: "A pointer that points to a memory location that has been deleted (freed), leading to undefined behavior if accessed." },
      { id: "c-6", term: "Typedef", definition: "A keyword used to provide existing data types with a new name (alias) to make code more readable." },
      { id: "c-7", term: "Recursion", definition: "The process where a function calls itself directly or indirectly to solve smaller instances of the same problem." },
      { id: "c-8", term: "Void Pointer", definition: "A pointer that has no associated data type. It can hold an address of any type and can be typecast to any type." },
      { id: "c-9", term: "Extern", definition: "A storage class specifier used to declare a global variable or function in another file." },
      { id: "c-10", term: "Calloc()", definition: "A memory allocation function that allocates memory for an array of elements, initializes them to zero, and returns a pointer." },
    ]
  },
  {
    subject: "Engineering Physics",
    slug: "ep",
    description: "Definitions for electromagnetism, quantum mechanics, and waves.",
    cards: [
      { id: "ep-1", term: "Magnetic Permeability", definition: "The measure of the resistance of a material against the formation of a magnetic field, otherwise known as distributed inductance." },
      { id: "ep-2", term: "Faraday's Law", definition: "A basic law of electromagnetism predicting how a magnetic field will interact with an electric circuit to produce an electromotive force (EMF)." },
      { id: "ep-3", term: "Photoelectric Effect", definition: "The emission of electrons when electromagnetic radiation, such as light, hits a material. It demonstrates the particle nature of light." },
      { id: "ep-4", term: "Superconductor", definition: "A material that can conduct electricity or transport electrons from one atom to another with no resistance when cooled below a critical temperature." },
      { id: "ep-5", term: "Gauss's Law", definition: "The net electric flux through any hypothetical closed surface is equal to 1/ε₀ times the net electric charge within that closed surface." },
      { id: "ep-6", term: "Displacement Current", definition: "A quantity appearing in Maxwell's equations that is defined in terms of the rate of change of electric displacement field, ensuring continuity in Ampere's Law." },
    ]
  },
  {
    subject: "Engineering Mathematics II",
    slug: "em2",
    description: "Key concepts in calculus, differential equations, and complex analysis.",
    cards: [
      { id: "em-1", term: "Laplace Transform", definition: "An integral transform that converts a function of a real variable (usually time) to a function of a complex variable (complex frequency)." },
      { id: "em-2", term: "Maclaurin Series", definition: "A Taylor series expansion of a function about 0, representing the function as an infinite sum of terms calculated from its derivatives at a single point." },
      { id: "em-3", term: "Eigenvector", definition: "A non-zero vector that changes at most by a scalar factor when a linear transformation is applied to it." },
      { id: "em-4", term: "Partial Differential Equation (PDE)", definition: "An equation that imposes relations between the various partial derivatives of a multivariable function." },
      { id: "em-5", term: "Cauchy-Riemann Equations", definition: "Two partial differential equations which form a necessary (and almost sufficient) condition for a complex function to be complex-differentiable (analytic)." },
    ]
  }
];
