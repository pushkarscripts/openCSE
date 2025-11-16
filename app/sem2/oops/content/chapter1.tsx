export const Ch1Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module I: Introduction to Java</span>.
        This module builds the foundation of Java programming by covering data types,
        variables, arrays, strings, operators, and control statements. These are the
        building blocks required before learning classes, inheritance, or advanced
        concepts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Data Types */}
      <section>
        <h3 className="section-heading">Primitive Data Types</h3>

        <p className="p-text">
          Java has eight primitive data types used for basic storage needs. They
          differ in size, range, and typical usage.
        </p>

        <ul className="section-list">
          <li><strong>byte</strong> – 1 byte, integer range -128 to 127</li>
          <li><strong>short</strong> – 2 bytes, small integer values</li>
          <li><strong>int</strong> – 4 bytes, default integer type</li>
          <li><strong>long</strong> – 8 bytes, larger numeric values</li>
          <li><strong>float</strong> – 4 bytes, decimal numbers (single precision)</li>
          <li><strong>double</strong> – 8 bytes, decimal numbers (double precision)</li>
          <li><strong>char</strong> – 2 bytes, Unicode character</li>
          <li><strong>boolean</strong> – true or false</li>
        </ul>

        <div className="example-box p-4 rounded-lg mt-4 bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14] mb-1">Code Example</div>
          <pre className="code-block">
{`int age = 19;
double gpa = 8.6;
char grade = 'A';
boolean isValid = true;`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram to add: <strong>java-primitive-sizes.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Variables & Type Casting */}
      <section>
        <h3 className="section-heading">Variables, Type Conversion and Casting</h3>

        <p className="p-text">
          Java automatically performs widening conversions (small to large type),
          while narrowing conversions require explicit casting.
        </p>

        <ul className="section-list">
          <li><strong>Widening</strong>: int to long, float to double (automatic)</li>
          <li><strong>Narrowing</strong>: double to int, long to short (explicit cast)</li>
        </ul>

        <div className="example-box p-4 mt-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <pre className="code-block">
{`int a = 10;
double b = a;        // widening

double x = 9.76;
int y = (int) x;     // narrowing, y = 9`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Arrays */}
      <section>
        <h3 className="section-heading">Arrays</h3>

        <p className="p-text">
          Arrays store multiple values of the same type. They are objects and have
          fixed length determined at creation.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <pre className="code-block">
{`int[] marks = {85, 90, 75};
for (int i = 0; i < marks.length; i++) {
  System.out.println(marks[i]);
}`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram to add: <strong>java-array-memory.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Strings */}
      <section>
        <h3 className="section-heading">Strings</h3>

        <p className="p-text">
          Strings are immutable objects. Java stores them in a special &quot;String pool&quot;
          for memory optimization.
        </p>

        <div className="example-box p-4 bg-[#f3e7c2] rounded-lg border border-[#c7a669]">
          <pre className="code-block">
{`String s = "openCSE";
System.out.println(s.length());
System.out.println(s.toUpperCase());`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Operators */}
      <section>
        <h3 className="section-heading">Operators and Precedence</h3>

        <p className="p-text">
          Java provides arithmetic, relational, logical, bitwise and assignment
          operators. Parentheses improve readability and override precedence.
        </p>

        <div className="example-box p-3 bg-[#f0ddb6] rounded-lg border border-[#c7a669]">
          <pre className="code-block">
{`int a = 2 + 3 * 4;     // 14
int b = (2 + 3) * 4;   // 20

boolean result = (a < b) && (b < 50);`}
          </pre>
        </div>

        <p className="p-text">Diagram: <strong>operator-precedence-java.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Control Statements */}
      <section>
        <h3 className="section-heading">Control Statements</h3>

        <p className="p-text mb-4">
          Control statements determine program flow. Java provides selection,
          iteration, and jump statements.
        </p>

        <ul className="section-list">
          <li><strong>Selection</strong>: if, if-else, switch</li>
          <li><strong>Iteration</strong>: for, while, do-while, enhanced for</li>
          <li><strong>Jump</strong>: break, continue</li>
        </ul>

        <div className="example-box p-4 mt-4 bg-[#f3e7c2] rounded-lg border border-[#c7a669]">
          <pre className="code-block">
{`int n = 7;

// if-else
if (n > 0) System.out.println("positive");

// switch
switch (n) {
  case 1: System.out.println("one"); break;
  default: System.out.println("other");
}

// loop
for (int i = 0; i < 5; i++) {
  if (i == 3) continue;
  System.out.println(i);
}`}
          </pre>
        </div>

        <p className="p-text">Diagram: <strong>loop-flowcharts.png</strong></p>
      </section>

    </div>
  );
};
