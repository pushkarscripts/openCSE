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

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14]">Example: Creating and Using a Package</div>
          <pre className="code-block mt-3">
{`// file: src/com/demo/Calculator.java
package com.demo;

public class Calculator {
  public int add(int a, int b) {
    return a + b;
  }
}

// Using the package
import com.demo.Calculator;

public class Main {
  public static void main(String[] args) {
    Calculator c = new Calculator();
    System.out.println(c.add(10, 20));
  }
}`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>package-folder-structure.png</strong>
        </p>
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
          <li><strong>Specific import:</strong> import java.util.ArrayList;</li>
          <li><strong>Wildcard import:</strong> import java.util.*;</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-4">
          <pre className="code-block">
{`import java.util.ArrayList;

ArrayList<Integer> list = new ArrayList<>();
list.add(5);`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Interfaces */}
      <section>
        <h3 className="section-heading">Interfaces</h3>

        <p className="p-text">
          An interface specifies a set of abstract methods that implementing classes must define.
          Interfaces support abstraction and multiple inheritance in Java.
        </p>

        <ul className="section-list">
          <li>Methods are abstract by default (before Java 8)</li>
          <li>Variables are public, static, and final</li>
          <li>A class uses <code className="inline-code">implements</code> to implement an interface</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-4">
          <pre className="code-block">
{`interface Drawable {
  void draw();
}

class Circle implements Drawable {
  public void draw() {
    System.out.println("drawing circle");
  }
}

Drawable d = new Circle();
d.draw();`}
          </pre>
        </div>

        <p className="p-text mt-3">Diagram: <strong>interface-implementation.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Default & Static Methods */}
      <section>
        <h3 className="section-heading">Default and Static Methods in Interfaces</h3>

        <p className="p-text">
          From Java 8 onwards, interfaces can include <strong>default</strong> and <strong>static</strong> methods,
          allowing common functionality without breaking existing implementations.
        </p>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg">
          <pre className="code-block">
{`interface Vehicle {
  void start();
  default void show() {
    System.out.println("Vehicle started");
  }
  static int version() { return 1; }
}

class Car implements Vehicle {
  public void start() {
    System.out.println("Car engine starts");
  }
}

Car c = new Car();
c.start();
c.show();
int v = Vehicle.version();`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Final Thoughts */}
      <section>
        <h3 className="section-heading">Putting It All Together</h3>

        <p className="p-text">
          Packages organize code. Interfaces define contracts. When combined, they allow
          large Java applications to be structured cleanly and extended easily. This
          module prepares the foundation for frameworks, APIs and modular application design.
        </p>

        <p className="p-text mt-4">
          Diagrams to add: <strong>interface-hierarchy.png</strong>, <strong>package-namespace.png</strong>
        </p>
      </section>

    </div>
  );
};
