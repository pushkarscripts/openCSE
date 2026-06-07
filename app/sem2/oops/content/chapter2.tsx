"use client";

import { CodeBlock } from "../../../components/CodeBlock";

export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module II: Classes and Objects</span>.
        This module explains how Java organizes programs using classes, objects,
        constructors, access control, methods, and common built-in classes. These
        concepts form the core of object-oriented programming.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* OOP Basics */}
      <section>
        <h3 className="section-heading">Object-Oriented Programming Basics</h3>

        <p className="p-text">
          Java is built around OOP principles. The key ideas are:
        </p>

        <ul className="section-list">
          <li><strong>Encapsulation</strong> – grouping data and methods inside a class</li>
          <li><strong>Abstraction</strong> – exposing only essential features to users</li>
          <li><strong>Inheritance</strong> – reusing and extending existing classes</li>
          <li><strong>Polymorphism</strong> – performing actions in different ways</li>
        </ul>

        <p className="p-text">
          A class defines structure and behavior. An object is a runtime instance of the class.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Class Definition */}
      <section>
        <h3 className="section-heading">Classes and Object Creation</h3>

        <p className="p-text">
          A class contains fields (data) and methods (operations). Objects are created
          using the <code className="inline-code">new</code> keyword.
        </p>

        <CodeBlock 
          title="DEFINING AND INSTANTIATING A CLASS"
          code={`class Student {
  int roll;
  String name;

  void show() {
    System.out.println(roll + " - " + name);
  }
}

// Inside main routine
Student s = new Student();
s.roll = 101;
s.name = "Pushkar";
s.show();`}
        />

        {/* ✅ FIXED: Cleaned unintended text and mapped strictly to clean English context */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Class Blueprint vs Heap Object Mapping ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Class Blueprint: Student [int roll, String name, show()]
                     │
         (Instantiation / new Keyword)
                     ▼
Heap Instance Memory: Student Object at Address 0x7a30
                 ├── roll: 101
                 └── name: "Pushkar" ───> Points to String Pool`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Constructors */}
      <section>
        <h3 className="section-heading">Constructors and Finalizer</h3>

        <p className="p-text">
          A constructor initializes an object at creation. It has no return type, not even void.
          Java supports constructor overloading.
        </p>

        <CodeBlock 
          title="CONSTRUCTOR OVERLOADING & THIS REFERENCE"
          code={`class Point {
  int x, y;

  Point() {        // default constructor
    x = 0; 
    y = 0;
  }

  Point(int x, int y) {   // parameterized constructor
    this.x = x;          // resolving instance variable shadowing
    this.y = y;
  }
}

Point p1 = new Point();
Point p2 = new Point(5, 8);`}
        />

        <p className="p-text mt-3">
          Java no longer recommends using finalizers. Modern Java uses <strong>try-with-resources</strong> and
          garbage collection frameworks for automatic resource cleanup.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Access Modifiers */}
      <section>
        <h3 className="section-heading">Visibility and Access Modifiers</h3>

        <p className="p-text">Java provides four levels of access control:</p>

        <ul className="section-list">
          <li><strong>public</strong> – accessible everywhere across packages</li>
          <li><strong>private</strong> – accessible only inside the enclosing class bounds</li>
          <li><strong>protected</strong> – accessible to the class, subclasses, and same package components</li>
          <li><strong>default</strong> – accessible strictly within the same package directory</li>
        </ul>

        <CodeBlock 
          title="VISIBILITY CONTROL SCHEMAS & GETTERS/SETTERS"
          code={`class Employee {
  private int id;
  public String name;

  public void setId(int id) {  // setter mutator method (encapsulation guard)
    this.id = id;
  }

  public int getId() {        // getter accessor method
    return id;
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Methods & this */}
      <section>
        <h3 className="section-heading">Methods and the this Reference</h3>

        <p className="p-text">
          Methods operate on object data. The <code className="inline-code">this</code> keyword refers to
          the current object instance and resolves global variable naming conflicts.
        </p>

        <CodeBlock 
          title="VARIABLE SHADOWING RESOLUTION USING THIS"
          code={`class Box {
  private int side;

  Box(int side) {
    this.side = side;    // 'this.side' points to variable fields above
  }

  int area() {
    return side * side;
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Built-in classes */}
      <section>
        <h3 className="section-heading">Useful Built-in Classes (String, Character, StringBuffer)</h3>

        <p className="p-text">
          Java provides several commonly used classes for advanced text and stream processing.
        </p>

        <ul className="section-list">
          <li><strong>String</strong> – immutable character sequence stored inside String Pool memory</li>
          <li><strong>Character</strong> – object-oriented wrapper class for standard primitive char variables</li>
          <li><strong>StringBuffer</strong> – mutable, synchronized, and completely thread-safe character buffer</li>
        </ul>

        <CodeBlock 
          title="TEXT PROCESSING AND UTILITY METHODS"
          code={`String name = "Pushkar";
String upper = name.toUpperCase();

Character ch = 'A';
boolean isDigit = Character.isDigit('5');

StringBuffer sb = new StringBuffer("open");
sb.append("CSE");  // Modifies original memory buffer to "openCSE"`}
        />

        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ String Pool Immutability Mechanics ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Stack Pointer                     String Constant Pool (Heap Area)
   name ─────────────────────────> [ "Pushkar" ] (Address: 0x99)
                                      
   upper ────────────────────────> [ "PUSHKAR" ] (New memory allocated on modification)`}
          </pre>
        </div>
      </section>

    </div>
  );
};