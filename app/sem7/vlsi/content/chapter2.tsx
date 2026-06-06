export const Ch2Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">CMOS</span>, or Complementary Metal Oxide Semiconductor,
      is the dominant technology used to build digital integrated circuits. It combines
      NMOS and PMOS transistors so that one network pulls the output high while the other
      pulls it low, enabling low static power and strong logic levels.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Core Building Blocks</h3>
      <ul className="section-list">
        <li>NMOS transistor conducts well when the gate is high and helps pull the node toward ground.</li>
        <li>PMOS transistor conducts well when the gate is low and helps pull the node toward VDD.</li>
        <li>A CMOS inverter uses one PMOS and one NMOS to realize logical inversion.</li>
        <li>Series and parallel transistor combinations build NAND, NOR, multiplexers, and transmission structures.</li>
      </ul>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">CMOS Inverter Operation</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Input</th>
              <th className="border border-[#c7a669] p-3">PMOS</th>
              <th className="border border-[#c7a669] p-3">NMOS</th>
              <th className="border border-[#c7a669] p-3">Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">0</td>
              <td className="border border-[#c7a669] p-3">ON</td>
              <td className="border border-[#c7a669] p-3">OFF</td>
              <td className="border border-[#c7a669] p-3">1</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">1</td>
              <td className="border border-[#c7a669] p-3">OFF</td>
              <td className="border border-[#c7a669] p-3">ON</td>
              <td className="border border-[#c7a669] p-3">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note-box mt-4">
        Static power is ideally very low in CMOS because, in the steady state, one pull
        network is OFF. Major power consumption appears during switching and leakage.
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Important Design Parameters</h3>
      <ul className="section-list">
        <li>Propagation delay: how long the output takes to respond to an input transition.</li>
        <li>Noise margin: tolerance against unwanted voltage disturbance.</li>
        <li>Fan-out: number of gate inputs driven by one output.</li>
        <li>Dynamic power: approximately proportional to switching activity, capacitance, voltage squared, and frequency.</li>
        <li>Leakage power: power consumed due to subthreshold and gate leakage paths.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Why Scaling Is Not Simple</h3>
      <div className="card">
        <ul className="section-list text-sm mt-0">
          <li>Lower dimensions increase density but make leakage and variability harder to control.</li>
          <li>Interconnect delay becomes comparable to gate delay in deep submicron technologies.</li>
          <li>Heat density and reliability become critical in high-performance chips.</li>
          <li>Designers must trade off area, power, speed, and manufacturability.</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Practical Concept Check</h3>
      <div className="example-box">
        <p className="p-text mb-0 text-[#3a2a14]">
          If a battery-powered wearable keeps toggling a large clock tree at a high
          frequency, dynamic power rises quickly. A common solution is clock gating,
          voltage scaling, and activity reduction so that the circuit switches only when needed.
        </p>
      </div>
    </section>
  </div>
);
