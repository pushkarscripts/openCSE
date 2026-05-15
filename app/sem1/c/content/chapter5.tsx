import Image from "next/image";
import { CodeBlock } from "../../../components/CodeBlock";

export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Concise notes on pointers, pointer arithmetic, pointers with arrays,
        strings, functions, structures, and unions with important examples
        and debugging concepts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Pointer Basics */}
      <section>
        <h3 className="section-heading">Pointers — Basics</h3>

        <ul className="section-list">
          <li>
            <strong>Pointer variable</strong> stores the address of another variable.
          </li>

          <li>
            Declaration:
            <code className="inline-code"> int *p;</code>
          </li>

          <li>
            Address operator:
            <code className="inline-code"> &x</code>
          </li>

          <li>
            Dereference operator:
            <code className="inline-code"> *p</code>
          </li>

          <li>
            Pointer arithmetic increments according to datatype size.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Pointer Example
          </div>

          <CodeBlock
            code={`int x = 10;

int *p = &x;

printf("%d\\n", *p);

*p = 20;

printf("%d", x);`}
            language="c"
          />
        </div>

        <Image
          src="/pointer-basics.png"
          alt="pointer-basics"
          width={750}
          height={380}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Arrays and Strings */}
      <section>
        <h3 className="section-heading">
          Pointers with Arrays and Strings
        </h3>

        <ul className="section-list">
          <li>
            Array names behave like pointers to the first element.
          </li>

          <li>
            <code className="inline-code">a[i]</code> is equivalent to{" "}
            <code className="inline-code">*(a + i)</code>
          </li>

          <li>
            Strings are arrays of characters terminated with{" "}
            <code className="inline-code">'\\0'</code>
          </li>

          <li>
            Pointer datatype determines increment size in memory.
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Array Access Using Pointer
          </div>

          <CodeBlock
            code={`int a[5] = {1,2,3,4,5};

int *p = a;

printf("%d", *(p + 2));`}
            language="c"
          />
        </div>

        <Image
          src="/array-pointer.png"
          alt="array-pointer"
          width={700}
          height={350}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Functions */}
      <section>
        <h3 className="section-heading">Pointers and Functions</h3>

        <ul className="section-list">
          <li>
            Pointers allow functions to modify original variables.
          </li>

          <li>
            Arrays and structures are efficiently passed using pointers.
          </li>

          <li>
            Avoid returning pointers to local variables.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Pass by Reference
          </div>

          <CodeBlock
            code={`void increment(int *p) {
    (*p)++;
}

int x = 5;

increment(&x);

printf("%d", x);`}
            language="c"
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Structures */}
      <section>
        <h3 className="section-heading">Structures</h3>

        <ul className="section-list">
          <li>
            Structures group variables of different data types.
          </li>

          <li>
            Members are accessed using dot operator.
          </li>

          <li>
            Structure pointers use arrow operator{" "}
            <code className="inline-code">-&gt;</code>
          </li>

          <li>
            Self-referential structures are used in linked lists.
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Structure Example
          </div>

          <CodeBlock
            code={`struct Student {
    char name[20];
    int roll;
    float marks;
};

struct Student s = {"Alex", 101, 89.5};

printf("%s", s.name);`}
            language="c"
          />
        </div>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Structure Pointer Example
          </div>

          <CodeBlock
            code={`struct Point {
    int x, y;
};

struct Point p = {2, 4};

struct Point *ptr = &p;

printf("%d", ptr->x);`}
            language="c"
          />
        </div>

        <Image
          src="/struct-memory.png"
          alt="struct-memory"
          width={750}
          height={450}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Unions */}
      <section>
        <h3 className="section-heading">Unions</h3>

        <ul className="section-list">
          <li>
            All members of a union share the same memory location.
          </li>

          <li>
            Size of union equals size of largest member.
          </li>

          <li>
            Used for memory optimization.
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            Union Example
          </div>

          <CodeBlock
            code={`union Number {
    int i;
    float f;
};

union Number n;

n.i = 10;

n.f = 5.5;

printf("%f", n.f);`}
            language="c"
          />
        </div>

        <Image
          src="/union-layout.png"
          alt="union-layout"
          width={700}
          height={380}
          className="my-6 rounded-xl border border-[#c7a669] shadow-md max-w-full"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Dynamic Memory */}
      <section>
        <h3 className="section-heading">Dynamic Memory Allocation</h3>

        <ul className="section-list">
          <li>
            Dynamic memory is allocated during runtime using{" "}
            <code className="inline-code">malloc()</code>
          </li>

          <li>
            Memory should always be released using{" "}
            <code className="inline-code">free()</code>
          </li>

          <li>
            Check for NULL after allocation.
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-xl p-5 mt-5 shadow-sm">
          <div className="font-semibold text-[#3a2a14]">
            malloc() Example
          </div>

          <CodeBlock
            code={`int *arr;

arr = (int*) malloc(5 * sizeof(int));

if (arr == NULL) {
    printf("Memory allocation failed");
}

free(arr);`}
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

int *makeArray() {

    int arr[5] = {1,2,3,4,5};

    return arr;
}`}
            language="c"
          />
        </div>

        <div className="mt-4 p-4 rounded-lg bg-[#f7e7bf] border-l-4 border-[#b8925d] text-[#2b1d0f]">
          <div className="font-semibold mb-2">
            Corrections
          </div>

          <ul className="section-list">
            <li>
              Never return address of local array variables.
            </li>

            <li>
              Use dynamic allocation for returning arrays.
            </li>

            <li>
              Local variables are destroyed after function ends.
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
            Implement linked list insertion using structures and pointers.
          </li>

          <li>
            Write a function to swap two numbers using pointers.
          </li>

          <li>
            Create a dynamically allocated integer array.
          </li>
        </ul>
      </section>

    </div>
  );
};