export const Ch5Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        A <span className="font-semibold">transaction</span> is a sequence of database operations
        treated as a single unit. This chapter covers ACID properties, schedules, serializability,
        recoverability, concurrency control protocols, and log-based recovery.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">ACID Properties</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Atomicity:</span> all operations succeed, or none do ("all or nothing"). Example: transferring $100 — both debit and credit must succeed together.</li>
          <li><span className="font-semibold">Consistency:</span> transaction moves database from one valid state to another. Total balance must remain the same before and after a transfer.</li>
          <li><span className="font-semibold">Isolation:</span> concurrent transactions do not interfere. T2 should not read data being modified by T1 until T1 completes.</li>
          <li><span className="font-semibold">Durability:</span> once committed, changes persist even after a crash. Recovery manager ensures durability.</li>
        </ul>
        <div className="tip-block">
          <p>Mnemonic: All Changes Isolated &amp; Durable. ACID is one of the most exam-asked topics — know all four with examples.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Transaction States</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Active:</span> transaction is executing; R/W operations stored in buffer (not yet in DB).</li>
          <li><span className="font-semibold">Partially Committed:</span> last operation executed; results still in buffer, not yet written to DB.</li>
          <li><span className="font-semibold">Committed:</span> all changes written permanently to DB. Cannot be rolled back — only reversed by a compensating transaction.</li>
          <li><span className="font-semibold">Failed:</span> cannot continue due to logical errors or system errors.</li>
          <li><span className="font-semibold">Aborted:</span> transaction rolled back; DB restored to previous consistent state.</li>
          <li><span className="font-semibold">Terminated:</span> final state after committed or aborted. Life cycle ends.</li>
          <img src="/sem4/dbms/transaction_states.png" alt="States of transaction" className="max-w-4xl mx-auto my-4" />
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Types of Schedules</span>
        </h3>
        <ul className="section-list">
          <img src="/sem4/dbms/dbms_schedules.png" alt="Schedules" className="max-w-4xl mx-auto my-4" />
          <li><span className="font-semibold">Serial Schedule:</span> transactions execute one after another — no concurrency. Always correct but low throughput.</li>
          <li><span className="font-semibold">Non-Serial Schedule:</span> transactions interleaved. Better throughput; may produce incorrect results.</li>
          <li><span className="font-semibold">Serializable Schedule:</span> a non-serial schedule whose result is equivalent to some serial schedule. Correct and concurrent.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Serial vs Non-Serial</p>
          <pre>{`Serial (S1): T1 runs completely, then T2 runs completely.
Non-serial (S2): T1 and T2 interleaved — operations mixed.
Serializable: S2 produces same result as some serial order.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Conflict Serializability</span>
        </h3>
        <ul className="section-list">
          <li>Two operations <span className="font-semibold">conflict</span> if: (1) they belong to different transactions, (2) they access the same data item, (3) at least one is a Write.</li>
          <li>A schedule is <span className="font-semibold">conflict serializable</span> if it can be converted to a serial schedule by swapping non-conflicting operations.</li>
          <li>Test using a <span className="font-semibold">Precedence Graph</span>: draw a node per transaction; add edge Ta→Tb if an operation of Ta conflicts with a later operation of Tb.</li>
          <li>If the precedence graph has <span className="font-semibold">no cycle → conflict serializable</span>. Cycle → not conflict serializable.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Precedence Graph Example</p>
          <pre>{`S: R1(A), R2(A), R1(B), R2(B), R3(B), W1(A), W2(B)

Conflicting pairs:
  R2(A), W1(A) → T2→T1
  R1(B), W2(B) → T1→T2
  R3(B), W2(B) → T3→T2

Graph: T2→T1→T2 (cycle!) ∴ NOT conflict serializable ❌`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">View Serializability</span>
        </h3>
        <ul className="section-list">
          <li>Two schedules S1 and S2 are <span className="font-semibold">view equivalent</span> if they satisfy three rules.</li>
          <li><span className="font-semibold">Rule 1 – Initial Read:</span> the first read on each data item must be by the same transaction in both schedules.</li>
          <li><span className="font-semibold">Rule 2 – Updated Read:</span> if Ta reads a value written by Tb in S1, the same must hold in S2.</li>
          <li><span className="font-semibold">Rule 3 – Final Write:</span> the last write on each data item must be by the same transaction in both schedules.</li>
          <li>A schedule is <span className="font-semibold">view serializable</span> if it is view equivalent to some serial schedule.</li>
          <li>Every conflict serializable schedule is also view serializable — but not vice versa.</li>
        </ul>
        <div className="tip-block">
          <p>Conflict serializable ⊂ View serializable. If you can prove conflict serializability, view serializability follows automatically.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Recoverability</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Dirty Read:</span> a transaction reads data written by another transaction that has not yet committed.</li>
          <li><span className="font-semibold">Irrecoverable Schedule:</span> Ta does a dirty read from Tb, and Ta commits before Tb commits/aborts. Cannot undo — irrecoverable.</li>
          <li><span className="font-semibold">Recoverable Schedule:</span> Ta does a dirty read from Tb, but Ta's commit is delayed until Tb commits or aborts. Recovery is possible.</li>
          <li><span className="font-semibold">Cascadeless Schedule:</span> transactions only read committed data — no dirty reads at all. Prevents cascading rollbacks.</li>
          <li><span className="font-semibold">Strict Schedule:</span> a transaction can neither read nor write a data item until the last transaction that wrote it has committed or aborted. Easiest to recover.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Isolation Levels</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Dirty Read:</span> reading uncommitted data from another transaction.</li>
          <li><span className="font-semibold">Non-Repeatable Read:</span> reading the same row twice gets different values because another transaction updated it (committed) between the reads.</li>
          <li><span className="font-semibold">Phantom Read:</span> re-executing a query finds new rows added/deleted by another committed transaction. Row count changes, not values.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Isolation Levels Table</p>
          <pre>{`Level             | Dirty Read | Non-Repeatable | Phantom
------------------|------------|----------------|--------
Read Uncommitted  | May occur  | May occur      | May occur
Read Committed    | ✗ Never   | ✗ Never        | May occur
Repeatable Read   | ✗ Never   | ✗ Never        | May occur
Serializable      | ✗ Never   | ✗ Never        | ✗ Never`}</pre>
        </div>
        <div className="tip-block">
          <p>Serializable is the highest and safest isolation level. Non-Repeatable Read = UPDATE by another transaction. Phantom Read = INSERT/DELETE by another transaction.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Lock-Based Protocols</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Shared Lock (S):</span> allows reading. Multiple transactions can hold shared locks simultaneously. Use lock-S instruction.</li>
          <li><span className="font-semibold">Exclusive Lock (X):</span> allows read and write. Only one transaction; no other lock allowed. Use lock-X instruction.</li>
          <li><span className="font-semibold">Compatibility:</span> S+S = allowed. S+X = blocked. X+X = blocked. X+S = blocked.</li>
          <li><span className="font-semibold">Simplistic Protocol:</span> lock each item before operation, release immediately after. Simple but may not ensure serializability.</li>
          <li><span className="font-semibold">Pre-claiming Protocol:</span> claim all needed locks before transaction starts. If all granted, proceed; else rollback and wait.</li>
        </ul>
      </section>

      <img src="/sem4/dbms/lock_matrix.png" alt="Transaction compatibility lock matrix" className="max-w-4xl mx-auto my-4" />

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Two-Phase Locking (2PL)</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Growing Phase:</span> locks are acquired; no lock is released.</li>
          <li><span className="font-semibold">Shrinking Phase:</span> locks are released; no new lock can be acquired.</li>
          <li>The point where the first lock is released is the <span className="font-semibold">lock point</span>.</li>
          <li>2PL guarantees conflict serializability but can cause deadlocks and cascading aborts.</li>
          <li><span className="font-semibold">Strict 2PL:</span> holds all exclusive locks until commit — no shrinking phase for X-locks. Prevents cascading aborts. No shrinking phase.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">2PL Example — T1</p>
          <pre>{`Time 0: LOCK-S(A)       ← Growing phase starts
Time 4: LOCK-X(B)
Time 9: UNLOCK(A)       ← Shrinking phase starts
Time 11: UNLOCK(B)      ← Lock point was at step 4
Time 15: COMMIT

T1 growing: steps 0–4, shrinking: steps 9–11`}</pre>
        </div>
      </section>

      <img src="/sem4/dbms/2pl.png" alt="2PL mechanism" className="max-w-4xl mx-auto my-4" />

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Deadlock</span>
        </h3>
        <ul className="section-list">
          <li>Deadlock occurs when two or more transactions wait for each other to release locks — a circular wait.</li>
          <li><span className="font-semibold">Detection:</span> use a <span className="font-semibold">wait-for graph</span> — a cycle means deadlock exists.</li>
          <li><span className="font-semibold">Prevention using timestamps:</span></li>
          <li><span className="font-semibold">Wait-Die:</span> older transaction waits for younger; younger transaction is aborted (dies) if it waits for older.</li>
          <li><span className="font-semibold">Wound-Wait:</span> older transaction preempts (wounds) the younger; younger waits if older needs its resource.</li>
          <li><span className="font-semibold">Recovery:</span> abort one transaction (the victim) to break the cycle.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Deadlock Example</p>
          <pre>{`T1 holds Lock(A), waits for Lock(B)
T2 holds Lock(B), waits for Lock(A)
→ Circular wait = Deadlock!
Solution: Abort T1 (victim) → T2 can proceed.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Timestamp-Based Protocol</span>
        </h3>
        <ul className="section-list">
          <li>Each transaction gets a unique timestamp TS(T) when it enters the system.</li>
          <li><span className="font-semibold">R-timestamp(X):</span> timestamp of the youngest (most recent) transaction that read X.</li>
          <li><span className="font-semibold">W-timestamp(X):</span> timestamp of the youngest transaction that wrote X.</li>
          <li><span className="font-semibold">Basic TO — Read(X) by Ti:</span> rejected if W_TS(X) &gt; TS(Ti) (a younger transaction already wrote X). Else allowed.</li>
          <li><span className="font-semibold">Basic TO — Write(X) by Ti:</span> rejected if TS(Ti) &lt; R_TS(X) or TS(Ti) &lt; W_TS(X). Ti is rolled back.</li>
          <li><span className="font-semibold">Thomas's Write Rule:</span> if W_TS(X) &gt; TS(Ti), ignore (skip) the write but continue Ti — the write is outdated. More permissive than basic TO.</li>
        </ul>
        <div className="tip-block">
          <p>Basic TO rejects and rolls back outdated writes. Thomas's Write Rule simply ignores them and lets the transaction continue — reducing unnecessary rollbacks.</p>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Validation-Based Protocol (Optimistic CC)</span>
        </h3>
        <ul className="section-list">
          <li>No concurrency checking during execution — check only at the end.</li>
          <li><span className="font-semibold">Phase 1 – Read:</span> read data into local temporary variables; perform all writes on temp variables (not actual DB).</li>
          <li><span className="font-semibold">Phase 2 – Validation:</span> check whether copying temp results to DB would violate serializability.</li>
          <li><span className="font-semibold">Phase 3 – Write:</span> if valid, write temp results to DB. If not, discard and rollback.</li>
          <li>TS(T) = Validation(T) — serializability order determined at validation time, not start.</li>
          <li>Best for workloads with low conflict — high concurrency without locking overhead.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Multiple Granularity</span>
        </h3>
        <ul className="section-list">
          <li>Data can be locked at different <span className="font-semibold">granularity levels</span>: Database → Table → Record → Field value.</li>
          <li>Locking at a higher level (e.g., whole table) = lower concurrency but fewer lock records.</li>
          <li>Locking at a lower level (e.g., individual record) = higher concurrency but more lock overhead.</li>
          <li><span className="font-semibold">Intention Locks</span> signal intent along the path from root to desired node.</li>
          <li><span className="font-semibold">IS (Intention Shared):</span> will request shared locks on descendants.</li>
          <li><span className="font-semibold">IX (Intention Exclusive):</span> will request exclusive locks on descendants.</li>
          <li><span className="font-semibold">SIX (Shared + Intention Exclusive):</span> current node is shared, but will exclusively lock some descendants.</li>
          <li>Locks are acquired top-down (root first); released bottom-up (leaves first).</li>
        </ul>
      </section>
      <img src="/sem4/dbms/intention_compatibility.png" alt="Compatibility table for intention locks" className="max-w-4xl mx-auto my-4" />

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Log-Based Recovery</span>
        </h3>
        <ul className="section-list">
          <li>The <span className="font-semibold">log file</span> records every start, modification, commit, and abort of every transaction on stable storage.</li>
          <li>Log entries: &lt;Ti, Start&gt;, &lt;Ti, X, OldValue, NewValue&gt;, &lt;Ti, Commit&gt;, &lt;Ti, Abort&gt;.</li>
          <li><span className="font-semibold">Deferred Modification:</span> changes are only saved in the log; actual DB updated only after commit. On failure: no UNDO needed, may need REDO.</li>
          <li><span className="font-semibold">Immediate Modification:</span> DB is modified immediately after each operation (also recorded in log). On failure: may need both UNDO (uncommitted) and REDO (committed but not flushed).</li>
          <li><span className="font-semibold">WAL (Write-Ahead Logging):</span> log entry must be written to stable storage BEFORE the corresponding DB change. Foundation of ARIES.</li>
        </ul>
        <div className="example-block">
          <p className="font-semibold mb-1">Log Example</p>
          <pre>{`<T1, Start>
<T1, A, 400, 300>    ← A changed from 400 to 300
<T1, B, 700, 800>    ← B changed from 700 to 800
<T1, Commit>

On crash: redo T1 (committed). 
If T1 had no commit record: undo T1.`}</pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Checkpoints</span>
        </h3>
        <ul className="section-list">
          <li>A <span className="font-semibold">checkpoint</span> is a bookmark — a point where all prior log entries have been flushed to the DB.</li>
          <li>Reduces recovery time: only transactions after the last checkpoint need to be considered.</li>
          <li>On recovery: read log backward from end to last checkpoint. Transactions with commit → REDO list. Transactions with start but no commit → UNDO list.</li>
        </ul>
        <img src="/sem4/dbms/recovery.png" alt="Recovery using check point" className="max-w-4xl mx-auto my-4" />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">ARIES Algorithm</span>
        </h3>
        <ul className="section-list">
          <li>ARIES = <span className="font-semibold">Algorithm for Recovery and Isolation Exploiting Semantics</span>. Uses write-ahead logging (WAL): a
family of techniques for providing atomicity and durability (two of the ACID properties) in
database systems. The change done by the transactions are first recorded in the log file and
written to stable storage at remote location, before the changes are written to the database.</li>
          <li><span className="font-semibold">Phase 1 – Analysis:</span> scan log forward from last checkpoint to find dirty pages, active transactions at crash time, and start point for REDO.</li>
          <li><span className="font-semibold">Phase 2 – Redo:</span> replay history from smallest LSN of a dirty page — re-apply all logged updates to reconstruct DB state at crash time.</li>
          <li><span className="font-semibold">Phase 3 – Undo:</span> scan log backward — undo all updates of loser (incomplete) transactions in reverse chronological order.</li>
        </ul>
      </section>
      <img src="/sem4/dbms/aries.png" alt="Aries algorithm" className="max-w-4xl mx-auto my-4" />

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">
          <span className="section-subheading">Database Backup</span>
        </h3>
        <ul className="section-list">
          <li><span className="font-semibold">Full Backup:</span> exact copy of entire database every time. Fastest to restore; slowest to back up.</li>
          <li><span className="font-semibold">Incremental Backup:</span> backs up only files changed since the last full backup. Faster backups; more complex restore (need full + all incremental).</li>
          <li><span className="font-semibold">Differential Backup:</span> backs up everything changed since last full backup; does not clear archive bit. Simpler restore than incremental (need full + latest differential).</li>
          <li><span className="font-semibold">Online Backup:</span> DB updates both primary and remote simultaneously — automatic failover on crash.</li>
          <li><span className="font-semibold">Offline Backup:</span> remote DB updated manually at scheduled intervals.</li>
        </ul>
      </section>
    </div>
  );
};