export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Operating System</span> — a
        foundational course designed to help you understand how computer systems
        manage hardware, software, memory, processes, and resources efficiently.
        This course introduces the core concepts of modern operating systems and
        their role in computer architecture and application execution.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I:{" "}
          <span className="section-subheading">
            Introduction to Operating Systems
          </span>
        </h3>

        <ul className="section-list">
          <li>Definition and objectives of an operating system</li>
          <li>Functions and services provided by operating systems</li>
          <li>Types of operating systems</li>
          <li>Batch, multiprogramming, multitasking, and real-time systems</li>
          <li>System calls and operating system structure</li>
          <li>Kernel, shell, and user interface concepts</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II:{" "}
          <span className="section-subheading">
            Process Management
          </span>
        </h3>

        <ul className="section-list">
          <li>Process concept and process states</li>
          <li>Process Control Block (PCB)</li>
          <li>Process scheduling queues</li>
          <li>Context switching</li>
          <li>Threads and multithreading concepts</li>
          <li>Inter-process communication (IPC)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III:{" "}
          <span className="section-subheading">
            CPU Scheduling
          </span>
        </h3>

        <ul className="section-list">
          <li>Scheduling criteria and objectives</li>
          <li>Preemptive and non-preemptive scheduling</li>
          <li>FCFS scheduling algorithm</li>
          <li>SJF and Priority scheduling</li>
          <li>Round Robin scheduling</li>
          <li>Scheduling performance evaluation</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV:{" "}
          <span className="section-subheading">
            Process Synchronization
          </span>
        </h3>

        <ul className="section-list">
          <li>Critical section problem</li>
          <li>Race conditions</li>
          <li>Synchronization hardware</li>
          <li>Semaphores and mutex locks</li>
          <li>Producer-consumer problem</li>
          <li>Reader-writer problem</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module V */}
      <section>
        <h3 className="section-heading">
          Module V:{" "}
          <span className="section-subheading">
            Deadlocks
          </span>
        </h3>

        <ul className="section-list">
          <li>Deadlock concept and system model</li>
          <li>Necessary conditions for deadlock</li>
          <li>Resource allocation graph</li>
          <li>Deadlock prevention techniques</li>
          <li>Deadlock avoidance and Banker&apos;s Algorithm</li>
          <li>Deadlock detection and recovery</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VI */}
      <section>
        <h3 className="section-heading">
          Module VI:{" "}
          <span className="section-subheading">
            Memory Management
          </span>
        </h3>

        <ul className="section-list">
          <li>Memory management techniques</li>
          <li>Contiguous and non-contiguous allocation</li>
          <li>Fragmentation and compaction</li>
          <li>Swapping and virtual memory</li>
          <li>Demand paging concepts</li>
          <li>Page replacement algorithms</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VII */}
      <section>
        <h3 className="section-heading">
          Module VII:{" "}
          <span className="section-subheading">
            Paging and Segmentation
          </span>
        </h3>

        <ul className="section-list">
          <li>Paging technique and address translation</li>
          <li>Page tables and TLB</li>
          <li>Multilevel paging</li>
          <li>Segmentation concepts</li>
          <li>Difference between paging and segmentation</li>
          <li>Segmentation with paging</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VIII */}
      <section>
        <h3 className="section-heading">
          Module VIII:{" "}
          <span className="section-subheading">
            File Systems and I/O Management
          </span>
        </h3>

        <ul className="section-list">
          <li>File concepts and access methods</li>
          <li>Directory structures</li>
          <li>File allocation methods</li>
          <li>Disk scheduling algorithms</li>
          <li>I/O systems and buffering</li>
          <li>Secondary storage management</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will understand the internal working of
        operating systems, process handling, memory management, synchronization,
        scheduling algorithms, and file systems — providing a strong foundation
        for advanced computer science subjects and system-level programming.
      </p>
    </div>
  );
};