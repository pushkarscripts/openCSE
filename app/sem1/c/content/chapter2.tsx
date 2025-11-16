import Image from "next/image";

export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">Concise notes covering the language, program development phases, importance,
        program structure, a minimal sample program, compilation and execution commands,
        key concepts, programming style, and a short debugging example.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Language of C */}
      <section>
        <h3 className="section-heading">The Language of C</h3>
        <ul className="section-list">
          <li>C is a structured, procedural, compiled language created by Dennis Ritchie.</li>
          <li>Main properties relevant for exams: portability, efficiency, manual memory control via pointers.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Phases */}
      <section>
        <h3 className="section-heading">Phases of Developing a C Program</h3>
        <ul className="section-list">
          <li><strong>Edit:</strong> write source file `program.c`.</li>
          <li><strong>Compile:</strong> `gcc -Wall -c program.c` produces `program.o` and shows compile errors/warnings.</li>
          <li><strong>Link:</strong> `gcc program.o -o program` produces executable.</li>
          <li><strong>Run:</strong> `./program` on Unix-like systems.</li>
        </ul>
        <Image
  src="/c-program-phases.png"
  alt="c-program-phases"
  className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
  width={900}
  height={350}
/>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Importance */}
      <section>
        <h3 className="section-heading">Importance of C</h3>
        <ul className="section-list">
          <li>Foundation for system software and many languages.</li>
          <li>Used for OS, compilers, embedded systems because of speed and low-level access.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Basic Structure */}
      <section>
        <h3 className="section-heading">Basic Structure of a C Program</h3>
        <ul className="section-list">
          <li>Preprocessor directives: `#include`, `#define`.</li>
          <li>Function definitions with `main()` as entry point.</li>
          <li>Variable declarations and statements.</li>
          <li>Return from `main` typically `return 0;` to signal success.</li>
        </ul>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Minimal example</div>
          <pre className="bg-[#1a2130] text-[#b0ffb4] mt-3 p-4 rounded-md text-sm overflow-auto">
{`#include <stdio.h>

int main(void) {
    int a = 10;
    printf("Value of a = %d\n", a);
    return 0;
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Executing */}
      <section>
        <h3 className="section-heading">Compiling and Executing</h3>
        <ul className="section-list">
          <li>Compile and link in one step: <code>gcc program.c -o program</code>.</li>
          <li>Enable warnings: <code>gcc -Wall program.c -o program</code>.</li>
          <li>Run executable: <code>./program</code>.</li>
          <li>Typical compile-time errors: syntax error, undeclared identifier, type mismatch.</li>
        </ul>
        <Image
  src="/compile-run-flow.png"
  alt="compile-run-flow"
  className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
  width={900}
  height={380}
/>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Key Concepts */}
      <section>
        <h3 className="section-heading">Key Concepts</h3>
        <ul className="section-list">
          <li>Data types and range: `int`, `float`, `double`, `char`.</li>
          <li>Operators: arithmetic, relational, logical, bitwise.</li>
          <li>Control flow: `if`, `if-else`, `switch`, loops (`for`, `while`, `do-while`).</li>
          <li>Functions: declaration, definition, call, parameter passing (by value).</li>
          <li>Arrays and strings: contiguous memory, null-terminated char arrays.</li>
          <li>Pointers: address-of `&`, dereference `*`, pointer arithmetic basics.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programming Style */}
      <section>
        <h3 className="section-heading">Programming Style (exam checklist)</h3>
        <ul className="section-list">
          <li>Indent consistently and use meaningful names for variables and functions.</li>
          <li>Comment nontrivial logic; avoid redundant comments for obvious code.</li>
          <li>Check return values for I/O functions when necessary.</li>
          <li>Use compiler warnings to find potential bugs.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging */}
      <section>
        <h3 className="section-heading">Common Debugging Points</h3>

        <div className="p-4 my-4 rounded-lg shadow-sm border border-[#c7a669] bg-[#f0ddb6]">
          <div className="font-semibold text-[#3a2a14]">Typical mistakes to spot</div>
          <ul className="mt-2 list-disc pl-6 text-[#2b1d0f]">
            <li>Missing ampersand in `scanf` call: use <code>scanf(&quot;%d&quot;, &x)</code>.</li>
            <li>Forgotten semicolon after statements.</li>
            <li>Using uninitialized variables.</li>
            <li>Buffer overflow with strings; always ensure space for null terminator.</li>
          </ul>

          <div className="mt-3 text-[#3a2a14] font-semibold">Faulty snippet</div>
          <pre className="bg-[#1a2130] text-[#ffb0b0] mt-2 p-4 rounded-md text-sm overflow-auto">
{`#include <stdio.h>

int main() {
    int a;
    printf("Enter number: ");
    scanf("%d", a);   // wrong: should be &a
    printf("Value is: %d", a)  // wrong: missing semicolon
    return 0;
}`}
          </pre>

          <div className="mt-2 text-[#3a2a14] font-semibold">Corrected</div>
          <pre className="bg-[#1a2130] text-[#b0ffb4] mt-2 p-4 rounded-md text-sm overflow-auto">
{`scanf("%d", &a);
printf("Value is: %d", a);`}
          </pre>
        </div>
      </section>

    </div>
  );
};
