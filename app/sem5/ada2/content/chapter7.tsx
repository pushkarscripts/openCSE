export const Ch7Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Graph algorithms are fundamental tools used to solve complex network problems. They power modern
        systems behind routing engines like Google Maps, social media connection graphs, recommendation
        systems, and network communication structures by evaluating objects and the relationships between them.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Understanding Graph Anatomy</span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Vertices (Nodes):</strong> Discrete objects or entities within the system (e.g., cities, users, or web pages).
          </li>

          <li>
            <strong>Edges (Connections):</strong> Linkages between nodes. They can be <em>Directed</em> (one-way relationship) or <em>Undirected</em> (mutual connection).
          </li>

          <li>
            <strong>Weighted vs. Unweighted:</strong> Edges can carry data attributes like distance, traffic capacity, or cost (Weighted), or simply denote a baseline link (Unweighted).
          </li>

          <li>
            <strong>Representation:</strong> Handled in code via an <em>Adjacency Matrix</em> (a 2D grid ideal for dense graphs) or an <em>Adjacency List</em> (an array of lists ideal for memory savings in sparse graphs).
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">Graph Visual Representations</p>

          <pre>{`Visual Structure:
  (A)---[5]---(B)       Vertices = {A, B, C, D}
   |           |        Edges    = {(A,B,5), (A,C,2), (B,D,1), (C,D,8)}
  [2]         [1]
   |           |        Adjacency List Structure:
  (C)---[8]---(D)       A → [B: 5, C: 2] | B → [A: 5, D: 1]`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Breadth-First Search (BFS)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Explores a graph level-by-level, visiting all immediate neighbors of a node before moving deeper down.
          </li>

          <li>
            <strong>Data Structure:</strong> Implemented using a First-In-First-Out (FIFO) <strong>Queue</strong>.
          </li>

          <li>
            Guarantees finding the absolute shortest path on unweighted or uniform-edge networks.
          </li>

          <li>
            <strong>Time Complexity:</strong> O(V + E) where V is vertices and E is edges.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">BFS Traversal Process</p>

          <pre>{`Queue State Tracing (Starting at Node A):
1. Initialize: Push root node A to Queue → [A], Visit tracker: {A}
2. Dequeue A: Look at A's neighbors (B, C). Push unvisited neighbors to Queue → [B, C]
3. Dequeue B: Look at neighbors. Push unvisited to Queue → [C, D]
4. Dequeue C: Neighbors already added. Queue remains → [D]

Final Discovery Order: A → B → C → D (Radial Expansion)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Depth-First Search (DFS)
          </span>
        </h3>

        <ul className="section-list">
          <li>
            Dives along a single path as deeply as possible before backtracking to check remaining side branches.
          </li>

          <li>
            <strong>Data Structure:</strong> Implemented using a Last-In-First-Out (LIFO) <strong>Stack</strong> or implicit functional recursion.
          </li>

          <li>
            Commonly applied in topological sorting, cycle detection, and resolving dependencies (e.g., build tool compilations).
          </li>

          <li>
            <strong>Space Complexity:</strong> O(V) in worst-case, reflecting maximum recursive call stack depths.
          </li>
        </ul>

        <div className="example-block">
          <p className="font-semibold mb-1">DFS Traversal Process</p>

          <pre>{`Recursive Execution Path (Starting at Node A):
1. Visit Node A → Mark visited.
2. Step forward to first unvisited child (Node B).
3. Step forward from B to its unvisited child (Node D).
4. Hit Dead-End at D → Backtrack up to B → Backtrack up to A.
5. Move to next unvisited branch from A → Visit Node C.

Final Discovery Order: A → B → D → C (Linear Drilling)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Shortest Path & Network Optimization
          </span>
        </h3>

        <ul className="section-list">
          <li>
            <strong>Dijkstra's Algorithm:</strong> Solves single-source shortest paths on weighted graphs using a greedy minimum priority queue. Cannot handle negative weights.
          </li>

          <li>
            <strong>Bellman-Ford Algorithm:</strong> Slower alternative to Dijkstra, but safely accommodates negative edge weights and flags dangerous infinite negative cycles.
          </li>

          <li>
            <strong>Minimum Spanning Trees (MST):</strong> Spans every vertex in a graph with the absolute lowest combined cumulative edge cost using Prim's or Kruskal's methodologies.
          </li>

          <li>
            Crucial for physical network routing, utility pipe installations, and minimizing electrical circuit trace connections.
          </li>
        </ul>

        <div className="tip-block">
          <p>
            <strong>Core Traversal Rule:</strong> Use <strong>BFS</strong> if you want the shortest path on unweighted maps (like minimum steps in a puzzle). Use <strong>DFS</strong> if you need to systematically explore every single state node layout or map dead-ends.
          </p>
        </div>
      </section>
    </div>
  );
};