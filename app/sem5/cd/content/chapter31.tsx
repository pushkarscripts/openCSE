import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch31Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Architecture Dependent Code Improvement</h2>
      <p className="p-text">
        Unlike machine-independent optimizations that focus on the logic of the code, <strong>architecture-dependent code improvement</strong> tailors the generated code to the specific hardware characteristics of the target machine. This includes optimizing for the CPU pipeline, cache memory hierarchy, and instruction set.
      </p>

      <ExpandingBox title="1. Instruction Scheduling (Pipelining)">
        <p className="p-text mb-2">
          Pipelining allows a CPU to execute multiple instructions simultaneously by overlapping their execution stages (e.g., Fetch &rarr; Decode &rarr; Execute &rarr; Write-back). However, this can be interrupted by hazards:
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li><strong>Data Hazards:</strong> An instruction depends on the result of a previous, unfinished instruction.</li>
          <li><strong>Control Hazards:</strong> A branch instruction causes the pipeline to fetch the wrong instructions.</li>
        </ul>
        
        <p className="p-text mt-4 mb-2 font-semibold text-[#c7a669]">Instruction Scheduling Solution:</p>
        <p className="p-text">
          The compiler reorders instructions to fill pipeline &quot;slots&quot; that would otherwise be wasted on stalls.
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`// Example Without Scheduling (causes stall)
LOAD  R1, A        ; 3-cycle latency
ADD   R2, R1, R3   ; <--- stalls waiting for R1
STORE R2, B

// Example With Scheduling (stalls eliminated)
LOAD  R1, A        ; start load
ADD   R4, R5, R6   ; independent instruction fills the slot
MOV   R7, #1       ; another independent instruction
ADD   R2, R1, R3   ; now R1 is ready — no stall!
STORE R2, B`}
        </pre>
      </ExpandingBox>

      <ExpandingBox title="2. Loop Optimization for Cache Memory">
        <p className="p-text mb-2">
          Cache memory is much faster than RAM. Programs that access memory in cache-friendly patterns run significantly faster. 
        </p>
        <ul className="list-decimal list-inside p-text space-y-3 ml-2">
          <li>
            <strong>Loop Interchange:</strong> Swaps the order of nested loop indices to improve spatial locality (e.g., accessing arrays in row-major order rather than column-major).
          </li>
          <li>
            <strong>Loop Tiling (Blocking):</strong> Divides the iteration space into small tiles that fit completely into the cache, improving data reuse (commonly used in matrix multiplication).
          </li>
          <li>
            <strong>Loop Fusion:</strong> Combines two adjacent loops with the same iteration range into one loop to reduce loop overhead and improve data reuse.
          </li>
          <li>
            <strong>Loop Unrolling:</strong> Replicates the loop body multiple times, reducing branch overhead and enabling more instruction-level parallelism.
          </li>
          <li>
            <strong>Loop Jamming:</strong> Combines multiple loops into one (similar to fusion) to reduce control overhead and improve register reuse.
          </li>
        </ul>
      </ExpandingBox>
    </div>
  );
};
