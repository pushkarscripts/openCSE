import ExpandingBox from "../components/ExpandingBox";

export const Ch10Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">LR(0) Items &amp; Augmented Grammar</h2>
      <p className="p-text">
        An <strong>LR(0) item</strong> of a grammar is a production rule with a dot (<code>&bull;</code>) inserted somewhere in the right-hand side. The dot indicates how much of a production we have scanned so far.
      </p>
      <div className="bg-black/20 p-4 rounded border border-[#c7a669]/30 my-4 font-mono text-sm">
        <strong>Example:</strong> For production rule <code>A &rarr; X Y Z</code>, we have four items:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><code>A &rarr; &bull; X Y Z</code> (No symbols read yet)</li>
          <li><code>A &rarr; X &bull; Y Z</code> (Just read X, expecting Y next)</li>
          <li><code>A &rarr; X Y &bull; Z</code> (Read X and Y, expecting Z next)</li>
          <li><code>A &rarr; X Y Z &bull;</code> (Fully read, ready to reduce)</li>
        </ul>
      </div>
      <p className="p-text">
        An <strong>Augmented Grammar</strong> introduces a new start symbol <code>S&apos;</code> and a production <code>S&apos; &rarr; S</code>. This serves as a unique indicator that the parser should successfully halt and accept the input when it reduces to the start symbol.
      </p>

      <h2 className="section-heading">Closure and Goto Operations</h2>
      <p className="p-text">
        The parser builds a Deterministic Finite Automaton (DFA) whose states represent sets of items. Two functions, <strong>Closure</strong> and <strong>Goto</strong>, are used to construct these state sets.
      </p>

      <ExpandingBox title="Operation: CLOSURE(I)">
        <p className="p-text">
          If <code>I</code> is a set of items, <code>CLOSURE(I)</code> is constructed as follows:
        </p>
        <ol className="list-decimal list-inside p-text space-y-2 mt-2">
          <li>Initially, add every item in <code>I</code> to <code>CLOSURE(I)</code>.</li>
          <li>If <code>A &rarr; &alpha; &bull; B &beta;</code> is in <code>CLOSURE(I)</code> and <code>B &rarr; &gamma;</code> is a production, then add the item <code>B &rarr; &bull; &gamma;</code> to the closure, if it is not already there.</li>
          <li>Repeat until no more items can be added.</li>
        </ol>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Operation: GOTO(I, X)">
        <p className="p-text">
          If <code>I</code> is a set of items and <code>X</code> is a grammar symbol (terminal or non-terminal), <code>GOTO(I, X)</code> is defined to be the closure of the set of all items of the form <code>A &rarr; &alpha; X &bull; &beta;</code> such that <code>A &rarr; &alpha; &bull; X &beta;</code> is in <code>I</code>.
        </p>
        <p className="p-text">
          Intuitively, GOTO describes the state transition in the parser DFA when the symbol <code>X</code> is successfully shifted.
        </p>
      </ExpandingBox>

      <h2 className="section-heading">Simple LR (SLR) Parsing Table</h2>
      <p className="p-text">
        SLR(1) tables are constructed from the LR(0) states DFA, but it uses <strong>FOLLOW sets</strong> to place reduce actions.
      </p>
      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text">
        <h4 className="font-bold text-[#c7a669]">SLR Table Construction Rules:</h4>
        <ol className="list-decimal list-inside space-y-1.5 mt-2">
          <li>If <code>A &rarr; &alpha; &bull; a &beta;</code> is in state <code>I_i</code> and <code>GOTO(I_i, a) = I_j</code>, set <code>ACTION[i, a] = shift j</code> (for terminal <code>a</code>).</li>
          <li>If <code>A &rarr; &alpha; &bull;</code> is in state <code>I_i</code>, set <code>ACTION[i, a] = reduce A &rarr; &alpha;</code> for all terminals <code>a</code> in <strong>FOLLOW(A)</strong> (where <code>A &ne; S&apos;</code>).</li>
          <li>If <code>S&apos; &rarr; S &bull;</code> is in state <code>I_i</code>, set <code>ACTION[i, $] = accept</code>.</li>
          <li>If <code>GOTO(I_i, A) = I_j</code>, set <code>GOTO[i, A] = j</code> (for non-terminal <code>A</code>).</li>
        </ol>
      </div>
      <p className="p-text font-bold text-red-300 mt-2">
        SLR Conflicts:
      </p>
      <ul className="list-disc list-inside p-text space-y-1.5">
        <li><strong>Shift/Reduce Conflict</strong>: A state contains both a shift item (expecting terminal <code>a</code>) and a reduce item, and <code>a</code> is in the FOLLOW set of the reduced non-terminal.</li>
        <li><strong>Reduce/Reduce Conflict</strong>: A state contains two different reduce items, and their FOLLOW sets share a common terminal, leaving the parser unable to decide which rule to apply.</li>
      </ul>
    </div>
  );
};
