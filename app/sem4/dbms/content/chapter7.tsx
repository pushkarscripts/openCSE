export const Ch7Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Query Processing</span> is how the DBMS translates
        a high-level SQL query into efficient low-level operations. <span className="font-semibold">Query
        Optimization</span> finds the cheapest execution plan among many equivalent alternatives.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Steps in Query Processing</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">1. Parsing and Translation:</span> SQL query is parsed for syntax errors and translated into a relational algebra expression (internal representation).</li>
          <li><span className="font-semibold">2. Optimization:</span> the query optimizer generates multiple equivalent execution plans and estimates the cost of each. The cheapest plan is selected.</li>
          <li><span className="font-semibold">3. Evaluation:</span> the chosen query execution plan is run against the actual data to produce results.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Pipeline</p>
          <pre>{`SQL Query
   ↓ Parser
Relational Algebra Expression
   ↓ Query Optimizer (cost estimation)
Query Execution Plan
   ↓ Query Execution Engine
Result`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Query Cost Estimation</span>
        </h3>
        <ul className="section-list">
          <li>Cost is typically measured in <span className="font-semibold">number of disk I/O operations</span> — disk access dominates query time.</li>
          <li>Key statistics used for cost estimation: number of tuples (n), number of blocks (b), blocking factor (bfr), number of distinct values for an attribute (V).</li>
          <li><span className="font-semibold">Selection cardinality (SC):</span> estimated number of tuples returned by a selection condition. SC(A, R) = n / V(A, R) for equality.</li>
          <li>The <span className="font-semibold">system catalog</span> stores these statistics and is updated periodically.</li>
          <li>Cost of linear scan = b block reads. Cost with primary index = log₂(b) + 1. Cost with hash = 1 (ideal).</li>
        </ul>
        <div className="tip-block">
          <p>Cost = disk I/Os. CPU cost is usually ignored. The optimizer uses statistics from the system catalog — stale statistics = bad plans.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Selection Operation Algorithms</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Linear Scan:</span> read every block and check condition. Works for any condition. Cost = b block reads.</li>
          <li><span className="font-semibold">Binary Search:</span> if data is sorted on the selection attribute. Cost = ⌈log₂(b)⌉ + matches − 1.</li>
          <li><span className="font-semibold">Primary Index + Equality:</span> use B+ tree on key field. Cost = height of tree + 1.</li>
          <li><span className="font-semibold">Secondary Index + Equality:</span> may need one I/O per matching tuple (records not clustered). Expensive for large result sets.</li>
          <li><span className="font-semibold">Primary Index + Range:</span> find first match via index, then scan sequentially.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Join Algorithms</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Nested Loop Join:</span> for each tuple in R, scan all tuples in S to find matches. Cost = n_R × b_S + b_R. Simple but expensive for large tables.</li>
          <li><span className="font-semibold">Block Nested Loop Join:</span> for each block of R, scan all blocks of S. Cost = b_R × b_S + b_R. Better than tuple-based nested loop — fewer disk reads.</li>
          <li><span className="font-semibold">Index Nested Loop Join:</span> for each tuple in R, use an index on S to find matching tuples. Cost = b_R + n_R × cost of index lookup on S. Very efficient if S has an index.</li>
          <li><span className="font-semibold">Sort-Merge Join:</span> sort both relations on the join attribute, then merge. Cost = sort cost + b_R + b_S. Efficient for large sorted or pre-sorted relations.</li>
          <li><span className="font-semibold">Hash Join:</span> partition both relations using the same hash function; join matching partitions. Cost ≈ 3(b_R + b_S). Very efficient when data fits in memory.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Join Cost Summary</p>
          <pre>{`Algorithm           | Best For
--------------------|---------------------------
Nested Loop         | Small relations
Block Nested Loop   | When memory is limited
Index Nested Loop   | When inner relation is indexed
Sort-Merge          | Pre-sorted data or large equi-joins
Hash Join           | Large unsorted equi-joins`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Equivalence of Relational Expressions</span>
        </h3>
        <ul className="section-list">
          <li>Two relational algebra expressions are <span className="font-semibold">equivalent</span> if they produce the same result on any valid database instance.</li>
          <li><span className="font-semibold">Cascade of selections:</span> σ(c1 AND c2)(R) = σ(c1)(σ(c2)(R)). Split selections and apply early.</li>
          <li><span className="font-semibold">Commutativity of selections:</span> σ(c1)(σ(c2)(R)) = σ(c2)(σ(c1)(R)).</li>
          <li><span className="font-semibold">Push selections down:</span> apply σ as early as possible to reduce intermediate result sizes.</li>
          <li><span className="font-semibold">Commutativity of joins:</span> R ⋈ S = S ⋈ R. Choose the join order with the smallest intermediate result.</li>
          <li><span className="font-semibold">Associativity of joins:</span> (R ⋈ S) ⋈ T = R ⋈ (S ⋈ T). Reorder joins to reduce cost.</li>
          <li><span className="font-semibold">Push projections down:</span> apply π early to drop unneeded columns and reduce tuple size.</li>
        </ul>
        <div className="tip-block">
          <p>The most impactful optimization is always: push selections (σ) as early as possible — filtering rows early reduces the size of everything downstream.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Query Optimization Techniques</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Heuristic (Rule-Based) Optimization:</span> apply a fixed set of transformation rules regardless of data statistics. Fast but not always optimal. Key rules: push σ down, push π down, reorder joins.</li>
          <li><span className="font-semibold">Cost-Based Optimization:</span> enumerate multiple equivalent plans, estimate cost of each using statistics, pick the cheapest. More accurate but computationally expensive.</li>
          <li><span className="font-semibold">Join Order Selection:</span> for n-way join, there are n! orderings. Dynamic programming is used to find optimal join order without enumerating all possibilities.</li>
          <li><span className="font-semibold">Pipelining:</span> pass output of one operation directly to the next without materializing intermediate results to disk. Reduces I/O significantly.</li>
          <li><span className="font-semibold">Materialization:</span> write intermediate result to disk before next operation. Required when pipelining isn't possible (e.g., sort).</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Query Execution Plans</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">query execution plan</span> is a tree of relational algebra operations with a chosen algorithm for each operation.</li>
          <li>DBMS query planners visualize plans as operator trees — leaves are table scans, internal nodes are joins/selections/projections.</li>
          <li>SQL provides <span className="font-semibold">EXPLAIN</span> (or EXPLAIN ANALYZE) to show the chosen execution plan and estimated costs.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">EXPLAIN Example</p>
          <pre>{`EXPLAIN SELECT s.name, c.title
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.dept = 'CSE';

-- Output shows:
-- Hash Join (cost=...)
--   → Seq Scan on enrollments
--   → Index Scan on students (dept='CSE')
--   → Seq Scan on courses`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">External Sorting (Sort-Merge)</span>
        </h3>
        <ul className="section-list">
          <li>When data is too large to fit in memory, sorting uses <span className="font-semibold">external sort-merge</span>.</li>
          <li><span className="font-semibold">Phase 1 – Create Runs:</span> read M blocks at a time, sort in memory, write sorted run to disk. Produces ⌈b/M⌉ sorted runs.</li>
          <li><span className="font-semibold">Phase 2 – Merge Runs:</span> repeatedly merge groups of runs using M−1 buffers per merge pass. Continue until one sorted file remains.</li>
          <li>Total cost: 2b × (1 + ⌈log<sub>M-1</sub>(⌈b/M⌉)⌉) block transfers.</li>
        </ul>
      </section>
    </div>
  );
};