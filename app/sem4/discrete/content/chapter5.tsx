import React from "react";

export function Ch5Content() {
  return (
    <div className="course-content">
      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">Algebraic Structures</span> form an abstract mathematical framework concerned with sets of elements paired with one or more operational rules satisfying explicit axioms. This branch of mathematics provides the foundational underpinnings for public-key cryptography (such as RSA and Elliptic Curve Cryptography), error-correcting codes, hashing protocols, and formal state machine definitions.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. Binary Operations & Properties */}
      <section>
        <h3 className="section-heading">
          1. Binary Operations & Mathematical Properties
        </h3>
        <p className="p-text">
          Let $S$ be a non-empty set. A **Binary Operation** $*$ on $S$ is a mapping or function that assigns to each ordered pair of elements in $S$ a unique element also belonging to $S$. Formally, $*: S \times S \rightarrow S$.
        </p>

        <h4 className="text-xl font-bold mt-4 mb-2 text-amber-200 font-sans">Core Operational Properties:</h4>
        <ul className="section-list">
          <li>
            <strong>Closure Property:</strong> The operation is closed if for all elements $a, b \in S$, the output $(a * b) \in S$.
          </li>
          <li>
            <strong>Associative Property:</strong> For all $a, b, c \in S$, the ordering of evaluation can be grouped arbitrarily: $(a * b) * c = a * (b * c)$.
          </li>
          <li>
            <strong>Commutative Property:</strong> For all $a, b \in S$, the relative order of the parameters can be swapped: $a * b = b * a$.
          </li>
          <li>
            <strong>Identity Element ($e$):</strong> An element $e \in S$ is an identity if for all $a \in S$, the operation yields the original element unchanged: $a * e = e * a = a$.
          </li>
          <li>
            <strong>Inverse Element ($a^{-1}$):</strong> For every element $a \in S$, there exists an inverse element $a^{-1} \in S$ such that executing the operation yields the identity element: $a * a^{-1} = a^{-1} * a = e$.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Algebraic Hierarchy */}
      <section>
        <h3 className="section-heading">
          2. The Algebraic Hierarchy: From Groupoids to Abelian Groups
        </h3>
        <p className="p-text">
          Algebraic structures are classified into explicit hierarchies depending on which subset of the foundational axioms their operations satisfy:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Structure</th>
                <th className="border border-[#c7a669] p-3">Required Axioms & Constraints</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Groupoid (Magma)</td>
                <td className="border border-[#c7a669] p-3 font-mono text-sm">Closure</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Semigroup</td>
                <td className="border border-[#c7a669] p-3 font-mono text-sm">Closure + Associativity</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Monoid</td>
                <td className="border border-[#c7a669] p-3 font-mono text-sm">Closure + Associativity + Identity Element</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Group</td>
                <td className="border border-[#c7a669] p-3 font-mono text-sm">Closure + Associativity + Identity + Inverse Element</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Abelian Group</td>
                <td className="border border-[#c7a669] p-3 font-mono text-sm">Closure + Associativity + Identity + Inverse + Commutativity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Modular Sets & Prime Fields */}
      <section>
        <h3 className="section-heading">
          3. Concrete Groups over Modular Systems & Prime Order Edge Cases
        </h3>
        <p className="p-text">
          Modular arithmetic systems provide classical, bounded algebraic structures that form the core of modern numeric cryptography.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Additive Modular Group $(\mathbb{Z}_n, +_n)$</h4>
            <p className="text-sm">
              The set of remainders $\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}$ under addition modulo $n$ forms a valid **Abelian Group**.
              <br />
              - **Identity:** $0$.
              <br />
              - **Inverse of $a$:** $(n - a) \pmod n$.
              <br />
              This group maintains closure and commutativity for any positive integer value of $n$.
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Multiplicative Modular Group $(U(n), \cdot_n)$</h4>
            <p className="text-sm">
              The full set $\mathbb{Z}_n$ under standard multiplication modulo $n$ does **not** form a group because $0$ has no multiplicative inverse. Instead, we define the reduced set:
              <br />
              <span className="font-mono block my-1 text-center bg-[#462d20] p-1 rounded text-amber-200 text-xs">
                U(n) = \{ a \in \mathbb{Z}_n \mid \text{gcd}(a, n) = 1 \}
              </span>
              $U(n)$ contains only elements coprime to $n$. Under multiplication modulo $n$, it forms a strict Abelian Group.
            </p>
          </div>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 border-l-4 border-[#8b5e47] my-4">
          <h4 className="text-xl font-bold mb-1 text-red-800">⚠️ Critical Prime Element Constraint Rule:</h4>
          <p className="text-sm">
            If the modular boundary parameter $p$ is a strict **Prime Number**, then all non-zero elements are guaranteed to be coprime to $p$. Consequently, the multiplicative set reduces to $\mathbb{Z}_p^* = \{1, 2, 3, \dots, p-1\}$. Under multiplication modulo $p$, this set contains precisely $p-1$ elements and satisfies all group parameters.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. Subgroups & Cyclic Groups */}
      <section>
        <h3 className="section-heading">
          4. Subgroups, Cyclic Frameworks, and Generative Elements
        </h3>
        <p className="p-text">
          A non-empty subset $H$ of a group $(G, *)$ is classified as a **Subgroup** ($H \le G$) if $H$ forms a valid group under the identical operation rule $*$.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2 font-sans">
            The Multi-Step Subgroup Criteria Theorem
          </div>
          <p className="p-text text-sm mb-2">
            A subset $H \subseteq G$ is a subgroup if and only if it satisfies three structural tests cleanly:
          </p>
          <ol className="list-decimal pl-6 text-xs space-y-1 text-amber-100 font-mono">
            <li>Identity check: The identity element $e$ of the main group belongs to $H$ ($e \in H$).</li>
            <li>Closure under the operation: For all $a, b \in H \implies (a * b) \in H$.</li>
            <li>Closure under inverses: For all $a \in H \implies a^{-1} \in H$.</li>
          </ol>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Cyclic Groups & Generators</h4>
        <p className="p-text">
          A group $G$ is called a **Cyclic Group** if every single element within the group can be generated by repeatedly applying the operational rule to a single chosen base element $a \in G$. The element $a$ is designated as the **Generator** of the group, denoted as $G = \langle a \rangle$.
        </p>
        <ul className="section-list">
          <li>In multiplicative structures, this corresponds to power steps: $\langle a \rangle = \{a^n \mid n \in \mathbb{Z}\}$.</li>
          <li>In additive structures, this corresponds to scalar steps: $\langle a \rangle = \{n \cdot a \mid n \in \mathbb{Z}\}$.</li>
        </ul>
        <p className="p-text mt-3">
          <strong>Theorem on Cyclic Commutativity:</strong> Every cyclic group is guaranteed to be an Abelian group, but an Abelian group is not necessarily cyclic (e.g., the Klein 4-Group).
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 5. Cosets & Lagrange's Theorem */}
      <section>
        <h3 className="section-heading">
          5. Cosets & Lagrange's Structural Partition Theorem
        </h3>
        <p className="p-text">
          Let $H$ be a static subgroup of group $G$, and let $a$ be an arbitrary element belonging to $G$.
        </p>
        <ul className="section-list">
          <li><strong>Left Coset of $H$:</strong> The set $aH = \{a * h \mid h \in H\}$.</li>
          <li><strong>Right Coset of $H$:</strong> The set $Ha = \{h * a \mid h \in H\}$.</li>
        </ul>
        <p className="p-text mt-2">
          Cosets partition a group into disjoint paths of uniform sizing layout. This spatial uniformity leads directly to one of the most critical structural bounds in abstract algebra:
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm font-mono">
          <div className="font-sans font-semibold text-xl mb-2 text-center">
            Lagrange's Subgroup Order Theorem
          </div>
          <p className="font-sans text-center text-sm mb-3">
            If $G$ is a finite group and $H$ is a valid subgroup of $G$, then the order (cardinality) of $H$ must divide the order of $G$ perfectly:
          </p>
          <div className="text-center text-2xl my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
            |H| &nbsp;\Big|&nbsp; |G|
          </div>
          <div className="font-sans text-xs mt-3 border-t border-[#c7a669] pt-3 text-amber-100">
            <p><strong>🚨 Crucial Deductions and Edge Case Realities:</strong></p>
            <p className="mt-1">1. The ratio $[G : H] = |G| / |H|$ counts the total number of unique, distinct cosets of $H$ in $G$. This value is called the <em>Index of $H$</em>.</p>
            <p className="mt-1">2. **Prime Group Invariant:** Any group containing a strictly **prime order** $|G| = p$ has no non-trivial subgroups. Its only possible subgroups have orders 1 or $p$. Thus, every group of prime order is guaranteed to be a cyclic group generated by any non-identity element.</p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 6. Rings, Commutative Rings & Integral Domains */}
      <section>
        <h3 className="section-heading">
          6. Dual Operation Systems: Rings, Commutative Rings, and Integral Domains
        </h3>
        <p className="p-text">
          When an abstract system incorporates **two** operational rules—traditionally designated as Addition ($+$) and Multiplication ($\cdot$)—it moves beyond group structures into standard dual ring systems.
        </p>

        <p className="p-text mt-3">
          A **Ring** $(R, +, \cdot)$ is an ordered triple satisfying three integrated modular stages of axioms:
        </p>
        <ol className="list-decimal pl-6 text-sm space-y-1 font-sans mt-2">
          <li>$(R, +)$ forms an **Abelian Group** (satisfying Closure, Associativity, Identity=$0$, Inverses=$-a$, and Commutativity).</li>
          <li>$(R, \cdot)$ forms a basic **Semigroup** (satisfying Closure and Associativity).</li>
          <li>**Distributive Properties:** Multiplication distributes over addition across all element pathways: $a \cdot (b + r) = (a \cdot b) + (a \cdot r)$ and $(b + r) \cdot a = (b \cdot a) + (r \cdot a)$.</li>
        </ol>

        <h4 className="text-xl font-bold mt-6 mb-2 text-amber-200 font-sans">Variations of Ring Structures:</h4>
        <ul className="section-list">
          <li>
            <strong>Commutative Ring:</strong> A ring where multiplication is commutative: $a \cdot b = b \cdot a$.
          </li>
          <li>
            <strong>Ring with Unity:</strong> A ring that contains a multiplicative identity element (denoted as $1$) such that $a \cdot 1 = 1 \cdot a = a$.
          </li>
          <li>
            <strong>Zero Divisors:</strong> Non-zero elements $a, b \in R$ such that their multiplication evaluates to zero: $a \cdot b = 0$ while $a \neq 0$ and $b \neq 0$. For instance, in $\mathbb{Z}_6$, elements $2$ and $3$ are zero divisors because $2 \cdot 3 = 6 \equiv 0 \pmod 6$.
          </li>
          <li>
            <strong>Integral Domain:</strong> A commutative ring with unity that contains **absolutely no zero divisors**. This allows for the standard algebraic cancellation law: if $a \cdot b = a \cdot c$ and $a \neq 0$, then $b = c$.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 7. Fields */}
      <section>
        <h3 className="section-heading">
          7. Fields & Global Algebraic Completeness
        </h3>
        <p className="p-text">
          A **Field** $(F, +, \cdot)$ represents the highest tier of structural completeness for continuous and discrete numerical systems. It is an integral domain where every single non-zero element must possess a unique multiplicative inverse.
        </p>

        <div className="bg-[#fccc7e] text-[#1B0D00] border-2 border-[#1B0D00] rounded-xl p-5 my-6 font-sans">
          <h4 className="text-xl font-bold mb-2">The Definitive Field Requirements:</h4>
          <p className="text-sm mb-2">An algebraic structure is a field if and only if it satisfies three integrated requirements:</p>
          <ul className="list-disc pl-6 text-sm space-y-1 font-semibold text-amber-950">
            <li>$(F, +)$ forms a completely cooperative Abelian Group with additive identity $0$.</li>
            <li>$(F \setminus \{0\}, \cdot)$ forms an independent, clean Abelian Group with multiplicative identity $1$.</li>
            <li>Multiplication distributes over addition.</li>
          </ul>
          <p className="text-xs mt-3 italic text-amber-900 border-t border-[#1B0D00] pt-2">
            Standard Examples: The sets of Rational Numbers ($\mathbb{Q}$), Real Numbers ($\mathbb{R}$), and Complex Numbers ($\mathbb{C}$) are fields. The set of Integers ($\mathbb{Z}$) is **not** a field, because integers like 2 lack an integer multiplicative inverse ($1/2 \notin \mathbb{Z}$); $\mathbb{Z}$ is merely an integral domain.
          </p>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-2">Finite Fields (Galois Fields, $GF(p)$)</h4>
        <p className="p-text">
          In computational environments, algorithms rely on bounded finite fields. A finite field can be constructed out of modular integer sets if and only if the modulus is a strict **Prime Number $p$**. The structure $(\mathbb{Z}_p, +, \cdot)$ forms a strict finite field, denoted as $GF(p)$ or $\mathbb{F}_p$.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>
        <p className="p-text">
          In this chapter, we analyzed abstract algebraic structures across a progression of structural constraints. We tracked the expansion of operational rules from single-operation structures (including semi-groups, monoids, groups, and commutative Abelian groups) up to modular integer settings. We explored subgroups, generators of cyclic sets, and geometric scaling using Lagrange's theorem. Finally, we studied dual-operation systems, tracing the progression from rings to cancellation-safe integral domains and globally invertible fields.
        </p>
      </section>
    </div>
  );
}