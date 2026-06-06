export const Ch4Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">FPGAs</span>, or Field Programmable Gate Arrays, are
      reconfigurable chips that let designers implement digital circuits after manufacturing.
      They are widely used for prototyping, custom accelerators, communication hardware,
      and fast development cycles where flexibility matters.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Key FPGA Building Blocks</h3>
      <ul className="section-list">
        <li>LUTs implement combinational logic.</li>
        <li>Flip-flops store state and support synchronous design.</li>
        <li>Block RAM stores medium-sized data on chip.</li>
        <li>DSP slices speed up arithmetic such as multiply-accumulate operations.</li>
        <li>Programmable routing connects logic blocks into the required circuit.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">FPGA vs ASIC vs Microcontroller</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Platform</th>
              <th className="border border-[#c7a669] p-3">Best For</th>
              <th className="border border-[#c7a669] p-3">Trade-off</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">FPGA</td>
              <td className="border border-[#c7a669] p-3">Reconfigurable custom logic and rapid prototyping</td>
              <td className="border border-[#c7a669] p-3">Higher cost and power than ASIC for volume products</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">ASIC</td>
              <td className="border border-[#c7a669] p-3">High-volume, optimized production silicon</td>
              <td className="border border-[#c7a669] p-3">Large upfront cost and long development cycle</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">MCU</td>
              <td className="border border-[#c7a669] p-3">Firmware-driven control systems</td>
              <td className="border border-[#c7a669] p-3">Less parallel hardware customization</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Basic FPGA Development Flow</h3>
      <ol className="list-decimal pl-6 text-base sm:text-lg md:text-xl lg:text-2xl space-y-2">
        <li>Write the logic in Verilog or VHDL.</li>
        <li>Simulate to check functionality.</li>
        <li>Synthesize to map logic into device resources.</li>
        <li>Place and route to assign logic and interconnects.</li>
        <li>Generate a bitstream and program the FPGA board.</li>
        <li>Validate using on-board LEDs, switches, displays, sensors, or communication links.</li>
      </ol>
    </section>

    <section>
      <h3 className="section-heading">Starter Use Cases</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Good First Projects</h4>
          <ul className="section-list text-sm mt-0">
            <li>LED blinker with adjustable divider</li>
            <li>Traffic light controller using an FSM</li>
            <li>UART transmitter and receiver</li>
            <li>Seven-segment display driver</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Recommended Resource</h4>
          <ul className="section-list text-sm mt-0">
            <li>
              <a
                href="https://www.intel.com/content/www/us/en/support/programmable/support-resources/fpga-training/getting-started.html"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Intel FPGA basics and getting started
              </a>
            </li>
            <li>
              <a
                href="https://www.intel.com/content/www/us/en/content-details/653014/basics-of-programmable-logic-fpga-architecture.html"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Intel FPGA architecture learning page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
