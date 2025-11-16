import Image from 'next/image';

export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        This chapter highlights definitions, sizes, operator precedence, control
        constructs, common pitfalls, and a short debugging example.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Data concepts */}
      <section>
        <h3 className="section-heading">Data Concepts in C</h3>
        <ul className="section-list">
          <li>
            <strong>Constants</strong> are fixed values that do not change during execution (literal or defined via{" "}
            <code className="inline-code">#define</code>).
          </li>
          <li>
            <strong>Variables</strong> are named storage locations declared with a data type before use.
          </li>
          <li>
            Declaration example: <code className="inline-code">int count;</code> or{" "}
            <code className="inline-code">float avg = 0.0f;</code>.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Data types and sizes */}
      <section>
        <h3 className="section-heading">Data Types, Size and Values</h3>

        <p className="p-text">Standard fundamental types commonly used in exams are listed below.</p>

        <div className="example-box p-4 my-4 rounded-lg shadow-sm border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Common C types (typical 32-bit system)</div>
          <div className="mt-2 text-[#2b1d0f]">
            <ul className="section-list">
              <li>
                <code className="inline-code">char</code> — 1 byte, stores a character, range:
                typically -128 to 127 (signed) or 0 to 255 (unsigned).
              </li>
              <li>
                <code className="inline-code">int</code> — 4 bytes, range implementation-defined; commonly
                -2,147,483,648 to 2,147,483,647.
              </li>
              <li>
                <code className="inline-code">short</code> — 2 bytes; <code className="inline-code">long</code> — 4 or 8 bytes depending on platform.
              </li>
              <li>
                <code className="inline-code">float</code> — 4 bytes (single precision); <code className="inline-code">double</code> — 8 bytes (double precision).
              </li>
            </ul>
          </div>
        </div>

        <Image
          src="/c-data-sizes.png"
          alt="c-data-sizes"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={600}
          height={300}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Storage classes */}
      <section>
        <h3 className="section-heading">Storage Classes</h3>

        <ul className="section-list">
          <li><strong>auto</strong> — default for local variables (automatic storage duration).</li>
          <li><strong>static</strong> — retains value between calls; internal linkage if file-scope.</li>
          <li><strong>extern</strong> — declares a global variable defined elsewhere.</li>
          <li><strong>register</strong> — hint to keep variable in CPU register (often ignored by modern compilers).</li>
        </ul>

        <p className="p-text">Remember exam questions often ask for scope and lifetime of each storage class.</p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Operators & precedence */}
      <section>
        <h3 className="section-heading">Operators and Precedence</h3>

        <ul className="section-list">
          <li>Operator categories: arithmetic, relational, logical, bitwise, assignment, and ternary.</li>
          <li>Precedence determines evaluation order. Higher precedence operators evaluate first.</li>
        </ul>

        <div className="card my-4 p-4">
          <div className="font-semibold text-[#3a2a14]">Important precedence (high → low)</div>
          <ul className="mt-2 section-list text-[#2b1d0f]">
            <li>Unary: <code className="inline-code">++</code> <code className="inline-code">--</code> <code className="inline-code">+</code> <code className="inline-code">-</code> <code className="inline-code">!</code></li>
            <li>Multiplicative: <code className="inline-code">*</code> <code className="inline-code">/</code> <code className="inline-code">%</code></li>
            <li>Additive: <code className="inline-code">+</code> <code className="inline-code">-</code></li>
            <li>Relational: <code className="inline-code">&lt;</code> <code className="inline-code">&gt;</code> <code className="inline-code">&lt;=</code> <code className="inline-code">&gt;=</code></li>
            <li>Equality: <code className="inline-code">==</code> <code className="inline-code">!=</code></li>
            <li>Logical: <code className="inline-code">&amp;&amp;</code> then <code className="inline-code">||</code></li>
            <li>Assignment: <code className="inline-code">=</code> and compound assignments</li>
          </ul>
          <div className="mt-3 text-sm text-[#f3e7c2]">
            Note: use parentheses to enforce evaluation order when needed.
          </div>
        </div>
        <Image
          src="/operator-precedence.png"
          alt="operator-precedence"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={600}
          height={300}
        />
        <p className="p-text">Operator associativity is usually left-to-right; assignment and some unary operators associate right-to-left.</p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Statements and expressions */}
      <section>
        <h3 className="section-heading">Statements and Expressions</h3>

        <ul className="section-list">
          <li><strong>Declaration statements:</strong> introduce variables and optionally initialize them.</li>
          <li><strong>Expression statements:</strong> evaluate expressions and may produce side effects (<code className="inline-code">a = b + c;</code>).</li>
          <li><strong>Compound statements (blocks):</strong> groups of statements enclosed in <code className="inline-code">{'{'}</code> and <code className="inline-code">{'}'}</code> defining scope.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Input-Output */}
      <section>
        <h3 className="section-heading">Input-Output Statements</h3>

        <ul className="section-list">
          <li><strong>Standard I/O:</strong> <code className="inline-code">printf()</code>, <code className="inline-code">scanf()</code>, <code className="inline-code">puts()</code>.</li>
          <li>Format specifiers: <code className="inline-code">%d</code> int, <code className="inline-code">%f</code> float, <code className="inline-code">%c</code> char, <code className="inline-code">%s</code> string.</li>
          <li>Always pass address with <code className="inline-code">scanf()</code> for non-array variables: <code className="inline-code">scanf("%d", &amp;x)</code>.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">I/O Example</div>
          <pre className="code-block mt-3" aria-label="I O example">
            {`int x;
printf("Enter a number: ");
scanf("%d", &x);
printf("You entered %d\n", x);`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Selection statements */}
      <section>
        <h3 className="section-heading">Selection Statements</h3>

        <ul className="section-list">
          <li><strong>if</strong> executes a block when condition is true.</li>
          <li><strong>if-else</strong> selects between two branches.</li>
          <li><strong>switch</strong> selects cases based on integer/enum; use <code className="inline-code">break</code> to prevent fall-through.</li>
          <li><strong>goto</strong> exists but is discouraged; used rarely for error handling in legacy code.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">if-else example</div>
          <pre className="code-block mt-3">
            {`if (a > b) {
  printf("a is greater\n");
} else {
  printf("b is greater or equal\n");
}`}
          </pre>
        </div>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">switch example</div>
          <pre className="code-block mt-3">
            {`switch (ch) {
  case 'a': doA(); break;
  case 'b': doB(); break;
  default: doDefault();
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Loop constructs */}
      <section>
        <h3 className="section-heading">Loop Constructs</h3>

        <ul className="section-list">
          <li><strong>for</strong> — initialization; condition; update. Use when count known.</li>
          <li><strong>while</strong> — condition-checked before each iteration.</li>
          <li><strong>do-while</strong> — body executes first, condition checked afterwards.</li>
          <li><strong>Jumps</strong> — <code className="inline-code">break</code>, <code className="inline-code">continue</code> (skip), and <code className="inline-code">goto</code> (discouraged).</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Loop examples</div>
          <pre className="code-block mt-3">
            {`// for loop
for (int i = 0; i < n; i++) {
  sum += i;
}

// while loop
int i = 0;
while (i < n) {
  sum += i;
  i++;
}

// do-while
int i = 0;
do {
  sum += i;
  i++;
} while (i < n);`}
          </pre>
        </div>
        <Image
          src="/loop-flowcharts.png"
          alt="loop-flowcharts"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={600}
          height={300}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Overflow */}
      <section>
        <h3 className="section-heading">Overflow</h3>

        <ul className="section-list">
          <li>Overflow occurs when a calculation produces a value outside a type's range.</li>
          <li>Signed integer overflow is undefined behaviour in C and must be avoided.</li>
          <li>Unsigned overflow wraps modulo 2^n; prefer larger types or checks when needed.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging exercise */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="card p-4 my-4">
          <div className="font-semibold">Find and fix the errors</div>
          <pre className="code-block error mt-3" aria-label="debug example">
            {`#include <stdio.h>

int main() {
  char s[5];
  printf("Enter string: ");
  scanf("%s", s);   // possible overflow if user types >4 chars
  printf("You entered: %s\n", s)
  return 0;
}`}
          </pre>

          <div className="mt-3 text-[#b0ffb4] font-semibold">Correct points</div>
          <ul className="section-list mt-2">
            <li>Ensure buffer size and use width specifier: <code className="inline-code">scanf(&quot;%4s&quot;, s);</code></li>
            <li>Add missing semicolon after <code className="inline-code">printf</code>.</li>
            <li>Prefer <code className="inline-code">fgets</code> for safer input.</li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programming exercise placeholder (short) */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>

        <ul className="section-list">
          <li>Implement a program that reads n integers and finds their sum and average, using loops and appropriate types.</li>
          <li>Implement factorial using iterative loop and check for overflow for large n.</li>
        </ul>
      </section>
    </div>
  );
};
