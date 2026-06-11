import React from "react";

export function Ch4Content() {
  return (
    <div className="course-content">
      {/* Introduction */}
      <p className="p-text">
        <span className="font-semibold">Graph Theory</span> is the study of discrete mathematical structures consisting of objects and the pairwise relationships between them. Graphs serve as an abstract framework for modeling and analyzing complex networks, including data communication routes, social networks, neural connection structures, and computational dependencies.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. Basics and Structural Parameters */}
      <section>
        <h3 className="section-heading">
          1. Graph Fundamentals & Structural Parameters
        </h3>
        <p className="p-text">
          Formally, a simple graph is defined as an ordered pair $G = (V, E)$, where $V$ represents a non-empty set of **vertices** (or nodes) and $E$ represents a set of **edges** (or links) that connect unordered pairs of distinct vertices.
        </p>

        <ul className="section-list">
          <li>
            <strong>Order of a Graph, $|V|$:</strong> The absolute number of vertices present in the graph.
          </li>
          <li>
            <strong>Size of a Graph, $|E|$:</strong> The absolute number of edges present in the graph.
          </li>
          <li>
            <strong>Degree of a Vertex, $\text{deg}(v)$:</strong> The number of edges incident to the vertex $v$. For loops, each loop contributes exactly 2 to the vertex's total degree.
          </li>
          <li>
            <strong>Isolated Vertex:</strong> A vertex with a degree equal to 0 ($\text{deg}(v) = 0$).
          </li>
          <li>
            <strong>Pendant Vertex:</strong> A vertex with a degree equal to 1 ($\text{deg}(v) = 1$).
          </li>
        </ul>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">
            The Handshaking Lemma (Fundamental Theorem of Graph Theory)
          </div>
          <p className="p-text mb-3">
            For any undirected graph, the sum of the degrees of all its vertices is exactly twice the total number of its edges:
          </p>
          <div className="font-mono text-center text-xl my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
            \sum_{v \in V} \text{deg}(v) = 2|E|
          </div>
          <p className="p-text mt-3 text-sm">
            <strong>⚠️ Critical Corollary:</strong> Every undirected graph must contain an <em>even number</em> of vertices that have an odd degree. This constraint makes it impossible to design a graph where, for example, exactly 7 vertices each have a degree of 3.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Graph Connectivity Definitions */}
      <section>
        <h3 className="section-heading">
          2. Graph Connectivity: Walks, Trails, Paths, and Cycles
        </h3>
        <p className="p-text">
          Tracing structural traversal routes through a graph requires distinct mathematical classifications based on element repetition restrictions:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 w-1/4">Term</th>
                <th className="border border-[#c7a669] p-3 w-1/3">Core Definitional Condition</th>
                <th className="border border-[#c7a669] p-3">Repetition Constraints</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Walk</td>
                <td className="border border-[#c7a669] p-3">An alternating sequence of vertices and edges.</td>
                <td className="border border-[#c7a669] p-3">Both vertices and edges can be repeated infinitely.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Trail</td>
                <td className="border border-[#c7a669] p-3">A walk with no repeated edges.</td>
                <td className="border border-[#c7a669] p-3">Edges must be unique. Vertices can be repeated.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Path</td>
                <td className="border border-[#c7a669] p-3">A walk with no repeated vertices.</td>
                <td className="border border-[#c7a669] p-3">Vertices must be strictly unique (which guarantees edges are unique).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Circuit</td>
                <td className="border border-[#c7a669] p-3">A closed trail that starts and ends at the same vertex.</td>
                <td className="border border-[#c7a669] p-3">No edges can be repeated. Vertices can be repeated.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Cycle</td>
                <td className="border border-[#c7a669] p-3">A closed path where the start and end vertices are identical.</td>
                <td className="border border-[#c7a669] p-3">No vertices or edges can be repeated, except the terminal matching pair.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Types of Graphs */}
      <section>
        <h3 className="section-heading">
          3. Classifications and Structural Varieties of Graphs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Undirected vs. Directed Graphs (Digraphs)</h4>
            <p className="text-sm">
              In an undirected graph, edges are symmetric unordered pairs $\{u, v\}$. In a digraph, edges are ordered pairs $(u, v)$, establishing a one-way directional vector from a source vertex $u$ to a target vertex $v$. Digraph vertices track split degree configurations: <strong>In-degree</strong> ($\text{deg}^-(v)$, incoming paths) and <strong>Out-degree</strong> ($\text{deg}^+(v)$, outgoing paths).
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Complete Graphs ($K_n$)</h4>
            <p className="text-sm">
              A simple graph where an edge connects every pair of distinct vertices. A complete graph with $n$ vertices is denoted as $K_n$ and contains exactly $n(n-1)/2$ edges. Every vertex in $K_n$ has a uniform, regular degree equal to $n-1$.
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Weighted Graphs</h4>
            <p className="text-sm">
              A graph layout where each edge $e$ is assigned a real number value $w(e)$, representing a specific cost, distance, capacity, or latency metric. These configurations are used in shortest-path computations.
            </p>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Bipartite Graphs ($K_{m,n}$)</h4>
            <p className="text-sm">
              A graph whose vertex set $V$ can be partitioned into two disjoint subsets $V_1$ and $V_2$ such that every edge connects a vertex in $V_1$ to a vertex in $V_2$. No edges can connect vertices within the same subset. A complete bipartite graph is denoted as $K_{m,n}$.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. Graph Representations */}
      <section>
        <h3 className="section-heading">
          4. Algebraic and Computational Graph Representations
        </h3>
        <p className="p-text">
          To process graph layouts computationally, topologies are converted into equivalent algebraic matrices or structural lists. Let $G=(V,E)$ be a graph with vertices labeled $v_1, v_2, \dots, v_n$:
        </p>

        <ul className="section-list">
          <li>
            <strong>Adjacency Matrix ($A$):</strong> A square $n \times n$ matrix where entry $a_{ij} = 1$ if an edge exists between vertex $v_i$ and vertex $v_j$, and $a_{ij} = 0$ otherwise. For undirected simple graphs, this matrix is symmetric along the main diagonal ($A = A^T$) with zeros tracking down the diagonal.
          </li>
          <li>
            <strong>Incidence Matrix ($M$):</strong> An $n \times m$ matrix (where $m = |E|$) matching vertices against edges. Entry $m_{ij} = 1$ if vertex $v_i$ is an endpoint of edge $e_j$, and $m_{ij} = 0$ otherwise. Each column in an undirected incidence matrix contains exactly two 1s.
          </li>
          <li>
            <strong>Adjacency List:</strong> An array of linked lists or dynamic arrays, where each index $i$ corresponds to vertex $v_i$ and contains a list of all its neighboring adjacent vertices. This representation is highly memory-efficient for sparse graphs.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 5. Graph Isomorphism */}
      <section>
        <h3 className="section-heading">
          5. Graph Isomorphism
        </h3>
        <p className="p-text">
          Two graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are **Isomorphic** ($G_1 \simeq G_2$) if they represent the exact same structural connectivity layout, differing only in the names or labeling configurations of their vertices. Formally, there must exist a bijective function $f: V_1 \rightarrow V_2$ such that vertices $u$ and $v$ are adjacent in $G_1$ if and only if $f(u)$ and $f(v)$ are adjacent in $G_2$.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">
            Isomorphic Invariant Conditions
          </div>
          <p className="p-text mb-2">
            To be isomorphic, two graphs must share identical values across structural metrics. If any of these invariant conditions fail, the graphs are guaranteed to be <strong>non-isomorphic</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-amber-100">
            <li>They must contain the exact same number of vertices ($|V_1| = |V_2|$).</li>
            <li>They must contain the exact same number of edges ($|E_1| = |E_2|$).</li>
            <li>Their sorted vertex degree sequences must be completely identical.</li>
            <li>They must contain the same number of connected components, cycles of specific lengths, and cliques.</li>
          </ul>
          <p className="p-text mt-3 text-xs italic text-gray-300">
            ⚠️ Note: Passing all invariant tests does not guarantee isomorphism; it merely establishes that isomorphism is possible. Definitive proof requires building or verifying the exact mapping bijection.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 6. Eulerian and Hamiltonian Properties */}
      <section>
        <h3 className="section-heading">
          6. Traversal Optimization: Eulerian and Hamiltonian Systems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#5b3a29] mb-2">Eulerian Paths and Circuits</h4>
            <p className="text-sm mb-2">
              An <strong>Eulerian Path</strong> is a trail that visits <em>every edge</em> in the graph exactly once. An <strong>Eulerian Circuit</strong> is an Eulerian path that starts and ends at the same vertex.
            </p>
            <p className="text-sm font-semibold text-amber-900 mt-2">
              Euler's Fundamental Theorems:
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
              <li>An undirected connected graph has an Eulerian circuit if and only if <strong>every vertex has an even degree</strong>.</li>
              <li>An undirected connected graph has an Eulerian path (but no circuit) if and only if it has <strong>exactly two vertices with an odd degree</strong>. The path must start at one odd vertex and end at the other.</li>
            </ul>
          </div>

          <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#5b3a29] mb-2">Hamiltonian Paths and Circuits</h4>
            <p className="text-sm mb-2">
              A <strong>Hamiltonian Path</strong> is a simple path that visits <em>every vertex</em> in the graph exactly once. A <strong>Hamiltonian Circuit</strong> is a closed loop that visits every vertex exactly once and returns to the initial starting vertex.
            </p>
            <p className="text-sm font-semibold text-amber-900 mt-2">
              Sufficient Conditions (Dirac & Ore Theorems):
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
              <li><strong>Dirac's Theorem:</strong> If a simple graph has $n \ge 3$ vertices and every vertex $v$ satisfies $\text{deg}(v) \ge n/2$, then the graph contains a Hamiltonian circuit.</li>
              <li><strong>Ore's Theorem:</strong> If a simple graph has $n \ge 3$ vertices and for every pair of non-adjacent vertices $u, v$, the condition $\text{deg}(u) + \text{deg}(v) \ge n$ holds, then the graph contains a Hamiltonian circuit.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 7. Planar Graphs */}
      <section>
        <h3 className="section-heading">
          7. Topological Space Layouts: Planar Graphs and Parameters
        </h3>
        <p className="p-text">
          A graph is considered <strong>Planar</strong> if it can be drawn in a single geometric plane such that no two edges cross or intersect each other. When a planar graph is drawn without any edge crossings, it divides the plane into distinct bounded and unbounded geometric spaces called <strong>Regions</strong> (or Faces).
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm font-mono">
          <div className="font-sans font-semibold text-lg mb-2 text-center">
            Euler's Planar Formula
          </div>
          <p className="font-sans text-center text-sm mb-3">
            For any connected planar graph with $V$ vertices, $E$ edges, and $R$ regions:
          </p>
          <div className="text-center text-2xl my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
            V − E + R = 2
          </div>
          <div className="font-sans text-xs space-y-2 mt-4 border-t border-[#c7a669] pt-3 text-amber-100">
            <p><strong>Boundary Edge Inequalities for Simple Planar Graphs ($V \ge 3$):</strong></p>
            <p>1. Every region is bounded by at least 3 edges, yielding the inequality: $E \le 3V − 6$.</p>
            <p>2. If the graph contains no cycles of length 3 (triangle-free), every region is bounded by at least 4 edges, yielding: $E \le 2V − 4$.</p>
          </div>
        </div>

        <p className="p-text">
          <strong>Kuratowski's Theorem:</strong> A graph is planar if and only if it does not contain a subgraph that is homeomorphic to, or can be reduced to, $K_5$ (the complete graph on 5 vertices) or $K_{3,3}$ (the complete utility graph on 3 vertices each). These two graphs are the foundational non-planar archetypes.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 8. Graph Coloring and Chromatic Number */}
      <section>
        <h3 className="section-heading">
          8. Graph Coloring & Structural Partition Bounds
        </h3>
        <p className="p-text">
          A <strong>Vertex Coloring</strong> of a graph $G$ is an assignment of colors to the vertices of $G$ such that no two adjacent vertices share the exact same color. 
        </p>
        <p className="p-text mt-2">
          The <strong>Chromatic Number, $\chi(G)$:</strong> The absolute minimum number of colors required to properly color the vertices of a graph $G$.
        </p>

        <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg text-[#5b3a29] mb-3">
            Chromatic Number Profiles for Core Graph Classes
          </div>
          <ul className="list-none space-y-2 text-sm font-mono">
            <li>
              <span className="font-bold font-sans">Complete Graph ($K_n$):</span> $\chi(K_n) = n$ (every vertex is connected to all others, forcing distinct colors).
            </li>
            <li>
              <span className="font-bold font-sans">Bipartite Graph ($K_{m,n}$):</span> $\chi(G) = 2$ (vertices partition cleanly into 2 independent color groupings).
            </li>
            <li>
              <span className="font-bold font-sans">Cycle Graph ($C_n$):</span> $\chi(C_n) = 2$ if $n$ is even; $\chi(C_n) = 3$ if $n$ is odd.
            </li>
          </ul>
          <div className="mt-4 border-t border-dashed border-[#c7a669] pt-3 text-xs font-sans text-amber-900 font-semibold">
            The Famous Four-Color Theorem: The chromatic number of any planar graph is at most 4 ($\chi(G) \le 4$).
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 9. Factorization of a Graph */}
      <section>
        <h3 className="section-heading">
          9. Factorization of a Graph
        </h3>
        <p className="p-text">
          A **Factor** of a graph $G$ is a spanning subgraph of $G$ that contains all the vertices of $G$. **Graph Factorization** is the process of partitioning the complete edge set $E$ of a graph into disjoint, spanning subgraphs (factors).
        </p>

        <ul className="section-list">
          <li>
            <strong>1-Factorization:</strong> A 1-factor is a spanning subgraph that is regular of degree 1 (a perfect matching). A graph can be 1-factored if its entire edge set can be divided into disjoint perfect matchings. A complete graph $K_n$ has a 1-factorization if and only if $n$ is even.
          </li>
          <li>
            <strong>2-Factorization:</strong> A 2-factor is a spanning subgraph that is regular of degree 2, which physically manifests as a collection of disjoint cycles. A complete graph $K_n$ can be broken down into disjoint 2-factors if and only if $n$ is an odd integer.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 10. Algorithmic Combinatorics */}
      <section>
        <h3 className="section-heading">
          10. Algorithmic Optimization Problems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-1">Traveling Salesperson Problem (TSP)</h4>
            <p className="text-xs mb-2 text-amber-200">Vertex Optimization / Hard Bounds</p>
            <p className="text-sm">
              Given a weighted complete graph, find the Hamiltonian circuit that minimizes the total edge weight sum. This problem models visiting every target node in a network exactly once while minimizing traveling costs. TSP is an NP-hard optimization problem with no known polynomial-time solution.
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-1">Chinese Postman Problem (CPP)</h4>
            <p className="text-xs mb-2 text-amber-200">Edge Optimization / Polynomial Bounds</p>
            <p className="text-sm">
              Given a connected weighted graph, find the shortest closed walk that travels across <em>every edge</em> at least once. If the graph contains an Eulerian circuit, the optimal route is simply that circuit, and its length matches the sum of all edge weights. If odd-degree vertices are present, certain edges must be duplicated, which can be solved efficiently using matching algorithms.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 11. Historic Problems: The Königsberg Bridge Problem */}
      <section>
        <h3 className="section-heading">
          11. Historic Roots: The Königsberg Bridge Problem
        </h3>
        <p className="p-text">
          The origin of modern graph theory traces back to the historic <strong>Königsberg Bridge Problem</strong>, solved by Leonhard Euler in 1736. The city of Königsberg, Prussia, was divided into four landmasses by the Pregel River, and these landmasses were linked together by seven bridges. The citizens wanted to determine if it was possible to take a walk through the city in such a way that they crossed <em>every bridge exactly once</em>, returning to their starting position.
        </p>

        {/* Visual Figure for Königsberg Bridge Problem */}
        <div className="overflow-x-auto my-6">
          <div className="min-w-[320px] border border-[#c7a669] rounded-xl p-6 bg-[#f3e7c2] text-center shadow-md text-[#2b1d0f]">
            <h4 className="font-bold text-lg mb-4 text-[#5b3a29] font-sans">
              Visual Figures: The Königsberg Bridge Multigraph Model
            </h4>
            
            <div className="flex flex-col items-center justify-center space-y-2 py-4 font-mono text-sm">
              {/* Landmass A */}
              <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-2 rounded-md font-bold shadow">
                Landmass A (North Bank)
              </div>
              
              {/* Top Bridges mapping lines */}
              <div className="flex justify-between w-48 text-lg font-bold text-[#5b3a29] px-4">
                <span>/ ‖ \</span>
                <span>/ ‖ \</span>
              </div>
              
              {/* Middle Landmass C */}
              <div className="flex justify-between w-80 items-center">
                <div className="bg-[#7a523c] text-[#fff7ed] px-3 py-2 rounded-md font-bold shadow w-28">
                  Landmass B <br />(Island)
                </div>
                <div className="text-[#5b3a29] font-bold text-xl px-2">======</div>
                <div className="bg-[#7a523c] text-[#fff7ed] px-3 py-2 rounded-md font-bold shadow w-28">
                  Landmass C <br />(East Bank)
                </div>
              </div>
              
              {/* Bottom Bridges mapping lines */}
              <div className="flex justify-between w-48 text-lg font-bold text-[#5b3a29] px-4">
                <span>\ ‖ /</span>
                <span>\ ‖ /</span>
              </div>
              
              {/* Landmass D */}
              <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-2 rounded-md font-bold shadow">
                Landmass D (South Bank)
              </div>
            </div>

            <div className="mt-4 border-t border-[#c7a669] pt-3 text-left text-xs font-sans text-amber-900">
              <p className="font-bold mb-1">Euler's Abstract Mapping Resolution:</p>
              <p>
                Euler mapped the landmasses to vertices and the bridges to multigraph edges. The resulting model yielded the following degrees: <strong>A=3, B=5, C=3, D=3</strong>. Because all four vertices have an odd degree, the graph contains no Eulerian path or circuit. Thus, the citizens' target walk is mathematically impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>
        <p className="p-text">
          In this chapter, we explored graph theory from its structural foundations to its core algorithmic applications. We analyzed fundamental graph parameters like degrees, order, and edge sizes, along with algebraic representation techniques using adjacency matrices and lists. We established structural conditions for graph isomorphism, topological constraints for planarity, and vertex coloring bounds. Finally, we studied optimization problems like TSP and CPP, tracing their origins back to Euler's historic resolution of the Königsberg Bridge Problem.
        </p>
      </section>
    </div>
  );
}