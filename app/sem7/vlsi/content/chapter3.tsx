export const Ch3Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">Digital IC design</span> turns logic requirements into
      circuits that can be simulated, synthesized, laid out, and tested. A good designer
      must think about function, timing, power, and testability at the same time.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Combinational and Sequential Design</h3>
      <ul className="section-list">
        <li>Combinational logic depends only on present inputs, such as adders, encoders, and multiplexers.</li>
        <li>Sequential logic depends on present input and stored state, such as counters, registers, and FSMs.</li>
        <li>Clocking makes sequential circuits predictable, but also introduces setup and hold requirements.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Typical Design Flow</h3>
      <ol className="list-decimal pl-6 text-base sm:text-lg md:text-xl lg:text-2xl space-y-2">
        <li>Write a clear specification and identify inputs, outputs, and timing needs.</li>
        <li>Create truth tables, state diagrams, or datapath/control partitioning.</li>
        <li>Describe the design in HDL.</li>
        <li>Run simulation and verification using directed and corner-case tests.</li>
        <li>Synthesize and inspect timing, area, and inferred hardware.</li>
        <li>Improve the design for power, speed, testability, and maintainability.</li>
      </ol>
    </section>

    <section>
      <h3 className="section-heading">Timing Terms You Must Know</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Setup Time</h4>
          <p className="text-sm">
            Minimum time before the active clock edge during which data must remain stable.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Hold Time</h4>
          <p className="text-sm">
            Minimum time after the clock edge during which data must remain stable.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Clock Skew</h4>
          <p className="text-sm">
            Difference in arrival time of the same clock at different registers.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Critical Path</h4>
          <p className="text-sm">
            Longest delay path that limits the maximum safe operating frequency.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Mini Example: 2-to-1 Multiplexer in Verilog</h3>
      <pre>
        <code>{`module mux2 (
  input  wire a,
  input  wire b,
  input  wire sel,
  output wire y
);
  assign y = sel ? b : a;
endmodule`}</code>
      </pre>
      <p className="p-text">
        This small example shows RTL intent clearly. Synthesis tools infer the gate-level
        hardware from the behavior written here.
      </p>
    </section>

    <section>
      <h3 className="section-heading">Verification Mindset</h3>
      <ul className="section-list">
        <li>Test normal inputs, boundary cases, and illegal transitions.</li>
        <li>Check both functionality and timing assumptions.</li>
        <li>Add assertions or simple self-checking logic when possible.</li>
        <li>Document clock domain crossings and reset behavior early.</li>
      </ul>
    </section>
  </div>
);
