import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch18Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Evaluation Order &amp; Dependency Graphs</h2>
      <p className="p-text">
        Before attributes can be evaluated, the compiler must determine a valid order of evaluation. This is done by analyzing attribute dependencies across the parse tree.
      </p>

      <h2 className="section-heading">Dependency Graphs</h2>
      <p className="p-text">
        A <strong>Dependency Graph</strong> is a directed graph that represents the flow of information among the attribute instances in a parse tree.
      </p>

      <ExpandingBox title="Rules for Constructing a Dependency Graph" defaultOpen={true}>
        <ul className="list-disc list-inside p-text space-y-2 ml-2">
          <li>Create a node in the dependency graph for each attribute instance associated with each node in the parse tree.</li>
          <li>For each semantic rule <code>b := f(c_1, c_2, ..., c_k)</code> associated with a production at a node:
            <ul className="list-disc list-inside mt-1 ml-4 space-y-1 text-sm text-[#ebdcb0]">
              <li>Draw a directed edge from each <code>c_i</code> to <code>b</code>.</li>
              <li>This directed edge indicates that <code>c_i</code> must be computed before <code>b</code>.</li>
            </ul>
          </li>
          <li>If the resulting dependency graph is a **Directed Acyclic Graph (DAG)**, a topological sort will yield a valid evaluation order.</li>
          <li>If the dependency graph contains a **CYCLE**, the SDD is circular and cannot be evaluated.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading">Circularity and Topological Sort</h2>
      <p className="p-text">
        A topological sort of a DAG is any linear ordering of its nodes such that if there is an edge from node <code>U</code> to node <code>V</code>, then <code>U</code> appears before <code>V</code> in the ordering.
      </p>
      <div className="bg-black/25 border border-[#c7a669]/20 p-4 rounded font-mono text-sm text-[#e2d1c1] my-3">
        <strong>Circularity Detection:</strong>
        <p className="text-sm font-sans mt-2">
          A compiler generator (like Yacc or Bison) checks statically whether a grammar is circular. Circular SDDs represent recursive equations with no base case (e.g. <code>A.val = B.val</code> and <code>B.val = A.val + 1</code>) and are rejected.
        </p>
      </div>

      <h2 className="section-heading">Methods of Evaluating Attributes</h2>
      <p className="p-text">
        Compilers utilize different execution strategies depending on the attributes&apos; structural dependencies:
      </p>

      <ExpandingBox title="Evaluation Strategies Comparison">
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Method</th>
                <th className="p-2 font-bold text-[#c7a669]">Description</th>
                <th className="p-2 font-bold text-[#c7a669]">Advantages</th>
                <th className="p-2 font-bold text-[#c7a669]">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Parse-tree based (Dynamic)</td>
                <td className="p-2">Builds the complete parse tree, builds the dependency graph, performs a topological sort, and evaluates attributes in that order.</td>
                <td className="p-2 text-green-300">Works for any non-circular SDD.</td>
                <td className="p-2 text-red-300">Memory intensive; requires keeping the full tree in memory; multi-pass.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Rule-based (Static)</td>
                <td className="p-2">The compiler-compiler analyzes the grammar at compile-generation time and determines a fixed evaluation order.</td>
                <td className="p-2 text-green-300">Fast at compile time; no runtime dependency graph required.</td>
                <td className="p-2 text-red-300">Order is statically fixed for all programs.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Oblivious (Postorder)</td>
                <td className="p-2">The evaluation order is independent of actual attributes; it always runs in postorder.</td>
                <td className="p-2 text-green-300">Extremely simple; matches standard parser stack behavior.</td>
                <td className="p-2 text-red-300">Correct only for S-attributed SDDs.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">On-the-fly (Single-Pass)</td>
                <td className="p-2">Evaluates attributes incrementally as parsing proceeds, discarding tree nodes.</td>
                <td className="p-2 text-green-300">Highly efficient; fits in a single pass; minimal memory footprint.</td>
                <td className="p-2 text-red-300">Only works for L-attributed SDDs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>
    </div>
  );
};
