export const Ch3Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        The <span className="font-semibold">Relational Model</span> organizes data
        into tables (relations) and is the foundation of most modern databases.
        <span className="font-semibold"> SQL</span> (Structured Query Language) is
        the standard language used to interact with relational databases.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Relational Model Basics</span>
        </h3>
        <ul className="section-list">
          <li>Data is organized in <span className="font-semibold">tables (relations)</span> with rows and columns.</li>
          <li>Each row is a <span className="font-semibold">tuple</span> (record). Each column is an <span className="font-semibold">attribute</span> (field).</li>
          <li>The set of allowed values for an attribute is its <span className="font-semibold">domain</span>.</li>
          <li><span className="font-semibold">Cardinality:</span> number of rows (tuples) in a table.</li>
          <li><span className="font-semibold">Degree (Arity):</span> number of columns (attributes) in a table.</li>
          <li><span className="font-semibold">Relation Schema:</span> specifies the relation's name, attribute names, and types. Example: Students(sid: string, name: string, age: integer, gpa: real).</li>
          <li><span className="font-semibold">Relation Instance:</span> the actual data (set of tuples) at a given moment. No duplicate tuples.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Example: Students Relation</p>
          <pre>{`| sid   | name  | login      | age | gpa |
|-------|-------|------------|-----|-----|
| 53666 | Jones | jones@cs   | 18  | 3.4 |
| 53688 | Smith | smith@ee   | 18  | 3.2 |
| 53650 | Smith | smith@math | 19  | 3.8 |

Degree = 5 (columns), Cardinality = 3 (rows)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Keys</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Super Key:</span> any set of attributes that uniquely identifies a tuple.</li>
          <li><span className="font-semibold">Candidate Key:</span> minimal super key — no unnecessary attributes.</li>
          <li><span className="font-semibold">Primary Key:</span> the chosen candidate key. Cannot be NULL. Shown underlined in schema.</li>
          <li><span className="font-semibold">Alternate Key:</span> candidate keys not chosen as primary key.</li>
          <li><span className="font-semibold">Foreign Key:</span> references the primary key of another table. Used to link tables and enforce referential integrity.</li>
          <li><span className="font-semibold">Composite Key:</span> primary key made of two or more attributes.</li>
          <li><span className="font-semibold">Unique Key:</span> like primary key but allows NULL values.</li>
        </ul>
        <div className="tip-block">
          <p>Hierarchy: Primary Key ⊂ Candidate Key ⊂ Super Key. Every PK is a CK, every CK is a super key — not vice versa.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Integrity Constraints</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Domain Constraint:</span> each attribute value must belong to its defined domain (data type and size). Example: age must be an integer, name must be VARCHAR(50).</li>
          <li><span className="font-semibold">Entity Integrity:</span> primary key cannot be NULL. Every tuple must be uniquely identifiable.</li>
          <li><span className="font-semibold">Referential Integrity:</span> foreign key value must match an existing primary key in the referenced table (or be NULL).</li>
          <li><span className="font-semibold">Key Constraints:</span> NOT NULL (attribute must have a value), CHECK (value must satisfy a condition), UNIQUE (no duplicates).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Constraint Examples</p>
          <pre>{`CREATE TABLE Students (
  sid   INT PRIMARY KEY,         -- entity integrity
  name  VARCHAR(50) NOT NULL,    -- key constraint
  age   INT CHECK (age > 0),     -- domain + check
  gpa   FLOAT DEFAULT 0.0
);

CREATE TABLE Enrolled (
  studid INT,
  cid    VARCHAR(20),
  grade  VARCHAR(5),
  PRIMARY KEY (studid, cid),
  FOREIGN KEY (studid) REFERENCES Students(sid)
  ON DELETE CASCADE ON UPDATE NO ACTION
);`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Foreign Key Violation Handling</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">NO ACTION (default):</span> reject the delete/update that would violate referential integrity.</li>
          <li><span className="font-semibold">CASCADE:</span> when parent row is deleted/updated, automatically delete/update all child rows that reference it.</li>
          <li><span className="font-semibold">SET NULL:</span> set the foreign key in child rows to NULL when parent is deleted.</li>
          <li><span className="font-semibold">SET DEFAULT:</span> set foreign key to a default value when parent is deleted.</li>
        </ul>
        <div className="tip-block">
          <p>If a Students row is deleted, CASCADE deletes all Enrolled rows for that student. SET NULL would set studid to NULL — only valid if studid is not part of the primary key.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">SQL Data Types</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">String:</span> CHAR(n) — fixed length; VARCHAR(n) — variable length up to n chars; BINARY(n) — binary byte strings.</li>
          <li><span className="font-semibold">Numeric:</span> TINYINT, SMALLINT, INT, BIGINT, FLOAT(p), DOUBLE, DECIMAL(size, d).</li>
          <li><span className="font-semibold">Date/Time:</span> DATE (YYYY-MM-DD), DATETIME (YYYY-MM-DD hh:mm:ss), TIMESTAMP, TIME, YEAR.</li>
          <li><span className="font-semibold">Boolean:</span> BOOL / BOOLEAN — 0 is false, nonzero is true.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">SQL Commands</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">DDL</span> (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE, RENAME, COMMENT.</li>
          <li><span className="font-semibold">DML</span> (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE, MERGE.</li>
          <li><span className="font-semibold">DCL</span> (Data Control Language): GRANT (give access), REVOKE (remove access).</li>
          <li><span className="font-semibold">TCL</span> (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Basic SQL Examples</p>
          <pre>{`-- DDL
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50), dept VARCHAR(20));
ALTER TABLE students ADD COLUMN gpa FLOAT;
DROP TABLE students;

-- DML
INSERT INTO students VALUES (101, 'Zubair', 'CSE');
SELECT name, dept FROM students WHERE dept = 'CSE';
UPDATE students SET dept = 'IT' WHERE id = 101;
DELETE FROM students WHERE id = 101;

-- DCL
GRANT SELECT ON students TO user1;
REVOKE SELECT ON students FROM user1;

-- TCL
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Querying — SELECT, WHERE, ORDER BY</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">query</span> is a question about the data — the answer is a new relation (result set).</li>
          <li><span className="font-semibold">Basic structure:</span> SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT.</li>
          <li><span className="font-semibold">WHERE:</span> filters rows based on a condition.</li>
          <li><span className="font-semibold">ORDER BY:</span> sorts results ASC (default) or DESC.</li>
          <li><span className="font-semibold">DISTINCT:</span> removes duplicate rows from result.</li>
          <li><span className="font-semibold">Aliases:</span> rename tables or columns using AS.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Query Example</p>
          <pre>{`-- Students and their enrolled courses
SELECT S.name, E.cid
FROM Students AS S, Enrolled AS E
WHERE S.sid = E.studid;

-- Result:
-- Smith | Topology112
-- Jones | History105`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Joins</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Inner Join:</span> returns rows with matching values in both tables.</li>
          <li><span className="font-semibold">Left Outer Join:</span> all rows from left table + matched rows from right.</li>
          <li><span className="font-semibold">Right Outer Join:</span> all rows from right table + matched rows from left.</li>
          <li><span className="font-semibold">Full Outer Join:</span> all rows from both tables; NULLs where no match.</li>
          <li><span className="font-semibold">Natural Join:</span> automatically joins on columns with the same name.</li>
          <li><span className="font-semibold">Cross Join:</span> Cartesian product — every row of A × every row of B.</li>
        </ul>
        <img src="/sem4/dbms/joins_dbms.png" alt="Types of joins" className="max-w-4xl mx-auto my-4" />
        <div className="example-block">
          <p className="font-semibold mb-1">Join Example</p>
          <pre>{`SELECT s.name, c.title
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c     ON e.course_id = c.id;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Aggregate Functions and GROUP BY</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">COUNT( ), SUM( ), AVG( ), MAX( ), MIN( )</span> — operate on a set of rows.</li>
          <li><span className="font-semibold">GROUP BY:</span> groups rows with the same value for aggregation.</li>
          <li><span className="font-semibold">HAVING:</span> filters groups (like WHERE but after aggregation).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Aggregate Example</p>
          <pre>{`SELECT dept, COUNT(*) AS total, AVG(gpa) AS avg_gpa
FROM students
GROUP BY dept
HAVING COUNT(*) > 1
ORDER BY avg_gpa DESC;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Subqueries and Views</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">subquery</span> is a query nested inside another. Can appear in SELECT, FROM, or WHERE.</li>
          <li>A <span className="font-semibold">view</span> is a virtual table based on a SELECT query. Simplifies complex queries and adds security by hiding sensitive columns.</li>
          <li>Views can be created with CREATE VIEW and dropped with DROP VIEW.</li>
          <li>Tables can be dropped with DROP TABLE or modified with ALTER TABLE.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Subquery and View Example</p>
          <pre>{`-- Subquery: students older than average age
SELECT name FROM students
WHERE age > (SELECT AVG(age) FROM students);

-- Create a view
CREATE VIEW cse_students AS
SELECT name, age FROM students WHERE dept = 'CSE';

-- Use the view
SELECT * FROM cse_students;

-- Drop table / view
DROP VIEW cse_students;
DROP TABLE students;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Relational Algebra</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Select (σ):</span> filters rows. Example: σ(dept='CSE')(Students).</li>
          <li><span className="font-semibold">Project (π):</span> selects columns. Example: π(name, age)(Students).</li>
          <li><span className="font-semibold">Union (∪):</span> combines rows from two relations, removes duplicates. Schemas must be compatible.</li>
          <li><span className="font-semibold">Intersection (∩):</span> rows common to both relations.</li>
          <li><span className="font-semibold">Difference (−):</span> rows in one but not the other.</li>
          <li><span className="font-semibold">Cartesian Product (×):</span> every row of A with every row of B.</li>
          <li><span className="font-semibold">Join (⋈):</span> combines related rows from two relations on a condition.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Transactions and Constraint Checking</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">transaction</span> is a program that runs against a database, containing one or more SQL statements.</li>
          <li>By default, constraints are checked <span className="font-semibold">immediately</span> after each SQL statement.</li>
          <li><span className="font-semibold">DEFERRED mode:</span> constraint is checked only at COMMIT time. Useful for circular foreign key references where neither table can be inserted first.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Deferred Constraint Example</p>
          <pre>{`-- Students references Courses (honors FK)
-- Courses references Students (grader FK)
-- Can't insert either first with IMMEDIATE checking!

SET CONSTRAINT honors_fk DEFERRED;
INSERT INTO Students VALUES (...); -- temporarily inconsistent
INSERT INTO Courses VALUES (...);  -- restores consistency
COMMIT; -- both FKs checked here ✓`}</pre>
        </div>
      </section>
    </div>
  );
};