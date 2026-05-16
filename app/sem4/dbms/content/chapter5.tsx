export const Ch5Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        A <span className="font-semibold">transaction</span> is a sequence of
        database operations treated as a single unit. Concurrency control ensures
        multiple transactions run simultaneously without conflicts.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">ACID Properties</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Atomicity:</span> all operations succeed, or none do. No partial execution.</li>
          <li><span className="font-semibold">Consistency:</span> the database moves from one valid state to another.</li>
          <li><span className="font-semibold">Isolation:</span> concurrent transactions do not interfere with each other.</li>
          <li><span className="font-semibold">Durability:</span> once committed, changes persist even after a crash.</li>
        </ul>
        <div className="tip-block">
          <p>Exam Tip: ACID is one of the most asked topics. Remember all four with the mnemonic: <span className="font-semibold">A</span>ll <span className="font-semibold">C</span>hanges <span className="font-semibold">I</span>solated &amp; <span className="font-semibold">D</span>urable.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Transaction States</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Active:</span> transaction is currently executing.</li>
          <li><span className="font-semibold">Partially Committed:</span> last operation executed, not yet written to disk.</li>
          <li><span className="font-semibold">Committed:</span> all changes written permanently to the database.</li>
          <li><span className="font-semibold">Failed:</span> normal execution cannot continue.</li>
          <li><span className="font-semibold">Aborted:</span> transaction rolled back; database restored to previous state.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">State Flow</p>
          <pre>{`Active → Partially Committed → Committed
Active → Failed → Aborted`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Concurrency Problems</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Lost Update:</span> two transactions read and update the same data; one update overwrites the other.</li>
          <li><span className="font-semibold">Dirty Read:</span> a transaction reads data written by another transaction that has not committed yet.</li>
          <li><span className="font-semibold">Unrepeatable Read:</span> a transaction reads the same row twice and gets different values because another transaction updated it.</li>
          <li><span className="font-semibold">Phantom Read:</span> a transaction re-executes a query and finds new rows added by another transaction.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Locking</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Shared Lock (S):</span> allows reading. Multiple transactions can hold a shared lock simultaneously.</li>
          <li><span className="font-semibold">Exclusive Lock (X):</span> allows reading and writing. Only one transaction can hold it; no other locks allowed.</li>
          <li>A transaction must acquire the appropriate lock before accessing data.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Two-Phase Locking (2PL)</span>
        </h3>
        <ul className="section-list">
          <li>A protocol to ensure serializability (correct concurrent execution).</li>
          <li><span className="font-semibold">Growing Phase:</span> locks are acquired; no lock is released.</li>
          <li><span className="font-semibold">Shrinking Phase:</span> locks are released; no new lock is acquired.</li>
          <li>2PL guarantees conflict serializability but can cause deadlocks.</li>
        </ul>
        <div className="tip-block">
          <p>Once a transaction releases its first lock, it enters the shrinking phase and cannot acquire new locks.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Deadlock</span>
        </h3>
        <ul className="section-list">
          <li>A deadlock occurs when two or more transactions wait for each other to release locks — forming a cycle.</li>
          <li><span className="font-semibold">Detection:</span> use a wait-for graph; a cycle means deadlock.</li>
          <li><span className="font-semibold">Prevention:</span> use timestamps (wait-die or wound-wait schemes).</li>
          <li><span className="font-semibold">Recovery:</span> abort one transaction (the victim) to break the cycle.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Deadlock Example</p>
          <pre>{`T1 holds Lock(A), waits for Lock(B)
T2 holds Lock(B), waits for Lock(A)
→ Deadlock! Neither can proceed.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Timestamp-Based Concurrency Control</span>
        </h3>
        <ul className="section-list">
          <li>Each transaction is assigned a unique timestamp when it starts.</li>
          <li>Operations are ordered by timestamp to ensure serializability.</li>
          <li><span className="font-semibold">Wait-Die:</span> older transaction waits; younger is aborted (dies).</li>
          <li><span className="font-semibold">Wound-Wait:</span> older transaction aborts the younger (wounds it); younger waits if it&apos;s older.</li>
        </ul>
      </section>
    </div>
  );
};