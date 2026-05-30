import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Modern production compilers are divided into logical stages called <span className="font-semibold">Phases</span>. Conceptualizing these phases helps modularize compiler development into two primary divisions: the <strong>Front End</strong> (Analysis) and the <strong>Back End</strong> (Synthesis).
      </p>

      <section>
        <h3 className="section-heading">Front End vs Back End</h3>
        <ul className="section-list my-2">
          <li><strong>Front End (Analysis):</strong> Scans the source code, validates structure, performs semantic analysis, and compiles it into a machine-independent Intermediate Representation (IR).</li>
          <li><strong>Back End (Synthesis):</strong> Optimizes the machine-independent IR, performs register allocation, and generates machine-specific assembly or binary code.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">The Six Phases of a Compiler</h3>
        <p className="p-text mt-2">
          Every standard compiler processes source code through the following pipeline:
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse border border-[#c7a669] text-left text-sm md:text-base">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 font-semibold">Phase</th>
                <th className="border border-[#c7a669] p-3 font-semibold">Input Representation</th>
                <th className="border border-[#c7a669] p-3 font-semibold">Output Representation</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]/20 dark:bg-black/20 text-[#3A2A14] dark:text-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">1. Lexical Analysis (Scanner)</td>
                <td className="border border-[#c7a669] p-3">Character Stream (Source Code)</td>
                <td className="border border-[#c7a669] p-3">Token Stream</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">2. Syntax Analysis (Parser)</td>
                <td className="border border-[#c7a669] p-3">Token Stream</td>
                <td className="border border-[#c7a669] p-3">Parse Tree / Abstract Syntax Tree (AST)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">3. Semantic Analysis</td>
                <td className="border border-[#c7a669] p-3">Abstract Syntax Tree (AST)</td>
                <td className="border border-[#c7a669] p-3">Annotated AST (Typed)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">4. Intermediate Code Generation</td>
                <td className="border border-[#c7a669] p-3">Annotated AST</td>
                <td className="border border-[#c7a669] p-3">Intermediate Representation (IR / TAC)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">5. Code Optimization</td>
                <td className="border border-[#c7a669] p-3">Intermediate Representation (IR)</td>
                <td className="border border-[#c7a669] p-3">Optimized IR</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold">6. Code Generation</td>
                <td className="border border-[#c7a669] p-3">Optimized IR</td>
                <td className="border border-[#c7a669] p-3">Target Assembly / Machine Code</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Global Support Structures</h3>
        <p className="p-text mt-2">
          Two major system utilities run parallel to all six compiler phases:
        </p>
        <ul className="section-list my-2">
          <li><strong>Symbol Table:</strong> A hash table or stack of scopes that stores identifiers (variables, functions) and their types, scopes, and memory references.</li>
          <li><strong>Error Handler:</strong> Manages diagnostic warnings and recovery routines, allowing compilation to continue and detect multiple errors in a single execution.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Deep Walkthrough: Compiling <code>result = a + b * 2;</code></h3>
        <p className="p-text mt-2">
          Let&apos;s trace how a single line of C code travels through the six phases of compilation:
        </p>

        <ExpandingBox title="Phase 1: Lexical Analysis (Scanning)" defaultOpen={false}>
          <p>
            The scanner reads individual characters and groups them into <strong>Tokens</strong>, discarding whitespace and comments.
          </p>
          <pre className="code-block">{`Input: result = a + b * 2;

Tokens Produced:
1. <IDENTIFIER, "result">
2. <ASSIGN_OP, "=">
3. <IDENTIFIER, "a">
4. <ADD_OP, "+">
5. <IDENTIFIER, "b">
6. <MUL_OP, "*">
7. <INTEGER_LITERAL, "2">
8. <SEMICOLON, ";">`}</pre>
        </ExpandingBox>

        <ExpandingBox title="Phase 2: Syntax Analysis (Parsing)" defaultOpen={false}>
          <p>
            The parser reads the token stream and verifies syntactic correctness against a context-free grammar (CFG). It outputs an <strong>Abstract Syntax Tree (AST)</strong>:
          </p>
          <pre className="code-block">{`         ASSIGN
        /      \\
    result    ADD_OP
             /     \\
            a    MUL_OP
                 /    \\
                b      2`}</pre>
          <p className="mt-2 text-sm italic">
            Note: Multiplication (*) resides deeper in the tree than addition (+) reflecting its higher operator precedence.
          </p>
        </ExpandingBox>

        <ExpandingBox title="Phase 3: Semantic Analysis" defaultOpen={false}>
          <p>
            Verifies logical meaning, type consistency, and variable scoping. For example, if <code>a</code> and <code>b</code> are declared as <code>int</code>, it checks if adding them is valid. The output is an <strong>Annotated AST</strong>:
          </p>
          <pre className="code-block">{`         ASSIGN [type: int]
        /              \\
  result [int]    ADD [type: int]
                 /         \\
              a [int]    MUL [type: int]
                         /          \\
                      b [int]     2 [int]`}</pre>
        </ExpandingBox>

        <ExpandingBox title="Phase 4: Intermediate Code Generation" defaultOpen={false}>
          <p>
            Transforms the annotated tree into a machine-independent code format. In this case, <strong>Three-Address Code (TAC)</strong>:
          </p>
          <pre className="code-block">{`t1 = b * 2
t2 = a + t1
result = t2`}</pre>
        </ExpandingBox>

        <ExpandingBox title="Phase 5: Code Optimization" defaultOpen={false}>
          <p>
            Simplifies instructions to improve execution speed. Here, <strong>Copy Propagation</strong> eliminates the redundant assignment of <code>t2</code> to <code>result</code>:
          </p>
          <pre className="code-block">{`// Before Optimization:
t1 = b * 2
t2 = a + t1
result = t2

// After Copy Propagation:
t1 = b * 2
result = a + t1`}</pre>
        </ExpandingBox>

        <ExpandingBox title="Phase 6: Code Generation" defaultOpen={false}>
          <p>
            Translates optimized IR to machine-specific CPU assembly instructions. Here is an x86 assembly implementation:
          </p>
          <pre className="code-block">{`MOV EAX, [b]   ; Load value of variable 'b' into register EAX
IMUL EAX, 2    ; Multiply EAX by 2 (EAX = b * 2)
ADD EAX, [a]   ; Add value of variable 'a' (EAX = a + b * 2)
MOV [result], EAX ; Store register contents into 'result' memory address`}</pre>
        </ExpandingBox>
      </section>
    </div>
  );
};
