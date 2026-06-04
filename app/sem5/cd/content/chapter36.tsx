import React from "react";
import ExpandingBox from "../components/ExpandingBox";

export const Ch36Content = () => {
  return (
    <div className="course-content">
      <h2 className="section-heading">Compilation of OOP Features</h2>
      <p className="p-text">
        Object-Oriented Programming (OOP) languages introduce features like inheritance and polymorphism that require special compiler support to map down to standard machine code.
      </p>

      <div className="space-y-4 my-4">
        <ExpandingBox title="Classes and Inheritance">
          <ul className="list-disc list-inside p-text space-y-2 ml-4">
            <li><strong>Classes:</strong> A class is compiled into a struct (holding data fields) and a set of functions. Methods are translated to regular functions with an implicit <code>this</code> pointer.</li>
            <li><strong>Inheritance:</strong> A derived class object contains the base class object at the very start of its memory layout. This allows a derived pointer to be safely cast to a base pointer.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="Virtual Functions (Dynamic Dispatch)">
          <p className="p-text mb-2">
            When a base class pointer points to a derived class object, the correct function must be called dynamically at runtime.
          </p>
          <ul className="list-decimal list-inside p-text space-y-2 ml-4 text-sm text-[#ebdcb0]">
            <li>The compiler creates a <strong>vtable (virtual function table)</strong> for each class containing virtual functions.</li>
            <li>The vtable is an array of function pointers.</li>
            <li>Each object contains a hidden <strong>vptr (vtable pointer)</strong> as its first field.</li>
            <li>A virtual call <code>obj-&gt;f()</code> compiles to: load vptr &rarr; look up f&apos;s index &rarr; call the pointer.</li>
          </ul>
        </ExpandingBox>

        <ExpandingBox title="Exception Handling">
          <p className="p-text">
            To handle exceptions (<code>throw</code> / <code>catch</code>), the compiler must generate code for <strong>stack unwinding</strong>. When an exception is thrown, all stack frames up to the handler must be cleaned up (and destructors called). The compiler generates exception tables to map code ranges to their respective catch handlers.
          </p>
        </ExpandingBox>
      </div>
    </div>
  );
};
