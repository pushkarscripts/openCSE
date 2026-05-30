import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch25Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Basic Blocks & Flow Graphs</h2>
      
      <p className="p-text">
        A <strong>Basic Block</strong> is a straight-line sequence of code with only one entry point and one exit point. Execution always starts at the first instruction and flows sequentially to the last instruction, with no branches in or out in the middle.
      </p>

      <ExpandingBox title="Algorithm to Identify Leaders (Basic Block Starts)">
        <p className="p-text mb-2">
          To partition a sequence of three-address code into basic blocks, we first identify <strong>Leaders</strong> (the first instruction of a block):
        </p>
        <ul className="list-decimal list-inside p-text space-y-2.5 ml-2 font-semibold text-[#ebdcb0]">
          <li>The FIRST statement of the program is a leader.</li>
          <li>Any statement that is the TARGET of a goto (conditional or unconditional jump) is a leader.</li>
          <li>Any statement that IMMEDIATELY FOLLOWS a goto is a leader.</li>
        </ul>
        <p className="p-text mt-3">
          <strong>Block Formation:</strong> Each leader starts a new basic block which extends up to (but not including) the next leader.
        </p>
      </ExpandingBox>

      <h2 className="section-heading">Flow Graphs</h2>
      <p className="p-text">
        A <strong>Flow Graph</strong> is a directed graph where:
      </p>
      <ul className="list-disc list-inside p-text space-y-1 ml-4 mb-4">
        <li><strong>Nodes</strong> = Basic Blocks</li>
        <li><strong>Edges</strong> = Possible control flow (branches) between blocks. An edge B1 → B2 exists if B2 can immediately follow B1 in execution (either by a fall-through or a jump target).</li>
      </ul>

      <ExpandingBox title="Reducible Flow Graphs">
        <p className="p-text">
          A flow graph is <strong>Reducible</strong> if its edges can be cleanly partitioned into two disjoint sets:
        </p>
        <ul className="list-disc list-inside p-text space-y-2 ml-4 mt-2">
          <li><strong>Forward Edges:</strong> These form an acyclic graph where every node is reachable from the entry node.</li>
          <li><strong>Back Edges:</strong> An edge <code>(a, b)</code> where node <code>b</code> DOMINATES node <code>a</code> (meaning <code>b</code> must be executed before <code>a</code> can be reached). Back edges identify natural loops.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="Dominators & Dominator Tree">
        <p className="p-text mb-2">
          Node <strong>D</strong> dominates Node <strong>N</strong> (written as <code>D dom N</code>) if EVERY path from the entry node to N must go through D.
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li>The Entry node dominates ALL nodes.</li>
          <li>Dominance is transitive: if D dom X and X dom N, then D dom N.</li>
          <li>Each node (except entry) has exactly one <strong>Immediate Dominator</strong> — the closest strict dominator on the path.</li>
        </ul>
        <p className="p-text mt-2">
          A <strong>Dominator Tree</strong> is a tree where the root is the entry node, and each node&apos;s parent is its immediate dominator. It is heavily used in compilers to find natural loops.
        </p>
      </ExpandingBox>
    </div>
  );
};
