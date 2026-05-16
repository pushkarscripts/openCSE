import React from "react";

export const Ch5Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          Deadlock
        </span>{" "}
        is a situation in an Operating System where two or more
        processes wait indefinitely for resources held by each other.
        Since none of the processes can proceed, the entire system
        or a part of it becomes stuck.
      </p>

      <p className="p-text mt-4">
        Deadlocks are one of the most important concepts in
        Operating Systems because they directly affect system
        performance, multitasking, and resource management.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Real Life Analogy */}
      <section>
        <h3 className="section-heading">
          Real Life Example of Deadlock
        </h3>

        <p className="p-text">
          Imagine two cars meeting on a narrow bridge.
          Both drivers wait for the other to move first.
          Since neither moves backward, traffic becomes blocked.
        </p>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl text-[#5b3a29] mb-6">
              Deadlock Analogy
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-4">

              <div className="bg-[#5b3a29] text-[#fff7ed] px-6 py-5 rounded-xl shadow-md">
                🚗 Car A
              </div>

              <div className="text-xl md:text-3xl text-[#5b3a29] font-bold">
                ↔
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-5 rounded-xl shadow-md">
                🚗 Car B
              </div>

            </div>

            <p className="text-center mt-5 text-[#2b1d0f]">
              Both cars wait forever → Deadlock
            </p>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Conditions */}
      <section>
        <h3 className="section-heading">
          Necessary Conditions for Deadlock
        </h3>

        <p className="p-text">
          Deadlock occurs only if all four conditions
          are true simultaneously.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              1. Mutual Exclusion
            </h4>

            <p>
              Only one process can use a resource at a time.
            </p>

          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              2. Hold and Wait
            </h4>

            <p>
              Process holds one resource while waiting for another.
            </p>

          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              3. No Preemption
            </h4>

            <p>
              Resources cannot be forcefully removed.
            </p>

          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              4. Circular Wait
            </h4>

            <p>
              Processes form a circular chain waiting for resources.
            </p>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Resource Allocation Graph */}
      <section>
        <h3 className="section-heading">
          Resource Allocation Graph (RAG)
        </h3>

        <p className="p-text">
          A Resource Allocation Graph visually represents
          processes and resources in the system.
        </p>

        <ul className="section-list">

          <li>Circle → Process</li>

          <li>Rectangle → Resource</li>

          <li>Arrow from Process to Resource → Request</li>

          <li>Arrow from Resource to Process → Allocation</li>

        </ul>

        {/* Graph Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full border border-[#c7a669] bg-[#f3e7c2] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Resource Allocation Graph
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-4 text-center">

              <div className="bg-[#5b3a29] text-[#fff7ed] rounded-full h-20 w-20 flex items-center justify-center font-bold">
                P1
              </div>

              <div className="text-[#5b3a29] text-xl md:text-2xl">
                →
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] rounded-lg px-6 py-5 font-bold">
                R1
              </div>

              <div className="text-[#5b3a29] text-xl md:text-2xl">
                →
              </div>

              <div className="bg-[#5b3a29] text-[#fff7ed] rounded-full h-20 w-20 flex items-center justify-center font-bold">
                P2
              </div>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Deadlock Prevention */}
      <section>
        <h3 className="section-heading">
          Deadlock Prevention
        </h3>

        <p className="p-text">
          Deadlock prevention ensures that at least one
          of the four necessary conditions never occurs.
        </p>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>

              <tr className="bg-[#7a523c] text-[#fff7ed]">

                <th className="border border-[#c7a669] p-3">
                  Condition
                </th>

                <th className="border border-[#c7a669] p-3">
                  Prevention Method
                </th>

              </tr>

            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Mutual Exclusion
                </td>

                <td className="border border-[#c7a669] p-3">
                  Make resources sharable where possible
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Hold and Wait
                </td>

                <td className="border border-[#c7a669] p-3">
                  Request all resources at once
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  No Preemption
                </td>

                <td className="border border-[#c7a669] p-3">
                  Force release resources if needed
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Circular Wait
                </td>

                <td className="border border-[#c7a669] p-3">
                  Assign resource ordering
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Avoidance */}
      <section>
        <h3 className="section-heading">
          Deadlock Avoidance
        </h3>

        <p className="p-text">
          Deadlock avoidance dynamically checks resource allocation
          to ensure the system never enters an unsafe state.
        </p>

        <ul className="section-list">

          <li>Requires advance information about resource needs</li>

          <li>Uses Safe State concept</li>

          <li>Most famous algorithm: Banker’s Algorithm</li>

        </ul>

        {/* Safe vs Unsafe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              Safe State
            </h4>

            <p>
              Processes can complete execution safely.
            </p>

          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              Unsafe State
            </h4>

            <p>
              System may eventually enter deadlock.
            </p>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Banker's Algorithm */}
      <section>
        <h3 className="section-heading">
          Banker’s Algorithm
        </h3>

        <p className="p-text">
          Banker’s Algorithm is used for deadlock avoidance.
          It checks whether resource allocation leaves
          the system in a safe state.
        </p>

        <ul className="section-list">

          <li>Developed by Edsger Dijkstra</li>

          <li>Based on maximum resource demand</li>

          <li>Allocates resources only if system remains safe</li>

        </ul>

        {/* Flow */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md">
              Resource Request
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              →
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md">
              Safety Check
            </div>

            <div className="text-xl md:text-2xl text-[#5b3a29]">
              →
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md">
              Allocate / Reject
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Detection */}
      <section>
        <h3 className="section-heading">
          Deadlock Detection
        </h3>

        <p className="p-text">
          Instead of preventing deadlocks,
          some systems allow deadlocks to occur
          and later detect them.
        </p>

        <ul className="section-list">

          <li>System periodically checks for cycles</li>

          <li>Used when deadlocks are rare</li>

          <li>Requires additional overhead</li>

        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Recovery */}
      <section>
        <h3 className="section-heading">
          Deadlock Recovery
        </h3>

        <p className="p-text">
          Once deadlock is detected,
          the system must recover from it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              Process Termination
            </h4>

            <ul className="space-y-2">
              <li>Abort all deadlocked processes</li>
              <li>Abort one process at a time</li>
            </ul>

          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              Resource Preemption
            </h4>

            <ul className="space-y-2">
              <li>Temporarily remove resources</li>
              <li>Rollback process state</li>
            </ul>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison */}
      <section>
        <h3 className="section-heading">
          Prevention vs Avoidance
        </h3>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
            <tr className="bg-[#7a523c] text-[#fff7ed]">
            <th className="border border-[#c7a669] p-3">
        Prevention
        </th>

        <th className="border border-[#c7a669] p-3">
        Avoidance
     </th>
     </tr>
    </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Blocks one deadlock condition
                </td>

                <td className="border border-[#c7a669] p-3">
                  Checks safe state dynamically
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Simpler approach
                </td>

                <td className="border border-[#c7a669] p-3">
                  More complex
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Lower resource utilization
                </td>

                <td className="border border-[#c7a669] p-3">
                  Better resource utilization
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Important Points */}
      <section>
        <h3 className="section-heading">
          Important Exam Points
        </h3>

        <div className="bg-[#f7e7bf] border-l-4 border-[#b8925d] rounded-lg p-5 text-[#2b1d0f]">

          <ul className="space-y-3">

            <li>
              All four conditions are necessary for deadlock.
            </li>

            <li>
              Banker’s Algorithm is the most important avoidance algorithm.
            </li>

            <li>
              Resource Allocation Graph is frequently asked in exams.
            </li>

            <li>
              Difference between prevention and avoidance is important.
            </li>

          </ul>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          Deadlocks occur when processes wait indefinitely
          for resources held by each other.
          Operating Systems use prevention, avoidance,
          detection, and recovery techniques to manage deadlocks.
          Proper resource allocation and synchronization
          help ensure smooth and efficient system execution.
        </p>

      </section>

    </div>
  );
};