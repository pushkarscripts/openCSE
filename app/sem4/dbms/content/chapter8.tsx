export const Ch8Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        <span className="font-semibold">Recovery</span> restores a database to a consistent
        state after a failure. <span className="font-semibold">Security</span> ensures only
        authorized users can access or modify data.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Failures</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Transaction Failure:</span> a single transaction cannot proceed. Two causes — logical errors (bad input, overflow, constraint violation) and system errors (deadlock, resource unavailability forcing DBMS to abort the transaction).</li>
          <li><span className="font-semibold">System Crash:</span> hardware or software failure causes the system to halt — power outage, OS crash, hardware fault. Main memory contents are lost; disk is intact.</li>
          <li><span className="font-semibold">Disk Failure:</span> storage media fails — bad sectors, head crash, unreadable disk. Partial or total loss of disk data. Requires backup restoration.</li>
        </ul>
        <div className="tip-block">
          <p>Key distinction: system crash loses main memory (buffer), disk is intact. Disk failure loses the disk itself — only backup can recover. Recovery techniques differ for each.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Storage Classification</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Volatile Storage:</span> lost on crash. Example: main memory (RAM), cache buffers.</li>
          <li><span className="font-semibold">Non-Volatile Storage:</span> survives crashes but can fail. Example: magnetic disk, SSD, flash memory.</li>
          <li><span className="font-semibold">Stable Storage:</span> never lost — achieved by replicating data to multiple non-volatile locations. Example: RAID, remote disk mirrors. Log files are written to stable storage.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Log-Based Recovery — Recap</span>
        </h3>
        <ul className="section-list">
          <li>The <span className="font-semibold">log</span> is a sequential record on stable storage containing entries for every transaction operation.</li>
          <li>Log entries: &lt;Ti, Start&gt;, &lt;Ti, X, OldVal, NewVal&gt;, &lt;Ti, Commit&gt;, &lt;Ti, Abort&gt;.</li>
          <li><span className="font-semibold">WAL (Write-Ahead Logging):</span> log entry must be written to stable storage before the corresponding DB change is made.</li>
          <li><span className="font-semibold">REDO (Ti):</span> re-apply all of Ti's changes — used when Ti committed but changes may not have reached disk before crash.</li>
          <li><span className="font-semibold">UNDO (Ti):</span> reverse all of Ti's changes using old values in log — used when Ti had not committed at crash time.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">UNDO vs REDO Decision</p>
          <pre>{`On recovery, scan log:
  <Ti, Commit> found → Ti goes to REDO list
  <Ti, Start>  found, no commit/abort → Ti goes to UNDO list

REDO:  re-apply changes forward (old→new)
UNDO:  reverse changes backward (new→old using log)`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Shadow Paging</span>
        </h3>
        <ul className="section-list">
          <li>An alternative to log-based recovery for implementing atomicity and durability.</li>
          <li>A transaction that wants to update the database first creates a <span className="font-semibold">complete copy</span> (shadow copy) of the database.</li>
          <li>All updates are done on the <span className="font-semibold">new copy</span> — original is untouched.</li>
          <li>If transaction aborts: simply delete the new copy. Original is intact.</li>
          <li>If transaction commits: update the <span className="font-semibold">db-pointer</span> to point to the new copy. New copy becomes the current database; old copy is deleted.</li>
          <li>Drawback: copying the entire database is expensive. Impractical for large databases.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Checkpoints</span>
        </h3>
        <ul className="section-list">
          <li>Periodically, the DBMS writes a <span className="font-semibold">checkpoint</span> — flushes all buffers to disk and writes a &lt;Checkpoint&gt; record to the log.</li>
          <li>On recovery, only transactions that started after the last checkpoint (or were active at checkpoint time) need to be considered. Everything before is already safely on disk.</li>
          <li>Reduces the amount of log that must be replayed — faster recovery.</li>
        </ul>
        <div className="tip-block">
          <p>Think of a checkpoint as a "save point" for the whole database. Recovery only needs to replay from the last checkpoint, not from the beginning of the log.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Database Security Concepts</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Security</span> protects the database from unauthorized access, modification, or destruction.</li>
          <li><span className="font-semibold">Authentication:</span> verifying the identity of a user (who are you?). Example: username + password, biometrics, tokens.</li>
          <li><span className="font-semibold">Authorization:</span> determining what an authenticated user is allowed to do (what can you do?). Implemented via privileges.</li>
          <li><span className="font-semibold">Confidentiality:</span> data is accessible only to authorized users.</li>
          <li><span className="font-semibold">Integrity:</span> data cannot be modified by unauthorized users.</li>
          <li><span className="font-semibold">Availability:</span> authorized users can access data when needed.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Authorization and Privileges</span>
        </h3>
        <ul className="section-list">
          <li>SQL implements authorization via <span className="font-semibold">privileges</span> granted on database objects.</li>
          <li>Privilege types: SELECT, INSERT, UPDATE, DELETE, REFERENCES, EXECUTE.</li>
          <li><span className="font-semibold">GRANT:</span> gives a privilege to a user or role. WITH GRANT OPTION allows the user to further grant that privilege.</li>
          <li><span className="font-semibold">REVOKE:</span> removes a privilege. CASCADE revokes privileges granted by the revokee too.</li>
          <li><span className="font-semibold">Roles:</span> group privileges — assign a role to a user instead of individual privileges. Easier to manage.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">GRANT / REVOKE Examples</p>
          <pre>{`-- Grant SELECT and INSERT to user1
GRANT SELECT, INSERT ON students TO user1;

-- Grant with ability to pass it on
GRANT SELECT ON courses TO user2 WITH GRANT OPTION;

-- Create and assign a role
CREATE ROLE instructor;
GRANT SELECT ON students TO instructor;
GRANT instructor TO user3;

-- Revoke privilege
REVOKE INSERT ON students FROM user1;
REVOKE SELECT ON courses FROM user2 CASCADE;`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">SQL Injection</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">SQL Injection</span> is an attack where malicious SQL code is inserted into an input field that gets executed by the database.</li>
          <li>Happens when user input is directly concatenated into a SQL string without sanitization.</li>
          <li>Can allow attackers to bypass authentication, read/modify/delete data, or execute admin operations.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">SQL Injection Example</p>
          <pre>{`❌ Vulnerable code (Python):
query = "SELECT * FROM users WHERE name='" + username + "'"

If username = "' OR '1'='1":
query becomes:
SELECT * FROM users WHERE name='' OR '1'='1'
→ Returns ALL users! Bypasses authentication.

❌ DROP TABLE attack:
username = "'; DROP TABLE users; --"
→ Deletes the entire users table!`}</pre>
        </div>
        <div className="example-block">
          <p className="font-semibold mb-1">Prevention — Parameterized Queries</p>
          <pre>{`✅ Safe code — use prepared statements:
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (username,))

The DB treats username as data, not SQL code.
No matter what username contains, it cannot alter
the query structure.

Other prevention methods:
- Input validation and sanitization
- Least privilege (users only get needed permissions)
- Web Application Firewall (WAF)
- Stored procedures`}</pre>
        </div>
        <div className="tip-block">
          <p>SQL injection is one of the most common and dangerous vulnerabilities. Always use parameterized queries / prepared statements — never concatenate user input directly into SQL strings.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Views for Security</span>
        </h3>
        <ul className="section-list">
          <li>Views can act as a security mechanism by exposing only a subset of data to certain users.</li>
          <li>Grant SELECT on a view (not the base table) — user can only see what the view shows.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">View-Based Security</p>
          <pre>{`-- Hide salary column from regular users
CREATE VIEW public_employees AS
  SELECT emp_id, name, department
  FROM employees;
  -- salary column is hidden!

GRANT SELECT ON public_employees TO hr_staff;
-- hr_staff can query employees but never sees salary`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Encryption</span>
        </h3>
        <ul className="section-list">
          <li>Data can be <span className="font-semibold">encrypted</span> on disk so that even if someone gets physical access to the storage, the data is unreadable without the key.</li>
          <li><span className="font-semibold">Transparent Data Encryption (TDE):</span> DBMS encrypts data files automatically — application sees unencrypted data normally.</li>
          <li><span className="font-semibold">Column-level encryption:</span> encrypt specific sensitive columns (e.g., passwords, credit card numbers).</li>
          <li>Passwords should be stored as hashed values (e.g., bcrypt, SHA-256), never as plain text.</li>
        </ul>
      </section>
    </div>
  );
};