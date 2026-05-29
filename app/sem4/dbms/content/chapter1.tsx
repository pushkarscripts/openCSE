export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter covers the fundamental concepts of database systems — what
        they are, why they exist, how they compare to file systems, and the
        basic architecture of a DBMS.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">What is a Database?</span>
        </h3>
        <ul className="section-list">
          <li>A database is an organized collection of related data stored and accessed electronically.</li>
          <li>Data represents real-world information — student records, bank transactions, product inventory.</li>
          <li>A DBMS (Database Management System) is software that manages and controls access to the database.</li>
          <li>Examples of DBMS: MySQL, PostgreSQL, Oracle, MongoDB.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Real-world Example</p>
          <pre>{`University DB
Tables: Students, Courses, Enrollments, Professors
Student Zubair (ID: 101) is enrolled in DBMS (CS401)
taught by Prof. Sharma.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">File System vs DBMS</span>
        </h3>
        <ul className="section-list">
          <li>Before DBMS, data was stored in flat files managed by the OS.</li>
          <li><span className="font-semibold">Data Redundancy:</span> the same data repeated in multiple files.</li>
          <li><span className="font-semibold">Data Inconsistency:</span> updating one file does not update others.</li>
          <li><span className="font-semibold">Data Isolation:</span> data scattered in different formats, hard to access together.</li>
          <li>DBMS solves all three by centralizing data and enforcing rules.</li>
        </ul>
        <div className="tip-block">
          <p>Exam Tip: Always mention the 3 main problems of file systems — redundancy, inconsistency, and data isolation — when comparing with DBMS.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Advantages of DBMS</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Reduced Redundancy:</span> data is stored once and shared.</li>
          <li><span className="font-semibold">Data Consistency:</span> changes reflect everywhere automatically.</li>
          <li><span className="font-semibold">Data Integrity:</span> constraints ensure data accuracy.</li>
          <li><span className="font-semibold">Data Security:</span> access control limits who can read or modify data.</li>
          <li><span className="font-semibold">Concurrent Access:</span> multiple users can safely access data at the same time.</li>
          <li><span className="font-semibold">Backup and Recovery:</span> DBMS provides tools to recover from failures.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Databases</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Relational:</span> data in tables with rows and columns. Example: MySQL, PostgreSQL.</li>
          <li><span className="font-semibold">Hierarchical:</span> tree-like structure. Example: IBM IMS.</li>
          <li><span className="font-semibold">Network:</span> graph structure with multiple parent-child relationships.</li>
          <li><span className="font-semibold">Object-Oriented:</span> stores objects like in OOP. Example: db4o.</li>
          <li><span className="font-semibold">NoSQL:</span> designed for unstructured data at scale. Example: MongoDB, Redis.</li>
        </ul>
        <div className="tip-block">
          <p>Most university syllabi focus on relational databases. NoSQL is mentioned for awareness.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Database Users</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">End Users:</span> interact with the database through applications.</li>
          <li><span className="font-semibold">Application Programmers:</span> write programs to access the database.</li>
          <li><span className="font-semibold">DBA (Database Administrator):</span> manages performance, security, and backups.</li>
          <li><span className="font-semibold">Data Analysts:</span> query the database to generate reports and insights.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Who does what?</p>
          <pre>{`End User   → Uses a form to register for a course
App Dev    → Writes INSERT INTO enrollments...
DBA        → Creates tables, grants permissions, monitors performance`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Three-Schema Architecture</span>
        </h3>
        <ul className="section-list">
          <li>DBMS uses a 3-level architecture to separate storage from how users see data.</li>
          <li><span className="font-semibold">Internal Level:</span> how data is physically stored on disk.</li>
          <li><span className="font-semibold">Conceptual Level:</span> the logical structure — tables, relationships, constraints.</li>
          <li><span className="font-semibold">External Level:</span> what individual users or applications see (views).</li>
          <li>This separation is called <span className="font-semibold">Data Independence</span>.</li>
        </ul>
        <div className="tip-block">
          <p>Physical independence = change storage without changing logic. Logical independence = change logic without changing user views.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">DBMS Languages</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">DDL</span> (Data Definition Language): define structure. Example: CREATE, ALTER, DROP.</li>
          <li><span className="font-semibold">DML</span> (Data Manipulation Language): manipulate data. Example: INSERT, UPDATE, DELETE, SELECT.</li>
          <li><span className="font-semibold">DCL</span> (Data Control Language): access control. Example: GRANT, REVOKE.</li>
          <li><span className="font-semibold">TCL</span> (Transaction Control Language): manage transactions. Example: COMMIT, ROLLBACK.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Quick Examples</p>
          <pre>{`DDL: CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
DML: INSERT INTO students VALUES (1, 'Zubair');
DCL: GRANT SELECT ON students TO user1;
TCL: COMMIT;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">DBMS Architecture: 1-Tier, 2-Tier, 3-Tier</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">1-Tier:</span> database and application on the same machine. Used for personal/local databases.</li>
          <li><span className="font-semibold">2-Tier:</span> client communicates directly with the database server.</li>
          <li><span className="font-semibold">3-Tier:</span> a middle application server sits between client and database. Used in web apps.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">3-Tier Example</p>
          <pre>{`Client (Browser)
     ↓  HTTP request
App Server (Node.js / Spring Boot)
     ↓  SQL query
Database Server (MySQL / PostgreSQL)`}</pre>
        </div>
      </section>
    </div>
  );
};