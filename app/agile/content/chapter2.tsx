export const Ch2Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Scrum</span> is the most popular Agile
        framework that helps teams deliver work in short cycles called Sprints,
        with clear roles, events, and artifacts.
      </p>

      <section>
        <h3 className="section-heading">What is Scrum?</h3>
        <ul className="section-list">
          <li>Lightweight Agile framework</li>
          <li>Work divided into Sprints (1-4 weeks)</li>
          <li>Daily progress tracking via Standups</li>
          <li>Continuous improvement after each Sprint</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Scrum Roles</h3>
        <ul className="section-list">
          <li>Product Owner — defines requirements & priorities</li>
          <li>Scrum Master — removes blockers, facilitates process</li>
          <li>Development Team — builds the product</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Scrum Events</h3>
        <ul className="section-list">
          <li>Sprint Planning — what to build this sprint</li>
          <li>Daily Standup — 15 min daily sync</li>
          <li>Sprint Review — demo to stakeholders</li>
          <li>Sprint Retrospective — team improvement discussion</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Scrum Artifacts</h3>
        <ul className="section-list">
          <li>Product Backlog — all requirements list</li>
          <li>Sprint Backlog — tasks for current sprint</li>
          <li>Increment — working software after each sprint</li>
        </ul>
      </section>
    </div>
  );
};