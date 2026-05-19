# Pumping Lemma

# Introduction

The **Pumping Lemma** is an important theorem in the **Theory of Computation (TOC)** used to prove that a language is:

* **Not Regular**
* Sometimes **Not Context Free**

The most common use is:

* Proving languages are **not regular**

---

# Pumping Lemma for Regular Languages

# Statement

For every regular language (L), there exists a number (p) (called pumping length) such that every string (w) in (L) with:

[
|w| \ge p
]

can be divided into:

[
w = xyz
]

such that:

---

# Conditions

## Condition 1

[
|xy| \le p
]

Meaning:

* (x) and (y) occur within first (p) characters.

---

## Condition 2

[
|y| > 0
]

Meaning:

* (y) cannot be empty.

---

## Condition 3

[
xy^iz \in L
]

for all:

[
i \ge 0
]

Meaning:

* Repeating (y) any number of times still keeps string in language.

---

# Main Idea

If a language is regular:

* Some part of the string can be repeated (“pumped”).

---

# Important Formula

[
w = xyz
]

with:

[
|xy| \le p
]

[
|y| > 0
]

[
xy^iz \in L
]

---

# Why “Pumping”?

Because:

* Middle part (y) can be repeated multiple times.

Example:

```text id="ysghxq"
xyyz
xyyyz
xyyyy z
```

---

# Steps to Prove a Language is NOT Regular

# Step 1

Assume language is regular.

---

# Step 2

Assume pumping length = (p)

---

# Step 3

Choose a string (w) such that:

[
|w| \ge p
]

---

# Step 4

Split:

[
w = xyz
]

according to pumping lemma conditions.

---

# Step 5

Pump (y):
Choose (i = 0) or (i = 2)

---

# Step 6

Show resulting string is NOT in language.

Contradiction occurs.

Hence language is not regular.

---

# Example 1

# Prove

[
L = { a^n b^n \mid n \ge 1 }
]

is not regular.

---

# Solution

Assume (L) is regular.

By pumping lemma:
There exists pumping length (p).

Choose:

[
w = a^p b^p
]

Clearly:

[
|w| \ge p
]

---

# Split String

[
w = xyz
]

Since:

[
|xy| \le p
]

the substring (y) contains only `a`’s.

Let:

[
y = a^k
]

where:

[
k > 0
]

---

# Pump with (i=0)

[
xz = a^{p-k} b^p
]

Now number of a’s ≠ number of b’s.

So:

[
xz \notin L
]

Contradiction.

Therefore:

[
L \text{ is not regular}
]

---

# Example 2

# Language

[
L = { 0^n1^n \mid n \ge 1 }
]

Not regular using same logic.

---

# Important Observations

## Pumping Lemma is used to:

```text id="jv72hq"
Prove NOT Regular
```

---

## Pumping Lemma does NOT prove:

```text id="6v6xv5"
Language is regular
```

---

# Common Non-Regular Languages

| Language      | Reason                |
| ------------- | --------------------- |
| (a^n b^n)     | Equal counting        |
| (0^n1^n)      | Equal counting        |
| Palindromes   | Requires memory       |
| (a^n b^n c^n) | Multiple equal counts |

---

# Pumping Lemma for CFL

Used for proving:

* Not Context Free

Form:

[
w = uvxyz
]

Conditions:

[
|vxy| \le p
]

[
|vy| > 0
]

[
uv^ixy^iz \in L
]

---

# Difference Between Regular and CFL Pumping Lemma

| Regular PL      | CFL PL           |
| --------------- | ---------------- |
| (w = xyz)       | (w = uvxyz)      |
| One pumped part | Two pumped parts |

---

# Important Facts

## Regular Languages

Always satisfy pumping lemma.

---

## Non-Regular Languages

Violate pumping lemma conditions.

---

# Applications

* Proving languages are not regular
* Automata theory
* Compiler design
* Complexity theory

---

# Common Mistakes

## Mistake 1

Thinking pumping lemma proves regularity.

Wrong.

It only helps prove:

* NOT regular

---

## Mistake 2

Choosing wrong string.

Correct string must satisfy:

[
|w| \ge p
]

---

# Revision Notes

## Quick Recall

```text id="nxvljv"
Pumping Lemma:
Used to prove NOT regular
```

---

## Most Important Formula

[
w = xyz
]

Conditions:

[
|xy| \le p
]

[
|y| > 0
]

[
xy^iz \in L
]

---

## Standard Example

```text id="swd4j2"
a^n b^n → Not Regular
```

Reason:

* Pumping breaks equal counts.

---

# Exam Summary

```text id="6q6nfw"
Pumping Lemma:
Used for proving languages are NOT regular

Main idea:
Some substring can be repeated

If pumping breaks language property:
Language is NOT regular
```
