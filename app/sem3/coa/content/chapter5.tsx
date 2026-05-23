export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module V: Building a Datapath</span>
        . This module uncovers the structural blueprint of the processor core. It explores
        combinational vs. sequential logic elements, control unit design, instruction execution
        pathways for R-type, load, and branch instructions, and the motivations behind transitioning
        to multicycle datapath designs.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. Single-Cycle Datapath & Logic Building Blocks</h3>

        <p className="p-text">
          To construct a functional processor core, hardware designers categorize circuit components
          into two fundamental logic classes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">Combinational Elements</h4>
            <p className="text-[#3a251a] leading-relaxed">
              Logic units that process information instantly without keeping internal memory.
              Outputs depend strictly on current inputs (e.g., ALU, multiplexers, sign-extend hardware).
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">Sequential Elements</h4>
            <p className="text-[#3a251a] leading-relaxed">
              Logic units with built-in storage that preserve state across clock edges.
              Synchronized by an internal system clock (e.g., Register File, Instruction Memory, Data Memory).
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Essential Memory Components</h4>
        <ul className="section-list">
          <li><strong>Instruction Memory:</strong> Holds executable binary instructions. Given a 32-bit address (PC), outputs the corresponding instruction word.</li>
          <li><strong>Register File:</strong> High-speed multi-ported storage hosting 32 general-purpose registers. Allows simultaneous reads from two source registers and one write port per clock edge.</li>
          <li><strong>Data Memory:</strong> Secondary state block for reading or writing application data using calculated address pointers.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">2. Main Control Unit & ALU Signal Design</h3>

        <p className="p-text">
          The <strong>Control Unit</strong> acts as the central orchestrator. It takes the 6-bit
          <strong> Opcode</strong> field (bits 31-26) and decodes it to set binary control lines
          that dictate how multiplexers and memory modules route data.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Central Control Signal Matrix</h4>

        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse border border-[#c7a669] text-[#2b1d0f] text-sm">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-2 text-left">Signal</th>
                <th className="border border-[#c7a669] p-2 text-left">Asserted (1)</th>
                <th className="border border-[#c7a669] p-2 text-left">De-asserted (0)</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-2 font-semibold">RegDst</td>
                <td className="border border-[#c7a669] p-2">Write to rd (bits 15-11)</td>
                <td className="border border-[#c7a669] p-2">Write to rt (bits 20-16)</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-2 font-semibold">ALUSrc</td>
                <td className="border border-[#c7a669] p-2">ALU operand is sign-extended immediate</td>
                <td className="border border-[#c7a669] p-2">ALU operand from Register File (rt)</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-semibold">MemtoReg</td>
                <td className="border border-[#c7a669] p-2">Write Data Memory output to register</td>
                <td className="border border-[#c7a669] p-2">Write ALU output to register</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-2 font-semibold">RegWrite</td>
                <td className="border border-[#c7a669] p-2">Enable register write</td>
                <td className="border border-[#c7a669] p-2">Inhibit register write</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-semibold">MemRead</td>
                <td className="border border-[#c7a669] p-2">Initiate Data Memory read</td>
                <td className="border border-[#c7a669] p-2">Inhibit memory read</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-2 font-semibold">MemWrite</td>
                <td className="border border-[#c7a669] p-2">Initiate Data Memory write</td>
                <td className="border border-[#c7a669] p-2">Inhibit memory write</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-semibold">Branch</td>
                <td className="border border-[#c7a669] p-2">Branch if ALU Zero flag set</td>
                <td className="border border-[#c7a669] p-2">PC advances to PC + 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">Two-Level ALU Decoding Strategy</h4>
        <p className="p-text">
          To keep the main control block simple, MIPS uses a hierarchical decoding scheme:
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-5 my-4 shadow-md border-l-4 border-[#c7a669]">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Level 1:</strong> Main Control Unit evaluates the opcode and outputs a 2-bit <code className="text-yellow-100">ALUOp</code> field</li>
            <li><strong>Level 2:</strong> ALU Control unit processes <code className="text-yellow-100">ALUOp</code> (2 bits) plus the 6-bit <code className="text-yellow-100">Function Field</code> (bits 5-0) to generate the 3-bit ALU control code</li>
          </ol>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">3. Instruction Execution Pathways</h3>

        <p className="p-text">
          A single-cycle datapath completes an entire instruction cycle within one extended clock period.
          Different instruction types follow distinct data paths through the core logic.
        </p>

        <h4 className="font-semibold text-2xl mt-6 mb-4">R-Type Instruction Flow</h4>
        <p className="p-text mb-3"><em>Example: </em><code className="inline-code">add $rd, $rs, $rt</code></p>

        <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 my-4 shadow-sm">
          <ol className="list-decimal pl-6 space-y-2 text-[#3a251a]">
            <li><strong>Fetch:</strong> Instruction Memory pulls the arithmetic command using the PC address</li>
            <li><strong>Decode:</strong> Register File reads contents of source registers rs and rt</li>
            <li><strong>Execute:</strong> ALU receives both register outputs and computes the arithmetic result</li>
            <li><strong>Write-Back:</strong> ALU output is routed back to Register File and saved in destination register rd</li>
          </ol>
        </div>

        <h4 className="font-semibold text-2xl mt-6 mb-4">Load Word Instruction Flow</h4>
        <p className="p-text mb-3"><em>Example: </em><code className="inline-code">lw $rt, offset($rs)</code></p>

        <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 my-4 shadow-sm">
          <ol className="list-decimal pl-6 space-y-2 text-[#3a251a]">
            <li><strong>Fetch & Decode:</strong> Core fetches instruction and reads base address register rs</li>
            <li><strong>Address Calculation:</strong> Sign-extend hardware converts 16-bit immediate into 32-bit value. ALU adds this extended offset to the base address from rs</li>
            <li><strong>Memory Read:</strong> Computed address is passed to Data Memory, which outputs the data word at that location</li>
            <li><strong>Write-Back:</strong> Data word is routed to Register File and saved into register rt</li>
          </ol>
        </div>

        <h4 className="font-semibold text-2xl mt-6 mb-4">Branch If Equal Instruction Flow</h4>
        <p className="p-text mb-3"><em>Example: </em><code className="inline-code">beq $rs, $rt, offset</code></p>

        <div className="bg-[#fae8d7] border border-[#c7a669] rounded-lg p-5 my-4 shadow-sm">
          <ol className="list-decimal pl-6 space-y-2 text-[#3a251a]">
            <li><strong>Fetch & Decode:</strong> Core fetches instruction and reads contents of registers rs and rt</li>
            <li><strong>Comparison:</strong> ALU subtracts rt from rs. If values match, result is zero and the Zero Flag is asserted</li>
            <li><strong>Target Calculation:</strong> Separate adder logic calculates the branch target address:
              <div className="bg-[#e8cd9c] p-2 rounded mt-1 font-mono text-center text-sm text-[#5b3a29]">
                Target Address = (PC + 4) + (Sign-Extended Offset × 4)
              </div>
            </li>
            <li><strong>PC Update:</strong> If <code className="inline-code">Branch AND Zero</code> evaluates true, PC updates to branch target; otherwise PC advances to PC + 4</li>
          </ol>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">4. Transitioning to Multicycle Approach</h3>

        <h4 className="font-semibold text-xl mt-4 mb-3">The Inefficiency of Single-Cycle Datapaths</h4>
        <p className="p-text">
          While straightforward to design, single-cycle implementations suffer from severe performance
          limitations. The clock period must stretch to accommodate the <strong>longest possible path</strong>
          through the entire circuit-always the <strong>Load Word (lw)</strong> instruction. This forces
          faster instructions (like jumps or simple additions) to wait for the same extended clock window,
          wasting precious processing potential.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-5 my-4 shadow-md border-l-4 border-[#c7a669]">
          <p className="font-semibold mb-2">Critical Bottleneck:</p>
          <p className="opacity-95">
            The longest critical path through the datapath (often the memory access time) determines
            the minimum clock period for the entire system, forcing all instructions to wait.
          </p>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3">The Multicycle Design Philosophy</h4>
        <p className="p-text">
          To resolve this bottleneck, engineers transition to a <strong>Multicycle Datapath</strong>.
          This design breaks a single instruction into smaller, discrete functional execution steps.
          Each step completes within a much shorter, highly optimized clock period.
        </p>

        <h4 className="font-semibold text-lg mt-5 mb-3 text-[#7a523c]">Key Architectural Changes:</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4">
            <h5 className="font-bold text-[#5b3a29] mb-2">Resource Sharing</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Instead of duplicating expensive hardware blocks, multicycle designs share a single
              memory module for both instructions and data, and a single ALU for PC updates,
              branch evaluation, and data operations.
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4">
            <h5 className="font-bold text-[#5b3a29] mb-2">Internal Buffers</h5>
            <p className="text-[#3a251a] text-sm leading-relaxed">
              Temporary, non-user-visible registers placed between major logic blocks (Instruction
              Register, Memory Data Register, A, B, ALUOut). These buffers save intermediate results
              on clock boundaries.
            </p>
          </div>
        </div>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-5 mt-4 shadow-md">
          <p className="font-semibold mb-2">Multicycle Advantage:</p>
          <p className="opacity-95">
            By breaking instructions into steps and allowing each step to take only the time it truly
            needs, multicycle designs dramatically improve overall throughput and reduce wasted clock cycles.
          </p>
        </div>
      </section>

    </div>
  );
};
