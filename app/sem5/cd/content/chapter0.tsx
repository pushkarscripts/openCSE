import React from "react";

export const Ch0Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to <span className="font-semibold">Compiler Design</span>. This course covers the theory and practice of building compilers, which translate high-level source code into efficient machine instructions.
      </p>

      <section>
        <h3 className="section-heading">Unit 1: Introduction to Compilers & Lexical Analysis</h3>
        <p className="p-text mt-2">
          In this unit, we explore the fundamental architecture of a compiler, its logical phases, compiler-writing tools, lexical analysis (scanning), bootstrapping, cross-compilation, and finite automata.
        </p>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Syllabus Topics Covered</h4>
          <ul className="section-list space-y-2">
            <li><strong>Introduction:</strong> Compiler vs Interpreter, compiler types.</li>
            <li><strong>Phases of a Compiler:</strong> Lexical, Syntax, Semantic, IR Gen, Code Optimization, Code Generation.</li>
            <li><strong>Support Structures:</strong> Symbol Table Management and Error Handling.</li>
            <li><strong>Compiler Construction Tools:</strong> Lex/Flex, Yacc/Bison, ANTLR, LLVM.</li>
            <li><strong>Lexical Analysis:</strong> Tokens, patterns, lexemes, and the lexical analyzer role.</li>
            <li><strong>Bootstrapping & Cross-Compilation:</strong> T-Diagrams, self-hosting, cross-compilers, Canadian Cross.</li>
            <li><strong>Finite Automata:</strong> Regular expressions, NFAs (Thompson&apos;s construction), DFAs (Subset construction), and DFA Minimization (Myhill-Nerode).</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="section-heading">Unit 3: Semantic Analysis, Symbol Tables &amp; Runtime Environments</h3>
        <p className="p-text mt-2">
          In this unit, we explore the semantic checking phase of compilers, mathematical formalisms for declaring language semantics, symbol table memory structures, block scopes, and dynamic runtime environments.
        </p>

        <div className="card mt-4">
          <h4 className="font-bold text-xl mb-3 text-[#5b3a29]">Syllabus Topics Covered</h4>
          <ul className="section-list space-y-2">
            <li><strong>Semantic Analysis:</strong> Attribute Grammars, synthesized vs. inherited attributes, evaluation order, dependency graphs, SDDs, and SDTs.</li>
            <li><strong>Symbol Table Management:</strong> Scope management, static vs. dynamic scope, nested block scoping, symbol table operations, lists, and hash tables.</li>
            <li><strong>Runtime Environments:</strong> Memory regions layout, activation records, parameter passing (Call by Value, Reference, Value-Result, Name), and heap allocation strategies.</li>
            <li><strong>Solved PYQs:</strong> Past questions from 2023 to 2025, plus a quick revision chart.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
