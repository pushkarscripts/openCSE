import ExpandingBox from "../components/ExpandingBox";

export const Ll1SolvedProblemContent = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Problem 1: LL(1) Table Construction</h2>
      <p className="p-text">
        Analyze the following grammar representing conditional statements (if-else):
      </p>
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2">
        S  &rarr; iEtSS&apos; | a
        S&apos; &rarr; eS | &epsilon;
        E  &rarr; b
      </pre>
      <p className="p-text">
        Where terminals are: <code className="bg-[#FAE8D7]/30 px-1 rounded">i, e, t, a, b</code> and the start symbol is <strong>S</strong>.
      </p>

      <ExpandingBox title="Step 1: Compute FIRST &amp; FOLLOW Sets">
        <h4 className="font-bold text-[#c7a669] mb-2 text-md">FIRST Sets:</h4>
        <ul className="list-disc list-inside p-text space-y-1">
          <li><strong>FIRST(E)</strong> = {"{ b }"}</li>
          <li><strong>FIRST(S&apos;)</strong> = {"{ e, \u03B5 }"} (since S&apos; &rarr; eS and S&apos; &rarr; &epsilon;)</li>
          <li><strong>FIRST(S)</strong> = {"{ i, a }"} (since S &rarr; iEtSS&apos; and S &rarr; a)</li>
        </ul>

        <h4 className="font-bold text-[#c7a669] my-2 text-md">FOLLOW Sets:</h4>
        <ul className="list-disc list-inside p-text space-y-2">
          <li><strong>FOLLOW(S)</strong>:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Start symbol receives <code>$</code>.</li>
              <li>In production <code>S &rarr; iEtSS&apos;</code>, the symbol <code>S</code> is followed by <code>S&apos;</code>. So add <code>FIRST(S&apos;) - {"{\u03B5}"} = {"{ e }"}</code>.</li>
              <li>Since <code>S&apos;</code> can derive <code>&epsilon;</code>, add <code>FOLLOW(S)</code> (already includes <code>$, e</code>).</li>
              <li>Result: <strong>FOLLOW(S) = {"{ e, $ }"}</strong>.</li>
            </ul>
          </li>
          <li><strong>FOLLOW(S&apos;)</strong>:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>S&apos; appears at the end of <code>S &rarr; iEtSS&apos;</code>, so add <code>FOLLOW(S)</code>.</li>
              <li>Result: <strong>FOLLOW(S&apos;) = {"{ e, $ }"}</strong>.</li>
            </ul>
          </li>
          <li><strong>FOLLOW(E)</strong>:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>E appears in <code>S &rarr; iEtSS&apos;</code> followed by <code>t</code>.</li>
              <li>Result: <strong>FOLLOW(E) = {"{ t }"}</strong>.</li>
            </ul>
          </li>
        </ul>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Step 2: Construct the LL(1) Parsing Table">
        <p className="p-text text-[#3d1f00] mb-2">
          Place production <code className="bg-[#c7a669]/20 px-1 rounded">A &rarr; &alpha;</code> in cell <code className="bg-[#c7a669]/20 px-1 rounded">M[A, a]</code> for all <code>a &isin; FIRST(&alpha;)</code>. If <code>&epsilon; &isin; FIRST(&alpha;)</code>, place the production in <code className="bg-[#c7a669]/20 px-1 rounded">M[A, b]</code> for all <code>b &isin; FOLLOW(A)</code>.
        </p>

        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse border-2 border-[#c7a669] text-[#1b0d00] font-mono text-sm">
            <thead>
              <tr className="bg-[#c7a669]/60">
                <th className="p-2 border border-[#c7a669]">Non-Terminal</th>
                <th className="p-2 border border-[#c7a669]">a</th>
                <th className="p-2 border border-[#c7a669]">b</th>
                <th className="p-2 border border-[#c7a669]">e</th>
                <th className="p-2 border border-[#c7a669]">i</th>
                <th className="p-2 border border-[#c7a669]">t</th>
                <th className="p-2 border border-[#c7a669]">$</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#fae8d7]/60">
                <td className="p-2 border border-[#c7a669]/60 font-bold">S</td>
                <td className="p-2 border border-[#c7a669]/60 font-semibold text-[#5a2d00]">S &rarr; a</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 font-semibold text-[#5a2d00]">S &rarr; iEtSS&apos;</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
              </tr>
              <tr className="bg-[#ebdcb0]/30">
                <td className="p-2 border border-[#c7a669]/60 font-bold">S&apos;</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 font-semibold text-[#5a2d00]">S&apos; &rarr; eS</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 font-semibold text-[#5a2d00]">S&apos; &rarr; &epsilon;</td>
              </tr>
              <tr className="bg-[#fae8d7]/60">
                <td className="p-2 border border-[#c7a669]/60 font-bold">E</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 font-semibold text-[#5a2d00]">E &rarr; b</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
                <td className="p-2 border border-[#c7a669]/60 text-[#8a6a40]">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[#3a6b00] font-semibold text-sm bg-[#d4f0a0]/40 border border-[#3a6b00]/30 p-2 rounded">
          &#10003; Analysis: Since every cell contains at most one production, there are no conflicts. Therefore, this grammar is LL(1).
        </p>
      </ExpandingBox>

      <hr className="my-6 border-t border-[#c7a669]/30" />

      <h2 className="section-heading">Problem 2: Tracing Expression string in LL(1)</h2>
      <p className="p-text">
        Consider the unambiguous Expression grammar:
      </p>
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2">
        E  &rarr; TE&apos;
        E&apos; &rarr; +TE&apos; | &epsilon;
        T  &rarr; FT&apos;
        T&apos; &rarr; *FT&apos; | &epsilon;
        F  &rarr; (E) | id
      </pre>

      <ExpandingBox title="Step-by-Step Stack Trace for 'id + id * id'">
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left border-collapse border border-[#c7a669]/40 text-[#e2d1c1] font-mono text-sm">
            <thead>
              <tr className="bg-[#FAE8D7] text-[#1B0D00]">
                <th className="p-2 border border-[#c7a669]/40 w-16">Step</th>
                <th className="p-2 border border-[#c7a669]/40">Stack</th>
                <th className="p-2 border border-[#c7a669]/40">Input Buffer</th>
                <th className="p-2 border border-[#c7a669]/40">Production / Action Applied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">1</td>
                <td className="p-2 border border-[#c7a669]/40">$ E</td>
                <td className="p-2 border border-[#c7a669]/40">id + id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">E &rarr; TE&apos;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">2</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T</td>
                <td className="p-2 border border-[#c7a669]/40">id + id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">T &rarr; FT&apos;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">3</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; F</td>
                <td className="p-2 border border-[#c7a669]/40">id + id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">F &rarr; id</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">4</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; id</td>
                <td className="p-2 border border-[#c7a669]/40">id + id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">Match <code>id</code> (pop stack, advance input)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">5</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos;</td>
                <td className="p-2 border border-[#c7a669]/40">+ id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">T&apos; &rarr; &epsilon;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">6</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos;</td>
                <td className="p-2 border border-[#c7a669]/40">+ id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">E&apos; &rarr; +TE&apos;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">7</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T +</td>
                <td className="p-2 border border-[#c7a669]/40">+ id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">Match <code>+</code> (pop stack, advance input)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">8</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T</td>
                <td className="p-2 border border-[#c7a669]/40">id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">T &rarr; FT&apos;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">9</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; F</td>
                <td className="p-2 border border-[#c7a669]/40">id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">F &rarr; id</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">10</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; id</td>
                <td className="p-2 border border-[#c7a669]/40">id * id $</td>
                <td className="p-2 border border-[#c7a669]/40">Match <code>id</code> (pop stack, advance input)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">11</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos;</td>
                <td className="p-2 border border-[#c7a669]/40">* id $</td>
                <td className="p-2 border border-[#c7a669]/40">T&apos; &rarr; *FT&apos;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">12</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; F *</td>
                <td className="p-2 border border-[#c7a669]/40">* id $</td>
                <td className="p-2 border border-[#c7a669]/40">Match <code>*</code> (pop stack, advance input)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">13</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; F</td>
                <td className="p-2 border border-[#c7a669]/40">id $</td>
                <td className="p-2 border border-[#c7a669]/40">F &rarr; id</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">14</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos; id</td>
                <td className="p-2 border border-[#c7a669]/40">id $</td>
                <td className="p-2 border border-[#c7a669]/40">Match <code>id</code> (pop stack, advance input)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">15</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos; T&apos;</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40">T&apos; &rarr; &epsilon;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">16</td>
                <td className="p-2 border border-[#c7a669]/40">$ E&apos;</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40">E&apos; &rarr; &epsilon;</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#c7a669]/40">17</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40">$</td>
                <td className="p-2 border border-[#c7a669]/40 text-[#b9fa82] font-bold">Accept string successfully!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>
    </div>
  );
};
