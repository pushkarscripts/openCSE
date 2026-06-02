export const Ch8Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Recovery</span> restores the database to
        a consistent state after a failure.{" "}
        <span className="font-semibold">Security</span> ensures only authorized
        users can access or modify data.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Failures</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Transaction Failure:</span> logical error or deadlock causes a transaction to abort.</li>
          <li><span className="font-semibold">System Failure:</span> power outage or OS crash — data in memory is lost but disk is safe.</li>
          <li><span className="font-semibold">Media Failure:</span> disk crash — data on disk is lost. Requires backups.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Log-Based Recovery</span>
        </h3>
        <ul className="section-list">
          <li>The DBMS maintains a <span className="font-semibold">log file</span> recording every change before it is applied to the database.</li>
          <li>Each log record contains: transaction ID, data item, old value, new value.</li>
          <li><span className="font-semibold">Undo:</span> if a transaction fails, old values from the log are restored.</li>
          <li><span className="font-semibold">Redo:</span> if a committed transaction&apos;s changes weren&apos;t written to disk, they are reapplied.</li>
          <li><span className="font-semibold">Write-Ahead Logging (WAL):</span> log must be written to disk before the actual data change.</li>
        </ul>
        <div className="tip-block">
          <p>WAL is the golden rule of recovery — always log before you change.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Checkpoints</span>
        </h3>
        <ul className="section-list">
          <li>A checkpoint is a point where the DBMS writes all in-memory changes to disk and records this in the log.</li>
          <li>During recovery, only transactions after the last checkpoint need to be redone or undone.</li>
          <li>Checkpoints reduce recovery time significantly.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Recovery After Crash</p>
          <pre>{`Checkpoint at T=10
T1 committed at T=8  → already safe, skip
T2 committed at T=12 → redo (may not be on disk)
T3 active at crash   → undo (was never committed)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Shadow Paging</span>
        </h3>
        <ul className="section-list">
          <li>An alternative to log-based recovery.</li>
          <li>Maintains two page tables: <span className="font-semibold">current</span> and <span className="font-semibold">shadow</span>.</li>
          <li>Changes go to the current page table. On commit, current replaces shadow.</li>
          <li>On failure, just restore the shadow page table — no undo needed.</li>
          <li>Simpler than logging but causes fragmentation and is rarely used in modern systems.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Database Security</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Authentication:</span> verifying who the user is — username and password.</li>
          <li><span className="font-semibold">Authorization:</span> controlling what an authenticated user can do.</li>
          <li><span className="font-semibold">GRANT:</span> gives a user permission. Example: <code>GRANT SELECT ON students TO user1;</code></li>
          <li><span className="font-semibold">REVOKE:</span> removes a permission. Example: <code>REVOKE SELECT ON students FROM user1;</code></li>
          <li><span className="font-semibold">Views as Security:</span> expose only specific columns or rows to certain users.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">SQL Injection</span>
        </h3>
        <ul className="section-list">
          <li>A common attack where malicious SQL is inserted into an input field to manipulate the database.</li>
          <li><span className="font-semibold">Prevention:</span> use prepared statements and parameterized queries — never concatenate raw user input into SQL.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">SQL Injection Example</p>
          <pre>{`-- Vulnerable query:
"SELECT * FROM users WHERE name = '" + input + "'"

-- Attacker enters: ' OR '1'='1
-- Resulting query (returns all users!):
SELECT * FROM users WHERE name = '' OR '1'='1'

-- Safe fix (prepared statement):
SELECT * FROM users WHERE name = ?`}</pre>
        </div>
      </section>
    </div>
  );
};