export const Ch6Content = () => (
  <div className="course-content">
    <p className="p-text">
      Choosing the right compute engine is central to embedded design. Some products need
      simple control and low power, while others need Linux, multimedia, high throughput,
      or deterministic response.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Microcontroller vs Microprocessor</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Feature</th>
              <th className="border border-[#c7a669] p-3">Microcontroller</th>
              <th className="border border-[#c7a669] p-3">Microprocessor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Integration</td>
              <td className="border border-[#c7a669] p-3">CPU, memory, and peripherals on one chip</td>
              <td className="border border-[#c7a669] p-3">Usually needs external memory and support chips</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Power</td>
              <td className="border border-[#c7a669] p-3">Low power, ideal for dedicated control</td>
              <td className="border border-[#c7a669] p-3">Higher power, better for rich operating systems</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Typical Use</td>
              <td className="border border-[#c7a669] p-3">Sensors, appliances, portable devices</td>
              <td className="border border-[#c7a669] p-3">Single-board computers, gateways, multimedia systems</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Important Peripherals</h3>
      <ul className="section-list">
        <li>GPIO: digital pins for LEDs, switches, relays, and simple status signals.</li>
        <li>Timers and counters: used for delays, PWM, periodic sampling, and capture events.</li>
        <li>ADC and DAC: bridge analog sensors and digital processing.</li>
        <li>UART, SPI, and I2C: essential protocols for communication with displays, sensors, and modules.</li>
        <li>Interrupt controller: lets urgent events preempt the normal program flow.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Processor Families You Will Commonly Meet</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Cortex-M Class</h4>
          <p className="text-sm">
            Great for bare-metal or RTOS-based control applications with low power needs.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Cortex-A Class</h4>
          <p className="text-sm">
            Stronger processors that can run Linux, UI stacks, and richer applications.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Selection Checklist</h3>
      <div className="note-box">
        Choose the device by asking: How fast must it respond? How much memory is needed?
        Is an RTOS or Linux required? Which interfaces are mandatory? What is the power
        budget and production cost target?
      </div>
    </section>
  </div>
);
