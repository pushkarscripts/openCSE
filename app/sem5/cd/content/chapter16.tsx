import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch16Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Syntax Directed Translation Schemes (SDT)</h2>
      <p className="p-text">
        A <strong>Syntax Directed Translation Scheme (SDT)</strong> is a context-free grammar with semantic actions embedded directly inside the production bodies. These actions are enclosed in curly braces <code>&#123; &#125;</code> and execute at specific points during parsing.
      </p>
      <p className="p-text">
        While an SDD acts as a pure mathematical specification (defining <em>what</em> to compute), an SDT serves as an implementation recipe (defining <em>when</em> to compute).
      </p>

      <div className="border-l-4 border-[#ebdcb0] bg-[#ebdcb0]/5 border-solid p-4 my-4 rounded text-[#e2d1c1]">
        <h4 className="font-bold text-[#c7a669] mb-1">Key Distinction</h4>
        <ul className="list-disc list-inside space-y-1.5 text-sm">
          <li><strong>SDD:</strong> Semantic rules are listed separately from the grammar. No execution order is enforced.</li>
          <li><strong>SDT:</strong> Semantic actions are embedded in the production bodies. Their exact position determines when they execute during a traversal of the parse tree.</li>
        </ul>
      </div>

      <h2 className="section-heading">SDT for Boolean Expressions with Backpatching</h2>
      <p className="p-text">
        In intermediate code generation, boolean expressions are often translated to jumping code (conditional branches). <strong>Backpatching</strong> is a technique where placeholder jump targets are filled in later when the target labels become known.
      </p>
      <p className="p-text">
        We use three functions:
      </p>
      <ul className="list-disc list-inside p-text space-y-1.5 ml-4 mb-4">
        <li><code>makelist(quad)</code>: Creates a new list containing only the index <code>quad</code>.</li>
        <li><code>merge(list1, list2)</code>: Concatenates two lists and returns the merged list.</li>
        <li><code>backpatch(list, target)</code>: Fills in <code>target</code> as the destination label for all instructions in <code>list</code>.</li>
      </ul>

      <ExpandingBox title="SDT Scheme for Boolean Expressions" defaultOpen={true}>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Production</th>
                <th className="p-2 font-bold text-[#c7a669]">Embedded Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">B &rarr; B_1 or M B_2</td>
                <td className="p-2 font-mono">
                  backpatch(B_1.falselist, M.quad);
                  <br />
                  B.truelist = merge(B_1.truelist, B_2.truelist);
                  <br />
                  B.falselist = B_2.falselist;
                </td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">B &rarr; B_1 and M B_2</td>
                <td className="p-2 font-mono">
                  backpatch(B_1.truelist, M.quad);
                  <br />
                  B.truelist = B_2.truelist;
                  <br />
                  B.falselist = merge(B_1.falselist, B_2.falselist);
                </td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">B &rarr; not B_1</td>
                <td className="p-2 font-mono">
                  B.truelist = B_1.falselist;
                  <br />
                  B.falselist = B_1.truelist;
                </td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">B &rarr; true</td>
                <td className="p-2 font-mono">
                  B.truelist = makelist(nextquad);
                  <br />
                  emit(&apos;goto _&apos;);
                </td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">B &rarr; false</td>
                <td className="p-2 font-mono">
                  B.falselist = makelist(nextquad);
                  <br />
                  emit(&apos;goto _&apos;);
                </td>
              </tr>
              <tr>
                <td className="p-2 font-mono">M &rarr; &epsilon;</td>
                <td className="p-2 font-mono">M.quad = nextquad;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>
    </div>
  );
};
