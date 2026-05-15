import Image from "next/image";
import { CodeBlock } from "../../../components/CodeBlock";

export const Ch2Content = () => {
  return (
    <div className="course-content">

      <h2 className="page-title text-2xl font-bold mb-4">Introduction to C — Chapter 2</h2>

      <p className="p-text">
        Concise notes covering the language, program development phases,
        importance, program structure, sample programs, compilation,
        execution, key concepts, programming style, and debugging.
      </p>

      <hr className="divider" />

      {/* Language of C */}
      <section>
        <h3 className="section-heading">The Language of C</h3>

        <ul className="section-list">
          <li>C is a structured, procedural, compiled language created by Dennis Ritchie.</li>
          <li>Known for portability, speed, and low-level memory access.</li>
          <li>Widely used in operating systems, embedded systems, and compilers.</li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Phases */}
      <section>
        <h3 className="section-heading">Phases of Developing a C Program</h3>

        <ul className="section-list">
          <li><strong>Edit:</strong> write source code in <code className="inline-code">program.c</code></li>
          <li><strong>Compile:</strong> convert source code into object code</li>
          <li><strong>Link:</strong> combine libraries and object files</li>
          <li><strong>Run:</strong> execute the final program</li>
        </ul>

        <CodeBlock
          title="Compilation Commands"
          language="bash"
          code={`gcc -Wall -c program.c
gcc program.o -o program
./program`}
        />
      </section>

      <hr className="divider" />

      {/* Importance */}
      <section>
        <h3 className="section-heading">Importance of C</h3>

        <ul className="section-list">
          <li>Foundation for many modern programming languages.</li>
          <li>Provides direct hardware interaction.</li>
          <li>Used in system programming and embedded development.</li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Basic Structure */}
      <section>
        <h3 className="section-heading">Basic Structure of a C Program</h3>

        <ul className="section-list">
          <li>Preprocessor directives such as <code className="inline-code">#include</code></li>
          <li><code className="inline-code">main()</code> function acts as entry point</li>
          <li>Variable declarations and executable statements</li>
          <li><code className="inline-code">return 0;</code> indicates successful execution</li>
        </ul>

        <CodeBlock
          title="Minimal C Program"
          language="c"
          code={`#include <stdio.h>

int main(void) {
    int a = 10;

    printf("Value of a = %d\\n", a);

    return 0;
}`}
        />
      </section>

      <hr className="divider" />

      {/* Executing */}
      <section>
        <h3 className="section-heading">Compiling and Executing</h3>

        <ul className="section-list">
          <li><code className="inline-code">gcc program.c -o program</code> compiles and links</li>
          <li><code className="inline-code">gcc -Wall program.c</code> enables warnings</li>
          <li><code className="inline-code">./program</code> runs executable on Linux/macOS</li>
          <li>Common errors: syntax error, undeclared variable, type mismatch</li>
        </ul>

        <div className="image-wrapper">
          <Image
            src="/compile-run-flow.png"
            alt="compile-run-flow"
            width={900}
            height={380}
            className="content-image"
          />
        </div>
      </section>

      <hr className="divider" />

      {/* Key Concepts */}
      <section>
        <h3 className="section-heading">Key Concepts</h3>

        <ul className="section-list">
          <li>Data types: <code className="inline-code">int</code>, <code className="inline-code">float</code>, <code className="inline-code">double</code>, <code className="inline-code">char</code></li>
          <li>Operators: arithmetic, relational, logical and bitwise</li>
          <li>Control flow: <code className="inline-code">if</code>, <code className="inline-code">switch</code>, loops</li>
          <li>Functions and parameter passing</li>
          <li>Arrays, strings, and pointers</li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Style */}
      <section>
        <h3 className="section-heading">Programming Style</h3>

        <ul className="section-list">
          <li>Use meaningful variable and function names</li>
          <li>Indent code consistently</li>
          <li>Write comments for complex logic</li>
          <li>Always compile with warnings enabled</li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Debugging */}
      <section>
        <h3 className="section-heading">Common Debugging Points</h3>

        <div className="note-box">
          <div className="note-title">Typical Mistakes</div>

          <ul className="section-list mt-3">
            <li>Missing ampersand in <code className="inline-code">scanf()</code></li>
            <li>Missing semicolon</li>
            <li>Using uninitialized variables</li>
            <li>Buffer overflow in strings</li>
          </ul>
        </div>

        <CodeBlock
          title="Faulty Program"
          language="c"
          code={`#include <stdio.h>

int main() {
    int a;

    printf("Enter number: ");

    scanf("%d", a);   // wrong: missing &

    printf("Value is: %d", a) // wrong: missing semicolon

    return 0;
}`}
        />

        <CodeBlock
          title="Corrected Program"
          language="c"
          code={`scanf("%d", &a);

printf("Value is: %d", a);`}
        />
      </section>

    </div>
  );
};