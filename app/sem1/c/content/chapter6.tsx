import Image from "next/image";
import { CodeBlock } from "../../../components/CodeBlock";

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
          <li><strong>File operations</strong>: open, read, write, close using <code className="inline-code">fopen</code>, <code className="inline-code">fclose</code>, <code className="inline-code">fread</code>, <code className="inline-code">fwrite</code>, <code className="inline-code">fseek</code>, <code className="inline-code">ftell</code>.</li>
          <li><strong>Streams</strong>: <code className="inline-code">stdin</code>, <code className="inline-code">stdout</code>, <code className="inline-code">stderr</code>.</li>
          <li><strong>Command-line arguments</strong>: <code className="inline-code">int main(int argc, char *argv[])</code>.</li>
          <li><strong>Error handling</strong>: check return values, use <code className="inline-code">perror</code>.</li>
        </ul>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">File Read (simple)</div>

          <CodeBlock
            language="c"
            code={`FILE *fp = fopen("data.bin", "rb");
if (fp == NULL) { perror("open"); exit(1); }

char buf[128];
size_t n = fread(buf, 1, sizeof(buf), fp);

fclose(fp);`}
          />
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

      {/* Dynamic Memory */}
      <section>
        <h3 className="section-heading">Dynamic Memory Allocation</h3>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Dynamic array</div>

          <CodeBlock
            language="c"
            code={`int *a = malloc(n * sizeof(int));
if (a == NULL) { perror("malloc"); exit(1); }

... use a ...

free(a);`}
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Linked list */}
      <section>
        <h3 className="section-heading">Basic Idea — Linked List</h3>

        <div className="example-box p-3 my-3 rounded-lg bg-[#f0ddb6] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Insert at head</div>

          <CodeBlock
            language="c"
            code={`struct Node *n = malloc(sizeof *n);
n->val = v;
n->next = head;
head = n;`}
          />
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

        <div className="example-box p-3 my-3 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <div className="font-semibold text-[#3a2a14]">Macro example</div>

          <CodeBlock
            language="c"
            code={`#define MAX(a,b) ((a) > (b) ? (a) : (b))
int m = MAX(x, y);`}
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Debugging */}
      <section>
        <h3 className="section-heading">Debugging Exercise</h3>

        <div className="card p-4 my-4">
          <div className="font-semibold">Find and fix the errors</div>

          <CodeBlock
            language="c"
            code={`#include <stdio.h>
#include <stdlib.h>

char *make_message() {
  char buf[64];
  snprintf(buf, sizeof(buf), "hello");
  return buf;
}`}
          />
        </div>
      </section>

    </div>
  );
};