import Image from "next/image";

export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Introduction to Computing</span> provides
        the essential foundation of computer science. This chapter covers
        fundamentals, computing history, computer components, problem solving,
        pseudo-code, flowcharts, memory, variables, instructions and programs.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Fundamentals */}
      <section>
        <h3 className="section-heading">Fundamentals of Computing</h3>
        <ul className="section-list">
          <li>Computing is using algorithms and machines to transform raw data into useful information.</li>
          <li>Main purpose: automate tasks, solve problems and perform calculations.</li>
          <li>Example: Sorting marks to find the highest scorer.</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Quick Example</div>
          <div className="mt-2 text-[#2b1d0f]">
            Input: [72, 89, 34, 91] <br />
            Output: [91, 89, 72, 34]
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* History */}
      <section>
        <h3 className="section-heading">Historical Perspective</h3>
        <ul className="section-list">
          <li>Abacus used for basic calculations.</li>
          <li>Mechanical calculators such as Pascaline and Leibniz machine.</li>
          <li>Babbage&apos;s Analytical Engine introduced programmability.</li>
          <li>Electronic development: vacuum tubes, transistors, ICs, microprocessors.</li>
          <li>Modern computing includes personal computers, cloud, AI and IoT.</li>
        </ul>

        <Image
          src="/timeline-computing.png"
          alt="timeline-computing"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={1000}
          height={350}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Early Computers */}
      <section>
        <h3 className="section-heading">Early Computers and Machines</h3>

        <ul className="section-list">
          <li><strong>Mechanical:</strong> Difference Engine.</li>
          <li><strong>Electromechanical:</strong> Zuse machines, punched card devices.</li>
          <li><strong>Electronic:</strong> ENIAC and EDVAC.</li>
        </ul>

        <Image
          src="/eniac-block.png"
          alt="eniac-block"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={850}
          height={380}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Components */}
      <section>
        <h3 className="section-heading">Components of a Computer</h3>

        <ul className="section-list">
          <li>Input devices such as keyboard and mouse.</li>
          <li>Output devices such as monitors and printers.</li>
          <li>CPU contains ALU (arithmetic and logic) and CU (control unit).</li>
          <li>Primary memory includes RAM and ROM.</li>
          <li>Secondary memory includes HDD and SSD.</li>
          <li>Software includes system software and application software.</li>
        </ul>

        <Image
          src="/computer-block-diagram.png"
          alt="computer-block-diagram"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={900}
          height={400}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Problems */}
      <section>
        <h3 className="section-heading">Problems and Algorithm Characteristics</h3>

        <ul className="section-list">
          <li>Well-defined problem: has clear input, clear output and defined end state.</li>
          <li>Ill-defined problem: unclear goals or conditions.</li>
          <li>Algorithm characteristics: finiteness, definiteness, input, output, effectiveness.</li>
        </ul>

        <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
          Tip: In exam answers, clearly state if the problem is well-defined and list algorithm characteristics.
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pseudocode */}
      <section>
        <h3 className="section-heading">Pseudo-code and Flowcharts</h3>
        <ul className="section-list">
          <li>Pseudo-code expresses the steps of a solution in simple English-like statements.</li>
          <li>Flowcharts represent logic using shapes: oval (Start/End), rectangle (process), diamond (decision), parallelogram (I/O).</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Pseudo-code Example: Sum of first n numbers</div>
          <pre className="bg-[#1a2130] text-[#b0ffb4] mt-3 p-4 rounded-md text-sm overflow-auto">
            {`READ n
sum ← 0
FOR i FROM 1 TO n
  sum ← sum + i
END FOR
PRINT sum`}
          </pre>
        </div>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f3e7c2]">
          <div className="font-semibold text-[#3a2a14]">Flowchart Structure</div>
          <p className="mt-2 text-[#2b1d0f]">
            Start → Input n → Initialize sum → Loop (i ≤ n?) → Add → Update → Output sum → End
          </p>
          <Image
  src="/flowchart-sum-n.png"
  alt="flowchart-sum-n"
  className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
  width={750}
  height={500}
/>

        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Memory */}
      <section>
        <h3 className="section-heading">Memory, Variables and Values</h3>

        <ul className="section-list">
          <li>Memory stores data and instructions in binary.</li>
          <li>Variables represent named memory locations.</li>
          <li>Values are actual stored data such as numbers and characters.</li>
          <li>Data types determine size and operations allowed.</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Memory Layout Example</div>
          <pre className="bg-[#1a2130] text-[#b0ffb4] mt-3 p-4 rounded-md text-sm overflow-auto">
            {`Address   Content
0x1000    0x05     (integer 5)
0x1004    0x00     
0x1008    'A'      (character A)`}
          </pre>
          <Image
  src="/memory-layout.png"
  alt="memory-layout"
  className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
  width={800}
  height={500}
/>

        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Instructions */}
      <section>
        <h3 className="section-heading">Instructions</h3>

        <ul className="section-list">
          <li>Machine instructions are binary codes executed by the CPU.</li>
          <li>Assembly uses mnemonic symbols.</li>
          <li>High-level languages require compiling or interpreting.</li>
          <li>Instruction cycle: Fetch, Decode, Execute, Store.</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f3e7c2]">
          <div className="font-semibold text-[#3a2a14]">Assembly-like Example</div>
          <pre className="bg-[#1a2130] text-[#b0ffb4] mt-3 p-4 rounded-md text-sm overflow-auto">
            {`LOAD R1, 5
LOAD R2, 10
ADD R3, R1, R2
STORE R3, 0x200`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programs */}
      <section>
        <h3 className="section-heading">Programs</h3>

        <ul className="section-list">
          <li>A program is a sequence of instructions that performs a task.</li>
          <li>Lifecycle includes writing, compiling, linking, running, testing and maintaining.</li>
          <li>Example: Sorting program takes a list, processes it and outputs the sorted form.</li>
        </ul>

        <Image
          src="/program-lifecycle.png"
          alt="program-lifecycle"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={980}
          height={430}
        />

      </section>

    </div>
  );
};
