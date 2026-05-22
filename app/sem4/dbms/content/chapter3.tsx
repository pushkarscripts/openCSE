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
          <li>Each row is called a <span className="font-semibold">tuple</span> and represents one record.</li>
          <li>Each column is called an <span className="font-semibold">attribute</span> and represents a property.</li>
          <li>The set of allowed values for an attribute is called its <span className="font-semibold">domain</span>.</li>
          <li>The number of tuples in a table is called <span className="font-semibold">cardinality</span>.</li>
          <li>The number of attributes in a table is called <span className="font-semibold">degree</span>.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Example Table: Students</p>
          <pre>{`| ID  | Name    | Age | Dept |
|-----|---------|-----|------|
| 101 | Zubair  | 20  | CSE  |
| 102 | Krishna | 21  | IT   |
| 103 | Pushkar | 22  | CSE  |

Degree = 4 (columns), Cardinality = 3 (rows)`}</pre>
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
          <li><span className="font-semibold">Primary Key:</span> the chosen candidate key used to identify tuples. Cannot be NULL.</li>
          <li><span className="font-semibold">Foreign Key:</span> an attribute that references the primary key of another table. Used to link tables.</li>
          <li><span className="font-semibold">Composite Key:</span> a primary key made of more than one attribute.</li>
        </ul>
        <div className="tip-block">
          <p>Exam Tip: Every primary key is a candidate key, and every candidate key is a super key — but not the other way around.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Relational Algebra</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Select (σ):</span> filters rows based on a condition. Example: σ(Dept=&apos;CSE&apos;)(Students).</li>
          <li><span className="font-semibold">Project (π):</span> selects specific columns. Example: π(Name, Age)(Students).</li>
          <li><span className="font-semibold">Union (∪):</span> combines tuples from two relations (removes duplicates).</li>
          <li><span className="font-semibold">Intersection (∩):</span> returns tuples common to both relations.</li>
          <li><span className="font-semibold">Difference (−):</span> returns tuples in one relation but not the other.</li>
          <li><span className="font-semibold">Cartesian Product (×):</span> combines every tuple of one relation with every tuple of another.</li>
          <li><span className="font-semibold">Join (⋈):</span> combines related tuples from two relations based on a condition.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">SQL Basics</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">DDL:</span> CREATE, ALTER, DROP, TRUNCATE.</li>
          <li><span className="font-semibold">DML:</span> SELECT, INSERT, UPDATE, DELETE.</li>
          <li><span className="font-semibold">DCL:</span> GRANT, REVOKE.</li>
          <li><span className="font-semibold">TCL:</span> COMMIT, ROLLBACK, SAVEPOINT.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Basic SQL Examples</p>
          <pre>{`-- Create table
CREATE TABLE students (
  id   INT PRIMARY KEY,
  name VARCHAR(50),
  dept VARCHAR(20)
);

-- Insert data
INSERT INTO students VALUES (101, 'Zubair', 'CSE');

-- Query data
SELECT name, dept FROM students WHERE dept = 'CSE';

-- Update data
UPDATE students SET dept = 'IT' WHERE id = 101;

-- Delete data
DELETE FROM students WHERE id = 101;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Joins</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Inner Join:</span> returns rows that have matching values in both tables.</li>
          <li><span className="font-semibold">Left Outer Join:</span> returns all rows from the left table and matched rows from the right.</li>
          <li><span className="font-semibold">Right Outer Join:</span> returns all rows from the right table and matched rows from the left.</li>
          <li><span className="font-semibold">Full Outer Join:</span> returns all rows when there is a match in either table.</li>
          <li><span className="font-semibold">Natural Join:</span> automatically joins on columns with the same name.</li>
          <li><span className="font-semibold">Cross Join:</span> returns the Cartesian product of both tables.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Join Example</p>
          <pre>{`-- Inner Join: students with their enrolled courses
SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Aggregate Functions and GROUP BY</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">COUNT():</span> counts number of rows.</li>
          <li><span className="font-semibold">SUM():</span> adds up values in a column.</li>
          <li><span className="font-semibold">AVG():</span> calculates the average.</li>
          <li><span className="font-semibold">MAX() / MIN():</span> finds the highest or lowest value.</li>
          <li><span className="font-semibold">GROUP BY:</span> groups rows with the same value for aggregation.</li>
          <li><span className="font-semibold">HAVING:</span> filters groups (like WHERE but for aggregated results).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Aggregate Example</p>
          <pre>{`-- Count students per department
SELECT dept, COUNT(*) AS total
FROM students
GROUP BY dept
HAVING COUNT(*) > 1;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Subqueries and Views</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">subquery</span> is a query nested inside another query.</li>
          <li>Subqueries can be used in SELECT, FROM, or WHERE clauses.</li>
          <li>A <span className="font-semibold">view</span> is a virtual table based on the result of a SELECT query.</li>
          <li>Views simplify complex queries and add a layer of security.</li>
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
SELECT * FROM cse_students;`}</pre>
        </div>
      </section>
    </div>
  );
};