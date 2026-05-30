import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch26Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Live Variable Analysis</h2>
      <p className="p-text">
        Live Variable Analysis is a global data-flow analysis used to determine which variables are &quot;live&quot; (hold a value that may be needed in the future) at each point in a program. It is critical for register allocation and dead code elimination.
      </p>

      <ExpandingBox title="Step 1: Compute USE[B] and DEF[B]">
        <p className="p-text mb-2">
          For each basic block <strong>B</strong>, we compute:
        </p>
        <ul className="list-disc list-inside p-text space-y-2 ml-4">
          <li><strong>USE[B]:</strong> The set of variables that are read (used) in block B <em>before</em> they are overwritten (defined) in that same block.</li>
          <li><strong>DEF[B]:</strong> The set of variables that are written to (defined) in block B prior to any use of that variable in the block.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading">Solved PYQs: USE and DEF Sets</h2>
      
      <ExpandingBox title="Winter 2024 Example">
        <p className="p-text mb-3">
          In this flow graph, variables were defined and used across basic blocks. Below is the computed result:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Block</th>
                <th className="p-2 font-bold text-[#c7a669]">USE</th>
                <th className="p-2 font-bold text-[#c7a669]">DEF</th>
                <th className="p-2 font-bold text-[#c7a669]">Successors</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B1</td>
                <td className="p-2">∅</td>
                <td className="p-2">a, b</td>
                <td className="p-2">B2, B3</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B2</td>
                <td className="p-2">b</td>
                <td className="p-2">c</td>
                <td className="p-2">B3</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B3</td>
                <td className="p-2">a, c</td>
                <td className="p-2">d</td>
                <td className="p-2">B4</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B4</td>
                <td className="p-2">d</td>
                <td className="p-2">a</td>
                <td className="p-2">B5</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">B5</td>
                <td className="p-2">a</td>
                <td className="p-2">∅</td>
                <td className="p-2">EXIT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <ExpandingBox title="Summer 2024 Example">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Block</th>
                <th className="p-2 font-bold text-[#c7a669]">USE</th>
                <th className="p-2 font-bold text-[#c7a669]">DEF</th>
                <th className="p-2 font-bold text-[#c7a669]">Successors</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B1</td>
                <td className="p-2">j</td>
                <td className="p-2">i</td>
                <td className="p-2">B2</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B2</td>
                <td className="p-2">i, v</td>
                <td className="p-2">i, t1, t2</td>
                <td className="p-2">B3, B4</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B3</td>
                <td className="p-2">j</td>
                <td className="p-2">j</td>
                <td className="p-2">B5</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B4</td>
                <td className="p-2">i</td>
                <td className="p-2">a</td>
                <td className="p-2">B5</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">B5</td>
                <td className="p-2">i, j</td>
                <td className="p-2">i, t3, t4</td>
                <td className="p-2">B6</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">B6</td>
                <td className="p-2">j</td>
                <td className="p-2">a</td>
                <td className="p-2">B2 (Loop Back)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>
    </div>
  );
};
