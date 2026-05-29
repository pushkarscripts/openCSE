export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Normalization</span> is the process of
        organizing a database to reduce redundancy and improve data integrity by
        breaking large tables into smaller, well-structured ones.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Why Normalize?</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Insertion Anomaly:</span> cannot add data without unrelated data. Example: can&apos;t add a course unless a student is enrolled.</li>
          <li><span className="font-semibold">Deletion Anomaly:</span> deleting one record accidentally removes other useful data.</li>
          <li><span className="font-semibold">Update Anomaly:</span> updating one value requires changing it in many places.</li>
          <li>Normalization solves all three by removing redundant data dependencies.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Functional Dependency</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">Functional Dependency (FD)</span> means one attribute determines another. Written as A → B.</li>
          <li>Example: StudentID → StudentName (knowing the ID tells you the name).</li>
          <li><span className="font-semibold">Partial Dependency:</span> a non-key attribute depends on part of a composite primary key.</li>
          <li><span className="font-semibold">Transitive Dependency:</span> a non-key attribute depends on another non-key attribute.</li>
        </ul>
        <div className="tip-block">
          <p>Exam Tip: FDs are the foundation of all normal forms. Master them first.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">1NF — First Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>A table is in 1NF if every column contains <span className="font-semibold">atomic (indivisible) values</span>.</li>
          <li>No repeating groups or arrays in a single column.</li>
          <li>Each row must be unique (has a primary key).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Violation → Fix</p>
          <pre>{`❌ Not 1NF:
StudentID | Courses
101       | DBMS, OS, CN

✅ 1NF:
StudentID | Course
101       | DBMS
101       | OS
101       | CN`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">2NF — Second Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>Must be in 1NF.</li>
          <li>No <span className="font-semibold">partial dependencies</span> — every non-key attribute must depend on the <span className="font-semibold">entire</span> primary key.</li>
          <li>Applies only when the primary key is composite.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Violation → Fix</p>
          <pre>{`❌ Not 2NF (PK = StudentID + CourseID):
StudentID | CourseID | StudentName | Grade
101       | CS401    | Zubair      | A

StudentName depends only on StudentID (partial dependency).

✅ 2NF: Split into two tables:
Students(StudentID, StudentName)
Enrollments(StudentID, CourseID, Grade)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">3NF — Third Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>Must be in 2NF.</li>
          <li>No <span className="font-semibold">transitive dependencies</span> — non-key attributes must not depend on other non-key attributes.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Violation → Fix</p>
          <pre>{`❌ Not 3NF:
StudentID | DeptID | DeptName
101       | D01    | CSE

DeptName depends on DeptID (not on StudentID) — transitive.

✅ 3NF: Split:
Students(StudentID, DeptID)
Departments(DeptID, DeptName)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">BCNF — Boyce-Codd Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>A stricter version of 3NF.</li>
          <li>For every FD A → B, A must be a <span className="font-semibold">superkey</span>.</li>
          <li>Handles cases where 3NF still has anomalies due to overlapping candidate keys.</li>
        </ul>
        <div className="tip-block">
          <p>If a table is in BCNF, it is also in 3NF — but not vice versa. BCNF is stronger.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Decomposition</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Lossless Join:</span> splitting a table and rejoining gives back the original data exactly.</li>
          <li><span className="font-semibold">Dependency Preservation:</span> all original FDs can still be checked in the decomposed tables.</li>
          <li>BCNF decomposition always gives lossless joins but may lose dependency preservation.</li>
          <li>3NF decomposition preserves both lossless join and dependency preservation.</li>
        </ul>
      </section>
    </div>
  );
};