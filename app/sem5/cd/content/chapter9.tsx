import ExpandingBox from "../components/ExpandingBox";

export const Ch9Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Bottom-Up Parsing Concept</h2>
      <p className="p-text">
        <strong>Bottom-Up Parsing</strong> is a parsing strategy that begins at the leaf nodes (the input string terminals) and attempts to merge them step-by-step upward until they reach the root node (the start symbol).
      </p>
      <p className="p-text">
        Specifically, a bottom-up parser constructs the <strong>Rightmost Derivation in Reverse</strong>. As the parser scans the input, it identifies a substring that matches the right-hand side of a production rule and <strong>reduces</strong> it to the left-hand non-terminal.
      </p>

      <h2 className="section-heading">Parser Actions</h2>
      <p className="p-text">
        A shift-reduce parser maintains an input buffer and a stack. It decides its moves based on four fundamental actions:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-black/20 p-4 rounded-lg border border-[#c7a669]/30">
          <h4 className="font-bold text-[#c7a669] mb-1">1. Shift</h4>
          <p className="p-text text-sm">
            Read the next input symbol from the buffer, push it onto the parser stack, and advance the input pointer.
          </p>
        </div>
        <div className="bg-black/20 p-4 rounded-lg border border-[#c7a669]/30">
          <h4 className="font-bold text-[#c7a669] mb-1">2. Reduce</h4>
          <p className="p-text text-sm">
            When the top of the stack matches the right-hand side of a production rule, pop those symbols off and push the corresponding left-hand non-terminal variable.
          </p>
        </div>
        <div className="bg-black/20 p-4 rounded-lg border border-[#c7a669]/30">
          <h4 className="font-bold text-[#c7a669] mb-1">3. Accept</h4>
          <p className="p-text text-sm">
            If the stack contains only the start symbol and the input buffer is exhausted (contains only <code>$</code>), declare successful parse completion.
          </p>
        </div>
        <div className="bg-black/20 p-4 rounded-lg border border-[#c7a669]/30">
          <h4 className="font-bold text-[#c7a669] mb-1">4. Error</h4>
          <p className="p-text text-sm">
            If the parser cannot perform a shift or reduce action, invoke error recovery syntax diagnostics.
          </p>
        </div>
      </div>

      <h2 className="section-heading">Handles and Handle Pruning</h2>
      <p className="p-text">
        Informally, a <strong>handle</strong> of a right-sentential form &gamma; is a substring &beta; that matches the right side of a production rule <code>A &rarr; &beta;</code>, and whose reduction to <code>A</code> represents one step of the rightmost derivation in reverse.
      </p>
      <p className="p-text">
        <strong>Handle Pruning</strong> is the process of locating a handle in a right-sentential form and replacing it with the non-terminal, working backwards to reconstruct the derivation.
      </p>

      <ExpandingBox title="Architecture: LR Parser Block Diagram">
        <p className="p-text text-[#3d1f00] mb-3">
          An LR parser is driven by a stack containing state symbols, an input buffer, and two parsing tables (ACTION and GOTO).
        </p>

        {/* Outer framed container */}
        <div className="border-2 border-[#c7a669] rounded-lg p-4 bg-[#fae8d7]/20 font-mono text-xs text-[#1b0d00]">

          {/* Title */}
          <div className="text-center font-bold text-sm text-[#5a2d00] mb-4 tracking-widest uppercase">
            LR Parser Driver
          </div>

          {/*
            CSS Grid layout:
              col 1 : STACK (spans rows 1–3)
              col 2 : horizontal arrow (row 1) | empty (rows 2–3)
              col 3 : PARSING TABLES (row 1) | ▲ connector (row 2) | INPUT BUFFER (row 3)
          */}
          <div
            className="grid gap-x-3 gap-y-0"
            style={{ gridTemplateColumns: "auto auto 1fr", gridTemplateRows: "auto auto auto" }}
          >
            {/* STACK — spans all 3 rows */}
            <div
              className="border-2 border-[#c7a669] rounded p-3 bg-[#ebdcb0]/40"
              style={{ gridRow: "1 / 4", gridColumn: "1" }}
            >
              <div className="font-bold text-[#5a2d00] text-center border-b border-[#c7a669]/40 pb-1 mb-2">
                STACK
              </div>
              <div className="space-y-1 text-[#3d1f00]">
                <div>State&nbsp;&nbsp;&nbsp;S_n</div>
                <div>Symbol&nbsp;X_n</div>
                <div>State&nbsp;&nbsp;&nbsp;S_n&#8209;1</div>
                <div className="text-[#8a6a40]">...</div>
                <div>State&nbsp;&nbsp;&nbsp;0</div>
              </div>
            </div>

            {/* Bidirectional arrow — row 1, col 2 (aligns with PARSING TABLES) */}
            <div
              className="flex items-center justify-center px-2 text-[#c7a669] font-bold text-base"
              style={{ gridRow: "1", gridColumn: "2" }}
            >
              &#x25C4;&#x2500;&#x2500;&#x2500;&#x25BA;
            </div>

            {/* PARSING TABLES — row 1, col 3 */}
            <div
              className="border-2 border-[#c7a669] rounded p-3 bg-[#ebdcb0]/40"
              style={{ gridRow: "1", gridColumn: "3" }}
            >
              <div className="font-bold text-[#5a2d00] border-b border-[#c7a669]/40 pb-1 mb-2">
                PARSING TABLES
              </div>
              <div className="text-[#3d1f00] space-y-1">
                <div>
                  <span className="text-[#c7a669] font-bold">ACTION</span>
                  [state, terminal]
                </div>
                <div>
                  <span className="text-[#c7a669] font-bold">GOTO</span>
                  [state, nonterminal]
                </div>
              </div>
            </div>

            {/* Empty (arrow col, row 2) */}
            <div style={{ gridRow: "2", gridColumn: "2" }} />

            {/* ▲ connector — row 2, col 3 */}
            <div
              className="flex justify-center items-center py-1 text-[#c7a669] text-xl leading-none"
              style={{ gridRow: "2", gridColumn: "3" }}
            >
              &#x25B2;
            </div>

            {/* Empty (arrow col, row 3) */}
            <div style={{ gridRow: "3", gridColumn: "2" }} />

            {/* INPUT BUFFER — row 3, col 3 */}
            <div
              className="border-2 border-[#c7a669] rounded p-3 bg-[#ebdcb0]/40"
              style={{ gridRow: "3", gridColumn: "3" }}
            >
              <div className="font-bold text-[#5a2d00] border-b border-[#c7a669]/40 pb-1 mb-1">
                INPUT BUFFER
              </div>
              <div className="text-[#3d1f00]">
                a<sub>1</sub>&nbsp; a<sub>2</sub>&nbsp; &hellip;&nbsp; a<sub>i</sub>&nbsp; &hellip;&nbsp; a<sub>n</sub>&nbsp; $
              </div>
            </div>
          </div>

          {/* Output label */}
          <div className="text-center mt-4 text-[#5a2d00] font-semibold tracking-wide text-xs border-t border-[#c7a669]/30 pt-3">
            OUTPUT: Rightmost derivation (reversed)
          </div>
        </div>
      </ExpandingBox>
    </div>
  );
};
