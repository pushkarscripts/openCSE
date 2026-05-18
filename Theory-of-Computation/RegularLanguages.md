# Regular Languages

# Introduction

A **Regular Language** is a language that can be recognized by:

* DFA (Deterministic Finite Automata)
* NFA (Non-deterministic Finite Automata)
* Regular Expressions

Regular languages are the simplest class of formal languages in the **Theory of Computation (TOC)**.

They are mainly used in:

* Compiler design
* Pattern matching
* Lexical analysis
* Text searching

---

# Definition

A language is called a **Regular Language** if it can be accepted by a finite automaton.

---

# Ways to Represent Regular Languages

A regular language can be represented using:

| Method             | Example                   |
| ------------------ | ------------------------- |
| DFA                | State machine             |
| NFA                | Non-deterministic machine |
| Regular Expression | `(0+1)*`                  |

---

# Examples of Regular Languages

## Example 1

Language of all binary strings:

[
L = (0+1)^*
]

Accepted strings:

```text id="skk9s8"
ε
0
1
01
101
1110
```

---

## Example 2

Strings ending with `1`

[
L = (0+1)^*1
]

Accepted:

```text id="5nq6qv"
1
01
101
111
```

---

## Example 3

Strings containing only a’s

[
L = a^*
]

Accepted:

```text id="y4w7k3"
ε
a
aa
aaa
```

---

# Finite Automata and Regular Languages

A language accepted by DFA/NFA is regular.

---

# DFA Example

Language:
Strings ending with `1`

```text id="9f7d1s"
          1
 --> (q0) -----> ((q1))
      ^ 0         |1
      |           |
      +-----------+
           0
```

* q0 → Start state
* q1 → Final state

---

# Regular Expression Example

RE:

[
(0+1)^*1
]

Meaning:

* Any combination of 0 and 1
* Ending with 1

---

# Properties of Regular Languages

Regular languages are closed under several operations.

---

# Closure Properties

If (L_1) and (L_2) are regular, then:

| Operation     | Result  |
| ------------- | ------- |
| Union         | Regular |
| Intersection  | Regular |
| Complement    | Regular |
| Concatenation | Regular |
| Kleene Star   | Regular |

---

## 1. Union

[
L_1 \cup L_2
]

Example:

[
a + b
]

Accepted:

```text id="1w3o1f"
a
b
```

---

## 2. Concatenation

[
L_1L_2
]

Example:

[
ab
]

Accepted:

```text id="q7hzlx"
ab
```

---

## 3. Kleene Star

[
L^*
]

Zero or more repetitions.

Example:

[
a^*
]

Accepted:

```text id="vtmk6u"
ε
a
aa
aaa
```

---

# Important Formulas

## Kleene Star

[
L^* = { \epsilon, L, LL, LLL, ... }
]

---

## Positive Closure

[
L^+ = LL^*
]

One or more repetitions.

---

## Number of Binary Strings

For strings of length (n):

[
2^n
]

---

# Regular vs Non-Regular Languages

| Regular Language     | Non-Regular Language     |
| -------------------- | ------------------------ |
| Accepted by DFA/NFA  | Cannot be accepted by FA |
| Finite memory needed | Infinite memory needed   |
| Example: (a^*)       | Example: (a^n b^n)       |

---

# Non-Regular Language Example

[
L = { a^n b^n \mid n \ge 1 }
]

Not regular because:

* Equal numbers of a’s and b’s must be remembered
* DFA has no memory

---

# Pumping Lemma

Used to prove a language is **not regular**.

For regular language:

[
w = xyz
]

Conditions:

1. (|xy| \le p)
2. (|y| > 0)
3. (xy^iz \in L)

---

# Applications of Regular Languages

* Compiler lexical analysis
* Search engines
* Text editors
* Network protocols
* Pattern recognition

---

# Important Identities

## Identity 1

[
L + \emptyset = L
]

---

## Identity 2

[
L\epsilon = L
]

---

## Identity 3

[
(L^*)^* = L^*
]

---

# Revision Notes

## Quick Recall

```text id="40tqvq"
Regular Language:
- Accepted by DFA/NFA
- Represented using RE
```

---

## Important Operations

```text id="0o5qmt"
Union         → +
Concatenation → Joining
Kleene Star   → *
```

---

## Most Important Expressions

```text id="0cqmw5"
(0+1)*   → All binary strings
a*       → Any number of a's
(0+1)*1  → Strings ending with 1
```

---

# Exam Summary

```text id="qyc6m7"
Regular Languages:
- Recognized by DFA/NFA
- Represented using Regular Expressions

Closure Properties:
- Union
- Intersection
- Complement
- Concatenation
- Kleene Star

Non-Regular Example:
a^n b^n
```
