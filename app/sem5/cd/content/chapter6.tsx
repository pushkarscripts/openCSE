import React from "react";
import Link from "next/link";
import ExpandingBox from "../components/ExpandingBox";

export const Ch6Content = () => {
  return (
    <div className="course-content">
      <p className="p-text">
        Finite Automata are the mathematical engines driving lexical scanners. The lexer uses these state transitions to recognize token patterns.
      </p>

      <section>
        <h3 className="section-heading">NFA vs DFA</h3>
        <p className="p-text mt-2">
          An automaton is deterministic if each input symbol uniquely determines the next state.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="card bg-[#f3e7c2]/20">
            <h4 className="font-bold text-lg mb-1 text-[#7a523c]">NFA (Non-deterministic)</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Can have multiple transitions from a single state on the same input symbol.</li>
              <li>Supports <strong>epsilon (ε) transitions</strong> (moves that consume no character).</li>
              <li>Easy to construct from regular expressions but harder to implement.</li>
            </ul>
          </div>
          <div className="card bg-[#f3e7c2]/20">
            <h4 className="font-bold text-lg mb-1 text-[#7a523c]">DFA (Deterministic)</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Exactly one transition for each state-character pair.</li>
              <li>No epsilon (ε) transitions.</li>
              <li>Directly implementable in code using efficient 2D lookup tables.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section>
        <h3 className="section-heading">Thompson&apos;s Construction (Regex to NFA)</h3>
        <p className="p-text mt-2">
          Thompson&apos;s Construction is an algorithm that converts any regular expression into an equivalent NFA. It builds states recursively:
        </p>

        <ExpandingBox title="Thompson's Construction Rules" defaultOpen={true}>
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <strong>1. Base Character (a):</strong>
              <pre className="code-block">{`q0 --a--> q1`}</pre>
            </div>
            <div>
              <strong>2. Concatenation (r s):</strong>
              <p>Directly chain the accept state of <code>r</code> to the start state of <code>s</code> via an epsilon transition.</p>
              <pre className="code-block">{`[Start_r] ... [Accept_r] --ε--> [Start_s] ... [Accept_s]`}</pre>
            </div>
            <div>
              <strong>3. Union / Alternation (r | s):</strong>
              <p>Branch out to two separate NFA machines and merge them with ε-transitions.</p>
              <pre className="code-block">{`          --ε--> [Start_r] ... [Accept_r] --ε-->
        /                                        \\
  q_start                                          q_accept
        \\                                        /
          --ε--> [Start_s] ... [Accept_s] --ε-->`}</pre>
            </div>
            <div>
              <strong>4. Kleene Star (r*):</strong>
              <p>Allow looping back to the start state and bypassing the machine completely.</p>
              <pre className="code-block">{`          +-----------------ε-----------------+
          |                                   v
  q_start --ε--> [Start_r] ... [Accept_r] --ε--> q_accept
                   ^                   |
                   +--------ε----------+`}</pre>
            </div>
          </div>
        </ExpandingBox>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      <section className="bg-[#f3e7c2]/10 border border-[#c7a669]/30 p-5 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Algorithm & Solved Problems</h3>
        <p className="mb-4">
          Dive into detailed pages to see how NFAs are converted into DFAs, how DFAs are minimized, and view a complete step-by-step solved problem:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/sem5/cd/ch6-nfa-to-dfa-subset"
            className="px-4 py-2 bg-[#ebdcb0] text-[#1b0d00] hover:bg-[#c7a669] transition rounded-lg font-bold text-sm"
          >
            Subset Construction →
          </Link>
          <Link
            href="/sem5/cd/ch6-dfa-minimization"
            className="px-4 py-2 bg-[#ebdcb0] text-[#1b0d00] hover:bg-[#c7a669] transition rounded-lg font-bold text-sm"
          >
            DFA Minimization →
          </Link>
          <Link
            href="/sem5/cd/ch6-dfa-solved-problem"
            className="px-4 py-2 bg-[#ebdcb0] text-[#1b0d00] hover:bg-[#c7a669] transition rounded-lg font-bold text-sm"
          >
            Solved Problem: Min DFA →
          </Link>
        </div>
      </section>
    </div>
  );
};
