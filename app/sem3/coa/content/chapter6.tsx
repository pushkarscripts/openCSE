export const Ch6Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VI: Pipelining</span>.
        This module explores the foundational technique used to accelerate processor throughput:
        <strong> Pipelining</strong>. By overlapping the execution of multiple instructions,
        a processor can achieve significant theoretical speedups. Learners will analyze the
        canonical 5-stage MIPS pipeline, identify the &quot;big three&quot; hazards (Structural, Data,
        and Control), and examine exception handling.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. Pipelining Concepts & 5-Stage Execution</h3>

        <p className="p-text">
          Pipelining is an implementation technique where multiple instructions are overlapped
          in execution. It is analogous to a factory assembly line; while one instruction is
          finishing, the next is being processed in a earlier stage.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-4 text-[#e2d1c1]">The Canonical 5-Stage MIPS Pipeline</h4>
        
        {/* Custom Pipelining Diagram */}
        <div className="my-8 overflow-x-auto pb-4">
          <div className="flex flex-row items-start min-w-max gap-4 text-center text-sm font-bold text-[#3a251a]">
            <div className="flex flex-col items-center">
              <div className="bg-[#f0ddb6] border-2 border-[#c7a669] rounded-lg w-28 h-16 flex items-center justify-center shadow-md">
                IF
              </div>
              <p className="mt-2 text-[#e2d1c1] font-normal w-24 whitespace-normal">Instruction Fetch</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-[#f3e7c2] border-2 border-[#c7a669] rounded-lg w-28 h-16 flex items-center justify-center shadow-md">
                ID
              </div>
              <p className="mt-2 text-[#e2d1c1] font-normal w-24 whitespace-normal">Instruction Decode</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-[#fae8d7] border-2 border-[#c7a669] rounded-lg w-28 h-16 flex items-center justify-center shadow-md">
                EX
              </div>
              <p className="mt-2 text-[#e2d1c1] font-normal w-24 whitespace-normal">Execute / Address Calc</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#e8cd9c] border-2 border-[#c7a669] rounded-lg w-28 h-16 flex items-center justify-center shadow-md">
                MEM
              </div>
              <p className="mt-2 text-[#e2d1c1] font-normal w-24 whitespace-normal">Memory Access</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#dcb981] border-2 border-[#c7a669] rounded-lg w-28 h-16 flex items-center justify-center shadow-md">
                WB
              </div>
              <p className="mt-2 text-[#e2d1c1] font-normal w-24 whitespace-normal">Write Back</p>
            </div>
          </div>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Performance Improvement</h4>
        <p className="p-text">
          The ideal speedup from pipelining is equal to the number of stages (<em>k</em>). However,
          due to unequal stage lengths and pipeline overhead, the actual speedup is:
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-4 my-4 font-mono text-center shadow-md text-sm md:text-base border border-[#7a523c]">
          Speedup = Time per instruction (non-pipelined) / Time per instruction (pipelined)
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">2. Pipeline Hazards</h3>

        <p className="p-text mb-4">
          A <strong>hazard</strong> is a situation that prevents the next instruction in the
          stream from executing in its designated clock cycle.
        </p>

        <div className="space-y-6">
          <div className="bg-[#7a523c] border-l-4 border-[#c7a669] text-[#fff7ed] p-5 rounded-r-lg shadow-sm">
            <h4 className="font-bold text-xl text-[#f3e7c2] mb-2">A. Structural Hazards</h4>
            <p className="opacity-95 mb-2">
              Occur when the hardware cannot support a specific combination of instructions in the same clock cycle (resource conflict).
            </p>
            <ul className="list-disc pl-5 opacity-90 text-sm">
              <li><strong>Example:</strong> A single memory unit used for both instructions and data causes a conflict when one instruction fetches code (IF) while another reads data (MEM).</li>
              <li><strong>Solution:</strong> Separate caches for instructions and data (Harvard Architecture).</li>
            </ul>
          </div>

          <div className="bg-[#f0ddb6] border-l-4 border-[#5b3a29] text-[#3a251a] p-5 rounded-r-lg shadow-sm">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">B. Data Hazards</h4>
            <p className="mb-2">
              Occur when an instruction depends on the result of a previous instruction that is still in the pipeline.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Example:</strong> <code className="bg-[#e8cd9c] px-1 rounded">add $s0, $t0, $t1</code> followed immediately by <code className="bg-[#e8cd9c] px-1 rounded">sub $t2, $s0, $t3</code>. The sub needs $s0 before the add writes it back.</li>
              <li><strong>Solution 1:</strong> Forwarding (Bypassing) - passing the result directly from the ALU to the next stage&apos;s input before write-back.</li>
              <li><strong>Solution 2:</strong> Stalling (Bubble) - inserting a delay until data is available.</li>
            </ul>
          </div>

          <div className="bg-[#f3e7c2] border-l-4 border-[#5b3a29] text-[#3a251a] p-5 rounded-r-lg shadow-sm">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">C. Control Hazards (Branch Hazards)</h4>
            <p className="mb-2">
              Occur when the pipeline makes the wrong decision on a branch prediction, or must wait to calculate the target.
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li><strong>Solution:</strong> Branch prediction (Static or Dynamic) or Delayed Branching.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">3. Pipelined Datapath and Registers</h3>

        <p className="p-text">
          To isolate the five stages and allow them to operate independently, <strong>Pipeline Registers</strong>
          are inserted between each stage. These registers store intermediate results and control signals.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left text-[#2b1d0f]">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Register Name</th>
                <th className="border border-[#c7a669] p-3">Location</th>
                <th className="border border-[#c7a669] p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-center">IF/ID</td>
                <td className="border border-[#c7a669] p-3">Between Fetch and Decode</td>
                <td className="border border-[#c7a669] p-3">Holds the fetched instruction and PC + 4</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-center">ID/EX</td>
                <td className="border border-[#c7a669] p-3">Between Decode and Execute</td>
                <td className="border border-[#c7a669] p-3">Holds register values, sign-extended immediate, and control signals</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-center">EX/MEM</td>
                <td className="border border-[#c7a669] p-3">Between Execute and Memory</td>
                <td className="border border-[#c7a669] p-3">Holds ALU result, branch target, and write-data</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-center">MEM/WB</td>
                <td className="border border-[#c7a669] p-3">Between Memory and Write-Back</td>
                <td className="border border-[#c7a669] p-3">Holds data read from memory or the ALU result</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">4. Handling Exceptions, Interrupts, and Traps</h3>

        <p className="p-text">A robust pipeline must be able to handle unexpected changes in execution flow.</p>

        <ul className="section-list mt-3">
          <li><strong>Exceptions:</strong> Internal events that disrupt execution (e.g., arithmetic overflow).</li>
          <li><strong>Interrupts:</strong> External events from I/O devices (e.g., keyboard, disk).</li>
          <li><strong>Traps:</strong> Software-generated exceptions used for system calls.</li>
        </ul>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-5 my-6 shadow-md border border-[#c7a669]">
          <h4 className="font-bold text-lg mb-3 text-[#f3e7c2]">The Pipeline Challenge</h4>
          <p className="opacity-95 mb-3">When an exception occurs (e.g., an overflow in EX), the pipeline must:</p>
          <ol className="list-decimal pl-6 space-y-2 opacity-95">
            <li><strong>Flush</strong> the instructions following the offending instruction (turn them into <span className="text-[#c7a669] font-mono px-1 text-sm bg-[#3a251a] rounded">nop</span>s).</li>
            <li><strong>Save</strong> the address of the offending instruction in the <strong>Exception Program Counter (EPC)</strong>.</li>
            <li><strong>Transfer Control</strong> to a dedicated Exception Handler at a pre-defined memory address.</li>
          </ol>
        </div>
      </section>

    </div>
  );
};