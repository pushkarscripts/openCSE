"use client";

import { CodeBlock } from "../../../components/CodeBlock";

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

        <CodeBlock 
          title="JAVA PRIMITIVE INITIALIZATION"
          code={`int age = 19;
double gpa = 8.6;
char grade = 'A';
boolean isValid = true;`}
        />

        {/* Conceptual Visual Block replacing raw text link */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed text-center">
          <p className="text-[#c7a669] font-mono text-sm">[ Memory Architecture: Java Primitive Bit Allocations ]</p>
          <p className="text-xs text-[#ac9e91] mt-1">1-Byte (byte) → 2-Byte (short, char) → 4-Byte (int, float) → 8-Byte (long, double)</p>
        </div>
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

        <CodeBlock 
          title="WIDENING AND NARROWING CONVERSIONS"
          code={`int a = 10;
double b = a;        // widening (automatic compilation step)

double x = 9.76;
int y = (int) x;     // narrowing (explicit type truncation), y = 9`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Arrays */}
      <section>
        <h3 className="section-heading">Arrays</h3>

        <p className="p-text">
          Arrays store multiple values of the same type. They are objects and have
          fixed length determined at creation.
        </p>

        <CodeBlock 
          title="ARRAY INSTANTIATION & BOUNDED TRAVERSAL"
          code={`int[] marks = {85, 90, 75};
for (int i = 0; i < marks.length; i++) {
  System.out.println(marks[i]);
}`}
        />

        {/* Heap Layout Mapping to prevent image load crash */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed text-center">
          <p className="text-[#c7a669] font-mono text-sm">[ Heap Memory Reference Structure ]</p>
          <p className="text-xs text-[#ac9e91] mt-1">marks Reference (Stack Pointer) ───&gt; [ length: 3 | index 0: 85 | index 1: 90 | index 2: 75 ] (Contiguous Heap Object)</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Strings */}
      <section>
        <h3 className="section-heading">Strings</h3>

        <p className="p-text">
          Strings are immutable objects. Java stores them in a special &quot;String pool&quot;
          for memory optimization.
        </p>

        <CodeBlock 
          title="IMMUTABLE STRING POOL CONTEXT METHODS"
          code={`String s = "openCSE";
System.out.println(s.length());
System.out.println(s.toUpperCase());`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Operators */}
      <section>
        <h3 className="section-heading">Operators and Precedence</h3>

        <p className="p-text">
          Java provides arithmetic, relational, logical, bitwise and assignment
          operators. Parentheses improve readability and override precedence.
        </p>

        <CodeBlock 
          title="OPERATOR EVALUATION ORDER AND PRECEDENCE"
          code={`int a = 2 + 3 * 4;     // evaluates to 14 due to multiplication precedence
int b = (2 + 3) * 4;   // evaluates to 20 due to explicit grouping override

boolean result = (a < b) && (b < 50);`}
        />
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

        <CodeBlock 
          title="FLOW CONTROL, SWITCH CONTEXT & LOOPS"
          code={`int n = 7;

// Conditional statement evaluation
if (n > 0) {
    System.out.println("positive");
}

// Multi-way selection execution 
switch (n) {
  case 1: 
    System.out.println("one"); 
    break;
  default: 
    System.out.println("other");
}

// Loop execution control with dynamic jump logic
for (int i = 0; i < 5; i++) {
  if (i == 3) {
      continue; // bypass dynamic line terminal step
  }
  System.out.println(i);
}`}
        />
      </section>

    </div>
  );
};