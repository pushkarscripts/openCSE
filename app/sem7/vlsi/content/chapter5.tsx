import Image from "next/image";

export const Ch5Content = () => (
  <div className="course-content">
    <p className="p-text">
      An <span className="font-semibold">embedded system</span> is a dedicated computing
      system built to perform a specific task inside a larger product. Unlike general-purpose
      computers, embedded systems are usually optimized for cost, power, reliability,
      response time, and physical constraints.
    </p>

    <div className="card">
      <Image
        src="/sem7/vlsi/embedded-system-stack.svg"
        alt="Embedded system block view with input, controller, firmware, and output"
        width={1200}
        height={420}
        className="w-full h-auto rounded-lg"
      />
      <p className="text-sm mt-3 text-[#3a2a14]">
        Most embedded products follow the same pattern: input, processing, memory,
        communication, and action.
      </p>
    </div>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Main Characteristics</h3>
      <ul className="section-list">
        <li>Dedicated function rather than open-ended computing.</li>
        <li>Combination of hardware and firmware in a tightly constrained environment.</li>
        <li>Strong dependence on timing, interrupts, I/O interfaces, and power management.</li>
        <li>Designed for repeatability, reliability, and low maintenance in the field.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Common Hardware Blocks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Processing</h4>
          <p className="text-sm">Microcontroller, microprocessor, DSP, or SoC</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Memory</h4>
          <p className="text-sm">Flash, SRAM, EEPROM, cache, external storage</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Interfaces</h4>
          <p className="text-sm">GPIO, UART, SPI, I2C, CAN, USB, Ethernet</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Peripherals</h4>
          <p className="text-sm">Sensors, actuators, ADC, DAC, PWM, timers, watchdog</p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Design Constraints</h3>
      <ul className="section-list">
        <li>Power budget: especially important in portable and battery-powered products.</li>
        <li>Memory size: firmware must fit into limited flash and RAM.</li>
        <li>Real-world timing: delayed responses can break control behavior.</li>
        <li>Environmental limits: vibration, temperature, noise, and electromagnetic interference.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Examples Around You</h3>
      <div className="example-box">
        <ul className="section-list text-sm mt-0 text-[#3a2a14]">
          <li>Washing machine controller that reads buttons and drives motors.</li>
          <li>Automotive ECU that monitors sensors and manages fuel injection.</li>
          <li>Smart energy meter that samples voltage and communicates readings.</li>
          <li>Medical infusion pump that must react safely and on time.</li>
        </ul>
      </div>
    </section>
  </div>
);
