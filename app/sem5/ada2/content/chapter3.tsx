export const Ch3Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter explains searching and sorting algorithms. Searching helps
        find data efficiently, while sorting arranges data in a particular
        order. These are some of the most important topics in Algorithm Design
        and Analysis.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Introduction to Searching
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Searching means finding a required element from a collection of
            data.
          </li>

          <li>
            Efficient searching saves time in large applications.
          </li>

          <li>
            Two common searching techniques are Linear Search and Binary Search.
          </li>

          <li>
            Binary Search is faster but requires sorted data.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Example</p>

          <pre>{`Find 25 in array:
[10, 15, 20, 25, 30]

Result → Element found at index 3`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Linear Search
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Linear Search checks elements one by one.
          </li>

          <li>
            It works on both sorted and unsorted arrays.
          </li>

          <li>
            Easy to understand and implement.
          </li>

          <li>
            Time Complexity = O(n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Linear Search Logic</p>

          <pre>{`for each element in array
   if element == target
      return found`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Binary Search
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Binary Search works only on sorted arrays.
          </li>

          <li>
            It repeatedly divides the array into two halves.
          </li>

          <li>
            Faster than Linear Search for large inputs.
          </li>

          <li>
            Time Complexity = O(log n)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Binary Search Idea</p>

          <pre>{`Middle element checked first

If target < middle → search left half
If target > middle → search right half`}</pre>
        </div>

        <div className="tip-block">
          <p>
            Exam Tip: Binary Search is one of the most frequently asked
            algorithms in coding interviews.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Introduction to Sorting
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Sorting means arranging data in ascending or descending order.
          </li>

          <li>
            Sorting improves searching and data management efficiency.
          </li>

          <li>
            Different sorting algorithms have different speeds and approaches.
          </li>

          <li>
            Some algorithms are simple while others are highly optimized.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Example</p>

          <pre>{`Unsorted → [5, 2, 8, 1]

Sorted → [1, 2, 5, 8]`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Bubble Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Bubble Sort repeatedly swaps adjacent elements if they are in the
            wrong order.
          </li>

          <li>
            Larger elements move toward the end after each pass.
          </li>

          <li>
            Very easy to understand but inefficient for large data.
          </li>

          <li>
            Time Complexity = O(n²)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Bubble Sort Idea</p>

          <pre>{`Compare adjacent elements
Swap if left > right
Repeat until array becomes sorted`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Selection Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Selection Sort repeatedly selects the smallest element.
          </li>

          <li>
            The smallest element is placed at the correct position.
          </li>

          <li>
            Number of swaps is less compared to Bubble Sort.
          </li>

          <li>
            Time Complexity = O(n²)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Selection Sort Process</p>

          <pre>{`Find smallest element
Swap with first unsorted position
Repeat for remaining array`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Insertion Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Insertion Sort places each element in its correct position.
          </li>

          <li>
            Works similar to arranging playing cards.
          </li>

          <li>
            Efficient for small or nearly sorted arrays.
          </li>

          <li>
            Time Complexity = O(n²)
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Insertion Sort Idea</p>

          <pre>{`Take one element at a time
Insert it into the sorted portion
Repeat until all elements are sorted`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Merge Sort and Quick Sort
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Merge Sort uses Divide and Conquer technique.
          </li>

          <li>
            It divides the array into smaller parts and merges them in sorted
            order.
          </li>

          <li>
            Quick Sort selects a pivot element and partitions the array.
          </li>

          <li>
            Both are faster than simple sorting algorithms for large inputs.
          </li>

          <li>
            Average Time Complexity = O(n log n)
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Merge Sort is stable and predictable, while Quick Sort is usually
            faster in practice.
          </p>
        </div>
      </section>
    </div>
  );
};