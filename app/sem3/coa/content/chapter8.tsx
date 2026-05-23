export const Ch8Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VIII: Storage and I/O Systems</span>.
        This module explores the design and management of Input/Output (I/O) systems, focusing on how a processor coordinates data movement with diverse external peripheral devices. Learners will analyze data transfer mechanisms, compare standard bus interconnections (Processor-Memory, I/O, and Backplane buses), examine the operational control flags of Direct Memory Access (DMA) controllers, and study dedicated I/O processors and interface registers.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">1. General I/O System Architecture and Control</h3>

        <p className="p-text mb-4">
          An Input/Output (I/O) system connects the central processor and main memory to external peripherals like storage disks, displays, network interfaces, keyboards, and mice. Because these devices vary by many orders of magnitude in speed, data format, and control logic, a standardized interface architecture is required.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#e2d1c1]">Data Transfer Control Primitives</h4>
        <p className="p-text mb-3">
          Peripheral devices are connected to the system via specialized <strong>I/O Controllers</strong> or device adapters containing interface ports or registers. Handling an I/O operation involves two components:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f3e7c2] border-l-4 border-[#7a523c] p-4 rounded-b-lg shadow-sm text-[#3a251a]">
            <h5 className="font-bold text-lg mb-2 text-[#7a523c]">1. Control / Command Signaling</h5>
            <p className="text-sm">The processor issues task commands (e.g., read, write, seek) or continuously checks peripheral status flags to see if a device is idle, busy, or experiencing an execution error.</p>
          </div>
          <div className="bg-[#fae8d7] border-l-4 border-[#5b3a29] p-4 rounded-b-lg shadow-sm text-[#3a251a]">
            <h5 className="font-bold text-lg mb-2 text-[#5b3a29]">2. Data Transfer Pathways</h5>
            <p className="text-sm">The actual mechanism used to route blocks of binary data bytes between main memory and the internal buffers of the hardware peripheral.</p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">2. Bus Interconnections and Taxonomy</h3>

        <p className="p-text mb-5">
          To link the CPU, memory subsystems, and I/O interfaces together, computer architectures deploy electronic communication channels called <strong>Buses</strong>.
        </p>

        <div className="space-y-6">
          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg border border-[#c7a669] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c7a669] text-[#3a251a] font-bold px-3 py-1 rounded-bl-lg text-sm">A</div>
            <h4 className="font-bold text-xl text-[#f3e7c2] mb-2">Processor-Memory Bus</h4>
            <ul className="list-disc pl-5 opacity-90 text-sm space-y-2">
              <li><strong>Design Traits:</strong> Very short physical length, featuring minimal connection taps to keep circuit noise negligible.</li>
              <li><strong>Performance:</strong> Exceptionally fast with maximized data bandwidth. Highly optimized for synchronous, high-frequency transfers directly between the CPU core and the RAM cache controller.</li>
              <li><strong>Limitation:</strong> System-specific; not built to plug standard, generic third-party peripherals directly into its lines.</li>
            </ul>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg border border-[#c7a669] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c7a669] text-[#3a251a] font-bold px-3 py-1 rounded-bl-lg text-sm">B</div>
            <h4 className="font-bold text-xl text-[#fae8d7] mb-2">Input/Output (I/O) Bus</h4>
            <ul className="list-disc pl-5 opacity-90 text-sm space-y-2">
              <li><strong>Design Traits:</strong> Physically longer line layout with high tap capacities to support many different expanding adapters. Conforms to industry standards (e.g., PCIe, USB, SATA).</li>
              <li><strong>Performance:</strong> Slower clock frequencies and lower data bandwidth than a processor-memory bus.</li>
              <li><strong>Interconnect:</strong> Connected to the high-speed Processor-Memory bus using a specialized bridging module called a <strong>Bus Adapter</strong>.</li>
            </ul>
          </div>

          <div className="bg-[#e8cd9c] text-[#3a251a] p-5 rounded-lg border border-[#c7a669] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c7a669] text-[#3a251a] font-bold px-3 py-1 rounded-bl-lg text-sm">C</div>
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">Backplane Bus</h4>
            <ul className="list-disc pl-5 opacity-90 text-sm space-y-2">
              <li><strong>Design Traits:</strong> A unified, single communication plane where the CPU, memory modules, and all peripheral hardware ports link up along the exact same backplane wiring system.</li>
              <li><strong>Trade-off:</strong> Industry-standard and cheap to manufacture (avoids expensive bridge adapters). Forced to share slow I/O actions with memory lines, compromising core performance.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">3. Data Transfer Coordination Mechanisms</h3>

        <p className="p-text mb-4">
          Architectures manage data movement between peripheral controller interfaces and main memory using three primary communication protocols:
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row bg-[#f0ddb6] rounded-lg shadow-sm border border-[#c7a669] overflow-hidden">
            <div className="md:w-1/4 bg-[#5b3a29] text-[#e8cd9c] p-4 flex items-center justify-center font-bold text-center">
              1. Polling (Programmed I/O)
            </div>
            <div className="p-4 md:w-3/4 text-[#3a251a] text-sm">
              <p className="mb-2"><strong>Protocol:</strong> The CPU repeatedly checks a device&apos;s status register in a tight loop until the hardware sets its <code>Done</code> flag to indicate readiness.</p>
              <p><strong>Evaluation:</strong> Straightforward to code, but introduces severe CPU processing waste by stalling its entire executing thread waiting on slow mechanical actions.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-[#f3e7c2] rounded-lg shadow-sm border border-[#c7a669] overflow-hidden">
            <div className="md:w-1/4 bg-[#7a523c] text-[#f3e7c2] p-4 flex items-center justify-center font-bold text-center">
              2. Interrupt-Driven I/O
            </div>
            <div className="p-4 md:w-3/4 text-[#3a251a] text-sm">
              <p className="mb-2"><strong>Protocol:</strong> CPU issues command and resumes other tasks. When the peripheral finishes, it issues an <strong>Interrupt Request (IRQ)</strong> over the control bus.</p>
              <p><strong>Evaluation:</strong> Saves cycle waste. However, interrupting the processor for every single byte during high-speed transfers creates an overwhelming context-switching bottleneck.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-[#fae8d7] rounded-lg shadow-sm border border-[#c7a669] overflow-hidden">
            <div className="md:w-1/4 bg-[#3a251a] text-[#fae8d7] p-4 flex items-center justify-center font-bold text-center">
              3. Direct Memory Access (DMA)
            </div>
            <div className="p-4 md:w-3/4 text-[#3a251a] text-sm">
              <p className="mb-2"><strong>Protocol:</strong> For bulk data operations, a specialized hardware component (DMA Controller) takes temporary control of the system bus.</p>
              <p><strong>Evaluation:</strong> Streams large data blocks directly between main memory and the I/O interface entirely in the background, bypassing the CPU processor entirely.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">4. Direct Memory Access (DMA) Controllers</h3>

        <p className="p-text">
          A standard DMA interface controller exposes a set of addressable control registers to the system bus. The processor sets up a transfer by writing values into these registers before relinquishing control of the bus:
        </p>

        {/* Custom DMA Register Map Diagram */}
        <div className="bg-[#3a251a] text-[#f3e7c2] p-5 rounded-lg border border-[#c7a669] my-6 font-mono text-xs md:text-sm shadow-md overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="flex w-full mb-1 text-[#c7a669]">
              <span className="flex-1">31</span>
              <span className="w-16 text-center">30</span>
              <span className="flex-1 text-right">2</span>
              <span className="w-12 text-center">1</span>
              <span className="w-12 text-center">0</span>
            </div>
            
            <div className="border border-[#7a523c] p-2 text-center mb-1">
              Starting Address Register
            </div>
            
            <div className="border border-[#7a523c] p-2 text-center mb-1">
              Transfer Word Count Register
            </div>
            
            <div className="flex w-full border border-[#7a523c]">
              <div className="flex-1 p-2 text-center border-r border-[#7a523c]">Status Flags</div>
              <div className="w-16 p-2 text-center border-r border-[#7a523c]">IE</div>
              <div className="flex-1 p-2 text-center border-r border-[#7a523c]" />
              <div className="w-12 p-2 text-center border-r border-[#7a523c]">Done</div>
              <div className="w-12 p-2 text-center">R/W</div>
            </div>
          </div>
        </div>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse border border-[#c7a669] text-left text-[#2b1d0f]">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 w-1/3">Core Interface Registers</th>
                <th className="border border-[#c7a669] p-3 w-2/3">Purpose during Setup</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-sm md:text-base">
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold text-[#5b3a29]">Starting Address Register</td>
                <td className="border border-[#c7a669] p-3">Stores the initial 32-bit physical main memory pointer location where the data block read or write sequence will begin.</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-bold text-[#5b3a29]">Word Count Register</td>
                <td className="border border-[#c7a669] p-3">Holds the integer count indicating the total number of bytes or words that must be transferred across the bus during this continuous operation.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-bold text-[#5b3a29]">Status and Control Register</td>
                <td className="border border-[#c7a669] p-3">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>R/W Bit (Bit 0):</strong> Determines data direction. <code>1</code> = Read (memory to device), <code>0</code> = Write.</li>
                    <li><strong>Done Flag (Bit 1):</strong> Set high (<code>1</code>) automatically when block count hits zero.</li>
                    <li><strong>Interrupt Enable (IE, Bit 30):</strong> When asserted, DMA hardware automatically fires a system-wide hardware interrupt the moment Done flag is triggered.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">5. Advanced Architectures: I/O Processors</h3>

        <p className="p-text mb-4">
          As systems scale up, a simple DMA controller can still place coordination overhead on the main processor. To completely decouple I/O bottlenecks from computational threads, advanced systems employ an <strong>I/O Processor</strong> (also known as a <strong>Channel Controller</strong>).
        </p>

        <div className="bg-[#f0ddb6] rounded-lg border-l-4 border-[#5b3a29] p-5 shadow-sm mb-6">
          <h4 className="font-bold text-lg text-[#5b3a29] mb-2">The I/O Processing Model</h4>
          <p className="text-[#3a251a] text-sm">
            An I/O Processor is a small, dedicated microprocessing execution block built directly into the I/O subsystem. It possesses a specialized RISC instruction vocabulary optimized exclusively for data routing operations.
          </p>
        </div>

        {/* Custom Diagram for I/O Processor connection */}
        <div className="flex flex-col items-center my-6">
          <div className="bg-[#5b3a29] text-[#f3e7c2] px-6 py-3 rounded shadow-md border border-[#c7a669] font-semibold text-center w-64">
            Main CPU<br/>
            <span className="text-xs font-normal opacity-90">(Issues Channel Command)</span>
          </div>
          
          <div className="h-8 w-1 bg-[#c7a669]" />
          
          <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded shadow-md border border-[#c7a669] w-72">
            <h5 className="font-bold text-center border-b border-[#c7a669] pb-2 mb-2">I/O Channel Processor</h5>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>Executes channel program</li>
              <li>Fetches blocks directly from disk</li>
              <li>Checks error codes</li>
              <li>Writes directly to RAM</li>
            </ul>
          </div>
        </div>

        <h4 className="font-semibold text-xl mt-6 mb-3 text-[#e2d1c1]">Operational Workflow</h4>
        <div className="space-y-3 p-text">
          <div className="flex gap-4">
            <div className="bg-[#c7a669] text-[#3a251a] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
            <p>Rather than tracking individual buffer locations, the main CPU creates an independent program in system memory called a <strong>Channel Program</strong> outlining transport and error checking.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#c7a669] text-[#3a251a] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
            <p>The main CPU writes the starting address of this program into the I/O Processor&apos;s <strong>Interface Registers</strong> and executes a channel instruction.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#c7a669] text-[#3a251a] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
            <p>The I/O Processor independently executes the code, fetches streams, handles priorities, and alerts the main CPU via a single interrupt only once the entire complex automation task is complete.</p>
          </div>
        </div>

      </section>

    </div>
  );
};