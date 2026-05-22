export const Ch0Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Welcome to <span className="font-semibold">Database Management Systems</span> —
        a core course designed to help you understand how data is organized, stored,
        retrieved, and managed efficiently. This course covers relational models, SQL,
        normalization, transactions, indexing, and more.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module I: <span className="section-subheading">Introduction to Databases</span>
        </h3>
        <ul className="section-list">
          <li>What is a database and why we need it</li>
          <li>File system vs database approach</li>
          <li>Advantages of DBMS over file systems</li>
          <li>Types of databases: relational, hierarchical, network, object-oriented</li>
          <li>Database users: end users, application programmers, DBA</li>
          <li>DBMS architecture: 1-tier, 2-tier, 3-tier</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Entity-Relationship Model</span>
        </h3>
        <ul className="section-list">
          <li>Entities, attributes, and relationships</li>
          <li>Types of attributes: simple, composite, multivalued, derived</li>
          <li>Cardinality: one-to-one, one-to-many, many-to-many</li>
          <li>Participation constraints: total and partial</li>
          <li>ER diagram notation and conventions</li>
          <li>Extended ER features: specialization, generalization, aggregation</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Relational Model and SQL</span>
        </h3>
        <ul className="section-list">
          <li>Relational model: tables, tuples, attributes, domains</li>
          <li>Keys: primary, candidate, foreign, super key</li>
          <li>Relational algebra operations</li>
          <li>SQL basics: DDL, DML, DCL, TCL</li>
          <li>Joins: inner, outer, natural, cross</li>
          <li>Subqueries, views, and aggregation functions</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Normalization</span>
        </h3>
        <ul className="section-list">
          <li>Functional dependencies and their types</li>
          <li>Anomalies: insertion, deletion, update</li>
          <li>Normal forms: 1NF, 2NF, 3NF, BCNF</li>
          <li>Decomposition: lossless join and dependency preservation</li>
          <li>Multivalued dependencies and 4NF</li>
          <li>Practical approach to normalization</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">Transactions and Concurrency Control</span>
        </h3>
        <ul className="section-list">
          <li>Transaction concept and ACID properties</li>
          <li>Transaction states: active, partially committed, committed, failed, aborted</li>
          <li>Concurrency problems: lost update, dirty read, unrepeatable read</li>
          <li>Concurrency control techniques: locking, timestamps</li>
          <li>Two-phase locking protocol</li>
          <li>Deadlock detection and recovery</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module VI: <span className="section-subheading">Indexing and Hashing</span>
        </h3>
        <ul className="section-list">
          <li>Basic concepts of indexing</li>
          <li>Dense and sparse indexes</li>
          <li>B-tree and B+ tree indexing</li>
          <li>Hashing techniques: static and dynamic</li>
          <li>Comparison of indexing vs hashing</li>
          <li>When to use which technique</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module VII: <span className="section-subheading">Query Processing and Optimization</span>
        </h3>
        <ul className="section-list">
          <li>Steps in query processing</li>
          <li>Query cost estimation</li>
          <li>Equivalence of relational expressions</li>
          <li>Query optimization techniques</li>
          <li>Nested loop joins and merge joins</li>
          <li>Query execution plans</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module VIII: <span className="section-subheading">Recovery and Security</span>
        </h3>
        <ul className="section-list">
          <li>Types of failures: transaction, system, media</li>
          <li>Recovery techniques: log-based, shadow paging</li>
          <li>Checkpoints and their role in recovery</li>
          <li>Database security concepts</li>
          <li>Authorization and authentication</li>
          <li>SQL injection and prevention</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <p className="p-text">
        By the end of this course, you will understand how to design databases,
        write efficient SQL queries, normalize data, manage transactions, and
        handle indexing and recovery — providing a strong foundation for
        real-world database development and system design.
      </p>
    </div>
  );
};
