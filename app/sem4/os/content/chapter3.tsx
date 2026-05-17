import React from "react";

export const Ch3Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          CPU Scheduling
        </span>{" "}
        is the process used by an Operating System to decide
        which process should use the CPU at a particular time.
        Since multiple processes compete for CPU resources,
        scheduling helps in maximizing CPU utilization,
        improving system performance, and reducing waiting time.
      </p>

      <p className="p-text mt-4">
        Efficient scheduling ensures that all processes get
        fair access to the CPU while maintaining responsiveness
        and system stability.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Objectives */}
      <section>
        <h3 className="section-heading">
          Objectives of CPU Scheduling
        </h3>

        <ul className="section-list">

          <li>Maximize CPU utilization</li>

          <li>Reduce waiting time</li>

          <li>Improve turnaround time</li>

          <li>Increase throughput</li>

          <li>Provide fairness among processes</li>

          <li>Improve response time for interactive systems</li>

        </ul>

        <div className="p-4 my-5 rounded-lg border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          CPU scheduling is important because the CPU is one
          of the most expensive and heavily used resources
          in a computer system.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Scheduling Queues */}
      <section>
        <h3 className="section-heading">
          Scheduling Queues
        </h3>

        <p className="p-text">
          Processes move through different queues during execution.
        </p>

        <ul className="section-list">

          <li>
            <strong>Job Queue:</strong> Contains all processes in the system.
          </li>

          <li>
            <strong>Ready Queue:</strong> Contains processes waiting for CPU.
          </li>

          <li>
            <strong>Device Queue:</strong> Contains processes waiting for I/O devices.
          </li>

        </ul>

        {/* Queue Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Job Queue
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Ready Queue
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              CPU
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Device Queue
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types */}
      <section>
        <h3 className="section-heading">
          Types of Scheduling
        </h3>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">
                  Type
                </th>

                <th className="border border-[#c7a669] p-3">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Long-Term
                </td>

                <td className="border border-[#c7a669] p-3">
                  Selects processes from job pool into memory
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Short-Term
                </td>

                <td className="border border-[#c7a669] p-3">
                  Chooses process for CPU execution
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Medium-Term
                </td>

                <td className="border border-[#c7a669] p-3">
                  Handles process swapping
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Criteria */}
      <section>
        <h3 className="section-heading">
          Scheduling Criteria
        </h3>

        <ul className="section-list">

          <li>
            <strong>CPU Utilization:</strong> Keep CPU busy as much as possible.
          </li>

          <li>
            <strong>Throughput:</strong> Number of completed processes.
          </li>

          <li>
            <strong>Turnaround Time:</strong> Total time taken to execute process.
          </li>

          <li>
            <strong>Waiting Time:</strong> Time spent waiting in ready queue.
          </li>

          <li>
            <strong>Response Time:</strong> Time until first response is produced.
          </li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* FCFS */}
      <section>
        <h3 className="section-heading">
          First Come First Serve (FCFS)
        </h3>

        <p className="p-text">
          FCFS executes processes in the order they arrive.
          It is the simplest scheduling algorithm.
        </p>

        <ul className="section-list">

          <li>Non-preemptive scheduling algorithm</li>

          <li>Easy to implement</li>

          <li>Can cause long waiting times</li>

        </ul>

        {/* FCFS Diagram */}
        <div className="my-6">

          <div className="w-full flex flex-wrap gap-2 justify-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] px-6 py-4 rounded-lg">
              P1
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-4 rounded-lg">
              P2
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] px-6 py-4 rounded-lg">
              P3
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* SJF */}
      <section>
        <h3 className="section-heading">
          Shortest Job First (SJF)
        </h3>

        <p className="p-text">
          SJF selects the process with the shortest burst time first.
        </p>

        <ul className="section-list">

          <li>Provides minimum average waiting time</li>

          <li>Can be preemptive or non-preemptive</li>

          <li>Difficult to predict burst time accurately</li>

        </ul>

        <div className="p-4 my-5 rounded-lg bg-[#f0ddb6] border border-[#c7a669] text-[#2b1d0f]">
          Example:
          If processes have burst times 2ms, 5ms, and 8ms,
          SJF executes the 2ms process first.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Priority */}
      <section>
        <h3 className="section-heading">
          Priority Scheduling
        </h3>

        <p className="p-text">
          In Priority Scheduling, CPU is assigned according
          to process priority.
        </p>

        <ul className="section-list">

          <li>Higher priority processes execute first</li>

          <li>Can be preemptive or non-preemptive</li>

          <li>May cause starvation of low priority processes</li>

        </ul>

        {/* Priority Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
              P1 - Priority 1
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
              P2 - Priority 2
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
              P3 - Priority 3
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Round Robin */}
      <section>
        <h3 className="section-heading">
          Round Robin Scheduling
        </h3>

        <p className="p-text">
          Round Robin assigns CPU to each process
          for a fixed time quantum.
        </p>

        <ul className="section-list">

          <li>Preemptive scheduling algorithm</li>

          <li>Provides fairness among processes</li>

          <li>Widely used in time-sharing systems</li>

        </ul>

        {/* RR Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap justify-center gap-3 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] px-5 py-4 rounded-lg shadow-md">
              P1
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">↺</div>

            <div className="bg-[#7a523c] text-[#fff7ed] px-5 py-4 rounded-lg shadow-md">
              P2
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">↺</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] px-5 py-4 rounded-lg shadow-md">
              P3
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Dispatcher */}
      <section>
        <h3 className="section-heading">
          Dispatcher
        </h3>

        <p className="p-text">
          The dispatcher is responsible for giving control
          of the CPU to the selected process.
        </p>

        <ul className="section-list">

          <li>Performs context switching</li>

          <li>Switches CPU to user mode</li>

          <li>Starts execution of selected process</li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison */}
      <section>
        <h3 className="section-heading">
          Comparison of Scheduling Algorithms
        </h3>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">

                <th className="border border-[#c7a669] p-3">
                  Algorithm
                </th>

                <th className="border border-[#c7a669] p-3">
                  Type
                </th>

                <th className="border border-[#c7a669] p-3">
                  Advantage
                </th>

                <th className="border border-[#c7a669] p-3">
                  Disadvantage
                </th>

              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  FCFS
                </td>

                <td className="border border-[#c7a669] p-3">
                  Non-Preemptive
                </td>

                <td className="border border-[#c7a669] p-3">
                  Simple
                </td>

                <td className="border border-[#c7a669] p-3">
                  Long waiting time
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  SJF
                </td>

                <td className="border border-[#c7a669] p-3">
                  Both
                </td>

                <td className="border border-[#c7a669] p-3">
                  Minimum waiting time
                </td>

                <td className="border border-[#c7a669] p-3">
                  Burst time prediction difficult
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Round Robin
                </td>

                <td className="border border-[#c7a669] p-3">
                  Preemptive
                </td>

                <td className="border border-[#c7a669] p-3">
                  Fair scheduling
                </td>

                <td className="border border-[#c7a669] p-3">
                  High context switching
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          CPU Scheduling is an essential function of Operating Systems.
          It determines how processes are allocated CPU time efficiently.
          Different scheduling algorithms are used depending on system
          requirements such as fairness, responsiveness, and throughput.
        </p>

      </section>

    </div>
  );
};