import React from "react";

export const Ch2Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          Process Management
        </span>{" "}
        is one of the core responsibilities of an Operating System.
        A process is simply a program that is currently being executed.
        The operating system manages multiple processes efficiently
        so that users can run several applications simultaneously
        without conflicts.
      </p>

      <p className="p-text mt-4">
        Whenever you open a browser, play music, edit documents,
        or run games, the operating system creates and manages processes
        for each task.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* What is a Process */}
      <section>
        <h3 className="section-heading">
          What is a Process?
        </h3>

        <ul className="section-list">

          <li>
            A process is an instance of a program in execution.
          </li>

          <li>
            It contains program code, data, stack, registers,
            and memory allocated during execution.
          </li>

          <li>
            Multiple processes can exist for the same program.
          </li>

          <li>
            Each process has its own Process ID (PID).
          </li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full border border-[#c7a669] rounded-xl p-4 md:p-6 bg-[#f3e7c2] shadow-md">

            <h4 className="text-center font-bold text-xl mb-4 text-[#5b3a29]">
              Process Memory Layout
            </h4>

            <div className="flex flex-col gap-3 text-center">

              <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg font-semibold">
                Stack
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-3 rounded-lg font-semibold">
                Heap
              </div>

              <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg font-semibold">
                Data Section
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-3 rounded-lg font-semibold">
                Code Section
              </div>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Process States */}
      <section>
        <h3 className="section-heading">
          Process States
        </h3>

        <p className="p-text">
          During execution, a process moves through different states
          depending on CPU availability and execution status.
        </p>

        <ul className="section-list">

          <li>
            <strong>New:</strong> Process is being created.
          </li>

          <li>
            <strong>Ready:</strong> Process is waiting for CPU allocation.
          </li>

          <li>
            <strong>Running:</strong> Instructions are currently executing.
          </li>

          <li>
            <strong>Waiting:</strong> Process waits for I/O or events.
          </li>

          <li>
            <strong>Terminated:</strong> Process execution is completed.
          </li>

        </ul>

        {/* Process State Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              New
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Ready
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Running
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Waiting
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">→</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Terminated
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* PCB */}
      <section>
        <h3 className="section-heading">
          Process Control Block (PCB)
        </h3>

        <p className="p-text">
          The Process Control Block is a data structure maintained
          by the operating system for every process.
        </p>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">
                  PCB Component
                </th>

                <th className="border border-[#c7a669] p-3">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Process ID
                </td>

                <td className="border border-[#c7a669] p-3">
                  Unique identification number
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Process State
                </td>

                <td className="border border-[#c7a669] p-3">
                  Current status of process
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Program Counter
                </td>

                <td className="border border-[#c7a669] p-3">
                  Address of next instruction
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  CPU Registers
                </td>

                <td className="border border-[#c7a669] p-3">
                  Stores register information
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Memory Information
                </td>

                <td className="border border-[#c7a669] p-3">
                  Details about allocated memory
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Scheduling */}
      <section>
        <h3 className="section-heading">
          Process Scheduling
        </h3>

        <p className="p-text">
          Process scheduling determines which process gets CPU time.
          The scheduler ensures efficient CPU utilization and fairness.
        </p>

        <ul className="section-list">

          <li>
            <strong>Long-Term Scheduler:</strong> Selects processes from job pool.
          </li>

          <li>
            <strong>Short-Term Scheduler:</strong> Chooses process for CPU execution.
          </li>

          <li>
            <strong>Medium-Term Scheduler:</strong> Handles swapping processes.
          </li>

        </ul>

        {/* Scheduling Diagram */}
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

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Context Switching */}
      <section>
        <h3 className="section-heading">
          Context Switching
        </h3>

        <p className="p-text">
          Context switching occurs when the CPU switches from one process
          to another. The operating system saves the current process state
          and loads the next process state.
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 md:p-5 my-6 shadow-sm">

          <div className="font-semibold text-lg mb-4">
            Steps in Context Switching
          </div>

          <ol className="list-decimal ml-6 space-y-2">

            <li>Save current process state</li>

            <li>Store PCB information</li>

            <li>Select next process</li>

            <li>Load next process state</li>

            <li>Resume execution</li>

          </ol>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Threads */}
      <section>
        <h3 className="section-heading">
          Threads
        </h3>

        <p className="p-text">
          A thread is the smallest unit of CPU execution within a process.
          Multiple threads can exist inside a single process.
        </p>

        <ul className="section-list">

          <li>
            Threads share memory and resources of the same process.
          </li>

          <li>
            Threads improve responsiveness and performance.
          </li>

          <li>
            Examples include browser tabs and multiplayer games.
          </li>

        </ul>

        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-col gap-4">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center font-semibold shadow-md">
              Process
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
                Thread 1
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
                Thread 2
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
                Thread 3
              </div>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>
        <h3 className="section-heading">
          Advantages of Process Management
        </h3>

        <ul className="section-list">

          <li>Efficient CPU utilization</li>

          <li>Supports multitasking</li>

          <li>Improves system responsiveness</li>

          <li>Allows concurrent execution</li>

          <li>Provides better resource sharing</li>

        </ul>


      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          Process Management is responsible for creating, scheduling,
          executing, and terminating processes efficiently.
          It ensures smooth multitasking, proper CPU utilization,
          and effective resource sharing in modern operating systems.
        </p>

      </section>

    </div>
  );
};