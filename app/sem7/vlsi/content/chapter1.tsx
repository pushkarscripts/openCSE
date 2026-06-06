import Image from "next/image";

export const Ch1Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">Very Large Scale Integration</span> means building
      complex integrated circuits by placing a very large number of transistors on a
      single silicon chip. Modern processors, mobile SoCs, memory devices, GPUs, and
      network accelerators are all outcomes of VLSI design methodology.
    </p>

    <div className="card">
      <Image
        src="/sem7/vlsi/vlsi-design-flow.svg"
        alt="VLSI design flow from specification to silicon"
        width={1200}
        height={420}
        className="w-full h-auto rounded-lg"
      />
      <p className="text-sm mt-3 text-[#3a2a14]">
        A compact view of the normal chip-design path: idea, RTL, verification,
        synthesis, layout, and fabrication.
      </p>
    </div>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Levels of Abstraction</h3>
      <ul className="section-list">
        <li>System level: what the chip must do and how it interacts with the full product.</li>
        <li>Architectural level: datapath, control path, memory hierarchy, and bus structure.</li>
        <li>RTL level: register transfers described using HDL such as Verilog or VHDL.</li>
        <li>Gate level: logic gates, flip-flops, and netlists after synthesis.</li>
        <li>Physical level: floorplanning, placement, routing, clock tree, and sign-off.</li>
      </ul>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Front-end and Back-end Design</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Stage</th>
              <th className="border border-[#c7a669] p-3">Focus</th>
              <th className="border border-[#c7a669] p-3">Typical Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Front-end</td>
              <td className="border border-[#c7a669] p-3">Specification, RTL coding, simulation, functional verification</td>
              <td className="border border-[#c7a669] p-3">Verified HDL and constraints</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Back-end</td>
              <td className="border border-[#c7a669] p-3">Synthesis, placement, routing, timing closure, power checks</td>
              <td className="border border-[#c7a669] p-3">Layout database and sign-off reports</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Why VLSI Matters</h3>
      <ul className="section-list">
        <li>Higher functionality can be delivered in smaller area and lower cost per feature.</li>
        <li>Shorter interconnections improve speed and help reduce board complexity.</li>
        <li>Custom silicon enables domain-specific acceleration for AI, communication, and automotive systems.</li>
        <li>Power-optimized chips are essential for battery devices and edge computing.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Practical Example</h3>
      <div className="example-box">
        <p className="p-text mb-3 text-[#3a2a14]">
          Imagine a smart door lock SoC. The specification may require keypad input,
          Bluetooth communication, low power sleep mode, and secure authentication.
          VLSI engineers break this into smaller hardware blocks such as GPIO,
          state machines, timers, memory, and crypto accelerators before implementing
          and verifying each block.
        </p>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Resource Links</h3>
      <ul className="section-list">
        <li>
          <a
            href="https://archive.nptel.ac.in/content/syllabus_pdf/117106092.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NPTEL syllabus for VLSI Circuits
          </a>
        </li>
        <li>
          <a
            href="https://archive.nptel.ac.in/content/syllabus_pdf/106105161.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NPTEL syllabus for VLSI Physical Design
          </a>
        </li>
      </ul>
    </section>
  </div>
);
