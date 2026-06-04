export const Ch0Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to the <span className="font-semibold">Internet of Things (IoT)</span>{" "}
        masterclass on openCSE. This 10-module engineering-first curriculum takes you
        from basic sensor reads to industrial cloud deployments, smart automation, and
        capstone system design.
      </p>

      <section>
        <h3 className="section-heading">Module I: Introduction to IoT</h3>
        <ul className="section-list">
          <li>IoT architecture: Sensor → Controller → Cloud → Action</li>
          <li>Human-body analogy for system design</li>
          <li>First Arduino/ESP32 project: LED blink & serial monitor</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module II: Sensors & Actuators</h3>
        <ul className="section-list">
          <li>Analog vs digital sensors, voltage dividers</li>
          <li>PIR, ultrasonic, relays, and motors</li>
          <li>Reactive edge-computing projects</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module III: Microcontrollers (Arduino)</h3>
        <ul className="section-list">
          <li>Pin modes, PWM, and non-blocking code</li>
          <li>LDR light sensors and servo control</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module IV: Advanced Controllers (ESP32)</h3>
        <ul className="section-list">
          <li>Wi-Fi, web server dashboards, OTA updates</li>
          <li>Relay-controlled appliances</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module V: Communication Protocols</h3>
        <ul className="section-list">
          <li>UART, I2C, SPI, RFID, and MQTT pub/sub</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module VI: Cloud Integration</h3>
        <ul className="section-list">
          <li>ThingSpeak, REST APIs, and remote dashboards</li>
          <li>DHT11 environmental logging</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Modules VII–X: Analytics to Capstone</h3>
        <ul className="section-list">
          <li>Edge analytics and smart irrigation (Module 7)</li>
          <li>Smart home automation with gas detection (Module 8)</li>
          <li>Industrial IoT, TLS security, thermocouples (Module 9)</li>
          <li>Multi-sensor health monitoring capstone (Module 10)</li>
        </ul>
      </section>

      <p className="p-text">
        Use the sidebar to open each module. Content is written for hands-on labs with
        Arduino IDE or PlatformIO and common hobbyist hardware.
      </p>
    </div>
  );
};
