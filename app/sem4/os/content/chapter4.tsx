import React from "react";

export const Ch4Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          Process Synchronization
        </span>{" "}
        is a mechanism used by Operating Systems to coordinate
        multiple processes or threads that access shared resources.
        When several processes execute simultaneously, improper
        access to shared data may lead to inconsistent results.
      </p>

      <p className="p-text mt-4">
        Synchronization ensures that processes execute in a safe,
        controlled, and coordinated manner without causing conflicts,
        data corruption, or unexpected behavior.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Critical Section */}
      <section>
        <h3 className="section-heading">
          Critical Section Problem
        </h3>

        <p className="p-text">
          A critical section is a part of a program where shared
          resources such as variables, files, or memory are accessed.
          Only one process should execute inside the critical section
          at a time.
        </p>

        <ul className="section-list">

          <li>
            Shared resources must be protected from simultaneous access.
          </li>

          <li>
            Multiple processes entering together may produce incorrect output.
          </li>

          <li>
            Synchronization techniques solve this problem.
          </li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Process P1
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              →
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow-md font-semibold">
              Critical Section
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              ←
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Process P2
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Requirements */}
      <section>
        <h3 className="section-heading">
          Requirements for a Good Synchronization Solution
        </h3>

        <ul className="section-list">

          <li>
            <strong>Mutual Exclusion:</strong> Only one process enters critical section at a time.
          </li>

          <li>
            <strong>Progress:</strong> Waiting processes should eventually get access.
          </li>

          <li>
            <strong>Bounded Waiting:</strong> No process should wait forever.
          </li>

        </ul>

        <div className="p-4 my-5 rounded-lg border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          These three conditions are very important for exam answers.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Race Condition */}
      <section>
        <h3 className="section-heading">
          Race Condition
        </h3>

        <p className="p-text">
          A race condition occurs when multiple processes access
          and modify shared data simultaneously, causing unpredictable results.
        </p>

        <div className="overflow-x-auto my-6">

          <div className="w-full border border-[#c7a669] rounded-xl p-4 md:p-6 bg-[#f3e7c2] shadow-md">

            <h4 className="text-center font-bold text-xl mb-5 text-[#5b3a29]">
              Race Condition Example
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-4">

                <h5 className="font-semibold mb-3">
                  Process P1
                </h5>

                <ul className="space-y-2 text-sm md:text-base">
                  <li>Read X = 5</li>
                  <li>Increment X</li>
                  <li>Write X = 6</li>
                </ul>

              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-4">

                <h5 className="font-semibold mb-3">
                  Process P2
                </h5>

                <ul className="space-y-2 text-sm md:text-base">
                  <li>Read X = 5</li>
                  <li>Increment X</li>
                  <li>Write X = 6</li>
                </ul>

              </div>

            </div>

            <p className="mt-5 text-[#2b1d0f]">
              Expected Value = 7 <br />
              Actual Value = 6
            </p>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Mutex */}
      <section>
        <h3 className="section-heading">
          Mutex Lock
        </h3>

        <p className="p-text">
          Mutex stands for Mutual Exclusion.
          A mutex lock allows only one process to access
          the critical section at a time.
        </p>

        <ul className="section-list">

          <li>Process must acquire lock before entering critical section.</li>

          <li>Lock is released after execution.</li>

          <li>Other processes wait until lock becomes free.</li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-col gap-4">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center font-semibold shadow-md">
              Lock Acquired
            </div>

            <div className="text-center text-xl md:text-2xl text-[#5b3a29]">
              ↓
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
              Execute Critical Section
            </div>

            <div className="text-center text-xl md:text-2xl text-[#5b3a29]">
              ↓
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center shadow-md">
              Release Lock
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Semaphore */}
      <section>
        <h3 className="section-heading">
          Semaphore
        </h3>

        <p className="p-text">
          A semaphore is a synchronization tool used
          to manage access to shared resources.
        </p>

        <ul className="section-list">

          <li>
            Integer variable used for synchronization.
          </li>

          <li>
            Two operations:
            <strong> wait()</strong> and
            <strong> signal()</strong>.
          </li>

          <li>
            Helps avoid race conditions.
          </li>

        </ul>

        {/* Semaphore Table */}
        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>

              <tr className="bg-[#7a523c] text-[#fff7ed]">

                <th className="border border-[#c7a669] p-3">
                  Operation
                </th>

                <th className="border border-[#c7a669] p-3">
                  Purpose
                </th>

              </tr>

            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  wait()
                </td>

                <td className="border border-[#c7a669] p-3">
                  Decreases semaphore value
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  signal()
                </td>

                <td className="border border-[#c7a669] p-3">
                  Increases semaphore value
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types */}
      <section>
        <h3 className="section-heading">
          Types of Semaphores
        </h3>

        <div className="overflow-x-auto my-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-[#5b3a29] text-[#fff7ed] rounded-lg p-5 shadow-md">

              <h4 className="font-semibold text-lg mb-3">
                Binary Semaphore
              </h4>

              <ul className="space-y-2 text-sm md:text-base">

                <li>Value can be 0 or 1</li>

                <li>Works similar to mutex</li>

                <li>Allows single process access</li>

              </ul>

            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg p-5 shadow-md">

              <h4 className="font-semibold text-lg mb-3">
                Counting Semaphore
              </h4>

              <ul className="space-y-2 text-sm md:text-base">

                <li>Value can be greater than 1</li>

                <li>Controls multiple resources</li>

                <li>Used in resource allocation</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Producer Consumer */}
      <section>
        <h3 className="section-heading">
          Producer Consumer Problem
        </h3>

        <p className="p-text">
          This classic synchronization problem occurs
          when producers generate data while consumers use it.
        </p>

        <ul className="section-list">

          <li>Producer adds items to buffer</li>

          <li>Consumer removes items from buffer</li>

          <li>Synchronization prevents overflow and underflow</li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md">
              Producer
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              →
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow-md">
              Shared Buffer
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              →
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md">
              Consumer
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Dining Philosophers */}
      <section>
        <h3 className="section-heading">
          Dining Philosophers Problem
        </h3>

        <p className="p-text">
          This synchronization problem demonstrates
          deadlock and resource sharing among processes.
        </p>

        <ul className="section-list">

          <li>Five philosophers sit around a table.</li>

          <li>Each philosopher needs two forks to eat.</li>

          <li>Improper synchronization can cause deadlock.</li>

        </ul>

        <div className="p-4 my-5 rounded-lg bg-[#f0ddb6] border border-[#c7a669] text-[#2b1d0f]">
          The Dining Philosophers Problem is commonly asked
          in Operating System interviews and exams.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Monitor */}
      <section>
        <h3 className="section-heading">
          Monitor
        </h3>

        <p className="p-text">
          A monitor is a high-level synchronization construct
          that allows only one process to execute inside it at a time.
        </p>

        <ul className="section-list">

          <li>Provides automatic mutual exclusion</li>

          <li>Simplifies synchronization programming</li>

          <li>Used in modern programming languages</li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>
        <h3 className="section-heading">
          Advantages of Synchronization
        </h3>

        <ul className="section-list">

          <li>Prevents data inconsistency</li>

          <li>Avoids race conditions</li>

          <li>Ensures proper resource sharing</li>

          <li>Improves system reliability</li>

          <li>Supports concurrent execution safely</li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          Process Synchronization is essential in multi-tasking
          operating systems where multiple processes share resources.
          Synchronization mechanisms such as mutexes, semaphores,
          and monitors help maintain data consistency and prevent
          conflicts during concurrent execution.
        </p>

      </section>

    </div>
  );
};