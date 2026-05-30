import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const ParameterPassingContent = () => {
  // We will export ParameterPassingContent so page.tsx can import it as:
  // import { ParameterPassingContent } from "../content/ch20-parameter-passing";
  return (
    <div className="course-content">
      <h2 className="section-heading">Parameter Passing Mechanisms</h2>
      <p className="p-text">
        Different programming languages employ different semantics for communicating values between callers and callee procedures.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Call by Value" defaultOpen={true}>
          <p className="p-text">
            The caller evaluates the actual parameters and passes a **copy** of the resulting values. The callee allocates a fresh memory slot inside its activation record to store this copy. Modifying the formal parameters inside the function changes only the local copy, leaving the caller&apos;s variables completely unaffected.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-4 rounded font-mono text-sm leading-relaxed my-2">
{`void increment(int x) {
    x = x + 1; // modifies the local copy only
}

int main() {
    int a = 10;
    increment(a); // passes copy of 10
    printf("%d", a); // prints 10 (UNCHANGED!)
}`}
          </pre>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Used in: C (default), Java (primitives), Python.
          </p>
        </ExpandingBox>

        <ExpandingBox title="2. Call by Reference">
          <p className="p-text">
            The caller passes the **address (L-value)** of the actual variable. The formal parameter inside the callee becomes an **alias** (another name) referencing the exact same memory cell as the caller&apos;s variable. Any modification immediately updates the caller&apos;s variable.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-4 rounded font-mono text-sm leading-relaxed my-2">
{`void increment(int &x) { // x is a reference
    x = x + 1; // modifies caller's variable
}

int main() {
    int a = 10;
    increment(a); // passes address of a
    printf("%d", a); // prints 11 (CHANGED!)
}`}
          </pre>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Used in: C++ (& parameters), Pascal (VAR parameters), C# (ref keyword).
          </p>
        </ExpandingBox>

        <ExpandingBox title="3. Call by Value-Result (Copy-In Copy-Out)">
          <p className="p-text">
            A hybrid approach operating in three phases:
          </p>
          <ol className="list-decimal list-inside p-text space-y-1 ml-2 text-sm text-[#e2d1c1]">
            <li><strong>Copy-In:</strong> At the start of the call, the actual parameter&apos;s value is copied into local variables.</li>
            <li><strong>Execution:</strong> The procedure performs computations on the local copies.</li>
            <li><strong>Copy-Out:</strong> At function return, the final values of the local copies are written back into the caller&apos;s original variables.</li>
          </ol>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Used in: Ada (IN OUT parameters), some Fortran dialects.
          </p>
        </ExpandingBox>

        <ExpandingBox title="4. Call by Name">
          <p className="p-text">
            The actual parameter expression is **textually substituted** for the formal parameter throughout the callee. The expression is re-evaluated every single time the formal parameter is accessed.
          </p>
          <p className="p-text mt-2">
            It is implemented using **thunks** — parameterless closures that freeze the expression and its scope context, passing it to the callee.
          </p>
          <p className="p-text font-semibold text-[#ebdcb0] mt-2">
            Used in: ALGOL 60. (Haskell&apos;s lazy evaluation is conceptually similar).
          </p>
        </ExpandingBox>
      </div>

      <h2 className="section-heading">Summary Comparison Table</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Mechanism</th>
              <th className="p-2 font-bold text-[#c7a669]">What is Passed</th>
              <th className="p-2 font-bold text-[#c7a669]">Caller&apos;s Variable Affected?</th>
              <th className="p-2 font-bold text-[#c7a669]">Primary Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Call by Value</td>
              <td className="p-2">Copy of value</td>
              <td className="p-2 text-red-300">Never</td>
              <td className="p-2 text-green-300">Safe: Caller&apos;s data is protected.</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Call by Reference</td>
              <td className="p-2">Address of variable</td>
              <td className="p-2 text-green-300">Always (immediately)</td>
              <td className="p-2 text-green-300">Efficient: No copying overhead for objects.</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Call by Value-Result</td>
              <td className="p-2">Value (copied both ways)</td>
              <td className="p-2 text-green-300">On return only</td>
              <td className="p-2 text-green-300">Excellent for remote procedure calls (RPC).</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Call by Name</td>
              <td className="p-2">Unevaluated expression (Thunk)</td>
              <td className="p-2">Possible (depends on expression)</td>
              <td className="p-2 text-green-300">Evaluates only if parameter is used.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ParameterPassingContentExport = ParameterPassingContent;
