import React from "react";

export const Ch7Content = () => {
  return (
    <div className="course-content">

      {/* Intro */}
      <p className="p-text">
        <span className="font-semibold">Paging and Segmentation</span> are two important
        memory management techniques used by Operating Systems to efficiently allocate memory
        and support smooth execution of multiple processes.
      </p>

      <p className="p-text mt-4">
        Both techniques solve memory management problems in different ways:
        Paging focuses on fixed-size blocks, while Segmentation focuses on logical program structure.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Paging */}
      <section>
        <h3 className="section-heading">Paging</h3>

        <p className="p-text">
          Paging divides memory into fixed-size blocks called <b>frames</b>,
          and processes into fixed-size blocks called <b>pages</b>.
        </p>

        <ul className="section-list">
          <li>Pages are mapped to frames using a page table</li>
          <li>Eliminates external fragmentation</li>
          <li>Allows non-contiguous memory allocation</li>
          <li>Improves memory utilization</li>
        </ul>

        {/* Paging Diagram */}
        <div className="overflow-x-auto my-6">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Paging Structure
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Pages */}
              <div>
                <h5 className="text-center font-semibold mb-4 text-[#5b3a29]">
                  Process Pages
                </h5>

                <div className="space-y-3">
                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">Page 0</div>
                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">Page 1</div>
                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">Page 2</div>
                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">Page 3</div>
                </div>
              </div>

              {/* Frames */}
              <div>
                <h5 className="text-center font-semibold mb-4 text-[#5b3a29]">
                  Memory Frames
                </h5>

                <div className="space-y-3">
                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">Frame 3</div>
                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">Frame 1</div>
                  <div className="bg-[#7a523c] text-[#fff7ed] text-center p-3 rounded-lg">Frame 7</div>
                  <div className="bg-[#5b3a29] text-[#fff7ed] text-center p-3 rounded-lg">Frame 9</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Segmentation */}
      <section>
        <h3 className="section-heading">Segmentation</h3>

        <p className="p-text">
          Segmentation divides a program into logical units such as functions, stacks, heap,
          data, and code segments.
        </p>

        <ul className="section-list">
          <li>Each segment has a different size</li>
          <li>Based on logical view of the program</li>
          <li>Easy to protect and share segments</li>
          <li>More natural for programmer understanding</li>
        </ul>

        {/* Diagram */}
        <div className="overflow-x-auto my-6">
          <div className="w-full bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-4 md:p-6 shadow-md">

            <h4 className="text-center font-bold text-xl mb-6 text-[#5b3a29]">
              Segmentation Structure
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

              <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg shadow">
                Code Segment
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow">
                Data Segment
              </div>

              <div className="bg-[#5b3a29] text-[#fff7ed] p-5 rounded-lg shadow">
                Stack Segment
              </div>

              <div className="bg-[#7a523c] text-[#fff7ed] p-5 rounded-lg shadow md:col-span-3">
                Heap Segment
              </div>

            </div>

          </div>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison */}
      <section>
        <h3 className="section-heading">Paging vs Segmentation</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">

            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3">Paging</th>
                <th className="border border-[#c7a669] p-3">Segmentation</th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">

              <tr>
                <td className="border border-[#c7a669] p-3">Fixed-size blocks</td>
                <td className="border border-[#c7a669] p-3">Variable-size segments</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">No external fragmentation</td>
                <td className="border border-[#c7a669] p-3">May suffer external fragmentation</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Hardware-based mapping</td>
                <td className="border border-[#c7a669] p-3">Logical/program-based view</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Simple but less flexible</td>
                <td className="border border-[#c7a669] p-3">More flexible and meaningful</td>
              </tr>

            </tbody>

          </table>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Key Points */}
      <section>
        <h3 className="section-heading">Key Points</h3>

        <div className="bg-[#f7e7bf] border-l-4 border-[#b8925d] p-5 rounded-lg text-[#2b1d0f]">

          <ul className="space-y-2">
            <li>Paging uses fixed-size memory blocks called pages and frames.</li>
            <li>Segmentation uses logical divisions of a program.</li>
            <li>Paging removes external fragmentation.</li>
            <li>Segmentation improves logical structure and protection.</li>
            <li>Modern systems often combine both techniques.</li>
          </ul>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Paging and Segmentation are fundamental memory management techniques.
          Paging focuses on efficient memory utilization using fixed-size blocks,
          while segmentation focuses on logical organization of programs.
          Together, they help operating systems achieve efficient, flexible,
          and scalable memory management.
        </p>

      </section>

    </div>
  );
};