import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch17Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">S-Attributed and L-Attributed Definitions</h2>
      <p className="p-text">
        To evaluate attributes efficiently during parsing, we restrict our Syntax Directed Definitions (SDDs) to specific subclasses. The two most important subclasses are <strong>S-attributed</strong> and <strong>L-attributed</strong> definitions.
      </p>

      <h2 className="section-heading">S-Attributed Definitions</h2>
      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text bg-black/10 rounded">
        <h4 className="font-bold text-[#c7a669] mb-1">Definition</h4>
        An SDD is <strong>S-attributed</strong> if it uses <strong>only synthesized attributes</strong>.
      </div>
      <p className="p-text">
        Every semantic rule in an S-attributed SDD computes a synthesized attribute for the nonterminal on the left-hand side of the production.
      </p>
      <ul className="list-disc list-inside p-text space-y-1.5 ml-4 my-3">
        <li><strong>Evaluation Order:</strong> Can be evaluated in a single bottom-up pass during LR parsing.</li>
        <li><strong>Traversal:</strong> Postorder traversal of the parse tree.</li>
        <li><strong>Implementation:</strong> Typically managed by maintaining a parallel stack containing attribute values alongside the parser&apos;s state stack.</li>
      </ul>

      <h2 className="section-heading">L-Attributed Definitions</h2>
      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text bg-black/10 rounded">
        <h4 className="font-bold text-[#c7a669] mb-1">Definition</h4>
        An SDD is <strong>L-attributed</strong> if for every production <code>A &rarr; X_1 X_2 ... X_n</code>, each inherited attribute of <code>X_j</code> depends only on:
        <ol className="list-decimal list-inside mt-2 space-y-1 ml-2">
          <li>The inherited attributes of <code>A</code> (the parent).</li>
          <li>Any attributes (synthesized or inherited) of symbols <code>X_1, X_2, ..., X_(j-1)</code> located to the <strong>left</strong> of <code>X_j</code> in the production body.</li>
        </ol>
      </div>
      <p className="p-text">
        L-attributed definitions permit inherited attributes but enforce a strict <strong>left-to-right dependency</strong> to ensure single-pass evaluation.
      </p>
      <ul className="list-disc list-inside p-text space-y-1.5 ml-4 my-3">
        <li><strong>Evaluation Order:</strong> Can be evaluated in a single left-to-right depth-first traversal.</li>
        <li><strong>Parser Compatibility:</strong> Highly compatible with LL (top-down) parsers and can also be evaluated during LR (bottom-up) parsing using specialized translation techniques.</li>
        <li><strong>Relationship:</strong> All S-attributed definitions are, by definition, L-attributed as well (since they have zero inherited attributes).</li>
      </ul>

      <h2 className="section-heading">Comparison Table</h2>
      <ExpandingBox title="S-Attributed vs L-Attributed Definitions" defaultOpen={true}>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Property</th>
                <th className="p-2 font-bold text-[#c7a669]">S-Attributed</th>
                <th className="p-2 font-bold text-[#c7a669]">L-Attributed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Attribute Types</td>
                <td className="p-2">Only Synthesized</td>
                <td className="p-2">Synthesized + Inherited (with left-dependency restriction)</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Tree Traversal</td>
                <td className="p-2">Postorder (Bottom-Up)</td>
                <td className="p-2">Left-to-Right Depth-First (Top-Down/Bottom-Up)</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Compatible Parsers</td>
                <td className="p-2">LR parsers (LALR, SLR, CLR)</td>
                <td className="p-2">LL parsers, also LR parsers</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Inherited Support?</td>
                <td className="p-2">No</td>
                <td className="p-2">Yes (restricted flow)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Typical Use Case</td>
                <td className="p-2">Expression evaluation, simple code generation</td>
                <td className="p-2">Type checking, scoped translation, nested declarations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text">
        <h4 className="font-bold text-[#c7a669] mb-1">Exam Tip</h4>
        If asked how attribute evaluation is implemented:
        <ul className="list-disc list-inside mt-2 space-y-1.5 ml-2">
          <li><strong>For S-attributed:</strong> Use a parallel value stack in an LR parser. Values are pushed/popped alongside grammar states.</li>
          <li><strong>For L-attributed:</strong> In recursive descent (LL) parsers, inherited attributes are passed as function parameters, and synthesized attributes are returned as function values.</li>
        </ul>
      </div>
    </div>
  );
};
