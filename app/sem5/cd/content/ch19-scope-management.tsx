import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const ScopeManagementContent = () => {
  // We will export ScopeManagementContent and bind it to Ch19ScopeManagementContent or similar.
  // In page.tsx: import { ScopeManagementContent } from "../content/ch19-scope-management";
  return (
    <div className="course-content">
      <h2 className="section-heading">Scope Management</h2>
      <p className="p-text">
        <strong>Scope</strong> is the structural region of a program within which an identifier&apos;s declaration is valid and accessible.
      </p>

      <h2 className="section-heading">Lexical vs Dynamic Scope</h2>
      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Static (Lexical) Scope" defaultOpen={true}>
          <p className="p-text">
            The scope of an identifier is determined entirely by the textual (source code) structure of the program at compile time.
          </p>
          <ul className="list-disc list-inside p-text space-y-1.5 ml-4">
            <li>Modern languages (like C, C++, Java, Python) use lexical scoping.</li>
            <li>Easy to reason about because scopes are static and visible directly in the code editor.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="2. Dynamic Scope">
          <p className="p-text">
            The scope is resolved at runtime based on the execution call stack (i.e., which procedure called which, rather than where the variables are declared).
          </p>
          <ul className="list-disc list-inside p-text space-y-1.5 ml-4">
            <li>Used historically in early versions of Lisp, Perl, and APL.</li>
            <li>Can make debugging extremely challenging as variables can change based on the call sequence.</li>
          </ul>
        </ExpandingBox>
      </div>

      <h2 className="section-heading">Block Scoping &amp; Stack of Symbol Tables</h2>
      <p className="p-text">
        For block-structured languages supporting nested blocks (like C/C++ or Java), the compiler manages scopes using a **Stack of Symbol Tables**. Entering a block pushes a new table, and exiting a block pops the top table.
      </p>

      <ExpandingBox title="Code Trace &amp; Scope Stack Walkthrough" defaultOpen={true}>
        <p className="p-text mb-2">
          Consider the following C code snippet:
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-4 rounded font-mono text-sm leading-relaxed mb-4">
{`int a = 1;         // Global scope (table 0): { a: int }

void f(int x) {    // ENTER SCOPE -> PUSH table 1: { x: int }
    float a = 3.1; // table 1: { x: int, a: float } -- shadows global 'a'
    
    {              // ENTER SCOPE -> PUSH table 2
        int b = 9; // table 2: { b: int }
        int c = a; // lookup(a) -> checks table 2 (no), checks table 1 (YES: float 'a')
    }              // EXIT SCOPE -> POP table 2
    
}                  // EXIT SCOPE -> POP table 1`}
        </pre>
        
        <p className="p-text font-bold text-[#c7a669] mt-3 mb-1">
          Lookups in Scope Stack:
        </p>
        <p className="p-text">
          When the compiler encounters <code>int c = a;</code> in the innermost block:
        </p>
        <ol className="list-decimal list-inside p-text space-y-1.5 ml-4">
          <li>It looks up <code>a</code> in the top table (Table 2). It&apos;s not found.</li>
          <li>It checks the parent scope table (Table 1). It finds <code>float a = 3.1;</code>.</li>
          <li>The compiler resolves <code>a</code> as the local float parameter, shadowing the global integer <code>a</code>.</li>
        </ol>
      </ExpandingBox>

      <h2 className="section-heading">Scope Rules in C</h2>
      <p className="p-text">
        C features four primary scope structures:
      </p>
      <ul className="list-disc list-inside p-text space-y-2.5 ml-4">
        <li><strong>File Scope:</strong> Declared outside functions. Visible from the declaration point to the end of the file.</li>
        <li><strong>Block Scope:</strong> Declared inside <code>&#123; ... &#125;</code>. Visible only until the closing brace.</li>
        <li><strong>Function Scope:</strong> Labels (like targets of <code>goto</code>) are the only identifiers with function scope, meaning they can be jumped to from anywhere in the same function.</li>
        <li><strong>Prototype Scope:</strong> Parameter names in function declarations (e.g. <code>void f(int width, int height);</code>) are only scoped within the declaration itself.</li>
      </ul>
    </div>
  );
};

export const ScopeManagementContentExport = ScopeManagementContent;
