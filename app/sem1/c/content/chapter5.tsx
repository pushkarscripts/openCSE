import Image from "next/image";

export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">Concise notes on pointers, pointer arithmetic, pointers with arrays/strings/functions/structures,
        and user-defined aggregate types (structures and unions) with essential examples and common pitfalls.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pointers: basics */}
      <section>
        <h3 className="section-heading">Pointers — Basics</h3>

        <ul className="section-list">
          <li><strong>Pointer variable</strong> stores address of another variable. Example declaration: <code className="inline-code">{`int *p;`}</code>.</li>
          <li><strong>Initialization:</strong> assign address: <code className="inline-code">{`p = &x;`}</code>.</li>
          <li><strong>Dereference:</strong> access value: <code className="inline-code">{`*p`}</code> (value at address).</li>
          <li><strong>Pointer arithmetic:</strong> adding 1 advances by size of pointed type: <code className="inline-code">{`p + 1`}</code>.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Pointer example</div>
          <pre className="code-block mt-3">{`int x = 10;
int *p = &x;
printf("%d\n", *p); // prints 10
*p = 20; // modifies x`}</pre>
        </div>

        <Image
          src="/pointer-basics.png"
          alt="pointer-basics"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={750}
          height={380}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pointers with arrays & strings */}
      <section>
        <h3 className="section-heading">Pointers with Arrays and Strings</h3>

        <ul className="section-list">
          <li><strong>Arrays and pointers:</strong> array name decays to pointer to first element: <code className="inline-code">{`a`}</code> ~ <code className="inline-code">{`&a[0]`}</code>.</li>
          <li><strong>Access via pointer:</strong> <code className="inline-code">{`*(a + i)`}</code> equals <code className="inline-code">{`a[i]`}</code>.</li>
          <li><strong>Strings:</strong> are character arrays; pointers to chars can traverse strings.</li>
          <li><strong>Pointer types:</strong> type of pointer determines arithmetic increment size.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Array access via pointer</div>
          <pre className="code-block mt-3">{`int a[5] = {1,2,3,4,5};
int *p = a; // points to a[0]
int x = *(p + 2); // x == a[2] == 3`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pointers and functions */}
      <section>
        <h3 className="section-heading">Pointers and Functions</h3>

        <ul className="section-list">
          <li><strong>Pointers as arguments:</strong> to modify caller data pass pointer: <code className="inline-code">{`void set(int *p)`}</code>.</li>
          <li><strong>Functions returning pointers:</strong> return pointer to dynamically allocated memory or static data; avoid returning pointer to local stack variable.</li>
          <li><strong>Pointers and functions:</strong> use pointers to pass large data (arrays, structures) efficiently.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Function modifies caller via pointer</div>
          <pre className="code-block mt-3">{`void inc(int *p) { (*p)++; }

int x = 5;
inc(&x); // x becomes 6`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pointers and structures */}
      <section>
        <h3 className="section-heading">Pointers and Structures</h3>

        <ul className="section-list">
          <li><strong>Structure access via pointer:</strong> use <code className="inline-code">{`->`}</code> operator: <code className="inline-code">{`p->field`}</code> when <code className="inline-code">{`p`}</code> is <code className="inline-code">{`struct`}</code> pointer.</li>
          <li><strong>Passing structures:</strong> pass pointer to structure for efficiency: <code className="inline-code">{`void f(struct S *p)`}</code>.</li>
          <li><strong>Functions returning pointers to structures:</strong> return dynamically allocated structure pointers with care.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Structure pointer example</div>
          <pre className="code-block mt-3">{`struct Point { int x, y; };
struct Point p = {1,2};
struct Point *pp = &p;
printf("%d\n", pp->x);`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Structures */}
      <section>
        <h3 className="section-heading">Structures</h3>

        <ul className="section-list">
          <li><strong>Definition:</strong> aggregate user-defined type: <code className="inline-code">{`struct S { int a; float b; };`}</code></li>
          <li><strong>Declaration/initialization:</strong> <code className="inline-code">{`struct S s = {1, 2.5};`}</code></li>
          <li><strong>Array of structures:</strong> <code className="inline-code">{`struct S arr[10];`}</code></li>
          <li><strong>Size and alignment:</strong> depends on member types and padding; use <code className="inline-code">{`sizeof`}</code> to know size.</li>
          <li><strong>Nested structures:</strong> structure can contain another structure as a member.</li>
          <li><strong>Self-referential structures:</strong> used for linked lists: <code className="inline-code">{`struct Node { int val; struct Node *next; };`}</code></li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Structure example</div>
          <pre className="code-block mt-3">{`struct Student {
  char name[30];
  int id;
  float gpa;
};

struct Student s = {"Alex", 101, 8.5};
printf("%s\n", s.name);`}</pre>
        </div>

        <Image
          src="/struct-memory.png"
          alt="struct-memory"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={750}
          height={450}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Unions */}
      <section>
        <h3 className="section-heading">Unions</h3>

        <ul className="section-list">
          <li><strong>Union:</strong> a data type where all members share the same memory location. Declaration: <code className="inline-code">{`union U { int i; float f; };`}</code></li>
          <li><strong>Size:</strong> size of union equals size of its largest member.</li>
          <li><strong>Use cases:</strong> memory-efficient variants, type punning (careful), embedded systems.</li>
          <li><strong>Access:</strong> use dot or arrow similar to structures.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Union example</div>
          <pre className="code-block mt-3">{`union Number {
  int i;
  float f;
};

union Number n;
n.i = 10;
n.f = 2.5; // overwrites same memory`}</pre>
        </div>
        <Image
          src="/union-layout.png"
          alt="union-layout"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={700}
          height={380}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging exercise */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="card p-4 my-4">
          <div className="font-semibold">Find and fix the errors</div>
          <pre className="code-block error mt-3">{`#include <stdio.h>
#include <stdlib.h>

int *make_array(int n) {
  int a[n]; // local VLA on stack
  for (int i = 0; i < n; i++) a[i] = i;
  return a; // error: returning address of stack memory
}`}</pre>

          <div className="mt-3 text-[#b0ffb4] font-semibold">Correct points</div>
          <ul className="section-list mt-2">
            <li>Do not return pointer to local stack array. Allocate with <code className="inline-code">{`malloc`}</code> and return pointer, or pass buffer from caller.</li>
            <li>Always check result of <code className="inline-code">{`malloc`}</code> for <code className="inline-code">NULL</code>.</li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programming Exercise */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>
        <ul className="section-list">
          <li>Implement linked list insert/delete using self-referential structures and pointers.</li>
          <li>Create a function that returns a dynamically allocated array (use <code className="inline-code">{`malloc`}</code>) and document proper ownership and free semantics.</li>
        </ul>
      </section>
    </div>
  );
};
