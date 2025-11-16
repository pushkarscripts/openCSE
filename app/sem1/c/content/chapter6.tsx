import Image from "next/image";

export const Ch6Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Concise notes on file I/O, streams, command-line arguments, dynamic memory allocation,
        basic linked list ideas, and preprocessor directives with short examples and debugging hints.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* File Management */}
      <section>
        <h3 className="section-heading">File Management and Streams</h3>

        <ul className="section-list">
          <li><strong>File operations</strong>: open, read, write, close using <code className="inline-code">{`fopen`}</code>, <code className="inline-code">{`fclose`}</code>, <code className="inline-code">{`fread`}</code>, <code className="inline-code">{`fwrite`}</code>, <code className="inline-code">{`fseek`}</code>, <code className="inline-code">{`ftell`}</code>.</li>
          <li><strong>Streams</strong>: standard streams <code className="inline-code">{`stdin`}</code>, <code className="inline-code">{`stdout`}</code>, <code className="inline-code">{`stderr`}</code>.</li>
          <li><strong>Command-line arguments</strong>: <code className="inline-code">{`int main(int argc, char *argv[])`}</code>, where <code className="inline-code">{`argc`}</code> is count and <code className="inline-code">{`argv`}</code> holds arguments.</li>
          <li><strong>Error handling</strong>: check return values (e.g., <code className="inline-code">{`fopen`}</code> may return <code className="inline-code">{`NULL`}</code>), use <code className="inline-code">{`perror`}</code> or <code className="inline-code">{`strerror(errno)`}</code>.</li>
          <li><strong>Random access</strong>: use <code className="inline-code">{`fseek`}</code> and <code className="inline-code">{`ftell`}</code> to move and query file position for binary I/O.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">File Read (simple)</div>
          <pre className="code-block mt-3">{`FILE *fp = fopen("data.bin", "rb");
if (fp == NULL) { perror("open"); exit(1); }
char buf[128];
size_t n = fread(buf, 1, sizeof(buf), fp);
fclose(fp);`}</pre>
        </div>

        <Image
          src="/file-i-o.png"
          alt="file-i-o"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={780}
          height={400}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Command-line & Error */}
      <section>
        <h3 className="section-heading">Command-line Arguments & Error Handling</h3>

        <ul className="section-list">
          <li>Access arguments via <code className="inline-code">{`argv[1]`}</code> etc.; convert strings to numbers with <code className="inline-code">{`atoi`}</code>, <code className="inline-code">{`strtol`}</code>.</li>
          <li>Always validate <code className="inline-code">{`argc`}</code> and check conversions for errors.</li>
          <li>Use <code className="inline-code">{`errno`}</code>, <code className="inline-code">{`perror`}</code> and return non-zero exit code on failure.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Dynamic Memory Allocation */}
      <section>
        <h3 className="section-heading">Dynamic Memory Allocation</h3>

        <ul className="section-list">
          <li><strong>malloc</strong>: allocate uninitialized block: <code className="inline-code">{`void *malloc(size_t size)`}</code>. Check for <code className="inline-code">{`NULL`}</code>.</li>
          <li><strong>calloc</strong>: allocate and zero-initialize: <code className="inline-code">{`void *calloc(nmemb, size)`}</code>.</li>
          <li><strong>realloc</strong>: resize previously allocated block: <code className="inline-code">{`void *realloc(ptr, new_size)`}</code>. Use carefully to avoid leaks.</li>
          <li><strong>free</strong>: release memory: <code className="inline-code">{`free(ptr)`}</code>. Avoid double-free and use-after-free.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Dynamic array (simple)</div>
          <pre className="code-block mt-3">{`int *a = malloc(n * sizeof(int));
if (a == NULL) { perror("malloc"); exit(1); }
... use a ...
free(a);`}</pre>
        </div>
        <Image
          src="/malloc-layout.png"
          alt="malloc-layout"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={780}
          height={380}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Linked list basics */}
      <section>
        <h3 className="section-heading">Basic Idea — Linked List</h3>

        <ul className="section-list">
          <li>Self-referential structure where each node points to next: <code className="inline-code">{`struct Node { int val; struct Node *next; };`}</code>.</li>
          <li>Create nodes with <code className="inline-code">{`malloc`}</code>, set fields, and link via pointers; free nodes when removed.</li>
          <li>Common ops: insert at head, delete node, traverse; watch for NULL checks.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Insert at head (sketch)</div>
          <pre className="code-block mt-3">{`struct Node *n = malloc(sizeof *n);
n->val = v;
n->next = head;
head = n;`}</pre>
        </div>
        <Image
          src="/linkedlist.png"
          alt="linkedlist"
          className="my-6 rounded-lg border border-[#c7a669] shadow-md max-w-full"
          width={800}
          height={350}
        />

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Preprocessors */}
      <section>
        <h3 className="section-heading">Preprocessor Directives</h3>

        <ul className="section-list">
          <li><strong>Macro definition:</strong> <code className="inline-code">{`#define PI 3.14`}</code> — text substitution before compilation.</li>
          <li><strong>Macro substitution:</strong> use parentheses in macros to avoid precedence bugs: <code className="inline-code">{`#define SQR(x) ((x)*(x))`}</code>.</li>
          <li><strong>File inclusion:</strong> <code className="inline-code">{`#include <stdio.h>`}</code> or <code className="inline-code">{`#include "file.h"`}</code>.</li>
          <li><strong>Conditional compilation:</strong> <code className="inline-code">{`#ifdef`}</code>, <code className="inline-code">{`#ifndef`}</code>, <code className="inline-code">{`#if`}</code>, <code className="inline-code">{`#endif`}</code>.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Macro example</div>
          <pre className="code-block mt-3">{`#define MAX(a,b) ((a) > (b) ? (a) : (b))
int m = MAX(x, y);`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging exercise */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="card p-4 my-4">
          <div className="font-semibold">Find and fix the errors</div>
          <pre className="code-block error mt-3">{`#include <stdio.h>
#include <stdlib.h>

char *make_message() {
  char buf[64];
  snprintf(buf, sizeof(buf), "hello");
  return buf; // error: returning pointer to local stack buffer
}`}</pre>

          <div className="mt-3 text-[#b0ffb4] font-semibold">Correct points</div>
          <ul className="section-list mt-2">
            <li>Do not return pointer to local buffer. Allocate with <code className="inline-code">{`malloc`}</code> or let caller provide buffer.</li>
            <li>Check allocations and use <code className="inline-code">{`free`}</code> to avoid leaks.</li>
            <li>Always close files with <code className="inline-code">{`fclose`}</code> even on error paths.</li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Programming exercise */}
      <section>
        <h3 className="section-heading">Programming Exercise</h3>

        <ul className="section-list">
          <li>Write a program that reads a binary file of integers and prints statistics (min, max, mean) using <code className="inline-code">{`fread`}</code>.</li>
          <li>Implement a simple singly linked list with insert and delete operations using dynamic memory.</li>
        </ul>
      </section>

      <p className="p-text mt-6">
        Diagrams to paste: <strong>file-i-o.png</strong>, <strong>malloc-layout.png</strong>, <strong>linkedlist.png</strong>.
        This module includes the core points required for college exams. If you want a one-page revision sheet, say &quot;Make Ch6 cheat sheet&quot;.
      </p>
    </div>
  );
};
