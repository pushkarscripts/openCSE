export const Ch8Content = () => (
  <div className="course-content">
    <p className="p-text">
      A <span className="font-semibold">real-time system</span> is judged not only by correct
      results, but also by whether those results are produced within the required time.
      This is why scheduling, latency, jitter, and predictable execution are central in
      embedded applications.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Types of Real-time Systems</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Hard Real-time</h4>
          <p className="text-sm">Missing a deadline can cause failure or danger.</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Firm Real-time</h4>
          <p className="text-sm">Late results lose value, but occasional misses may be tolerable.</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg mb-2">Soft Real-time</h4>
          <p className="text-sm">Performance degrades when late, but the system still continues.</p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Important Terms</h3>
      <ul className="section-list">
        <li>Deadline: latest acceptable completion time for a task.</li>
        <li>Latency: delay between an event and the system response.</li>
        <li>Jitter: variation in response time across repeated executions.</li>
        <li>Priority inversion: a high-priority task is blocked by lower-priority work.</li>
      </ul>
    </section>

    <section>
      <h3 className="section-heading">Scheduling Approaches</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#c7a669] text-[#3a2a14] bg-[#f7e7bf]">
          <thead className="bg-[#ead19f]">
            <tr>
              <th className="border border-[#c7a669] p-3">Method</th>
              <th className="border border-[#c7a669] p-3">Idea</th>
              <th className="border border-[#c7a669] p-3">Good For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Rate Monotonic</td>
              <td className="border border-[#c7a669] p-3">Shorter period tasks get higher priority</td>
              <td className="border border-[#c7a669] p-3">Periodic control tasks</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-semibold">Earliest Deadline First</td>
              <td className="border border-[#c7a669] p-3">Task with the closest deadline runs first</td>
              <td className="border border-[#c7a669] p-3">Dynamic scheduling with variable timing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Practical Example</h3>
      <div className="example-box">
        <p className="p-text mb-3 text-[#3a2a14]">
          Consider an industrial temperature controller that samples a sensor every
          10 ms, updates a control signal, and logs data every 500 ms. The control
          task must meet its deadline consistently, while logging can be delayed slightly
          without endangering the process.
        </p>
      </div>
    </section>

    <section>
      <h3 className="section-heading">Engineering Tips</h3>
      <ul className="section-list">
        <li>Keep interrupt service routines short and deterministic.</li>
        <li>Use buffers and queues to separate time-critical code from background tasks.</li>
        <li>Measure worst-case execution time rather than average time only.</li>
        <li>Add watchdog timers and fault handling for safety-oriented systems.</li>
      </ul>
    </section>
  </div>
);
