# Theory of Computation (TOC)

## Introduction

**Theory of Computation (TOC)** is a subject that studies how computers solve problems mathematically.
It focuses on:

* What problems can be solved by a computer
* How problems are represented using machines and languages
* The limitations of computation

TOC mainly includes:
![Theory of Computation](https://cdn.botpenguin.com/assets/website/Theory_Of_Computation_993f4ccba7.webp)

1. **Finite Automata (FA)** → used for pattern matching
2. **Context Free Grammar (CFG)** → used in compilers/parsing
3. **Pushdown Automata (PDA)** → used for nested structures
4. **Turing Machines (TM)** → model of a general computer

---

# 1. Finite Automata (FA)

A **Finite Automaton** is a machine with finite states used to recognize patterns.

## Types

* **DFA** → Deterministic Finite Automata
* **NFA** → Non-deterministic Finite Automata

---

## DFA Definition

A DFA is defined as:

[
M = (Q, \Sigma, \delta, q_0, F)
]

Where:

| Symbol   | Meaning             |
| -------- | ------------------- |
| (Q)      | Set of states       |
| (\Sigma) | Input alphabet      |
| (\delta) | Transition function |
| (q_0)    | Start state         |
| (F)      | Final states        |

---

## Example DFA

Language: Strings ending with `1`

States:

* q0 → start
* q1 → final

Transitions:

* q0 --0--> q0
* q0 --1--> q1
* q1 --0--> q0
* q1 --1--> q1

### Small DFA Diagram

```text
      1
 --> (q0) ------> ((q1))
      ^ 0         |1
      |           |
      +-----------+
           0
```

`((q1))` = Final state

---

## Important Formulas / Facts

### Number of Strings

Binary strings of length (n):

[
2^n
]

### Regular Expression Operators

| Operator | Meaning       |
| -------- | ------------- |
| `a+b`    | Union         |
| `ab`     | Concatenation |
| `a*`     | Kleene star   |

Example:

[
(0+1)^*
]

means all binary strings.

---

# 2. Regular Languages

A language accepted by DFA/NFA is called a **Regular Language**.

## Closure Properties

Regular languages are closed under:

* Union
* Intersection
* Complement
* Concatenation
* Kleene star

---

# 3. Context Free Grammar (CFG)

CFG is used to generate languages.

## Definition

A CFG is:

[
G = (V, T, P, S)
]

| Symbol | Meaning      |
| ------ | ------------ |
| (V)    | Variables    |
| (T)    | Terminals    |
| (P)    | Productions  |
| (S)    | Start symbol |

---

## Example CFG

Language:

[
L = { a^n b^n \mid n \ge 1 }
]

Grammar:

```text
S → aSb
S → ab
```

### Derivation Example

```text
S
→ aSb
→ aaSbb
→ aaabbb
```

---

# 4. Pushdown Automata (PDA)

A PDA is like DFA + Stack.

Used for:

* Balanced parentheses
* Compiler syntax checking

## Key Idea

Stack operations:

* Push
* Pop

---

## Example

Language:

[
L = { a^n b^n }
]

Method:

* Push `a`
* Pop for each `b`
* Accept if stack becomes empty

---

# 5. Turing Machine (TM)

A Turing Machine is the mathematical model of a computer.

Components:

* Infinite tape
* Read/write head
* States

---

## Definition

[
M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)
]

Where:

* (\Gamma) = tape alphabet
* (B) = blank symbol

---

## Types of Languages

| Type                 | Recognized By |
| -------------------- | ------------- |
| Regular              | DFA/NFA       |
| Context Free         | PDA           |
| Recursive Enumerable | TM            |

---

# 6. Chomsky Hierarchy

| Type   | Grammar           | Machine |
| ------ | ----------------- | ------- |
| Type 3 | Regular Grammar   | DFA     |
| Type 2 | CFG               | PDA     |
| Type 1 | Context Sensitive | LBA     |
| Type 0 | Unrestricted      | TM      |

---

# 7. Pumping Lemma (Important)

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

## Example Idea

Language:

[
L = { a^n b^n }
]

Not regular because pumping breaks equal counts.

---

# 8. Important Differences

## DFA vs NFA

| DFA                   | NFA                  |
| --------------------- | -------------------- |
| One transition        | Multiple transitions |
| No ε-move             | ε-move allowed       |
| Faster implementation | Easier design        |

---

## DFA vs PDA

| DFA               | PDA        |
| ----------------- | ---------- |
| No memory         | Uses stack |
| Regular languages | CFL        |

---

# Revision Notes (Quick Recall)

## Must Remember

### DFA

* One transition per symbol
* No ε transitions

### NFA

* Multiple paths possible

### Regular Expression

* `+` → Union
* `*` → Zero or more repetitions

### CFG

* Generates context free languages

### PDA

* Uses stack
* Accepts (a^n b^n)

### Turing Machine

* Most powerful model

### Pumping Lemma

Used to prove:

* Not Regular
* Not Context Free

### Chomsky Hierarchy Order

```text
Regular ⊂ CFL ⊂ CSL ⊂ RE
```

---

# Super Short Exam Revision

```text
DFA → finite memory
PDA → stack memory
TM → infinite tape

Regular Language → DFA
CFL → PDA

a^n b^n → Not Regular
(0+1)* → All binary strings
```
