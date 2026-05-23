import ExpandingBox from "../components/ExpandingBox";

export const Ch8Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Top-Down Parsing Concept</h2>
      <p className="p-text">
        <strong>Top-Down Parsing</strong> is a parsing strategy that attempts to find a leftmost derivation for an input string by building the parse tree from the root (start symbol) down to the leaves (input terminals).
      </p>
      <p className="p-text">
        Top-down parsers are categorized into:
      </p>
      <ul className="list-disc list-inside p-text space-y-2 mb-4">
        <li><strong>Recursive Descent Parser</strong>: A parser that uses recursive procedures to parse the input, which may require backtracking if multiple choices match the current lookahead.</li>
        <li><strong>Predictive LL(1) Parser</strong>: A non-recursive, table-driven parser that reads input from <strong>L</strong>eft to right, constructs a <strong>L</strong>eftmost derivation, and uses exactly <strong>1</strong> lookahead symbol to decide which production to apply without backtracking.</li>
      </ul>

      <h2 className="section-heading">Computing FIRST and FOLLOW Sets</h2>
      <p className="p-text">
        To construct an LL(1) predictive parsing table, the parser must compute two collections of terminal symbols: <strong>FIRST</strong> and <strong>FOLLOW</strong>.
      </p>

      <ExpandingBox title="Algorithm: Computing FIRST(X)">
        <p className="p-text font-bold">
          Rules to compute FIRST for any grammar symbol X:
        </p>
        <ol className="list-decimal list-inside p-text space-y-2 mt-2">
          <li>If <code>X</code> is a terminal, then <code className="bg-[#FAE8D7]/30 px-1.5 py-0.5 rounded font-mono">FIRST(X) = {"{ X }"}</code>.</li>
          <li>If there is a production <code>X &rarr; &epsilon;</code>, then add <code>&epsilon;</code> to <code>FIRST(X)</code>.</li>
          <li>If <code>X</code> is a non-terminal and <code>X &rarr; Y_1 Y_2 ... Y_k</code> is a production:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Add all terminals of <code>FIRST(Y_1)</code> to <code>FIRST(X)</code>.</li>
              <li>If <code>Y_1</code> can derive <code>&epsilon;</code>, add all terminals of <code>FIRST(Y_2)</code> to <code>FIRST(X)</code>, and so on.</li>
              <li>If all <code>Y_1 ... Y_k</code> can derive <code>&epsilon;</code>, then add <code>&epsilon;</code> to <code>FIRST(X)</code>.</li>
            </ul>
          </li>
        </ol>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Algorithm: Computing FOLLOW(A)">
        <p className="p-text font-bold">
          Rules to compute FOLLOW for all non-terminals A:
        </p>
        <ol className="list-decimal list-inside p-text space-y-2 mt-2">
          <li>If <code>S</code> is the start symbol, add <code>$</code> (end of input marker) to <code>FOLLOW(S)</code>.</li>
          <li>If there is a production <code>A &rarr; &alpha; B &beta;</code>, then add everything in <code>FIRST(&beta;)</code> (except <code>&epsilon;</code>) to <code>FOLLOW(B)</code>.</li>
          <li>If there is a production <code>A &rarr; &alpha; B</code>, or a production <code>A &rarr; &alpha; B &beta;</code> where <code>&epsilon; &isin; FIRST(&beta;)</code>, then add everything in <code>FOLLOW(A)</code> to <code>FOLLOW(B)</code>.</li>
        </ol>
      </ExpandingBox>

      <h2 className="section-heading">LL(1) Grammars and Table Construction</h2>
      <p className="p-text">
        A grammar is LL(1) if and only if, for any two distinct productions <code>A &rarr; &alpha;</code> and <code>A &rarr; &beta;</code>:
      </p>
      <ul className="list-disc list-inside p-text space-y-2 mb-4">
        <li><code>FIRST(&alpha;)</code> and <code>FIRST(&beta;)</code> are disjoint sets.</li>
        <li>If <code>&epsilon; &isin; FIRST(&alpha;)</code>, then <code>FIRST(&beta;)</code> and <code>FOLLOW(A)</code> are disjoint.</li>
      </ul>
      <p className="p-text">
        These rules ensure that the parser table has <strong>no multi-entry cells</strong> (conflicts). In the next section, we will walk through a complete, step-by-step solved problem constructing the LL(1) table.
      </p>
    </div>
  );
};
