"use client"
import React from "react"
import { Inline, Block } from "../../../components/Math"

export function Ch4Content() {
  return (
    <div className="course-content">
      {/* Introduction */}
      <p className="p-text">
        Welcome to the extensive module on <span className="font-semibold">Graph Theory</span>. In computational engineering, graphs are the definitive structural abstraction used to model non-linear relational datasets. Whether representing network topologies, mapping memory pointer dependencies during data flow analysis, or computing optimized routes for packet data, graph theory provides the formal discrete axioms required to scale networked software systems safely.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 1. Basics and Structural Parameters */}
      <section>
        <h3 className="section-heading">
          1. Graph Fundamentals & Structural Parameters
        </h3>
        <p className="p-text">
          Formally, a <strong>Simple Graph</strong> is defined as an ordered pair <Inline math="G = (V, E)" />, where <Inline math="V" /> represents a non-empty set of objects called <strong>vertices</strong> (or nodes) and <Inline math="E" /> represents a set of unordered pairs of distinct vertices called <strong>edges</strong> (or links).
        </p>

        <ul className="section-list">
          <li>
            <strong>Order of a Graph (<Inline math="|V|" />):</strong> The absolute total number of vertices present in the network topology.
          </li>
          <li>
            <strong>Size of a Graph (<Inline math="|E|" />):</strong> The absolute total number of edges present connecting the nodes.
          </li>
          <li>
            <strong>Degree of a Vertex (<Inline math="\text{deg}(v)" />):</strong> The number of edges incident upon node <Inline math="v" />. 
            <br />
            <span className="text-xs italic text-[#e2d1c1]">Edge Case Exception: For multigraphs containing loops, each individual self-loop contributes exactly <Inline math="2" /> to that vertex's total degree counter.</span>
          </li>
          <li>
            <strong>Isolated Vertex:</strong> A node containing a degree configuration equal to zero (<Inline math="\text{deg}(v) = 0" />). It has no incident links.
          </li>
          <li>
            <strong>Pendant Vertex:</strong> A node containing a degree configuration strictly equal to one (<Inline math="\text{deg}(v) = 1" />).
          </li>
        </ul>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">
            The Handshaking Lemma (Fundamental Invariant Theorem of Graph Theory)
          </div>
          <p className="p-text mb-3">
            For any undirected graph structure, the cumulative sum of the vertex degrees is always exactly equal to twice the total number of edges:
          </p>
          <div className="font-mono text-center text-xl my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
            <Block math="\sum_{v \in V} \text{deg}(v) = 2|E|" />
          </div>
          <p className="p-text mt-3 text-sm">
            <strong>⚠️ Critical Systems Corollary:</strong> Every undirected graph must contain an <em>even number</em> of vertices that possess an odd degree profile. This structural constraint implies that it is mathematically impossible to construct a network layout consisting of, for example, exactly <Inline math="7" /> vertices where each node has a degree of <Inline math="3" /> (since <Inline math="7 \times 3 = 21" />, which is odd).
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 2. Classifications and Structural Varieties of Graphs */}
      <section>
        <h3 className="section-heading">
          2. Structural Classifications & Varieties of Graphs
        </h3>
        <p className="p-text">
          Graphs are categorized into distinct structural classes depending on directional properties, weight settings, and localized boundary connectivity traits:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Undirected vs. Directed Graphs (Digraphs)</h4>
            <p className="text-sm">
              In an undirected layout, edges are symmetric unordered pairs <Inline math="\{u, v\}" />. In a <strong>Digraph</strong>, edges are ordered pairs <Inline math="(u, v)" />, establishing an asymmetric directional vector from a source vertex <Inline math="u" /> to a target vertex <Inline math="v" />. Digraph vertices track isolated split degree states: <strong>In-degree</strong> (<Inline math="\text{deg}^-(v)" />, counting incoming vectors) and <strong>Out-degree</strong> (<Inline math="\text{deg}^+(v)" />, counting outgoing vectors).
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Complete Graphs (<Inline math="K_n" />)</h4>
            <p className="text-sm">
              A simple undirected graph where every single distinct pair of vertices is connected by a unique edge. A complete graph configured with <Inline math="n" /> nodes is designated as <Inline math="K_n" /> and contains precisely <Inline math="n(n-1)/2" /> total edges. Every single vertex within <Inline math="K_n" /> has a uniform, regular degree matching <Inline math="\text{deg}(v) = n-1" />.
            </p>
          </div>

          <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Weighted Graphs</h4>
            <p className="text-sm">
              A graph configuration where each edge <Inline math="e" /> is explicitly assigned a real numbers scalar value <Inline math="w(e)" />, representing physical cost, network traversal distance, maximum capacity limits, or line latency. These matrices form the foundation for shortest-path calculation algorithms.
            </p>
          </div>

          <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Bipartite Graphs (<Inline math="K_{m,n}" />)</h4>
            <p className="text-sm">
              A graph whose primary vertex set <Inline math="V" /> can be divided cleanly into two separate, mutually disjoint subsets <Inline math="V_1" /> and <Inline math="V_2" /> such that every single edge in <Inline math="E" /> connects a node from <Inline math="V_1" /> directly to a node in <Inline math="V_2" />. No internal links can connect nodes within the same subset. A complete bipartite graph is designated as <Inline math="K_{m,n}" />.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 3. Graph Operations: Joins, Cartesian Products, Subgraphs, and Subtrees */}
      <section>
        <h3 className="section-heading">
          3. Graph Operations: Subgraphs, Subtrees, Joins, and Cartesian Products
        </h3>
        <p className="p-text">
          Complex system models can be dissected into structural sub-components or synthesized using standard binary algebraic operations on graph inputs:
        </p>

        <ul className="section-list">
          <li>
            <strong>Subgraph:</strong> A graph <Inline math="G' = (V', E')" /> is classified as a subgraph of <Inline math="G = (V, E)" /> if <Inline math="V' \subseteq V" /> and <Inline math="E' \subseteq E" /> such that every edge in <Inline math="E'" /> has its terminal endpoints contained entirely within the modified vertex set <Inline math="V'" />.
          </li>
          <li>
            <strong>Subtree:</strong> A specialized subgraph of a main interconnected tree structure that itself complies with all baseline tree properties—meaning it must remain completely connected and contain absolutely no internal cycles.
          </li>
          <li>
            <strong>Graph Join (<Inline math="G_1 + G_2" />):</strong> Given two disjoint graphs <Inline math="G_1 = (V_1, E_1)" /> and <Inline math="G_2 = (V_2, E_2)" />, the join operation produces a combined graph containing the total vertex set <Inline math="V_1 \cup V_2" />. Its edge set contains all original paths <Inline math="E_1 \cup E_2" /> augmented with unique new links connecting <em>every single vertex</em> belonging to <Inline math="V_1" /> to <em>every single vertex</em> belonging to <Inline math="V_2" />.
          </li>
          <li>
            <strong>Cartesian Product (<Inline math="G_1 \times G_2" />):</strong> A product synthesis layout where the new vertex set corresponds to the standard Cartesian product of sets <Inline math="V_1 \times V_2" />. Two coordinate nodes <Inline math="(u_1, u_2)" /> and <Inline math="(v_1, v_2)" /> are adjacent in the output graph if and only if:
            <br />
            - <Inline math="u_1 = v_1" /> and node <Inline math="u_2" /> is adjacent to <Inline math="v_2" /> within the internal structure of <Inline math="G_2" />, OR
            <br />
            - <Inline math="u_2 = v_2" /> and node <Inline math="u_1" /> is adjacent to <Inline math="v_1" /> within the internal structure of <Inline math="G_1" />.
            <br />
            <span className="text-xs text-amber-200 block mt-1">This specific operation generates hypercubes and mesh grid structures used in parallel computing arrays.</span>
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 4. Graph Representations */}
      <section>
        <h3 className="section-heading">
          4. Algebraic and Computational Graph Representations
        </h3>
        <p className="p-text">
          To process graph layouts computationally, topologies are converted into equivalent algebraic matrices or structural arrays. Let <Inline math="G=(V,E)" /> be an undirected simple graph where vertices are indexed as <Inline math="v_1, v_2, \dots, v_n" />:
        </p>

        <ul className="section-list">
          <li>
            <strong>Adjacency Matrix (<Inline math="A" />):</strong> A square <Inline math="n \times n" /> matrix where matrix entry <Inline math="a_{ij} = 1" /> if a valid edge connects vertex <Inline math="v_i" /> and vertex <Inline math="v_j" />, and <Inline math="a_{ij} = 0" /> otherwise. For simple undirected systems, this matrix is perfectly symmetric along the main diagonal (<Inline math="A = A^T" />) with zeros tracking down the primary diagonal axis.
          </li>
          <li>
            <strong>Incidence Matrix (<Inline math="M" />):</strong> An asymmetric <Inline math="n \times m" /> matrix (where <Inline math="m = |E|" /> matches total edge size) aligning vertices against edge identifiers. Entry <Inline math="m_{ij} = 1" /> if vertex <Inline math="v_i" /> acts as a terminal endpoint for edge link <Inline math="e_j" />, and <Inline math="m_{ij} = 0" /> otherwise. Each single column within an undirected incidence matrix contains exactly two <Inline math="1" /> entries.
          </li>
          <li>
            <strong>Adjacency List:</strong> An array of dynamic linked lists or memory arrays, where each index position <Inline math="i" /> represents vertex <Inline math="v_i" /> and maps directly to a clean list detailing all its immediate neighboring adjacent nodes. This structural layout provides optimal performance for sparse graphs.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 5. Graph Connectivity Definitions */}
      <section>
        <h3 className="section-heading">
          5. Graph Connectivity: Walks, Trails, Paths, Circuits, and Cycles
        </h3>
        <p className="p-text">
          Navigating across graph networks requires explicit structural classifications based on whether nodes or edge links can be repeated along a traversal sequence:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[#c7a669] text-left">
            <thead>
              <tr className="bg-[#7a523c] text-[#fff7ed]">
                <th className="border border-[#c7a669] p-3 w-1/4">Traversal Type</th>
                <th className="border border-[#c7a669] p-3 w-1/3">Core Structural Conditions</th>
                <th className="border border-[#c7a669] p-3">Repetition Constraints</th>
              </tr>
            </thead>
            <tbody className="bg-[#f3e7c2] text-[#2b1d0f]">
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Walk</td>
                <td className="border border-[#c7a669] p-3">Any arbitrary alternating sequence of vertices and edges.</td>
                <td className="border border-[#c7a669] p-3">Both vertices and edges can be repeated infinitely.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Trail</td>
                <td className="border border-[#c7a669] p-3">A walk containing strictly unique edges.</td>
                <td className="border border-[#c7a669] p-3">Edges cannot be repeated. Vertices can be repeated.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Path</td>
                <td className="border border-[#c7a669] p-3">An open walk containing strictly unique vertices.</td>
                <td className="border border-[#c7a669] p-3">Vertices must remain entirely unique (guaranteeing unique edges).</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Circuit</td>
                <td className="border border-[#c7a669] p-3">A closed trail that begins and ends at the identical node.</td>
                <td className="border border-[#c7a669] p-3">Edges cannot be repeated. Vertices can be repeated.</td>
              </tr>
              <tr>
                <td className="border border-[#c7a669] p-3 font-semibold">Cycle</td>
                <td className="border border-[#c7a669] p-3">A closed path beginning and ending at the identical node.</td>
                <td className="border border-[#c7a669] p-3">No vertices or edges can be repeated, except the terminal start-end pair.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 6. Historic Foundational Case: The Königsberg Bridge Problem */}
      <section>
        <h3 className="section-heading">
          6. Foundational Case Study: The Königsberg Bridge Problem
        </h3>
        <p className="p-text">
          The field of graph theory originated with Leonhard Euler's resolution of the historic <strong>Königsberg Bridge Problem</strong> in 1736. The geography of Königsberg, Prussia, consisted of four major landmass territories split by the Pregel River, interconnected via seven active bridges. The citizens sought to determine whether it was possible to design a continuous walking route through the city that traveled across <em>every individual bridge exactly once</em>, returning back to the initial point of departure.
        </p>

        {/* Visual Figure for Königsberg Bridge Problem */}
        <div className="overflow-x-auto my-6">
          <div className="min-w-[320px] border border-[#c7a669] rounded-xl p-6 bg-[#f3e7c2] text-center shadow-md text-[#2b1d0f]">
            <h4 className="font-bold text-lg mb-4 text-[#5b3a29] font-sans">
              Visual Figures: The Königsberg Bridge Multigraph Model
            </h4>
            
            <div className="flex flex-col items-center justify-center space-y-2 py-4 font-mono text-sm">
              <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-2 rounded-md font-bold shadow">
                Landmass A (North Bank)
              </div>
              
              <div className="flex justify-between w-48 text-lg font-bold text-[#5b3a29] px-4">
                <span>/ ‖ \</span>
                <span>/ ‖ \</span>
              </div>
              
              <div className="flex justify-between w-80 items-center">
                <div className="bg-[#7a523c] text-[#fff7ed] px-3 py-2 rounded-md font-bold shadow w-28">
                  Landmass B <br />(Island)
                </div>
                <div className="text-[#5b3a29] font-bold text-xl px-2">======</div>
                <div className="bg-[#7a523c] text-[#fff7ed] px-3 py-2 rounded-md font-bold shadow w-28">
                  Landmass C <br />(East Bank)
                </div>
              </div>
              
              <div className="flex justify-between w-48 text-lg font-bold text-[#5b3a29] px-4">
                <span>\ ‖ /</span>
                <span>\ ‖ /</span>
              </div>
              
              <div className="bg-[#7a523c] text-[#fff7ed] px-6 py-2 rounded-md font-bold shadow">
                Landmass D (South Bank)
              </div>
            </div>

            <div className="mt-4 border-t border-[#c7a669] pt-3 text-left text-xs font-sans text-amber-900">
              <p className="font-bold mb-1">Euler's Abstract Resolution Mapping:</p>
              <p>
                Euler mapped the landmass coordinates to abstract vertices and the bridges to multigraph edge links. The structural calculation revealed the following vertex degree parameters: <Inline math="\text{deg}(A)=3" />, <Inline math="\text{deg}(B)=5" />, <Inline math="\text{deg}(C)=3" />, and <Inline math="\text{deg}(D)=3" />. Because all four vertices contained an odd degree value, the multigraph structure lacked any valid Eulerian paths or circuits, rendering the citizens' walking target physically impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 7. Eulerian and Hamiltonian Systems & Edge Optimization Cases */}
      <section>
        <h3 className="section-heading">
          7. Traversal Systems: Eulerian, Hamiltonian, and Edge Routing Problems
        </h3>
        <p className="p-text">
          Graph optimization focuses on navigating either every edge or every vertex efficiently. This maps directly to critical routing algorithms used in networking and logistics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 shadow-sm">
            <h4 className="font-bold text-lg text-[#5b3a29] mb-2">Eulerian Paths and Circuits</h4>
            <p className="text-sm mb-2">
              An <strong>Eulerian Path</strong> is a trail that visits <em>every edge</em> in the graph layout exactly once. An <strong>Eulerian Circuit</strong> is an Eulerian path that begins and terminates at the identical vertex.
            </p>
            <p className="text-sm font-semibold text-amber-900 mt-2">
              Euler's Parity Theorems:
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
              <li>An undirected connected graph contains an Eulerian circuit if and only if <strong>every vertex has an even degree</strong>.</li>
              <li>An undirected connected graph contains an Eulerian path if and only if it contains <strong>exactly two vertices with an odd degree</strong>. The path must begin at one odd node and end at the other.</li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#cebb9c]">
              <h5 className="font-bold text-xs text-[#5b3a29] uppercase">Algorithmic Application: Chinese Postman Problem (CPP)</h5>
              <p className="text-xs mt-1 text-gray-700">
                Given a connected weighted graph, find the shortest closed walk that travels across <em>every edge</em> at least once. If the graph is Eulerian, the solution matches the Eulerian circuit exactly. If odd vertices exist, certain edges must be repeated, which is solved via minimum-weight matching algorithms.
              </p>
            </div>
          </div>

          <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg text-[#5b3a29] mb-2">Hamiltonian Paths and Circuits</h4>
              <p className="text-sm mb-2">
                A <strong>Hamiltonian Path</strong> is a simple path that visits <em>every single vertex</em> in the graph exactly once. A <strong>Hamiltonian Circuit</strong> is a closed loop that visits every node exactly once and returns back to the initial starting point.
              </p>
              <p className="text-sm font-semibold text-amber-900 mt-2">
                Sufficient Structural Bound Theorems:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                <li><strong>Dirac's Theorem:</strong> If a simple graph contains <Inline math="n \ge 3" /> vertices and every vertex <Inline math="v" /> satisfies <Inline math="\text{deg}(v) \ge n/2" />, then the graph contains a Hamiltonian circuit.</li>
                <li><strong>Ore's Theorem:</strong> If a simple graph contains <Inline math="n \ge 3" /> nodes and for every non-adjacent node pair <Inline math="u, v" />, the condition <Inline math="\text{deg}(u) + \text{deg}(v) \ge n" /> is met, then the graph contains a Hamiltonian circuit.</li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-[#cebb9c]">
              <h5 className="font-bold text-xs text-[#5b3a29] uppercase">Algorithmic Application: Traveling Salesperson Problem (TSP)</h5>
              <p className="text-xs mt-1 text-gray-700">
                Given a weighted complete graph, find the Hamiltonian circuit that minimizes the total combined edge weight sum. Unlike the edge-focused Chinese Postman Problem, finding a Hamiltonian circuit is an NP-hard optimization challenge with no known polynomial-time solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 8. Graph Isomorphism */}
      <section>
        <h3 className="section-heading">
          8. Graph Isomorphism & Mapping Bijections
        </h3>
        <p className="p-text">
          Two separate graphs <Inline math="G_1 = (V_1, E_1)" /> and <Inline math="G_2 = (V_2, E_2)" /> are classified as <strong>Isomorphic</strong> (<Inline math="G_1 \simeq G_2" />) if they maintain the exact same internal structural connectivity alignment, differing solely in vertex naming conventions or spatial layout styles. Formally, there must exist a bijective mapping function <Inline math="f: V_1 \rightarrow V_2" /> such that vertex pairs <Inline math="u" /> and <Inline math="v" /> are adjacent within <Inline math="G_1" /> if and only if their mapped counterparts <Inline math="f(u)" /> and <Inline math="f(v)" /> are adjacent within <Inline math="G_2" />.
        </p>

        <div className="bg-[#5b3a29] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg mb-2">
            Isomorphic Invariant Metric Tests
          </div>
          <p className="p-text mb-2 text-sm">
            To satisfy isomorphism criteria, both graphs must match across multiple structural metrics. If any of these invariant conditions fail, the systems are guaranteed to be <strong>non-isomorphic</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs text-amber-100 font-mono">
            <li>They must share identical vertex counts (<Inline math="|V_1| = |V_2|" />).</li>
            <li>They must share identical edge counts (<Inline math="|E_1| = |E_2|" />).</li>
            <li>Their sorted vertex degree sequences must be completely identical.</li>
            <li>They must match in internal cycle counts of specific lengths, connected components, and clique formations.</li>
          </ul>
          <p className="p-text mt-3 text-xs italic text-gray-300">
            ⚠️ Systems Warning: Passing all invariant tests does not guarantee graph isomorphism; it merely establishes eligibility. Definitive confirmation requires constructing the precise bijective vertex-to-vertex function matrix.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 9. Planar Graphs */}
      <section>
        <h3 className="section-heading">
          9. Planar Graphs & Topological Surface Embeddings
        </h3>
        <p className="p-text">
          A graph is explicitly classified as <strong>Planar</strong> if it can be drawn or embedded within a two-dimensional geometric plane space in a manner where no two edges cross or intersect one another. A planar graph embedded without crossings divides the plane into bounded and unbounded geometric regions known as <strong>Regions</strong> (or Faces).
        </p>

        <div className="bg-[#7a523c] text-[#fff7ed] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm font-mono">
          <div className="font-sans font-semibold text-lg mb-2 text-center">
            Euler's Planar Polyhedron Formula
          </div>
          <p className="font-sans text-center text-sm mb-3">
            For any connected planar graph configured with <Inline math="V" /> vertices, <Inline math="E" /> edges, and <Inline math="R" /> regions, the following equality remains invariant:
          </p>
          <div className="text-center text-2xl my-2 bg-[#5b3a29] p-2 rounded text-amber-200">
            <Inline math="V - E + R = 2" />
          </div>
          <div className="font-sans text-xs space-y-2 mt-4 border-t border-[#c7a669] pt-3 text-amber-100">
            <p><strong>Boundary Edge Inequalities for Simple Planar Layouts (<Inline math="V \ge 3" />):</strong></p>
            <p>1. In a standard planar simple graph, each face is bounded by at least 3 edges, creating the strict inequality: <Inline math="E \le 3V - 6" />.</p>
            <p>2. If the planar layout contains no cycles of length 3 (meaning it is completely triangle-free), each face is bounded by at least 4 edges, creating the inequality: <Inline math="E \le 2V - 4" />.</p>
          </div>
        </div>

        <p className="p-text">
          <strong>Kuratowski's Structural Theorem:</strong> A graph is planar if and only if it does not contain a subgraph that is homeomorphic to, or can be reduced to, <Inline math="K_5" /> (the complete graph on 5 vertices) or <Inline math="K_{3,3}" /> (the complete non-planar utility graph on two sets of 3 vertices). These two configurations are the fundamental non-planar topological structures.
        </p>
        
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 10. Graph Coloring and Chromatic Number */}
      <section>
        <h3 className="section-heading">
          10. Graph Coloring & Partition Bounds
        </h3>
        <p className="p-text">
          A formal <strong>Vertex Coloring</strong> of an active graph <Inline math="G" /> is an assignment of specific color values to the vertices of <Inline math="G" /> such that no two adjacent nodes share the identical color tag. This configuration models channel allocation and scheduling tasks.
        </p>
        <p className="p-text mt-2">
          The <strong>Chromatic Number (<Inline math="\chi(G)" />):</strong> The absolute minimal number of colors required to achieve a valid vertex coloring across graph <Inline math="G" />.
        </p>

        <div className="bg-[#f3e7c2] text-[#2b1d0f] border border-[#c7a669] rounded-lg p-5 my-6 shadow-sm">
          <div className="font-semibold text-lg text-[#5b3a29] mb-3">
            Chromatic Number Profiles for Core Graph Classes
          </div>
          <ul className="list-none space-y-2 text-sm font-mono">
            <li>
              <span className="font-bold font-sans">Complete Graph (<Inline math="K_n" />):</span> <Inline math="\chi(K_n) = n" /> (since every vertex connects to all others, forcing unique colors).
            </li>
            <li>
              <span className="font-bold font-sans">Bipartite Graph (<Inline math="K_{m,n}" />):</span> <Inline math="\chi(G) = 2" /> (vertices partition into 2 independent color groupings).
            </li>
            <li>
              <span className="font-bold font-sans">Cycle Graph (<Inline math="C_n" />):</span> <Inline math="\chi(C_n) = 2" /> if <Inline math="n" /> is an even integer; <Inline math="\chi(C_n) = 3" /> if <Inline math="n" /> is an odd integer.
            </li>
          </ul>
          <div className="mt-4 border-t border-dashed border-[#c7a669] pt-3 text-xs font-sans text-amber-900 font-semibold">
            The Famous Four-Color Theorem: The chromatic number of any valid planar graph embedded on a two-dimensional surface is at most 4 (<Inline math="\chi(G) \le 4" />).
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* 11. Factorization of a Graph */}
      <section>
        <h3 className="section-heading">
          11. Factorization of a Graph & Perfect Matchings
        </h3>
        <p className="p-text">
          A <strong>Factor</strong> of a graph <Inline math="G" /> is a spanning subgraph of <Inline math="G" /> that includes all vertices of <Inline math="G" />. <strong>Graph Factorization</strong> partitions the edge set <Inline math="E" /> into disjoint factors:
        </p>

        <ul className="section-list">
          <li>
            <strong>1-Factorization:</strong> A 1-factor is a regular spanning subgraph of degree 1, which represents a <strong>perfect matching</strong> across the node pool. A graph can be 1-factored if its entire edge set can be divided into disjoint perfect matchings. A complete graph <Inline math="K_n" /> has a 1-factorization if and only if <Inline math="n" /> is an even integer.
          </li>
          <li>
            <strong>2-Factorization:</strong> A 2-factor is a regular spanning subgraph of degree 2, which physically manifests as a collection of disjoint components that are simple cycles. A complete graph <Inline math="K_n" /> can be divided into disjoint 2-factors if and only if <Inline math="n" /> is an odd integer.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>
        <p className="p-text">
          In this chapter, we explored graph theory from its structural foundations to its core algorithmic applications. We analyzed fundamental graph parameters like degrees, order, and edge sizes, along with algebraic representation techniques using adjacency matrices and lists. We integrated graph operations including subgraphs, subtrees, graph joins, and Cartesian products. We established structural conditions for graph isomorphism, topological constraints for planarity, and vertex coloring bounds. Finally, we studied optimization traversal systems like the Chinese Postman Problem (CPP) and Traveling Salesperson Problem (TSP), tracing their origins back to Euler's historic resolution of the Königsberg Bridge Problem.
        </p>
      </section>
    </div>
  );
}