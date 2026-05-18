import React from "react";

export const Ch6Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          Memory Management
        </span>{" "}
        is one of the most important functions of an Operating System.
        It is responsible for managing primary memory (RAM),
        allocating memory to processes, tracking memory usage,
        and ensuring efficient utilization of system resources.
      </p>

      <p className="p-text mt-4">
        Since multiple programs run simultaneously in modern systems,
        memory management helps prevent conflicts between processes
        while improving speed, multitasking, and overall performance.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Need */}
      <section>
        <h3 className="section-heading">
          Need for Memory Management
        </h3>

        <ul className="section-list">

          <li>
            Efficient utilization of main memory
          </li>

          <li>
            Proper allocation and deallocation of memory
          </li>

          <li>
            Protection between processes
          </li>

          <li>
            Support for multitasking
          </li>

          <li>
            Faster execution of programs
          </li>

        </ul>

        <div className="p-4 my-5 rounded-lg border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          Without memory management, processes may overwrite
          each other’s data causing system crashes.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Memory Hierarchy */}
      <section>
        <h3 className="section-heading">
          Memory Hierarchy
        </h3>

        <p className="p-text">
          Computer systems use different types of memory
          organized in a hierarchy based on speed, cost,
          and storage capacity.
        </p>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Memory Hierarchy
            </h4>

            <div className="flex flex-col items-center gap-4">

              <div className="bg-[#5b3a29] text-[#fff7ed] px-10 py-4 rounded-lg shadow-md">
                Registers
              </div>

              <div className="text-[#5b3a29] text-2xl">
                ↓
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] px-10 py-4 rounded-lg shadow-md">
                Cache Memory
              </div>

              <div className="text-[#5b3a29] text-2xl">
                ↓
              </div>

              <div className="bg-[#5b3a29] text-[#fff7ed] px-10 py-4 rounded-lg shadow-md">
                Main Memory (RAM)
              </div>

              <div className="text-[#5b3a29] text-2xl">
                ↓
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] px-10 py-4 rounded-lg shadow-md">
                Secondary Storage
              </div>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Contiguous */}
      <section>
        <h3 className="section-heading">
          Contiguous Memory Allocation
        </h3>

        <p className="p-text">
          In contiguous memory allocation,
          each process occupies a single continuous block of memory.
        </p>

        <ul className="section-list">

          <li>
            Simple and easy to implement
          </li>

          <li>
            Fast memory access
          </li>

          <li>
            Can lead to fragmentation problems
          </li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">

            <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-4 rounded-lg">
              Operating System
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] text-center p-4 rounded-lg">
              Process P1
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-4 rounded-lg">
              Process P2
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] text-center p-4 rounded-lg">
              Free Space
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Fragmentation */}
      <section>
        <h3 className="section-heading">
          Fragmentation
        </h3>

        <p className="p-text">
          Fragmentation occurs when memory becomes inefficiently used.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              Internal Fragmentation
            </h4>

            <p>
              Wasted memory inside allocated partition.
            </p>

          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">

            <h4 className="font-semibold text-lg mb-3">
              External Fragmentation
            </h4>

            <p>
              Free memory exists but not in contiguous form.
            </p>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Paging */}
      <section>
        <h3 className="section-heading">
          Paging
        </h3>

        <p className="p-text">
          Paging is a memory management technique
          where processes are divided into fixed-size pages
          and memory is divided into frames.
        </p>

        <ul className="section-list">

          <li>
            Eliminates external fragmentation
          </li>

          <li>
            Allows non-contiguous memory allocation
          </li>

          <li>
            Uses page tables for mapping
          </li>

        </ul>

        {/* Paging Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full border border-[#c7a669] rounded-xl p-4 md:p-6 bg-[#f3e7c2] shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Paging Structure
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <h5 className="text-center font-semibold mb-3 text-[#5b3a29]">
                  Process Pages
                </h5>

                <div className="space-y-3">

                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">
                    Page 0
                  </div>

                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">
                    Page 1
                  </div>

                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">
                    Page 2
                  </div>

                </div>

              </div>

              <div>

                <h5 className="text-center font-semibold mb-3 text-[#5b3a29]">
                  Memory Frames
                </h5>

                <div className="space-y-3">

                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">
                    Frame 5
                  </div>

                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">
                    Frame 2
                  </div>

                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">
                    Frame 9
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Segmentation */}
      <section>
        <h3 className="section-heading">
          Segmentation
        </h3>

        <p className="p-text">
          Segmentation divides programs into logical units
          such as functions, arrays, or modules.
        </p>

        <ul className="section-list">

          <li>
            Supports logical program structure
          </li>

          <li>
            Segment sizes can vary
          </li>

          <li>
            Easier sharing and protection
          </li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg text-center shadow-md">
              Code Segment
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg text-center shadow-md">
              Data Segment
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg text-center shadow-md">
              Stack Segment
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Virtual Memory */}
      <section>
        <h3 className="section-heading">
          Virtual Memory
        </h3>

        <p className="p-text">
          Virtual memory allows execution of programs
          larger than physical memory by using disk storage
          as an extension of RAM.
        </p>

        <ul className="section-list">

          <li>
            Increases multiprogramming
          </li>

          <li>
            Improves memory utilization
          </li>

          <li>
            Uses demand paging technique
          </li>

        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg shadow-md">
              RAM
            </div>

            <div className="text-[#5b3a29] text-2xl">
              ↔
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow-md">
              Disk Storage
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Page Replacement */}
      <section>
        <h3 className="section-heading">
          Page Replacement Algorithms
        </h3>

        <p className="p-text">
          When memory becomes full,
          Operating Systems replace existing pages
          to load new pages.
        </p>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>

              <tr className="bg-[#7a523c] text-[#fff7ed]">

                <th className="border border-[#c7a669] p-3">
                  Algorithm
                </th>

                <th className="border border-[#c7a669] p-3">
                  Description
                </th>

              </tr>

            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  FIFO
                </td>

                <td className="border border-[#c7a669] p-3">
                  Replaces oldest page first
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  LRU
                </td>

                <td className="border border-[#c7a669] p-3">
                  Replaces least recently used page
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Optimal
                </td>

                <td className="border border-[#c7a669] p-3">
                  Replaces page not needed for longest future time
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Thrashing */}
      <section>
        <h3 className="section-heading">
          Thrashing
        </h3>

        <p className="p-text">
          Thrashing occurs when the system spends more time
          swapping pages between RAM and disk
          instead of executing processes.
        </p>

        <ul className="section-list">

          <li>
            Causes severe performance degradation
          </li>

          <li>
            Happens when insufficient frames are allocated
          </li>

          <li>
            High paging activity indicates thrashing
          </li>

        </ul>

        <div className="p-4 my-5 rounded-lg bg-[#f7e7bf] border-l-4 border-[#b8925d] text-[#2b1d0f]">
          Thrashing reduces CPU utilization significantly
          because the CPU waits for memory operations frequently.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison */}
      <section>
        <h3 className="section-heading">
          Paging vs Segmentation
        </h3>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>

              <tr className="bg-[#7a523c] text-[#fff7ed]">

                <th className="border border-[#c7a669] p-3">
                  Paging
                </th>

                <th className="border border-[#c7a669] p-3">
                  Segmentation
                </th>

              </tr>

            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Fixed size memory blocks
                </td>

                <td className="border border-[#c7a669] p-3">
                  Variable size logical units
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Eliminates external fragmentation
                </td>

                <td className="border border-[#c7a669] p-3">
                  May suffer external fragmentation
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Hardware oriented
                </td>

                <td className="border border-[#c7a669] p-3">
                  User/program oriented
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
          Memory Management is essential for efficient execution
          of modern operating systems.
          Techniques such as paging, segmentation,
          virtual memory, and page replacement
          help improve performance, multitasking,
          and resource utilization while ensuring
          smooth execution of processes.
        </p>

      </section>

    </div>
  );
};