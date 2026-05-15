export const Ch3Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Kanban</span> is a visual Agile framework
        that helps teams manage and improve workflow using a Kanban board with
        columns representing different stages of work.
      </p>

      <section>
        <h3 className="section-heading">What is Kanban?</h3>
        <ul className="section-list">
          <li>Visual workflow management system</li>
          <li>Originated from  manufacturing process</li>
          <li>Focus on continuous delivery</li>
          <li>Limits Work in Progress (WIP)</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Kanban Board</h3>
        <ul className="section-list">
          <li>To Do — tasks not yet started</li>
          <li>In Progress — tasks being worked on</li>
          <li>Done — completed tasks</li>
          <li>WIP Limits — max tasks allowed per column</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Kanban Principles</h3>
        <ul className="section-list">
          <li>Visualize the workflow</li>
          <li>Limit Work in Progress</li>
          <li>Manage and improve flow</li>
          <li>Make process policies explicit</li>
          <li>Continuously improve</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Kanban vs Scrum</h3>
        <ul className="section-list">
          <li>Kanban: Continuous flow — Scrum: Fixed sprints</li>
          <li>Kanban: No fixed roles — Scrum: Defined roles</li>
          <li>Kanban: Pull system — Scrum: Push system</li>
          <li>Kanban: Ongoing — Scrum: Time-boxed iterations</li>
        </ul>
      </section>
    </div>
  );
};