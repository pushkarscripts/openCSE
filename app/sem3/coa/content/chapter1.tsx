export const Ch1Content = () => {
  return (
    <div className="course-content p-2">

      <p className="p-text">
        <span className="font-semibold">Module I: Introduction to Computer Architecture</span>.
        This module serves as the foundational gateway into how computing systems operate beneath high-level programming interfaces. It explores the historical context of the Information Revolution, details the hardware-software abstraction interface, and maps out the structural functional blocks, standard execution instruction cycles, and underlying system bus interconnect lines that unify a modern computer system.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. Computer Abstraction, Technology, and the Information Revolution</h3>

        <h4 className="font-semibold text-2xl mt-4 mb-2">The Information Revolution</h4>
        <p className="p-text">
          The Information Revolution follows the agricultural and industrial revolutions. The opportunities for computing multiply rapidly each time the physical cost of hardware improves by a factor of 10. Technology that was once &quot;computer science fiction&quot;-such as pervasive microprocessors in cars-is now standard global practice.
        </p>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Managing Complexity via Abstraction</h4>
        <p className="p-text">
          Hardware-software synergy allows programmers to create highly complex applications. Engineers handle this complexity through abstractions-hiding low-level gate implementations behind clean, high-level structural interfaces.
        </p>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Computer Architecture Defined</h4>
        <p className="p-text">
          The practical art of selecting and interconnecting functional hardware units to build computing configurations that successfully hit targeted functionality, speed performance, and economic cost milestones.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Functional Units */}
      <section>
        <h3 className="section-heading">2. Functional Units of a Computer</h3>

        <p className="p-text">
          A computer system consists of five classic, fundamental functional building blocks:
        </p>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Central Processing Unit (CPU)</h4>
        <p className="p-text">
          The central computational intelligence core. It is divided into two parts:
        </p>

        <div className="my-6 p-1 border border-[#c7a669] bg-[#f3e7c2] rounded-xl shadow-md overflow-hidden">
          <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-t-lg font-semibold text-xl text-center">
            Central Processing Unit (CPU)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-b-lg">
            
            <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 shadow-sm text-center transform transition-transform hover:scale-[1.02]">
              <h5 className="font-bold text-lg mb-2 text-[#f3e7c2]">Datapath</h5>
              <p className="text-sm leading-relaxed opacity-90">
                The physical hardware engine that executes actual arithmetic and logical operations on information data.
              </p>
            </div>
            
            <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 shadow-sm text-center transform transition-transform hover:scale-[1.02]">
              <h5 className="font-bold text-lg mb-2 text-[#f3e7c2]">Control Unit</h5>
              <p className="text-sm leading-relaxed opacity-90">
                The system director that issues coordinated binary control signals to command the datapath, memory, and peripheral I/O modules.
              </p>
            </div>
            
          </div>
        </div>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Memory Unit</h4>
        <p className="p-text">
          The internal storage system where operational code instructions and active datasets reside during real-time program execution.
        </p>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Input Unit</h4>
        <p className="p-text">
          The interface hardware used to feed raw data and behavioral control commands into the computing machine (e.g., Keyboards, Mice).
        </p>

        <h4 className="font-semibold text-2xl mt-4 mb-2">Output Unit</h4>
        <p className="p-text">
          The dedicated physical components used to transmit final processed data results back to the end user (e.g., Displays, Printers).
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Instruction Cycle and System Bus */}
      <section>
        <h3 className="section-heading">3. Instruction Cycle and System Bus Interconnections</h3>
        
        <h4 className="font-semibold text-2xl mt-4 mb-2">The System Bus Model</h4>
        <p className="p-text">
          The physical set of communication wires linking the CPU, Memory, and I/O subunits is called the System Bus. It is logically divided into three synchronized functional signal pathways:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Bus Subunit</th>
                <th className="border border-[#c7a669] p-3">Direction</th>
                <th className="border border-[#c7a669] p-3">Core Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Data Bus</td>
                <td className="border border-[#c7a669] p-3">Bidirectional</td>
                <td className="border border-[#c7a669] p-3">Moves raw binary data values and programmatic code instructions between system elements.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Address Bus</td>
                <td className="border border-[#c7a669] p-3">Unidirectional (From CPU)</td>
                <td className="border border-[#c7a669] p-3">Transmits specific destination bit-pointers to reference target memory slots or peripheral hardware ports.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Control Bus</td>
                <td className="border border-[#c7a669] p-3">Mixed / Coordinating</td>
                <td className="border border-[#c7a669] p-3">Carries system-wide read/write commands, clock synchronization markers, and external device interrupts.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-2xl mt-4 mb-2">The Standard Instruction Cycle</h4>
        <p className="p-text">
          Every instruction processed by a pipeline structure executes through a cyclical hardware loop spanning up to 5 steps:
        </p>
        <ul className="section-list">
          <li><strong>Instruction Fetch (IF):</strong> The Program Counter (PC) address points to Instruction Memory, and the execution command is pulled.</li>
          <li><strong>Instruction Decode (ID):</strong> Control logic interprets opcode bits while parsing and reading source registers from the Register File.</li>
          <li><strong>Execute / Address Calculation (EX):</strong> The Arithmetic Logic Unit (ALU) operates on operands to evaluate data values, math functions, or memory offset pointers.</li>
          <li><strong>Memory Access (MEM):</strong> Data memory reads or writes are performed if executing a dedicated load or store instruction.</li>
          <li><strong>Write Back (WB):</strong> The definitive resulting operation value is saved directly back into the target destination register inside the active register file.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Hierarchical Layers */}
      <section>
        <h3 className="section-heading">4. Hierarchical Layers of the Hardware-Software Interface</h3>
        
        <p className="p-text">
          Modern systems manage user interaction with physical silicon gates using explicit hierarchical abstraction layers. Each layer isolates a specific tier of engineering from the operational complexities beneath it:
        </p>

        {/* Creative Stack Diagram */}
        <div className="flex flex-col items-center my-8 w-full max-w-2xl mx-auto gap-2">
          
          {/* Layer 1 */}
          <div className="w-full bg-[#f3e7c2] border-2 border-[#c7a669] rounded-lg p-5 shadow-md text-center transform transition-all hover:-translate-y-1">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-1">Application Software</h4>
            <p className="text-sm text-[#5b3a29] opacity-90">
              High-level programs written in declarative or imperative code platforms (e.g., C++, Python, Java) designed to solve user problems.
            </p>
          </div>

          <div className="text-2xl text-[#c7a669]">↓</div>

          {/* Layer 2 */}
          <div className="w-11/12 bg-[#e8cd9c] border-2 border-[#c7a669] rounded-lg p-5 shadow-md text-center transform transition-all hover:-translate-y-1">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-3">System Software</h4>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <div className="flex-1 bg-[#7a523c] text-[#fff7ed] p-3 rounded shadow-sm hover:bg-[#8f644b] transition-colors">
                <h5 className="font-semibold mb-1">Compilers</h5>
                <p className="text-xs opacity-90">Translates human-readable programs into machine-level instructions.</p>
              </div>
              <div className="flex-1 bg-[#5b3a29] text-[#fff7ed] p-3 rounded shadow-sm hover:bg-[#6c4836] transition-colors">
                <h5 className="font-semibold mb-1">Operating System (OS)</h5>
                <p className="text-xs opacity-90">Manages hardware execution, memory, storage, and peripherals.</p>
              </div>
            </div>
          </div>

          <div className="text-2xl text-[#c7a669]">↓</div>

          {/* Layer 3 */}
          <div className="w-5/6 bg-[#3a251a] text-[#fff7ed] border-2 border-[#c7a669] rounded-lg p-5 shadow-md text-center transform transition-all hover:-translate-y-1">
            <h4 className="font-bold text-xl text-[#f3e7c2] mb-1">Computer Hardware</h4>
            <p className="text-sm opacity-90">
              The physical substrate consisting of digital logic gates, registers, arithmetic logic elements, and underlying circuit pathways.
            </p>
          </div>

        </div>

        {/* Quote Block */}
        <blockquote className="my-6 border-l-4 border-[#7a523c] bg-[#fae8d7] p-5 rounded-r-lg shadow-sm">
          <p className="text-[#5b3a29] italic leading-relaxed">
            <strong className="font-black text-[#3a251a]">The Ultimate Interface Contract:</strong> The definitive boundary line bridging software instructions directly to this physical hardware layer is the system&apos;s <strong>Instruction Set Architecture (ISA)</strong>. The ISA defines the complete vocabulary of machine code commands (such as registers, memory addressing, and opcodes) that the physical core natively understands.
          </p>
        </blockquote>

      </section>

    </div>
  );
};
