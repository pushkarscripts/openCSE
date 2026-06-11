"use client"
import React from "react"
import { Inline, Block } from "../../../components/Math"

export function Ch0Content() {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to <span className="font-semibold">Discrete Mathematics</span> — a core foundational syllabus designed to analyze mathematical elements that take on distinct, separated values rather than continuous intervals. This course acts as the absolute structural pillar for algorithm layout complexity bounds, microprocessor logic paths, cryptographic keyspaces, and formal grammar verification.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Chapter 1: <span className="section-subheading">Mathematical Logic and Proofs</span>
        </h3>
        <p className="p-text text-sm italic text-amber-200/70 mb-2">
          Establishes the un-ambiguous truth checking models used to construct flawless mathematical arguments.
        </p>
        <ul className="section-list text-xs space-y-1">
          <li>
            <span className="font-semibold text-amber-100">Propositional Logic Syntax:</span> Declarative assertions, complete primitive connectives (<Inline math="\neg" />, <Inline math="\wedge" />, <Inline math="\vee" />, <Inline math="\oplus" />, <Inline math="\rightarrow" />, <Inline math="\leftrightarrow" />), functional truth matrices, and invariant edge exceptions like vacuous truth states.
          </li>
          <li>
            <span className="font-semibold text-amber-100">Algebraic Equivalence Laws:</span> Minimizing complex logical chaining expressions using Idempotent, Absorption, Domination, Distributive, and De Morgan algebraic invariants.
          </li>
          <li>
            <span className="font-semibold text-amber-100">Predicate Scoping:</span> Bounding variable properties using Universal (<Inline math="\forall" />) and Existential (<Inline math="\exists" />) operators, and the non-commutative sequence limitations of nested quantifier scopes.
          </li>
          <li>
            <span className="font-semibold text-amber-100">Formal Proof Methodologies:</span> Structural proofs via Direct derivation (<Inline math="p \rightarrow q" />), Invariant Contraposition (<Inline math="\neg q \rightarrow \neg p" />), Elimination by Contradiction (<Inline math="r \wedge \neg r" />), and complete Mathematical Induction step mappings.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Chapter 2: <span className="section-subheading">Set Theory, Relations, and Functions</span>
        </h3>
        <p className="p-text text-sm italic text-amber-200/70 mb-2">
          Defines the core groupings, ordered pairings, and deterministic transformations of discrete variables.
        </p>
        <ul className="section-list text-xs space-y-1">
          <li>
            <strong>Set Topology Invariants:</strong> Subsets (<Inline math="A \subseteq B" />), Power sets (<Inline math="\mathcal{P}(A)" />) with cardinality metrics (<Inline math="2^n" />), operations (<Inline math="\cup, \cap, -, \Delta" />), and algebraic identities.
          </li>
          <li>
            <strong>Binary Coordinate Relations:</strong> Cartesian products (<Inline math="A \times B" />), relational profiles, and exact matrix classifications (Reflexive, Irreflexive, Symmetric, Asymmetric, Anti-Symmetric, Transitive).
          </li>
          <li>
            <strong>Partitions & Equivalence Domains:</strong> Constructing equivalence relations, parsing element classes (<Inline math="[a]" />), and structural block formatting using the Fundamental Partition Theorem.
          </li>
          <li>
            <strong>Posets & Order Systems:</strong> Partial orderings (<Inline math="(A, \le)" />), Linear Total orders, immediate covering parameters, and structural visual formatting of Hasse Diagrams.
          </li>
          <li>
            <strong>Functional Mappings:</strong> Functional boundary setups (<Inline math="f: A \rightarrow B" />), structural classification types (Injective, Surjective, Bijective matchings), function composition associativity, non-commutativity laws, and inverse step criteria (<Inline math="f^{-1}" />).
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Chapter 3: <span className="section-subheading">Combinatorics, Number Theory, and Recurrence Relations</span>
        </h3>
        <p className="p-text text-sm italic text-amber-200/70 mb-2">
          Measures layout configuration paths, numerical divisibility bounds, and sequential recursive equations.
        </p>
        <ul className="section-list text-xs space-y-1">
          <li>
            <strong>Combinatorial Counting Invariants:</strong> Fundamental Sum and Product rules, the Principle of Inclusion-Exclusion for discrete probabilities, and worst-case bounds under the Generalized Pigeonhole Principle.
          </li>
          <li>
            <strong>Number Theory Systems:</strong> Greatest Common Divisors (<Inline math="\text{gcd}" />), Least Common Multiples (<Inline math="\text{lcm}" />), Bézout Coefficients derived from the Extended Euclidean Algorithm, solvability limits of Linear Diophantine Equations (<Inline math="ax + by = c" />), and unique modular roots via the Chinese Remainder Theorem.
          </li>
          <li>
            <strong>Recurrence System Classifications:</strong> Formulating relational models from applications, linear homogeneous sequences, and linear non-homogeneous systems containing forcing factors (<Inline math="F(n)" />).
          </li>
          <li>
            <strong>Analytical Resolution Tracks:</strong> Resolving boundary steps via Repeated Substitution iterations, polynomial Characteristic Root extractions (Distinct vs. Multiplicity root chains), and infinite power series transformations using formal Generating Functions paired with the Extended Binomial Theorem.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Chapter 4: <span className="section-subheading">Graph Theory</span>
        </h3>
        <p className="p-text text-sm italic text-amber-200/70 mb-2">
          Models topological network connections, traversal routing optimization, and spatial space partitioning.
        </p>
        <ul className="section-list text-xs space-y-1">
          <li>
            <strong>Graph Topologies:</strong> Vertices, edges, Order (<Inline math="|V|" />) and Size (<Inline math="|E|" />) parameters, localized degree behaviors, and the invariant constraints of the Handshaking Lemma.
          </li>
          <li>
            <strong>Graph Operations & Sub-units:</strong> Subgraphs, Subtrees, structural Graph Joins (<Inline math="G_1 + G_2" />), and spatial Cartesian Products (<Inline math="G_1 \times G_2" />).
          </li>
          <li>
            <strong>Computational Layout Matrices:</strong> Square Adjacency Matrices (<Inline math="A = A^T" />), non-square Incidence Matrices (<Inline math="M" />), and memory-optimized dynamic Adjacency Lists.
          </li>
          <li>
            <strong>Network Traversal Paths:</strong> Differentiating Walks, Trails, Paths, Circuits, and Cycles. Historic roots from Leonhard Euler's Königsberg Bridge problem.
          </li>
          <li>
            <strong>Routing & Traversal Optimization:</strong> Parity guidelines for Eulerian paths/circuits, the Chinese Postman Problem, Dirac and Ore boundaries for Hamiltonian circuits, and NP-hard constraints of the Traveling Salesperson Problem.
          </li>
          <li>
            <strong>Isomorphism & Surface Embedding:</strong> Mapping bijections (<Inline math="G_1 \simeq G_2" />) using structural invariant tests, topological Planar Graphs, Euler's Region Formula (<Inline math="V - E + R = 2" />), and Kuratowski's forbidden non-planar subgraphs (<Inline math="K_5" />, <Inline math="K_{3,3}" />).
          </li>
          <li>
            <strong>Coloring & Partitioning:</strong> Chromatic numbers (<Inline math="\chi(G)" />), planar graph mapping bounds under the Four-Color Theorem, and edge set partitioning into matching perfect subsets via 1-Factorization and 2-Factorization rules.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Chapter 5: <span className="section-subheading">Algebraic Structures</span>
        </h3>
        <p className="p-text text-sm italic text-amber-200/70 mb-2">
          Analyzes abstract axiomatic systems governing single and dual operational numeric domains.
        </p>
        <ul className="section-list text-xs space-y-1">
          <li>
            <strong>Binary Rule Axioms:</strong> Core operational guidelines spanning Closure bounds, Associativity grouping, Identity retention (<Inline math="e" />), and unique Inverse reflections (<Inline math="a^{-1}" />).
          </li>
          <li>
            <strong>Single Operation Hierarchies:</strong> System classifications tracking from basic Magmas and Semigroups to Monoids, full algebraic Groups, and commutative Abelian systems.
          </li>
          <li>
            <strong>Modular Groups:</strong> Finite additive groups (<Inline math="\mathbb{Z}_n" />, <Inline math="+_n" />), coprime multiplicative groups (<Inline math="U(n)" />, <Inline math="\cdot_n" />), and crypto-safe prime order fields (<Inline math="\mathbb{Z}_p^*" />).
          </li>
          <li>
            <strong>Sub-domains & Generators:</strong> Subgroup validation criteria, generative tracking elements of Cyclic Groups (<Inline math="G = \langle a \rangle" />), left/right coset configurations, and index scaling based on Lagrange's Subgroup Order Theorem.
          </li>
          <li>
            <strong>Dual Operation Rings:</strong> System behaviors under two concurrent operators (<Inline math="+" />, <Inline math="\cdot" />) satisfying Ring axioms, Commutative rings, Rings with Unity, Zero Divisor hazards, and cancellation-safe fields of Integral Domains.
          </li>
          <li>
            <strong>Invertible Fields:</strong> Global completeness criteria of algebraic Fields, finite Galois Field limits (<Inline math="GF(p)" /> or <Inline math="\mathbb{F}_p" />), and their performance configuration rules inside numeric engineering applications.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By mastering these 5 discrete structural chapters, you will possess the complete analytical toolkit required to formally evaluate algorithmic complexities, prove computing safety properties, layout database schemas, and optimize hardware gate configurations.
      </p>
    </div>
  );
}