export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module II: Performance Analysis</span>.
        This module focuses on the principles and metrics used to assess, measure, and analyze computer system performance. Learners will examine the distinctions between system latency and execution throughput, demystify the multi-variable CPU performance equation, study instruction-level evaluation standards (CPI and IPC), and analyze historical hardware-oriented metrics like MIPS, MOPS, and MFLOPS alongside their engineering limitations.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. Defining Performance */}
      <section>
        <h3 className="section-heading">1. Defining Performance: Latency vs. Throughput</h3>

        <p className="p-text">
          To accurately evaluate a computer system&apos;s processing capabilities, engineers differentiate between two primary definitions of performance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm transform transition-all hover:scale-[1.02]">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">Response Time (Latency)</h4>
            <p className="text-[#3a251a] leading-relaxed">
              The total time required to execute a single, individual computational task from its initial submission to its definitive completion. This is the primary metric of concern for individual desktop or mobile users.
            </p>
          </div>

          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 shadow-sm transform transition-all hover:scale-[1.02]">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">Throughput</h4>
            <p className="text-[#3a251a] leading-relaxed">
              The total volume or number of discrete processing tasks completed over a defined unit of execution time. This is the primary metric of concern for data centers, servers, and cloud infrastructure administrators.
            </p>
          </div>
        </div>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-6 my-6 shadow-md border-l-4 border-[#c7a669]">
          <h4 className="font-semibold text-lg mb-3 text-[#f3e7c2]">The Reciprocal Relationship</h4>
          <p className="opacity-95 mb-4">
            Computer performance is mathematically defined as the reciprocal of execution time. For a given machine A:
          </p>
          
          <div className="bg-[#5b3a29] px-4 py-3 rounded text-center text-xl font-mono tracking-wide shadow-inner mb-4">
            Performance<sub className="text-sm">A</sub> = 1 / Execution Time<sub className="text-sm">A</sub>
          </div>

          <p className="opacity-95 mb-4">
            When comparing two distinct processing configurations, Machine A is described as <em>n</em> times faster than Machine B if:
          </p>
          
          <div className="bg-[#5b3a29] px-4 py-3 rounded text-center text-lg font-mono tracking-wide shadow-inner">
            ( Performance<sub className="text-sm">A</sub> / Performance<sub className="text-sm">B</sub> ) = 
            ( Execution Time<sub className="text-sm">B</sub> / Execution Time<sub className="text-sm">A</sub> ) = n
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Components of Execution Time */}
      <section>
        <h3 className="section-heading">2. Components of Execution Time: User vs. System</h3>

        <p className="p-text">
          When a program runs on a processor, its total elapsed clock time (Wall-Clock Time) includes peripheral operations, I/O delays, and operating system resource cycles. To isolate processor performance, engineers track <strong>CPU Execution Time</strong>, which is partitioned into two core components:
        </p>

        <ul className="section-list">
          <li><strong>User CPU Time:</strong> The specific amount of processor clock time expended strictly executing the lines of code within the user&apos;s application.</li>
          <li><strong>System CPU Time:</strong> The processor clock time consumed by the underlying Operating System kernel executing system resource tasks on behalf of the application (e.g., memory allocation, context switching, basic device driver calls).</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. CPI and IPC */}
      <section>
        <h3 className="section-heading">3. Cycles Per Instruction (CPI) and Instructions Per Cycle (IPC)</h3>

        <p className="p-text">
          Processors operate via a continuous internal hardware clock running at a specific <strong>Clock Rate</strong> (measured in Hertz, GHz) or <strong>Clock Period</strong> (measured in nanoseconds/picoseconds). The speed at which code runs is fundamentally dependent on the number of clock cycles required by the processor to execute each instruction.
        </p>

        <h4 className="font-semibold text-2xl mt-6 mb-2">Cycles Per Instruction (CPI)</h4>
        <p className="p-text">
          Different classes of instruction tokens require different amounts of internal hardware manipulation:
        </p>

        <ul className="section-list">
          <li>Memory-bound instructions (e.g., <code>lw</code>, <code>sw</code>) typically consume more cycles due to memory interface overhead.</li>
          <li>Basic arithmetic instructions (e.g., <code>add</code>, <code>or</code>) execute faster using compact ALU combinational logic.</li>
        </ul>

        <div className="bg-[#fae8d7] border border-[#c7a669] p-5 my-4 rounded-lg shadow-sm">
          <p className="text-[#3a251a] mb-3 font-semibold">The Average CPI for a compiled program with <em>n</em> instruction classes:</p>
          <div className="bg-[#f3e7c2] p-3 text-center rounded font-mono text-lg text-[#5b3a29] border border-[#c7a669]">
            CPI<sub>avg</sub> = ∑ (CPI<sub>i</sub> × Instruction Frequency<sub>i</sub>)
          </div>
        </div>

        <h4 className="font-semibold text-2xl mt-6 mb-2">Instructions Per Cycle (IPC)</h4>
        <p className="p-text mb-4">
          IPC is the strict mathematical inverse of CPI:
        </p>
        
        <div className="bg-[#5b3a29] text-[#fff7ed] p-4 text-center rounded-lg font-mono text-xl shadow-md w-full max-w-sm mx-auto mb-4 border-2 border-[#7a523c]">
          IPC = 1 / CPI
        </div>

        <p className="p-text blockquote border-l-4 border-[#c7a669] pl-4 italic opacity-90">
          A higher IPC signifies that the architecture can execute more parallel instruction streams per single clock tick, which is a key design benchmark for modern superscalar or out-of-order execution cores.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. CPU Performance Equation */}
      <section>
        <h3 className="section-heading">4. The Fundamental CPU Performance Equation</h3>
        
        <p className="p-text">
          The total CPU execution time required to complete a given software application is determined by three independent, interacting variables:
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-5 my-6 shadow-xl transform hover:scale-[1.01] transition-transform">
          <div className="text-center font-mono text-xl sm:text-2xl py-4 border-b border-[#5b3a29] flex flex-col gap-2">
            <span>CPU Time = Instruction Count × CPI × Clock Cycle Time</span>
          </div>
          <div className="text-center font-mono text-lg py-4 opacity-90">
            <em>Alternatively, using Clock Rate (f = 1 / Clock Cycle Time):</em><br/>
            <span className="inline-block mt-3 bg-[#5b3a29] px-4 py-2 rounded">
              CPU Time = (Instruction Count × CPI) / Clock Rate
            </span>
          </div>
        </div>

        <h4 className="font-semibold text-2xl mt-8 mb-4">Architectural Dependencies Matrix</h4>
        <p className="p-text">
          This equation demonstrates that performance is not governed by clock speed alone. Each layer of the hardware-software stack influences a different component:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-center text-[#2b1d0f]">
            <thead>
              <tr className="bg-[#5b3a29] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 text-left">System Layer</th>
                <th className="border border-[#c7a669] p-3">Affects Instruction Count?</th>
                <th className="border border-[#c7a669] p-3">Affects CPI?</th>
                <th className="border border-[#c7a669] p-3">Affects Clock Rate?</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Algorithm Design</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Programming Language</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Compiler Optimization</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Instruction Set Architecture</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Microarchitecture Design</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
              </tr>
              <tr className="bg-[#fae8d7]">
                <td className="border border-[#c7a669] p-3 font-semibold text-left">Silicon VLSI Technology</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
                <td className="border border-[#c7a669] p-3 font-bold text-red-700">No</td>
                <td className="border border-[#c7a669] p-3 font-bold text-green-700">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 5. Metrics & Limitations */}
      <section>
        <h3 className="section-heading">5. Hardware-Oriented Metrics & Their Limitations</h3>

        <p className="p-text mb-4">
          Historically, computer vendors used absolute hardware throughput metrics instead of time-based calculations to market processing units.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg shadow-md p-6 mb-6">
          <h4 className="font-bold text-xl mb-3 text-[#f3e7c2]">MIPS (Millions of Instructions Per Second)</h4>
          <p className="opacity-90 leading-relaxed mb-4">
            MIPS quantifies the absolute speed of instruction execution for a designated computer:
          </p>
          <div className="bg-[#3a251a] p-4 text-center rounded font-mono shadow-inner mb-6">
            MIPS = Instruction Count / (Execution Time × 10<sup>6</sup>) = Clock Rate / (CPI × 10<sup>6</sup>)
          </div>

          <h5 className="font-semibold text-lg text-[#ffdda7] mb-2 border-b border-[#7a523c] pb-1 inline-block">Significant Limitations of MIPS:</h5>
          <ul className="list-disc pl-5 opacity-95 space-y-2 mt-2">
            <li><strong>ISA Independence Failure:</strong> Cannot compare processors with different instruction sets. A CISC machine doing more work per instruction will have a lower MIPS score than RISC despite faster execution.</li>
            <li><strong>Program Variance:</strong> Varies drastically across different workloads on the same machine because the instruction mix alters the average CPI.</li>
            <li><strong>Inverse Scaling Risk:</strong> A less efficient compiler might generate many fast, simple instructions, increasing absolute MIPS while drastically slowing down total execution time.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">MOPS</h4>
            <p className="text-[#3a251a] leading-relaxed">
              <strong>Millions of Operations Per Second:</strong> Tracks raw low-level hardware control actions rather than complete machine instructions.
            </p>
          </div>
          
          <div className="bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-5 shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-xl text-[#5b3a29] mb-2">MFLOPS</h4>
            <p className="text-[#3a251a] leading-relaxed mb-3">
              <strong>Millions of Floating-Point Operations Per Second:</strong> Benchmarks scientific computing units by counting only floating-point math executions.
            </p>
            <div className="bg-[#fae8d7] p-2 text-center rounded font-mono text-sm border border-[#c7a669] text-[#5b3a29]">
              MFLOPS = FP Count / (Time × 10<sup>6</sup>)
            </div>
          </div>
        </div>

        <p className="p-text mt-4 italic opacity-90">
          MFLOPS isolates floating-point capabilities, heavily depending on explicit math instructions while completely ignoring integer index updates or control loop structures.
        </p>
      </section>

    </div>
  );
};
