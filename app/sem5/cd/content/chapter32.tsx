import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch32Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Advanced Register Allocation</h2>
      <p className="p-text">
        Registers are the fastest memory in a computer (access takes ~1 cycle, compared to ~100+ cycles for RAM). The goal of register allocation is to keep as many frequently-used variables as possible in registers. This involves two sub-problems: <strong>Allocation</strong> (which variables) and <strong>Assignment</strong> (which physical registers).
      </p>

      <ExpandingBox title="1. The Labelling Algorithm (Sethi-Ullman)">
        <p className="p-text mb-2">
          This algorithm computes the <em>minimum number of registers needed</em> to evaluate an expression tree bottom-up.
        </p>
        <ul className="list-decimal list-inside p-text space-y-2 ml-4 font-semibold text-[#ebdcb0]">
          <li><strong>Leaves:</strong> Left child = 1, Right child = 0.</li>
          <li><strong>Interior Nodes:</strong> If labels <code>L &ne; R</code>, parent label = <code>max(L, R)</code>.</li>
          <li><strong>Interior Nodes:</strong> If labels <code>L = R</code>, parent label = <code>L + 1</code>.</li>
        </ul>
        
        <p className="p-text mt-4"><strong>Solved Example: </strong> <code>x = (a + b) &minus; (e &minus; (c + d))</code></p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`Step 1 — Build tree & Label:
Leaves: a=1, b=0, e=1, c=1, d=0
(c+d)    : L=1, R=0  -> max(1,0) = 1
(e-(c+d)): L=1, R=1  -> equal -> 1+1 = 2
(a+b)    : L=1, R=0  -> max(1,0) = 1
Root (-) : L=1, R=2  -> max(1,2) = 2

Result: Minimum 2 registers required.`}
        </pre>
      </ExpandingBox>

      <ExpandingBox title="2. Register Allocation via Graph Colouring">
        <p className="p-text mb-2">
          For complex control flows, register allocation is formulated as a graph colouring problem:
        </p>
        <ul className="list-disc list-inside p-text space-y-2 ml-4 text-sm text-[#ebdcb0]">
          <li><strong>Interference Graph:</strong> Nodes are variables. An edge is drawn between two variables if they are live simultaneously.</li>
          <li><strong>Graph Colouring:</strong> Assign colours (registers) such that no two adjacent nodes share the same colour.</li>
          <li>If the graph requires <code>k</code> colours and we have <code>k</code> registers, it is feasible. Otherwise, some variables must be <strong>spilled</strong> (stored in memory).</li>
        </ul>
      </ExpandingBox>
    </div>
  );
};
