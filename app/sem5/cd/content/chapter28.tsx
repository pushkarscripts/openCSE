import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch28Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Peephole Optimization</h2>
      <p className="p-text">
        <strong>Peephole Optimization</strong> is a machine-dependent, <em>local</em> optimization technique applied on a small, sliding window (the &quot;peephole&quot;) of consecutive target code instructions. The optimizer examines 2 to 10 instructions at a time and replaces inefficient sequences with faster or shorter equivalents.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Redundant Instruction Elimination">
          <p className="p-text">
            Removes back-to-back load/store pairs where the result is immediately undone, provided there is no label (entry point) before the second instruction.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`// Original:
STORE R1, a
LOAD  a, R1   <-- Redundant!

// Optimized:
STORE R1, a`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="2. Algebraic Simplifications">
          <p className="p-text">
            Uses simple algebraic identities to eliminate operations entirely.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`x = x + 0;   // Eliminated
y = y * 1;   // Eliminated
z = z / 1;   // Eliminated`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="3. Constant Folding">
          <p className="p-text">
            Evaluates constant expressions at compile time rather than at runtime.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`// Original:
a = 2 * 3.14

// Optimized (at compile time):
a = 6.28`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="4. Strength Reduction">
          <p className="p-text">
            Replaces expensive operations (like multiplication or division) with cheaper equivalents (like addition or bit-shifts).
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`x = y * 2;   // Replace with: x = y + y (or y << 1)
z = x / 2;   // Replace with: z = x >> 1`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="5. Unreachable Code Elimination">
          <p className="p-text">
            Removes instructions that can never be executed (e.g., code appearing immediately after an unconditional jump, with no label).
          </p>
        </ExpandingBox>

        <ExpandingBox title="6. Flow-of-Control Optimization (Jump Chaining)">
          <p className="p-text">
            Simplifies jumps that immediately target other jumps.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`// Original:
     goto L1
     ...
L1:  goto L2

// Optimized:
     goto L2
     ...
L1:  goto L2`}
          </pre>
        </ExpandingBox>
      </div>
    </div>
  );
};
