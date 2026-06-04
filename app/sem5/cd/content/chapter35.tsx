import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch35Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Type Systems & Data Abstraction</h2>
      
      <p className="p-text">
        Advanced features in programming languages require specialized support from the compiler. Two fundamental areas are Type Systems and Data Abstraction.
      </p>

      <ExpandingBox title="1. Type Systems">
        <p className="p-text mb-2">
          A type system is a set of rules that assigns types to expressions and variables to prevent type errors.
        </p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li><strong>Static typing:</strong> Types checked at compile time (e.g., C, Java, C++).</li>
          <li><strong>Dynamic typing:</strong> Types checked at runtime (e.g., Python, JavaScript).</li>
          <li><strong>Strong typing:</strong> No implicit, unsafe type conversions allowed.</li>
          <li><strong>Weak typing:</strong> Implicit conversions allowed (e.g., C allows char to int).</li>
        </ul>
        <p className="p-text mt-4 font-semibold text-[#c7a669]">Compiler Tasks:</p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li><strong>Type checking:</strong> Verify operations are applied to compatible types.</li>
          <li><strong>Type inference:</strong> Deduce types without explicit annotations.</li>
          <li><strong>Type coercion:</strong> Automatically convert one type to another when safe.</li>
        </ul>
      </ExpandingBox>

      <ExpandingBox title="2. Data Abstraction">
        <p className="p-text mb-2">
          Data abstraction separates the interface (what a type does) from its implementation (how it does it).
        </p>
        <p className="p-text mb-2 font-semibold text-[#c7a669]">Compiler Challenges:</p>
        <ul className="list-disc list-inside p-text space-y-1 ml-4 text-sm text-[#ebdcb0]">
          <li><strong>Layout computation:</strong> Determine size and field offsets of record/struct types in memory.</li>
          <li><strong>Name mangling:</strong> Generate unique internal names for overloaded functions (crucial in C++).</li>
          <li><strong>Separate compilation:</strong> Modules are compiled independently using only interface files (headers), requiring a linker to resolve final addresses.</li>
        </ul>
      </ExpandingBox>
    </div>
  );
};
