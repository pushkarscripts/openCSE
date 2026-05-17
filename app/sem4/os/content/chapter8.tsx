import React from "react";

export const Ch8Content = () => {
  return (
    <div className="course-content">

      {/* Intro */}
      <p className="p-text">
        <span className="font-semibold">File Systems and I/O Management</span> are core
        components of an Operating System that handle how data is stored, organized,
        accessed, and transferred between hardware and software.
      </p>

      <p className="p-text mt-4">
        File systems manage long-term storage on disks, while I/O management ensures
        smooth communication between CPU, memory, and external devices like keyboards,
        disks, and printers.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* File System */}
      <section>
        <h3 className="section-heading">File System</h3>

        <p className="p-text">
          A file system is a method used by the Operating System to organize and
          store data on storage devices such as HDDs and SSDs.
        </p>

        <ul className="section-list">
          <li>Organizes data into files and directories</li>
          <li>Manages storage space efficiently</li>
          <li>Provides naming and access control</li>
          <li>Ensures data security and reliability</li>
        </ul>

        {/* File hierarchy diagram */}
        <div className="overflow-x-auto my-6">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              File System Structure
            </h4>

            <div className="flex flex-col items-center gap-4">

              <div className="bg-[#5b3a29] text-[#fff7ed] px-8 py-3 rounded-lg shadow">
                Root Directory (/)
              </div>

              <div className="text-[#5b3a29] text-2xl">↓</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

                <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center">
                  /home
                </div>

                <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center">
                  /bin
                </div>

                <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center">
                  /etc
                </div>

              </div>

              <div className="text-[#5b3a29] text-2xl">↓</div>

              <div className="bg-[#5b3a29] text-[#fff7ed] px-6 py-3 rounded-lg shadow">
                Files (data.txt, config.sys, user.doc)
              </div>

            </div>

          </div>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* File Operations */}
      <section>
        <h3 className="section-heading">File Operations</h3>

        <ul className="section-list">
          <li>Create – making a new file</li>
          <li>Open – accessing file for use</li>
          <li>Read – retrieving data</li>
          <li>Write – storing data</li>
          <li>Close – releasing file</li>
          <li>Delete – removing file</li>
        </ul>

        <div className="p-4 my-5 rounded-lg bg-[#f7e7bf] border-l-4 border-[#b8925d] text-[#2b1d0f]">
          File operations are controlled by the OS to ensure data integrity and security.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types of Files */}
      <section>
        <h3 className="section-heading">Types of Files</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Text Files</h4>
            <p>Store data in human-readable format (e.g., .txt, .doc).</p>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Binary Files</h4>
            <p>Store data in machine-readable format (e.g., .exe, .bin).</p>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Directory Files</h4>
            <p>Contain metadata and file organization structure.</p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Special Files</h4>
            <p>Represent devices like keyboard, printer, etc.</p>
          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Disk Structure */}
      <section>
        <h3 className="section-heading">Disk Structure</h3>

        <p className="p-text">
          Storage devices are divided into sectors, tracks, and blocks
          to efficiently store and retrieve data.
        </p>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Disk Structure
            </h4>

            <div className="flex flex-col items-center gap-4">

              <div className="bg-[#5b3a29] text-[#fff7ed] px-8 py-3 rounded-lg">
                Disk
              </div>

              <div className="text-[#5b3a29] text-2xl">↓</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

                <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center">
                  Tracks
                </div>

                <div className="bg-[#5b3a29] text-[#fff7ed] p-4 rounded-lg text-center">
                  Sectors
                </div>

                <div className="bg-[#7a523c] text-[#fff7ed] p-4 rounded-lg text-center">
                  Blocks
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* I/O Management */}
      <section>
        <h3 className="section-heading">I/O Management</h3>

        <p className="p-text">
          I/O Management handles communication between CPU and external devices.
        </p>

        <ul className="section-list">
          <li>Manages input and output devices</li>
          <li>Ensures smooth data transfer</li>
          <li>Reduces CPU waiting time</li>
          <li>Uses buffering and caching</li>
        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">
          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg shadow-md">
              CPU
            </div>

            <div className="text-2xl text-[#5b3a29]">↔</div>

            <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow-md">
              I/O Controller
            </div>

            <div className="text-2xl text-[#5b3a29]">↔</div>

            <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg shadow-md">
              Devices (Keyboard, Printer, Disk)
            </div>

          </div>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* I/O Techniques */}
      <section>
        <h3 className="section-heading">I/O Techniques</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl">
            <h4 className="font-semibold mb-2">Programmed I/O</h4>
            <p>CPU actively waits for I/O operations.</p>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-xl">
            <h4 className="font-semibold mb-2">Interrupt-driven I/O</h4>
            <p>CPU is interrupted when device is ready.</p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-xl">
            <h4 className="font-semibold mb-2">DMA</h4>
            <p>Direct Memory Access transfers data without CPU involvement.</p>
          </div>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Buffering */}
      <section>
        <h3 className="section-heading">Buffering & Spooling</h3>

        <ul className="section-list">
          <li>Buffering stores data temporarily during transfer</li>
          <li>Spooling queues data for devices like printers</li>
          <li>Improves system efficiency</li>
        </ul>

        <div className="p-4 my-5 rounded-lg border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          Example: Printer jobs are stored in a queue before printing.
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          File Systems and I/O Management ensure efficient storage,
          retrieval, and transfer of data between hardware and software.
          These components play a key role in system performance,
          reliability, and user experience in an Operating System.
        </p>

      </section>

    </div>
  );
};