export const Ch5Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        The Greedy Method is a powerful algorithmic paradigm used to solve optimization problems.
        It builds up a solution piece by piece, always choosing the next option that offers the
        most obvious and immediate benefit (the "locally optimal" choice), with the hope that
        these steps lead to the best overall solution (the "globally optimal" choice).
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Introduction to Greedy Method
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Makes the best choice available at the current moment without looking ahead.
          </li>

          <li>
            It is a "shortsighted" approach because it never reconsiders past decisions.
          </li>

          <li>
            Highly efficient and fast, making it ideal for large-scale data processing.
          </li>

          <li>
            Works perfectly for problems that exhibit the Greedy Choice Property and Optimal Substructure.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Basic Core Strategy</p>

          <pre>{`1. Feasible: Check if the choice satisfies the constraints
2. Locally Optimal: Pick the best candidate from the remaining pool
3. Unalterable: Once added to the solution, a choice cannot be changed`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Advantages and Disadvantages
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Advantage:</strong> Very simple to design, implement, and debug.
          </li>

          <li>
            <strong>Advantage:</strong> Executes significantly faster than Dynamic Programming or Brute Force.
          </li>

          <li>
            <strong>Disadvantage:</strong> It can get stuck in local optima and fail to find the global maximum or minimum.
          </li>

          <li>
            <strong>Disadvantage:</strong> Proving that a greedy approach actually works mathematically can be incredibly difficult.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Always remember: Greedy choices do not always guarantee the mathematically correct absolute answer, but they frequently give a very close approximation in record time.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Fractional Knapsack Problem
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Unlike the 0/1 Knapsack problem, items can be broken down into smaller fractions.
          </li>

          <li>
            We sort items by their value-to-weight ratio: Value / Weight.
          </li>

          <li>
            We take as much of the highest-density item as possible before moving to the next.
          </li>

          <li>
            Time Complexity = O(n log n) due to the initial sorting step.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Fractional Knapsack Process</p>

          <pre>{`Capacity = 50kg
Item A: Value $60, Weight 10kg (Ratio = 6)
Item B: Value $100, Weight 20kg (Ratio = 5)
Item C: Value $120, Weight 30kg (Ratio = 4)

1. Take all of A (10kg, $60) → 40kg left
2. Take all of B (20kg, $100) → 20kg left
3. Take fraction of C (20kg out of 30kg, $80)

Total Value = $60 + $100 + $80 = $240`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Minimum Spanning Trees (MST)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Connects all vertices in a weighted graph together with the minimum total edge weight.
          </li>

          <li>
            <strong>Kruskal's Algorithm:</strong> Sorts all edges by weight and greedily adds the smallest edge that doesn't create a loop.
          </li>

          <li>
            <strong>Prim's Algorithm:</strong> Starts at a single node and greedily expands to the cheapest connected neighbor vertex.
          </li>

          <li>
            Both algorithms rely purely on greedy choices at each iteration.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Kruskal vs Prim Execution</p>

          <pre>{`Kruskal's Approach:
1. Sort all edges: [A-B: 1, C-D: 2, B-C: 4, A-D: 7]
2. Pick A-B (1) → Pick C-D (2) → Pick B-C (4)
3. Skip A-D (7) because it closes a cycle!

Prim's Approach:
1. Start at Node A → Look at neighbors
2. Pick cheapest connection to reach a fresh node
3. Repeat until every vertex is locked in`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Huffman Coding & Shortest Paths
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Huffman Coding:</strong> Used for lossless data compression. It greedily combines the two least frequent characters to build a tree.
          </li>

          <li>
            Characters used most often get shorter binary codes, saving storage space.
          </li>

          <li>
            <strong>Dijkstra's Algorithm:</strong> Finds the shortest path from a single source node to all other nodes in a graph.
          </li>

          <li>
            Greedily extracts the closest unvisited vertex from a priority queue to update paths.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Greedy Applications Summary</p>

          <pre>{`Huffman: Frequent letters → shorter paths (fewer bits)
Dijkstra: Always process the current closest node first
Job Scheduling: Always pick the task with the earliest deadline`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Greedy Method vs Divide and Conquer
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Divide and Conquer splits a problem down and combines solved parts later.
          </li>

          <li>
            Greedy builds a solution linearly by executing optimal paths straight through.
          </li>

          <li>
            Divide and Conquer utilizes explicit recursion to process sub-tasks.
          </li>

          <li>
            Greedy algorithms usually run inside a straightforward, single iterative loop.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            Quick Formula: Greedy Method = Evaluate Options → Pick Best Now → Move Forward Permanently.
          </p>
        </div>
      </section>
    </div>
  );
};