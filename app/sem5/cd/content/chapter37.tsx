import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch37Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Non-Imperative Programming Languages</h2>
      <p className="p-text">
        Non-imperative paradigms (Functional, Logic, Declarative) present unique compilation challenges compared to traditional procedural languages.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="Functional Languages (e.g., Haskell, LISP)">
          <ul className="list-disc list-inside p-text space-y-2 ml-4">
            <li><strong>Higher-order functions & Closures:</strong> Functions can return functions. Closures must capture their lexical environment, compiled via <em>closure conversion</em> into a function + environment record.</li>
            <li><strong>Tail Call Optimization:</strong> Recursive tail calls are optimized to reuse the current stack frame, reducing space complexity to O(1).</li>
            <li><strong>Lazy Evaluation:</strong> Expressions are evaluated only when needed, implemented via <em>thunks</em> (deferred computation records).</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="Logic Languages (e.g., Prolog)">
          <ul className="list-disc list-inside p-text space-y-2 ml-4">
            <li>Execution model is search-based (unification + backtracking).</li>
            <li>Compiled using the <strong>WAM (Warren Abstract Machine)</strong>.</li>
            <li>Backtracking is implemented via choice points (saving and restoring state).</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="Declarative Languages (e.g., SQL)">
          <ul className="list-disc list-inside p-text space-y-2 ml-4">
            <li>You describe <em>WHAT</em> to compute, not <em>HOW</em>.</li>
            <li>The compiler (or query engine) translates the query to an execution plan using <strong>query optimization</strong>.</li>
            <li>Optimizations include join ordering and index selection.</li>
          </ul>
        </ExpandingBox>
      </div>
    </div>
  );
};
