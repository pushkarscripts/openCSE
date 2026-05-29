export const Ch6Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Indexing</span> and <span className="font-semibold">Hashing</span> are
        techniques used to speed up data retrieval. Without them, every query would require scanning
        the entire table — indexes allow the DBMS to jump directly to relevant records.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Why Indexing?</span>
        </h3>
        <ul className="section-list">
          <li>Without an index, a query must do a <span className="font-semibold">full table scan</span> — reading every row to find matches. Very slow for large tables.</li>
          <li>An index is a separate data structure that maps search key values to the disk locations of matching records.</li>
          <li>The attribute(s) used to build an index are called the <span className="font-semibold">search key</span>.</li>
          <li>Trade-off: indexes speed up reads but slow down writes (INSERT/UPDATE/DELETE must update the index too) and consume extra disk space.</li>
        </ul>
        <div className="tip-block">
          <p>Exam Tip: An index search key is not necessarily the same as the relation's primary key — any attribute can be indexed.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Indexes</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Primary Index (Clustering Index):</span> built on the ordering field of a sequentially ordered file. One entry per data block. File is physically ordered by this field.</li>
          <li><span className="font-semibold">Secondary Index (Non-Clustering Index):</span> built on a non-ordering field. Multiple entries may point to the same block. File is NOT physically ordered by this field.</li>
          <li><span className="font-semibold">Dense Index:</span> one index entry for every record in the data file. Faster lookup; more space.</li>
          <li><span className="font-semibold">Sparse Index:</span> one index entry per data block (not every record). Less space; only works if data is sorted. Must scan within block after finding entry.</li>
          <li><span className="font-semibold">Multilevel Index:</span> the index itself is too large → build an index on the index. Forms a tree. Reduces search to O(log n) block accesses.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Dense vs Sparse</p>
          <pre>{`Dense:  index entry for every record
  [10] → Block 1
  [20] → Block 1
  [30] → Block 2  ← one entry per record

Sparse: index entry for every block
  [10] → Block 1  ← covers records 10–20
  [30] → Block 2  ← covers records 30–40
  (data must be sorted for sparse to work)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">B-Tree Index</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">B-Tree</span> is a balanced, self-adjusting tree where every leaf is at the same depth.</li>
          <li>Each node holds search key values and pointers to children or data records.</li>
          <li>Supports equality search, range queries, and ordered traversal.</li>
          <li>On insert/delete, the tree rebalances automatically — always stays balanced.</li>
          <li>Node occupancy is kept between ⌈n/2⌉ and n keys (where n is the order of the tree).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">B-Tree Structure</p>
          <pre>{`             [30 | 70]
            /    |    \
      [10|20] [40|60] [80|90]
      /\ /\   /\ /\   /\ /\
    data records at leaf level`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">B+ Tree Index</span>
        </h3>
        <ul className="section-list">
          <li>A variation of B-Tree where <span className="font-semibold">all data pointers are in the leaf nodes only</span>. Internal nodes hold only search keys for routing.</li>
          <li>Leaf nodes are <span className="font-semibold">linked together</span> in a linked list — enables efficient range scans.</li>
          <li>Most practical DBMS indexes (MySQL InnoDB, PostgreSQL) use B+ Trees.</li>
          <li>Insertion: find leaf, insert key; if leaf overflows, split and propagate up.</li>
          <li>Deletion: find and remove key; if node underflows, merge or redistribute with sibling.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">B+ Tree vs B-Tree</p>
          <pre>{`B-Tree:  data pointers at ALL nodes (internal + leaf)
B+ Tree: data pointers ONLY at leaf nodes
         leaf nodes linked: [...10→][...30→][...60→]
         → range query "WHERE age BETWEEN 20 AND 50"
           just scans the linked leaf list`}</pre>
        </div>
        <div className="tip-block">
          <p>B+ Tree is preferred over B-Tree in practice because the linked leaf list makes range queries extremely efficient — no need to traverse up and down the tree.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Hashing</span>
        </h3>
        <ul className="section-list">
          <li>Hashing maps a search key value to a <span className="font-semibold">bucket</span> (disk page) using a hash function h(K).</li>
          <li>Ideal for <span className="font-semibold">equality searches</span> (WHERE id = 101). Does NOT support range queries.</li>
          <li>A <span className="font-semibold">bucket</span> is a unit of storage containing one or more records.</li>
          <li><span className="font-semibold">Collision:</span> two different keys hash to the same bucket. Handled by chaining (overflow buckets) or open addressing.</li>
          <li>Hash function goal: distribute records uniformly across all buckets to minimize collisions.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Hash Example</p>
          <pre>{`h(K) = K mod 5
  h(101) = 1 → Bucket 1
  h(203) = 3 → Bucket 3
  h(106) = 1 → Bucket 1 (collision! → overflow bucket)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Static Hashing</span>
        </h3>
        <ul className="section-list">
          <li>Fixed number of buckets M. Hash function: h(K) = K mod M.</li>
          <li>Problem: if data grows, buckets overflow. If data shrinks, many buckets are empty — wasted space.</li>
          <li>Overflow handled by <span className="font-semibold">chaining</span>: link overflow buckets to the primary bucket.</li>
          <li>Performance degrades as overflow chains grow — may require periodic reorganization.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Dynamic Hashing (Extendible Hashing)</span>
        </h3>
        <ul className="section-list">
          <li>Number of buckets grows and shrinks dynamically as data is inserted or deleted.</li>
          <li>Uses a <span className="font-semibold">directory</span> of pointers to buckets. Directory doubles in size when a bucket overflows.</li>
          <li><span className="font-semibold">Global depth:</span> number of bits used to index the directory.</li>
          <li><span className="font-semibold">Local depth:</span> number of bits used to index a specific bucket. When local depth = global depth and bucket overflows → directory doubles.</li>
          <li>Avoids performance degradation of static hashing without full reorganization.</li>
        </ul>
        <div className="tip-block">
          <p>Extendible hashing doubles the directory (not the data pages) on overflow — directory doubling is cheap. Only the overflowing bucket is actually split.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Indexing vs Hashing — Comparison</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Hashing</span> is best for exact equality lookups (point queries). O(1) average access.</li>
          <li><span className="font-semibold">B+ Tree Indexing</span> supports both equality AND range queries. O(log n) access.</li>
          <li>Use hashing when queries are predominantly equality-based and data size is somewhat predictable.</li>
          <li>Use B+ Tree when range queries are needed, or data is accessed in sorted order.</li>
          <li>Most real-world DBMS use B+ Trees as the default index structure.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">When to Use Which</p>
          <pre>{`Hashing:   WHERE student_id = 101          ← exact match ✓
           WHERE age BETWEEN 18 AND 25     ← NOT supported ✗

B+ Tree:   WHERE student_id = 101          ← exact match ✓
           WHERE age BETWEEN 18 AND 25     ← range query ✓
           ORDER BY name                   ← sorted access ✓`}</pre>
        </div>
      </section>
    </div>
  );
};