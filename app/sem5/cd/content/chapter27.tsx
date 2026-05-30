import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch27Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Loop Optimizations</h2>
      <p className="p-text">
        Loops account for the majority of execution time in a typical program. Therefore, compilers spend significant effort optimizing the instructions inside and around loops.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Loop Unrolling">
          <p className="p-text">
            <strong>Loop Unrolling</strong> reduces the overhead of loop control (branch instructions, condition checks, and counter updates) by replicating the loop body multiple times and adjusting the iteration step accordingly.
          </p>
          <div className="mt-3 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-[#c7a669] mb-1">Before Unrolling</p>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`for (i = 0; i < 100; i++) {
    a[i] = b[i] + c[i];
}`}
              </pre>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#c7a669] mb-1">After Unrolling (Factor 4)</p>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`for (i = 0; i < 100; i += 4) {
    a[i]   = b[i]   + c[i];
    a[i+1] = b[i+1] + c[i+1];
    a[i+2] = b[i+2] + c[i+2];
    a[i+3] = b[i+3] + c[i+3];
}`}
              </pre>
            </div>
          </div>
          <p className="p-text mt-3"><strong>Advantages:</strong> Reduces branch overhead (25 iterations instead of 100), increases Instruction Level Parallelism (ILP), and improves cache locality.</p>
          <p className="p-text"><strong>Disadvantages:</strong> Increases code size (could cause cache misses) and requires remainder handling if the count isn&apos;t divisible by the factor.</p>
        </ExpandingBox>

        <ExpandingBox title="2. Loop Jamming (Fusion)">
          <p className="p-text">
            <strong>Loop Jamming</strong> merges two or more loops that have the SAME loop bounds and no conflicting data dependencies into a SINGLE loop.
          </p>
          <div className="mt-3 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-[#c7a669] mb-1">Before Jamming</p>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`for (i = 0; i < N; i++) {
    a[i] = b[i] * 2;
}
for (i = 0; i < N; i++) {
    c[i] = a[i] + 5;
}`}
              </pre>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#c7a669] mb-1">After Jamming</p>
              <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`for (i = 0; i < N; i++) {
    a[i] = b[i] * 2;
    c[i] = a[i] + 5;
}`}
              </pre>
            </div>
          </div>
          <p className="p-text mt-3"><strong>Advantages:</strong> Reduces loop overheads, improves cache reuse, and enables further optimization across the fused body.</p>
        </ExpandingBox>

        <ExpandingBox title="3. Code Motion (Loop-Invariant Code Motion)">
          <p className="p-text">
            Moves computations that produce the exact same result every iteration OUTSIDE the loop body so they are only calculated once.
          </p>
        </ExpandingBox>

        <ExpandingBox title="4. Induction Variable Elimination & Strength Reduction">
          <p className="p-text">
            <strong>Induction Variables:</strong> Variables that change by a constant amount each iteration. The compiler identifies and eliminates redundant ones.
          </p>
          <p className="p-text mt-2">
            <strong>Reduction in Strength:</strong> Replacing an expensive operation (like multiplication) with a cheaper one (like addition) inside the loop.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`// Instead of:  j = i * 4  (where i increments by 1)
// We use:      j = j + 4  (cheaper addition)`}
          </pre>
        </ExpandingBox>
      </div>
    </div>
  );
};
