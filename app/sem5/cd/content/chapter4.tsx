import React from "react";
import Link from "next/link";
import ExpandingBox from "../components/ExpandingBox";

export const Ch4Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        The primary responsibility of the <span className="font-semibold">Lexical Analyzer</span> (or scanner) is to read the input characters of the source program and group them into lexically valid units called tokens.
      </p>

      <section>
        <h3 className="section-heading">Tokens, Lexemes, and Patterns</h3>
        <p className="p-text mt-2">
          It is crucial to understand the formal distinction between these three core concepts:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="card">
            <h4 className="font-bold text-lg mb-1 text-[#5b3a29]">Pattern</h4>
            <p className="text-sm">
              The descriptive rule (typically represented by a <strong>regular expression</strong>) that defines what character sequence is required to match a specific token category.
            </p>
            <p className="mt-2 text-xs italic text-[#5b3a29]/80">
              Example: [a-zA-Z_][a-zA-Z0-9_]*
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-1 text-[#5b3a29]">Lexeme</h4>
            <p className="text-sm">
              The actual, physical character sequence from the source code that matches the pattern rule.
            </p>
            <p className="mt-2 text-xs italic text-[#5b3a29]/80">
              Example: &quot;counter&quot;, &quot;sum_val&quot;
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-1 text-[#5b3a29]">Token</h4>
            <p className="text-sm">
              The abstract logical category produced by the scanner, along with optional attribute values, to send to the parser.
            </p>
            <p className="mt-2 text-xs italic text-[#5b3a29]/80">
              Example: &lt;IDENTIFIER, &quot;counter&quot;&gt;
            </p>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Token Categories & Attributes</h3>
        <p className="p-text mt-2">
          Typically, programming languages define these categories of tokens:
        </p>
        <ul className="section-list my-2">
          <li><strong>Keywords:</strong> Reserved strings with fixed semantic meaning (e.g., <code>if</code>, <code>while</code>, <code>return</code>).</li>
          <li><strong>Identifiers:</strong> User-defined names for variables, classes, or functions.</li>
          <li><strong>Literals:</strong> Constants (e.g., integers like <code>42</code>, floating points like <code>3.14</code>, string values like <code>&quot;hello&quot;</code>).</li>
          <li><strong>Operators:</strong> Arithmetic, logical, or comparison symbols (e.g., <code>+</code>, <code>&amp;&amp;</code>, <code>==</code>).</li>
          <li><strong>Punctuation/Separators:</strong> Structural symbols (e.g., <code>;</code>, <code>(</code>, <code>&#123;</code>).</li>
        </ul>

        <ExpandingBox title="How the Lexer Passes Attributes to the Parser" defaultOpen={false}>
          <p>
            When matching complex tokens (like numbers or variables), the parser needs to know both the token&apos;s type and its specific value (lexeme). The lexer bundles these together as:
          </p>
          <div className="bg-[#1A2130] text-[#B0FFB4] p-3 rounded-lg font-mono text-sm my-2">
            &lt;Token_Type, Attribute_Value&gt;
          </div>
          <p>
            For instance, the source code segment <code>x = 42</code> translates into three token packets:
          </p>
          <pre className="code-block">{`1. <IDENTIFIER, Pointer_To_Symbol_Table_Entry_For_x>
2. <ASSIGN_OP, ->
3. <INTEGER_LITERAL, 42>`}</pre>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Maximal Munch Rule</h3>
        <p className="p-text mt-2">
          When scanning, the lexer must resolve ambiguity (e.g., is <code>&lt;=</code> a less-than sign followed by equals, or a single less-than-or-equal-to comparison?). The lexer resolves this using the <strong>Maximal Munch (longest match) rule</strong>: always match the longest sequence of characters that can form a valid token.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section className="bg-[#f3e7c2]/10 border border-[#c7a669]/30 p-5 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Detailed Deep Dive</h3>
        <p className="mb-4">
          Learn how to design lexical analyzers, handle buffer pairs, and see the differences between hand-written scanners and tool-generated DFAs:
        </p>
        <Link
          href="/sem5/cd/ch4-lexical-analyzer-gen"
          className="inline-block px-5 py-2 bg-[#ebdcb0] text-[#1b0d00] hover:bg-[#c7a669] transition rounded-lg font-bold"
        >
          Explore Hand-written vs Tool Lexers →
        </Link>
      </section>
    </div>
  );
};
