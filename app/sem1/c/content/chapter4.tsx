import Image from "next/image";

export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">This module contains essential notes on one/two/multidimensional arrays, character arrays and strings,
        user-defined functions, recursion, and basic searching and sorting concepts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Arrays */}
      <section>
        <h3 className="section-heading">Arrays</h3>
        <ul className="section-list">
          <li><strong>Array</strong> — collection of elements of the same type in contiguous memory.</li>
          <li><strong>One-dimensional:</strong> declaration <code className="inline-code">{`int a[10];`}</code>, indices 0..9.</li>
          <li><strong>Two-dimensional:</strong> matrix declaration <code className="inline-code">{`int m[3][4];`}</code>. C uses row-major order.</li>
          <li><strong>Multidimensional:</strong> extend the same idea, e.g. <code className="inline-code">{`int t[2][3][4];`}</code>.</li>
          <li><strong>Static init:</strong> <code className="inline-code">{`int a[3] = {1,2,3};`}</code></li>
          <li><strong>Dynamic allocation:</strong> use <code className="inline-code">{`malloc`}</code> and <code className="inline-code">{`free`}</code> for runtime sizes.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Static vs dynamic</div>
          <pre className="code-block mt-3">{`// static
int a[5] = {0};

// dynamic
int *b = malloc(n * sizeof(int));
if (b == NULL) { /* handle error */ }
free(b);`}</pre>
        </div>

        <Image
          src="/array-memory-layout.png"
          alt="array-memory-layout"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={750}
          height={350}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Character arrays and strings */}
      <section>
        <h3 className="section-heading">Character Arrays and Strings</h3>

        <ul className="section-list">
          <li><strong>Character array:</strong> <code className="inline-code">{`char s[6] = {'H','i','\\0'};`}</code></li>
          <li><strong>String literal:</strong> <code className="inline-code">{`char s[] = "Hello";`}</code> (null-terminated).</li>
          <li><strong>Common functions:</strong> <code className="inline-code">{`strlen`}</code>, <code className="inline-code">{`strcpy`}</code>, <code className="inline-code">{`strcmp`}</code>, <code className="inline-code">{`strcat`}</code>.</li>
          <li><strong>Comparison:</strong> use <code className="inline-code">{`strcmp(a,b)`}</code>, not the <code className="inline-code">{`==`}</code> operator.</li>
          <li><strong>Safety:</strong> always ensure space for the terminating <code className="inline-code">{`'\\0'`}</code> and prefer bounded input.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">String example</div>
          <pre className="code-block mt-3">{`char s[6] = "Hello";
printf("%s\n", s);
if (strcmp(s, "Hello") == 0) { /* equal */ }`}</pre>
        </div>

        <Image
  src="/string-functions-table.png"
  alt="string-functions-table"
  className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
  width={850}
  height={500}
/>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Functions */}
      <section>
        <h3 className="section-heading">Functions (User-defined)</h3>

        <ul className="section-list">
          <li><strong>Prototype / declaration:</strong> e.g. <code className="inline-code">{`int add(int, int);`}</code></li>
          <li><strong>Definition:</strong> code body, e.g. <code className="inline-code">{`int add(int a, int b) { return a + b; }`}</code></li>
          <li><strong>Call:</strong> <code className="inline-code">{`sum = add(x, y);`}</code></li>
          <li><strong>Parameter passing:</strong> C passes by value. To modify caller data, pass a pointer (pass-by-reference style), e.g. <code className="inline-code">{`void inc(int *p)`}</code>.</li>
          <li><strong>Passing arrays/strings:</strong> arrays decay to pointers; use signatures like <code className="inline-code">{`void f(int a[], int n)`}</code> or <code className="inline-code">{`void f(char s[])`}</code>.</li>
          <li><strong>Scope:</strong> local variables have block scope; globals have file or external linkage; <code className="inline-code">{`static`}</code> affects lifetime/linkage.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Pass by value vs. pointer</div>
          <pre className="code-block mt-3">{`void inc_val(int x) { x = x + 1; }     // caller not changed
void inc_ref(int *p) { *p = *p + 1; }  // caller changed

int a = 5;
inc_val(a);    // a still 5
inc_ref(&a);   // a becomes 6`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Recursion */}
      <section>
        <h3 className="section-heading">Recursion</h3>

        <ul className="section-list">
          <li><strong>Recursive function:</strong> a function that calls itself.</li>
          <li><strong>Base case:</strong> required for termination; always identify it.</li>
          <li><strong>Tail recursion:</strong> recursive call is the last action; can be optimized in some compilers.</li>
          <li><strong>Analysis:</strong> formulate recurrence (e.g., <code className="inline-code">{`T(n)=T(n-1)+O(1)`}</code>) and solve for complexity.</li>
          <li><strong>Recursion tree:</strong> visualize calls and costs per level for complexity analysis.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Factorial (recursive vs iterative)</div>
          <pre className="code-block mt-3">{`// recursive
int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n-1);
}

// iterative
int fact_iter(int n) {
  int r = 1;
  for (int i = 2; i <= n; i++) r *= i;
  return r;
}`}</pre>
        </div>

        <Image
          src="/recursion-tree.png"
          alt="recursion-tree"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={600}
          height={300}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Searching and Sorting basics */}
      <section>
        <h3 className="section-heading">Searching and Sorting — Basics</h3>

        <ul className="section-list">
          <li><strong>Linear search:</strong> scan sequentially; O(n) worst-case.</li>
          <li><strong>Binary search:</strong> requires sorted array; O(log n).</li>
          <li><strong>Sorting (intro):</strong> be familiar with bubble, insertion, selection; know their basic complexities.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Linear search</div>
          <pre className="code-block mt-3">{`int linear_search(int a[], int n, int key) {
  for (int i = 0; i < n; i++)
    if (a[i] == key) return i;
  return -1;
}`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging exercise */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="card p-4 my-4">
          <div className="font-semibold">Find and fix the errors</div>
          <pre className="code-block error mt-3">{`#include <stdio.h>

int sum_rows(int m[][3], int r) {
  int s = 0;
  for (int i = 0; i <= r; i++) {   // error: loop bounds (<=) incorrect
    for (int j = 0; j < 3; j++)
      s += m[i][j];
  }
  return s;
}`}</pre>

          <div className="mt-3 text-[#b0ffb4] font-semibold">Correct points</div>
          <ul className="section-list mt-2">
            <li>Fix row loop to <code className="inline-code">{`for (int i = 0; i < r; i++)`}</code> if <code className="inline-code">{`r`}</code> is the row count.</li>
            <li>Array parameter requires known second dimension: <code className="inline-code">{`m[][3]`}</code>.</li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programming exercise */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>
        <ul className="section-list">
          <li>Write a function to search for a string in an array of strings and return index or -1.</li>
          <li>Implement insertion sort on an integer array and state its time complexity.</li>
        </ul>
      </section>

    </div>
  );
};
