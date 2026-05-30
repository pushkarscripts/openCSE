import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch20Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Runtime Memory Organization</h2>
      <p className="p-text">
        The **Runtime Environment** manages program memory during execution. When a program starts, the operating system allocates a large virtual address space partitioned into distinct logical segments:
      </p>

      <ExpandingBox title="Memory Regions Layout" defaultOpen={true}>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Region</th>
                <th className="p-2 font-bold text-[#c7a669]">Location</th>
                <th className="p-2 font-bold text-[#c7a669]">Contents</th>
                <th className="p-2 font-bold text-[#c7a669]">Allocation Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Code / Text Segment</td>
                <td className="p-2">Low addresses (Fixed size)</td>
                <td className="p-2">Compiled machine instructions, read-only constants.</td>
                <td className="p-2">Compile / Load Time</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Static Data Segment</td>
                <td className="p-2">Above code (Fixed size)</td>
                <td className="p-2">Global variables, static variables.</td>
                <td className="p-2">Compile / Load Time</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-bold">Heap</td>
                <td className="p-2">Grows upward</td>
                <td className="p-2">Dynamically allocated variables (via <code>malloc</code> / <code>new</code>).</td>
                <td className="p-2">Runtime (Explicit request)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Stack</td>
                <td className="p-2">Grows downward (from high addresses)</td>
                <td className="p-2">Activation records representing active procedure calls.</td>
                <td className="p-2">Runtime (Automatic)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>


      <h2 className="section-heading">Activation Records (Stack Frames)</h2>
      <p className="p-text">
        Whenever a procedure (function) is called, the compiler allocates a block of stack memory called an **Activation Record** (or Stack Frame). This frame is popped and discarded when the function returns.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Return Value Slot">
          <p className="p-text">
            Space allocated for depositing the returned value before returning control to the caller.
          </p>
          <p className="p-text italic text-sm text-[#ac9e91]">
            Note: On modern architectures, small values (like integers or pointers) are returned directly via CPU registers (e.g., <code>EAX</code> / <code>RAX</code>) rather than stack slots.
          </p>
        </ExpandingBox>

        <ExpandingBox title="2. Actual Parameters">
          <p className="p-text">
            The arguments passed from the caller. Copies of values are stored for call-by-value, while memory addresses are stored for call-by-reference.
          </p>
        </ExpandingBox>

        <ExpandingBox title="3. Control Link (Dynamic Link)">
          <p className="p-text">
            A pointer referencing the activation record of the **caller**. When the callee returns, this dynamic link is used to restore the caller&apos;s frame pointer (<code>FP</code>).
          </p>
        </ExpandingBox>

        <ExpandingBox title="4. Access Link (Static Link)">
          <p className="p-text">
            A pointer referencing the activation record of the **lexical parent**. Used to access non-local variables in nested procedures (common in Pascal, but absent in C since C doesn&apos;t support nested functions).
          </p>
        </ExpandingBox>

        <ExpandingBox title="5. Saved Machine State">
          <p className="p-text">
            Saves PC (return address) and registers that the callee might overwrite, ensuring the caller can resume execution seamlessly.
          </p>
        </ExpandingBox>

        <ExpandingBox title="6. Local Variables &amp; Temporaries">
          <p className="p-text">
            <strong>Local Variables:</strong> Variables declared locally within the procedure. Access is compiled to fixed offsets relative to the frame pointer (e.g., <code>[FP - 8]</code>).
          </p>
          <p className="p-text mt-2">
            <strong>Temporaries:</strong> Temporary slots for intermediate expression evaluations that do not fit within registers.
          </p>
        </ExpandingBox>
      </div>

      <ExpandingBox title="Activation Record Layout Diagram">
        <pre className="bg-[#ebdcb0]/5 text-[#e2d1c1] p-4 rounded font-mono text-sm leading-relaxed border border-[#c7a669]/20">
{`   [Caller's frame]
   +------------------------------------+
   | Actual parameters (passed to P)    | <- pushed by CALLER
   +------------------------------------+
   | Return value (space for result)    | <- read by CALLER
   +------------------------------------+
   [P's activation record begins here]
   +------------------------------------+
   | Return address (saved PC)          | <- pushed by CALL instruction
   +------------------------------------+
   | Control link (caller's FP)         | <- FP points here on entry
   +------------------------------------+
   | Access link (static parent's FP)   |
   +------------------------------------+
   | Saved registers                    |
   +------------------------------------+
   | Local variables                    | e.g., [FP - 4]
   +------------------------------------+
   | Temporaries                        | e.g., t1, t2
   +------------------------------------+ <- SP points here during P's run`}
        </pre>
      </ExpandingBox>

      <h2 className="section-heading">Memory Allocation Strategies</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Strategy</th>
              <th className="p-2 font-bold text-[#c7a669]">Allocation Time</th>
              <th className="p-2 font-bold text-[#c7a669]">Deallocation</th>
              <th className="p-2 font-bold text-[#c7a669]">Supports Recursion?</th>
              <th className="p-2 font-bold text-[#c7a669]">Overhead</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Static</td>
              <td className="p-2">Compile / Load Time</td>
              <td className="p-2">Never (Program End)</td>
              <td className="p-2 text-red-300">No</td>
              <td className="p-2 text-green-300">Zero</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Stack</td>
              <td className="p-2">Runtime (Call)</td>
              <td className="p-2">Automatic (Return)</td>
              <td className="p-2 text-green-300">Yes</td>
              <td className="p-2 text-green-300">Very Low (O(1))</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Heap</td>
              <td className="p-2">Runtime (Explicit)</td>
              <td className="p-2">Manual / GC</td>
              <td className="p-2 text-green-300">Yes</td>
              <td className="p-2 text-red-300">High (Manager/GC)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-heading">Heap Allocator Strategies</h2>
      <ExpandingBox title="Free List Fit Strategies">
        <ul className="space-y-3 p-text">
          <li>
            <strong>First Fit:</strong> Scans the free list from the beginning and returns the first free block large enough. Fast, but causes fragmentation at the beginning of the list.
          </li>
          <li>
            <strong>Best Fit:</strong> Scans the entire list to return the smallest block that fits. Minimizes wasted space, but lookup is slow.
          </li>
          <li>
            <strong>Worst Fit:</strong> Returns the largest available block. Leaves large remaining fragments, but quickly exhausts large blocks.
          </li>
          <li>
            <strong>Buddy System:</strong> Block sizes are powers of 2. Split/merge adjacent blocks (buddies) dynamically. Quick coalescing, but introduces internal fragmentation.
          </li>
        </ul>
      </ExpandingBox>
    </div>
  );
};
