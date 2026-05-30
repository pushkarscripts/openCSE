import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch23Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Directed Acyclic Graphs (DAGs)</h2>
      <p className="p-text">
        A <strong>Directed Acyclic Graph (DAG)</strong> is a data structure used to represent basic blocks, optimize code, and detect common subexpressions. It is a more condensed version of an Abstract Syntax Tree (AST).
      </p>

      <ExpandingBox title="DAG Construction Algorithm">
        <p className="p-text mb-2">
          To build a DAG for a block of code, follow these steps:
        </p>
        <ul className="list-decimal list-inside p-text space-y-2.5 ml-2">
          <li><strong>Initialize Leaves:</strong> Create a leaf node for each unique variable or constant that appears as an initial value (operand).</li>
          <li><strong>Process Statements:</strong> For each statement of the form <code>x = y op z</code>:
            <ul className="list-disc list-inside ml-6 mt-1 text-sm text-[#ebdcb0]">
              <li>Search to see if a node labelled <code>op</code> with children <code>y</code> and <code>z</code> already exists.</li>
              <li><strong>If YES:</strong> Attach <code>x</code> as an alias (or identifier) to that existing node.</li>
              <li><strong>If NO:</strong> Create a new interior node for <code>op</code> with children <code>y</code> and <code>z</code>, and attach <code>x</code> as its label.</li>
            </ul>
          </li>
          <li><strong>Cleanup:</strong> At the end of the block, interior nodes without live variable labels (those not used later) can be safely deleted.</li>
        </ul>
        <p className="p-text mt-4 mb-2"><strong>Example Trace:</strong></p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`Code: 
1. a = b + c
2. b = a - d
3. c = b + c
4. d = a - d

DAG Behavior:
- 'a - d' is computed in step 2 and stored in b.
- In step 4, 'a - d' is required again.
- Instead of creating a new node, 'd' points to the existing node for 'a - d' (which is b).`}
        </pre>
      </ExpandingBox>

      <h2 className="section-heading">Uses of DAG in Code Optimization</h2>
      <p className="p-text">
        DAGs are instrumental in performing local optimizations within a basic block.
      </p>
      
      <div className="space-y-4 my-4">
        <ExpandingBox title="1. Common Subexpression Elimination (CSE)">
          <p className="p-text">
            Because a DAG shares nodes for identical expressions, it automatically identifies and eliminates redundant calculations.
          </p>
          <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mt-2">
{`Before:
a = b + c
d = b + c

After (via DAG):
'b + c' is one shared node. Computed only once!`}
          </pre>
        </ExpandingBox>

        <ExpandingBox title="2. Dead Code Elimination">
          <p className="p-text">
            Nodes in the DAG that are not reachable from any live output variable (variables used outside the block) are considered dead and are stripped out during generation.
          </p>
        </ExpandingBox>

        <ExpandingBox title="3. Evaluation Order Determination">
          <p className="p-text">
            Performing a topological sort on the DAG provides a valid and often optimal order for evaluating operations, which minimizes register pressure.
          </p>
        </ExpandingBox>

        <ExpandingBox title="4. Register Allocation Aid">
          <p className="p-text">
            By analyzing the DAG structure, the compiler can make better decisions about which computed values should be kept in fast CPU registers versus being spilled to memory.
          </p>
        </ExpandingBox>
      </div>
    </div>
  );
};
