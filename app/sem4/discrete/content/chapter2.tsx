"use client"
import React from "react"
import { Inline, Block } from "../../../components/Math"

export function Ch2Content() {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Sets, Relations, and Functions</span> form the fundamental foundational language for all of discrete mathematics and computer science. This chapter establishes the core structural groupings used to collect elements, map objects, organize hierarchies, and model deterministic operations within computational environments.
      </p>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 1: Set Theory */}
      <section>
        <h2 className="section-heading">1. Set Theory, Operations, and Identities</h2>
        <p className="p-text">
          A <span className="font-semibold">Set</span> is an unordered collection of distinct, well-defined objects. The objects belonging to a set are called its elements. 
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">Subsets and Power Sets</h4>
        <ul className="section-list">
          <li><strong>Subset (<Inline math="A \subseteq B" />):</strong> Set <Inline math="A" /> is a subset of set <Inline math="B" /> if and only if every element that belongs to <Inline math="A" /> also belongs to <Inline math="B" />. Formally: <Inline math="\forall x (x \in A \rightarrow x \in B)" />.</li>
          <li><strong>Proper Subset (<Inline math="A \subset B" />):</strong> Set <Inline math="A" /> is a proper subset of <Inline math="B" /> if <Inline math="A \subseteq B" /> and <Inline math="A \neq B" />. This implies <Inline math="B" /> contains at least one element not present in <Inline math="A" />.</li>
          <li><strong>Power Set (<Inline math="\mathcal{P}(A)" />):</strong> The power set of a set <Inline math="A" /> is the collection of all possible subsets of <Inline math="A" />, including the empty set (<Inline math="\emptyset" />) and the set <Inline math="A" /> itself.</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3 font-mono text-base">
          <p className="font-bold text-lg mb-1">💡 Power Set Cardinality Theorem:</p>
          <p>If a finite set <Inline math="A" /> has <Inline math="|A| = n" /> elements, then its power set contains <Inline math="|\mathcal{P}(A)| = 2^n" /> elements.</p>
          <p className="text-sm mt-2 font-sans font-semibold text-gray-800">Example:</p>
          <p className="text-sm font-sans text-gray-700">Let <Inline math="A = \{1, 2\}" />. Then <Inline math="\mathcal{P}(A) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}" />. Here, <Inline math="|A| = 2" /> and <Inline math="|\mathcal{P}(A)| = 2^2 = 4" />.</p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Set Operators and Mathematical Definitions</h4>
        <p className="p-text">
          Let <Inline math="U" /> represent the universal set containing all possible elements under discussion.
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Operation</th>
                <th className="border border-[#c7a669] p-3 text-left">Notation</th>
                <th className="border border-[#c7a669] p-3 text-left">Formal Set-Builder Definition</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Union</td>
                <td className="border border-[#c7a669] p-3"><Inline math="A \cup B" /></td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∨ x ∈ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Intersection</td>
                <td className="border border-[#c7a669] p-3"><Inline math="A \cap B" /></td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∧ x ∈ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Difference</td>
                <td className="border border-[#c7a669] p-3"><Inline math="A - B" /></td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∧ x ∉ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Complement</td>
                <td className="border border-[#c7a669] p-3"><Inline math="A'" /> (or <Inline math="\bar{A}" />)</td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ U ∧ x ∉ A }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Symmetric Difference</td>
                <td className="border border-[#c7a669] p-3"><Inline math="A \Delta B" /></td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ (A − B) ∨ x ∈ (B − A) }"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Algebraic Properties and Identities of Sets</h4>
        <p className="p-text">
          Set operations satisfy algebraic laws that parallel propositional logic equivalences.
        </p>
        <ul className="section-list">
          <li><strong>Commutative Laws:</strong> <Inline math="A \cup B = B \cup A" /> and <Inline math="A \cap B = B \cap A" />.</li>
          <li><strong>Associative Laws:</strong> <Inline math="(A \cup B) \cup C = A \cup (B \cup C)" /> and <Inline math="(A \cap B) \cap C = A \cap (B \cap C)" />.</li>
          <li><strong>Distributive Laws:</strong> <Inline math="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" /> and <Inline math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />.</li>
          <li><strong>De Morgan's Laws for Sets:</strong> <Inline math="(A \cup B)' = A' \cap B'" /> and <Inline math="(A \cap B)' = A' \cup B'" />.</li>
          <li><strong>Absorption Laws:</strong> <Inline math="A \cup (A \cap B) = A" /> and <Inline math="A \cap (A \cup B) = A" />.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Inclusion-Exclusion Principle Formulas</h4>
        <p className="p-text">
          The Principle of Inclusion-Exclusion (PIE) computes the total cardinality of a union of multiple intersecting sets by alternately adding individual sizes and subtracting shared elements to prevent double-counting.
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 border border-[#c7a669] font-mono text-base space-y-4">
          <div>
            <p className="font-bold font-sans text-lg text-brown-900">1. Two-Set Formula:</p>
            <p className="mt-1"><Inline math="|A \cup B| = |A| + |B| - |A \cap B|" /></p>
          </div>
          <div>
            <p className="font-bold font-sans text-lg text-brown-900">2. Three-Set Formula:</p>
            <p className="mt-1"><Inline math="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" /></p>
          </div>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border-l-4 border-[#8b5e47]">
          <h4 className="text-xl font-bold mb-1">⚠️ Critical Edge Case (Disjoint Sets):</h4>
          <p className="text-base">
            If sets <Inline math="A" /> and <Inline math="B" /> are <strong>mutually exclusive / disjoint</strong>, their intersection is empty: <Inline math="A \cap B = \emptyset \implies |A \cap B| = 0" />. In this scenario, the Inclusion-Exclusion formula simplifies directly into the Sum Rule: <Inline math="|A \cup B| = |A| + |B|" />.
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 2: Relations */}
      <section>
        <h2 className="section-heading">2. Binary Relations & Properties</h2>
        <p className="p-text">
          Given two sets <Inline math="A" /> and <Inline math="B" />, the <span className="font-semibold">Cartesian Product</span> <Inline math="A \times B" /> is the set of all ordered pairs <Inline math="(a, b)" /> such that <Inline math="a \in A" /> and <Inline math="b \in B" />. A **Binary Relation** <Inline math="R" /> from <Inline math="A" /> to <Inline math="B" /> is structurally a subset of this product: <Inline math="R \subseteq A \times B" />. If <Inline math="(a, b) \in R" />, we write <Inline math="aRb" />.
        </p>

        <h4 className="text-2xl font-bold mt-6 mb-4">Classifications and Structural Types of Relations on a Set A</h4>
        <p className="p-text">
          A relation <Inline math="R" /> defined on a single set (<Inline math="R \subseteq A \times A" />) can possess specific properties across its coordinate matrix.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Property</th>
                <th className="border border-[#c7a669] p-3 text-left">Formal Logical Constraint Rule</th>
                <th className="border border-[#c7a669] p-3 text-left">Concrete Example or Counter-Example</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Reflexive</td>
                <td className="border border-[#c7a669] p-3 font-mono">
                  <Inline math="\forall a \in A, (a, a) \in R" />
                </td>
                <td className="border border-[#c7a669] p-3">
                  The relation "<Inline math="\le" />" on integers, since every number <Inline math="a \le a" />.
                </td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Irreflexive</td>
                <td className="border border-[#c7a669] p-3 font-mono">
                  <Inline math="\forall a \in A, (a, a) \notin R" />
                </td>
                <td className="border border-[#c7a669] p-3">
                  The relation "<Inline math="<" />" on integers, since a number can never be strictly less than itself.
                </td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Symmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono">
                  <Inline math="\forall a, b \in A, (a, b) \in R \rightarrow (b, a) \in R" />
                </td>
                <td className="border border-[#c7a669] p-3">
                  "Is a sibling of" relation across a human demographic set.
                </td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Asymmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono">
                  <Inline math="\forall a, b \in A, (a, b) \in R \rightarrow (b, a) \notin R" />
                </td>
                <td className="border border-[#c7a669] p-3">
                  The relation "<Inline math="<" />". If <Inline math="x < y" />, it is impossible for <Inline math="y < x" />. Implies irreflexivity.
                </td>
              </tr>       
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Anti-Symmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="\forall a, b \in A, ((a, b) \in R \wedge (b, a) \in R) \rightarrow a = b" /></td>
                <td className="border border-[#c7a669] p-3">The subset relation "<Inline math="\subseteq" />". If <Inline math="A \subseteq B" /> and <Inline math="B \subseteq A" />, then <Inline math="A = B" />.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Transitive</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="\forall a, b, c \in A, ((a, b) \in R \wedge (b, c) \in R) \rightarrow (a, c) \in R" /></td>
                <td className="border border-[#c7a669] p-3">"Divides" relation on integers. If <Inline math="x | y" /> and <Inline math="y | z" />, then <Inline math="x | z" />.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border border-[#c7a669]">
          <h4 className="text-xl font-bold mb-1 text-red-800">💡 Critical Matrix Edge Case (Asymmetric vs Anti-Symmetric):</h4>
          <p className="text-sm mt-1">
            Students often confuse Asymmetric and Anti-Symmetric properties. 
            <br />
            - <strong>Asymmetry</strong> strictly prohibits any bidirectional pairings, meaning diagonal entries like <Inline math="(a, a)" /> can never belong to the relation.
            <br />
            - <strong>Anti-symmetry</strong> permits diagonal elements <Inline math="(a, a)" /> to exist seamlessly, but guarantees that if an off-diagonal forward link <Inline math="(a, b)" /> exists, its reverse link <Inline math="(b, a)" /> is completely blocked.
          </p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Equivalence Relations, Classes, and Partitions</h4>
        <p className="p-text">
          An <span className="font-semibold">Equivalence Relation</span> is a relation on a set <Inline math="A" /> that satisfies three properties simultaneously: <strong>Reflexive, Symmetric, and Transitive</strong>.
        </p>
        <ul className="section-list">
          <li><strong>Equivalence Class (<Inline math="[a]" />):</strong> Given an equivalence relation <Inline math="R" /> on a set <Inline math="A" />, the equivalence class of an element <Inline math="a \in A" /> is the set of all elements linked to <Inline math="a" /> via <Inline math="R" />. Formally: <Inline math="[a] = \{ x \in A \mid aRx \}" />.</li>
          <li><strong>Partition:</strong> A partition of a set <Inline math="A" /> is a grouping of <Inline math="A" /> into non-empty, mutually disjoint subsets (called blocks) such that their collective union reconstructs the entire set <Inline math="A" />.</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3">
          <p className="font-bold text-lg mb-1 font-sans text-brown-900">The Fundamental Partition Theorem:</p>
          <p className="p-text">
            Every equivalence relation on a set <Inline math="A" /> partitions <Inline math="A" /> into distinct, mutually disjoint equivalence classes. Conversely, any partition of a set <Inline math="A" /> naturally induces an equivalence relation on that set.
          </p>
          <div className="example-block mt-2">
            <p className="font-semibold mb-1 font-sans">Example: Modular Arithmetic (Congruence modulo 3 on integers)</p>
            <p className="font-mono text-sm">Relation: <Inline math="a \equiv b \pmod 3 \leftrightarrow 3" /> divides <Inline math="(a - b)" /></p>
            <p className="font-sans text-sm mt-1">This partitions the infinite set of integers (<Inline math="\mathbb{Z}" />) into exactly three disjoint equivalence classes:</p>
            <p className="font-mono text-xs mt-1">
              [0] = <Inline math="\{ \dots, -6, -3, 0, 3, 6, \dots \}" /> (Remainder 0) <br />
              [1] = <Inline math="\{ \dots, -5, -2, 1, 4, 7, \dots \}" /> (Remainder 1) <br />
              [2] = <Inline math="\{ \dots, -4, -1, 2, 5, 8, \dots \}" /> (Remainder 2)
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 3: Posets and Hasse Diagrams */}
      <section>
        <h2 className="section-heading">3. Orderings, Posets, and Hasse Diagrams</h2>
        <p className="p-text">
          Relations can establish hierarchical ordering guidelines across a set, allowing elements to be compared based on prioritization or containment.
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">Partial Orders vs Total Orders</h4>
        <ul className="section-list">
          <li><strong>Partial Order (Poset):</strong> A relation <Inline math="R" /> on a set <Inline math="A" /> is a partial ordering if it is <strong>Reflexive, Anti-symmetric, and Transitive</strong>. The set <Inline math="A" /> paired with this relation is called a Partially Ordered Set, denoted as <Inline math="(A, \le)" />. Elements <Inline math="x, y" /> are comparable if <Inline math="x \le y" /> or <Inline math="y \le x" />, otherwise they are incomparable.</li>
          <li><strong>Total Order (Linear Order):</strong> A partial order <Inline math="(A, \le)" /> is a total order if <strong>every single pair</strong> of elements in the set is comparable. Formally: <Inline math="\forall a, b \in A (a \le b \vee b \le a)" />. There are no incomparable components.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Hasse Diagram Construction Rules</h4>
        <p className="p-text">
          A Hasse diagram is a simplified visual representation of a finite partial order. It is drawn using the following optimization constraints:
        </p>
        <ol className="list-decimal pl-6 text-base space-y-1 mt-2">
          <li>If <Inline math="a \le b" />, vertex <Inline math="b" /> is placed physically higher on the plane page view than vertex <Inline math="a" />.</li>
          <li>A directional line is drawn between <Inline math="a" /> and <Inline math="b" /> if and only if <Inline math="a" /> is immediately covered by <Inline math="b" /> (meaning <Inline math="a \le b" /> and there is no intermediate element <Inline math="c" /> such that <Inline math="a \le c \le b" />).</li>
          <li>All reflexive self-loops <Inline math="(a, a)" /> are omitted since reflexivity is implied for every element.</li>
          <li>All transitive directional lines are omitted since transitivity can be inferred by tracing connected paths upward.</li>
        </ol>

        {/* Integrated Hasse Diagram Visual Figure */}
        <div className="overflow-x-auto my-6">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md text-[#1B0D00]">
            <h4 className="text-center font-bold text-xl mb-4 font-sans text-brown-900">
              Visual Figures: Poset Structural Diagrams
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center font-mono">
              <div className="bg-[#fae8d7] p-4 rounded-lg border border-[#cebb9c]">
                <h5 className="font-bold text-sm mb-4 font-sans">1. Partial Order Hasse Diagram <br /> (Divisibility on set <Inline math="\{1, 2, 3, 6\}" />)</h5>
                <div className="flex flex-col items-center justify-center space-y-2 py-4">
                  <div>[6]</div>
                  <div className="flex justify-between w-24">
                    <span>/</span>
                    <span>\</span>
                  </div>
                  <div className="flex justify-between w-28 px-2">
                    <span>[2]</span>
                    <span>[3]</span>
                  </div>
                  <div className="flex justify-between w-24">
                    <span>\</span>
                    <span>/</span>
                  </div>
                  <div>[1]</div>
                </div>
                <p className="text-xs font-sans text-gray-700 mt-2">Note: 2 and 3 are incomparable entries.</p>
              </div>

              <div className="bg-[#fae8d7] p-4 rounded-lg border border-[#cebb9c] flex flex-col justify-between">
                <div>
                  <h5 className="font-bold text-sm mb-4 font-sans">2. Total Order Chain Diagram <br /> (Standard "less than or equal to" on <Inline math="\{1, 2, 3\}" />)</h5>
                  <div className="flex flex-col items-center justify-center space-y-2 py-6">
                    <div>[3]</div>
                    <div>|</div>
                    <div>[2]</div>
                    <div>|</div>
                    <div>[1]</div>
                  </div>
                </div>
                <p className="text-xs font-sans text-gray-700 mt-2">Note: Complete connectivity; linear chain structural layout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 4: Functions */}
      <section>
        <h2 className="section-heading">4. Functions, Structural Types, and Inverses</h2>
        <p className="p-text">
          A <span className="font-semibold">Function</span> <Inline math="f" /> from set <Inline math="A" /> to set <Inline math="B" /> (denoted <Inline math="f: A \rightarrow B" />) is a special type of relation that maps each element <Inline math="a" /> in the domain set <Inline math="A" /> to **exactly one** element <Inline math="b" /> in the codomain set <Inline math="B" />. We write <Inline math="f(a) = b" />.
        </p>

        <h4 className="text-2xl font-bold mt-6 mb-4">Classifications and Structural Types of Functions</h4>
        <p className="p-text">
          Functions are classified based on how elements of the domain map to the codomain.
        </p>

        {/* Integrated Functional Mapping Diagrams */}
        <div className="overflow-x-auto my-4">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md text-[#1B0D00]">
            <h4 className="text-center font-bold text-lg mb-6 font-sans text-brown-900">
              Visual Mapping Diagrams: Classification Profiles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
              
              {/* Injection */}
              <div className="bg-[#fae8d7] p-3 rounded-lg border border-[#cebb9c]">
                <h5 className="font-bold font-sans text-sm mb-3 text-center">I. Injection (One-to-One)</h5>
                <div className="flex justify-around items-center py-2 text-center">
                  <div className="space-y-2">
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a1</p>
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a2</p>
                  </div>
                  <div className="space-y-1 font-sans font-bold">
                    <p>→</p>
                    <p>→</p>
                  </div>
                  <div className="space-y-2">
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b1</p>
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b2</p>
                    <p className="bg-gray-400 text-white px-2 py-0.5 rounded">b3</p>
                  </div>
                </div>
                <p className="text-[11px] font-sans text-gray-700 mt-2">Constraint Rule: Distinct domain elements must map to completely distinct codomain targets.</p>
              </div>

              {/* Surjection */}
              <div className="bg-[#fae8d7] p-3 rounded-lg border border-[#cebb9c]">
                <h5 className="font-bold font-sans text-sm mb-3 text-center">II. Surjection (Onto)</h5>
                <div className="flex justify-around items-center py-2 text-center">
                  <div className="space-y-2">
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a1</p>
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a2</p>
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a3</p>
                  </div>
                  <div className="space-y-1 font-sans font-bold">
                    <p>↘</p>
                    <p>→</p>
                    <p>↗</p>
                  </div>
                  <div className="space-y-4">
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b1</p>
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b2</p>
                  </div>
                </div>
                <p className="text-[11px] font-sans text-gray-700 mt-2">Constraint Rule: Every element in the codomain must be mapped to. There are no leftover codomain items.</p>
              </div>

              {/* Bijection */}
              <div className="bg-[#fae8d7] p-3 rounded-lg border border-[#cebb9c]">
                <h5 className="font-bold font-sans text-sm mb-3 text-center">III. Bijection (1-to-1 & Onto)</h5>
                <div className="flex justify-around items-center py-4 text-center">
                  <div className="space-y-2">
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a1</p>
                    <p className="bg-[#8b5e47] text-[#fff7ed] px-2 py-1 rounded">a2</p>
                  </div>
                  <div className="space-y-1 font-sans font-bold">
                    <p>→</p>
                    <p>→</p>
                  </div>
                  <div className="space-y-2">
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b1</p>
                    <p className="bg-[#7a523c] text-[#fff7ed] px-2 py-1 rounded">b2</p>
                  </div>
                </div>
                <p className="text-[11px] font-sans text-gray-700 mt-2">Constraint Rule: Perfect matching. Every element matches precisely one-to-one with no leftovers anywhere.</p>
              </div>

            </div>
          </div>
        </div>

        <ul className="section-list">
          <li><strong>Injection (One-to-One):</strong> <Inline math="f" /> is injective if distinct inputs always map to distinct outputs. Formally: <Inline math="\forall x, y \in A (f(x) = f(y) \rightarrow x = y)" />.</li>
          <li><strong>Surjection (Onto):</strong> <Inline math="f" /> is surjective if the range equals the codomain. Every element in <Inline math="B" /> has at least one preimage in <Inline math="A" />. Formally: <Inline math="\forall b \in B, \exists a \in A \text{ such that } f(a) = b" />.</li>
          <li><strong>Bijection:</strong> A function that is simultaneously injective and surjective. It represents a perfect matching layout between sets.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Composition of Functions & Algebraic Properties</h4>
        <p className="p-text">
          Given functions <Inline math="f: A \rightarrow B" /> and <Inline math="g: B \rightarrow C" />, the **Composition Function** <Inline math="(g \circ f): A \rightarrow C" /> is defined as:
          <br />
          <span className="font-mono text-lg block text-center my-2"><Inline math="(g \circ f)(a) = g(f(a))" /></span>
        </p>
        <p className="p-text font-semibold">Properties of Function Composition:</p>
        <ul className="section-list">
          <li><strong>Associativity:</strong> If <Inline math="f: A \rightarrow B" />, <Inline math="g: B \rightarrow C" />, and <Inline math="h: C \rightarrow D" />, composition is associative: <Inline math="h \circ (g \circ f) = (h \circ g) \circ f" />.</li>
          <li><strong>Non-Commutativity:</strong> Function composition is generally **not** commutative: <Inline math="g \circ f \neq f \circ g" />. Order of evaluation matters.</li>
          <li><strong>Preservation:</strong> If both <Inline math="f" /> and <Inline math="g" /> are injections, then <Inline math="(g \circ f)" /> is an injection. If both <Inline math="f" /> and <Inline math="g" /> are surjections, then <Inline math="(g \circ f)" /> is a surjection.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Inverse of a Function</h4>
        <p className="p-text">
          If <Inline math="f: A \rightarrow B" /> is a bijection, its **Inverse Function** <Inline math="f^{-1}: B \rightarrow A" /> maps each element in <Inline math="B" /> back to its unique preimage in <Inline math="A" />. Formally:
          <br />
          <span className="font-mono text-lg block text-center my-2"><Inline math="f^{-1}(b) = a \iff f(a) = b" /></span>
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border border-[#c7a669]">
          <h4 className="text-xl font-bold mb-1 text-brown-900 font-sans">⚠️ Critical Existence Constraint Rule:</h4>
          <p className="text-base">
            The inverse function <Inline math="f^{-1}" /> <strong>only exists</strong> if the original function <Inline math="f" /> is a strict <strong>Bijection</strong>. 
            <br />
            - If <Inline math="f" /> is not injective, multiple elements in <Inline math="A" /> map to the same <Inline math="b" />, making <Inline math="f^{-1}(b)" /> ambiguous (violating function definition rules).
            <br />
            - If <Inline math="f" /> is not surjective, some elements in <Inline math="B" /> are unmapped, meaning <Inline math="f^{-1}(b)" /> would be undefined for those elements.
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">Summary</h2>
        <p className="p-text">
          In this chapter, we explored set operators, subsets, power sets, and the Inclusion-Exclusion principle. We categorized relationships into reflexive, symmetric, transitive, equivalence, and partial order types, and analyzed how to visualize posets using Hasse diagrams. Finally, we studied functional properties, analyzing injective, surjective, and bijective mappings, along with function composition rules and inverse constraints.
        </p>
      </section>
    </div>
  );
}