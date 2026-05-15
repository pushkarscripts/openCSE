import Image from "next/image";
import { CodeBlock } from "../../../components/CodeBlock";

export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        This module contains essential notes on one/two/multidimensional arrays,
        character arrays and strings, user-defined functions, recursion,
        and basic searching and sorting concepts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Arrays */}
      <section>
        <h3 className="section-heading">Arrays</h3>

        <ul className="section-list">
          <li>
            <strong>Array</strong> — collection of elements of the same type stored in contiguous memory.
          </li>
          <li>
            <strong>One-dimensional:</strong> declaration{" "}
            <code className="inline-code">int a[10];</code>, indices 0..9.
          </li>
          <li>
            <strong>Two-dimensional:</strong> matrix declaration{" "}
            <code className="inline-code">int m[3][4];</code>. C uses row-major order.
          </li>
          <li>
            <strong>Multidimensional:</strong> e.g.{" "}
            <code className="inline-code">int t[2][3][4];</code>
          </li>
          <li>
            <strong>Static initialization:</strong>{" "}
            <code className="inline-code">int a[3] = {"{1,2,3}"};</code>
          </li>
          <li>
            <strong>Dynamic allocation:</strong> use{" "}
            <code className="inline-code">malloc()</code> and{" "}
            <code className="inline-code">free()</code>.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Static vs Dynamic Arrays
          </div>

          <CodeBlock
            code={`// static array
int a[5] = {0};

// dynamic array
int *b = malloc(n * sizeof(int));

if (b == NULL) {
    // handle error
}

free(b);`}
            language="c"
          />
        </div>

        <Image
          src="/array-memory-layout.png"
          alt="array-memory-layout"
          width={750}
          height={350}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Strings */}
      <section>
        <h3 className="section-heading">Character Arrays and Strings</h3>

        <ul className="section-list">
          <li>
            <strong>Character array:</strong>{" "}
            <code className="inline-code">
              char s[6] = {'{'}'H','i','\\0'{'}'};
            </code>
          </li>

          <li>
            <strong>String literal:</strong>{" "}
            <code className="inline-code">char s[] = "Hello";</code>
          </li>

          <li>
            Common functions:
            <code className="inline-code ml-1">strlen()</code>,
            <code className="inline-code ml-1">strcpy()</code>,
            <code className="inline-code ml-1">strcmp()</code>,
            <code className="inline-code ml-1">strcat()</code>
          </li>

          <li>
            Use <code className="inline-code">strcmp(a,b)</code> for comparison,
            not <code className="inline-code">==</code>.
          </li>

          <li>
            Always leave space for terminating{" "}
            <code className="inline-code">'\\0'</code>.
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            String Example
          </div>

          <CodeBlock
            code={`char s[6] = "Hello";

printf("%s\\n", s);

if (strcmp(s, "Hello") == 0) {
    printf("Equal");
}`}
            language="c"
          />
        </div>

        <Image
          src="/string-functions-table.png"
          alt="string-functions-table"
          width={850}
          height={500}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Functions */}
      <section>
        <h3 className="section-heading">Functions (User-defined)</h3>

        <ul className="section-list">
          <li>
            <strong>Prototype:</strong>{" "}
            <code className="inline-code">int add(int, int);</code>
          </li>

          <li>
            <strong>Definition:</strong>{" "}
            <code className="inline-code">
              int add(int a, int b) {"{"} return a+b; {"}"}
            </code>
          </li>

          <li>
            <strong>Call:</strong>{" "}
            <code className="inline-code">sum = add(x, y);</code>
          </li>

          <li>
            C uses <strong>pass by value</strong>. Use pointers to modify caller data.
          </li>

          <li>
            Arrays decay into pointers when passed to functions.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Pass by Value vs Pointer
          </div>

          <CodeBlock
            code={`void inc_val(int x) {
    x = x + 1;
}

void inc_ref(int *p) {
    *p = *p + 1;
}

int a = 5;

inc_val(a);   // still 5
inc_ref(&a);  // becomes 6`}
            language="c"
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Recursion */}
      <section>
        <h3 className="section-heading">Recursion</h3>

        <ul className="section-list">
          <li>
            A recursive function calls itself.
          </li>

          <li>
            Every recursion must contain a <strong>base case</strong>.
          </li>

          <li>
            Tail recursion can sometimes be optimized.
          </li>

          <li>
            Recursion is useful for factorial, Fibonacci, trees, and divide-conquer algorithms.
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Factorial Using Recursion
          </div>

          <CodeBlock
            code={`// recursive factorial
int fact(int n) {
    if (n <= 1)
        return 1;

    return n * fact(n - 1);
}

// iterative factorial
int fact_iter(int n) {
    int r = 1;

    for (int i = 2; i <= n; i++) {
        r *= i;
    }

    return r;
}`}
            language="c"
          />
        </div>

        <Image
          src="/recursion-tree.png"
          alt="recursion-tree"
          width={600}
          height={300}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Searching and Sorting */}
      <section>
        <h3 className="section-heading">
          Searching and Sorting — Basics
        </h3>

        <ul className="section-list">
          <li>
            <strong>Linear Search:</strong> sequential scan, complexity O(n).
          </li>

          <li>
            <strong>Binary Search:</strong> works only on sorted arrays, complexity O(log n).
          </li>

          <li>
            Basic sorting techniques include bubble sort, insertion sort, and selection sort.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Linear Search Example
          </div>

          <CodeBlock
            code={`int linear_search(int a[], int n, int key) {

    for (int i = 0; i < n; i++) {

        if (a[i] == key)
            return i;
    }

    return -1;
}`}
            language="c"
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="example-box bg-[#2b1d0f] border border-red-400 rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-red-300">
            Find and Fix the Errors
          </div>

          <CodeBlock
            code={`#include <stdio.h>

int sum_rows(int m[][3], int r) {

    int s = 0;

    for (int i = 0; i <= r; i++) {

        for (int j = 0; j < 3; j++)
            s += m[i][j];
    }

    return s;
}`}
            language="c"
          />
        </div>

        <div className="mt-4 p-4 rounded-lg bg-[#f7e7bf] border-l-4 border-[#b8925d] text-[#2b1d0f]">
          <div className="font-semibold mb-2">Corrections</div>

          <ul className="section-list">
            <li>
              Replace{" "}
              <code className="inline-code">
                for (int i = 0; i &lt;= r; i++)
              </code>{" "}
              with{" "}
              <code className="inline-code">
                for (int i = 0; i &lt; r; i++)
              </code>
            </li>

            <li>
              The second dimension in multidimensional arrays must be known.
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Exercises */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>

        <ul className="section-list">
          <li>
            Write a function to search a string in an array of strings.
          </li>

          <li>
            Implement insertion sort and state its time complexity.
          </li>

          <li>
            Write a recursive Fibonacci program.
          </li>
        </ul>
      </section>

    </div>
  );
};