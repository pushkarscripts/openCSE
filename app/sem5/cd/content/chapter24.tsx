import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch24Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Introduction to Code Optimization</h2>
      <p className="p-text">
        <strong>Code Optimization</strong> is the phase in a compiler that attempts to improve the intermediate code so that the final machine code will run faster or take up less space (or both), without changing the program&apos;s output or meaning.
      </p>

      <ExpandingBox title="Goals of Optimization">
        <ul className="list-disc list-inside p-text space-y-2.5 ml-2">
          <li><strong>Execution Speed:</strong> Make the code run faster (e.g., by moving code out of loops).</li>
          <li><strong>Code Size:</strong> Reduce the memory footprint of the program, which is crucial for embedded systems.</li>
          <li><strong>Energy Efficiency:</strong> Fewer instructions generally lead to lower power consumption.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="Key Principles of Optimization">
        <ul className="list-disc list-inside p-text space-y-2.5 ml-2">
          <li><strong>Preserve Semantics:</strong> The optimized code MUST produce the exact same output and side effects as the original code for all valid inputs.</li>
          <li><strong>Profitability:</strong> The optimization should noticeably improve performance on average.</li>
          <li><strong>Compile-time Efficiency:</strong> The optimization process itself should not take an unreasonable amount of time during compilation.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading">Scope of Optimization</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Optimization Type</th>
              <th className="p-2 font-bold text-[#c7a669]">Scope</th>
              <th className="p-2 font-bold text-[#c7a669]">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Local Optimization</td>
              <td className="p-2">Within a single Basic Block.</td>
              <td className="p-2">DAG construction, Peephole optimization.</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Global Optimization</td>
              <td className="p-2">Across basic blocks within a single function.</td>
              <td className="p-2">Live variable analysis, Global common subexpression elimination.</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Inter-procedural</td>
              <td className="p-2">Across multiple functions / procedures.</td>
              <td className="p-2">Function inlining, Inter-procedural constant propagation.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
