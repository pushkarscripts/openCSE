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
          <li>The ER Model is a blueprint for designing a database before coding.</li>
          <li>It helps translate real-world requirements into a visual diagram.</li>
          <li>Proposed by Peter Chen in 1976.</li>
          <li>The ER Diagram (ERD) is later converted into relational tables.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Entities and Entity Sets</span>
        </h3>
        <ul className="section-list">
          <li>An <span className="font-semibold">Entity</span> is a real-world object — a student, a course, an employee.</li>
          <li>An <span className="font-semibold">Entity Set</span> is a collection of similar entities — all students, all courses.</li>
          <li><span className="font-semibold">Strong Entity:</span> can exist independently. Example: Student.</li>
          <li><span className="font-semibold">Weak Entity:</span> depends on another entity. Example: Dependent (of an employee).</li>
        </ul>
        <div className="tip-block">
          <p>In ER diagrams: Strong entities use a single rectangle. Weak entities use a double rectangle.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Attributes</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Simple:</span> cannot be divided further. Example: Age.</li>
          <li><span className="font-semibold">Composite:</span> can be divided into sub-parts. Example: Name → First Name, Last Name.</li>
          <li><span className="font-semibold">Multivalued:</span> can have more than one value. Example: Phone Numbers.</li>
          <li><span className="font-semibold">Derived:</span> calculated from other attributes. Example: Age from Date of Birth.</li>
          <li><span className="font-semibold">Key Attribute:</span> uniquely identifies each entity. Example: Student ID.</li>
        </ul>
        <div className="tip-block">
          <p>In ERD: Multivalued = double ellipse. Derived = dashed ellipse. Key attribute = underlined.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Relationships</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">Relationship</span> represents an association between two or more entities.</li>
          <li>Example: A Student <span className="font-semibold">enrolls in</span> a Course.</li>
          <li><span className="font-semibold">Unary:</span> self-referencing. Example: Employee manages Employee.</li>
          <li><span className="font-semibold">Binary:</span> between two entities. Example: Student enrolls in Course.</li>
          <li><span className="font-semibold">Ternary:</span> between three entities. Example: Doctor prescribes Medicine to Patient.</li>
          <li>Relationships can also have attributes. Example: &apos;enrolls&apos; can have a &apos;grade&apos; attribute.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Cardinality</span>
        </h3>
        <ul className="section-list">
          <li>Cardinality defines how many entity instances participate in a relationship.</li>
          <li><span className="font-semibold">One-to-One (1:1):</span> A person has one passport.</li>
          <li><span className="font-semibold">One-to-Many (1:N):</span> One department has many employees.</li>
          <li><span className="font-semibold">Many-to-Many (M:N):</span> A student enrolls in many courses; a course has many students.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Cardinality Notation</p>
          <pre>{`1:1  →  Person ——— Passport
1:N  →  Department ——< Employee
M:N  →  Student >——< Course`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Participation Constraints</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Total Participation:</span> every entity must participate in the relationship. Shown with a double line.</li>
          <li><span className="font-semibold">Partial Participation:</span> some entities may not participate. Shown with a single line.</li>
          <li>Example: Every employee must work for a department (total), but not every department must have a manager (partial).</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Extended ER Features</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Specialization:</span> dividing an entity into sub-entities. Example: Employee → Manager, Engineer, Clerk. (Top-down)</li>
          <li><span className="font-semibold">Generalization:</span> combining multiple entities into one. Example: Car + Truck → Vehicle. (Bottom-up)</li>
          <li><span className="font-semibold">Aggregation:</span> treating a relationship as an entity to allow relationships with other entities.</li>
          <li><span className="font-semibold">Inheritance:</span> sub-entities inherit attributes from the parent entity.</li>
        </ul>
        <div className="tip-block">
          <p>Specialization is top-down. Generalization is bottom-up. Both lead to the same result in the ERD.</p>
        </div>
      </section>
    </div>
  );
};