export const Ch8Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Backtracking and Branch & Bound are state-space search paradigms used to solve difficult 
        combinatorial problems where a brute-force calculation is completely impossible. Both methods 
        systematically explore a tree-like solution space, but they employ radically different strategies 
        for navigating, pruning, and optimizing the paths they traverse.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Understanding Backtracking (Depth-First Strategy)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Builds candidate solutions incrementally and abandons a path ("backtracks") as soon as it determines the path cannot lead to a valid solution.
          </li>

          <li>
            <strong>Traversal Order:</strong> Relies on a <em>Depth-First Search (DFS)</em> approach to explore a single potential outcome path to its absolute limit.
          </li>

          <li>
            <strong>Pruning:</strong> Uses bounding conditions or explicit constraint checks to drop an invalid path immediately, avoiding checking millions of sub-choices.
          </li>

          <li>
            Ideal for decision problems, constraint satisfaction problems, or finding all possible valid configurations (e.g., puzzles, mazes).
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Backtracking Algorithm Template</p>

          <pre>{`function solve(node):
    if is_complete_solution(node):
        return true / print_solution
        
    for each choice in get_available_choices(node):
        if is_valid(choice):
            make_choice(choice)      // Step forward
            if solve(next_node): 
                return true
            undo_choice(choice)      // Backtrack (Step backward)
            
    return false`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Classic Backtracking Example: The N-Queens Problem
          </span>
        </h3>

        <ul className="section-list">
          <li>
            The goal is to place $N$ chess queens on an $N \times N$ chessboard such that no two queens attack each other.
          </li>

          <li>
            A naive brute-force search would examine billions of placement combinations for even moderate board configurations.
          </li>

          <li>
            Backtracking places queens row by row. If a queen cannot be safely set in the current row, the algorithm stops, backs up to the prior row, shifts that queen, and tries again.
          </li>

          <li>
            <strong>Constraint Checks:</strong> Validates row, column, and both diagonal lines before committing to a tile placement.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">4-Queens State Space Exploration</p>

          <pre>{`Row 1: Place Queen at (1,1)
Row 2: Check (2,1) X, Check (2,2) X, Place Queen at (2,3)
Row 3: Check (3,1) X, (3,2) X, (3,3) X, (3,4) X → Dead End!

[Backtrack to Row 2] → Move Queen to (2,4)
Row 3: Can now safely place Queen at (3,2)
Row 4: Check choices... Continue process until entire matrix resolves.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Understanding Branch & Bound (Breadth/Best-First Strategy)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Designed strictly for discrete <strong>optimization problems</strong> where you need to maximize profit or minimize an overall execution cost.
          </li>

          <li>
            <strong>Traversal Order:</strong> Typically avoids DFS, opting for <em>Breadth-First Search (BFS)</em> or a <em>Best-First Search</em> using a priority queue.
          </li>

          <li>
            <strong>Bounding Functions:</strong> Calculates a mathematical "bound" value at every single node to evaluate the best possible outcome that branch could produce.
          </li>

          <li>
            If a node's best-case bound is worse than a validated solution we already found, the entire branch is discarded instantly without exploration.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Branch & Bound Pruning Logic</p>

          <pre>{`Goal: Minimize Travel Distance
Current Best Complete Tour found = 450 miles

Evaluating Node X (Partial Path):
Calculated Lower Bound for Node X = 485 miles
(Even in a perfect scenario, this path cannot beat 450 miles)

Decision: Kill Node X and all of its sub-branches immediately.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Classic Branch & Bound Application: Traveling Salesperson (TSP)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            The objective is to find the absolute shortest possible route that visits every city exactly once and returns to the origin point.
          </li>

          <li>
            As nodes expand, a cost-reduction matrix calculates a guaranteed minimum lower bound for completing the remainder of the trip.
          </li>

          <li>
            Using a <strong>Least-Cost (LC) Branch & Bound</strong> approach, the algorithm always opens up the node possessing the lowest cost bound first.
          </li>

          <li>
            This allows it to ignore hundreds of thousands of high-cost paths, finishing dramatically faster than standard recursion.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Comparison: Backtracking vs. Branch & Bound</p>

          <pre>{`Feature          | Backtracking             | Branch & Bound
-------------------------------------------------------------------
Search Tree      | Depth-First Search (DFS) | BFS or Best-First (PQ)
Target Problems  | Decision / Constraint    | Pure Optimization
Memory Demand    | Low (Call Stack only)    | High (Tracks Active Nodes)
Goal             | Find any/all solutions   | Find single optimal solution`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Algorithmic Selection Rule
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Use <strong>Backtracking</strong> if you need to generate all permutations, solve matching puzzles, or navigate physical maze paths where tracking the current stack is fast.
          </li>

          <li>
            Use <strong>Branch & Bound</strong> when managing business optimization problems with deep cost matrices like item scheduling, routing logistics, or the 0/1 Knapsack problem.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            <strong>Quick Blueprint:</strong> Backtracking explores blindly down a line until it hits an invalid wall. Branch & Bound looks across options and mathematically proves which branches are worth walking down.
          </p>
        </div>
      </section>
    </div>
  );
};