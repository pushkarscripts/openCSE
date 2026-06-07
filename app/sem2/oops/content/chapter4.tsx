"use client";

import { CodeBlock } from "../../../components/CodeBlock";

export const Ch4Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module IV: Packages and Interfaces</span>.
        This module introduces how Java organizes code into logical units (packages)
        and how interfaces define abstract contracts that classes can implement. Both
        are essential for modular, maintainable Java programs.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Packages */}
      <section>
        <h3 className="section-heading">Understanding Packages</h3>

        <p className="p-text">
          A package is a collection of related classes and interfaces grouped under a
          unique namespace. They help avoid name conflicts and improve program structure.
        </p>

        <ul className="section-list">
          <li><strong>Built-in packages:</strong> java.lang, java.util, java.io, java.awt</li>
          <li><strong>User-defined packages:</strong> created using the package keyword</li>
        </ul>

        <CodeBlock 
          title="CREATING AND IMPORTING USER-DEFINED PACKAGES"
          code={`// file: src/com/demo/Calculator.java
package com.demo;

public class Calculator {
  public int add(int a, int b) {
    return a + b;
  }
}

// file: src/Main.java
import com.demo.Calculator;

public class Main {
  public static void main(String[] args) {
    Calculator c = new Calculator();
    System.out.println(c.add(10, 20));
  }
}`}
        />

        {/* ✅ FIXED: Replaced broken package-folder-structure.png with explicit directory tree */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Physical Disk Directory Architecture ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre">
{`src/
├── com/
│   └── demo/
│       └── Calculator.java     ───> declares: package com.demo;
└── Main.java                   ───> executes: import com.demo.Calculator;`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Importing */}
      <section>
        <h3 className="section-heading">Importing Packages</h3>

        <p className="p-text">
          The <code className="inline-code">import</code> statement allows classes in one package to be
          visible in another file.
        </p>

        <ul className="section-list">
          <li><strong>Specific import:</strong> import java.util.ArrayList; (Loads single definition)</li>
          <li><strong>Wildcard import:</strong> import java.util.*; (Loads matches on-demand)</li>
        </ul>

        <CodeBlock 
          title="UTILITY UTILS CONTAINER DEPLOYMENT"
          code={`import java.util.ArrayList;

// Instantiating a specific collection utility class type
ArrayList<Integer> list = new ArrayList<>();
list.add(5);`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Interfaces */}
      <section>
        <h3 className="section-heading">Interfaces</h3>

        <p className="p-text">
          An interface specifies a set of abstract methods that implementing classes must define.
          Interfaces support full structural abstraction and multiple inheritance workflows in Java.
        </p>

        <ul className="section-list">
          <li>Methods are abstract and public by default (before Java 8 specifications)</li>
          <li>Variables are implicitly public, static, and final</li>
          <li>A standard class uses the <code className="inline-code">implements</code> keyword to fulfill contracts</li>
        </ul>

        <CodeBlock 
          title="INTERFACE CONTRACT SPECIFICATION"
          code={`interface Drawable {
  void draw();
}

class Circle implements Drawable {
  @Override
  public void draw() {
    System.out.println("drawing circle pattern...");
  }
}

// Runtime polymorphic implementation assignment
Drawable d = new Circle();
d.draw();`}
        />

        {/* ✅ FIXED: Replaced broken interface-implementation.png with clear contract map */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Abstraction Contract Binding ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Interface Blueprint: Drawable [ abstract draw() ]
                             ▲
                             │ (implements contract)
Concrete Class:      Circle   [ concrete draw() { print logic } ]`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Default & Static Methods */}
      <section>
        <h3 className="section-heading">Default and Static Methods in Interfaces</h3>

        <p className="p-text">
          From Java 8 onwards, interfaces can include <strong>default</strong> and <strong>static</strong> methods,
          allowing common fallback functionality without breaking existing implementations.
        </p>

        <CodeBlock 
          title="INTERFACE METHOD MODIFIERS"
          code={`interface Vehicle {
  void start(); // Abstract contract
  
  default void show() {
    System.out.println("Vehicle operational metadata print.");
  }
  
  static int version() { 
    return 1; 
  }
}

class Car implements Vehicle {
  public void start() {
    System.out.println("Car engine ignition initialized.");
  }
}

// Driver code usage sequence
Car c = new Car();
c.start();
c.show(); // Calls default implementation safely
int v = Vehicle.version(); // Triggers isolated static utility scope`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Final Thoughts */}
      <section>
        <h3 className="section-heading">Putting It All Together</h3>

        <p className="p-text">
          Packages organize your underlying code namespaces, while interfaces define structural decoupled contracts. 
          When combined, they allow large scale Java applications to be structured cleanly, avoiding deep regression dependencies.
        </p>

        {/* ✅ FIXED: Bundled final multiple design mappings into a cohesive conceptual terminal visualization */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Enterprise Architecture Assembly Flow ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`[ Domain Namespace Package: com.opencse ]
     └── Interfaces (Strict Modular Blueprints)
              └── Concrete Classes (Decoupled Scalable Drivers)`}
          </pre>
        </div>
      </section>

    </div>
  );
};