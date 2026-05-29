export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Normalization</span> (also called Schema Refinement) is the
        process of organizing a database to reduce redundancy and improve data integrity by
        decomposing large tables into smaller, well-structured ones using normal forms.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Problems Caused by Redundancy — Anomalies</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Insertion Anomaly:</span> cannot insert new data without adding unrelated data. Example: can't add a new course unless a student is enrolled.</li>
          <li><span className="font-semibold">Update Anomaly:</span> same data stored in multiple rows — updating one row leaves others stale and inconsistent.</li>
          <li><span className="font-semibold">Deletion Anomaly:</span> deleting one record accidentally removes other critical data. Example: deleting a project removes the only record of an employee.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Update Anomaly Example</p>
          <pre>{`EmpID | EmpName | DeptID | DeptName
101   | Alice   | D1     | Sales
102   | Bob     | D1     | Sales   ← same dept stored twice

If D1 renamed to "Global Sales" but only row 1 updated:
101 | Alice | D1 | Global Sales  ← inconsistent!
102 | Bob   | D1 | Sales

Fix: Split into Employee(EmpID, EmpName, DeptID)
     and  Department(DeptID, DeptName)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Keys — Quick Reference</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Super Key:</span> any set of attributes that uniquely identifies a tuple.</li>
          <li><span className="font-semibold">Candidate Key:</span> minimal super key — no unnecessary attributes.</li>
          <li><span className="font-semibold">Primary Key:</span> chosen candidate key. Cannot be NULL.</li>
          <li><span className="font-semibold">Alternate Key:</span> candidate keys not chosen as primary key.</li>
          <li><span className="font-semibold">Foreign Key:</span> references the primary key of another table. Links tables.</li>
          <li><span className="font-semibold">Composite Key:</span> primary key made of two or more attributes.</li>
          <li><span className="font-semibold">Unique Key:</span> like a primary key but allows NULL values.</li>
        </ul>
        <div className="tip-block">
          <p>Hierarchy: Primary Key ⊂ Candidate Key ⊂ Super Key. Every PK is a CK, every CK is a super key — but not vice versa.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Functional Dependency (FD)</span>
        </h3>
        <ul className="section-list">
          <li>Written as <span className="font-semibold">X → Y</span>: knowing X uniquely determines Y. "X functionally determines Y."</li>
          <li><span className="font-semibold">Full FD:</span> Y depends on the entire composite key X, not any subset.</li>
          <li><span className="font-semibold">Partial FD:</span> Y depends on only part of a composite key. Violates 2NF.</li>
          <li><span className="font-semibold">Transitive FD:</span> X → B and B → C, so X → C indirectly. Violates 3NF.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Types of FD</p>
          <pre>{`Full FD:       {AdmissionNo, CourseID} → Fee
               (Fee needs both — full dependency)

Partial FD:    {AdmissionNo, CourseID} → CourseName
               but CourseID alone → CourseName (partial!)

Transitive FD: EmpID → DeptID → DeptName
               ∴ EmpID → DeptName (transitive)`}</pre>
        </div>
        <div className="tip-block">
          <p>Armstrong's Axioms — Reflexivity: If Y⊆X then X→Y. Augmentation: X→Y implies XZ→YZ. Transitivity: X→Y and Y→Z implies X→Z.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">1NF — First Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>Every attribute must contain <span className="font-semibold">atomic (indivisible) values</span>.</li>
          <li>No repeating groups, arrays, or multi-valued cells in a single column.</li>
          <li>Each row must be uniquely identifiable (has a primary key).</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Violation → Fix</p>
          <pre>{`❌ Not 1NF:
SID | NAME  | CONTACT NO               | COURSE
1   | ROHAN | 111-111-1111,123-456-7890 | OOPS

✅ 1NF — split multi-valued contact into two columns:
SID | NAME  | CONTACT_NO1  | CONTACT_NO2  | COURSE
1   | ROHAN | 111-111-1111 | 123-456-7890 | OOPS
2   | RAVI  | 222-222-3222 | NULL         | OOPS`}</pre>
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
          <li>Only applies when the primary key is composite.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Violation → Fix</p>
          <pre>{`❌ Not 2NF (PK = SID + COURSE):
SID | NAME  | CONTACT_NO1  | COURSE | MARKS | GRADE
1   | ROHAN | 111-111-1111 | OOPS   | 80    | B+

NAME and CONTACT_NO1 depend only on SID — partial dependency!

✅ 2NF: Decompose into two tables:
Student(SID, NAME, CONTACT_NO1, CONTACT_NO2)
Marks(SID, COURSE, MARKS, GRADE)`}</pre>
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
SID | COURSE | MARKS | GRADE
1   | OOPS   | 80    | B+

FDs: {SID, COURSE} → MARKS → GRADE
GRADE depends on MARKS (non-key) — transitive!

✅ 3NF: Decompose:
Marks(SID, COURSE, MARKS)
MarksGrade(LOMARKS, HIMARKS, GRADE)
  e.g. 80-84 → B+, 85-89 → A, 90-100 → A+`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">BCNF — Boyce-Codd Normal Form</span>
        </h3>
        <ul className="section-list">
          <li>Stricter version of 3NF.</li>
          <li>For every FD <span className="font-semibold">X → Y</span>, X must be a <span className="font-semibold">superkey</span>.</li>
          <li>Handles anomalies that 3NF misses when there are overlapping candidate keys.</li>
          <li>BCNF decomposition always gives lossless joins but may lose dependency preservation.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">BCNF Violation → Fix</p>
          <pre>{`Table: StudentID | CourseID | InstructorID | InstructorName

FDs: StudentID → all attributes (StudentID is superkey ✅)
     InstructorID → InstructorName (InstructorID NOT superkey ❌)

✅ BCNF: Split into:
StudentCourse(StudentID, CourseID, InstructorID)
Instructor(InstructorID, InstructorName)`}</pre>
        </div>
        <div className="tip-block">
          <p>If a table is in BCNF it is also in 3NF — but not vice versa. BCNF is stronger.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Decomposition — Lossless Join</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Lossless Join:</span> joining decomposed tables gives back the original data exactly — no spurious (fake) tuples.</li>
          <li><span className="font-semibold">Lossy Join:</span> the join produces extra tuples not in the original — information is lost.</li>
          <li>Condition for lossless: R1 ∩ R2 must be a superkey in R1 or R2.</li>
          <li><span className="font-semibold">Dependency Preservation:</span> all original FDs can still be checked without joining tables.</li>
          <li>3NF decomposition preserves both lossless join and dependency preservation.</li>
          <li>BCNF decomposition always gives lossless join but may sacrifice dependency preservation.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Lossless Join Check</p>
          <pre>{`R(A, B, C) with FDs: A→B, B→C
Decompose into R1(A,B) and R2(B,C)

Common attribute: B
Is B a superkey in R2(B,C)? YES (B→C)
∴ Lossless decomposition ✅

Lossy example — joining on StuName instead of StuID:
generates spurious rows like (Alice, MTH101, Calculus)
even though Alice never enrolled in Calculus ❌`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Multi-Valued Dependency (MVD) and 4NF</span>
        </h3>
        <ul className="section-list">
          <li>An <span className="font-semibold">MVD</span> (written X →→ Y) exists when X determines a <span className="font-semibold">set</span> of values for Y, independently of other attributes.</li>
          <li>Occurs when a table has more than one independent one-to-many relationship.</li>
          <li><span className="font-semibold">4NF:</span> must be in BCNF and have no non-trivial multi-valued dependencies.</li>
          <li>Fix: decompose each MVD into its own table.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">MVD Example → 4NF Fix</p>
          <pre>{`Table: StudentID | Course | Hobby
1        | Math   | Painting
1        | Science| Painting
1        | Math   | Chess
1        | Science| Chess

MVDs: StudentID →→ Course
      StudentID →→ Hobby (independent of each other!)

❌ Redundancy: every course × hobby combination stored.

✅ 4NF — split into:
StudentCourse(StudentID, Course)
  1 | Math
  1 | Science

StudentHobby(StudentID, Hobby)
  1 | Painting
  1 | Chess`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">5NF — Fifth Normal Form (Project-Join NF)</span>
        </h3>
        <ul className="section-list">
          <li>Must be in 4NF.</li>
          <li>No <span className="font-semibold">join dependencies</span> — cannot decompose further without introducing spurious tuples.</li>
          <li>Addresses cyclic relationships among three or more entities.</li>
          <li>A row in the original table exists only when all three pairwise relationships hold simultaneously.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">5NF Example</p>
          <pre>{`Original: Employee | Project  | Skill
          Alice    | Project1 | Java
          Alice    | Project1 | SQL
          Alice    | Project2 | Java
          Bob      | Project2 | Python

A row exists IFF:
  (1) Employee works on Project  [EmpProject table]
  (2) Project  requires Skill    [ProjectSkill table]
  (3) Employee has Skill         [EmpSkill table]

✅ 5NF: split into three tables:
EmpProject(Employee, Project)
ProjectSkill(Project, Skill)
EmpSkill(Employee, Skill)

Splitting into only 2 tables creates spurious rows!
e.g. joining EmpProject × EmpSkill gives
(Alice, Project2, SQL) which is FAKE. ❌`}</pre>
        </div>
        <div className="tip-block">
          <p>Normal form ladder: 1NF → 2NF → 3NF → BCNF → 4NF → 5NF. Each level eliminates a specific type of dependency problem.</p>
        </div>
      </section>
    </div>
  );
};