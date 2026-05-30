import ExpandingBox from "../components/ExpandingBox";

export const SlrSolvedProblemContent = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">SLR Solved Problem: E &rarr; BB, B &rarr; cB | d</h2>
      <p className="p-text">
        Let us construct the complete SLR(1) parsing table for the following grammar and trace the verification process for the string <code>ccdd</code>:
      </p>
      
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2">
        (0) E&apos; &rarr; E
        (1) E  &rarr; BB
        (2) B  &rarr; cB
        (3) B  &rarr; d
      </pre>

      <ExpandingBox title="Step 1: Compute FIRST &amp; FOLLOW Sets">
        <ul className="list-disc list-inside p-text space-y-2 font-mono">
          <li><strong>FIRST(E)</strong> = {"{ c, d }"}</li>
          <li><strong>FIRST(B)</strong> = {"{ c, d }"}</li>
          <li><strong>FOLLOW(E)</strong> = {"{ $ }"}</li>
          <li><strong>FOLLOW(B)</strong> = {"{ c, d, $ }"} 
            <div className="text-xs text-[#ac9e91] ml-6 mt-1 font-sans">
              (Since E &rarr; BB, the first B is followed by FIRST(B) = {"{c, d}"}, and the second B is at the end of the production, inheriting FOLLOW(E) = {"{$}"})
            </div>
          </li>
        </ul>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Step 2: Construct Canonical Collection of LR(0) Items">
        <div className="space-y-4 p-text">
          <div>
            <span className="font-bold text-[#c7a669]">State I0 (Initial State):</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`E' -> \u2022 E
E  -> \u2022 BB
B  -> \u2022 cB
B  -> \u2022 d`}
            </pre>
            <div className="text-xs mt-1 text-[#ac9e91]">
              Goto(I0, E) = I1 | Goto(I0, B) = I2 | Goto(I0, c) = I3 | Goto(I0, d) = I4
            </div>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I1 (Accept State):</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`E' -> E \u2022`}
            </pre>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I2:</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`E -> B \u2022 B
B -> \u2022 cB
B -> \u2022 d`}
            </pre>
            <div className="text-xs mt-1 text-[#ac9e91]">
              Goto(I2, B) = I5 | Goto(I2, c) = I3 | Goto(I2, d) = I4
            </div>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I3:</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`B -> c \u2022 B
B -> \u2022 cB
B -> \u2022 d`}
            </pre>
            <div className="text-xs mt-1 text-[#ac9e91]">
              Goto(I3, B) = I6 | Goto(I3, c) = I3 | Goto(I3, d) = I4
            </div>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I4 (Reduce State):</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`B -> d \u2022  [r3]`}
            </pre>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I5 (Reduce State):</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`E -> BB \u2022  [r1]`}
            </pre>
          </div>

          <div>
            <span className="font-bold text-[#c7a669]">State I6 (Reduce State):</span>
            <pre className="bg-black/30 p-2 rounded text-xs font-mono text-[#e2d1c1] mt-1">
{`B -> cB \u2022  [r2]`}
            </pre>
          </div>
        </div>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Step 3: Construct SLR Parsing Table">
        <p className="p-text mb-2">
          Note: <code>sN</code> indicates Shift to state N; <code>rN</code> indicates Reduce using production rule N; <code>acc</code> means Accept.
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse border border-[#c7a669]/40 text-[#e2d1c1] font-mono text-sm">
            <thead>
              <tr className="bg-[#FAE8D7] text-[#1B0D00]">
                <th className="p-2 border border-[#c7a669]/40" rowSpan={2}>State</th>
                <th className="p-2 border border-[#c7a669]/40 text-center" colSpan={3}>ACTION Table</th>
                <th className="p-2 border border-[#c7a669]/40 text-center" colSpan={2}>GOTO Table</th>
              </tr>
              <tr className="bg-[#FAE8D7] text-[#1B0D00]">
                <th className="p-2 border border-[#c7a669]/40">c</th>
                <th className="p-2 border border-[#c7a669]/40">d</th>
                <th className="p-2 border border-[#c7a669]/40">$</th>
                <th className="p-2 border border-[#c7a669]/40">E</th>
                <th className="p-2 border border-[#c7a669]/40">B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">0</td>
                <td className="p-2 border border-[#c7a669]/40">s3</td>
                <td className="p-2 border border-[#c7a669]/40">s4</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40 font-bold text-[#b9fa82]">1</td>
                <td className="p-2 border border-[#c7a669]/40 font-bold text-[#b9fa82]">2</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">1</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40 font-bold text-green-300">acc</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">2</td>
                <td className="p-2 border border-[#c7a669]/40">s3</td>
                <td className="p-2 border border-[#c7a669]/40">s4</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40 font-bold text-[#b9fa82]">5</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">3</td>
                <td className="p-2 border border-[#c7a669]/40">s3</td>
                <td className="p-2 border border-[#c7a669]/40">s4</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40 font-bold text-[#b9fa82]">6</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">4</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r3</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r3</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r3</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">5</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r1</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40 font-bold">6</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r2</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r2</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#c7a669]">r2</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
                <td className="p-2 border border-[#c7a669]/40">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Step 4: Trace Verification of String 'ccdd'">
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse border border-[#c7a669]/40 text-[#e2d1c1] font-mono text-sm">
            <thead>
              <tr className="bg-[#FAE8D7] text-[#1B0D00]">
                <th className="p-2 border border-[#c7a669]/40 w-16">Step</th>
                <th className="p-2 border border-[#c7a669]/40">Stack</th>
                <th className="p-2 border border-[#c7a669]/40">Input Buffer</th>
                <th className="p-2 border border-[#c7a669]/40">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">1</td>
                <td className="p-2 border border-[#c7a669]/40">0</td>
                <td className="p-2 border border-[#c7a669]/40">c c d d $</td>
                <td className="p-2 border border-[#c7a669]/40">Shift to state 3 (s3)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">2</td>
                <td className="p-2 border border-[#c7a669]/40">0 c 3</td>
                <td className="p-2 border border-[#c7a669]/40">c d d $</td>
                <td className="p-2 border border-[#c7a669]/40">Shift to state 3 (s3)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">3</td>
                <td className="p-2 border border-[#c7a669]/40">0 c 3 c 3</td>
                <td className="p-2 border border-[#c7a669]/40">d d $</td>
                <td className="p-2 border border-[#c7a669]/40">Shift to state 4 (s4)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">4</td>
                <td className="p-2 border border-[#c7a669]/40">0 c 3 c 3 d 4</td>
                <td className="p-2 border border-[#c7a669]/40">d $</td>
                <td className="p-2 border border-[#c7a669]/40">Reduce by B &rarr; d (r3). Pop <code>d 4</code>, Goto(3, B) = 6. Push B 6.</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">5</td>
                <td className="p-2 border border-[#c7a669]/40">0 c 3 c 3 B 6</td>
                <td className="p-2 border border-[#c7a669]/40">d $</td>
                <td className="p-2 border border-[#c7a669]/40">Reduce by B &rarr; cB (r2). Pop <code>c 3 B 6</code>, Goto(3, B) = 6. Push B 6.</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">6</td>
                <td className="p-2 border border-[#c7a669]/40">0 c 3 B 6</td>
                <td className="p-2 border border-[#c7a669]/40">d $</td>
                <td className="p-2 border border-[#c7a669]/40">Reduce by B &rarr; cB (r2). Pop <code>c 3 B 6</code>, Goto(0, B) = 2. Push B 2.</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">7</td>
                <td className="p-2 border border-[#c7a669]/40">0 B 2</td>
                <td className="p-2 border border-[#c7a669]/40">d $</td>
                <td className="p-2 border border-[#c7a669]/40">Shift to state 4 (s4)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">8</td>
                <td className="p-2 border border-[#c7a669]/40">0 B 2 d 4</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40">Reduce by B &rarr; d (r3). Pop <code>d 4</code>, Goto(2, B) = 5. Push B 5.</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">9</td>
                <td className="p-2 border border-[#c7a669]/40">0 B 2 B 5</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40">Reduce by E &rarr; BB (r1). Pop <code>B 2 B 5</code>, Goto(0, E) = 1. Push E 1.</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">10</td>
                <td className="p-2 border border-[#c7a669]/40">0 E 1</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#b9fa82] font-bold">Accept (acc)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>
    </div>
  );
};
