# Decidability and Undecidability

# Introduction

In the **Theory of Computation (TOC)**, decidability and undecidability determine:

* Which problems can be solved by a computer
* Which problems cannot be solved algorithmically

These concepts are mainly studied using:

* Turing Machines (TM)

---

# Decidable Problems

# Definition

A problem is called **Decidable** if:

* There exists a Turing Machine that always stops
* Gives the correct answer (`Yes` or `No`) for every input

Such languages are called:

[
\text{Recursive Languages}
]

---

# Key Idea

```text id="0g7r7t"
Input → TM → Stops → Accept/Reject
```

The machine always halts.

---

# Examples of Decidable Problems

## 1. DFA Acceptance Problem

Check whether a DFA accepts a string.

Decidable because:

* DFA processing always finishes

---

## 2. Finite Language Checking

Determine whether a language is finite.

---

## 3. Regular Language Membership

Check whether a string belongs to a regular language.

---

# Properties of Decidable Problems

| Property                 | Description |
| ------------------------ | ----------- |
| TM always halts          | Yes         |
| Gives exact answer       | Yes         |
| Solvable algorithmically | Yes         |

---

# Recursive Language

A language is recursive if:

* Some TM accepts and rejects correctly
* TM halts for every input

---

# Undecidable Problems

# Definition

A problem is called **Undecidable** if:

* No algorithm exists to solve it for all inputs
* No TM can always halt with correct answer

---

# Key Idea

```text id="mjlwm9"
Input → TM → May run forever
```

---

# Most Famous Example

# Halting Problem

Introduced by Alan Turing.

---

## Problem Statement

Determine whether a program:

* Stops
  OR
* Runs forever

for a given input.

---

## Result

The Halting Problem is **Undecidable**.

No algorithm can solve it for all possible programs.

---

# Why Undecidable?

Because:

* A TM cannot predict behavior of every TM
* Self-referencing creates contradiction

---

# Recursive Enumerable Language (RE)

A language is recursively enumerable if:

* TM accepts strings in the language
* TM may loop forever for strings not in language

---

# Difference Between Recursive and RE Languages

| Recursive          | Recursively Enumerable |
| ------------------ | ---------------------- |
| TM always halts    | TM may not halt        |
| Decidable          | Semi-decidable         |
| Stronger condition | Weaker condition       |

---

# Decidable vs Undecidable

| Decidable               | Undecidable              |
| ----------------------- | ------------------------ |
| Algorithm exists        | No algorithm exists      |
| TM always halts         | TM may loop forever      |
| Exact solution possible | Impossible for all cases |

---

# Important Problems

| Problem                           | Status      |
| --------------------------------- | ----------- |
| DFA Acceptance                    | Decidable   |
| CFG Membership                    | Decidable   |
| Halting Problem                   | Undecidable |
| PCP (Post Correspondence Problem) | Undecidable |

---

# Post Correspondence Problem (PCP)

Given two lists of strings:
Find whether matching concatenation exists.

PCP is:

* Undecidable

---

# Universal Turing Machine (UTM)

A TM capable of simulating any other TM.

Foundation of:

* Modern computers

---

# Relationship Between Languages

```text id="07h9nn"
Recursive ⊂ Recursively Enumerable
```

Meaning:

* Every recursive language is RE
* Not every RE language is recursive

---

# Important Concepts

# 1. Decider

A TM that:

* Always halts
* Decides a language

---

# 2. Recognizer

A TM that:

* Accepts strings in language
* May loop forever otherwise

---

# Church-Turing Thesis

States that:
Any computable problem can be solved by a Turing Machine.

---

# Important Examples

# Example 1 — Decidable

Language:

[
L = { w \mid w \text{ accepted by DFA} }
]

Reason:

* DFA always terminates.

---

# Example 2 — Undecidable

Language:

[
L = { \langle M,w \rangle \mid M \text{ halts on } w }
]

This is the Halting Problem.

---

# Important Formulas / Notations

## Recursive Language

```text id="n05cfc"
TM halts for every input
```

---

## RE Language

```text id="vfjlwm"
TM may loop forever
```

---

# Comparison Table

| Feature | Recursive | RE |
|---|---|
| Always halts | Yes | No |
| Decidable | Yes | No |
| Accepts language | Yes | Yes |

---

# Applications

* Compiler theory
* Program verification
* Artificial Intelligence
* Complexity theory

---

# Important Facts

## TM Power

```text id="m9z6zn"
TM is the strongest computational model
```

---

## Undecidable Problems

```text id="c5vt95"
Cannot be solved by any algorithm
```

---

# Revision Notes

## Quick Recall

```text id="ijw0go"
Decidable:
- Algorithm exists
- TM always halts

Undecidable:
- No universal algorithm
- TM may run forever
```

---

## Most Important Problem

```text id="2i6ch9"
Halting Problem → Undecidable
```

---

## Language Relation

```text id="6r2ofj"
Recursive ⊂ Recursively Enumerable
```

---

# Exam Summary

```text id="p3wvz2"
Decidable Problem:
TM always halts

Undecidable Problem:
No TM can solve all cases

Recursive Language:
Always decidable

RE Language:
May not halt

Most Famous Undecidable Problem:
Halting Problem
```
