# Chomsky Hierarchy

# Introduction

The **Chomsky Hierarchy** is a classification of formal languages and grammars proposed by Noam Chomsky.

It divides languages into different levels based on:

* Complexity
* Grammar rules
* Computational power

The hierarchy helps in understanding:

* Automata
* Formal languages
* Compiler design
* Parsing techniques

---

# Chomsky Hierarchy Levels

| Type   | Grammar                   | Language               | Machine |
| ------ | ------------------------- | ---------------------- | ------- |
| Type 3 | Regular Grammar           | Regular Language       | DFA/NFA |
| Type 2 | Context Free Grammar      | CFL                    | PDA     |
| Type 1 | Context Sensitive Grammar | CSL                    | LBA     |
| Type 0 | Unrestricted Grammar      | Recursively Enumerable | TM      |

---

# Hierarchy Relation

```text id="7h3bwm"
Regular ⊂ CFL ⊂ CSL ⊂ RE
```

Meaning:

* Every Regular Language is a CFL
* Every CFL is a CSL
* Every CSL is RE

---

# Type 3 — Regular Grammar

# Introduction

The simplest grammar type.

Used in:

* Lexical analysis
* Pattern matching

Recognized by:

* DFA
* NFA

---

# Production Rules

Forms:

[
A \rightarrow aB
]

or

[
A \rightarrow a
]

---

# Example

```text id="kg9fdq"
S → aA
A → b
```

Generated string:

```text id="9br4nn"
ab
```

---

# Regular Language Example

[
(0+1)^*
]

---

# Machine

Accepted by:

* DFA
* NFA

---

# Type 2 — Context Free Grammar (CFG)

# Introduction

Used in:

* Parsing
* Compiler syntax analysis

Recognized by:

* Pushdown Automata (PDA)

---

# Production Rules

General form:

[
A \rightarrow \gamma
]

Where:

* Left side has one non-terminal

---

# Example

```text id="9z8w1l"
S → aSb
S → ab
```

Generates:

```text id="ww9kju"
ab
aabb
aaabbb
```

---

# Context Free Language Example

[
L = { a^n b^n \mid n \ge 1 }
]

---

# Machine

Accepted by:

* PDA

---

# Type 1 — Context Sensitive Grammar (CSG)

# Introduction

More powerful than CFG.

Rules depend on context.

Recognized by:

* Linear Bounded Automata (LBA)

---

# Production Rule

General form:

[
\alpha A \beta \rightarrow \alpha \gamma \beta
]

Condition:

[
|\alpha A \beta| \le |\alpha \gamma \beta|
]

Length cannot decrease.

---

# Example

```text id="xtq6nf"
aA → ab
```

---

# Context Sensitive Language Example

[
L = { a^n b^n c^n \mid n \ge 1 }
]

Requires equal numbers of:

* a’s
* b’s
* c’s

---

# Machine

Accepted by:

* Linear Bounded Automata (LBA)

---

# Type 0 — Unrestricted Grammar

# Introduction

Most powerful grammar type.

Recognized by:

* Turing Machines

---

# Production Rules

General form:

[
\alpha \rightarrow \beta
]

No restrictions.

---

# Language Type

Recursively Enumerable Languages.

---

# Example

Languages accepted by:

* Turing Machines

---

# Machine

Accepted by:

* TM

---

# Comparison Table

| Feature | Type 3  | Type 2 | Type 1       | Type 0        |
| ------- | ------- | ------ | ------------ | ------------- |
| Grammar | Regular | CFG    | CSG          | Unrestricted  |
| Machine | DFA/NFA | PDA    | LBA          | TM            |
| Memory  | None    | Stack  | Limited tape | Infinite tape |
| Power   | Least   | Medium | High         | Highest       |

---

# Important Examples

| Language                     | Type    |
| ---------------------------- | ------- |
| (a^*)                        | Regular |
| (a^n b^n)                    | CFL     |
| (a^n b^n c^n)                | CSL     |
| General computable languages | RE      |

---

# Important Machines

## DFA

```text id="n1v38n"
Finite states only
```

---

## PDA

```text id="y3d2j4"
Finite states + Stack
```

---

## LBA

```text id="m52w3f"
Limited tape memory
```

---

## Turing Machine

```text id="4t1xhj"
Infinite tape memory
```

---

# Important Facts

## Power Order

```text id="9f9b3y"
TM > LBA > PDA > DFA
```

---

## Grammar Power

```text id="yv2l8s"
Type 0 > Type 1 > Type 2 > Type 3
```

---

# Applications

| Type    | Applications                 |
| ------- | ---------------------------- |
| Regular | Pattern matching             |
| CFG     | Compiler parsing             |
| CSL     | Advanced language processing |
| RE      | General computation          |

---

# Important Formulas

## Regular Grammar

[
A \rightarrow aB
]

---

## CFG

[
A \rightarrow \gamma
]

---

## CSG

[
\alpha A \beta \rightarrow \alpha \gamma \beta
]

---

## Unrestricted Grammar

[
\alpha \rightarrow \beta
]

---

# Revision Notes

## Quick Recall

```text id="6cv8pk"
Type 3 → Regular Grammar → DFA
Type 2 → CFG → PDA
Type 1 → CSG → LBA
Type 0 → Unrestricted → TM
```

---

## Hierarchy

```text id="nq5g6v"
Regular ⊂ CFL ⊂ CSL ⊂ RE
```

---

## Most Important Languages

```text id="3t0a9m"
a*              → Regular
a^n b^n         → CFL
a^n b^n c^n     → CSL
```

---

# Exam Summary

```text id="5cjlwm"
Chomsky Hierarchy:
Classification of languages and grammars

Most Powerful:
Type 0 → TM

Least Powerful:
Type 3 → DFA

Hierarchy:
Regular ⊂ CFL ⊂ CSL ⊂ RE
```
