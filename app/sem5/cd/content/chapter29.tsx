import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch29Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Target Code Generation</h2>
      <p className="p-text">
        The code generator takes the intermediate representation (IR) and produces the final target machine language. The output code must preserve the semantics of the original program while making optimal use of the target machine&apos;s resources.
      </p>

      <ExpandingBox title="1. Inputs to the Code Generator">
        <p className="p-text mb-2">
          The code generator requires two main inputs:
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4">
          <li><strong>Intermediate Representation (IR):</strong> Usually Three-Address Code or a DAG.</li>
          <li><strong>Symbol Table:</strong> Provides information about the runtime addresses, data types, and sizes of variables.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="2. Target Programs (Output Form)">
        <p className="p-text mb-2">
          The generator can output code in several formats, depending on the compiler&apos;s design:
        </p>
        <ul className="list-disc list-inside p-text space-y-2 ml-4">
          <li><strong>Absolute Machine Code:</strong> Can be loaded directly into memory and executed immediately. Fast startup, but all addresses are fixed (no linking).</li>
          <li><strong>Relocatable Machine Code:</strong> Object files that contain unresolved symbols. This allows for separate compilation (linking object files together later).</li>
          <li><strong>Assembly Language:</strong> Easier to debug, but requires an additional assembly pass to convert to binary.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="3. Instruction Selection">
        <p className="p-text">
          Instruction selection involves choosing the appropriate target machine instructions for each IR operation. The quality of this mapping significantly impacts performance.
        </p>
        <p className="p-text mt-2 font-semibold">Example for `x = y + z`:</p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 mt-1 text-sm text-[#ebdcb0]">
          <li><strong>Naive approach:</strong> <code>LOAD y, R0</code> &rarr; <code>ADD z, R0</code> &rarr; <code>STORE R0, x</code></li>
          <li><strong>Better approach:</strong> If the CPU supports memory-to-memory addition, one instruction could suffice (e.g., <code>ADD y, z, x</code>).</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="4. Instruction Scheduling / Pipelining">
        <p className="p-text">
          Modern CPUs execute instructions in a pipeline. Instruction scheduling reorders independent instructions to avoid pipeline hazards (stalls) and maximize throughput, without changing the program&apos;s semantics. 
          <br /><br />
          <em>Example:</em> Moving a slow memory load before an unrelated operation so the CPU doesn&apos;t stall waiting for the data to arrive.
        </p>
      </ExpandingBox>

    </div>
  );
};
