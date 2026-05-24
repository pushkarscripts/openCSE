import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch19Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Symbol Table</h2>
      <p className="p-text">
        A <strong>Symbol Table</strong> is a critical data structure created and maintained by the compiler to store detailed information about every identifier (such as variable names, function names, classes, and labels) encountered in the source program.
      </p>
      <p className="p-text">
        It is used and updated by virtually <strong>every phase</strong> of the compiler. The scanner creates initial entries, the parser adds structural context, the semantic analyzer computes and validates types, and the code generator reads addresses to emit machine instructions.
      </p>

      <h2 className="section-heading">Information Stored in a Symbol Table Entry</h2>
      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Field Name</th>
              <th className="p-2 font-bold text-[#c7a669]">Data Type</th>
              <th className="p-2 font-bold text-[#c7a669]">Purpose / Contents</th>
              <th className="p-2 font-bold text-[#c7a669]">Example Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Name</td>
              <td className="p-2">String</td>
              <td className="p-2">The identifier as written in the source code.</td>
              <td className="p-2 font-mono">&apos;totalAmount&apos;</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Kind</td>
              <td className="p-2">Enum</td>
              <td className="p-2">Variable, Function, Parameter, Type, Label, etc.</td>
              <td className="p-2 font-mono">Variable</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Type</td>
              <td className="p-2">Type Descriptor</td>
              <td className="p-2">Data type: int, float, array, pointer, struct, signature.</td>
              <td className="p-2 font-mono">int[]</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Scope Level</td>
              <td className="p-2">Integer</td>
              <td className="p-2">Nesting depth: 0 = global, 1 = function, 2 = block.</td>
              <td className="p-2 font-mono">2</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Storage Class</td>
              <td className="p-2">Enum</td>
              <td className="p-2">auto, static, extern, register (C); local, global.</td>
              <td className="p-2 font-mono">auto</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Memory Address</td>
              <td className="p-2">Offset / Address</td>
              <td className="p-2">Absolute memory address or stack frame offset.</td>
              <td className="p-2 font-mono">offset 16</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Array Dimensions</td>
              <td className="p-2">Integer Array</td>
              <td className="p-2">For array types: dimensions and bounds.</td>
              <td className="p-2 font-mono">[3][4]</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Function Info</td>
              <td className="p-2">Record</td>
              <td className="p-2">Return type, parameters count, parameter types list.</td>
              <td className="p-2 font-mono">int, 2 params</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Line Number(s)</td>
              <td className="p-2">Integer List</td>
              <td className="p-2">Line where declared and lines where referenced.</td>
              <td className="p-2 font-mono">declared: 12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-heading">Usage Across Compiler Phases</h2>
      <ExpandingBox title="How Symbol Table is Utilized in the Pipeline">
        <ul className="list-disc list-inside p-text space-y-2.5 ml-2">
          <li><strong>Lexical Analyzer:</strong> Looks up character sequences. If it finds a new identifier, it inserts it and returns a generic identifier token.</li>
          <li><strong>Syntax Analyzer:</strong> Recognizes declarations and triggers table insertions.</li>
          <li><strong>Semantic Analyzer:</strong> Adds type descriptors, checks variable initialization, detects duplicate declarations, and resolves scoping.</li>
          <li><strong>Intermediate Code Gen:</strong> Looks up symbols to find offsets/temporaries, creating correct references in Three-Address Code.</li>
          <li><strong>Code Generator:</strong> Uses offset values to emit load/store instructions referencing relative stack frame positions or registers.</li>
        </ul>
      </ExpandingBox>

      <h2 className="section-heading">Symbol Table Operations</h2>
      <div className="space-y-4 my-4">
        <ExpandingBox title="insert(name, attributes)">
          <p className="p-text">
            Adds a new identifier to the symbol table with its associated attributes.
          </p>
          <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
            <li>Invoked when a declaration statement is recognized.</li>
            <li>Must verify that no duplicate identifier exists in the current scope level (throws duplicate declaration error if found).</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="lookup(name)">
          <p className="p-text">
            Searches for an identifier and returns its entry (or null if not found).
          </p>
          <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
            <li>Invoked when an identifier is referenced in an expression or statement.</li>
            <li>Must search from the innermost active scope outward to the global scope.</li>
            <li>This is the most critical operation to optimize for speed.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="delete(name) / delete_scope()">
          <p className="p-text">
            Removes identifiers when they go out of scope.
          </p>
          <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
            <li>Invoked when exiting a block or procedure.</li>
            <li>In block-structured compilers, this is implemented efficiently by popping tables off a scope stack.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="update(name, attribute, value)">
          <p className="p-text">
            Modifies an existing symbol&apos;s attribute.
          </p>
          <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
            <li>Invoked when additional information (like an inferred type or an allocated offset) becomes available during later compilation phases.</li>
          </ul>
        </ExpandingBox>
      </div>

      <h2 className="section-heading">Data Structures for Implementation</h2>
      <p className="p-text">
        Compilers choose data structures based on program scale and language scoping rules:
      </p>

      <div className="overflow-x-auto my-3">
        <table className="w-full text-left border-collapse text-sm text-[#e2d1c1]">
          <thead>
            <tr className="border-b border-[#c7a669]/40 bg-[#ebdcb0]/10">
              <th className="p-2 font-bold text-[#c7a669]">Data Structure</th>
              <th className="p-2 font-bold text-[#c7a669]">Insert</th>
              <th className="p-2 font-bold text-[#c7a669]">Lookup</th>
              <th className="p-2 font-bold text-[#c7a669]">Delete</th>
              <th className="p-2 font-bold text-[#c7a669]">Best Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Linear List</td>
              <td className="p-2 font-mono">O(1)</td>
              <td className="p-2 font-mono">O(n)</td>
              <td className="p-2 font-mono">O(n)</td>
              <td className="p-2">Tiny programs (&lt; 20 identifiers). No lookup overhead.</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">Hash Table (Chaining)</td>
              <td className="p-2 font-mono">O(1)*</td>
              <td className="p-2 font-mono">O(1)*</td>
              <td className="p-2 font-mono">O(1)*</td>
              <td className="p-2">Standard production compilers (GCC, LLVM). Amortized constant time.</td>
            </tr>
            <tr className="border-b border-[#c7a669]/10">
              <td className="p-2 font-bold">BST (Balanced)</td>
              <td className="p-2 font-mono">O(log n)</td>
              <td className="p-2 font-mono">O(log n)</td>
              <td className="p-2 font-mono">O(log n)</td>
              <td className="p-2">When sorted/alphabetical output is needed (e.g. cross-referencers).</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Scope Stack + Hash</td>
              <td className="p-2 font-mono">O(1)*</td>
              <td className="p-2 font-mono">O(k)*</td>
              <td className="p-2 font-mono">O(1)*</td>
              <td className="p-2">Block-structured languages supporting nested scoping.</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-[#ac9e91] mt-1">* Amortized/average case. k = scope nesting depth.</p>
      </div>

      <ExpandingBox title="Hash Function Implementations">
        <p className="p-text mb-2">
          <strong>1. Simple ASCII Sum Hash (mod TABLE_SIZE):</strong>
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold mb-4">
{`int hash(char *name, int size) {
    int h = 0;
    while (*name) {
        h += *name++;
    }
    return h % size;
}`}
        </pre>
        <p className="p-text mb-2">
          <strong>2. Polynomial Rolling Hash (Better distribution, fewer collisions):</strong>
        </p>
        <pre className="bg-[#FAE8D7] text-[#1B0D00] p-3 rounded font-mono text-xs font-semibold">
{`int rollingHash(char *name, int size) {
    int h = 0;
    while (*name) {
        h = (h * 31 + *name++) % size;
    }
    return h;
}`}
        </pre>
      </ExpandingBox>
    </div>
  );
};
