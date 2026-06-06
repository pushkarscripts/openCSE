export const Ch9Content = () => (
  <div className="course-content">
    <p className="p-text">
      The best way to become comfortable with this subject is to connect theory with
      small buildable projects. This final section collects project ideas, books, and
      external resources you can use after finishing the chapter notes.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Mini Project Ideas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">FPGA Traffic Light Controller</h4>
          <p className="text-sm">
            Practice finite state machines, clock division, and hardware testing.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Arduino Smart Irrigation Node</h4>
          <p className="text-sm">
            Read soil moisture, drive a relay, and log threshold-based decisions.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Raspberry Pi Edge Dashboard</h4>
          <p className="text-sm">
            Collect sensor data, visualize it, and trigger alerts over the network.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">RTOS Periodic Task Demo</h4>
          <p className="text-sm">
            Compare task periods, deadlines, and CPU utilization using timers and logs.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Reference Books</h3>
      <ul className="section-list">
        <li>CMOS VLSI Design by Weste and Harris</li>
        <li>Digital Integrated Circuits by Rabaey, Chandrakasan, and Nikolic</li>
        <li>Embedded Systems by Raj Kamal</li>
        <li>The 8051 Microcontroller and Embedded Systems by Mazidi</li>
        <li>Real-Time Systems by Jane Liu</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Official and High-value Resource Links</h3>
      <ul className="section-list">
        <li>
          <a
            href="https://www.nptel.ac.in/yt-courses"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NPTEL course videos portal
          </a>
        </li>
        <li>
          <a
            href="https://archive.nptel.ac.in/content/syllabus_pdf/108102045.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NPTEL syllabus for Embedded Systems
          </a>
        </li>
        <li>
          <a
            href="https://archive.nptel.ac.in/content/syllabus_pdf/106105159.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NPTEL syllabus for Embedded Systems Design
          </a>
        </li>
        <li>
          <a
            href="https://docs.arduino.cc/learn/microcontrollers/debugging/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Arduino debugging fundamentals
          </a>
        </li>
        <li>
          <a
            href="https://www.raspberrypi.com/documentation/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Raspberry Pi documentation hub
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">How to Revise for Exams and Interviews</h3>
      <div className="note-box">
        Focus on the design flow, transistor-level intuition, timing terms, embedded I/O
        protocols, and one practical example per chapter. If you can explain one mini
        project clearly, your understanding becomes far stronger than memorizing theory alone.
      </div>
    </section>
  </div>
);
