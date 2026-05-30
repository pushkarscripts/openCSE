import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch30Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Register Allocation & Ershov Numbers</h2>
      <p className="p-text">
        CPU Registers are the fastest memory locations. Because there are a limited number of them, the compiler must carefully decide which variables reside in registers and which are stored in memory.
      </p>

      <ExpandingBox title="Register Allocation & Assignment">
        <ul className="list-disc list-inside p-text space-y-2 ml-4">
          <li><strong>Register Allocation:</strong> Deciding <em>which</em> variables should be kept in registers at each point in the program.</li>
          <li><strong>Register Assignment:</strong> Deciding <em>which specific physical register</em> to use for each allocated variable.</li>
        </ul>
        <p className="p-text mt-3"><strong>Heuristics Used:</strong></p>
        <ul className="list-disc list-inside p-text space-y-2 ml-4 mt-2">
          <li><strong>Graph Coloring:</strong> Builds an interference graph (nodes = variables, edges = variables that are live at the same time). Allocating registers is equivalent to coloring the graph with <code>k</code> colors.</li>
          <li><strong>Linear Scan:</strong> Scans variables in order of their live range start; assigns a register or spills to memory if full. Fast and used in JIT compilers.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading mt-6">Ershov Numbers Algorithm</h2>
      <p className="p-text">
        The Ershov numbering algorithm assigns a label to each node in an AST. This label determines the <strong>MINIMUM number of registers needed</strong> to evaluate the expression without spilling intermediate results to memory.
      </p>

      <ExpandingBox title="Rules for Assigning Labels">
        <ul className="list-decimal list-inside p-text space-y-2 ml-4 font-semibold text-[#ebdcb0]">
          <li><strong>Leaf Node:</strong> label = 1</li>
          <li>
            <strong>Interior Node with TWO DIFFERENT child labels:</strong> 
            <br />
            If children have labels <code>l1</code> and <code>l2</code> (where <code>l1 &gt; l2</code>), the parent&apos;s label = <code>l1</code> (use the larger).
          </li>
          <li>
            <strong>Interior Node with TWO EQUAL child labels:</strong> 
            <br />
            If children have labels <code>l1 = l2</code>, the parent&apos;s label = <code>l1 + 1</code> (need one more register to hold the first child&apos;s result while computing the second).
          </li>
          <li>
            <strong>Unary Node:</strong> label = child&apos;s label (unchanged).
          </li>
        </ul>
        
        <p className="p-text mt-4"><strong>Code Generation Strategy (Sethi-Ullman):</strong></p>
        <p className="p-text ml-4">Always evaluate the child subtree with the LARGER Ershov number first. This minimizes the total number of registers held hostage during computation.</p>
      </ExpandingBox>
      
      <ExpandingBox title="Example: T4 = (c+d) + (e+f)">
        <ul className="list-none p-text space-y-2 ml-4 font-mono text-sm">
          <li>Leaf c = 1, Leaf d = 1 &rarr; Node &apos;+&apos; = 2</li>
          <li>Leaf e = 1, Leaf f = 1 &rarr; Node &apos;+&apos; = 2</li>
          <li>Root &apos;+&apos; = 3 (since both children require 2 registers)</li>
        </ul>
        <p className="p-text mt-2 font-bold text-[#c7a669]">Minimum registers required: 3</p>
      </ExpandingBox>

    </div>
  );
};
