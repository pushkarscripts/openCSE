export const Ch7Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Query Processing</span> is how the DBMS
        takes a SQL query, understands it, and executes it efficiently.{" "}
        <span className="font-semibold">Query Optimization</span> selects the
        most efficient execution plan.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Steps in Query Processing</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Parsing:</span> the SQL query is checked for syntax errors and converted into a parse tree.</li>
          <li><span className="font-semibold">Translation:</span> the parse tree is converted into relational algebra expressions.</li>
          <li><span className="font-semibold">Optimization:</span> the query optimizer picks the most efficient execution plan.</li>
          <li><span className="font-semibold">Execution:</span> the chosen plan is executed and results are returned.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Query Processing Pipeline</p>
          <pre>{`SQL Query
   ↓ Parser
Parse Tree
   ↓ Translator
Relational Algebra Expression
   ↓ Optimizer
Execution Plan
   ↓ Evaluator
Query Result`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Query Cost Estimation</span>
        </h3>
        <ul className="section-list">
          <li>Cost is measured in terms of disk I/O, CPU time, and memory usage.</li>
          <li>Disk I/O dominates — the optimizer minimizes the number of disk reads/writes.</li>
          <li>The optimizer uses statistics (number of rows, distinct values, index availability) to estimate cost.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Join Algorithms</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Nested Loop Join:</span> for each tuple in the outer relation, scan all tuples in the inner. Simple but slow for large tables.</li>
          <li><span className="font-semibold">Block Nested Loop Join:</span> loads blocks instead of tuples — fewer disk reads.</li>
          <li><span className="font-semibold">Merge Join:</span> both relations sorted on the join attribute, then merged. Efficient for sorted data.</li>
          <li><span className="font-semibold">Hash Join:</span> hash both relations on the join attribute and match buckets. Very efficient for large unsorted data.</li>
        </ul>
        <div className="tip-block">
          <p>Hash Join is generally the fastest for large datasets. Merge Join is best when data is already sorted.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Query Optimization Techniques</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Heuristic Optimization:</span> apply rules to rewrite the query into a more efficient form before execution.</li>
          <li><span className="font-semibold">Push selections down:</span> apply WHERE filters as early as possible to reduce rows.</li>
          <li><span className="font-semibold">Push projections down:</span> select only needed columns early to reduce data size.</li>
          <li><span className="font-semibold">Cost-Based Optimization:</span> enumerate multiple plans, estimate their cost, and pick the cheapest.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Heuristic Example</p>
          <pre>{`-- Before optimization (filter happens after join):
Students ⋈ Enrollments WHERE Students.dept = 'CSE'

-- After optimization (filter before join):
σ(dept='CSE')(Students) ⋈ Enrollments`}</pre>
        </div>
      </section>
    </div>
  );
};