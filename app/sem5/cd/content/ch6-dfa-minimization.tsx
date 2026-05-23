import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const DfaMinimizationContent = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Converting an NFA to a DFA can yield a machine with redundant states. **DFA Minimization** reduces the number of states to the absolute mathematical minimum while preserving the same language acceptance.
      </p>

      <section>
        <h3 className="section-heading">Myhill-Nerode Partitioning Algorithm</h3>
        <p className="p-text mt-2">
          The algorithm works by splitting the set of all DFA states into partitions of equivalent states. Equivalent states are those that behave identically under all possible inputs.
        </p>

        <ExpandingBox title="Minimization Algorithm Steps" defaultOpen={true}>
          <pre className="code-block">{`1. Partition all states into two groups:
     - Group 1: All ACCEPT states (F)
     - Group 2: All NON-ACCEPT states (S - F)
   Let the initial partition be P = {F, S - F}.

2. Loop:
     For each group G in partition P:
       Split G into subgroups such that two states s and t in G 
       remain in the same subgroup if and only if:
         For all input symbols 'a':
           s and t transition to states in the same partition group.
           (i.e., trans(s, 'a') and trans(t, 'a') belong to the same group in P)

     If P changes (new split occurs):
       Update P and repeat the loop.
     Else:
       Stop. The current partition groups represent the minimized states.

3. Merge all equivalent states in each group into a single state.`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Distinguishable vs Equivalent States</h3>
        <p className="p-text mt-2">
          Two states <code>s</code> and <code>t</code> are distinguishable if there is some string <code>w</code> such that transitioning on <code>w</code> from <code>s</code> leads to an accept state, while transitioning on <code>w</code> from <code>t</code> leads to a non-accept state (or vice-versa).
        </p>
      </section>
    </div>
  );
};
