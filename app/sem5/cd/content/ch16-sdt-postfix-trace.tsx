import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const NfaToDfaSubsetContent = () => {
  // Wait, let's export SdtPostfixTraceContent from here so page.tsx can import it as:
  // import { SdtPostfixTraceContent } from "../content/ch16-sdt-postfix-trace";
  return (
    <div className="course-content">
      <h2 className="section-heading">SDT Trace: Infix to Postfix</h2>
      <p className="p-text">
        Let us trace how an infix expression is converted into postfix notation during syntax analysis using embedded actions. 
      </p>

      <h2 className="section-heading">SDT Rules for Postfix Translation</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Production</th>
              <th className="p-2 font-bold text-[#c7a669]">Embedded Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">E &rarr; E_1 + T</td>
              <td className="p-2 font-mono">&#123; print(&apos;+&apos;) &#125;</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">E &rarr; T</td>
              <td className="p-2 font-mono"><span className="text-[#ac9e91] font-sans">no action</span></td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">T &rarr; T_1 * F</td>
              <td className="p-2 font-mono">&#123; print(&apos;*&apos;) &#125;</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">T &rarr; F</td>
              <td className="p-2 font-mono"><span className="text-[#ac9e91] font-sans">no action</span></td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">F &rarr; ( E )</td>
              <td className="p-2 font-mono"><span className="text-[#ac9e91] font-sans">no action</span></td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-mono">F &rarr; id</td>
              <td className="p-2 font-mono">&#123; print(id.name) &#125;</td>
            </tr>
            <tr>
              <td className="p-2 font-mono">F &rarr; num</td>
              <td className="p-2 font-mono">&#123; print(num.val) &#125;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-heading">Step-by-Step Execution for: <code>a + b * c</code></h2>
      <p className="p-text">
        Below is the step-by-step reduction trace demonstrating when each print statement is executed:
      </p>

      <ExpandingBox title="Execution Trace Walkthrough" defaultOpen={true}>
        <ol className="list-decimal list-inside p-text space-y-3 ml-2">
          <li>
            <strong>First reduction:</strong> <code>F &rarr; id(a)</code>.
            <br />
            <span className="text-[#ebdcb0] text-sm">Action executed:</span> <code>print(a)</code>.
            <br />
            <span className="text-[#b9fa82] text-sm font-semibold">Output so far:</span> <code>a</code>.
          </li>
          <li>
            <strong>Promote to term:</strong> <code>T &rarr; F</code> (No action).
          </li>
          <li>
            <strong>Promote to expression:</strong> <code>E &rarr; T</code> (No action).
          </li>
          <li>
            <strong>Second reduction:</strong> <code>F &rarr; id(b)</code>.
            <br />
            <span className="text-[#ebdcb0] text-sm">Action executed:</span> <code>print(b)</code>.
            <br />
            <span className="text-[#b9fa82] text-sm font-semibold">Output so far:</span> <code>a b</code>.
          </li>
          <li>
            <strong>Promote to left factor:</strong> <code>T_1 &rarr; F</code> (No action).
          </li>
          <li>
            <strong>Third reduction:</strong> <code>F &rarr; id(c)</code>.
            <br />
            <span className="text-[#ebdcb0] text-sm">Action executed:</span> <code>print(c)</code>.
            <br />
            <span className="text-[#b9fa82] text-sm font-semibold">Output so far:</span> <code>a b c</code>.
          </li>
          <li>
            <strong>Product reduction:</strong> <code>T &rarr; T_1 * F</code>.
            <br />
            <span className="text-[#ebdcb0] text-sm">Action executed:</span> <code>print(*)</code>.
            <br />
            <span className="text-[#b9fa82] text-sm font-semibold">Output so far:</span> <code>a b c *</code>.
          </li>
          <li>
            <strong>Sum reduction:</strong> <code>E &rarr; E_1 + T</code>.
            <br />
            <span className="text-[#ebdcb0] text-sm">Action executed:</span> <code>print(+)</code>.
            <br />
            <span className="text-[#b9fa82] text-sm font-semibold">Final Output:</span> <code>a b c * +</code>.
          </li>
        </ol>
      </ExpandingBox>

      <ExpandingBox title="Execution Order Parse Tree">
        <p className="p-text mb-3">
          The numbered circles indicate the order in which nodes are reduced and their semantic actions are triggered:
        </p>
        <pre className="bg-[#ebdcb0]/5 text-[#e2d1c1] p-4 rounded font-mono text-sm leading-relaxed border border-[#c7a669]/20">
{`              E [8: print('+')]
             / | \\
            E  +  T [7: print('*')]
            |    / | \\
            T   T  *  F [6: print('c')]
            |   |     |
            F   F     id(c)
            |   |
          id(a) id(b)
          [1:a] [4:b]
          
Reductions occur in this order:
1. F -> id(a)       [Prints 'a']
2. T -> F
3. E -> T
4. F -> id(b)       [Prints 'b']
5. T -> F
6. F -> id(c)       [Prints 'c']
7. T -> T * F       [Prints '*']
8. E -> E + T       [Prints '+']`}
        </pre>
      </ExpandingBox>
    </div>
  );
};

export const SdtPostfixTraceContent = NfaToDfaSubsetContent;
