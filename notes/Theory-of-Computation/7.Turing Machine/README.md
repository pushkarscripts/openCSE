# Turing Machines (TM)

# Introduction

A **Turing Machine (TM)** is the most powerful computational model in the **Theory of Computation (TOC)**.

It was introduced by Alan Turing.

A Turing Machine is used to:

* Model the working of a computer
* Solve computational problems
* Study limits of computation

Unlike DFA or PDA, a TM has:

* Infinite memory
* Read and write capability

---

# Definition

A Turing Machine is formally represented as:

[
M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)
]

Where:

| Symbol   | Meaning             |
| -------- | ------------------- |
| (Q)      | Set of states       |
| (\Sigma) | Input alphabet      |
| (\Gamma) | Tape alphabet       |
| (\delta) | Transition function |
| (q_0)    | Start state         |
| (B)      | Blank symbol        |
| (F)      | Set of final states |

---

# Main Components

# 1. Infinite Tape

The tape acts as memory.

* Divided into cells
* Stores input and symbols
* Infinite in both directions (conceptually)

Example:

```text id="juz9pf"
| a | a | b | b | □ | □ | □ |
```

`□` = Blank symbol

---

# 2. Read/Write Head

The head can:

* Read symbols
* Write symbols
* Move left or right

---

# 3. Finite Control

Controls:

* State transitions
* Tape operations

---

# Working of Turing Machine

1. Read current tape symbol
2. Change state
3. Write new symbol
4. Move head:

   * Left (L)
   * Right (R)

---

# Transition Function

[
\delta(q, a) = (p, b, D)
]

Where:

| Symbol | Meaning         |
| ------ | --------------- |
| (q)    | Current state   |
| (a)    | Current symbol  |
| (p)    | Next state      |
| (b)    | Symbol written  |
| (D)    | Direction (L/R) |

---

# Example Transition

```text id="bd0n4q"
δ(q0, a) = (q1, X, R)
```

Meaning:

* In state q0 reading `a`
* Replace `a` with `X`
* Move Right
* Go to q1

---

# TM Diagram Example

```text id="7ik5cx"
(q0) --a/X,R--> (q1)
```

Meaning:

* Read `a`
* Write `X`
* Move Right

---

# Acceptance in TM

A string is accepted if:

* TM reaches a final state

Rejected if:

* No valid transition exists

---

# Language Accepted by TM

Languages accepted by Turing Machines are called:

## Recursively Enumerable Languages (RE)

---

# Types of Languages

| Language Type        | Machine |
| -------------------- | ------- |
| Regular              | DFA     |
| Context Free         | PDA     |
| Recursive Enumerable | TM      |

---

# Turing Machine for (a^n b^n)

Idea:

1. Mark first `a`
2. Find matching `b`
3. Repeat
4. Accept if all matched

---

# Example Tape Operation

Input:

```text id="yyo74s"
aaabbb
```

Process:

```text id="4hlz3v"
XaaYbb
XXaYYb
XXXYYY
```

All symbols matched → Accepted

---

# Important Concepts

# 1. Decidable Problem

A problem is decidable if:

* TM always stops
* Gives yes/no answer

---

# 2. Undecidable Problem

A problem that no TM can solve for all cases.

Example:

* Halting Problem

---

# 3. Universal Turing Machine (UTM)

A TM that can simulate any other TM.

Concept behind modern computers.

---

# 4. Halting Problem

Determines whether a TM stops or runs forever.

Proved undecidable by Alan Turing.

---

# Variants of Turing Machines

| Variant              | Description       |
| -------------------- | ----------------- |
| Multi-tape TM        | Multiple tapes    |
| Non-deterministic TM | Multiple choices  |
| Universal TM         | Simulates all TMs |

---

# TM vs PDA

| PDA           | TM                   |
| ------------- | -------------------- |
| Uses stack    | Uses infinite tape   |
| Less powerful | More powerful        |
| Accepts CFL   | Accepts RE languages |

---

# TM vs DFA

| DFA           | TM              |
| ------------- | --------------- |
| Finite memory | Infinite memory |
| Read only     | Read/write      |
| Less powerful | Most powerful   |

---

# Chomsky Hierarchy

| Type   | Grammar              | Machine |
| ------ | -------------------- | ------- |
| Type 3 | Regular Grammar      | DFA     |
| Type 2 | CFG                  | PDA     |
| Type 1 | Context Sensitive    | LBA     |
| Type 0 | Unrestricted Grammar | TM      |

---

# Important Formulas

## TM Representation

[
M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)
]

---

## Transition Function

[
\delta(q, a) = (p, b, D)
]

---

# Applications of Turing Machines

* Artificial Intelligence
* Compiler design
* Complexity theory
* Algorithm analysis
* Modeling computation

---

# Church-Turing Thesis

States that:
Any computational problem solvable algorithmically can be solved by a Turing Machine.

---

# Important Facts

## TM Memory

```text id="22ud9u"
DFA → No memory
PDA → Stack memory
TM  → Infinite tape memory
```

---

## TM Power

```text id="c32r4v"
TM is more powerful than DFA and PDA
```

---

# Revision Notes

## Quick Recall

```text id="9e6c2x"
TM:
- Infinite tape
- Read/write head
- Most powerful automata
```

---

## Important Symbols

```text id="t6vv12"
L → Move Left
R → Move Right
B → Blank symbol
```

---

## Most Important Formula

[
\delta(q, a) = (p, b, D)
]

---

# Exam Summary

```text id="l6fjkk"
Turing Machine:
M = (Q, Σ, Γ, δ, q0, B, F)

Features:
- Infinite memory
- Read/write operations

Accepts:
Recursively Enumerable Languages

Most powerful computational model
```
