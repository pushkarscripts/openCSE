import Image from "next/image";
import { CodeBlock } from "../../../components/CodeBlock";

export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        This chapter explains C data concepts, data types, storage classes,
        operators, statements, control flow, loops, overflow handling,
        and debugging basics.
      </p>

      <hr className="divider" />

      {/* Data concepts */}
      <section>
        <h3 className="section-heading">Data Concepts in C</h3>

        <ul className="section-list">
          <li>
            <strong>Constants</strong> are fixed values that do not change during execution.
          </li>

          <li>
            <strong>Variables</strong> are named memory locations used to store data.
          </li>

          <li>
            Example declarations:
            <code className="inline-code ml-2">int count;</code>
            <code className="inline-code ml-2">float avg = 0.0f;</code>
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Data types */}
      <section>
        <h3 className="section-heading">Data Types, Size and Values</h3>

        <p className="p-text">
          Standard C data types and their typical sizes are listed below.
        </p>

        <div className="note-box">
          <div className="note-title">Common C Types</div>

          <ul className="section-list mt-3">
            <li>
              <code className="inline-code">char</code> → 1 byte
            </li>

            <li>
              <code className="inline-code">int</code> → 4 bytes
            </li>

            <li>
              <code className="inline-code">short</code> → 2 bytes
            </li>

            <li>
              <code className="inline-code">long</code> → 4 or 8 bytes
            </li>

            <li>
              <code className="inline-code">float</code> → 4 bytes
            </li>

            <li>
              <code className="inline-code">double</code> → 8 bytes
            </li>
          </ul>
        </div>

        <div className="image-wrapper">
          <Image
            src="/c-data-sizes.png"
            alt="c-data-sizes"
            width={600}
            height={300}
            className="content-image"
          />
        </div>
      </section>

      <hr className="divider" />

      {/* Storage classes */}
      <section>
        <h3 className="section-heading">Storage Classes</h3>

        <ul className="section-list">
          <li><strong>auto</strong> → default local variables</li>

          <li><strong>static</strong> → retains value between calls</li>

          <li><strong>extern</strong> → refers to global variables declared elsewhere</li>

          <li><strong>register</strong> → suggests storing variable in CPU register</li>
        </ul>

        <p className="p-text">
          Questions about scope and lifetime are common in exams.
        </p>
      </section>

      <hr className="divider" />

      {/* Operators */}
      <section>
        <h3 className="section-heading">Operators and Precedence</h3>

        <ul className="section-list">
          <li>Arithmetic, relational, logical, bitwise, and assignment operators are widely used.</li>

          <li>Operator precedence controls evaluation order.</li>
        </ul>

        <div className="note-box">
          <div className="note-title">Important Precedence Order</div>

          <ul className="section-list mt-3">
            <li>Unary → <code className="inline-code">++ -- !</code></li>

            <li>Multiplicative → <code className="inline-code">* / %</code></li>

            <li>Additive → <code className="inline-code">+ -</code></li>

            <li>Relational → <code className="inline-code">&lt; &gt; &lt;= &gt;=</code></li>

            <li>Equality → <code className="inline-code">== !=</code></li>

            <li>Logical → <code className="inline-code">&amp;&amp; ||</code></li>

            <li>Assignment → <code className="inline-code">= += -=</code></li>
          </ul>
        </div>

        <div className="image-wrapper">
          <Image
            src="/operator-precedence.png"
            alt="operator-precedence"
            width={600}
            height={300}
            className="content-image"
          />
        </div>

        <p className="p-text">
          Use parentheses whenever evaluation order may be unclear.
        </p>
      </section>

      <hr className="divider" />

      {/* Statements */}
      <section>
        <h3 className="section-heading">Statements and Expressions</h3>

        <ul className="section-list">
          <li>Declaration statements introduce variables.</li>

          <li>Expression statements perform computations.</li>

          <li>
            Compound statements use
            <code className="inline-code ml-2">{`{ }`}</code>
            to create blocks and scope.
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Input output */}
      <section>
        <h3 className="section-heading">Input-Output Statements</h3>

        <ul className="section-list">
          <li>
            Standard functions:
            <code className="inline-code ml-2">printf()</code>,
            <code className="inline-code ml-2">scanf()</code>,
            <code className="inline-code ml-2">puts()</code>
          </li>

          <li>
            Format specifiers:
            <code className="inline-code ml-2">%d</code>,
            <code className="inline-code ml-2">%f</code>,
            <code className="inline-code ml-2">%c</code>,
            <code className="inline-code ml-2">%s</code>
          </li>
        </ul>

        <CodeBlock
          title="Input Output Example"
          language="c"
          code={`int x;

printf("Enter a number: ");

scanf("%d", &x);

printf("You entered %d\\n", x);`}
        />
      </section>

      <hr className="divider" />

      {/* Selection */}
      <section>
        <h3 className="section-heading">Selection Statements</h3>

        <ul className="section-list">
          <li><strong>if</strong> executes code when condition is true.</li>

          <li><strong>if-else</strong> selects between two alternatives.</li>

          <li><strong>switch</strong> selects execution using cases.</li>

          <li><strong>goto</strong> exists but is generally discouraged.</li>
        </ul>

        <CodeBlock
          title="if-else Example"
          language="c"
          code={`if (a > b) {
    printf("a is greater\\n");
} else {
    printf("b is greater or equal\\n");
}`}
        />

        <CodeBlock
          title="switch Example"
          language="c"
          code={`switch (ch) {
    case 'a':
        doA();
        break;

    case 'b':
        doB();
        break;

    default:
        doDefault();
}`}
        />
      </section>

      <hr className="divider" />

      {/* Loops */}
      <section>
        <h3 className="section-heading">Loop Constructs</h3>

        <ul className="section-list">
          <li><strong>for</strong> loop → best when iterations are known</li>

          <li><strong>while</strong> loop → condition checked before execution</li>

          <li><strong>do-while</strong> loop → executes at least once</li>

          <li>
            Jump statements:
            <code className="inline-code ml-2">break</code>,
            <code className="inline-code ml-2">continue</code>
          </li>
        </ul>

        <CodeBlock
          title="Loop Examples"
          language="c"
          code={`// for loop
for (int i = 0; i < n; i++) {
    sum += i;
}

// while loop
int i = 0;

while (i < n) {
    sum += i;
    i++;
}

// do-while loop
int j = 0;

do {
    sum += j;
    j++;
} while (j < n);`}
        />

        <div className="image-wrapper">
          <Image
            src="/loop-flowcharts.png"
            alt="loop-flowcharts"
            width={600}
            height={300}
            className="content-image"
          />
        </div>
      </section>

      <hr className="divider" />

      {/* Overflow */}
      <section>
        <h3 className="section-heading">Overflow</h3>

        <ul className="section-list">
          <li>Overflow occurs when values exceed type range.</li>

          <li>Signed overflow causes undefined behavior.</li>

          <li>Unsigned overflow wraps around modulo 2ⁿ.</li>
        </ul>
      </section>

      <hr className="divider" />

      {/* Debugging */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <CodeBlock
          title="Faulty Program"
          language="c"
          code={`#include <stdio.h>

int main() {
    char s[5];

    printf("Enter string: ");

    scanf("%s", s);   // possible overflow

    printf("You entered: %s\\n", s)

    return 0;
}`}
        />

        <div className="note-box">
          <div className="note-title">Corrections</div>

          <ul className="section-list mt-3">
            <li>
              Use width specifier:
              <code className="inline-code ml-2">scanf("%4s", s);</code>
            </li>

            <li>Add missing semicolon after printf.</li>

            <li>Prefer <code className="inline-code">fgets()</code> for safer input.</li>
          </ul>
        </div>
      </section>

      <hr className="divider" />

      {/* Exercises */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>

        <ul className="section-list">
          <li>Write a program to calculate sum and average of n integers.</li>

          <li>Write a factorial program using loops and check overflow.</li>
        </ul>
      </section>

    </div>
  );
};