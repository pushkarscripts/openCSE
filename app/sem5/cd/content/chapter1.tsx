import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        A <span className="font-semibold">Compiler</span> is a computer program that translates source code written in a high-level language (like C, C++, Java, or Rust) into a lower-level language, typically machine code, assembly, or bytecode, that can be executed directly by the CPU.
      </p>

      <section>
        <h3 className="section-heading">Why Do We Need Compilers?</h3>
        <p className="p-text mt-2">
          Computers operate using binary signals (0s and 1s). High-level programming languages are designed for human readability and abstract reasoning. Compilers bridge this semantic gap by translating abstract syntax structures into physical CPU operations, performing optimization and static type checks in the process.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Compiler vs Interpreter</h3>
        <p className="p-text mt-2">
          While both compilers and interpreters convert source code into executable instructions, they process the translation at different times and in different ways.
        </p>

        <ExpandingBox title="Deep Comparison Table: Compiler vs Interpreter" defaultOpen={true}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#c7a669] text-left">
              <thead>
                <tr className="bg-[#7a523c] text-[#fff7ed]">
                  <th className="border border-[#c7a669] p-3 font-semibold">Aspect</th>
                  <th className="border border-[#c7a669] p-3 font-semibold">Compiler</th>
                  <th className="border border-[#c7a669] p-3 font-semibold">Interpreter</th>
                </tr>
              </thead>
              <tbody className="bg-[#f3e7c2]/20 dark:bg-black/20 text-[#3A2A14] dark:text-[#f3e7c2]">
                <tr>
                  <td className="border border-[#c7a669] p-3 font-bold">Translation Unit</td>
                  <td className="border border-[#c7a669] p-3">Translates the entire program at once.</td>
                  <td className="border border-[#c7a669] p-3">Translates and executes line-by-line.</td>
                </tr>
                <tr>
                  <td className="border border-[#c7a669] p-3 font-bold">Execution Speed</td>
                  <td className="border border-[#c7a669] p-3">Fast (compilation cost is paid once upfront).</td>
                  <td className="border border-[#c7a669] p-3">Slower (translation happens repeatedly during run).</td>
                </tr>
                <tr>
                  <td className="border border-[#c7a669] p-3 font-bold">Output File</td>
                  <td className="border border-[#c7a669] p-3">Produces a standalone binary (.exe, .out).</td>
                  <td className="border border-[#c7a669] p-3">Does not generate a standalone file.</td>
                </tr>
                <tr>
                  <td className="border border-[#c7a669] p-3 font-bold">Error Reporting</td>
                  <td className="border border-[#c7a669] p-3">Reports all syntactic and semantic errors after scanning.</td>
                  <td className="border border-[#c7a669] p-3">Stops execution immediately upon reaching the first error.</td>
                </tr>
                <tr>
                  <td className="border border-[#c7a669] p-3 font-bold">Examples</td>
                  <td className="border border-[#c7a669] p-3">C, C++, Rust, Go, Haskell.</td>
                  <td className="border border-[#c7a669] p-3">Python, Ruby, PHP, Basic.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Types of Compilers</h3>
        <p className="p-text mt-2">
          Compilers are configured differently depending on target hosts and runtime performance requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="card">
            <h4 className="font-bold text-lg mb-2 text-[#5b3a29]">Single-Pass Compiler</h4>
            <p className="text-sm">
              Scans the source code once, emitting target machine instructions directly. Simple but lacks global optimizations.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2 text-[#5b3a29]">Multi-Pass Compiler</h4>
            <p className="text-sm">
              Traverses the source code representation multiple times, creating intermediate states. Essential for complex languages and optimizations.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2 text-[#5b3a29]">Cross Compiler</h4>
            <p className="text-sm">
              Runs on one architecture (e.g., x86) but generates code for a different architecture (e.g., ARM).
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2 text-[#5b3a29]">Just-In-Time (JIT) Compiler</h4>
            <p className="text-sm">
              Compiles code dynamically during program execution (e.g., V8 for JavaScript, HotSpot for JVM).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
