import ExpandingBox from "../components/ExpandingBox";

export const Ch12Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Ambiguity Handling in Parser Generators</h2>
      <p className="p-text">
        In real-world compiler construction, restructurings to make grammars completely unambiguous can lead to many extra production rules and complex parse trees. 
      </p>
      <p className="p-text">
        To avoid this, parser generators (like Yacc, Bison, or ANTLR) allow developers to write compact, ambiguous grammars and resolve ambiguity by declaring <strong>operator precedence</strong> and <strong>associativity</strong> rules:
      </p>
      <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-sm my-2 font-semibold">
{`%left '+' '-'     /* Left-associative, lowest precedence */
%left '*' '/'     /* Left-associative, higher precedence */
%right '^'        /* Right-associative, highest precedence */`}
      </pre>
      <p className="p-text">
        The parser generator uses these rules to decide whether to shift or reduce when a table conflict occurs, keeping the parser deterministic.
      </p>

      <h2 className="section-heading">Solved Exam Problems</h2>
      
      <ExpandingBox title="Q1: Show why the Dangling-Else grammar is Ambiguous">
        <p className="p-text">
          Consider the conditional grammar (dangling-else):
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-2.5 rounded font-mono text-sm my-2">
          S &rarr; iCtS | iCtSeS | a
          C &rarr; b
        </pre>
        <p className="p-text">
          Let us trace the input string: <code className="bg-[#FAE8D7]/30 px-1 rounded">i b t i b t a e a</code> (representing: <code>if b then if b then a else a</code>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-[#e2d1c1]">
          <div className="border border-[#c7a669]/40 p-3 rounded bg-black/10">
            <h5 className="font-bold text-[#c7a669] mb-1">Interpretation 1:</h5>
            <p className="text-xs italic mb-2">The else associates with the INNER/second if.</p>
            <pre className="font-mono text-xs text-[#e2d1c1]">
{`       S
     / | \\
    i  C  t   S
       |    / | \\
       b   i  C  t  S  e  S
              |     |     |
              b     a     a`}
            </pre>
          </div>

          <div className="border border-[#c7a669]/40 p-3 rounded bg-black/10">
            <h5 className="font-bold text-[#c7a669] mb-1">Interpretation 2:</h5>
            <p className="text-xs italic mb-2">The else associates with the OUTER/first if.</p>
            <pre className="font-mono text-xs text-[#e2d1c1]">
{`             S
        / / | \\ \\
       i C  t  S e S
         |     |   |
         b     S   a
             / | \\
            i  C  t  S
               |     |
               b     a`}
            </pre>
          </div>
        </div>

        <p className="p-text mt-3 text-red-300">
          <strong>Conclusion:</strong> Because the string matches two separate parse tree structures, the Dangling-Else grammar is <strong>ambiguous</strong>. (In practice, parsers default to matching the <code>else</code> with the nearest open <code>if</code>).
        </p>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Q2: Why Every Ambiguous Grammar is NOT LR?">
        <p className="p-text">
          By definition, an LR parser operates deterministically, scanning the input left-to-right and constructing exactly one rightmost derivation in reverse.
        </p>
        <p className="p-text mt-2">
          If a grammar is ambiguous, it means there exists at least one string that has two or more distinct rightmost derivations. When compiling the parsing table for such a grammar, the parser generator will encounter cells where multiple actions are valid (e.g. both shift and reduce, or two different reduces). 
        </p>
        <p className="p-text mt-2 text-red-300 font-semibold">
          Since these conflicts are inevitable for ambiguous grammars, no ambiguous grammar can ever be LR.
        </p>
      </ExpandingBox>

      <div className="my-4" />

      <ExpandingBox title="Q3: Why CLR(1) detects errors earlier than LALR?">
        <p className="p-text">
          Because LALR merges states that have the same core, it combines lookahead sets. This merging can sometimes delay the detection of a syntax error.
        </p>
        <p className="p-text mt-2">
          Specifically, an LALR parser may perform one or more <strong>reduce actions</strong> using the combined lookahead sets before checking the input buffer and realizing that no valid transition exists.
        </p>
        <p className="p-text mt-2 text-[#b9fa82] font-semibold">
          A CLR(1) parser, keeping states separate with exact lookaheads, will immediately recognize the invalid lookahead symbol and report a syntax error before performing any incorrect reductions.
        </p>
      </ExpandingBox>

      <h2 className="section-heading">Syntax Error Recovery Strategies</h2>
      <p className="p-text">
        If a parser encounters an error, it shouldn&apos;t just stop compiling. It needs to recover from the error to check the rest of the file for other syntax issues.
      </p>
      <ul className="list-disc list-inside p-text space-y-2.5 mb-4">
        <li><strong>Panic-Mode Recovery</strong>: The parser discards input tokens one by one until it finds a synchronizing token (such as a semicolon <code>;</code> or closing brace <code>{"}"}</code>) and then pops states off the stack until it can resume parsing.</li>
        <li><strong>Phrase-Level Recovery</strong>: The parser performs local correction on the input (e.g., inserting a missing semicolon or replacing a common typo) to allow the parsing engine to proceed.</li>
      </ul>
    </div>
  );
};
