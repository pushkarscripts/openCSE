export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Computer Organization and Architecture</span> - a foundational course designed to help you understand the practical art of selecting and interconnecting hardware components to create computers that meet functional, performance, and cost goals
. This course introduces the core concepts of computer hardware, instruction sets, arithmetic, datapath design, pipelining, and memory hierarchy.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Introduction to Computer Architecture</span>
        </h3>
        <ul className="section-list">
          <li>Introduction to computer organization and architecture</li>
          <li>Functional units of a computer (CPU, Memory, Input, Output)</li>
          <li>Instruction cycle and system bus interconnections</li>
          <li>Hierarchical layers of the hardware-software interface</li>

        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Performance</span>
        </h3>
        <ul className="section-list">
          <li>Execution time, user time, and system time</li>
          <li>Cycles per instruction (CPI) and Instruction per cycle (IPC)</li>
          <li>CPU performance equation and the nature of execution time</li>
          <li>Hardware-oriented metrics (MIPS, MOPS, MFLOPS)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Instructions - Language of the Computer</span>
        </h3>
        <ul className="section-list">
          <li>Instruction set architecture and MIPS register conventions</li>
          <li>Memory operands, immediate operands, and constants</li>
          <li>MIPS instruction formats (R-type, I-type, J-type)</li>
          <li>Decision making, loops, and procedures/functions</li>
          <li>MIPS addressing modes (Immediate, Register, Base, PC-relative, etc.)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Computer Arithmetic</span>
        </h3>
        <ul className="section-list">
          <li>Number representation and two&apos;s complement</li>
          <li>Sign extension and overflow detection</li>
          <li>Multiplication hardware and flowchart</li>
          <li>Floating-point representation and basic addition</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module V */}
      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">Building a Datapath</span>
        </h3>
        <ul className="section-list">
          <li>Single-cycle datapath design and memory units</li>
          <li>ALU and main control unit design</li>
          <li>Implementing R-type, load/store, and branching instructions</li>
          <li>Introduction to the multicycle approach</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VI */}
      <section>
        <h3 className="section-heading">
          Module VI: <span className="section-subheading">Pipelining</span>
        </h3>
        <ul className="section-list">
          <li>Pipelining concepts and 5-stage instruction execution</li>
          <li>Structural, control, and data hazards</li>
          <li>Pipelined datapath and pipeline registers</li>
          <li>Handling exceptions, interrupts, and traps</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VII */}
      <section>
        <h3 className="section-heading">
          Module VII: <span className="section-subheading">Memory Hierarchy</span>
        </h3>
        <ul className="section-list">
          <li>Memory hierarchy structure (SRAM, DRAM, Disk)</li>
          <li>Cache memory and placement strategies (Direct mapped, Set associative, Fully associative)</li>
          <li>Handling cache misses and reducing miss penalty</li>
          <li>Virtual memory and address translation</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VIII */}
      <section>
        <h3 className="section-heading">
          Module VIII: <span className="section-subheading">I/O Systems</span>
        </h3>
        <ul className="section-list">
          <li>I/O control and data transfer mechanisms</li>
          <li>Bus types (Processor-memory, I/O, Backplane) and bus design issues</li>
          <li>Direct Memory Access (DMA) controllers</li>
          <li>I/O processors and interface registers</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will understand the internal workings of computer hardware, how software instructions are translated and executed by the CPU, how memory is hierarchically managed, and how external systems communicate via buses - providing a strong foundation for advanced computer science subjects and hardware-level programming.
      </p>
    </div>
  );
};
