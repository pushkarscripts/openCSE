export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Agile Methodology</span>.
        This course covers modern software development approaches including
        Agile principles, Scrum framework, Kanban, and how teams deliver
        software iteratively and efficiently.
      </p>

      <section>
        <h3 className="section-heading">Module I: Introduction to Agile</h3>
        <ul className="section-list">
          <li>What is Agile?</li>
          <li>Agile Manifesto & 4 Core Values</li>
          <li>12 Agile Principles</li>
          <li>Agile vs Waterfall</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module II: Scrum Framework</h3>
        <ul className="section-list">
          <li>What is Scrum?</li>
          <li>Scrum Roles — Product Owner, Scrum Master, Dev Team</li>
          <li>Sprints & Sprint Planning</li>
          <li>Daily Standups, Sprint Review, Retrospective</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module III: Kanban</h3>
        <ul className="section-list">
          <li>What is Kanban?</li>
          <li>Kanban Board & Workflow</li>
          <li>Kanban vs Scrum</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module IV: User Stories & Estimation</h3>
        <ul className="section-list">
          <li>What are User Stories?</li>
          <li>Story Points & Estimation</li>
          <li>Product Backlog & Prioritization</li>
        </ul>
      </section>

    </div>
  );
};