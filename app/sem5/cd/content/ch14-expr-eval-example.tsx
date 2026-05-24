import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const LexicalAnalyzerGenContent = () => {
  // Wait, let's look at the filename mapping in page.tsx for ch14-expr-eval-example:
  // "ch4-lexical-analyzer-gen": LexicalAnalyzerGenContent,
  // Oh! Wait!
  // In page.tsx:
  // "ch4-lexical-analyzer-gen": LexicalAnalyzerGenContent,
  // We need to name the exported component for ch14-expr-eval-example. Let's make sure it matches what we import.
  // In implementation_plan.md I proposed:
  // ch14-expr-eval-example -> Let's name the component: ExprEvalExampleContent
  // Let's verify what I proposed or what would make sense. I will import ExprEvalExampleContent in page.tsx.
  // Let's export ExprEvalExampleContent from here!
  return (
    <div className="course-content">
      <h2 className="section-heading">Worked Example: Expression Evaluation</h2>
      <p className="p-text">
        Let us trace how an expression is parsed and evaluated using only synthesized attributes. We will use a standard arithmetic grammar with a synthesized attribute <code>.val</code>.
      </p>

      <h2 className="section-heading">Grammar &amp; Semantic Rules</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Production Rule</th>
              <th className="p-2 font-bold text-[#c7a669]">Semantic Rule (Synthesized <code>.val</code>)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">L &rarr; E \n</td>
              <td className="p-2 font-mono">L.val = E.val; print(L.val)</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">E &rarr; E_1 + T</td>
              <td className="p-2 font-mono">E.val = E_1.val + T.val</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">E &rarr; T</td>
              <td className="p-2 font-mono">E.val = T.val</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">T &rarr; T_1 * F</td>
              <td className="p-2 font-mono">T.val = T_1.val * F.val</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">T &rarr; F</td>
              <td className="p-2 font-mono">T.val = F.val</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">F &rarr; ( E )</td>
              <td className="p-2 font-mono">F.val = E.val</td>
            </tr>
            <tr>
              <td className="p-2 font-mono">F &rarr; digit</td>
              <td className="p-2 font-mono">F.val = digit.lexval</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-heading">Step-by-Step Trace of: <code>3 + 5 * 2</code></h2>
      <p className="p-text">
        Here is how the compiler evaluates <code>3 + 5 * 2</code> during a bottom-up (postorder) traversal of the parse tree:
      </p>

      <ExpandingBox title="Bottom-Up Evaluation Walkthrough" defaultOpen={true}>
        <ol className="list-decimal list-inside p-text space-y-3 ml-2">
          <li>
            <strong>Lexical Scan:</strong> Lexer yields the tokens: 
            <code className="bg-black/30 px-1 rounded text-[#ebdcb0] ml-1">digit(3)</code>, 
            <code className="bg-black/30 px-1 rounded text-[#ebdcb0] ml-1">+</code>, 
            <code className="bg-black/30 px-1 rounded text-[#ebdcb0] ml-1">digit(5)</code>, 
            <code className="bg-black/30 px-1 rounded text-[#ebdcb0] ml-1">*</code>, 
            <code className="bg-black/30 px-1 rounded text-[#ebdcb0] ml-1">digit(2)</code>.
          </li>
          <li>
            <strong>First leaf reduction:</strong> <code>F &rarr; digit(3)</code>. 
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>F.val = digit.lexval = 3</code>.
          </li>
          <li>
            <strong>Promote term:</strong> <code>T &rarr; F</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>T.val = F.val = 3</code>.
          </li>
          <li>
            <strong>Initialize expression:</strong> <code>E &rarr; T</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>E.val = T.val = 3</code> (Left subtree completed).
          </li>
          <li>
            <strong>Second leaf reduction:</strong> <code>F &rarr; digit(5)</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>F.val = 5</code>.
          </li>
          <li>
            <strong>Promote second term:</strong> <code>T_1 &rarr; F</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>T_1.val = 5</code>.
          </li>
          <li>
            <strong>Third leaf reduction:</strong> <code>F &rarr; digit(2)</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>F.val = 2</code>.
          </li>
          <li>
            <strong>Multiplication reduction:</strong> <code>T &rarr; T_1 * F</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>T.val = T_1.val * F.val = 5 * 2 = 10</code>.
          </li>
          <li>
            <strong>Addition reduction:</strong> <code>E &rarr; E_1 + T</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>E.val = E_1.val + T.val = 3 + 10 = 13</code>.
          </li>
          <li>
            <strong>Halting step:</strong> <code>L &rarr; E \n</code>.
            <br />
            <span className="text-sm text-[#ebdcb0]">Calculation:</span> <code>L.val = 13</code>, triggering the print action.
          </li>
        </ol>
      </ExpandingBox>

      <ExpandingBox title="Parse Tree Structure Visual">
        <p className="p-text mb-3">
          The annotated parse tree showing the values flowing upwards:
        </p>
        <pre className="bg-[#ebdcb0]/5 text-[#e2d1c1] p-4 rounded font-mono text-sm leading-relaxed border border-[#c7a669]/20">
{`         L [val=13]
         |
      E [val=13]
     /   |   \\
E [val=3] +   T [val=10]
   |         /   |   \\
T [val=3] T [val=5] * F [val=2]
   |         |         |
F [val=3] F [val=5] digit [lexval=2]
   |         |
digit(3)  digit(5)`}
        </pre>
      </ExpandingBox>
    </div>
  );
};

export const ExprEvalExampleContent = LexicalAnalyzerGenContent;
