export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        The <span className="font-semibold">Entity-Relationship (ER) Model</span> is
        a high-level conceptual tool used to design databases visually before writing
        any SQL. It represents real-world data as entities, their attributes, and
        their relationships.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">What is the ER Model?</span>
        </h3>
        <ul className="section-list">
          <li>A blueprint for designing a database — translates real-world requirements into a visual diagram.</li>
          <li>Proposed by Peter Chen in 1976.</li>
          <li>The ER Diagram (ERD) is later converted into relational tables.</li>
          <li>Makes it easy for both developers and stakeholders to understand the system structure.</li>
        </ul>
        <div className="tip-block">
          <p>ER Model notation: Entity = Rectangle, Attribute = Ellipse, Relationship = Diamond. Lines connect attributes to entities.</p>
        </div>
        <img src="/sem4/dbms/ER_model.png" alt="ER Model diagram" className="max-w-4xl mx-auto my-4" />
        <img src="/sem4/dbms/ER_symbols.png" alt="ER Symbols" className="max-w-4xl mx-auto my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Entities and Entity Sets</span>
        </h3>
        <ul className="section-list">
          <li>An <span className="font-semibold">Entity</span> is a real-world object distinguishable from others — a student, course, machine, event.</li>
          <li>An <span className="font-semibold">Entity Set</span> is a collection of similar entities — all students, all courses.</li>
          <li><span className="font-semibold">Strong Entity:</span> exists independently; has its own primary key. Represented by single rectangle.</li>
          <li><span className="font-semibold">Weak Entity:</span> depends on a strong entity for its existence. Has a <span className="font-semibold">partial key</span>, not a full primary key. Represented by double rectangle.</li>
          <li>The primary key of a weak entity = PK of strong entity + partial key of weak entity (composite).</li>
          <li>The relationship between strong and weak entity is called an <span className="font-semibold">Identifying Relationship</span> — shown with a double diamond.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Strong vs Weak Example</p>
          <pre>{`Customer (strong) — Borrows —► Loan (weak)
Customer has Cust_ID (primary key).
Loan has Loan_name (partial key only).
Loan's full key = Cust_ID + Loan_name.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Attributes</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Simple:</span> atomic — cannot be divided. Example: Age, City.</li>
          <li><span className="font-semibold">Composite:</span> made of sub-parts. Example: Name → First Name + Last Name; Address → House No + Street + Pin.</li>
          <li><span className="font-semibold">Multivalued:</span> can hold multiple values. Example: Phone Numbers, College Degrees. Shown with double ellipse.</li>
          <li><span className="font-semibold">Derived:</span> calculated from other attributes. Example: Age from Date of Birth. Shown with dashed ellipse.</li>
          <li><span className="font-semibold">Key Attribute:</span> uniquely identifies each entity. Example: Student ID. Shown underlined.</li>
          <li><span className="font-semibold">Single-valued:</span> holds exactly one value. Example: Customer ID, City.</li>
        </ul>
        <div className="tip-block">
          <p>ERD quick reference — Multivalued = double ellipse. Derived = dashed ellipse. Key attribute = underlined. Composite = ellipse with child ellipses.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Relationships and Relationship Sets</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">Relationship</span> is an association between two or more entities. Represented with a diamond.</li>
          <li>A <span className="font-semibold">Relationship Set</span> is a collection of similar relationships. Can have its own attributes.</li>
          <li>Example: 'depositor' relationship between Customer and Account can have attribute 'access-date'.</li>
          <li><span className="font-semibold">Binary:</span> between two entities. Example: Student enrolls in Course. Most common.</li>
          <li><span className="font-semibold">Recursive (Unary):</span> entity relates to itself. Example: Employee manages Employee.</li>
          <li><span className="font-semibold">Ternary:</span> between three entities. Example: Company produces Product in a Sector. Always analyze two at a time.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Cardinality</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">One-to-One (1:1):</span> each entity on one side relates to exactly one on the other. Example: One student can enroll in only one courses. Rare in real world.</li>
          <img src="/sem4/dbms/one_to_one.png" alt="One to one relationship" className="max-w-4xl mx-auto my-4" />
          <li><span className="font-semibold">One-to-Many (1:N):</span> one entity relates to many. Example: An employee can have many dependents and one dependent can depend
on one employee.</li>
          <img src="/sem4/dbms/one_to_many.png" alt="One to many relationship" className="max-w-4xl mx-auto my-4" />
          <li><span className="font-semibold">Many-to-One (N:1):</span> many relate to one. Example: Every student can enroll only in one elective course but for an elective course
there can be more than one student.</li>
          <img src="/sem4/dbms/many_to_one.png" alt="Many to one relationship" className="max-w-4xl mx-auto my-4" />
          <li><span className="font-semibold">Many-to-Many (M:N):</span> many relate to many. Example: Student enrolls in many Courses; Course has many Students.</li>
          <img src="/sem4/dbms/many_to_many.png" alt="Many to many relationship" className="max-w-4xl mx-auto my-4" />
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Cardinality Notation</p>
          <pre>{`1:1  → EMPLOYEE  ——1—— MANAGES ——1—— DEPARTMENT
1:N  → EMPLOYEE  ——N—— WORKS-FOR ——1—— DEPARTMENT
M:N  → EMPLOYEE  ——M—— WORKS-ON ——N—— PROJECT`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Participation Constraints</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Total Participation:</span> every entity must participate in at least one relationship. Shown with a double line.</li>
          <li><span className="font-semibold">Partial Participation:</span> some entities may not participate. Shown with a single line.</li>
          <li>Example: Every Loan must have a Customer (total — double line from Loan to Borrows). Not every Customer needs a Loan (partial — single line from Customer to Borrows).</li>
          <li>Example: Every employee must manage a department is total; not every employee is a manager is partial.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Extended ER Features</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">ISA Hierarchy:</span> "A ISA B" means every A is also a B. Sub-entities inherit parent attributes.</li>
          <li><span className="font-semibold">Specialization:</span> top-down — dividing an entity into sub-entities. Example: Employee → Manager, Engineer, Clerk.</li>
          <li><span className="font-semibold">Generalization:</span> bottom-up — combining entities into one. Example: Car + Truck → Vehicle.</li>
          <li><span className="font-semibold">Aggregation:</span> treating a relationship set as an entity, allowing relationships between relationships. Used when a relationship itself participates in another relationship.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Aggregation vs Ternary</p>
          <pre>{`Aggregation: Employee —[Monitors]—► {Projects —[Sponsors]— Departments}
Use when the inner relationship (Sponsors) needs its own
relationship with another entity (Monitors by Employee).

Ternary: Employee —[Works_On]— Projects — Departments
Use when all three are equally involved in one relationship.`}</pre>
        </div>
        <div className="tip-block">
          <p>Specialization is top-down. Generalization is bottom-up. Both result in an ISA hierarchy. The choice between aggregation and ternary depends on whether a relationship needs to relate to another entity.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Conceptual Design Choices</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Entity vs Attribute:</span> if a concept has multiple values or sub-structure, model it as an entity, not an attribute. Example: Address with city/street should be an entity if you need to query by city.</li>
          <li><span className="font-semibold">Entity vs Relationship:</span> if a concept connects two entities and has its own attributes, model it as a relationship. Watch out for redundancy when a relationship can replace two separate entity connections.</li>
          <li><span className="font-semibold">Binary vs Ternary:</span> use ternary only when three entities are genuinely interdependent and two binary relationships would miss constraints. Use binary when two separate relationships are cleaner and more accurate.</li>
        </ul>
      </section>
    </div>
  );
};