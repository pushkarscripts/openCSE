"use client";

import { CodeBlock } from "../../../components/CodeBlock";

export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module III: Inheritance and Polymorphism</span>.
        This module introduces how classes can reuse and extend existing functionality,
        and how Java resolves overridden methods at runtime. These concepts are central
        to object-oriented programming.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Inheritance Basics */}
      <section>
        <h3 className="section-heading">Understanding Inheritance</h3>

        <p className="p-text">
          Inheritance lets a class (subclass) acquire the properties and methods of another class (superclass).
          It promotes code reuse and logical hierarchy.
        </p>

        <ul className="section-list">
          <li><strong>Superclass</strong> – the class whose features are inherited</li>
          <li><strong>Subclass</strong> – the class that extends the superclass</li>
          <li><strong>extends</strong> keyword is used for inheritance</li>
          <li>Java supports <strong>single inheritance</strong> of classes</li>
        </ul>

        <CodeBlock 
          title="SIMPLE INHERITANCE IMPLEMENTATION"
          code={`class Animal {
  void eat() { 
    System.out.println("eating..."); 
  }
}

class Dog extends Animal {
  void bark() { 
    System.out.println("barking..."); 
  }
}

// Usage inside driver routine
Dog d = new Dog();
d.eat();   // acquired from superclass
d.bark();  // defined locally within subclass`}
        />

        {/* ✅ FIXED: Replaced broken inheritance-tree-basic.png reference */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Base Class vs Derived Class Tree ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Superclass: Animal [ eat() ]
               │
               ▼  (extended by subclass)
Subclass:   Dog    [ bark() ] ───> inherits eat() automatically`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Super Keyword */}
      <section>
        <h3 className="section-heading">Using the super Keyword</h3>

        <p className="p-text">
          The <code className="inline-code">super</code> keyword is used to access superclass members:
          fields, methods, and constructors.
        </p>

        <CodeBlock 
          title="SUPERCLASS CONSTRUCTOR CHAINING ROUTINES"
          code={`class Person {
  String name;
  Person(String name) {
    this.name = name;
  }
}

class Student extends Person {
  int roll;
  Student(String name, int roll) {
    super(name);       // routes matching parameters to superclass constructor
    this.roll = roll;
  }
}`}
        />

        {/* ✅ FIXED: Replaced broken super-call-flow.png with text trace mapping */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Constructor Execution Call Flow ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`new Student("Raushan", 57) ──> Student Constructor ──> super(name) ──> Person Constructor Initializes Name`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multilevel Inheritance */}
      <section>
        <h3 className="section-heading">Multilevel Hierarchy</h3>

        <p className="p-text">
          In multilevel inheritance, a subclass becomes a superclass for another class.
          Java supports <strong>multilevel</strong> but not <strong>multiple</strong> inheritance of classes.
        </p>

        <CodeBlock 
          title="MULTILEVEL EXTENSION LAYOUT"
          code={`class A { }
class B extends A { }
class C extends B { }     // Direct Chain Mapping: A -> B -> C`}
        />

        {/* ✅ FIXED: Replaced broken multilevel-hierarchy.png map */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Class Hierarchy Lineage ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`[ Class A (Grandparent) ] ───> [ Class B (Parent) ] ───> [ Class C (Child) ]`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Method Overriding */}
      <section>
        <h3 className="section-heading">Method Overriding</h3>

        <p className="p-text">
          When a subclass declares a method with the same name and signature as the
          superclass method, it is called <strong>overriding</strong>.
        </p>

        <ul className="section-list">
          <li>Used to provide specific implementations for derived classes</li>
          <li>Must contain the exact same method name, return type, and parameters</li>
          <li>Only instance methods can be overridden; static declarations cannot</li>
        </ul>

        <CodeBlock 
          title="METHOD OVERRIDING EXAMPLES"
          code={`class Shape {
  void draw() { 
    System.out.println("drawing standard shape..."); 
  }
}

class Circle extends Shape {
  @Override
  void draw() { 
    System.out.println("drawing circle object pattern..."); // overrides parent logic
  } 
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Polymorphism */}
      <section>
        <h3 className="section-heading">Dynamic Method Dispatch (Run-time Polymorphism)</h3>

        <p className="p-text">
          Runtime polymorphism determines the method to execute based on the actual
          object type on the heap at runtime, not the reference pointer on the stack.
        </p>

        <CodeBlock 
          title="DYNAMIC DISPATCH GATEWAYS"
          code={`Shape s = new Circle();  // Shape reference points to a Circle object on heap
s.draw();                 // Resolves to Circle's overridden draw() at execution time`}
        />

        {/* ✅ FIXED: Replaced broken dynamic-dispatch.png with clean trace representation */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Runtime Polymorphism Lookup ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Stack Reference: Shape s ───────Points to───────> Heap Instance: new Circle()
                                                          │
   s.draw() ─── Looks up implementation context ──────────┘ ───> Triggers Circle.draw()`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* final & Object class */}
      <section>
        <h3 className="section-heading">final Keyword with Inheritance</h3>

        <ul className="section-list">
          <li><strong>final class</strong> – restricts the entire class architecture from being extended or inherited</li>
          <li><strong>final method</strong> – allows inheritance but completely blocks subclasses from overriding the routine</li>
        </ul>

        <CodeBlock 
          title="IMMUTABLE CLASS AND METHOD SIGNATURES"
          code={`final class Constants { }       // Extension attempts will fail compilation

class Baseline {
  final void show() { 
    // Subclasses can execute this, but cannot redefine its core block
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Object class */}
      <section>
        <h3 className="section-heading">The Object Class</h3>

        <p className="p-text">
          Every Java class implicitly extends <strong>Object</strong>, which serves as the ultimate root of the class hierarchy.
          Important utility methods include:
        </p>

        <ul className="section-list">
          <li><strong>toString()</strong> – returns a string representation of the object instance</li>
          <li><strong>equals()</strong> – compares memory pointers or custom logical equality criteria</li>
          <li><strong>hashCode()</strong> – provides hash codes for memory indexing</li>
          <li><strong>getClass()</strong> – loads class metadata definitions at runtime</li>
        </ul>

        <CodeBlock 
          title="ROOT OBJECT BUILT-IN METHODS EVALUATION"
          code={`class Demo { }

Demo d = new Demo();
System.out.println(d.toString());  // Prints structural details (e.g., Demo@7a30)
System.out.println(d.getClass());   // Returns class type meta information`}
        />
      </section>

    </div>
  );
};