"use client"
import React from "react"
import { Inline, Block } from "../../../components/Math"

export function Ch1Content() {
  return (
    <div className="course-content">
      {/* Overview */}
      <p className="p-text">
        Welcome to the comprehensive study of <span className="font-semibold">Mathematical Logic and Proofs</span>. This field acts as the absolute bedrock for formal computer science engineering. It dictates how microprocessors execute boolean branching, forms the mechanical rules behind automated software verification, and guarantees that structural derivations in mathematics are free from human conversational ambiguity.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. Propositional Logic */}
      <section>
        <h3 className="section-heading">
          1. Deep Dive into Propositional Logic & Structural Operators
        </h3>
        <p className="p-text">
          A <span className="font-semibold">Proposition</span> is defined strictly as a declarative sentence that possesses exactly one invariant truth value—either completely <strong>True</strong> or completely <strong>False</strong>—but never both, never ambiguous, and never dependent on context or subjective interpretation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Valid Mathematical Propositions</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>"The integer <Inline math="13" /> is a prime number." (Evaluates to True)</li>
              <li><Inline math="2 + 2 = 5" /> (Evaluates cleanly to False)</li>
              <li>"The binary string <Inline math="1010" /> contains exactly four digits." (Evaluates to True)</li>
            </ul>
          </div>
          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Invalid Non-Propositional Assertions</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>"Please compile this module immediately." (An imperative command or request)</li>
              <li>"Is the system path set correctly?" (An interrogative question)</li>
              <li><Inline math="x + 4 = 9" /> (An open sentence; truth value remains variable until <Inline math="x" /> is assigned a domain item)</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold mt-6 mb-2 text-amber-200 font-sans">Formal Logical Connectives & Complete Truth Matrix</h4>
        <p className="p-text">
          Complex algorithmic structures are constructed by modifying or joining primitive propositions using explicit operational connectives. Let us define the exact operational logic for every single connective:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Operator Name</th>
                <th className="border border-[#c7a669] p-3">Symbol</th>
                <th className="border border-[#c7a669] p-3">Strict Invariant Evaluation Condition</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Negation (NOT)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="\neg p" /></td>
                <td className="border border-[#c7a669] p-3">Flips the truth value cleanly. Invents an opposite polarity state.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Conjunction (AND)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="p \wedge q" /></td>
                <td className="border border-[#c7a669] p-3">Evaluates to strictly True <strong>only</strong> if both constituent elements are simultaneously True.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Disjunction (OR)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="p \vee q" /></td>
                <td className="border border-[#c7a669] p-3">Inclusive operational rule. Evaluates to False <strong>only</strong> if both constituent elements are simultaneously False.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Exclusive OR (XOR)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="p \oplus q" /></td>
                <td className="border border-[#c7a669] p-3">Evaluates to True if and only if the inputs possess <strong>differing or mismatched</strong> truth parameters.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Conditional (Implication)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="p \rightarrow q" /></td>
                <td className="border border-[#c7a669] p-3">Asserts directional consequence. Evaluates to False <strong>only</strong> if a True premise triggers a False conclusion.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Biconditional (IFF)</td>
                <td className="border border-[#c7a669] p-3 font-mono"><Inline math="p \leftrightarrow q" /></td>
                <td className="border border-[#c7a669] p-3">Equivalence evaluation. Yields True if and only if both components share an identical state.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-center font-mono text-sm">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-2"><Inline math="p" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="q" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="\neg p" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="p \wedge q" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="p \vee q" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="p \oplus q" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="p \rightarrow q" /></th>
                <th className="border border-[#c7a669] p-2"><Inline math="p \leftrightarrow q" /></th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold text-green-800">T</td>
                <td className="border border-[#c7a669] p-2 font-bold text-green-800">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold text-green-800">T</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-800">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-800 bg-red-200">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold text-red-800">F</td>
                <td className="border border-[#c7a669] p-2 font-bold text-green-800">T</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
                <td className="border border-[#c7a669] p-2 text-blue-800 bg-blue-100">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold text-red-800">F</td>
                <td className="border border-[#c7a669] p-2 font-bold text-red-800">F</td>
                <td className="border border-[#c7a669] p-2">T</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2">F</td>
                <td className="border border-[#c7a669] p-2 text-blue-800 bg-blue-100">T</td>
                <td className="border border-[#c7a669] p-2 font-bold">T</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">
            ⚠️ Invariant Edge Cases & Logical Exceptions of Implications:
          </div>
          <p className="text-sm space-y-2">
            1. <strong>Vacuous Truth:</strong> Look carefully at rows 3 and 4 of the truth table. When the premise <Inline math="p" /> is entirely False, the implication statement <Inline math="p \rightarrow q" /> evaluates to True automatically, completely independent of the truth state of the conclusion <Inline math="q" />. This is known as a vacuous truth mapping. For instance, the statement: <em>"If an odd integer is divisible by <Inline math="2" />, then the moon is manufactured out of green cheese"</em> is completely mathematically valid and evaluates to True.
            <br />
            2. <strong>Logical Mismatch:</strong> Implication does not signify causal correlation or chronological dependency. It is strictly an algebraic gating condition.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Conversions of an Implication */}
      <section>
        <h3 className="section-heading">
          2. Systematic Structural Variations of a Conditional Statement
        </h3>
        <p className="p-text">
          Given a base structural implication <Inline math="p \rightarrow q" />, engineers derive three explicitly distinct logical configurations that alter operator placement and variable inversion:
        </p>

        <ul className="section-list">
          <li>
            <strong>The Converse:</strong> Swaps the structural position of the components entirely. Formally mapped as: <Inline math="q \rightarrow p" />.
          </li>
          <li>
            <strong>The Inverse:</strong> Retains the position but negates the truth value of both components. Formally mapped as: <Inline math="\neg p \rightarrow \neg q" />.
          </li>
          <li>
            <strong>The Contrapositive:</strong> Simultaneously swaps positions and negates both constituent terms. Formally mapped as: <Inline math="\neg q \rightarrow \neg p" />.
          </li>
        </ul>

        <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 my-4 text-[#2b1d0f]">
          <h4 className="font-bold text-lg mb-2 text-[#5b3a29]">Critical Logical Equivalence Pairings:</h4>
          <p className="text-sm">
            An implication statement is always completely equivalent to its contrapositive. They share identical truth tables:
            <br />
            <span className="block text-center font-mono font-bold my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
              <Inline math="(p \rightarrow q) \equiv (\neg q \rightarrow \neg p)" />
            </span>
            Similarly, the converse statement is always completely equivalent to the inverse statement:
            <br />
            <span className="block text-center font-mono font-bold my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
              <Inline math="(q \rightarrow p) \equiv (\neg p \rightarrow \neg q)" />
            </span>
            <strong>Warning:</strong> A common engineering flaw is to assume that the converse or inverse matches the truth profile of the original implication. They are completely independent mappings.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Laws of Propositional Logic */}
      <section>
        <h3 className="section-heading">
          3. Algebraic Equivalences & Logical Laws
        </h3>
        <p className="p-text">
          Just as numerical algebra possesses rules for factoring constants, propositional expressions can be structurally manipulated or minimized using strict algebraic laws. These equivalences provide the absolute mechanical rules used to optimize digital logical gate routing in hardware verification compilers.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left font-mono text-sm">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 w-1/3">Law Designation</th>
                <th className="border border-[#c7a669] p-3">Formal Equivalence Rule Expressions</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Identity Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \wedge \text{T} \equiv p" /><br /><Inline math="p \vee \text{F} \equiv p" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Domination Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee \text{T} \equiv \text{T}" /><br /><Inline math="p \wedge \text{F} \equiv \text{F}" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Idempotent Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee p \equiv p" /><br /><Inline math="p \wedge p \equiv p" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Double Negation</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\neg(\neg p) \equiv p" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Commutative Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee q \equiv q \vee p" /><br /><Inline math="p \wedge q \equiv q \wedge p" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Associative Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="(p \vee q) \vee r \equiv p \vee (q \vee r)" /><br /><Inline math="(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Distributive Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)" /><br /><Inline math="p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">De Morgan's Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\neg(p \wedge q) \equiv \neg p \vee \neg q" /><br /><Inline math="\neg(p \vee q) \equiv \neg p \wedge \neg q" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Absorption Laws</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee (p \wedge q) \equiv p" /><br /><Inline math="p \wedge (p \vee q) \equiv p" /></td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Negation Axioms</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee \neg p \equiv \text{T}" /> (Law of Excluded Middle)<br /><Inline math="p \wedge \neg p \equiv \text{F}" /> (Law of Contradiction)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Conditional Equivalent</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \rightarrow q \equiv \neg p \vee q" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. Predicate Logic & Quantifier Invariants */}
      <section>
        <h3 className="section-heading">
          4. Advanced Predicate Logic & Domain Quantifiers
        </h3>
        <p className="p-text">
          Propositional logic lacks structural granularity because it cannot look inside elements or address variables over variable domains. <span className="font-semibold">Predicate Logic</span> expands on this by introducing variables, descriptive properties, and quantifiers. A predicate expression <Inline math="P(x)" /> maps an assertion to an object variable <Inline math="x" /> inside a defined domain space. It transforms into a standard concrete proposition only when <Inline math="x" /> is bounded by an explicit domain item or quantifier loop.
        </p>

        <h4 className="text-xl font-bold mt-4 mb-2 text-amber-200 font-sans">Core Bounding Quantifiers</h4>
        <ul className="section-list">
          <li>
            <strong>Universal Quantifier (<Inline math="\forall" />):</strong> States that the target predicate condition <Inline math="P(x)" /> is completely and uniformly valid for <strong>every single element</strong> within the active domain. It represents a bound conjunction across the domain pool: <Inline math="P(x_1) \wedge P(x_2) \wedge P(x_3) \dots" />
          </li>
          <li>
            <strong>Existential Quantifier (<Inline math="\exists" />):</strong> States that there exists <strong>at least one distinct element</strong> within the domain for which <Inline math="P(x)" /> evaluates to True. It represents a bound disjunction across the domain pool: <Inline math="P(x_1) \vee P(x_2) \vee P(x_3) \dots" />
          </li>
        </ul>

        <h4 className="text-xl font-bold mt-6 mb-2 text-amber-200 font-sans">Topological Quantifier Rules & De Morgan Invariants</h4>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse border border-[#c7a669] text-left font-mono text-sm">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Quantifier Rule Concept</th>
                <th className="border border-[#c7a669] p-3">Structural Algebraic Representation</th>
                <th className="border border-[#c7a669] p-3">Operational Boundary Logic</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Quantifier De Morgan (1)</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\neg(\forall x P(x)) \equiv \exists x \neg P(x)" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">To completely invalidate a universal law, you only need to locate one counterexample item.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Quantifier De Morgan (2)</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\neg(\exists x P(x)) \equiv \forall x \neg P(x)" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">Asserting that an object instance does not exist means it evaluates to false for all items across the domain.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Universal Distributivity</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\forall x (P(x) \wedge Q(x)) \equiv \forall x P(x) \wedge \forall x Q(x)" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">Universal scoping applies directly over conjunction operations without leakage.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Existential Distributivity</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\exists x (P(x) \vee Q(x)) \equiv \exists x P(x) \vee \exists x Q(x)" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">Existential allocation splits completely over active inclusive disjunction pathways.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2 text-red-300">
            ⚠️ Exception Invariant: Critical Scope Gating of Nested Quantifiers
          </div>
          <p className="text-sm">
            The relative parsing sequence of nested asymmetric quantifiers is strictly <strong>one-way</strong> and cannot be swapped. Consider this directional theorem condition:
            <br />
            <span className="block text-center font-mono font-bold my-2 bg-[#462d20] p-2 rounded text-amber-200">
              <Inline math="\exists y \forall x P(x, y) \rightarrow \forall x \exists y P(x, y)" /> &nbsp; is True, but its converse is completely False.
            </span>
            Let our domain pool be all human beings, and let <Inline math="P(x, y)" /> represent the predicate property string: <em>"Object <Inline math="y" /> has cleared system access keys for user <Inline math="x" />"</em>.
            <br />
            - The left-hand expression <Inline math="\exists y \forall x P(x, y)" /> asserts: There exists a specific, master administrator <Inline math="y" /> who holds systemic clearance keys matching absolutely every person <Inline math="x" /> in the corporation.
            <br />
            - The right-hand expression <Inline math="\forall x \exists y P(x, y)" /> asserts: For every single corporate user <Inline math="x" />, there is at least one clearing technician <Inline math="y" /> assigned to them (but it can be a completely distinct, unique employee <Inline math="y" /> for every person).
            <br />
            Clearly, a master administrator implies everyone has a key-holder, but everyone having an individual technician does not imply the existence of a single master administrator. <strong>Quantifier sequence swapping causes systemic logical collapse.</strong>
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 5. Rules of Inference */}
      <section>
        <h3 className="section-heading">
          5. Structural Rules of Formal Inference
        </h3>
        <p className="p-text">
          To build complex structural proofs without writing out massive multi-variable truth tables, logical engines leverage standardized deductive templates. These are called the <span className="font-semibold">Rules of Inference</span>. Each rule represents a tautological implication framework where if the input conditions (premises) are accepted as True, the resulting logical consequence must be True.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left font-mono text-sm">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 w-1/4">Rule Designation</th>
                <th className="border border-[#c7a669] p-3 w-1/4">Formal Symbolic Gating Layout</th>
                <th className="border border-[#c7a669] p-3">Natural Logical Execution Meaning</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Modus Ponens</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p" /><br /><Inline math="p \rightarrow q" /><br /><Inline math="\therefore q" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">The mode of affirming. If a conditional implication is true, and its starting premise is met, the consequence is verified.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Modus Tollens</td>
                <td className="border border-[#c7a669] p-3"><Inline math="\neg q" /><br /><Inline math="p \rightarrow q" /><br /><Inline math="\therefore \neg p" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">The mode of denying. If an implication holds true, but its expected structural consequence is entirely false, the premise must be false.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Hypothetical Syllogism</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \rightarrow q" /><br /><Inline math="q \rightarrow r" /><br /><Inline math="\therefore p \rightarrow r" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">Transitive chaining of logic. Connects distinct operations into a single merged processing path.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-sans font-semibold">Disjunctive Syllogism</td>
                <td className="border border-[#c7a669] p-3"><Inline math="p \vee q" /><br /><Inline math="\neg p" /><br /><Inline math="\therefore q" /></td>
                <td className="border border-[#c7a669] p-3 font-sans text-xs">Exclusive elimination. If an inclusive OR clause is true, but one choice is explicitly negated, the other choice must be true.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 6. Proof Techniques with Structural Examples */}
      <section>
        <h3 className="section-heading">
          6. Exhaustive Mathematical Proof Methodologies
        </h3>
        <p className="p-text">
          A rigorous mathematical proof is a chain of deductive steps using rules of inference that establishes the absolute truth of a theorem statement beyond question.
        </p>

        {/* 6.1 Direct Proof */}
        <div className="my-6">
          <h4 className="text-xl font-bold mb-2 text-[#5b3a29]">Methodology I: Direct Proof Construction (<Inline math="p \rightarrow q" />)</h4>
          <p className="p-text text-sm">
            <strong>Strategy Rule:</strong> Assume the initial prerequisite premise condition <Inline math="p" /> is strictly true. Leverage active definitions, algebraic identities, and verified axioms to perform calculations until the target consequence <Inline math="q" /> is directly deduced.
          </p>
          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 my-3 text-[#2b1d0f]">
            <p className="font-bold">Theorem Formulation: If an integer <Inline math="n" /> is strictly odd, then its squared product <Inline math="n^2" /> is an odd integer.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5b3a29] mt-2">Deductive Step Profile:</p>
            <ol className="list-decimal pl-5 font-mono text-xs space-y-1.5 mt-1">
              <li>Assume the premise holds true: <Inline math="n" /> belongs to the set of odd integers.</li>
              <li>By algebraic definition, any odd integer can be written as <Inline math="n = 2k + 1" /> for some structural integer element <Inline math="k \in \mathbb{Z}" />.</li>
              <li>Perform immediate expansion of the squared variable: <Inline math="n^2 = (2k + 1)^2" />.</li>
              <li>Evaluate polynomial expansion: <Inline math="n^2 = 4k^2 + 4k + 1" />.</li>
              <li>Isolate a common factor of <Inline math="2" /> to assess divisibility parameters: <Inline math="n^2 = 2(2k^2 + 2k) + 1" />.</li>
              <li>Assign a temporary placeholder variable: Let <Inline math="m = 2k^2 + 2k" />. Since integers are closed under multiplication and addition, <Inline math="m" /> is guaranteed to be a solid integer (<Inline math="m \in \mathbb{Z}" />).</li>
              <li>Substitute back: This yields <Inline math="n^2 = 2m + 1" />. This matches the exact definition layout of an odd integer. Therefore, the statement is directly verified. <Inline math="\blacksquare" /></li>
            </ol>
          </div>
        </div>

        {/* 6.2 Contraposition */}
        <div className="my-6">
          <h4 className="text-xl font-bold mb-2 text-[#5b3a29]">Methodology II: Proof by Structural Contraposition</h4>
          <p className="p-text text-sm">
            <strong>Strategy Rule:</strong> Since <Inline math="p \rightarrow q \equiv \neg q \rightarrow \neg p" />, we bypass a complex forward calculation by assuming that the conclusion is completely False (<Inline math="\neg q" />). We use this setup to perform calculations and derive that the prerequisite premise must be completely False (<Inline math="\neg p" />).
          </p>
          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 my-3 text-[#2b1d0f]">
            <p className="font-bold">Theorem Formulation: For any integer <Inline math="n" />, if the complex product expression <Inline math="3n + 2" /> is an odd integer, then <Inline math="n" /> is an odd integer.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5b3a29] mt-2">Deductive Step Profile:</p>
            <ol className="list-decimal pl-5 font-mono text-xs space-y-1.5 mt-1">
              <li>Formulate the contrapositive setup: Assume the conclusion <Inline math="n" /> is NOT odd, meaning <Inline math="n" /> is an <strong>even</strong> integer.</li>
              <li>By basic numerical definition, an even integer can be written as <Inline math="n = 2k" /> for some reference element <Inline math="k \in \mathbb{Z}" />.</li>
              <li>Substitute this expression back into the initial calculation target: <Inline math="3n + 2 = 3(2k) + 2" />.</li>
              <li>Simplify expression: <Inline math="3n + 2 = 6k + 2" />.</li>
              <li>Factor out a common divisor of <Inline math="2" /> to check for parity parameters: <Inline math="3n + 2 = 2(3k + 1)" />.</li>
              <li>Let <Inline math="m = 3k + 1" />. Because integers are closed under arithmetic transformations, <Inline math="m \in \mathbb{Z" />.</li>
              <li>This yields <Inline math="3n + 2 = 2m" />, proving that the expression <Inline math="3n + 2" /> is a clean multiple of two, meaning it is an <strong>even</strong> integer.</li>
              <li>Since we demonstrated that <Inline math="\neg q \rightarrow \neg p" /> holds true, the original implication <Inline math="p \rightarrow q" /> is formally locked. <Inline math="\blacksquare" /></li>
            </ol>
          </div>
        </div>

        {/* 6.3 Contradiction */}
        <div className="my-6">
          <h4 className="text-xl font-bold mb-2 text-[#5b3a29]">Methodology III: Proof by Logical Contradiction (<Inline math="Reductio" /> <Inline math="ad" /> <Inline math="Absurdum" />)</h4>
          <p className="p-text text-sm">
            <strong>Strategy Rule:</strong> Assume that the statement you wish to prove is completely and entirely <strong>False</strong>. Proceed to analyze deductions based on this assumption until your steps run into an absolute structural impossibility, violating a known axiom or creating a logical clash (<Inline math="r \wedge \neg r" />). This demonstrates that your starting assumption was a logical impossibility, proving the original theorem true.
          </p>
          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 my-3 text-[#2b1d0f]">
            <p className="font-bold">Theorem Formulation: The root value <Inline math="\sqrt{2}" /> is an irrational number.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5b3a29] mt-2">Deductive Step Profile:</p>
            <ol className="list-decimal pl-5 font-mono text-xs space-y-1.5 mt-1">
              <li>Assume the contradiction configuration: The theorem is false, meaning <Inline math="\sqrt{2}" /> is completely <strong>rational</strong>.</li>
              <li>By structural definition of rational values, we must be able to express <Inline math="\sqrt{2} = a / b" />, where <Inline math="a, b \in \mathbb{Z}" />, <Inline math="b \neq 0" />, and the fraction is written strictly in **irreducible terms**. This means <Inline math="\text{gcd}(a, b) = 1" />; they share no common factor elements.</li>
              <li>Perform algebraic squaring of both sides of the equation: <Inline math="2 = a^2 / b^2" />.</li>
              <li>Isolate terms: <Inline math="a^2 = 2b^2" />. This implies that <Inline math="a^2" /> is an even multiple of two.</li>
              <li>By parity rules, if an integer square is even, the root base <Inline math="a" /> must be an even integer. Therefore, we can express <Inline math="a = 2k" /> for some <Inline math="k \in \mathbb{Z}" />.</li>
              <li>Substitute this expression back into our step equation: <Inline math="(2k)^2 = 2b^2 \rightarrow 4k^2 = 2b^2" />.</li>
              <li>Simplify by dividing both sides by two: <Inline math="2k^2 = b^2" />. This implies that <Inline math="b^2" /> is also a clean multiple of two, meaning <Inline math="b" /> must be an even integer.</li>
              <li>If both <Inline math="a" /> and <Inline math="b" /> are even integers, they both share a common factor of <Inline math="2" />. This directly contradicts our initial prerequisite constraint that <Inline math="\text{gcd}(a, b) = 1" />.</li>
              <li>Because our starting assumption triggered a logical contradiction, the assumption is false. Thus, <Inline math="\sqrt{2}" /> is irrational. <Inline math="\blacksquare" /></li>
            </ol>
          </div>
        </div>

        {/* 6.4 Induction */}
        <div className="my-6">
          <h4 className="text-xl font-bold mb-2 text-[#5b3a29]">Methodology IV: Complete Mathematical Induction</h4>
          <p className="p-text text-sm">
            <strong>Strategy Rule:</strong> Used to prove a predicate statement <Inline math="P(n)" /> holds completely across an infinite ordered set of positive integers <Inline math="n \ge 1" />. It operates via three sequential processing loops:
          </p>
          <ul className="list-disc pl-6 text-xs space-y-1 mb-2">
            <li><strong>Base Case Evaluation:</strong> Prove the formula works perfectly for the initial boundary item, usually <Inline math="P(1)" />.</li>
            <li><strong>Inductive Hypothesis Setup:</strong> Assume that the property holds true for an arbitrary step state <Inline math="n = k" />, establishing <Inline math="P(k)" /> as a valid true baseline.</li>
            <li><strong>Inductive Step Execution:</strong> Use the inductive hypothesis to prove that the statement must then hold true for the immediate next integer step <Inline math="n = k + 1" />, completing the implication chain <Inline math="P(k) \rightarrow P(k+1)" />.</li>
          </ul>
          
          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 my-3 text-[#2b1d0f]">
            <p className="font-bold">Theorem Formulation: Prove that the cumulative summation of the first <Inline math="n" /> positive integers is always bounded by: <Inline math="1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2}" />.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5b3a29] mt-2">Deductive Step Profile:</p>
            <ul className="space-y-4 font-mono text-xs mt-1">
              <li>
                <span className="font-sans font-bold text-amber-900">Step A: Base Case Check (n = 1)</span>
                <br />
                Left-Hand Side (LHS) = <Inline math="1" />.
                <br />
                Right-Hand Side (RHS) = <Inline math="\frac{1(1 + 1)}{2} = \frac{2}{2} = 1" />.
                <br />
                Since LHS = RHS, <Inline math="P(1)" /> evaluates cleanly to True.
              </li>
              <li>
                <span className="font-sans font-bold text-amber-900">Step B: Inductive Hypothesis Setup</span>
                <br />
                Assume that the statement holds completely true for an arbitrary integer <Inline math="k" />. That is, we accept the following expression as a verified true premise:
                <br />
                <span className="block p-1.5 my-1 bg-[#5b3a29]/10 rounded text-center"><Inline math="1 + 2 + 3 + \dots + k = \frac{k(k + 1)}{2}" /></span>
              </li>
              <li>
                <span className="font-sans font-bold text-amber-900">Step C: Inductive Step Evaluation (Prove n = k + 1)</span>
                <br />
                We must show that the formula holds for the next step, which requires deriving:
                <br />
                <span className="block p-1.5 my-1 bg-[#5b3a29]/10 rounded text-center"><Inline math="1 + 2 + 3 + \dots + k + (k + 1) = \frac{(k + 1)((k + 1) + 1)}{2} = \frac{(k + 1)(k + 2)}{2" /></span>
                Let us isolate the left-hand summation and group the first <Inline math="k" /> elements:
                <br />
                <Inline math="\underline{(1 + 2 + 3 + \dots + k)} + (k + 1)" />
                Substitute our assumed inductive hypothesis into the underlined component:
                <br />
                <Inline math="= \frac{k(k + 1)}{2} + (k + 1)" />
                Find a common algebraic denominator to compute the fraction addition:
                <br />
                <Inline math="= \frac{k(k + 1) + 2(k + 1)}{2}" />
                Factor out the common polynomial term <Inline math="(k + 1)" /> from the numerator:
                <br />
                <Inline math="= \frac{(k + 1)(k + 2)}{2}" />
                This matches our expected Right-Hand Side expression for <Inline math="P(k+1)" />. The implication chain is complete. Therefore, the theorem is verified for all positive integers <Inline math="n \in \mathbb{Z}^+" />. <Inline math="\blacksquare" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Chapter Summary
        </h3>
        <p className="p-text">
          In this chapter, we explored mathematical logic and formal proofs. We constructed truth tables for foundational connectives, applied algebraic logical equivalences, analyzed domain variables under universal and existential quantifiers, and traced structural rules of inference. Finally, we executed formal proof systems across multiple templates—including direct proofs, structural contraposition, reduction by contradiction, and infinite steps of complete mathematical induction.
        </p>
      </section>
    </div>
  );
}