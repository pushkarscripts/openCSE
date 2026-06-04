export const Ch1Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Agile</span> is a modern approach to
        software development that focuses on delivering small, working pieces of
        software frequently, rather than delivering everything at once after a
        long time. It encourages teams to collaborate closely, adapt to changes,
        and continuously improve their process.
      </p>

      <section>
        <h3 className="section-heading">What is Agile?</h3>
        <ul className="section-list">
          <li>
            <span className="font-semibold">Iterative Development:</span> Work
            is divided into small cycles called iterations. Each iteration
            produces a working piece of software. For example, instead of
            building an entire app in 1 year, you build and release small
            features every 2 weeks.
          </li>
          <li>
            <span className="font-semibold">Customer Collaboration:</span> The
            customer is involved throughout the project, not just at the
            beginning and end. This ensures the final product matches their
            actual needs.
          </li>
          <li>
            <span className="font-semibold">Responding to Change:</span> Agile
            welcomes changing requirements even late in development. If a
            customer changes their mind, the team adapts rather than sticking
            to an outdated plan.
          </li>
          <li>
            <span className="font-semibold">Working Software:</span> The
            primary measure of progress is working software, not documents or
            reports.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Agile Manifesto — 4 Core Values</h3>
        <p className="p-text">
          In 2001, 17 experienced software developers came together and wrote
          the Agile Manifesto — a document that defines the core values and
          principles of Agile development.
        </p>
        <ul className="section-list">
          <li>
            <span className="font-semibold">Individuals & Interactions</span>{" "}
            over Processes & Tools — People and communication matter more than
            following strict processes or using specific tools.
          </li>
          <li>
            <span className="font-semibold">Working Software</span> over
            Comprehensive Documentation — A working product is more valuable
            than hundreds of pages of documentation.
          </li>
          <li>
            <span className="font-semibold">Customer Collaboration</span> over
            Contract Negotiation — Work closely with customers throughout,
            rather than just following a fixed contract.
          </li>
          <li>
            <span className="font-semibold">Responding to Change</span> over
            Following a Plan — Be flexible and adapt to changes rather than
            rigidly following an outdated plan.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">12 Agile Principles</h3>
        <p className="p-text">
          The Agile Manifesto also includes 12 principles that guide Agile
          teams in their day-to-day work:
        </p>
        <ul className="section-list">
          <li>Satisfy the customer through early and continuous delivery of working software</li>
          <li>Welcome changing requirements, even late in development</li>
          <li>Deliver working software frequently, from every few weeks to every few months</li>
          <li>Business people and developers must work together daily</li>
          <li>Build projects around motivated individuals and trust them to get the job done</li>
          <li>Face-to-face conversation is the most efficient way to share information</li>
          <li>Working software is the primary measure of progress</li>
          <li>Maintain a sustainable, constant pace of development</li>
          <li>Continuous attention to technical excellence enhances agility</li>
          <li>Simplicity — maximizing the amount of work not done — is essential</li>
          <li>The best architectures emerge from self-organizing teams</li>
          <li>Regularly reflect on how to become more effective and adjust accordingly</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Agile vs Waterfall</h3>
        <p className="p-text">
          Before Agile, most teams used the{" "}
          <span className="font-semibold">Waterfall model</span> — a linear
          approach where each phase (requirements, design, development, testing)
          is completed before moving to the next. Here is how they differ:
        </p>
        <ul className="section-list">
          <li>
            <span className="font-semibold">Flexibility:</span> Waterfall has
            fixed requirements — Agile welcomes change at any stage
          </li>
          <li>
            <span className="font-semibold">Delivery:</span> Waterfall delivers
            everything at the end — Agile delivers working software every few
            weeks
          </li>
          <li>
            <span className="font-semibold">Customer Involvement:</span>{" "}
            Waterfall involves customers only at start and end — Agile involves
            them throughout
          </li>
          <li>
            <span className="font-semibold">Risk:</span> Waterfall has high
            risk as problems are found late — Agile catches issues early
            through frequent releases
          </li>
          <li>
            <span className="font-semibold">Example:</span> Building a house
            uses Waterfall (fixed plan). Building an app uses Agile (features
            added gradually based on feedback)
          </li>
        </ul>
      </section>
    </div>
  );
};