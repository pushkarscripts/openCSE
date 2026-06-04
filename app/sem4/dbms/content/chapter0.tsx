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
          <li>File system vs database approach — comparison table</li>
          <li>Advantages of DBMS over file systems</li>
          <li>Types of databases: relational, hierarchical, network, object-oriented, object-relational</li>
          <li>Data models: relational, ER, object-based, network, hierarchical</li>
          <li>Database users: naïve, sophisticated, application programmers, DBA, designers</li>
          <li>DBMS architecture: 1-tier, 2-tier, 3-tier; three-schema (external/conceptual/internal)</li>
          <li>Structure of DBMS: query processor, storage manager, disk storage components</li>
          <li>Database design steps: requirements → conceptual → logical → schema refinement → physical → security</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module II: <span className="section-subheading">Entity-Relationship Model</span>
        </h3>
        <ul className="section-list">
          <li>Entities, attributes, and relationships — ER diagram notation</li>
          <li>Types of attributes: simple, composite, multivalued, derived, single-valued</li>
          <li>Cardinality: one-to-one, one-to-many, many-to-many</li>
          <li>Participation constraints: total and partial</li>
          <li>Strong vs weak entities; identifying relationships</li>
          <li>Relationship types: binary, recursive (unary), ternary</li>
          <li>Extended ER: ISA hierarchies, specialization, generalization, aggregation</li>
          <li>Conceptual design choices: entity vs attribute, entity vs relationship, binary vs ternary</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module III: <span className="section-subheading">Relational Model and SQL</span>
        </h3>
        <ul className="section-list">
          <li>Relational model: tables, tuples, attributes, domains, cardinality, degree</li>
          <li>Keys: primary, candidate, foreign, super, composite, alternate, unique</li>
          <li>Integrity constraints: domain, entity, referential, key constraints (NULL, NOT NULL, CHECK)</li>
          <li>SQL data types: string (CHAR, VARCHAR), numeric (INT, FLOAT, DECIMAL), date/time</li>
          <li>DDL: CREATE, ALTER, DROP, TRUNCATE — DML: SELECT, INSERT, UPDATE, DELETE</li>
          <li>Querying: WHERE, ORDER BY, GROUP BY, HAVING, LIMIT</li>
          <li>Joins: inner, outer (left/right/full), natural, cross</li>
          <li>Relational algebra: σ, π, ∪, ∩, −, ×, ⋈</li>
          <li>Subqueries, views — creating, using, and destroying</li>
          <li>Foreign key violation handling: CASCADE, SET NULL, SET DEFAULT, NO ACTION</li>
          <li>Transactions and constraints: DEFERRED vs IMMEDIATE constraint checking</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module IV: <span className="section-subheading">Normalization / Schema Refinement</span>
        </h3>
        <ul className="section-list">
          <li>Anomalies: insertion, deletion, update</li>
          <li>Functional dependencies: full, partial, transitive; Armstrong's axioms</li>
          <li>Normal forms: 1NF, 2NF, 3NF, BCNF</li>
          <li>Decomposition: lossless join and dependency preservation</li>
          <li>Multi-valued dependencies and 4NF</li>
          <li>Join dependencies and 5NF (Project-Join Normal Form)</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          Module V: <span className="section-subheading">Transactions and Concurrency Control</span>
        </h3>
        <ul className="section-list">
          <li>Transaction concept and ACID properties</li>
          <li>Transaction states: active → partially committed → committed / failed → aborted → terminated</li>
          <li>Schedules: serial, non-serial, serializable (conflict and view)</li>
          <li>Recoverability: irrecoverable, recoverable, cascadeless, strict schedules</li>
          <li>Isolation levels: read uncommitted, read committed, repeatable read, serializable</li>
          <li>Lock-based protocols: simplistic, pre-claiming, 2PL, strict-2PL</li>
          <li>Timestamp-based protocols: basic TO, Thomas's write rule</li>
          <li>Validation-based protocol; multiple granularity and intention locks</li>
          <li>Recovery: log-based (deferred/immediate), checkpoints, ARIES algorithm</li>
          <li>Database backup: full, incremental, differential</li>
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
        handle concurrency and recovery — providing a strong foundation for
        real-world database development and system design.
      </p>
    </div>
  );
};