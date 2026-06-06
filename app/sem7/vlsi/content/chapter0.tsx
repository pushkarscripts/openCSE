export const Ch0Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">VLSI and Embedded Systems</span> connects chip-level
      design with real-world intelligent products. One part of the subject explains how
      millions of transistors are organized into digital circuits, while the other part
      explains how processors, sensors, firmware, and timing constraints work together
      inside dedicated devices.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Roadmap of the Module</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="card">
          <h4 className="font-bold text-xl mb-2">VLSI Track</h4>
          <ul className="section-list text-sm mt-0">
            <li>Introduction to VLSI and design abstractions</li>
            <li>CMOS technology and MOS transistor behavior</li>
            <li>Digital IC design, timing, verification, and test</li>
            <li>FPGA flow for rapid prototyping and RTL validation</li>
          </ul>
        </div>

        <div className="card">
          <h4 className="font-bold text-xl mb-2">Embedded Track</h4>
          <ul className="section-list text-sm mt-0">
            <li>Embedded system architecture and design constraints</li>
            <li>Microcontrollers, processors, buses, timers, and interrupts</li>
            <li>Arduino and Raspberry Pi for quick experimentation</li>
            <li>Real-time scheduling, latency, jitter, and safety concerns</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">What You Should Learn From This Subject</h3>
      <ul className="section-list">
        <li>Read the basic vocabulary of chip design, firmware, and hardware interfaces.</li>
        <li>Understand the difference between simulation, synthesis, implementation, and deployment.</li>
        <li>Explain why power, area, delay, memory, and deadlines create trade-offs.</li>
        <li>Connect theory to mini projects such as traffic-light controllers, sensor nodes, and FPGA prototypes.</li>
      </ul>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Suggested Study Workflow</h3>
      <div className="space-y-4">
        <div className="note-box">
          <span className="font-semibold">Step 1:</span> Read the chapter concept and write
          down the core terms such as CMOS, RTL, interrupt, deadline, and bitstream.
        </div>
        <div className="note-box">
          <span className="font-semibold">Step 2:</span> Solve one small example after each
          topic. For example, trace a CMOS inverter, write a short Verilog module, or
          blink an LED with a timer interrupt.
        </div>
        <div className="note-box">
          <span className="font-semibold">Step 3:</span> Use the resource links to watch one
          lecture or run one practical exercise before moving to the next topic.
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Prerequisites</h3>
      <div className="card">
        <ul className="section-list text-sm mt-0">
          <li>Boolean algebra and basic digital logic gates</li>
          <li>Elementary electronics, voltage, current, and semiconductor basics</li>
          <li>Programming fundamentals in C or C++</li>
          <li>Comfort with flowcharts, timing diagrams, and truth tables</li>
        </ul>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Starter Resource Board</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Official Learning Links</h4>
          <ul className="section-list text-sm mt-0">
            <li>
              <a
                href="https://www.nptel.ac.in/yt-courses"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                NPTEL YouTube course portal
              </a>
            </li>
            <li>
              <a
                href="https://docs.arduino.cc/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Arduino official documentation
              </a>
            </li>
            <li>
              <a
                href="https://www.raspberrypi.com/documentation/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Raspberry Pi official documentation
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4 className="font-bold text-lg mb-2">Recommended Textbooks</h4>
          <ul className="section-list text-sm mt-0">
            <li>CMOS VLSI Design by Neil Weste and David Harris</li>
            <li>Digital Integrated Circuits by Jan Rabaey</li>
            <li>Embedded Systems by Raj Kamal</li>
            <li>Embedded Systems: Real-Time Interfacing by Jonathan Valvano</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
