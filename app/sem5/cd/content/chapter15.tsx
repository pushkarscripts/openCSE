import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch15Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Syntax Directed Definitions (SDD)</h2>
      <p className="p-text">
        A <strong>Syntax Directed Definition (SDD)</strong> is a generalization of a context-free grammar in which each grammar symbol has a set of attributes, and each production has a set of semantic rules for computing attribute values.
      </p>
      <p className="p-text">
        An SDD is a <strong>pure specification</strong> — it defines <em>what</em> values the attributes should have, but does not specify <em>how</em> or in <em>what order</em> those values are computed. It behaves like a declarative mathematical definition.
      </p>

      <div className="border-l-4 border-[#c7a669] pl-4 my-4 p-text bg-black/10 rounded">
        <h4 className="font-bold text-[#c7a669] mb-1">Formal Definition</h4>
        An SDD consists of:
        <ul className="list-decimal list-inside mt-2 space-y-1.5 ml-2">
          <li>A Context-Free Grammar (CFG).</li>
          <li>For each grammar symbol <code>X</code>, a set of attributes <code>A(X)</code>.</li>
          <li>For each production <code>A &rarr; &alpha;</code>, a set of semantic rules of the form <code>b := f(c_1, c_2, ..., c_k)</code> where:
            <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
              <li><code>b</code> is a synthesized attribute of <code>A</code>, or</li>
              <li><code>b</code> is an inherited attribute of one of the grammar symbols in <code>&alpha;</code>.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2 className="section-heading">SDD for Type Checking of Expressions</h2>
      <p className="p-text">
        A common application of SDDs is performing type checking on expressions. In this grammar, we define a synthesized attribute <code>.type</code> which propagates the type of subexpressions upwards, flagging <code>type_error</code> if compatibility checks fail.
      </p>

      <ExpandingBox title="Type Checking SDD Table" defaultOpen={true}>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
            <thead>
              <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
                <th className="p-2 font-bold text-[#c7a669]">Production</th>
                <th className="p-2 font-bold text-[#c7a669]">Semantic Rule for <code>.type</code></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; E_1 + E_2</td>
                <td className="p-2 font-mono">E.type = (E_1.type == int && E_2.type == int) ? int : type_error</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; E_1 * E_2</td>
                <td className="p-2 font-mono">E.type = (E_1.type == int && E_2.type == int) ? int : type_error</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; E_1 and E_2</td>
                <td className="p-2 font-mono">E.type = (E_1.type == bool && E_2.type == bool) ? bool : type_error</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; E_1 &lt; E_2</td>
                <td className="p-2 font-mono">E.type = (E_1.type == E_2.type) ? bool : type_error</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; id</td>
                <td className="p-2 font-mono">E.type = lookup(id.name).type <span className="text-[#ac9e91] font-sans"> (retrieve from Symbol Table)</span></td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; num</td>
                <td className="p-2 font-mono">E.type = int</td>
              </tr>
              <tr className="border-b border-[#c7a669]/10">
                <td className="p-2 font-mono">E &rarr; true</td>
                <td className="p-2 font-mono">E.type = bool</td>
              </tr>
              <tr>
                <td className="p-2 font-mono">E &rarr; false</td>
                <td className="p-2 font-mono">E.type = bool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandingBox>

      <h2 className="section-heading">Error Propagation in SDDs</h2>
      <p className="p-text">
        If any subexpression results in a <code>type_error</code>, that error propagates upward. For instance, in the expression <code>true + 5</code>:
      </p>
      <ol className="list-decimal list-inside p-text space-y-1.5 ml-4">
        <li>The compiler evaluates <code>true</code> to have type <code>bool</code>.</li>
        <li>The compiler evaluates <code>5</code> to have type <code>int</code>.</li>
        <li>For production <code>E &rarr; E_1 + E_2</code>, it checks if both operands have type <code>int</code>. Since one is <code>bool</code>, the expression evaluates to <code>type_error</code>.</li>
        <li>The parent expression inherits this error state, preventing downstream code generation.</li>
      </ol>
    </div>
  );
};
