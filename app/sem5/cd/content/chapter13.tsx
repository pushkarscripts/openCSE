import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch13Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">What is Semantic Analysis?</h2>
      <p className="p-text">
        <strong>Semantic Analysis</strong> is the third major phase of a compiler, coming after Lexical Analysis and Syntax Analysis. While Lexical Analysis deals with tokens (is each word valid?) and Syntax Analysis deals with grammar (are words arranged in a grammatical structure?), Semantic Analysis deals with <em>meaning</em> — does the program actually make sense logically and type-theoretically?
      </p>
      <p className="p-text">
        Consider this analogy: in English, the sentence <em>&quot;Colorless green ideas sleep furiously&quot;</em> is syntactically correct but semantically nonsensical. Similarly, <code>int x = &quot;hello&quot;;</code> is syntactically correct C code but semantically wrong because a string literal cannot be assigned to an integer variable. Semantic analysis catches exactly such errors.
      </p>

      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text">
        <h4 className="font-bold text-[#c7a669] mb-1">Key Insight</h4>
        Semantic analysis is the phase where the compiler builds most of the symbol table and uses it. Unlike lexical and syntax errors which prevent further compilation, many semantic errors can be reported and compilation can continue to find more errors.
      </div>

      <h2 className="section-heading">Position in the Compiler Pipeline</h2>
      <p className="p-text">
        Below is the context of Semantic Analysis within the standard 6-phase compiler structure:
      </p>

      <ExpandingBox title="The 6-Phase Compiler Pipeline">
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Phase #</th>
                <th className="p-2 font-bold text-[#c7a669]">Phase Name</th>
                <th className="p-2 font-bold text-[#c7a669]">Input</th>
                <th className="p-2 font-bold text-[#c7a669]">Output</th>
                <th className="p-2 font-bold text-[#c7a669]">Key Tool</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono text-[#c7a669]">1</td>
                <td className="p-2">Lexical Analysis</td>
                <td className="p-2">Source code (characters)</td>
                <td className="p-2">Token stream</td>
                <td className="p-2">Finite Automaton / DFA</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono text-[#c7a669]">2</td>
                <td className="p-2">Syntax Analysis</td>
                <td className="p-2">Token stream</td>
                <td className="p-2">Parse tree / AST</td>
                <td className="p-2">Push-down automaton / Parser</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30 bg-[#ebdcb0]/5">
                <td className="p-2 font-mono text-[#c7a669]">3</td>
                <td className="p-2 font-bold">Semantic Analysis</td>
                <td className="p-2 font-bold">Parse tree + Symbol Table</td>
                <td className="p-2 font-bold">Annotated AST</td>
                <td className="p-2 font-bold">Attribute Grammar / Type Checker</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono text-[#c7a669]">4</td>
                <td className="p-2">Intermediate Code Gen</td>
                <td className="p-2">Annotated AST</td>
                <td className="p-2">Three-address code (TAC)</td>
                <td className="p-2">SDT Schemes</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono text-[#c7a669]">5</td>
                <td className="p-2">Code Optimization</td>
                <td className="p-2">TAC</td>
                <td className="p-2">Optimized TAC</td>
                <td className="p-2">Data Flow Analysis</td>
              </tr>
              <tr>
                <td className="p-2 font-mono text-[#c7a669]">6</td>
                <td className="p-2">Code Generation</td>
                <td className="p-2">Optimized code</td>
                <td className="p-2">Target machine code</td>
                <td className="p-2">Register allocator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <h2 className="section-heading">What Does Semantic Analysis Check?</h2>
      <p className="p-text">
        Semantic analysis performs checking at multiple levels to ensure the source code conforms to the language definition:
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Type Checking">
          <p className="p-text">
            Ensures that every operator receives operands of compatible types. For example:
          </p>
          <ul className="list-disc list-inside p-text space-y-1.5 ml-4">
            <li>Arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) must have numeric operands.</li>
            <li>Array indexing (<code>arr[i]</code>) requires the index <code>i</code> to be an integer.</li>
            <li>The type checker infers or checks types of every expression recursively.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="2. Scope Checking / Name Resolution">
          <p className="p-text">
            Guarantees that every identifier is declared before it is used. It checks:
          </p>
          <ul className="list-disc list-inside p-text space-y-1.5 ml-4">
            <li>Is the variable or function visible in the current lexical scope?</li>
            <li>Does an identifier conflict with a duplicate declaration in the same scope?</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="3. Arity & Signature Checking">
          <p className="p-text">
            Verifies that function calls supply the correct number of arguments matching the function&apos;s parameter list, and that their types are compatible with the parameters defined in the function signature.
          </p>
        </ExpandingBox>

        <ExpandingBox title="4. Flow-of-Control Checking">
          <p className="p-text">
            Ensures that control flow statements are placed in valid contexts:
          </p>
          <ul className="list-disc list-inside p-text space-y-1.5 ml-4">
            <li><code>break</code> and <code>continue</code> statements must appear only inside loops.</li>
            <li><code>return</code> statements must return values matching the function&apos;s declared return type.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="5. Initialization & Overloading Resolution">
          <p className="p-text">
            <strong>Initialization Checking:</strong> Compilers check or issue warnings if a variable is read before it has been assigned a value.
          </p>
          <p className="p-text mt-2">
            <strong>Overloading Resolution:</strong> In languages that support overloading (like C++ or Java), the compiler uses argument types at the call site to determine exactly which overloaded function version to invoke.
          </p>
        </ExpandingBox>
      </div>
    </div>
  );
};
