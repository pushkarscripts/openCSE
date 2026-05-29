export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        This chapter covers the fundamental concepts of database systems — what
        they are, why they exist, how they evolved historically, how they
        compare to file systems, the structure of a DBMS, and who uses it.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">What is a Database?</span>
        </h3>
        <ul className="section-list">
          <li>
            A database is an organized collection of related data that describes
            the activities of one or more organizations.
          </li>
          <li>
            It stores both <span className="font-semibold">entities</span>{" "}
            (students, courses, faculty) and{" "}
            <span className="font-semibold">relationships</span> between them
            (enrollment, teaching).
          </li>
          <li>
            A <span className="font-semibold">DBMS</span> (Database Management
            System) is software that manages and controls access to the
            database.
          </li>
          <li>Examples: MySQL, PostgreSQL, Oracle, MongoDB, MS SQL Server.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Real-world Example</p>
          <pre>{`University DB
Tables: Students, Courses, Enrollments, Faculty
Student Zubair (ID: 101) is enrolled in DBMS (CS401)
taught by Prof. Sharma in Room 301.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Brief History of DBMS</span>
        </h3>
        <ul className="section-list">
          <li>
            Early computers used flat files and manual records — difficult to
            search or update.
          </li>
          <li>
            Late 1960s: IBM developed <span className="font-semibold">IMS</span>{" "}
            (Information Management System), based on the hierarchical model.
          </li>
          <li>
            1970: <span className="font-semibold">Edgar Codd</span> at IBM
            proposed the{" "}
            <span className="font-semibold">relational data model</span> — still
            the dominant paradigm.
          </li>
          <li>
            1980s: Relational model consolidated; database systems gained
            widespread use.
          </li>
          <li>
            Late 1980s: SQL standardized; SQL:1999 adopted by ANSI and ISO.
          </li>
          <li>
            Modern era: Data warehouses, NoSQL systems, and cloud databases
            emerged.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">File System vs DBMS</span>
        </h3>
        <img
          src="/sem4/dbms/filesystem_vs_dbms.png"
          alt="File system vs DBMS"
          className="max-w-4xl mx-auto my-4"
        />
        <div className="tip-block">
          <p>
            Exam Tip: Always mention the 3 core problems of file systems —
            redundancy, inconsistency, and data isolation — when comparing with
            DBMS.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Advantages of DBMS</span>
        </h3>
        <ul className="section-list">
          <li>
            <span className="font-semibold">Data Independence:</span> abstract
            view of data hides storage details from users.
          </li>
          <li>
            <span className="font-semibold">Efficient Data Access:</span>{" "}
            sophisticated techniques for storing and retrieving data.
          </li>
          <li>
            <span className="font-semibold">Data Integrity and Security:</span>{" "}
            constraints and access controls ensure accuracy and privacy.
          </li>
          <li>
            <span className="font-semibold">
              Concurrent Access &amp; Crash Recovery:
            </span>{" "}
            schedules access safely; protects from failures.
          </li>
          <li>
            <span className="font-semibold">
              Reduced Application Development Time:
            </span>{" "}
            high-level interface speeds up development.
          </li>
          <li>
            <span className="font-semibold">
              Centralized Data Administration:
            </span>{" "}
            DBA manages data shared by multiple users.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Data Models</span>
        </h3>
        <ul className="section-list">
          <li>
            A <span className="font-semibold">data model</span> is a collection
            of high-level constructs that hide low-level storage details.
          </li>
          <li>
            <span className="font-semibold">Relational Model:</span> data in
            tables (relations) with rows and columns. Foundation of SQL.
            Example: MySQL, PostgreSQL.
          </li>
          <li>
            <span className="font-semibold">
              Entity-Relationship (ER) Model:
            </span>{" "}
            high-level visual model — entities, attributes, and relationships.
            Used for database design.
          </li>
          <li>
            <span className="font-semibold">Object-Oriented Model:</span> data
            and relationships stored in objects (like OOP). Can store audio,
            video, images.
          </li>
          <li>
            <span className="font-semibold">Object-Relational Model:</span>{" "}
            hybrid of relational and OO — supports complex data types.
          </li>
          <li>
            <span className="font-semibold">Hierarchical Model:</span> first
            DBMS model; tree structure with one parent per child. Example: IBM
            IMS.
          </li>
          <li>
            <span className="font-semibold">Network Model:</span> extension of
            hierarchical — a record can have multiple parents; uses a graph.
            More flexible than hierarchical.
          </li>
        </ul>
        <div className="tip-block">
          <p>
            Most university syllabi focus on the relational model. Hierarchical
            and network models are historical context.
          </p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            Three-Schema Architecture (Levels of Data Abstraction)
          </span>
        </h3>
        <ul className="section-list">
          <li>
            DBMS separates how data is stored from how users see it via 3
            levels.
          </li>
          <li>
            <span className="font-semibold">Physical Level (Internal):</span>{" "}
            how data is physically stored on disk — file structures, indexes.
          </li>
          <li>
            <span className="font-semibold">Logical Level (Conceptual):</span>{" "}
            what data is stored and the relationships — tables, constraints.
            Programmers work here.
          </li>
          <li>
            <span className="font-semibold">View Level (External):</span> what
            individual users or applications see — customized views for
            different user groups.
          </li>
          <li>
            This separation is called{" "}
            <span className="font-semibold">Data Independence</span>.
          </li>
        </ul>
        <div className="tip-block">
          <p>
            Physical independence = change storage without changing logic.
            Logical independence = change logic without changing user views.
          </p>
        </div>
        <img
          src="/sem4/dbms/multi-level%20arch%20DBMS.png"
          alt="Multi-level DBMS Architecture"
          className="max-w-4xl mx-auto my-4"
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Structure of DBMS</span>
        </h3>
        <ul className="section-list">
          <li>
            A DBMS is divided into two main components:{" "}
            <span className="font-semibold">Query Processor</span> and{" "}
            <span className="font-semibold">Storage Manager</span>.
          </li>
          <li>
            <span className="font-semibold">Query Processor components:</span>{" "}
            DML Compiler (compiles DML to machine instructions), DDL Interpreter
            (processes DDL into metadata tables), Embedded DML Pre-compiler,
            Query Optimizer (executes optimized plan).
          </li>
          <li>
            <span className="font-semibold">Storage Manager components:</span>{" "}
            Authorization Manager (role-based access), Integrity Manager (checks
            constraints), Transaction Manager (concurrency control), File
            Manager (manages file space), Buffer Manager (cache and memory
            transfer).
          </li>
          <li>
            <span className="font-semibold">Disk Storage:</span> Data Files
            (actual data), Data Dictionary (metadata/schema info), Indices
            (faster retrieval).
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Database Users</span>
        </h3>
        <ul className="section-list">
          <li>
            <span className="font-semibold">Naïve / Parametric Users:</span> no
            database knowledge; use pre-built applications. Example: bank
            tellers, ticket booking users.
          </li>
          <li>
            <span className="font-semibold">Sophisticated Users:</span>{" "}
            engineers, scientists, analysts — interact with DB but don't write
            programs.
          </li>
          <li>
            <span className="font-semibold">Application Programmers:</span>{" "}
            write programs using DML to access the database.
          </li>
          <li>
            <span className="font-semibold">System Analysts:</span> analyze
            requirements of end users.
          </li>
          <li>
            <span className="font-semibold">Database Designers:</span> design
            the appropriate schema structure.
          </li>
          <li>
            <span className="font-semibold">DBA (Database Administrator):</span>{" "}
            superuser — defines schema, security, backup, recovery, monitors
            performance.
          </li>
          <li>
            <span className="font-semibold">Casual / Temporary Users:</span>{" "}
            access the database infrequently.
          </li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Who does what?</p>
          <pre>{`Naïve User      → Uses a form to register for a course
App Programmer  → Writes INSERT INTO enrollments...
DBA             → Creates tables, grants permissions,
                  monitors performance, handles backups`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Database Design Steps</span>
        </h3>
        <ul className="section-list">
          <li>
            <span className="font-semibold">1. Requirements Analysis:</span>{" "}
            understand what data to store, what applications to build, what
            operations are frequent.
          </li>
          <li>
            <span className="font-semibold">2. Conceptual Design:</span>{" "}
            high-level ER diagram of data and constraints.
          </li>
          <li>
            <span className="font-semibold">3. Logical Design:</span> convert ER
            diagram to relational schema in chosen DBMS.
          </li>
          <li>
            <span className="font-semibold">4. Schema Refinement:</span>{" "}
            normalize relations to eliminate redundancy and anomalies.
          </li>
          <li>
            <span className="font-semibold">5. Physical Design:</span> tune for
            performance — indexes, partitions, storage structures.
          </li>
          <li>
            <span className="font-semibold">
              6. Application &amp; Security Design:
            </span>{" "}
            design application code, access controls, and security policies.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">
            DBMS Architecture: 1-Tier, 2-Tier, 3-Tier
          </span>
        </h3>
        <ul className="section-list">
          <li>
            <span className="font-semibold">1-Tier:</span> database and
            application on the same machine. Used for personal/local databases.
          </li>
          <li>
            <span className="font-semibold">2-Tier:</span> client communicates
            directly with the database server.
          </li>
          <li>
            <span className="font-semibold">3-Tier:</span> middle application
            server sits between client and database. Standard for web apps.
          </li>
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
