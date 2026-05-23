import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const LexicalAnalyzerGenContent = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Lexical scanners can be constructed in two primary ways: written manually by hand (using custom state loops) or generated automatically by a scanner tool (using regular expression patterns and finite automata).
      </p>

      <section>
        <h3 className="section-heading">Hand-written vs Tool-generated Lexers</h3>
        <p className="p-text mt-2">
          Almost all commercial and production compilers (like GCC, Clang, and rustc) use <strong>hand-written lexers</strong>. They are preferred because they offer better performance, simpler error reporting/recovery, and allow custom behavior without the overhead of state tables. Conversely, <strong>tool-generated lexers</strong> are fast to prototype and easier to maintain.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Input Buffering & Buffer Pairs</h3>
        <p className="p-text mt-2">
          Reading one character at a time from disk/file is highly inefficient. To optimize this, compilers use an **Input Buffering** scheme using **Buffer Pairs**:
        </p>

        <ExpandingBox title="How Buffer Pairs Work" defaultOpen={true}>
          <ul className="section-list my-2 space-y-2">
            <li><strong>Two N-character Buffers:</strong> Alternately reloaded from input files.</li>
            <li><strong>Two Pointers:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li><code>lexemeBegin</code>: Points to the start of the current lexeme being matched.</li>
                <li><code>forward</code>: Moves ahead character-by-character to scan the token.</li>
              </ul>
            </li>
            <li><strong>Sentinels (EOF):</strong> Special marker characters placed at the end of each buffer half to verify if buffer reloading is needed in a single comparison step.</li>
          </ul>
          <pre className="code-block">{`[ b = a + b * 2; |EOF| ]  [ (next buffer block) |EOF| ]
   ^             ^
   lexemeBegin   forward`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Designing a Hand-written Lexer</h3>
        <p className="p-text mt-2">
          A hand-written lexer typically uses a large loop with a <code>switch</code> statement processing the current lookahead character.
        </p>

        <ExpandingBox title="Example: C-style Hand-written Scanning Loop" defaultOpen={false}>
          <pre className="code-block">{`Token next_token() {
    char c = next_char();
    while (isspace(c)) c = next_char(); // skip whitespace
    
    if (isalpha(c)) {
        string lexeme = "";
        while (isalnum(c) || c == '_') {
            lexeme += c;
            c = next_char();
        }
        retract_char(1); // push back extra character
        if (is_keyword(lexeme)) {
            return Token(KEYWORD, lexeme);
        }
        return Token(IDENTIFIER, lexeme);
    }
    
    if (isdigit(c)) {
        string value = "";
        while (isdigit(c)) {
            value += c;
            c = next_char();
        }
        retract_char(1);
        return Token(INTEGER_LITERAL, value);
    }
    
    switch (c) {
        case '=':
            if (peek_char() == '=') {
                next_char();
                return Token(COMPARE_OP, "==");
            }
            return Token(ASSIGN_OP, "=");
        case '+': return Token(ADD_OP, "+");
        case '*': return Token(MUL_OP, "*");
        case ';': return Token(SEMICOLON, ";");
        case EOF: return Token(EOF_TOKEN, "");
        default: return Token(ERROR_TOKEN, string(1, c));
    }
}`}</pre>
        </ExpandingBox>
      </section>
    </div>
  );
};
