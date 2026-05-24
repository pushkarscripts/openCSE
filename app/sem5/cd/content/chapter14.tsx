import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch14Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Attribute Grammars</h2>
      <p className="p-text">
        An <strong>Attribute Grammar</strong> is the formal mathematical framework used to specify the semantics of a programming language via a context-free grammar. The idea was introduced by Donald Knuth in 1968 and is the foundational formalism underlying all practical semantic specification in compilers today.
      </p>
      <p className="p-text">
        The core idea is that each grammar symbol can have <strong>attributes</strong> — named values associated with instances of that symbol in the parse tree. Each grammar production has associated <strong>semantic rules</strong> that define how these attribute values are computed.
      </p>

      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text bg-black/10 rounded">
        <h4 className="font-bold text-[#c7a669] mb-1">Formal Definition</h4>
        An Attribute Grammar is a triple <code>AG = (G, A, R)</code> where:
        <ul className="list-disc list-inside mt-2 space-y-1.5 ml-2">
          <li><strong>G = (N, T, P, S)</strong> is a context-free grammar with nonterminals N, terminals T, productions P, and start symbol S.</li>
          <li><strong>A = &#123; A(X) | X is a grammar symbol &#125;</strong> is a finite set of attributes for each symbol.</li>
          <li><strong>R = &#123; R(p) | p is a production in P &#125;</strong> is a set of semantic rules for each production.</li>
        </ul>
      </div>

      <h2 className="section-heading">Types of Attributes</h2>
      <p className="p-text">
        Attributes are divided into two main categories depending on how their values flow through the parse tree:
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Synthesized Attributes">
          <p className="p-text">
            A synthesized attribute of a nonterminal <code>A</code> in a production <code>A &rarr; &alpha;</code> is one whose value is computed from attribute values of children of <code>A</code> in the parse tree, and/or attribute values of terminals in the production body.
          </p>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Direction of Flow: Upward
          </p>
          <p className="p-text italic text-sm">
            Information flows from the leaves toward the root.
          </p>
          <div className="bg-black/25 p-3 rounded border border-[#c7a669]/20 font-mono text-sm mt-3">
            <strong>Common Examples:</strong>
            <ul className="list-disc list-inside mt-1.5 space-y-1">
              <li><code>E.val</code> in an expression grammar (computed from children <code>E1.val</code> and <code>T.val</code>)</li>
              <li><code>E.type</code> in a type-inference grammar (derived from operand types)</li>
              <li><code>T.place</code> in a three-address code generator (the name of the temporary variable holding the result)</li>
              <li><code>digit.lexval</code> (given directly by the lexical analyzer)</li>
            </ul>
          </div>
        </ExpandingBox>

        <ExpandingBox title="2. Inherited Attributes">
          <p className="p-text">
            An inherited attribute of a nonterminal <code>B</code> at position <code>j</code> in a production <code>A &rarr; X_1 X_2 ... X_n</code> is one whose value is computed from attribute values of <code>A</code> (the parent), and/or attribute values of siblings to the <strong>left</strong> of <code>B</code>.
          </p>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Direction of Flow: Downward or Sideways
          </p>
          <p className="p-text italic text-sm">
            Information flows from parents to children, or from left siblings to right siblings.
          </p>
          <div className="bg-black/25 p-3 rounded border border-[#c7a669]/20 font-mono text-sm mt-3">
            <strong>Common Examples:</strong>
            <ul className="list-disc list-inside mt-1.5 space-y-1">
              <li><code>L.in</code> in a declaration grammar (type inherited from a left sibling)</li>
              <li><code>indent.level</code> in a code pretty-printer (current indentation depth passed down)</li>
              <li><code>scope.level</code> in a semantic analyzer (current scope depth passed to child nodes)</li>
            </ul>
          </div>
        </ExpandingBox>
      </div>

      <h2 className="section-heading">Example: Type Propagation (Inherited Attributes)</h2>
      <p className="p-text">
        Inherited attributes are extremely useful for passing context down the tree. Consider a declaration statement like <code>float x, y, z;</code> where the type (float) must be distributed to all identifiers in the list:
      </p>

      <ExpandingBox title="Type Propagation Grammar">
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Production Rule</th>
                <th className="p-2 font-bold text-[#c7a669]">Semantic Rules</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">D &rarr; T L</td>
                <td className="p-2 font-mono">L.in = T.type <span className="text-[#ac9e91] font-sans"> (Inherit type into list)</span></td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">T &rarr; int</td>
                <td className="p-2 font-mono">T.type = integer</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">T &rarr; float</td>
                <td className="p-2 font-mono">T.type = real</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">L &rarr; L1 , id</td>
                <td className="p-2 font-mono">L1.in = L.in; addtype(id.entry, L.in)</td>
              </tr>
              <tr>
                <td className="p-2 font-mono">L &rarr; id</td>
                <td className="p-2 font-mono">addtype(id.entry, L.in)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="p-text mt-3">
          For the input <code>float x, y, z</code>:
        </p>
        <ol className="list-decimal list-inside p-text space-y-1.5 ml-4">
          <li><code>T &rarr; float</code> sets <code>T.type = real</code>.</li>
          <li><code>D &rarr; T L</code> sets <code>L.in = T.type = real</code> (flows down).</li>
          <li>For the list <code>L &rarr; L1 , z</code>, <code>addtype(z, real)</code> is called and <code>L1.in = real</code> is passed left.</li>
          <li>Similarly, for <code>L1 &rarr; L2 , y</code>, <code>addtype(y, real)</code> is called.</li>
          <li>Finally, the list reduces to <code>L2 &rarr; x</code>, executing <code>addtype(x, real)</code>.</li>
        </ol>
      </ExpandingBox>
    </div>
  );
};
