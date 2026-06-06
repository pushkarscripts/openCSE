export const Ch6Content = () => {
    return (
        <div className="course-content">

            <p className="p-text">
                <span className="font-semibold">
                    Module VI: Graphs.
                </span>
                Graphs are one of the most powerful non-linear data structures used in
                Computer Science. While trees represent hierarchical relationships,
                graphs represent complex relationships where any entity can be connected
                to multiple other entities. Graphs are extensively used in computer
                networks, social media platforms, maps, search engines, recommendation
                systems, transportation systems, and routing algorithms.
            </p>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Introduction */}

            <section>

                <h3 className="section-heading">
                    Introduction to Graph
                </h3>

                <p className="p-text">
                    A Graph is a non-linear data structure consisting of a collection of
                    vertices (also called nodes) and edges that connect pairs of vertices.
                    Unlike trees, graphs do not necessarily follow a hierarchical
                    structure and may contain cycles.
                </p>

                <p className="p-text">
                    Graphs are used whenever relationships between objects need to be
                    represented. Examples include social networks, airline routes,
                    computer networks, road maps, and web page connections.
                </p>

                <ul className="section-list">
                    <li>Non-linear data structure</li>
                    <li>Consists of vertices and edges</li>
                    <li>Represents relationships between objects</li>
                    <li>May contain cycles</li>
                    <li>Supports traversal and path-finding operations</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Characteristics */}

            <section>

                <h3 className="section-heading">
                    Characteristics of Graph
                </h3>

                <ul className="section-list">
                    <li>Collection of vertices and edges</li>
                    <li>Can be directed or undirected</li>
                    <li>May contain cycles</li>
                    <li>Can represent real-world networks</li>
                    <li>Supports multiple traversal techniques</li>
                    <li>Can be weighted or unweighted</li>
                    <li>Efficient for modeling relationships</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Components */}

            <section>

                <h3 className="section-heading">
                    Components of Graph
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    Vertex (Node)
                </h4>

                <p className="p-text">
                    A Vertex is an individual entity present in a graph. It represents an
                    object or location in the graph structure.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Edge
                </h4>

                <p className="p-text">
                    An Edge is a connection between two vertices. Edges represent the
                    relationship between vertices.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Path
                </h4>

                <p className="p-text">
                    A Path is a sequence of vertices connected through edges.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Cycle
                </h4>

                <p className="p-text">
                    A Cycle is a closed path in which the starting and ending vertex are
                    the same, while no vertex is repeated except the starting vertex.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Degree
                </h4>

                <p className="p-text">
                    The Degree of a vertex is the number of edges incident on that
                    vertex. In directed graphs, degree is further classified into
                    Indegree and Outdegree.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Adjacent Vertices
                </h4>

                <p className="p-text">
                    Two vertices connected directly by an edge are called Adjacent
                    Vertices.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Graph Representation */}

            <section>

                <h3 className="section-heading">
                    Graph Representation
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`      A ----- B
      |       |
      |       |
      D ----- C`}
                    </pre>

                </div>

                <p className="p-text">
                    The graph contains four vertices: A, B, C, and D. Each edge
                    represents a connection between two vertices.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Terminology */}

            <section>

                <h3 className="section-heading">
                    Important Graph Terminology
                </h3>

                <ul className="section-list">
                    <li>Vertex → Individual node in a graph</li>
                    <li>Edge → Connection between two vertices</li>
                    <li>Path → Sequence of connected vertices</li>
                    <li>Cycle → Closed path that begins and ends at the same vertex</li>
                    <li>Degree → Number of edges incident on a vertex</li>
                    <li>Adjacent Vertices → Vertices connected by an edge</li>
                    <li>Indegree → Number of incoming edges to a vertex</li>
                    <li>Outdegree → Number of outgoing edges from a vertex</li>
                    <li>Self Loop → Edge connecting a vertex to itself</li>
                    <li>Parallel Edges → Multiple edges connecting the same pair of vertices</li>
                    <li>Connected Component → A connected subgraph within a graph</li>
                    <li>Connected Graph → Graph where every vertex is reachable</li>
                    <li>Disconnected Graph → Graph containing isolated components</li>
                    <li>Weighted Graph → Graph whose edges contain weights</li>
                    <li>Unweighted Graph → Graph whose edges do not contain weights</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Need for Graphs */}

            <section>

                <h3 className="section-heading">
                    Need for Graphs
                </h3>

                <p className="p-text">
                    Graphs are used whenever relationships between entities need to be
                    represented efficiently. Many real-world problems involve objects that
                    are interconnected rather than organized hierarchically. Graphs provide
                    a flexible structure for modeling such systems.
                </p>

                <ul className="section-list">
                    <li>Computer networks</li>
                    <li>Road and transportation systems</li>
                    <li>Social networking platforms</li>
                    <li>Web page linking structures</li>
                    <li>Recommendation systems</li>
                    <li>Routing and navigation algorithms</li>
                    <li>Dependency management systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Types of Graphs */}

            <section>

                <h3 className="section-heading">
                    Types of Graphs
                </h3>

                <p className="p-text">
                    Graphs can be classified based on edge direction, edge weights,
                    connectivity, and structural properties.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    1. Undirected Graph
                </h4>

                <p className="p-text">
                    In an Undirected Graph, edges do not have a direction. If vertex A is
                    connected to vertex B, then B is also connected to A.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B
|       |
|       |
D ----- C`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Friendship networks</li>
                    <li>Road maps with two-way roads</li>
                    <li>Peer-to-peer systems</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    2. Directed Graph (Digraph)
                </h4>

                <p className="p-text">
                    In a Directed Graph, every edge has a direction. An edge from A to B
                    does not imply the existence of an edge from B to A.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A -----> B
^         |
|         v
D <----- C`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Web page links</li>
                    <li>Task scheduling</li>
                    <li>Social media followers</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    3. Weighted Graph
                </h4>

                <p className="p-text">
                    A Weighted Graph stores numerical values called weights on edges.
                    These weights often represent cost, distance, time, or capacity.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A --5-- B
|       |
2       3
|       |
C-------D`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>GPS navigation</li>
                    <li>Network routing</li>
                    <li>Transportation planning</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    4. Unweighted Graph
                </h4>

                <p className="p-text">
                    An Unweighted Graph does not assign weights to edges. Every edge is
                    considered equal.
                </p>

                <ul className="section-list">
                    <li>Basic connectivity problems</li>
                    <li>Social network analysis</li>
                    <li>Communication systems</li>
                </ul>

                <h4 className="font-semibold text-lg mt-8">
                    5. Cyclic Graph
                </h4>

                <p className="p-text">
                    A Cyclic Graph contains at least one cycle where traversal can return
                    to the starting vertex.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B
|       |
|       |
D ----- C`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-8">
                    6. Acyclic Graph
                </h4>

                <p className="p-text">
                    An Acyclic Graph does not contain any cycle.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A
|
B
|
C
|
D`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-8">
                    7. Connected Graph
                </h4>

                <p className="p-text">
                    A Connected Graph is a graph in which every vertex can be
                    reached from every other vertex through one or more paths.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B
|       |
|       |
D ----- C`}
                    </pre>

                </div>

                <p className="p-text">
                    All vertices belong to a single connected component.
                </p>

                <h4 className="font-semibold text-lg mt-8">
                    8. Disconnected Graph
                </h4>

                <p className="p-text">
                    A Disconnected Graph contains two or more components that
                    are not connected to each other.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B

C ----- D`}
                    </pre>

                </div>

                <p className="p-text">
                    No path exists between vertices belonging to different
                    components.
                </p>

                <h4 className="font-semibold text-lg mt-8">
                    9. Complete Graph
                </h4>

                <p className="p-text">
                    A Complete Graph is a graph in which every vertex is
                    directly connected to every other vertex.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`      A
     /|\\
    / | \\
   B--|--C
    \\ | /
     \\|/
      D`}
                    </pre>

                </div>

                <p className="p-text">
                    For a complete graph containing n vertices, the number of
                    edges is:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Edges = n(n - 1) / 2`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-8">
                    10. Bipartite Graph
                </h4>

                <p className="p-text">
                    A Bipartite Graph is a graph whose vertices can be divided
                    into two disjoint sets such that no two vertices within the
                    same set are adjacent.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Set 1      Set 2

A -------- X
A -------- Y

B -------- X
B -------- Y`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Job assignment problems</li>
                    <li>Matching algorithms</li>
                    <li>Recommendation systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Graph Storage Representations */}

            <section>

                <h3 className="section-heading">
                    Graph Storage Representations
                </h3>

                <p className="p-text">
                    In computer memory, graphs can be represented using different
                    techniques. The choice of representation affects memory usage,
                    implementation complexity, and algorithm performance.
                </p>

                <p className="p-text">
                    The two most commonly used graph representations are:
                </p>

                <ul className="section-list">
                    <li>Adjacency Matrix</li>
                    <li>Adjacency List</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Adjacency Matrix */}

            <section>

                <h3 className="section-heading">
                    Adjacency Matrix Representation
                </h3>

                <p className="p-text">
                    An Adjacency Matrix is a two-dimensional square matrix used to
                    represent a graph. The rows and columns represent vertices.
                    If an edge exists between two vertices, the corresponding cell
                    contains 1; otherwise, it contains 0.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Example Graph
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B
|       |
|       |
C ----- D`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Corresponding Adjacency Matrix
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`      A  B  C  D

A     0  1  1  0
B     1  0  0  1
C     1  0  0  1
D     0  1  1  0`}
                    </pre>

                </div>

                <p className="p-text">
                    Since the graph is undirected, the matrix is symmetric about the
                    main diagonal.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Memory Requirement
                </h4>

                <p className="p-text">
                    For a graph containing V vertices, an adjacency matrix requires
                    V × V memory locations.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Space Complexity = O(V²)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages of Adjacency Matrix */}

            <section>

                <h3 className="section-heading">
                    Advantages of Adjacency Matrix
                </h3>

                <ul className="section-list">
                    <li>Simple and easy to implement</li>
                    <li>Efficient edge lookup</li>
                    <li>Suitable for dense graphs</li>
                    <li>Matrix operations can be applied directly</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Edge Lookup Complexity
                </h4>

                <p className="p-text">
                    Determining whether an edge exists between two vertices takes
                    constant time.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Time Complexity = O(1)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Disadvantages of Adjacency Matrix */}

            <section>

                <h3 className="section-heading">
                    Disadvantages of Adjacency Matrix
                </h3>

                <ul className="section-list">
                    <li>Consumes large amounts of memory for sparse graphs</li>
                    <li>Adding new vertices requires matrix resizing</li>
                    <li>Many matrix entries remain unused when few edges exist</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Adjacency List Representation */}

            <section>

                <h3 className="section-heading">
                    Adjacency List Representation
                </h3>

                <p className="p-text">
                    An Adjacency List represents a graph as an array or collection of
                    lists. Each vertex stores a list containing all vertices directly
                    connected to it.
                </p>

                <p className="p-text">
                    Instead of storing every possible connection as in an adjacency
                    matrix, only existing edges are stored. This makes adjacency lists
                    highly memory-efficient for sparse graphs.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Example Graph
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A ----- B
|       |
|       |
C ----- D`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Corresponding Adjacency List
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`A -> B -> C
B -> A -> D
C -> A -> D
D -> B -> C`}
                    </pre>

                </div>

                <p className="p-text">
                    Each vertex stores only its adjacent vertices. Since only existing
                    edges are stored, adjacency lists are preferred for graphs with a
                    small number of edges.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Memory Requirement
                </h4>

                <p className="p-text">
                    The memory required depends on both the number of vertices and the
                    number of edges present in the graph.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Space Complexity = O(V + E)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages of Adjacency List */}

            <section>

                <h3 className="section-heading">
                    Advantages of Adjacency List
                </h3>

                <ul className="section-list">
                    <li>Efficient memory utilization</li>
                    <li>Ideal for sparse graphs</li>
                    <li>Easy to traverse neighboring vertices</li>
                    <li>Adding vertices is comparatively easier</li>
                    <li>Widely used in graph algorithms</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Disadvantages of Adjacency List */}

            <section>

                <h3 className="section-heading">
                    Disadvantages of Adjacency List
                </h3>

                <ul className="section-list">
                    <li>Edge lookup is slower than adjacency matrix</li>
                    <li>Implementation is slightly more complex</li>
                    <li>Less suitable for dense graphs</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Edge Lookup Complexity
                </h4>

                <p className="p-text">
                    To determine whether an edge exists, the adjacency list of a
                    vertex may need to be searched. The time required depends on
                    the number of adjacent vertices. In the worst case, this can
                    take O(V) time.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Worst Case Time Complexity = O(V)`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Comparison Between Representations */}

            <section>

                <h3 className="section-heading">
                    Comparison Between Adjacency Matrix and Adjacency List
                </h3>

                <div className="overflow-x-auto">

                    <table className="min-w-full border border-[#c7a669]">

                        <thead>

                            <tr className="bg-[#f3e7c2]">

                                <th className="border border-[#c7a669] p-3">
                                    Feature
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    Adjacency Matrix
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    Adjacency List
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Space Complexity</td>
                                <td className="border border-[#c7a669] p-3">O(V²)</td>
                                <td className="border border-[#c7a669] p-3">O(V + E)</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Edge Lookup</td>
                                <td className="border border-[#c7a669] p-3">O(1)</td>
                                <td className="border border-[#c7a669] p-3">O(V) (Worst Case)</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Memory Usage</td>
                                <td className="border border-[#c7a669] p-3">High</td>
                                <td className="border border-[#c7a669] p-3">Low</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Best For</td>
                                <td className="border border-[#c7a669] p-3">Dense Graphs</td>
                                <td className="border border-[#c7a669] p-3">Sparse Graphs</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Implementation</td>
                                <td className="border border-[#c7a669] p-3">Simple</td>
                                <td className="border border-[#c7a669] p-3">Moderate</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Graph Traversal Techniques */}

            <section>

                <h3 className="section-heading">
                    Graph Traversal Techniques
                </h3>

                <p className="p-text">
                    Graph traversal is the process of visiting all vertices of a graph
                    in a systematic manner. Traversal techniques are fundamental to
                    graph algorithms and are used in searching, path finding, network
                    analysis, dependency resolution, and many other applications.
                </p>

                <p className="p-text">
                    The two most common graph traversal techniques are:
                </p>

                <ul className="section-list">
                    <li>Breadth First Search (BFS)</li>
                    <li>Depth First Search (DFS)</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Breadth First Search */}

            <section>

                <h3 className="section-heading">
                    Breadth First Search (BFS)
                </h3>

                <p className="p-text">
                    Breadth First Search (BFS) is a graph traversal algorithm that
                    explores all neighboring vertices before moving to the next level.
                    BFS visits vertices level by level and uses a Queue data structure
                    to keep track of vertices that need to be explored.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Example Graph
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`        A
      /   \\
     B     C
    / \\   /
   D   E F`}
                    </pre>

                </div>

                <p className="p-text">
                    If BFS traversal starts from vertex A, the vertices are visited
                    level by level.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`BFS Traversal:

A → B → C → D → E → F`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Working of BFS
                </h4>

                <ol className="section-list list-decimal">
                    <li>Start from the source vertex.</li>
                    <li>Mark the source as visited.</li>
                    <li>Insert the source into a queue.</li>
                    <li>Remove a vertex from the queue.</li>
                    <li>Visit all unvisited adjacent vertices.</li>
                    <li>Insert newly visited vertices into the queue.</li>
                    <li>Repeat until the queue becomes empty.</li>
                </ol>

                <h4 className="font-semibold text-lg mt-6">
                    BFS Algorithm
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`1. Mark starting vertex as visited
2. Enqueue starting vertex

3. While queue is not empty:
      Dequeue a vertex
      Visit it

      For every adjacent vertex:
            If not visited:
                Mark as visited
                Enqueue it`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BFS Implementation */}

            <section>

                <h3 className="section-heading">
                    BFS Implementation in C
                </h3>

                <p className="p-text">
                    The following program demonstrates Breadth First Search using an
                    adjacency matrix representation of a graph. A queue is used to
                    process vertices in level order.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include <stdio.h>

#define MAX 100

int graph[MAX][MAX];
int visited[MAX];
int queue[MAX];

int front = -1;
int rear = -1;

void enqueue(int value)
{
    if (rear == MAX - 1)
        return;

    if (front == -1)
        front = 0;

    queue[++rear] = value;
}

int dequeue()
{
    if (front == -1 || front > rear)
        return -1;

    return queue[front++];
}

void BFS(int start, int vertices)
{
    visited[start] = 1;
    enqueue(start);

    while (front <= rear)
    {
        int current = dequeue();

        printf("%d ", current);

        for (int i = 0; i < vertices; i++)
        {
            if (graph[current][i] == 1 && !visited[i])
            {
                visited[i] = 1;
                enqueue(i);
            }
        }
    }
}

int main()
{
    int vertices = 5;

    graph[0][1] = 1;
    graph[1][0] = 1;

    graph[0][2] = 1;
    graph[2][0] = 1;

    graph[1][3] = 1;
    graph[3][1] = 1;

    graph[2][4] = 1;
    graph[4][2] = 1;

    printf("BFS Traversal: ");
    BFS(0, vertices);

    return 0;
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complexity Analysis of BFS */}

            <section>

                <h3 className="section-heading">
                    Time and Space Complexity of BFS
                </h3>

                <p className="p-text">
                    The theoretical time complexity of BFS is O(V + E) when an
                    adjacency list representation is used. In Breadth First Search,
                    every vertex is visited once and edges are examined during
                    traversal.
                </p>

                <div className="overflow-x-auto">

                    <table className="min-w-full border border-[#c7a669]">

                        <thead>

                            <tr className="bg-[#f3e7c2]">

                                <th className="border border-[#c7a669] p-3">
                                    Operation
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    Complexity
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td className="border border-[#c7a669] p-3">
                                    Time Complexity
                                </td>
                                <td className="border border-[#c7a669] p-3">
                                    O(V + E)
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">
                                    Space Complexity
                                </td>
                                <td className="border border-[#c7a669] p-3">
                                    O(V)
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Applications of BFS */}

            <section>

                <h3 className="section-heading">
                    Applications of BFS
                </h3>

                <ul className="section-list">
                    <li>Finding the shortest path in unweighted graphs</li>
                    <li>Web crawling by search engines</li>
                    <li>Social networking analysis</li>
                    <li>Network broadcasting systems</li>
                    <li>GPS and route discovery systems</li>
                    <li>Peer-to-peer networking</li>
                    <li>Connected component detection</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages and Limitations of BFS */}

            <section>

                <h3 className="section-heading">
                    Advantages and Limitations of BFS
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Guarantees shortest path in unweighted graphs</li>
                    <li>Systematic level-by-level traversal</li>
                    <li>Useful for connectivity analysis</li>
                    <li>Simple to understand and implement</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Limitations
                </h4>

                <ul className="section-list">
                    <li>Requires additional memory for the queue</li>
                    <li>Can consume significant memory for large graphs</li>
                    <li>Not suitable for very deep traversals when memory is limited</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Depth First Search */}

            <section>

                <h3 className="section-heading">
                    Depth First Search (DFS)
                </h3>

                <p className="p-text">
                    Depth First Search (DFS) is a graph traversal algorithm that explores
                    a path as deeply as possible before backtracking. Unlike BFS, which
                    visits vertices level by level, DFS moves deeper into the graph before
                    exploring remaining branches.
                </p>

                <p className="p-text">
                    DFS can be implemented using recursion or an explicit stack. The
                    recursive approach is the most commonly used because of its simplicity.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Example Graph
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`        A
      /   \\
     B     C
    / \\   /
   D   E F`}
                    </pre>

                </div>

                <p className="p-text">
                    Starting from vertex A and visiting neighbors from left to right,
                    one possible DFS traversal is:
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`DFS Traversal:

A → B → D → E → C → F`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Working of DFS
                </h4>

                <ol className="section-list list-decimal">
                    <li>Start from the source vertex.</li>
                    <li>Mark the source as visited.</li>
                    <li>Visit an unvisited adjacent vertex.</li>
                    <li>Continue moving deeper into the graph.</li>
                    <li>If no unvisited neighbor exists, backtrack.</li>
                    <li>Repeat until all reachable vertices are visited.</li>
                </ol>

                <h4 className="font-semibold text-lg mt-6">
                    DFS Algorithm
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`1. Mark current vertex as visited
2. Visit current vertex

3. For every adjacent vertex:
      If not visited:
           Perform DFS on that vertex

4. Backtrack when no unvisited neighbor exists`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* DFS Implementation */}

            <section>

                <h3 className="section-heading">
                    DFS Implementation in C
                </h3>

                <p className="p-text">
                    The following program demonstrates Depth First Search using recursion
                    and an adjacency matrix representation.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include <stdio.h>

#define MAX 100

int graph[MAX][MAX];
int visited[MAX];

void DFS(int vertex, int vertices)
{
    visited[vertex] = 1;

    printf("%d ", vertex);

    for (int i = 0; i < vertices; i++)
    {
        if (graph[vertex][i] == 1 && !visited[i])
        {
            DFS(i, vertices);
        }
    }
}

int main()
{
    int vertices = 5;

    graph[0][1] = 1;
    graph[1][0] = 1;

    graph[0][2] = 1;
    graph[2][0] = 1;

    graph[1][3] = 1;
    graph[3][1] = 1;

    graph[2][4] = 1;
    graph[4][2] = 1;

    printf("DFS Traversal: ");
    DFS(0, vertices);

    return 0;
}`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complexity Analysis of DFS */}

            <section>

                <h3 className="section-heading">
                    Time and Space Complexity of DFS
                </h3>

                <p className="p-text">
                    The theoretical time complexity of DFS is O(V + E) when an
                    adjacency list representation is used. DFS visits each vertex
                    once and explores edges during traversal.
                </p>

                <div className="overflow-x-auto">

                    <table className="min-w-full border border-[#c7a669]">

                        <thead>

                            <tr className="bg-[#f3e7c2]">

                                <th className="border border-[#c7a669] p-3">
                                    Operation
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    Complexity
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td className="border border-[#c7a669] p-3">
                                    Time Complexity
                                </td>
                                <td className="border border-[#c7a669] p-3">
                                    O(V + E)
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">
                                    Space Complexity
                                </td>
                                <td className="border border-[#c7a669] p-3">
                                    O(V)
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Applications of DFS */}

            <section>

                <h3 className="section-heading">
                    Applications of DFS
                </h3>

                <ul className="section-list">
                    <li>Cycle detection in graphs</li>
                    <li>Topological sorting</li>
                    <li>Finding connected components</li>
                    <li>Maze solving algorithms</li>
                    <li>Path finding problems</li>
                    <li>Backtracking algorithms</li>
                    <li>Dependency resolution systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages and Limitations of DFS */}

            <section>

                <h3 className="section-heading">
                    Advantages and Limitations of DFS
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Requires less memory than BFS in many cases</li>
                    <li>Suitable for deep traversal problems</li>
                    <li>Useful in recursive and backtracking algorithms</li>
                    <li>Simple recursive implementation</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Limitations
                </h4>

                <ul className="section-list">
                    <li>Does not guarantee the shortest path</li>
                    <li>May explore long paths before finding a solution</li>
                    <li>Deep recursion may cause stack overflow in very large graphs</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* BFS vs DFS Comparison */}

            <section>

                <h3 className="section-heading">
                    Comparison Between BFS and DFS
                </h3>

                <p className="p-text">
                    Breadth First Search and Depth First Search are the two fundamental
                    graph traversal techniques. Although both visit all reachable
                    vertices, they differ in their traversal strategy, memory usage,
                    and applications.
                </p>

                <div className="overflow-x-auto">

                    <table className="min-w-full border border-[#c7a669]">

                        <thead>

                            <tr className="bg-[#f3e7c2]">

                                <th className="border border-[#c7a669] p-3">
                                    Feature
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    BFS
                                </th>

                                <th className="border border-[#c7a669] p-3">
                                    DFS
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Full Form</td>
                                <td className="border border-[#c7a669] p-3">Breadth First Search</td>
                                <td className="border border-[#c7a669] p-3">Depth First Search</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Traversal Method</td>
                                <td className="border border-[#c7a669] p-3">Level by Level</td>
                                <td className="border border-[#c7a669] p-3">Depth Wise</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Primary Data Structure</td>
                                <td className="border border-[#c7a669] p-3">Queue</td>
                                <td className="border border-[#c7a669] p-3">Stack / Recursion</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Time Complexity</td>
                                <td className="border border-[#c7a669] p-3">O(V + E)</td>
                                <td className="border border-[#c7a669] p-3">O(V + E)</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Space Complexity</td>
                                <td className="border border-[#c7a669] p-3">O(V)</td>
                                <td className="border border-[#c7a669] p-3">O(V)</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Shortest Path Guarantee</td>
                                <td className="border border-[#c7a669] p-3">Yes (Unweighted Graphs)</td>
                                <td className="border border-[#c7a669] p-3">No</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Memory Usage</td>
                                <td className="border border-[#c7a669] p-3">Usually Higher</td>
                                <td className="border border-[#c7a669] p-3">Usually Lower</td>
                            </tr>

                            <tr>
                                <td className="border border-[#c7a669] p-3">Applications</td>
                                <td className="border border-[#c7a669] p-3">Shortest Path, Networking</td>
                                <td className="border border-[#c7a669] p-3">Backtracking, Cycle Detection</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Applications of Graphs */}

            <section>

                <h3 className="section-heading">
                    Applications of Graphs
                </h3>

                <p className="p-text">
                    Graphs are among the most widely used data structures because they
                    efficiently represent relationships between entities. Many real-world
                    systems can be modeled as graphs where vertices represent objects and
                    edges represent connections between them.
                </p>

                <ul className="section-list">
                    <li>Computer Networks and Internet Routing</li>
                    <li>Social Media Networks</li>
                    <li>Road Maps and Navigation Systems</li>
                    <li>Airline Route Planning</li>
                    <li>Search Engine Page Ranking</li>
                    <li>Recommendation Systems</li>
                    <li>Dependency Management in Software</li>
                    <li>Transportation Networks</li>
                    <li>Telecommunication Systems</li>
                    <li>Artificial Intelligence and Machine Learning</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Real Life Examples of Graphs */}

            <section>

                <h3 className="section-heading">
                    Real Life Examples of Graphs
                </h3>

                <ul className="section-list">
                    <li>Facebook users connected through friendships</li>
                    <li>Instagram users connected through followers</li>
                    <li>Cities connected by roads and highways</li>
                    <li>Airports connected through flight routes</li>
                    <li>Web pages connected through hyperlinks</li>
                    <li>Computers connected in a network</li>
                    <li>Metro stations connected through railway lines</li>
                    <li>People connected in professional networks</li>
                    <li>Electric power distribution networks</li>
                    <li>Supply chain and logistics systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Practical Example */}

            <section>

                <h3 className="section-heading">
                    Practical Example using Graphs
                </h3>

                <p className="p-text">
                    One of the most common applications of graphs is route planning in
                    navigation systems such as Google Maps.
                </p>

                <p className="p-text">
                    Cities can be represented as vertices, while roads connecting cities
                    can be represented as edges.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Delhi -------- Agra
  |               |
  |               |
Jaipur ------- Lucknow`}
                    </pre>

                </div>

                <p className="p-text">
                    Navigation systems use graph algorithms to determine the shortest
                    or fastest route between two locations.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages of Graphs */}

            <section>

                <h3 className="section-heading">
                    Advantages of Graphs
                </h3>

                <ul className="section-list">
                    <li>Efficiently represent complex relationships between entities</li>
                    <li>Can model real-world networks accurately</li>
                    <li>Support powerful traversal and search algorithms</li>
                    <li>Useful for path-finding and routing problems</li>
                    <li>Can represent both directed and undirected relationships</li>
                    <li>Flexible and scalable for large systems</li>
                    <li>Widely applicable across multiple domains</li>
                </ul>

                <p className="p-text">
                    Because of their flexibility and ability to represent interconnected
                    data, graphs are extensively used in modern computing systems.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Limitations of Graphs */}

            <section>

                <h3 className="section-heading">
                    Limitations of Graphs
                </h3>

                <ul className="section-list">
                    <li>Can become difficult to visualize as size increases</li>
                    <li>Graph algorithms may be computationally expensive</li>
                    <li>Storage requirements can be high for dense graphs</li>
                    <li>Implementation is generally more complex than linear data structures</li>
                    <li>Traversal may require additional memory for visited tracking</li>
                    <li>Large-scale graph processing can be challenging</li>
                </ul>

                <p className="p-text">
                    Although graphs are highly versatile, efficient implementation and
                    algorithm selection are important when working with very large graphs.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Summary */}

            <section>

                <h3 className="section-heading">
                    Summary
                </h3>

                <p className="p-text">
                    A Graph is a non-linear data structure consisting of vertices and
                    edges that represent relationships between entities. Graphs can be
                    classified into various types such as directed, undirected, weighted,
                    unweighted, cyclic, acyclic, connected, disconnected, complete, and
                    bipartite graphs.
                </p>

                <p className="p-text">
                    Graphs can be stored using adjacency matrices or adjacency lists,
                    each having its own advantages and trade-offs. Traversal techniques
                    such as Breadth First Search (BFS) and Depth First Search (DFS)
                    enable systematic exploration of graph structures.
                </p>

                <p className="p-text">
                    Due to their ability to model complex relationships, graphs play a
                    crucial role in computer networks, navigation systems, social media,
                    recommendation engines, search engines, and many other real-world
                    applications.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Interview Questions */}

            <section>

                <h3 className="section-heading">
                    Frequently Asked Interview Questions
                </h3>

                <div className="space-y-6">

                    <div>
                        <h4 className="font-semibold text-lg">
                            1. What is a Graph?
                        </h4>

                        <p className="p-text">
                            A Graph is a non-linear data structure consisting of vertices
                            (nodes) and edges that represent relationships between vertices.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            2. What are vertices and edges?
                        </h4>

                        <p className="p-text">
                            Vertices are the entities or nodes of a graph, while edges
                            represent connections between those vertices.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            3. What is the difference between a directed and an undirected graph?
                        </h4>

                        <p className="p-text">
                            In a directed graph, edges have direction. In an undirected
                            graph, edges do not have direction and can be traversed in
                            both directions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            4. What is a weighted graph?
                        </h4>

                        <p className="p-text">
                            A weighted graph assigns numerical values (weights) to edges,
                            often representing distance, cost, or time.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            5. What is an adjacency matrix?
                        </h4>

                        <p className="p-text">
                            An adjacency matrix is a square matrix used to represent a
                            graph where matrix entries indicate the presence or absence
                            of edges.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            6. What is an adjacency list?
                        </h4>

                        <p className="p-text">
                            An adjacency list stores a list of neighboring vertices for
                            each vertex in the graph.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            7. Which representation is better for sparse graphs?
                        </h4>

                        <p className="p-text">
                            Adjacency lists are generally preferred for sparse graphs
                            because they require less memory.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            8. What is Breadth First Search (BFS)?
                        </h4>

                        <p className="p-text">
                            BFS is a graph traversal algorithm that explores vertices
                            level by level using a queue.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            9. What is Depth First Search (DFS)?
                        </h4>

                        <p className="p-text">
                            DFS is a graph traversal algorithm that explores a path as
                            deeply as possible before backtracking.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            10. Which data structure is used in BFS?
                        </h4>

                        <p className="p-text">
                            BFS uses a Queue data structure.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            11. Which data structure is used in DFS?
                        </h4>

                        <p className="p-text">
                            DFS uses a Stack or recursion.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            12. What is the time complexity of BFS?
                        </h4>

                        <p className="p-text">
                            The theoretical time complexity of BFS is O(V + E) when an
                            adjacency list representation is used, where V is the number
                            of vertices and E is the number of edges.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            13. What is the time complexity of DFS?
                        </h4>

                        <p className="p-text">
                            The theoretical time complexity of DFS is O(V + E) when an
                            adjacency list representation is used.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            14. Which traversal guarantees the shortest path in an unweighted graph?
                        </h4>

                        <p className="p-text">
                            Breadth First Search (BFS) guarantees the shortest path in
                            an unweighted graph.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            15. Mention some real-world applications of graphs.
                        </h4>

                        <p className="p-text">
                            Graphs are used in social networks, computer networks,
                            navigation systems, search engines, recommendation systems,
                            and transportation networks.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
};