import ExpandingBox from "../components/ExpandingBox";

export const LalrSolvedProblemContent = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Problem 1: LALR Table for S &rarr; bBb, B &rarr; ab | d</h2>
      <p className="p-text">
        Construct the LALR(1) parsing table for the grammar:
      </p>
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2">
        S &rarr; bBb
        B &rarr; ab | d
      </pre>

      <ExpandingBox title="Step-by-Step LALR State Item Sets">
        <div className="space-y-4 p-text font-mono text-xs">
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I0:</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`S' -> \u2022 S    , $
S  -> \u2022 b B b  , $`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I1:</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`S' -> S \u2022    , $`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I2 (after shifting &apos;b&apos;):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`S -> b \u2022 B b  , $
B -> \u2022 a b    , b
B -> \u2022 d      , b`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I3 (after shifting B):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`S -> b B \u2022 b  , $`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I4 (after shifting &apos;a&apos;):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`B -> a \u2022 b    , b`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I5 (Reduce B &rarr; d):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`B -> d \u2022      , b`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I6 (after shifting &apos;b&apos; from state 3):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`S -> b B b \u2022  , $`}
            </pre>
          </div>
          <div>
            <span className="font-bold text-[#c7a669] font-sans">State I7 (Reduce B &rarr; ab):</span>
            <pre className="bg-black/30 p-2 rounded text-[#e2d1c1] mt-1">
{`B -> a b \u2022    , b`}
            </pre>
          </div>
        </div>
        <p className="p-text mt-3 font-sans text-sm">
          Since the LR(1) core item sets do not contain duplicate cores with different lookaheads, the resulting LALR table is identical to the SLR table with lookaheads properly restricted to <code>FOLLOW(B) = {"{ b }"}</code> and <code>FOLLOW(S) = {"{ $ }"}</code>.
        </p>
      </ExpandingBox>

      <hr className="my-6 border-t border-[#c7a669]/30" />

      <h2 className="section-heading">Problem 2: Proof that Grammar is LR(1) but NOT LALR</h2>
      <p className="p-text font-bold">
        Given Grammar:
      </p>
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2">
        S &rarr; A a | b A c | B c | b B a
        A &rarr; d
        B &rarr; d
      </pre>

      <ExpandingBox title="Detailed Mathematical Conflict Proof">
        <p className="p-text">
          Let us trace the LR(1) states involving the shift of <code>d</code> to show why CLR works but LALR fails due to lookahead collision:
        </p>
        
        <h4 className="font-bold text-[#c7a669] mt-3 mb-1 text-sm">1. CLR(1) Parsing States (Disjoint Lookaheads)</h4>
        <p className="p-text text-sm">
          From the start state <code>I0</code>, shifting <code>d</code> takes us to state <code>I_d</code>:
        </p>
        <pre className="bg-black/30 p-3 rounded text-xs font-mono text-[#e2d1c1] my-2">
{`I_d:
  A -> d \u2022 , a   (reduce A -> d only if next input is 'a')
  B -> d \u2022 , c   (reduce B -> d only if next input is 'c')`}
        </pre>
        <p className="p-text text-sm text-[#b9fa82] font-semibold">
          No conflict exists in CLR! If lookahead is &apos;a&apos;, reduce using rule 5. If lookahead is &apos;c&apos;, reduce using rule 6.
        </p>

        <p className="p-text text-sm mt-3">
          Similarly, from state <code>I_b</code> (after shifting <code>b</code>), shifting <code>d</code> takes us to state <code>I_bd</code>:
        </p>
        <pre className="bg-black/30 p-3 rounded text-xs font-mono text-[#e2d1c1] my-2">
{`I_bd:
  A -> d \u2022 , c   (reduce A -> d only if next input is 'c')
  B -> d \u2022 , a   (reduce B -> d only if next input is 'a')`}
        </pre>
        <p className="p-text text-sm text-[#b9fa82] font-semibold">
          No conflict exists here either!
        </p>

        <h4 className="font-bold text-red-400 mt-4 mb-1 text-sm">2. LALR(1) State Merging (Core Collision)</h4>
        <p className="p-text text-sm">
          LALR merges states that have the exact same LR(0) cores. Notice that <code>I_d</code> and <code>I_bd</code> both have the core:
        </p>
        <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] my-2">
{`{ A -> d \u2022 , B -> d \u2022 }`}
        </pre>
        <p className="p-text text-sm">
          LALR merges them into a single state <code>I_merged</code> and unions the lookahead sets:
        </p>
        <pre className="bg-black/30 p-3 rounded text-xs font-mono text-red-300 my-2">
{`I_merged:
  A -> d \u2022 , a/c  (reduce A -> d on 'a' or 'c')
  B -> d \u2022 , a/c  (reduce B -> d on 'a' or 'c')`}
        </pre>

        <p className="p-text font-bold text-red-400 mt-3">
          Resulting Conflict:
        </p>
        <p className="p-text text-sm">
          In LALR, if the parser is in <code>I_merged</code> and the lookahead symbol is <code>a</code>, it cannot decide whether to reduce using <code>A &rarr; d</code> or <code>B &rarr; d</code>. The same occurs if the lookahead is <code>c</code>. 
        </p>
        <p className="p-text text-sm text-red-400 font-semibold border border-red-500/20 p-2 rounded bg-red-500/5 mt-1">
          This introduces a REDUCE/REDUCE conflict. Thus, the grammar is LR(1) but NOT LALR(1).
        </p>
      </ExpandingBox>
    </div>
  );
};
