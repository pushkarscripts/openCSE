# Regular Expressions (RE)

# Introduction

A **Regular Expression (RE)** is a sequence of symbols used to describe patterns in strings.

Regular expressions are widely used in:

* Pattern matching
* Search engines
* Compiler design
* Text editors
* Lexical analysis

Regular expressions represent **Regular Languages** and are equivalent to:

* DFA
* NFA

---

# Definition

A Regular Expression is formed using:

* Symbols from an alphabet
* Operators like union, concatenation, and Kleene star

---

# Basic Symbols

| Symbol | Meaning          |
| ------ | ---------------- |
| `a`    | Single character |
| `ε`    | Empty string     |
| `∅`    | Empty language   |

---

# Operators in Regular Expressions

| Operator             | Meaning       |
| -------------------- | ------------- |
| `+` or `\|`          | Union (OR)    |
| `.` or concatenation | Concatenation |
| `*`                  | Kleene Star   |
| `()`                 | Grouping      |

---

# 1. Union Operator

Represents choice between strings.

Example:

[
a+b
]

Meaning:

* Either `a`
* Or `b`

Accepted strings:

```text
a
b
```

---

# 2. Concatenation

Combines strings sequentially.

Example:

[
ab
]

Accepted string:

```text
ab
```

---

# 3. Kleene Star

Represents zero or more repetitions.

[
a^*
]

Accepted strings:

```text
ε
a
aa
aaa
aaaa
...
```

---

# Important Regular Expressions

## All Binary Strings

[
(0+1)^*
]

Accepted:

* ε
* 0
* 1
* 01
* 1010
* etc.

---

## Strings Ending with 1

[
(0+1)^*1
]

Examples:

```text
1
01
101
111
```

---

## Strings Starting with a

[
a(a+b)^*
]

Examples:

```text
a
ab
aab
abba
```

---

# Precedence of Operators

Highest precedence to lowest:

1. `*`
2. Concatenation
3. `+`

---

# Algebraic Laws of RE

## Union Laws

[
a+b = b+a
]

[
(a+b)+c = a+(b+c)
]

---

## Concatenation Laws

[
(ab)c = a(bc)
]

---

## Kleene Star Laws

[
(a^*)^* = a^*
]

[
\epsilon a = a
]

---

# Regular Language

A language represented by a regular expression is called a **Regular Language**.

---

# RE to DFA/NFA

Every Regular Expression can be converted into:

* NFA
* DFA

And every DFA/NFA can be represented using RE.

---

# Examples

# Example 1

Regular Expression:

[
a^*b
]

Accepted strings:

```text
b
ab
aab
aaab
```

---

# Example 2

Regular Expression:

[
(ab)^*
]

Accepted strings:

```text
ε
ab
abab
ababab
```

---

# Example 3

Regular Expression:

[
0^*1^*
]

Accepted strings:

```text
ε
0
1
000
111
00111
```

Not accepted:

```text
101
010
```

---

# Applications of Regular Expressions

* Email validation
* Password checking
* Search operations
* Compiler lexical analysis
* Data filtering

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

At least one occurrence.

---

## Binary Strings Count

For length (n):

[
2^n
]

---

# Difference Between RE Operators

| Operator      | Meaning            |
| ------------- | ------------------ |
| `+`           | Either/or          |
| Concatenation | Sequential joining |
| `*`           | Repetition         |

---

# Regular Expression Identities

## Identity 1

[
R + \emptyset = R
]

---

## Identity 2

[
R\epsilon = R
]

---

## Identity 3

[
R + R = R
]

---

# Important Exam Questions

## Write RE for:

### Strings over {0,1} ending with 0

[
(0+1)^*0
]

---

## Strings containing only a’s

[
a^*
]

---

## Strings containing exactly one b

[
a^*ba^*
]

---

# Revision Notes

## Quick Recall

```text id="4wkjj4"
+  → Union
*  → Zero or more repetitions
Concatenation → Joining strings
```

---

## Most Important Expressions

```text id="jwjbpo"
(0+1)*   → All binary strings
(0+1)*1  → Strings ending with 1
a*       → Any number of a's
(ab)*    → Repeated ab
```

---

# Exam Summary

```text id="m3v2y7"
Regular Expression:
- Represents Regular Languages
- Equivalent to DFA and NFA

Operators:
+  → OR
*  → Repetition
Concatenation → Joining

L* includes ε
L+ means one or more occurrences
```
