import ExpandingBox from "../components/ExpandingBox";

export const Ch11Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">LR(1) Items &amp; Lookaheads</h2>
      <p className="p-text">
        To build more powerful bottom-up parsers, we include a <strong>lookahead symbol</strong> inside each parsing item. An <strong>LR(1) item</strong> is written as:
      </p>
      <div className="bg-black/20 p-4 rounded border border-[#c7a669]/30 my-4 font-mono text-sm text-center">
        <strong>[A &rarr; &alpha; &bull; &beta;, a]</strong>
      </div>
      <p className="p-text">
        Where <code>A &rarr; &alpha;&beta;</code> is a production, and <code>a</code> is a terminal symbol representing the <strong>lookahead</strong>. The lookahead acts as a gatekeeper: the parser is allowed to reduce <code>A &rarr; &alpha;</code> if and only if the next input terminal is exactly <code>a</code>.
      </p>

      <h2 className="section-heading">CLR(1) vs LALR(1) Parsing</h2>
      <p className="p-text">
        Both CLR(1) and LALR(1) use LR(1) items, but they trade off memory for power in different ways:
      </p>
      <ul className="list-disc list-inside p-text space-y-2 mb-4">
        <li><strong>Canonical LR (CLR/LR(1))</strong>: Keeps every set of LR(1) items as a distinct state. This is the <strong>most powerful</strong> parsing method but creates a massive number of states, making tables very large.</li>
        <li><strong>Look-Ahead LR (LALR(1))</strong>: Merges CLR(1) states that have the same <strong>core</strong> (the same LR(0) items, ignoring the lookaheads). The lookaheads of the merged states are combined (unioned). This retains the small state count of SLR while providing almost the same power as CLR.</li>
      </ul>

      <ExpandingBox title="Algorithm: LR(1) Closure Lookahead Computation">
        <p className="p-text font-bold text-[#c7a669]">
          How to compute the lookahead in CLOSURE(I):
        </p>
        <p className="p-text mt-1">
          If <code>[A &rarr; &alpha; &bull; B &beta;, a]</code> is in the set of items, then for each production <code>B &rarr; &gamma;</code>, we add the item <code>[B &rarr; &bull; &gamma;, b]</code> to the set for every terminal <code>b</code> in:
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2 rounded font-mono text-sm inline-block my-2">
          FIRST(&beta;a)
        </pre>
        <p className="p-text">
          Where <code>&beta;</code> is the sequence of symbols following <code>B</code>, and <code>a</code> is the lookahead of the parent item.
        </p>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Detailed Comparison of LR Parsers">
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse border border-[#c7a669]/40 text-[#e2d1c1] font-mono text-xs">
            <thead>
              <tr className="bg-[#FAE8D7] text-[#1B0D00]">
                <th className="p-2 border border-[#c7a669]/40">Property</th>
                <th className="p-2 border border-[#c7a669]/40">LR(0)</th>
                <th className="p-2 border border-[#c7a669]/40">SLR</th>
                <th className="p-2 border border-[#c7a669]/40">LALR(1)</th>
                <th className="p-2 border border-[#c7a669]/40">CLR(1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">Lookahead</td>
                <td className="p-2 border border-[#c7a669]/40">None</td>
                <td className="p-2 border border-[#c7a669]/40">FOLLOW(A)</td>
                <td className="p-2 border border-[#c7a669]/40">Merged LR(1)</td>
                <td className="p-2 border border-[#c7a669]/40">Exact lookahead</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">States Count</td>
                <td className="p-2 border border-[#c7a669]/40">Fewest</td>
                <td className="p-2 border border-[#c7a669]/40">Same as LR(0)</td>
                <td className="p-2 border border-[#c7a669]/40">Same as LR(0)</td>
                <td className="p-2 border border-[#c7a669]/40">Most (10x more)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">Parsing Power</td>
                <td className="p-2 border border-[#c7a669]/40">Weakest</td>
                <td className="p-2 border border-[#c7a669]/40">Medium-Low</td>
                <td className="p-2 border border-[#c7a669]/40">Medium-High</td>
                <td className="p-2 border border-[#c7a669]/40">Strongest</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">Conflicts</td>
                <td className="p-2 border border-[#c7a669]/40">Many</td>
                <td className="p-2 border border-[#c7a669]/40">Some</td>
                <td className="p-2 border border-[#c7a669]/40">Few</td>
                <td className="p-2 border border-[#c7a669]/40">Zero false conflicts</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">Real-world Use</td>
                <td className="p-2 border border-[#c7a669]/40">None</td>
                <td className="p-2 border border-[#c7a669]/40">Rare</td>
                <td className="p-2 border border-[#c7a669]/40">Bison/Yacc standard</td>
                <td className="p-2 border border-[#c7a669]/40">Research/LLVM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <h2 className="section-heading">Containment Hierarchy</h2>
      <p className="p-text">
        The relationships between grammar families parsed by bottom-up methods follow a strict containment hierarchy:
      </p>
      <div className="bg-black/20 p-4 rounded-lg border border-[#c7a669]/30 font-mono text-sm my-4 text-center">
        LR(0) &sub; SLR &sub; LALR &sub; CLR(1)
      </div>
      <p className="p-text">
        Every LR(0) grammar is also SLR, every SLR grammar is also LALR, and every LALR grammar is also CLR. However, adding more lookahead symbols beyond 1 (e.g. LR(2)) does not increase the class of languages that can be parsed; all deterministic context-free languages can be parsed using just LR(1).
      </p>
    </div>
  );
};
