export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Agile is a <span className="font-semibold">modern software development approach</span> that
        focuses on iterative delivery, team collaboration, and responding to change
        rather than following a fixed plan.
      </p>

      <section>
        <h3 className="section-heading">What is Agile?</h3>
        <ul className="section-list">
          <li>Iterative and incremental development</li>
          <li>Focuses on customer collaboration</li>
          <li>Welcomes changing requirements</li>
          <li>Delivers working software frequently</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Agile Manifesto — 4 Core Values</h3>
        <ul className="section-list">
          <li>Individuals & interactions over processes & tools</li>
          <li>Working software over comprehensive documentation</li>
          <li>Customer collaboration over contract negotiation</li>
          <li>Responding to change over following a plan</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">12 Agile Principles</h3>
        <ul className="section-list">
          <li>Satisfy customer through early delivery</li>
          <li>Welcome changing requirements</li>
          <li>Deliver working software frequently</li>
          <li>Business & developers must work together daily</li>
          <li>Build projects around motivated individuals</li>
          <li>Face-to-face communication is most effective</li>
          <li>Working software is primary measure of progress</li>
          <li>Maintain sustainable development pace</li>
          <li>Continuous attention to technical excellence</li>
          <li>Simplicity is essential</li>
          <li>Self-organizing teams produce best results</li>
          <li>Regular reflection and adaptation</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Agile vs Waterfall</h3>
        <ul className="section-list">
          <li>Waterfall: Linear & sequential — Agile: Iterative & flexible</li>
          <li>Waterfall: Fixed requirements — Agile: Changing requirements welcome</li>
          <li>Waterfall: Late delivery — Agile: Frequent small deliveries</li>
          <li>Waterfall: Less customer involvement — Agile: Continuous collaboration</li>
        </ul>
      </section>
    </div>
  );
};