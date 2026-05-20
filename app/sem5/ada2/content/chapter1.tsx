export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter introduces the basics of algorithms and problem solving.
        You will learn what algorithms are, why they are important, and how
        they help computers solve problems step by step in an efficient way.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            What is an Algorithm?
          </span>
        </h3>

        <ul className="section-list">
          <li>
            An algorithm is a step-by-step procedure used to solve a problem.
          </li>

          <li>
            It takes some input, processes it, and produces the required output.
          </li>

          <li>
            Algorithms are used in daily life and computer programs.
          </li>

          <li>
            A good algorithm should be simple, correct, and efficient.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Real-Life Example</p>

          <pre>{`Making Tea Algorithm

Step 1 → Boil water
Step 2 → Add tea leaves
Step 3 → Add sugar and milk
Step 4 → Stir properly
Step 5 → Serve tea`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Characteristics of an Algorithm
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <span className="font-semibold">Input:</span> An algorithm can take
            input values.
          </li>

          <li>
            <span className="font-semibold">Output:</span> It must produce at
            least one result.
          </li>

          <li>
            <span className="font-semibold">Definiteness:</span> Steps should be
            clear and unambiguous.
          </li>

          <li>
            <span className="font-semibold">Finiteness:</span> It must end after
            a limited number of steps.
          </li>

          <li>
            <span className="font-semibold">Efficiency:</span> It should solve
            the problem quickly using fewer resources.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Exam Tip: Remember the five main characteristics — Input, Output,
            Definiteness, Finiteness, and Efficiency.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Algorithm vs Program
          </span>
        </h3>

        <ul className="section-list">
          <li>
            An algorithm is the logic or method used to solve a problem.
          </li>

          <li>
            A program is the actual code written in a programming language.
          </li>

          <li>
            Algorithms are language independent.
          </li>

          <li>
            Programs depend on programming languages like Java, Python, or C++.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Simple Difference</p>

          <pre>{`Algorithm → Steps to add two numbers
Program   → Java/Python code that adds numbers`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Pseudocode and Flowcharts
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <span className="font-semibold">Pseudocode:</span> A simple,
            human-readable way of writing algorithm steps.
          </li>

          <li>
            <span className="font-semibold">Flowchart:</span> A graphical
            representation of an algorithm using symbols.
          </li>

          <li>
            Both help in understanding the logic before coding.
          </li>

          <li>
            They make debugging and problem solving easier.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Pseudocode Example</p>

          <pre>{`Algorithm to Find Sum

START
Input A, B
SUM = A + B
Print SUM
END`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Types of Problem Solving Approaches
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <span className="font-semibold">Brute Force:</span> Try all possible
            solutions.
          </li>

          <li>
            <span className="font-semibold">Divide and Conquer:</span> Break a
            problem into smaller parts.
          </li>

          <li>
            <span className="font-semibold">Greedy Method:</span> Choose the
            best option at each step.
          </li>

          <li>
            <span className="font-semibold">Dynamic Programming:</span> Store
            previous results to avoid repeated work.
          </li>

          <li>
            <span className="font-semibold">Backtracking:</span> Try solutions
            and backtrack if they fail.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            These techniques are the foundation of advanced algorithms and are
            very important for coding interviews.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Importance of Algorithms
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Algorithms help solve problems efficiently.
          </li>

          <li>
            They reduce execution time and memory usage.
          </li>

          <li>
            Good algorithms improve software performance.
          </li>

          <li>
            They are important in AI, web apps, games, banking systems, and
            search engines.
          </li>

          <li>
            Strong algorithm knowledge is essential for placements and coding
            interviews.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Real-World Applications</p>

          <pre>{`Google Search   → Searching Algorithms
Instagram Feed → Recommendation Algorithms
Google Maps    → Shortest Path Algorithms
Amazon         → Sorting and Recommendation Algorithms`}</pre>
        </div>
      </section>
    </div>
  );
};