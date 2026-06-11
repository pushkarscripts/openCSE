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
          <li><strong>Subset ($A \subseteq B$):</strong> Set $A$ is a subset of set $B$ if and only if every element that belongs to $A$ also belongs to $B$. Formally: $\forall x (x \in A \rightarrow x \in B)$.</li>
          <li><strong>Proper Subset ($A \subset B$):</strong> Set $A$ is a proper subset of $B$ if $A \subseteq B$ and $A \neq B$. This implies $B$ contains at least one element not present in $A$.</li>
          <li><strong>Power Set ($\mathcal{P}(A)$):</strong> The power set of a set $A$ is the collection of all possible subsets of $A$, including the empty set ($\emptyset$) and the set $A$ itself.</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3 font-mono text-base">
          <p className="font-bold text-lg mb-1">💡 Power Set Cardinality Theorem:</p>
          <p>If a finite set $A$ has $|A| = n$ elements, then its power set contains $|\mathcal{P}(A)| = 2^n$ elements.</p>
          <p className="text-sm mt-2 font-sans font-semibold text-gray-800">Example:</p>
          <p className="text-sm font-sans text-gray-700">Let $A = \{1, 2\}$. Then $\mathcal{P}(A) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$. Here, $|A| = 2$ and $|\mathcal{P}(A)| = 2^2 = 4$.</p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Set Operators and Mathematical Definitions</h4>
        <p className="p-text">
          Let $U$ represent the universal set containing all possible elements under discussion.
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
                <td className="border border-[#c7a669] p-3">A ∪ B</td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∨ x ∈ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Intersection</td>
                <td className="border border-[#c7a669] p-3">A ∩ B</td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∧ x ∈ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Difference</td>
                <td className="border border-[#c7a669] p-3">A − B</td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ A ∧ x ∉ B }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Complement</td>
                <td className="border border-[#c7a669] p-3">A' (or Ā)</td>
                <td className="border border-[#c7a669] p-3">{"{ x | x ∈ U ∧ x ∉ A }"}</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Symmetric Difference</td>
                <td className="border border-[#c7a669] p-3">A Δ B</td>
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
          <li><strong>Commutative Laws:</strong> $A \cup B = B \cup A$ and $A \cap B = B \cap A$.</li>
          <li><strong>Associative Laws:</strong> $(A \cup B) \cup C = A \cup (B \cup C)$ and $(A \cap B) \cap C = A \cap (B \cap C)$.</li>
          <li><strong>Distributive Laws:</strong> $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ and $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.</li>
          <li><strong>De Morgan's Laws for Sets:</strong> $(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$.</li>
          <li><strong>Absorption Laws:</strong> $A \cup (A \cap B) = A$ and $A \cap (A \cup B) = A$.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Inclusion-Exclusion Principle Formulas</h4>
        <p className="p-text">
          The Principle of Inclusion-Exclusion (PIE) computes the total cardinality of a union of multiple intersecting sets by alternately adding individual sizes and subtracting shared elements to prevent double-counting.
        </p>
        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 border border-[#c7a669] font-mono text-base space-y-4">
          <div>
            <p className="font-bold font-sans text-lg text-brown-900">1. Two-Set Formula:</p>
            <p className="mt-1">|A ∪ B| = |A| + |B| − |A ∩ B|</p>
          </div>
          <div>
            <p className="font-bold font-sans text-lg text-brown-900">2. Three-Set Formula:</p>
            <p className="mt-1">|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|</p>
          </div>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border-l-4 border-[#8b5e47]">
          <h4 className="text-xl font-bold mb-1">⚠️ Critical Edge Case (Disjoint Sets):</h4>
          <p className="text-base">
            If sets $A$ and $B$ are **mutually exclusive / disjoint**, their intersection is empty: $A \cap B = \emptyset \implies |A \cap B| = 0$. In this scenario, the Inclusion-Exclusion formula simplifies directly into the Sum Rule: $|A \cup B| = |A| + |B|$.
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 2: Relations */}
      <section>
        <h2 className="section-heading">2. Binary Relations & Properties</h2>
        <p className="p-text">
          Given two sets $A$ and $B$, the <span className="font-semibold">Cartesian Product</span> $A \times B$ is the set of all ordered pairs $(a, b)$ such that $a \in A$ and $b \in B$. A **Binary Relation** $R$ from $A$ to $B$ is structurally a subset of this product: $R \subseteq A \times B$. If $(a, b) \in R$, we write $aRb$.
        </p>

        <h4 className="text-2xl font-bold mt-6 mb-4">Classifications and Structural Types of Relations on a Set A</h4>
        <p className="p-text">
          A relation $R$ defined on a single set ($R \subseteq A \times A$) can possess specific properties across its coordinate matrix.
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
                <td className="border border-[#c7a669] p-3 font-mono">∀a ∈ A, (a, a) ∈ R</td>
                <td className="border border-[#c7a669] p-3">The relation "$\le$" on integers, since every number $a \le a$.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Irreflexive</td>
                <td className="border border-[#c7a669] p-3 font-mono">∀a ∈ A, (a, a) ∉ R</td>
                <td className="border border-[#c7a669] p-3">The relation "$<$" on integers, since a number can never be strictly less than itself.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Symmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono">∀a, b ∈ A, (a, b) ∈ R → (b, a) ∈ R</td>
                <td className="border border-[#c7a669] p-3">"Is a sibling of" relation across a human demographic set.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Asymmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono">∀a, b ∈ A, (a, b) ∈ R → (b, a) ∉ R</td>
                <td className="border border-[#c7a669] p-3">The relation "$<$". If $x &lt; y$, it is impossible for $y &lt; x$. Implies irreflexivity.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Anti-Symmetric</td>
                <td className="border border-[#c7a669] p-3 font-mono">∀a, b ∈ A, ((a, b) ∈ R ∧ (b, a) ∈ R) → a = b</td>
                <td className="border border-[#c7a669] p-3">The subset relation "$\subseteq$". If $A \subseteq B$ and $B \subseteq A$, then $A = B$.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Transitive</td>
                <td className="border border-[#c7a669] p-3 font-mono">∀a, b, c ∈ A, ((a, b) ∈ R ∧ (b, c) ∈ R) → (a, c) ∈ R</td>
                <td className="border border-[#c7a669] p-3">"Divides" relation on integers. If $x|y$ and $y|z$, then $x|z$.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border border-[#c7a669]">
          <h4 className="text-xl font-bold mb-1 text-red-800">💡 Critical Matrix Edge Case (Asymmetric vs Anti-Symmetric):</h4>
          <p className="text-sm mt-1">
            Students often confuse Asymmetric and Anti-Symmetric properties. 
            <br />
            - **Asymmetry** strictly prohibits any bidirectional pairings, meaning diagonal entries like $(a, a)$ can never belong to the relation.
            <br />
            - **Anti-symmetry** permits diagonal elements $(a, a)$ to exist seamlessly, but guarantees that if an off-diagonal forward link $(a, b)$ exists, its reverse link $(b, a)$ is completely blocked.
          </p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Equivalence Relations, Classes, and Partitions</h4>
        <p className="p-text">
          An <span className="font-semibold">Equivalence Relation</span> is a relation on a set $A$ that satisfies three properties simultaneously: **Reflexive, Symmetric, and Transitive**.
        </p>
        <ul className="section-list">
          <li><strong>Equivalence Class ($[a]$):</strong> Given an equivalence relation $R$ on a set $A$, the equivalence class of an element $a \in A$ is the set of all elements linked to $a$ via $R$. Formally: $[a] = \{ x \in A \mid aRx \}$.</li>
          <li><strong>Partition:</strong> A partition of a set $A$ is a grouping of $A$ into non-empty, mutually disjoint subsets (called blocks) such that their collective union reconstructs the entire set $A$.</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-3">
          <p className="font-bold text-lg mb-1 font-sans text-brown-900">The Fundamental Partition Theorem:</p>
          <p className="p-text">
            Every equivalence relation on a set $A$ partitions $A$ into distinct, mutually disjoint equivalence classes. Conversely, any partition of a set $A$ naturally induces an equivalence relation on that set.
          </p>
          <div className="example-block mt-2">
            <p className="font-semibold mb-1 font-sans">Example: Modular Arithmetic (Congruence modulo 3 on integers)</p>
            <p className="font-mono text-sm">Relation: a ≡ b (mod 3) ↔ 3 divides (a − b)</p>
            <p className="font-sans text-sm mt-1">This partitions the infinite set of integers ($\mathbb{Z}$) into exactly three disjoint equivalence classes:</p>
            <p className="font-mono text-xs mt-1">
              [0] = {'{ ..., -6, -3, 0, 3, 6, ... }'} (Remainder 0) <br />
              [1] = {'{ ..., -5, -2, 1, 4, 7, ... }'} (Remainder 1) <br />
              [2] = {'{ ..., -4, -1, 2, 5, 8, ... }'} (Remainder 2)
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
          <li><strong>Partial Order (Poset):</strong> A relation $R$ on a set $A$ is a partial ordering if it is **Reflexive, Anti-symmetric, and Transitive**. The set $A$ paired with this relation is called a Partially Ordered Set, denoted as $(A, \le)$. Elements $x, y$ are comparable if $x \le y$ or $y \le x$, otherwise they are incomparable.</li>
          <li><strong>Total Order (Linear Order):</strong> A partial order $(A, \le)$ is a total order if **every single pair** of elements in the set is comparable. Formally: $\forall a, b \in A (a \le b \vee b \le a)$. There are no incomparable components.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Hasse Diagram Construction Rules</h4>
        <p className="p-text">
          A Hasse diagram is a simplified visual representation of a finite partial order. It is drawn using the following optimization constraints:
        </p>
        <ol className="list-decimal pl-6 text-base space-y-1 mt-2">
          <li>If $a \le b$, vertex $b$ is placed physically higher on the plane page view than vertex $a$.</li>
          <li>A directional line is drawn between $a$ and $b$ if and only if $a$ is immediately covered by $b$ (meaning $a \le b$ and there is no intermediate element $c$ such that $a \le c \le b$).</li>
          <li>All reflexive self-loops $(a, a)$ are omitted since reflexivity is implied for every element.</li>
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
                <h5 className="font-bold text-sm mb-4 font-sans">1. Partial Order Hasse Diagram <br /> (Divisibility on set {"{1, 2, 3, 6}"})</h5>
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
                  <h5 className="font-bold text-sm mb-4 font-sans">2. Total Order Chain Diagram <br /> (Standard "less than or equal to" on {"{1, 2, 3}"})</h5>
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
          A <span className="font-semibold">Function</span> $f$ from set $A$ to set $B$ (denoted $f: A \rightarrow B$) is a special type of relation that maps each element $a$ in the domain set $A$ to **exactly one** element $b$ in the codomain set $B$. We write $f(a) = b$.
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
          <li><strong>Injection (One-to-One):</strong> $f$ is injective if distinct inputs always map to distinct outputs. Formally: $\forall x, y \in A (f(x) = f(y) \rightarrow x = y)$.</li>
          <li><strong>Surjection (Onto):</strong> $f$ is surjective if the range equals the codomain. Every element in $B$ has at least one preimage in $A$. Formally: $\forall b \in B, \exists a \in A \text{ such that } f(a) = b$.</li>
          <li><strong>Bijection:</strong> A function that is simultaneously injective and surjective. It represents a perfect matching layout between sets.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Composition of Functions & Algebraic Properties</h4>
        <p className="p-text">
          Given functions $f: A \rightarrow B$ and $g: B \rightarrow C$, the **Composition Function** $(g \circ f): A \rightarrow C$ is defined as:
          <br />
          <span className="font-mono text-lg block text-center my-2">(g \circ f)(a) = g(f(a))</span>
        </p>
        <p className="p-text font-semibold">Properties of Function Composition:</p>
        <ul className="section-list">
          <li><strong>Associativity:</strong> If $f: A \rightarrow B$, $g: B \rightarrow C$, and $h: C \rightarrow D$, composition is associative: $h \circ (g \circ f) = (h \circ g) \circ f$.</li>
          <li><strong>Non-Commutativity:</strong> Function composition is generally **not** commutative: $g \circ f \neq f \circ g$. Order of evaluation matters.</li>
          <li><strong>Preservation:</strong> If both $f$ and $g$ are injections, then $(g \circ f)$ is an injection. If both $f$ and $g$ are surjections, then $(g \circ f)$ is a surjection.</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Inverse of a Function</h4>
        <p className="p-text">
          If $f: A \rightarrow B$ is a bijection, its **Inverse Function** $f^{-1}: B \rightarrow A$ maps each element in $B$ back to its unique preimage in $A$. Formally:
          <br />
          <span className="font-mono text-lg block text-center my-2">f^{-1}(b) = a \iff f(a) = b</span>
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border border-[#c7a669]">
          <h4 className="text-xl font-bold mb-1 text-brown-900 font-sans">⚠️ Critical Existence Constraint Rule:</h4>
          <p className="text-base">
            The inverse function $f^{-1}$ **only exists** if the original function $f$ is a strict **Bijection**. 
            <br />
            - If $f$ is not injective, multiple elements in $A$ map to the same $b$, making $f^{-1}(b)$ ambiguous (violating function definition rules).
            <br />
            - If $f$ is not surjective, some elements in $B$ are unmapped, meaning $f^{-1}(b)$ would be undefined for those elements.
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