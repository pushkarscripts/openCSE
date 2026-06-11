export function Ch1Content() {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Mathematical Logic</span> provides the formal, unambiguous framework required to construct valid mathematical arguments, design digital hardware, and verify software systems. It eliminates conversational ambiguities by mapping statements to absolute truth values.
      </p>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 1: Propositional Logic */}
      <section>
        <h2 className="section-heading">1. Propositional Logic & Connectives</h2>
        <p className="p-text">
          A <span className="font-semibold">Proposition</span> is a declarative statement that is either strictly True (T) or False (F), but never both simultaneously, ambiguous, or dependent on subjective interpretation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-xl font-bold mb-2">Valid Propositions</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"7 is a prime number." (True)</li>
              <li>"The earth is perfectly flat." (False)</li>
              <li>"2 + 2 = 5." (False)</li>
            </ul>
          </div>
          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-xl font-bold mb-2">Invalid Statements</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"Bring me a glass of water." (Command/Imperative)</li>
              <li>"Is the exam tomorrow?" (Question/Interrogative)</li>
              <li>"x + 5 = 9." (Open statement; truth depends on x)</li>
            </ul>
          </div>
        </div>

        <h4 className="text-2xl font-bold mt-6 mb-4">Core Logical Operators & Complete Truth Tables</h4>
        <p className="p-text">
          Compound propositions are formed by modifying or joining primitive propositions using logical operators.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Operation</th>
                <th className="border border-[#c7a669] p-3 text-left">Symbol</th>
                <th className="border border-[#c7a669] p-3 text-left">Core Evaluative Rule</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Negation</td>
                <td className="border border-[#c7a669] p-3">¬p</td>
                <td className="border border-[#c7a669] p-3">Flips the truth value. ¬T = F, ¬F = T.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Conjunction (AND)</td>
                <td className="border border-[#c7a669] p-3">p ∧ q</td>
                <td className="border border-[#c7a669] p-3">True **only** if both p and q are true.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Disjunction (OR)</td>
                <td className="border border-[#c7a669] p-3">p ∨ q</td>
                <td className="border border-[#c7a669] p-3">False **only** if both p and q are false. Inclusive OR.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Exclusive OR (XOR)</td>
                <td className="border border-[#c7a669] p-3">p ⊕ q</td>
                <td className="border border-[#c7a669] p-3">True if p and q have **different** truth values.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Conditional (Implication)</td>
                <td className="border border-[#c7a669] p-3">p → q</td>
                <td className="border border-[#c7a669] p-3">False **only** when a True premise leads to a False conclusion.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Biconditional (IFF)</td>
                <td className="border border-[#c7a669] p-3">p ↔ q</td>
                <td className="border border-[#c7a669] p-3">True **only** when p and q share identical truth values.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-[#c7a669] text-center">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-2">p</th>
                <th className="border border-[#c7a669] p-2">q</th>
                <th className="border border-[#c7a669] p-2">¬p</th>
                <th className="border border-[#c7a669] p-2">p ∧ q</th>
                <th className="border border-[#c7a669] p-2">p ∨ q</th>
                <th className="border border-[#c7a669] p-2">p ⊕ q</th>
                <th className="border border-[#c7a669] p-2">p → q</th>
                <th className="border border-[#c7a669] p-2">p ↔ q</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono">
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2 text-green-700 font-bold">T</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 text-green-700 font-bold">T</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 text-green-700 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 text-red-700 font-bold">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">F</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 text-green-700 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 text-blue-700 font-bold">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">F</td>
                <td className="border border-[#c7a669] p-2 font-bold">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2 text-red-700 font-bold">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2 text-blue-700 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 text-green-700 font-bold">T</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border-l-4 border-[#8b5e47]">
          <h4 className="text-xl font-bold mb-1">⚠️ Critical Edge Cases of Conditional Operators:</h4>
          <p className="text-base">
            1. **Vacuous Truth:** The implication $p \rightarrow q$ is automatically **True** whenever the premise $p$ is False (Rows 3 and 4). For example: <i>"If 2 + 2 = 5, then I am the King of France"</i> evaluates as a completely valid, true mathematical implication.
            <br />
            2. **Directional Dependency:** $p \rightarrow q$ is **not** logically equivalent to $q \rightarrow p$. Order of operators matters significantly.
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 2: Conversions of Implication */}
      <section>
        <h2 className="section-heading">2. Conversions of an Implication</h2>
        <p className="p-text">
          Given a base conditional statement <span className="font-semibold">p → q</span>, three related variations can be derived:
        </p>

        <ul className="section-list">
          <li><strong>Converse:</strong> $q \rightarrow p$. (Swapping the premise and conclusion).</li>
          <li><strong>Inverse:</strong> $\neg p \rightarrow \neg q$. (Negating both the premise and conclusion).</li>
          <li><strong>Contrapositive:</strong> $\neg q \rightarrow \neg p$. (Negating and swapping both components).</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] p-5 rounded-lg border border-[#c7a669] mt-4 font-mono text-base">
          <p className="font-bold text-lg mb-2">Equivalence Pairings:</p>
          <p className="text-green-800 font-semibold">1. Implication ≡ Contrapositive: (p → q) ≡ (¬q → ¬p)</p>
          <p className="text-blue-800 font-semibold">2. Converse ≡ Inverse: (q → p) ≡ (¬p → ¬q)</p>
          <p className="mt-2 text-xs text-gray-700">Proof: Look at the truth table under Row 2 ($p=T, q=F$). The implication is False. Its contrapositive is $\neg q \rightarrow \neg p \equiv T \rightarrow F$, which is also False.</p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 3: Laws of Propositional Logic */}
      <section>
        <h2 className="section-heading">3. Laws and Algebraic Properties of Propositional Logic</h2>
        <p className="p-text">
          Propositions satisfy multiple logical equivalence laws, which allow complex logical expressions to be algebraically simplified without relying on massive truth tables.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Law Name</th>
                <th className="border border-[#c7a669] p-3 text-left">Equivalence Relations</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Identity Laws</td>
                <td className="border border-[#c7a669] p-3">p ∧ T ≡ p <br /> p ∨ F ≡ p</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Domination Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ T ≡ T <br /> p ∧ F ≡ F</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Idempotent Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ p ≡ p <br /> p ∧ p ≡ p</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Double Negation</td>
                <td className="border border-[#c7a669] p-3">¬(¬p) ≡ p</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Commutative Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ q ≡ q ∨ p <br /> p ∧ q ≡ q ∧ p</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Associative Laws</td>
                <td className="border border-[#c7a669] p-3">(p ∨ q) ∨ r ≡ p ∨ (q ∨ r) <br /> (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Distributive Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) <br /> p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">De Morgan's Laws</td>
                <td className="border border-[#c7a669] p-3">¬(p ∧ q) ≡ ¬p ∨ ¬q <br /> ¬(p ∨ q) ≡ ¬p ∧ ¬q</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Absorption Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ (p ∧ q) ≡ p <br /> p ∧ (p ∨ q) ≡ p</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Negation Laws</td>
                <td className="border border-[#c7a669] p-3">p ∨ ¬p ≡ T (Law of Excluded Middle) <br /> p ∧ ¬p ≡ F (Law of Contradiction)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Conditional Equivalence</td>
                <td className="border border-[#c7a669] p-3">p → q ≡ ¬p ∨ q</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 4: Predicate Logic */}
      <section>
        <h2 className="section-heading">4. Predicate Logic & Quantifier Properties</h2>
        <p className="p-text">
          <span className="font-semibold">Predicate Logic</span> expands on propositional logic by dealing with variables over specified domains using assertions and quantifiers. A predicate $P(x)$ assigns a property to a variable $x$. It becomes a proposition only when $x$ is assigned a specific value or bounded by a quantifier.
        </p>

        <h4 className="text-2xl font-bold mt-4 mb-2">Quantifiers & Bounding Rules</h4>
        <ul className="section-list">
          <li><strong>Universal Quantifier (∀x):</strong> The statement $∀x P(x)$ asserts that $P(x)$ is strictly True for **every single** element within the specified domain. It behaves like an infinite chain of conjunctions: $P(x_1) \wedge P(x_2) \wedge P(x_3) \dots$</li>
          <li><strong>Existential Quantifier (∃x):</strong> The statement $∃x P(x)$ asserts that there exists **at least one** element within the domain for which $P(x)$ evaluates to True. It behaves like an infinite chain of disjunctions: $P(x_1) \vee P(x_2) \vee P(x_3) \dots$</li>
        </ul>

        <h4 className="text-2xl font-bold mt-6 mb-2">Properties and Logical Equivalences of Quantifiers</h4>
        <div className="overflow-x-auto">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Logical Rule / Equivalence</th>
                <th className="border border-[#c7a669] p-3 text-left">Structural Expression</th>
                <th className="border border-[#c7a669] p-3 text-left">Edge Cases & Constraints</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Quantifier De Morgan (1)</td>
                <td className="border border-[#c7a669] p-3">¬(∀x P(x)) ≡ ∃x ¬P(x)</td>
                <td className="border border-[#c7a669] p-3">To disprove a universal rule, you only need to find a single counterexample.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Quantifier De Morgan (2)</td>
                <td className="border border-[#c7a669] p-3">¬(∃x P(x)) ≡ ∀x ¬P(x)</td>
                <td className="border border-[#c7a669] p-3">Asserting something does not exist means it is false for every element in the domain.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Universal Distributivity</td>
                <td className="border border-[#c7a669] p-3">∀x (P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x)</td>
                <td className="border border-[#c7a669] p-3">**Warning:** ∀x (P(x) ∨ Q(x)) is **NOT** equivalent to ∀x P(x) ∨ ∀x Q(x).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Existential Distributivity</td>
                <td className="border border-[#c7a669] p-3">∃x (P(x) ∨ Q(x)) ≡ ∃x P(x) ∨ ∃x Q(x)</td>
                <td className="border border-[#c7a669] p-3">**Warning:** ∃x (P(x) ∧ Q(x)) is **NOT** equivalent to ∃x P(x) ∧ ∃x Q(x).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-4 border border-[#c7a669]">
          <h4 className="text-xl font-bold mb-1 text-red-800">💡 Critical Counter-Intuitive Edge Case (Nested Quantifiers):</h4>
          <p className="text-base font-mono mt-2">
            ∃y ∀x P(x, y) → ∀x ∃y P(x, y) is TRUE, but its converse is FALSE.
          </p>
          <p className="text-sm mt-1 font-sans">
            Let $P(x, y)$ be the statement <i>"y loves x"</i>. 
            <br />
            - $\exists y \forall x P(x, y)$ means: <i>"There is a specific person $y$ who loves absolutely everyone $x$."</i> (A universal lover exists).
            <br />
            - $\forall x \exists y P(x, y)$ means: <i>"For every person $x$, there is someone $y$ who loves them."</i> (Everyone has at least one lover, but it can be a different person for each $x$).
            <br />
            Clearly, the first statement implies the second, but the second does not imply the first. **Order of nested quantifiers cannot be swapped freely.**
          </p>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 5: Rules of Inference */}
      <section>
        <h2 className="section-heading">5. Rules of Inference</h2>
        <p className="p-text">
          Rules of inference are templates used to deduce a valid conclusion from a set of true assertions (premises). They form the foundation of logical reasoning and logical steps.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-[#c7a669]">
            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">Rule Name</th>
                <th className="border border-[#c7a669] p-3 text-left">Symbolic Layout / Step</th>
                <th className="border border-[#c7a669] p-3 text-left">Natural Description</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#1B0D00] font-mono text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Modus Ponens</td>
                <td className="border border-[#c7a669] p-3">p <br /> p → q <br /> ∴ q</td>
                <td className="border border-[#c7a669] p-3 font-sans">If an implication is true and its premise is true, the conclusion must be true.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Modus Tollens</td>
                <td className="border border-[#c7a669] p-3">¬q <br /> p → q <br /> ∴ ¬p</td>
                <td className="border border-[#c7a669] p-3 font-sans">If an implication is true and its conclusion is false, its premise must be false.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Hypothetical Syllogism</td>
                <td className="border border-[#c7a669] p-3">p → q <br /> q → r <br /> ∴ p → r</td>
                <td className="border border-[#c7a669] p-3 font-sans">Implications are transitive. Chains can be merged into a single link.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold font-sans">Disjunctive Syllogism</td>
                <td className="border border-[#c7a669] p-3">p ∨ q <br /> ¬p <br /> ∴ q</td>
                <td className="border border-[#c7a669] p-3 font-sans">If an 'OR' statement is true and one component is false, the other component must be true.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Section 6: Proof Techniques */}
      <section>
        <h2 className="section-heading">6. Comprehensive Proof Techniques with Structural Examples</h2>
        <p className="p-text">
          A formal mathematical proof demonstrates that a mathematical statement is true. Below are the core proof strategies used across computer science and discrete mathematics.
        </p>

        {/* 6.1 Direct Proof */}
        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-2">I. Direct Proof ($p \rightarrow q$)</h4>
          <p className="p-text">
            **Strategy:** Assume the premise $p$ is strictly true, and use definition expansions and logical steps to deduce that conclusion $q$ must also be true.
          </p>
          <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-3 border border-[#c7a669]">
            <p className="font-bold">Theorem: If $n$ is an odd integer, then $n^2$ is an odd integer.</p>
            <p className="text-sm mt-2 font-semibold">Proof Construction:</p>
            <ol className="list-decimal pl-5 text-sm space-y-1 font-mono mt-1">
              <li>Assume $n$ is an odd integer by default premise.</li>
              <li>By algebraic definition, $n = 2k + 1$ for some integer $k$.</li>
              <li>Compute $n^2$: $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1$.</li>
              <li>Factor the expression: $n^2 = 2(2k^2 + 2k) + 1$.</li>
              <li>Let $m = 2k^2 + 2k$. Since integers are closed under addition and multiplication, $m$ is also an integer.</li>
              <li>Therefore, $n^2 = 2m + 1$, which satisfies the definition of an odd integer. ∴ Q.E.D.</li>
            </ol>
          </div>
        </div>

        {/* 6.2 Proof by Contraposition */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-2">II. Proof by Contraposition</h4>
          <p className="p-text">
            **Strategy:** Since $(p \rightarrow q) \equiv (\neg q \rightarrow \neg p)$, we can prove the implication by assuming that the conclusion $q$ is **False** ($\neg q$) and dervining that the premise $p$ must also be **False** ($\neg p$).
          </p>
          <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-3 border border-[#c7a669]">
            <p className="font-bold">Theorem: If $3n + 2$ is an odd integer, then $n$ is an odd integer.</p>
            <p className="text-sm mt-2 font-semibold">Proof Construction:</p>
            <ol className="list-decimal pl-5 text-sm space-y-1 font-mono mt-1">
              <li>Assume the contrapositive hypothesis: The conclusion is false, meaning $n$ is an **even** integer.</li>
              <li>By definition of an even integer, $n = 2k$ for some integer $k$.</li>
              <li>Substitute $n$ into the expression: $3n + 2 = 3(2k) + 2 = 6k + 2$.</li>
              <li>Factor out a 2: $3n + 2 = 2(3k + 1)$.</li>
              <li>Let $m = 3k + 1$, which is an integer. Thus, $3n + 2 = 2m$.</li>
              <li>This shows that $3n + 2$ is an even integer, which means the premise is false.</li>
              <li>Since we showed $\neg q \rightarrow \neg p$, the original theorem $p \rightarrow q$ is proven. ∴ Q.E.D.</li>
            </ol>
          </div>
        </div>

        {/* 6.3 Proof by Contradiction */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-2">III. Proof by Contradiction</h4>
          <p className="p-text">
            **Strategy:** Assume that the target theorem statement is completely **False**. Use this assumption to reason through steps until you arrive at a logical impossibility or an absolute contradiction ($r \wedge \neg r$). This proves that your initial assumption was incorrect, meaning the theorem must be true.
          </p>
          <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-3 border border-[#c7a669]">
            <p className="font-bold">Theorem: $\sqrt{2}$ is an irrational number.</p>
            <p className="text-sm mt-2 font-semibold">Proof Construction:</p>
            <ol className="list-decimal pl-5 text-sm space-y-1 font-mono mt-1">
              <li>Assume the contradiction setup: $\sqrt{2}$ is **not** irrational, meaning it is a **rational** number.</li>
              <li>By definition of rational numbers, $\sqrt{2} = a / b$ where $a, b$ are integers, $b \neq 0$, and the fraction is written in **irreducible terms** (meaning $\text{gcd}(a, b) = 1$; they share no common factors).</li>
              <li>Square both sides: $2 = a^2 / b^2 \implies a^2 = 2b^2$.</li>
              <li>Since $a^2$ is a multiple of 2, $a^2$ must be an even integer. This implies that $a$ itself must be an even integer (as the square of an odd integer is always odd).</li>
              <li>Since $a$ is even, we can write $a = 2k$ for some integer $k$.</li>
              <li>Substitute $a$ back into the equation: $(2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2$.</li>
              <li>This implies that $b^2$ is an even integer, which means $b$ itself must also be an even integer.</li>
              <li>If both $a$ and $b$ are even, they both share a common factor of 2. This directly contradicts our initial definition rule that $\text{gcd}(a,b) = 1$.</li>
              <li>Because this assumption leads to a clear contradiction, our initial assumption ($\sqrt{2}$ is rational) must be false. Therefore, $\sqrt{2}$ is irrational. ∴ Q.E.D.</li>
            </ol>
          </div>
        </div>

        {/* 6.4 Mathematical Induction */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-2">IV. Mathematical Induction</h4>
          <p className="p-text">
            **Strategy:** To prove a predicate proposition $P(n)$ is true for all positive integers $n \ge 1$:
            <br />
            1. **Base Case:** Prove the statement holds true for the smallest valid boundary element, typically $P(1)$.
            <br />
            2. **Inductive Hypothesis:** Assume that the property holds true for an arbitrary step state $n = k$, meaning $P(k)$ is true.
            <br />
            3. **Inductive Step:** Use this assumption to prove that the property must then hold true for the next step state $n = k + 1$, showing $P(k) \rightarrow P(k+1)$.
          </p>
          <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-3 border border-[#c7a669]">
            <p className="font-bold">Theorem: Prove that the sum of the first $n$ positive integers is given by: $1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2}$.</p>
            <p className="text-sm mt-2 font-semibold">Proof Construction:</p>
            <ul className="space-y-3 text-sm font-mono mt-1">
              <li>
                <span className="font-sans font-bold text-blue-900">1. Base Case (n = 1):</span>
                <br />
                Left-Hand Side (LHS) = $1$.
                <br />
                Right-Hand Side (RHS) = $\frac{1(1 + 1)}{2} = \frac{2}{2} = 1$.
                <br />
                Since LHS = RHS, $P(1)$ is true.
              </li>
              <li>
                <span className="font-sans font-bold text-blue-900">2. Inductive Hypothesis:</span>
                <br />
                Assume that $P(k)$ is true for some arbitrary positive integer $k$. That is:
                <br />
                $1 + 2 + 3 + \dots + k = \frac{k(k + 1)}{2}$.
              </li>
              <li>
                <span className="font-sans font-bold text-blue-900">3. Inductive Step (Prove n = k + 1):</span>
                <br />
                We need to show that: $1 + 2 + 3 + \dots + k + (k + 1) = \frac{(k + 1)((k + 1) + 1)}{2} = \frac{(k + 1)(k + 2)}{2}$.
                <br />
                Group the first $k$ terms on the left side:
                <br />
                $\underline{(1 + 2 + 3 + \dots + k)} + (k + 1)$.
                <br />
                Substitute the inductive hypothesis into the underlined part:
                <br />
                $= \frac{k(k + 1)}{2} + (k + 1)$.
                <br />
                Find a common denominator to add the terms:
                <br />
                $= \frac{k(k + 1) + 2(k + 1)}{2}$.
                <br />
                Factor out the common term $(k + 1)$ from the numerator:
                <br />
                $= \frac{(k + 1)(k + 2)}{2}$.
                <br />
                This matches the expected right-hand side expression for $P(k+1)$.
                <br />
                Since both the base case and inductive step hold, the theorem is proven for all $n \in \mathbb{Z}^+$. ∴ Q.E.D.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">Summary</h2>
        <p className="p-text">
          In this chapter, we explored the foundations of mathematical logic and proof design. We covered truth tables for propositional connectives, logical equivalences, predicate quantifiers, rules of inference, and formal proof strategies like direct proofs, contraposition, contradiction, and induction. These concepts are essential for formal reasoning in computer science and mathematics.
        </p>
      </section>
    </div>
  );
}