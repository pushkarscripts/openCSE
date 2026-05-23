import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const NfaToDfaSubsetContent = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Since computers cannot simulate non-deterministic path choices efficiently, every NFA must be converted into an equivalent DFA. The **Subset Construction Algorithm** does this by grouping NFA states into subsets that the machine could be in simultaneously.
      </p>

      <section>
        <h3 className="section-heading">Epsilon-Closure (ε-closure)</h3>
        <p className="p-text mt-2">
          The ε-closure of a state is the set of all NFA states reachable from that state by traversing ONLY epsilon (ε) transitions (including the state itself).
        </p>

        <ExpandingBox title="ε-closure Algorithm" defaultOpen={true}>
          <p>To find the ε-closure of a set of NFA states <code>T</code>:</p>
          <pre className="code-block">{`Push all states in T onto stack;
Initialize ε-closure(T) = T;

while (stack is not empty) {
    Pop u from stack;
    for (each state v with an ε-transition from u) {
        if (v is not in ε-closure(T)) {
            Add v to ε-closure(T);
            Push v onto stack;
        }
    }
}`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Subset Construction Algorithm</h3>
        <p className="p-text mt-2">
          Let <code>N</code> be an NFA. The subset construction constructs a DFA <code>D</code> with states <code>Dstates</code> and transition table <code>Dtran</code>:
        </p>

        <ExpandingBox title="Subset Construction Steps" defaultOpen={false}>
          <pre className="code-block">{`1. DstartState = ε-closure(N.startState)
2. Add DstartState as unmarked to Dstates
3. while (there is an unmarked state U in Dstates) {
       Mark U;
       for (each input symbol 'a') {
           T = states reached from elements in U on input 'a'
           U_new = ε-closure(T)
           if (U_new is not empty) {
               if (U_new is not in Dstates) {
                   Add U_new as unmarked to Dstates
               }
               Dtran[U, 'a'] = U_new
           }
       }
   }
4. A state in Dstates is an ACCEPT state of the DFA 
   if it contains at least one accept state of the NFA.`}</pre>
        </ExpandingBox>
      </section>
    </div>
  );
};
