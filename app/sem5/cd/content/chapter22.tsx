import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch22Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Intermediate Code Generation</h2>
      <p className="p-text">
        Intermediate code is a representation between the high-level source language and low-level target machine code. The compiler translates source code into this form before generating final machine code.
      </p>

      <ExpandingBox title="Advantages of Intermediate Code">
        <ul className="list-disc list-inside p-text space-y-2.5 ml-2">
          <li><strong>Machine Independence:</strong> Enforces a clean separation between the front-end (source-dependent) and back-end (machine-dependent) of the compiler.</li>
          <li><strong>Code Optimization:</strong> Facilitates machine-independent code optimization before final code generation.</li>
          <li><strong>Retargeting:</strong> Makes it easier to retarget the compiler to new machines by just changing the back-end.</li>
          <li><strong>Simplicity:</strong> Intermediate forms are simpler to optimize than complex high-level source code or rigid machine code.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading">Forms of Intermediate Code</h2>
      <div className="space-y-4 my-4">
        <ExpandingBox title="A) Three-Address Code (TAC / 3AC)">
          <p className="p-text">
            In Three-Address Code, each instruction has at most <strong>ONE operator</strong> on the right-hand side, and it references at most <strong>three addresses</strong> (two operands and one result).
          </p>
          <p className="p-text mt-2 font-semibold">Common Representations:</p>
          <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
            <li><strong>Quadruples:</strong> A table with 4 fields: <code>Operator, Operand 1, Operand 2, Result</code>.</li>
            <li><strong>Triples:</strong> A table with 3 fields: <code>Operator, Operand 1, Operand 2</code>. Results are implicitly referred to by the line number where they are computed.</li>
            <li><strong>Indirect Triples:</strong> Uses a separate table of pointers to triples, making optimizations (like moving instructions) easier.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="B) Postfix Notation">
          <p className="p-text">
            In postfix notation (or Reverse Polish Notation), operators follow their operands. The main advantage is that no parentheses are needed to dictate the order of operations, as the order is unambiguous.
          </p>
          <p className="p-text mt-2">
            <strong>Example:</strong>
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mb-2">
{`Infix:   a + b * c
Postfix: a b c * +`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="C) Abstract Syntax Tree (AST) vs DAG">
          <p className="p-text mb-2">
            <strong>Abstract Syntax Tree (AST):</strong> A tree representation where internal nodes are operators and leaf nodes are operands.
          </p>
          <p className="p-text mb-4">
            <strong>Directed Acyclic Graph (DAG):</strong> A more compact version of an AST where common subexpressions are shared. Each subexpression has only ONE node, even if it appears multiple times in the expression.
          </p>
          
          <div className="overflow-x-auto my-3">
            <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
              <thead>
                <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                  <th className="p-2 font-bold text-[#c7a669]">Feature</th>
                  <th className="p-2 font-bold text-[#c7a669]">AST</th>
                  <th className="p-2 font-bold text-[#c7a669]">DAG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#c7a669]/10">
                  <td className="p-2 font-bold">Node duplication</td>
                  <td className="p-2">Duplicates nodes for repeated subexpressions.</td>
                  <td className="p-2">Shares nodes for repeated subexpressions.</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Memory efficiency</td>
                  <td className="p-2">Less efficient (larger size).</td>
                  <td className="p-2">More efficient (compact representation).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ExpandingBox>
      </div>
    </div>
  );
};
