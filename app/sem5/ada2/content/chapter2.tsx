export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter explains how to measure the efficiency of algorithms using
        time and space complexity. You will learn how fast an algorithm runs,
        how much memory it uses, and how to compare different algorithms.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Why Complexity Analysis is Important
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Complexity analysis helps us understand how efficient an algorithm
            is.
          </li>

          <li>
            It helps compare multiple algorithms for the same problem.
          </li>

          <li>
            Faster algorithms save execution time and system resources.
          </li>

          <li>
            Efficient algorithms are important for large-scale applications.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Simple Example</p>

          <pre>{`Algorithm A → Takes 2 seconds
Algorithm B → Takes 20 seconds

Algorithm A is more efficient.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Time Complexity
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Time complexity measures how much time an algorithm takes to run.
          </li>

          <li>
            It depends on the size of the input.
          </li>

          <li>
            We calculate time complexity by counting basic operations.
          </li>

          <li>
            It is usually represented using Big O notation.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Example</p>

          <pre>{`for(int i = 0; i < n; i++) {
   print(i);
}

Loop runs n times
Time Complexity = O(n)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Space Complexity
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Space complexity measures the amount of memory used by an algorithm.
          </li>

          <li>
            Extra arrays, variables, and recursive calls increase space usage.
          </li>

          <li>
            Efficient algorithms try to use less memory.
          </li>

          <li>
            Both time and space are important for performance.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Example</p>

          <pre>{`int arr[n];

The array stores n elements
Space Complexity = O(n)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Best Case, Worst Case, and Average Case
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <span className="font-semibold">Best Case:</span> Minimum time taken
            by an algorithm.
          </li>

          <li>
            <span className="font-semibold">Worst Case:</span> Maximum time
            taken by an algorithm.
          </li>

          <li>
            <span className="font-semibold">Average Case:</span> Expected time
            for normal inputs.
          </li>

          <li>
            Worst case analysis is most commonly used in exams and interviews.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Linear Search Example</p>

          <pre>{`Best Case    → Element found at first position
Worst Case   → Element found at last position
Average Case → Element found somewhere in middle`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Big O Notation
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Big O notation represents the upper bound of time complexity.
          </li>

          <li>
            It describes how runtime grows as input size increases.
          </li>

          <li>
            It ignores constants and smaller terms.
          </li>

          <li>
            Big O helps compare algorithms easily.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Common Complexities</p>

          <pre>{`O(1)     → Constant Time
O(log n) → Logarithmic Time
O(n)     → Linear Time
O(n²)    → Quadratic Time
O(2^n)   → Exponential Time`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Omega and Theta Notation
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <span className="font-semibold">Omega (Ω):</span> Represents the
            best-case lower bound.
          </li>

          <li>
            <span className="font-semibold">Theta (Θ):</span> Represents the
            exact growth rate.
          </li>

          <li>
            These notations are used in mathematical analysis of algorithms.
          </li>

          <li>
            Big O is more commonly used in practical programming.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Easy Trick: O → Upper Bound, Ω → Lower Bound, Θ → Exact Bound.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Complexity Comparison of Common Algorithms
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Linear Search → O(n)
          </li>

          <li>
            Binary Search → O(log n)
          </li>

          <li>
            Bubble Sort → O(n²)
          </li>

          <li>
            Merge Sort → O(n log n)
          </li>

          <li>
            Quick Sort Average Case → O(n log n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Important Observation</p>

          <pre>{`O(log n) is faster than O(n)
O(n log n) is usually better than O(n²)

Lower complexity = Better performance`}</pre>
        </div>
      </section>
    </div>
  );
};