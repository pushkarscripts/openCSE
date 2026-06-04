import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch34Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Peephole Optimization (Unit 5)</h2>
      <p className="p-text">
        Peephole optimization is a local optimization technique performed on a small sliding window (the &quot;peephole&quot;) of generated target code. The compiler examines a few consecutive instructions and replaces them with shorter or faster sequences.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="Common Peephole Techniques">
          <ul className="list-decimal list-inside p-text space-y-3 ml-2">
            <li>
              <strong>Redundant Load/Store Elimination:</strong>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2 rounded font-mono text-xs mt-1">
{`STORE R0, x
LOAD  R0, x    <-- redundant! x is already in R0
--- Replaced by ---
STORE R0, x`}
              </pre>
            </li>
            <li>
              <strong>Algebraic Simplification & Strength Reduction:</strong>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2 rounded font-mono text-xs mt-1">
{`ADD R1, R1, #0   -> eliminated
MUL R1, R1, #2   -> SHL R1, R1, #1 (shift left is faster)`}
              </pre>
            </li>
            <li>
              <strong>Unreachable Code Elimination:</strong>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2 rounded font-mono text-xs mt-1">
{`JMP L1
MOV R1, R2       <-- unreachable! Remove it
L1: ...`}
              </pre>
            </li>
            <li>
              <strong>Flow-of-Control Optimization:</strong>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2 rounded font-mono text-xs mt-1">
{`JMP L1
L1: JMP L2       <-- chain of jumps
--- Replaced by ---
JMP L2           <-- jump directly`}
              </pre>
            </li>
          </ul>
        </ExpandingBox>
      </div>
    </div>
  );
};
