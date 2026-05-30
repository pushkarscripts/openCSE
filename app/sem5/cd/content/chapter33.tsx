import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch33Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Target Code Generator Design</h2>
      <p className="p-text">
        Target code generation is the final compiler phase. It translates the intermediate representation into the target machine&apos;s instruction set. Output can be absolute machine code, relocatable machine code, or assembly language.
      </p>

      <ExpandingBox title="Design Issues in Code Generator">
        <ul className="list-disc list-inside p-text space-y-2 ml-4">
          <li><strong>Input to Code Generator:</strong> Must ensure correctness and exact form of the IR.</li>
          <li><strong>Memory Management:</strong> Mapping names to specific runtime addresses and managing stack frames.</li>
          <li><strong>Instruction Selection:</strong> Choosing the most efficient machine instructions.</li>
          <li><strong>Register Allocation:</strong> Making optimal use of limited fast registers.</li>
          <li><strong>Evaluation Order:</strong> The order of operations heavily affects register requirements.</li>
          <li><strong>Cost Model:</strong> Accurately measuring the performance cost of instruction sequences to guide optimization choices.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="A Simple Code Generator">
        <p className="p-text mb-2">
          A basic code generator processes three-address statements and maintains two important descriptors:
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 mb-4 text-sm text-[#ebdcb0]">
          <li><strong>Register Descriptor:</strong> Tracks what variable is currently held in each register.</li>
          <li><strong>Address Descriptor:</strong> Tracks where (in a register or in memory) the current value of each variable is.</li>
        </ul>
        <p className="p-text font-semibold text-[#c7a669]">The getReg() Function</p>
        <p className="p-text mb-2 text-sm">
          For an instruction <code>x = y op z</code>, the generator decides which registers to use:
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li>If <code>y</code> is already in a register, use it; else load <code>y</code>.</li>
          <li>If <code>z</code> is already in a register, use it; else load <code>z</code>.</li>
          <li>If <code>x</code> has a register allocated, use it; else find a free register or spill one to memory.</li>
        </ul>
      </ExpandingBox>
    </div>
  );
};
