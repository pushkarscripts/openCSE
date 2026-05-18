import React from "react";

export const Ch1Content = () => {
  return (
    <div className="course-content">

      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">
          Introduction to Operating Systems
        </span>{" "}
        is one of the most important foundations in Computer Science.
        An Operating System (OS) acts as an interface between the user
        and computer hardware. It manages system resources, controls
        program execution, handles memory, files, devices, and ensures
        smooth functioning of the computer system.
      </p>

      <p className="p-text mt-4">
        Every modern device — laptops, smartphones, servers, ATMs,
        and smart TVs — uses an operating system. Common examples include
        Windows, Linux, macOS, Android, and iOS.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* What is OS */}
      <section>
        <h3 className="section-heading">
          What is an Operating System?
        </h3>

        <ul className="section-list">
          <li>
            An Operating System is system software that manages hardware
            and software resources.
          </li>

          <li>
            It provides an environment for executing application programs.
          </li>

          <li>
            It acts as an interface between the user and hardware.
          </li>

          <li>
            Without an operating system, computers cannot function properly.
          </li>
        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">
          <div className="min-w-[320px] border border-[#c7a669] rounded-xl p-6 bg-[#f3e7c2] text-center shadow-md">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg font-semibold text-lg">
              User
            </div>

            <div className="text-3xl my-2 text-[#5b3a29]">↓</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg font-semibold text-lg">
              Operating System
            </div>

            <div className="text-3xl my-2 text-[#5b3a29]">↓</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg font-semibold text-lg">
              Computer Hardware
            </div>

          </div>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Objectives */}
      <section>
        <h3 className="section-heading">
          Objectives of Operating System
        </h3>

        <ul className="section-list">
          <li>To make the computer system convenient to use.</li>

          <li>
            To manage hardware resources efficiently.
          </li>

          <li>
            To improve system performance.
          </li>

          <li>
            To provide security and protection.
          </li>

          <li>
            To allow multitasking and resource sharing.
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">
              Convenience
            </h4>
            <p>
              Makes the system easier for users to interact with.
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">
              Efficiency
            </h4>
            <p>
              Ensures optimal utilization of hardware resources.
            </p>
          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Functions */}
      <section>
        <h3 className="section-heading">
          Major Functions of an Operating System
        </h3>

        <div className="overflow-x-auto my-6">

          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">
                  Function
                </th>

                <th className="border border-[#c7a669] p-3">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Process Management
                </td>

                <td className="border border-[#c7a669] p-3">
                  Handles creation and scheduling of processes.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Memory Management
                </td>

                <td className="border border-[#c7a669] p-3">
                  Allocates and manages system memory.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  File Management
                </td>

                <td className="border border-[#c7a669] p-3">
                  Organizes and controls files and directories.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Device Management
                </td>

                <td className="border border-[#c7a669] p-3">
                  Controls input and output devices.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Security
                </td>

                <td className="border border-[#c7a669] p-3">
                  Protects system and user data.
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
          Types of Operating Systems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

          {[
            "Batch Operating System",
            "Multiprogramming Operating System",
            "Multitasking Operating System",
            "Real-Time Operating System",
            "Distributed Operating System",
            "Mobile Operating System",
          ].map((type, index) => (
            <div
              key={index}
              className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm"
            >
              <p className="font-semibold">{type}</p>
            </div>
          ))}

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Structure */}
      <section>
        <h3 className="section-heading">
          Basic Structure of Operating System
        </h3>

        <p className="p-text">
          The Operating System sits between hardware and application programs.
          It provides services that help applications communicate with hardware.
        </p>

        {/* Structure Diagram */}
        <div className="overflow-x-auto my-6">

          <div className="min-w-[320px] flex flex-col gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              User
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Application Programs
            </div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Operating System
            </div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg shadow-md font-semibold">
              Hardware
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* System Calls */}
      <section>
        <h3 className="section-heading">
          System Calls
        </h3>

        <p className="p-text">
          System calls provide communication between user programs
          and the operating system.
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">

          <div className="font-semibold text-lg mb-4">
            Examples of System Calls
          </div>

          <ul className="section-list">
            <li>File handling</li>
            <li>Process creation</li>
            <li>Memory allocation</li>
            <li>Input and output operations</li>
            <li>Communication between processes</li>
          </ul>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Kernel and Shell */}
      <section>
        <h3 className="section-heading">
          Kernel and Shell
        </h3>

        <ul className="section-list">

          <li>
            <strong>Kernel:</strong> Core part of the operating system
            responsible for managing hardware resources.
          </li>

          <li>
            <strong>Shell:</strong> Interface through which users interact
            with the operating system.
          </li>

        </ul>

        <div className="overflow-x-auto my-6">

          <div className="min-w-[320px] flex flex-col gap-3 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg shadow-md font-semibold">
              User
            </div>

            <div className="text-2xl text-[#5b3a29]">↓</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-3 rounded-lg shadow-md font-semibold">
              Shell
            </div>

            <div className="text-2xl text-[#5b3a29]">↓</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-3 rounded-lg shadow-md font-semibold">
              Kernel
            </div>

            <div className="text-2xl text-[#5b3a29]">↓</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-3 rounded-lg shadow-md font-semibold">
              Hardware
            </div>

          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>
        <h3 className="section-heading">
          Advantages of Operating System
        </h3>

        <ul className="section-list">
          <li>Efficient hardware utilization</li>
          <li>Better user convenience</li>
          <li>Supports multitasking</li>
          <li>Provides security and protection</li>
          <li>Improves overall system performance</li>
        </ul>

    
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          Operating Systems are the backbone of modern computing systems.
          They manage hardware resources, execute programs, provide security,
          and make computers convenient and efficient to use. Understanding
          Operating Systems is essential for advanced computer science,
          system programming, networking, and cybersecurity.
        </p>

      </section>

    </div>
  );
};