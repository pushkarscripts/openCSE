# DFA and NFA

# Introduction

**DFA (Deterministic Finite Automata)** and **NFA (Non-deterministic Finite Automata)** are mathematical models used in the **Theory of Computation (TOC)** to recognize patterns and process strings.

They are mainly used in:

* Lexical analysis in compilers
* Pattern matching
* Text searching
* Designing digital systems

Both DFA and NFA recognize **Regular Languages**.

---

# 1. DFA (Deterministic Finite Automata)

A DFA is a finite state machine where:

* For every state and input symbol, there is **exactly one transition**
* No ambiguity exists
* No ε (epsilon) transitions are allowed

---

## Formal Definition

A DFA is represented as:

[
M = (Q, \Sigma, \delta, q_0, F)
]

Where:

| Symbol   | Meaning              |
| -------- | -------------------- |
| (Q)      | Finite set of states |
| (\Sigma) | Input alphabet       |
| (\delta) | Transition function  |
| (q_0)    | Start state          |
| (F)      | Set of final states  |

---

## DFA Transition Function

[
\delta : Q \times \Sigma \rightarrow Q
]

Meaning:

* One state and one input produce exactly one next state.

---

# Example DFA

![DFA](https://cdn.numerade.com/ask_images/cf60b779368643529ebae3adbbae0169.jpg)

---

# 2. NFA (Non-deterministic Finite Automata)

An NFA is a finite automaton where:

* Multiple transitions are allowed
* ε-transitions may exist
* The machine can move to many states for the same input

If **any path** reaches a final state, the string is accepted.

---

## Formal Definition

[
M = (Q, \Sigma, \delta, q_0, F)
]

Same as DFA, but transition function differs.

---

## NFA Transition Function

[
\delta : Q \times \Sigma \rightarrow 2^Q
]

Where:

* (2^Q) means set of possible states.

---

# Example NFA

![DFA](https://tse3.mm.bing.net/th/id/OIP.TS-9rUn1XCU3_3D-nXmtrAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3)

# DFA vs NFA

| DFA                     | NFA                           |
| ----------------------- | ----------------------------- |
| Exactly one transition  | Multiple transitions possible |
| No ε-moves              | ε-moves allowed               |
| Easier to implement     | Easier to design              |
| Faster execution        | Compact representation        |
| Transition to one state | Transition to many states     |

---

# Important Concepts

## 1. Regular Language

Languages accepted by DFA/NFA are called **Regular Languages**.

---

## 2. ε-Transition

An NFA can change state without consuming input.

Example:

```text
q0 --ε--> q1
```

---

## 3. Equivalent Machines

Every NFA can be converted into an equivalent DFA.

---

# NFA to DFA Conversion

Method:

* Use **Subset Construction Method**
* DFA states are combinations of NFA states

Formula:

If NFA has (n) states:

[
\text{Maximum DFA states} = 2^n
]

---

# Important Formulas

## DFA Transition

[
\delta : Q \times \Sigma \rightarrow Q
]

---

## NFA Transition

[
\delta : Q \times \Sigma \rightarrow 2^Q
]

---

## Number of Strings

Binary strings of length (n):

[
2^n
]

---

## Kleene Star

[
L^* = { \epsilon, L, LL, LLL, ... }
]

---

# Closure Properties

Regular languages are closed under:

* Union
* Intersection
* Complement
* Concatenation
* Kleene star

---

# Advantages

## DFA

* Simple execution
* Efficient implementation

## NFA

* Easy construction
* Fewer states

---

# Applications

## DFA

* Lexical analyzers
* Pattern matching
* Network protocols

## NFA

* Regular expression engines
* Compiler design

---

# Revision Notes

## DFA Quick Notes

```text
- One transition per input
- No ε-transition
- Deterministic behavior
- Faster execution
```

---

## NFA Quick Notes

```text
- Multiple transitions possible
- ε-transition allowed
- Accept if any path reaches final state
```

---

# Most Important Formulas

## DFA

[
\delta : Q \times \Sigma \rightarrow Q
]

## NFA

[
\delta : Q \times \Sigma \rightarrow 2^Q
]

## Maximum DFA States from NFA

[
2^n
]

---

# Exam Point Summary

```text
DFA:
- Exactly one next state
- No epsilon moves

NFA:
- Multiple next states
- Epsilon moves allowed

Both accept Regular Languages
Every NFA can be converted to DFA
```
