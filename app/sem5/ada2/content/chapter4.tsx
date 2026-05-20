export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter explains the Divide and Conquer technique. It is a powerful
        problem-solving method where a large problem is divided into smaller
        subproblems, solved separately, and then combined to get the final
        answer.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Introduction to Divide and Conquer
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Divide and Conquer breaks a problem into smaller subproblems.
          </li>

          <li>
            Each subproblem is solved independently.
          </li>

          <li>
            The results are combined to form the final solution.
          </li>

          <li>
            It is widely used in efficient algorithms.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Basic Steps</p>

          <pre>{`1. Divide the problem
2. Solve smaller subproblems
3. Combine the solutions`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Advantages of Divide and Conquer
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Reduces problem complexity.
          </li>

          <li>
            Makes algorithms faster and more efficient.
          </li>

          <li>
            Works well for recursive solutions.
          </li>

          <li>
            Useful for large datasets and complex problems.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Many advanced algorithms like Merge Sort and Quick Sort use Divide
            and Conquer.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Binary Search using Divide and Conquer
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Binary Search repeatedly divides the array into halves.
          </li>

          <li>
            It works only on sorted arrays.
          </li>

          <li>
            Search space becomes smaller after each step.
          </li>

          <li>
            Time Complexity = O(log n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Binary Search Process</p>

          <pre>{`Check middle element

If target is smaller → go left
If target is larger  → go right`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Merge Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Merge Sort divides the array into smaller halves.
          </li>

          <li>
            Each half is sorted recursively.
          </li>

          <li>
            Sorted halves are merged together.
          </li>

          <li>
            Time Complexity = O(n log n)
          </li>

          <li>
            Space Complexity = O(n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Merge Sort Example</p>

          <pre>{`[8, 4, 2, 6]

Divide → [8,4] [2,6]
Further Divide → [8] [4] [2] [6]

Merge → [4,8] [2,6]
Final Merge → [2,4,6,8]`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Quick Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Quick Sort selects a pivot element.
          </li>

          <li>
            Elements smaller than pivot move left.
          </li>

          <li>
            Elements larger than pivot move right.
          </li>

          <li>
            Process repeats recursively.
          </li>

          <li>
            Average Time Complexity = O(n log n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Quick Sort Example</p>

          <pre>{`Array → [5, 2, 7, 1]

Pivot = 5

Left Side  → [2,1]
Right Side → [7]

Sorted Array → [1,2,5,7]`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Divide and Conquer vs Brute Force
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Brute Force tries every possible solution directly.
          </li>

          <li>
            Divide and Conquer solves smaller parts separately.
          </li>

          <li>
            Divide and Conquer is usually faster and more optimized.
          </li>

          <li>
            It is better for handling large problems efficiently.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Easy Trick: Divide and Conquer = Divide → Solve → Combine.
          </p>
        </div>
      </section>
    </div>
  );
};