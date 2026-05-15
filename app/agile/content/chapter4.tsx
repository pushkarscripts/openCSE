export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">User Stories</span> are simple
        descriptions of features from the user  perspective. Estimation
        helps teams plan how much work they can complete in a sprint.
      </p>

      <section>
        <h3 className="section-heading">What are User Stories?</h3>
        <ul className="section-list">
          <li>Short, simple feature descriptions</li>
          <li>Written from user perspective</li>
          <li>Format: As a [user], I want [goal], so that [reason]</li>
          <li>Example: As a student, I want to search topics, so that I can find notes quickly</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Story Points & Estimation</h3>
        <ul className="section-list">
          <li>Story Points measure effort, not time</li>
          <li>Planning Poker — team estimation technique</li>
          <li>Fibonacci scale — 1, 2, 3, 5, 8, 13...</li>
          <li>Velocity — average points completed per sprint</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Product Backlog</h3>
        <ul className="section-list">
          <li>Ordered list of all features/requirements</li>
          <li>Managed by Product Owner</li>
          <li>Prioritized by business value</li>
          <li>Refined regularly in Backlog Grooming</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Acceptance Criteria</h3>
        <ul className="section-list">
          <li>Conditions a story must meet to be Done</li>
          <li>Agreed upon by team and Product Owner</li>
          <li>Clear, testable, and measurable</li>
        </ul>
      </section>
    </div>
  );
};