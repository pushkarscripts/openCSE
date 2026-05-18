# Pushdown Automata (PDA)

# Introduction

A **Pushdown Automata (PDA)** is a computational model used to recognize **Context Free Languages (CFLs)**.

A PDA is similar to a finite automaton but with an additional memory structure called a **Stack**.

PDA is mainly used in:

* Compiler design
* Syntax parsing
* Checking balanced parentheses
* Expression evaluation

---

# Definition

A PDA is formally represented as:

[
M = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)
]

Where:

| Symbol   | Meaning              |
| -------- | -------------------- |
| (Q)      | Set of states        |
| (\Sigma) | Input alphabet       |
| (\Gamma) | Stack alphabet       |
| (\delta) | Transition function  |
| (q_0)    | Start state          |
| (Z_0)    | Initial stack symbol |
| (F)      | Set of final states  |

---

# Main Components

## 1. Input Tape

Contains the input string.

---

## 2. Finite Control

Controls transitions between states.

---

## 3. Stack

Stores symbols temporarily.

Operations:

* Push
* Pop
* No operation

---

# PDA Transition Function

[
\delta(q, a, X) = (p, \gamma)
]

Meaning:

* Current state = (q)
* Input symbol = (a)
* Stack top = (X)

Move to:

* New state = (p)
* Replace (X) with (\gamma)

---

# Stack Operations

| Operation | Meaning           |
| --------- | ----------------- |
| Push      | Insert symbol     |
| Pop       | Remove top symbol |
| ε         | No input consumed |

---

# Working of PDA

1. Read input symbol
2. Check stack top
3. Perform push/pop
4. Move to next state
5. Accept if final condition satisfied

---

# Acceptance Methods

A PDA accepts strings in two ways:

## 1. Acceptance by Final State

Input completely read and machine reaches final state.

---

## 2. Acceptance by Empty Stack

Input completely read and stack becomes empty.

---

# Example PDA

Language:

[
L = { a^n b^n \mid n \ge 1 }
]

Idea:

* Push one symbol for every `a`
* Pop one symbol for every `b`
* Accept when stack becomes empty

---

# PDA Transitions

```text id="hgzx77"
(q0, a, Z0) → (q0, aZ0)
(q0, a, a)  → (q0, aa)

(q0, b, a)  → (q1, ε)

(q1, b, a)  → (q1, ε)

(q1, ε, Z0) → (qf, Z0)
```

---

# PDA Diagram

```text id="e0g8ns"
         push a
 --> (q0) ---------
      |            |
      | pop a      |
      v            |
     (q1) ------> ((qf))
        stack empty
```

---

# Example Derivation

Input:

```text id="pr4k8e"
aaabbb
```

Stack operations:

```text id="w0l33s"
Read a → push
Read a → push
Read a → push

Read b → pop
Read b → pop
Read b → pop
```

Stack becomes empty → Accepted

---

# Context Free Languages (CFL)

Languages accepted by PDA are called **Context Free Languages**.

---

# Important Facts

## PDA vs DFA

| DFA                       | PDA           |
| ------------------------- | ------------- |
| No memory                 | Uses stack    |
| Accepts Regular Languages | Accepts CFL   |
| Less powerful             | More powerful |

---

## Memory Structure

```text id="4mq0pa"
DFA → finite states only
PDA → finite states + stack
```

---

# Deterministic PDA (DPDA)

A PDA with:

* At most one transition for each input

Used for deterministic CFLs.

---

# Non-Deterministic PDA (NPDA)

Can have:

* Multiple transitions
* ε-transitions

More powerful than DPDA.

---

# PDA and CFG Relationship

Every CFG has an equivalent PDA.

Every PDA corresponds to a CFG.

---

# Important Examples

# 1. Balanced Parentheses

CFG:

```text id="tzkn0g"
S → SS
S → (S)
S → ε
```

Accepted by PDA using stack.

---

# 2. Equal Number of a’s and b’s

Language:

[
L = { a^n b^n }
]

Accepted using push/pop operations.

---

# Important Formulas

## PDA Representation

[
M = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)
]

---

## Transition Function

[
\delta(q, a, X) = (p, \gamma)
]

---

# Closure Properties of CFL

Context Free Languages are closed under:

* Union
* Concatenation
* Kleene Star

Not always closed under:

* Intersection
* Complement

---

# Applications of PDA

* Compiler parsing
* Syntax checking
* Expression evaluation
* XML/HTML validation

---

# Important Differences

## PDA vs CFG

| PDA           | CFG                   |
| ------------- | --------------------- |
| Machine model | Grammar model         |
| Uses stack    | Uses production rules |

---

## DPDA vs NPDA

| DPDA          | NPDA              |
| ------------- | ----------------- |
| Deterministic | Non-deterministic |
| Less powerful | More powerful     |

---

# Revision Notes

## Quick Recall

```text id="ndtmjw"
PDA:
- Finite automata + Stack
- Accepts CFL
- Uses push and pop operations
```

---

## Important Stack Operations

```text id="tvk3sv"
Push → Insert symbol
Pop  → Remove symbol
```

---

## Most Important Language

```text id="g1q0kp"
a^n b^n
```

Method:

```text id="85fkfh"
Read a → push
Read b → pop
```

---

# Exam Summary

```text id="svk3s0"
PDA:
M = (Q, Σ, Γ, δ, q0, Z0, F)

Accepts:
Context Free Languages

Memory:
Stack

Equivalent to:
CFG
```
