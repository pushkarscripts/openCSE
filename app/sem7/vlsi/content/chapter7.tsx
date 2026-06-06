export const Ch7Content = () => (
  <div className="course-content">
    <p className="p-text">
      Arduino and Raspberry Pi are popular teaching and prototyping platforms, but they
      serve different purposes. Arduino is centered around a microcontroller and direct
      hardware control. Raspberry Pi is a compact computer that can run Linux and support
      networking, storage, and higher-level applications.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Quick Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Platform</th>
              <th className="border border-[#c7a669] p-3">Strength</th>
              <th className="border border-[#c7a669] p-3">Best Fit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Arduino</td>
              <td className="border border-[#c7a669] p-3">Simple hardware control and deterministic loops</td>
              <td className="border border-[#c7a669] p-3">Sensors, actuators, robotics basics, control tasks</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Raspberry Pi</td>
              <td className="border border-[#c7a669] p-3">Linux environment, networking, camera, storage</td>
              <td className="border border-[#c7a669] p-3">IoT gateways, edge apps, Python projects, dashboards</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Starter Arduino Workflow</h3>
      <ol className="list-decimal pl-6 text-base sm:text-lg md:text-xl lg:text-2xl space-y-2">
        <li>Install the Arduino IDE and select the correct board.</li>
        <li>Connect a simple circuit such as an LED with a resistor.</li>
        <li>Write a short sketch, compile it, and upload it.</li>
        <li>Use Serial Monitor for debugging and sensor output.</li>
      </ol>
      <pre>
        <code>{`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}`}</code>
      </pre>
    </section>

    <section>
      <h3 className="section-heading">Starter Raspberry Pi Workflow</h3>
      <ul className="section-list">
        <li>Flash Raspberry Pi OS to a microSD card and complete initial setup.</li>
        <li>Use Python or shell tools to access GPIO, files, and network services.</li>
        <li>Connect sensors through GPIO, I2C, SPI, or USB peripherals.</li>
        <li>Prototype dashboards, logging pipelines, or lightweight web services.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Safety and Good Practice</h3>
      <div className="example-box">
        <ul className="section-list text-sm mt-0 text-[#3a2a14]">
          <li>Check operating voltage before wiring sensors or modules.</li>
          <li>Do not drive motors directly from logic pins without driver circuitry.</li>
          <li>Label pin mappings and power rails before powering the board.</li>
          <li>Use serial logs, LEDs, and simple test cases while debugging.</li>
        </ul>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Official Learning Resources</h3>
      <ul className="section-list">
        <li>
          <a
            href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Arduino getting started guide
          </a>
        </li>
        <li>
          <a
            href="https://docs.arduino.cc/built-in-examples"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Arduino built-in examples
          </a>
        </li>
        <li>
          <a
            href="https://www.raspberrypi.com/documentation/setup/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Raspberry Pi setup documentation
          </a>
        </li>
      </ul>
    </section>
  </div>
);
