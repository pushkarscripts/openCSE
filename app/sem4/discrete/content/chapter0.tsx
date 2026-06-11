export function Ch0Content() {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to <span className="font-semibold">Discrete Mathematics</span> —
        a foundational course designed to explore mathematical structures that are fundamentally discrete rather than continuous. This course serves as the backbone for algorithm design, computer architecture, cryptography, and formal systems.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Mathematical Logic and Proofs</span>
        </h3>
        <ul className="section-list">
          <li>Propositional Logic, connectives, truth tables, and logical equivalences</li>
          <li>Predicate Logic, universal and existential quantifiers, and rules of inference</li>
          <li>Proof Techniques: direct proofs, contradiction, contraposition, and mathematical induction</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Set Theory, Relations, and Functions</span>
        </h3>
        <ul className="section-list">
          <li>Set fundamentals, operations, identities, and Venn diagrams</li>
          <li>Relations, properties (reflexive, symmetric, transitive), and equivalence classes</li>
          <li>Partial orderings, posets, and Hasse diagrams</li>
          <li>Functions: injective, surjective, bijective, composition, and inverse functions</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Combinatorics and Counting</span>
        </h3>
        <ul className="section-list">
          <li>Basic counting principles: sum rule and product rule</li>
          <li>Inclusion-Exclusion Principle and the Pigeonhole Principle</li>
          <li>Permutations and combinations with or without repetitions</li>
          <li>Introduction to generating formulas and configurations</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Graph Theory</span>
        </h3>
        <ul className="section-list">
          <li>Graph fundamentals: vertices, edges, degree, directed vs undirected graphs</li>
          <li>Paths, cycles, connectivity, and connected components</li>
          <li>Trees, spanning trees, Eulerian graphs, and Hamiltonian circuits</li>
          <li>Planar graphs, Euler's formula, and basic graph coloring principles</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">Recurrence Relations</span>
        </h3>
        <ul className="section-list">
          <li>Formulating recurrence relations from real-world and structural problems</li>
          <li>Solving linear homogeneous recurrence relations with constant coefficients</li>
          <li>Non-homogeneous recurrence relations and an overview of generating functions</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module VI: <span className="section-subheading">Boolean Algebra and Automata</span>
        </h3>
        <ul className="section-list">
          <li>Boolean functions, algebraic properties, and simplification techniques</li>
          <li>Karnaugh Maps (K-maps) and logical gate minimizations</li>
          <li>Formal languages, grammars, and an introduction to Finite State Automata</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will possess a rigorous mathematical toolkit capable of analyzing discrete computations, modeling graph networks, minimizing hardware architectures, and formally proving engineering properties.
      </p>
    </div>
  );
}