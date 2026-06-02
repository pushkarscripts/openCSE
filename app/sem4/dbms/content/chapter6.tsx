export const Ch6Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Indexing</span> and{" "}
        <span className="font-semibold">Hashing</span> are techniques used to
        speed up data retrieval in large databases without scanning every row.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Why Indexing?</span>
        </h3>
        <ul className="section-list">
          <li>Without an index, every query scans the entire table — slow for large data.</li>
          <li>An index is like a book&apos;s table of contents — it points directly to the data.</li>
          <li>Indexes speed up SELECT queries but slightly slow down INSERT, UPDATE, DELETE.</li>
          <li>Created using: <code>CREATE INDEX idx_name ON table(column);</code></li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Indexes</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Primary Index:</span> built on the primary key of an ordered file. One entry per data block.</li>
          <li><span className="font-semibold">Secondary Index:</span> built on non-primary key fields. Points to exact records.</li>
          <li><span className="font-semibold">Clustering Index:</span> records are physically ordered by the indexed field.</li>
          <li><span className="font-semibold">Dense Index:</span> one index entry for every record in the file.</li>
          <li><span className="font-semibold">Sparse Index:</span> one index entry per block, not per record. Requires ordered data.</li>
        </ul>
        <div className="tip-block">
          <p>Dense index is faster to search but uses more space. Sparse index saves space but requires the file to be sorted.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">B-Tree and B+ Tree</span>
        </h3>
        <ul className="section-list">
          <li>Most databases use <span className="font-semibold">B+ Trees</span> for indexing.</li>
          <li><span className="font-semibold">B-Tree:</span> stores data in both internal nodes and leaf nodes.</li>
          <li><span className="font-semibold">B+ Tree:</span> stores data only in leaf nodes; internal nodes store only keys for navigation.</li>
          <li>Leaf nodes in B+ Tree are linked — great for range queries.</li>
          <li>All operations (search, insert, delete) take O(log n) time.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">B+ Tree Structure</p>
          <pre>{`Internal nodes: [10 | 20 | 30]
                /    |    |    \\
Leaf nodes: [5,8] [12,15] [22,25] [35,40]
             ↔      ↔       ↔       ↔  (linked)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Hashing</span>
        </h3>
        <ul className="section-list">
          <li>Hashing maps a key value directly to a bucket (storage location) using a hash function.</li>
          <li>Best for <span className="font-semibold">exact match queries</span> — not range queries.</li>
          <li><span className="font-semibold">Static Hashing:</span> fixed number of buckets. Can cause overflow if data grows.</li>
          <li><span className="font-semibold">Dynamic Hashing (Extendible Hashing):</span> buckets grow and split as data increases.</li>
          <li><span className="font-semibold">Collision:</span> two keys map to the same bucket — handled by chaining or open addressing.</li>
        </ul>
        <div className="tip-block">
          <p>Use indexing (B+ Tree) for range queries. Use hashing for fast exact lookups.</p>
        </div>
      </section>
    </div>
  );
};