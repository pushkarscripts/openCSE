import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const DfaSolvedProblemContent = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Below is a complete, step-by-step solved problem demonstrating how to construct a minimized DFA from a regular expression.
      </p>

      <div className="note-box my-4">
        <strong>Problem Statement:</strong> Construct a minimized DFA for the regular expression: <code>a*(aa + bb)b*</code>
      </div>

      <section>
        <h3 className="section-heading">Understanding the Language</h3>
        <p className="p-text mt-1 text-sm md:text-base">
          The alphabet is <code>&#123;a, b&#125;</code>. Valid strings consist of zero or more <code>a</code>s, followed by either double <code>a</code> or double <code>b</code>, followed by zero or more <code>b</code>s.
          <br />
          <em>Examples of valid strings:</em> <code>aa</code>, <code>bb</code>, <code>aaa</code>, <code>bbb</code>, <code>aabbb</code>.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Step 1: Construct the NFA</h3>
        <p className="p-text mt-1">
          Using Thompson&apos;s construction, we build the NFA with states <code>q0</code> to <code>q6</code>.
        </p>

        <ExpandingBox title="NFA Transition Table & States" defaultOpen={true}>
          <pre className="code-block">{`q0 (start) --a--> q0 (self loop for a*)
q0         --ε--> q1 (move to middle part)

Branch 1 (aa):
q1 --a--> q2 --a--> q3

Branch 2 (bb):
q1 --b--> q4 --b--> q5

Merge at accept:
q3 --ε--> q6 (accept)
q5 --ε--> q6 (accept)
q6        --b--> q6 (self loop for b*)`}</pre>

          <table className="w-full border-collapse border border-[#c7a669] text-left text-sm mt-3">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-2 font-semibold">State</th>
                <th className="border border-[#c7a669] p-2 font-semibold">On &apos;a&apos;</th>
                <th className="border border-[#c7a669] p-2 font-semibold">On &apos;b&apos;</th>
                <th className="border border-[#c7a669] p-2 font-semibold">On ε (Epsilon)</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2]/20 dark:bg-black/20 text-[#3A2A14] dark:text-[#f3e7c2]">
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q0 (Start)</td>
                <td className="border border-[#c7a669] p-2">&#123;q0&#125;</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">&#123;q1&#125;</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q1</td>
                <td className="border border-[#c7a669] p-2">&#123;q2&#125;</td>
                <td className="border border-[#c7a669] p-2">&#123;q4&#125;</td>
                <td className="border border-[#c7a669] p-2">-</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q2</td>
                <td className="border border-[#c7a669] p-2">&#123;q3&#125;</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">-</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q3</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">&#123;q6&#125;</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q4</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">&#123;q5&#125;</td>
                <td className="border border-[#c7a669] p-2">-</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q5</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">&#123;q6&#125;</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-2 font-bold">q6 (Accept)</td>
                <td className="border border-[#c7a669] p-2">-</td>
                <td className="border border-[#c7a669] p-2">&#123;q6&#125;</td>
                <td className="border border-[#c7a669] p-2">-</td>
              </tr>
            </tbody>
          </table>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Step 2: NFA to DFA Subset Construction</h3>
        <p className="p-text mt-1">
          Compute epsilon closures and mapping transitions to form the DFA states:
        </p>

        <ExpandingBox title="Epsilon-Closures & DFA Subset Calculations" defaultOpen={false}>
          <pre className="code-block">{`ε-closure({q0}) = {q0, q1}  -> DFA Start State A
ε-closure({q3}) = {q3, q6}  (contains accept state q6)
ε-closure({q5}) = {q5, q6}  (contains accept state q6)

Subset Derivation:
1. Start at A = {q0, q1}:
   - On 'a': transition reaches {q0, q2}. ε-closure({q0, q2}) = {q0, q1, q2} -> State B
   - On 'b': transition reaches {q4}. ε-closure({q4}) = {q4} -> State C

2. Process B = {q0, q1, q2}:
   - On 'a': reaches {q0, q2, q3}. ε-closure = {q0, q1, q2, q3, q6} -> State D (Accept)
   - On 'b': reaches {q4}. ε-closure = {q4} -> State C

3. Process C = {q4}:
   - On 'a': reaches {}. -> State E (Trap/Dead state)
   - On 'b': reaches {q5}. ε-closure = {q5, q6} -> State F (Accept)

4. Process D = {q0, q1, q2, q3, q6} (Accept):
   - On 'a': reaches {q0, q2, q3}. ε-closure = {q0, q1, q2, q3, q6} -> State D
   - On 'b': reaches {q4, q6}. ε-closure = {q4, q6} -> State G (Accept)

5. Process F = {q5, q6} (Accept):
   - On 'a': reaches {}. -> State E (Trap/Dead state)
   - On 'b': reaches {q6}. ε-closure = {q6} -> State H (Accept)

6. Process G = {q4, q6} (Accept):
   - On 'a': reaches {}. -> State E
   - On 'b': reaches {q5, q6}. ε-closure = {q5, q6} -> State F

7. Process H = {q6} (Accept):
   - On 'a': reaches {}. -> State E
   - On 'b': reaches {q6}. ε-closure = {q6} -> State H`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Step 3: Minimize the DFA</h3>
        <p className="p-text mt-1">
          Apply the Myhill-Nerode partitioning algorithm to find equivalent states:
        </p>

        <ExpandingBox title="Myhill-Nerode Minimization Calculations" defaultOpen={false}>
          <pre className="code-block">{`Initial Groups:
Group 1 (Accept states): {D, F, G, H}
Group 2 (Non-accept states): {A, B, C, E}

Iteration 1:
- Distinguish Group 2:
  - A on 'a' -> B (non-accept), B on 'a' -> D (accept) ==> A and B are distinguishable.
  - C on 'b' -> F (accept), E on 'b' -> E (non-accept) ==> C and E are distinguishable.
  Group 2 splits into individual states: {A}, {B}, {C}, {E}

- Distinguish Group 1:
  - D on 'a' -> D (accept), F on 'a' -> E (non-accept) ==> D and F are distinguishable.
  - G on 'a' -> E (non-accept) ==> D and G are distinguishable.
  - H on 'a' -> E (non-accept) ==> D and H are distinguishable.
  So D is isolated.
  - Now check {F, G, H}:
    - F on 'a' -> E, G on 'a' -> E, H on 'a' -> E
    - F on 'b' -> H, G on 'b' -> F, H on 'b' -> H
    All transitions from F, G, H go to equivalent target states.
    Therefore, F, G, and H are equivalent and merge into a single state (FGH).

Final Partition Groups (Minimized States):
S0 = A (Start)
S1 = B
S2 = C
S3 = D (Accept)
S4 = FGH (Merged Accept)
S5 = E (Dead Trap)`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Minimized DFA Table & Traces</h3>
        <p className="p-text mt-2">
          Here is the final minimized DFA configuration:
        </p>

        <table className="w-full border-collapse border border-[#c7a669] text-left text-sm my-4">
          <thead>
            <tr className="bg-[#7a523c] text-[#fff7ed]">
              <th className="border border-[#c7a669] p-3 font-semibold">Minimized State</th>
              <th className="border border-[#c7a669] p-3 font-semibold">On &apos;a&apos;</th>
              <th className="border border-[#c7a669] p-3 font-semibold">On &apos;b&apos;</th>
              <th className="border border-[#c7a669] p-3 font-semibold">Accepting?</th>
            </tr>
          </thead>
          <tbody className="bg-[#f3e7c2]/20 dark:bg-black/20 text-[#3A2A14] dark:text-[#f3e7c2]">
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S0 (Start)</td>
              <td className="border border-[#c7a669] p-3">S1</td>
              <td className="border border-[#c7a669] p-3">S2</td>
              <td className="border border-[#c7a669] p-3">No</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S1</td>
              <td className="border border-[#c7a669] p-3">S3</td>
              <td className="border border-[#c7a669] p-3">S2</td>
              <td className="border border-[#c7a669] p-3">No</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S2</td>
              <td className="border border-[#c7a669] p-3">S5</td>
              <td className="border border-[#c7a669] p-3">S4</td>
              <td className="border border-[#c7a669] p-3">No</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S3</td>
              <td className="border border-[#c7a669] p-3">S3</td>
              <td className="border border-[#c7a669] p-3">S4</td>
              <td className="border border-[#c7a669] p-3 font-bold text-green-700 dark:text-green-400">YES</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S4</td>
              <td className="border border-[#c7a669] p-3">S5</td>
              <td className="border border-[#c7a669] p-3">S4</td>
              <td className="border border-[#c7a669] p-3 font-bold text-green-700 dark:text-green-400">YES</td>
            </tr>
            <tr>
              <td className="border border-[#c7a669] p-3 font-bold">S5 (Trap)</td>
              <td className="border border-[#c7a669] p-3">S5</td>
              <td className="border border-[#c7a669] p-3">S5</td>
              <td className="border border-[#c7a669] p-3">No</td>
            </tr>
          </tbody>
        </table>

        <ExpandingBox title="Verification: String Traces" defaultOpen={false}>
          <div className="space-y-2 text-sm md:text-base">
            <p><strong>Trace 1: &quot;aa&quot;</strong></p>
            <p>S0 --a--&gt; S1 --a--&gt; S3 (Accept) ==&gt; <strong>Accepted</strong></p>
            <p className="border-t border-[#c7a669]/10 pt-2"><strong>Trace 2: &quot;bb&quot;</strong></p>
            <p>S0 --b--&gt; S2 --b--&gt; S4 (Accept) ==&gt; <strong>Accepted</strong></p>
            <p className="border-t border-[#c7a669]/10 pt-2"><strong>Trace 3: &quot;aba&quot;</strong></p>
            <p>S0 --a--&gt; S1 --b--&gt; S2 --a--&gt; S5 (Trap) ==&gt; <strong>Rejected</strong></p>
          </div>
        </ExpandingBox>
      </section>
    </div>
  );
};
