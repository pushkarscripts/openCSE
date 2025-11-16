export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Programming in C</span> — a foundational course
        designed to build strong problem-solving skills and introduce you to the core concepts of
        the C programming language. This outline summarizes the modules you will study
        throughout the semester.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module I */}
      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Introduction to Computing</span>
        </h3>
        <ul className="section-list">
          <li>Fundamentals of computing and historical evolution</li>
          <li>Early computers and computing machines</li>
          <li>Components of a computer system</li>
          <li>Problem-solving using pseudo-code and flowcharts</li>
          <li>Concepts of memory, variables, values, and instructions</li>
          <li>Basics of programs and programming logic</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module II */}
      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Overview of C</span>
        </h3>
        <ul className="section-list">
          <li>Phases of developing a C program</li>
          <li>Importance and applications of C language</li>
          <li>Basic structure and sample programs</li>
          <li>Executing and debugging C programs</li>
          <li>Programming style guidelines</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module III */}
      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Data Types, I/O, Decision Making, and Loops</span>
        </h3>

        <ul className="section-list">
          <li>Constants, variables, and data types</li>
          <li>Storage classes and operator precedence</li>
          <li>Arithmetic, relational, and logical operations</li>
          <li>Input–output statements and compound statements</li>
          <li>Decision making: if, if-else, switch, goto</li>
          <li>Looping constructs: for, while, do-while</li>
          <li>Loop control statements and overflow handling</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module IV */}
      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Arrays, Strings, and Functions</span>
        </h3>

        <ul className="section-list">
          <li>One-dimensional, two-dimensional, and multidimensional arrays</li>
          <li>Character arrays and string handling</li>
          <li>Function prototypes, definitions, and calls</li>
          <li>Argument passing (by value and via pointers)</li>
          <li>Recursion and iterative formulations</li>
          <li>Basic searching and sorting concepts</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module V */}
      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">Pointers, Structures, and Unions</span>
        </h3>

        <ul className="section-list">
          <li>Pointer declaration, initialization, dereferencing, and arithmetic</li>
          <li>Pointers with arrays, strings, and functions</li>
          <li>Structures: definition, operations, nesting, and arrays of structures</li>
          <li>Passing structures as function arguments</li>
          <li>Self-referential structures</li>
          <li>Union definition, usage, and memory sharing behavior</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Module VI */}
      <section>
        <h3 className="section-heading">
          Module VI: <span className="section-subheading">File Management, Dynamic Memory, and Preprocessors</span>
        </h3>

        <ul className="section-list">
          <li>File operations: defining, opening, closing, reading/writing</li>
          <li>Streams and command-line arguments</li>
          <li>Error handling and random access in files</li>
          <li>Dynamic memory: malloc, calloc, realloc</li>
          <li>Basics of linked lists using dynamic allocation</li>
          <li>Macros, file inclusion, and preprocessor directives</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will have a strong foundation in procedural programming,
        memory management, data structures, and essential C programming techniques required for
        further courses in Computer Science.
      </p>
    </div>
  );
};
