import { CodeBlock } from "../../../components/CodeBlock";

export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">
          Module III: Inheritance and Polymorphism
        </span>.
        This module introduces how classes can reuse and extend existing
        functionality, and how Java resolves overridden methods at runtime.
        These concepts are central to object-oriented programming.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Inheritance Basics */}
      <section>
        <h3 className="section-heading">
          Understanding Inheritance
        </h3>

        <p className="p-text">
          Inheritance lets a class (subclass) acquire the properties and
          methods of another class (superclass). It promotes code reuse and
          logical hierarchy.
        </p>

        <ul className="section-list">
          <li>
            <strong>Superclass</strong> – the class whose features are inherited
          </li>
          <li>
            <strong>Subclass</strong> – the class that extends the superclass
          </li>
          <li>
            <strong>extends</strong> keyword is used for inheritance
          </li>
          <li>
            Java supports <strong>single inheritance</strong> of classes
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14] mb-2">
            Simple Inheritance Example
          </div>

          <CodeBlock
            code={`class Animal {
  void eat() {
    System.out.println("eating");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("barking");
  }
}

Dog d = new Dog();

d.eat();   // inherited
d.bark();  // own method`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>inheritance-tree-basic.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Super Keyword */}
      <section>
        <h3 className="section-heading">
          Using the super Keyword
        </h3>

        <p className="p-text">
          The <code className="inline-code">super</code> keyword is used to
          access superclass members: fields, methods, and constructors.
        </p>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg">
          <CodeBlock
            code={`class Person {
  String name;

  Person(String name) {
    this.name = name;
  }
}

class Student extends Person {
  int roll;

  Student(String name, int roll) {
    super(name);

    this.roll = roll;
  }
}`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>super-call-flow.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multilevel Inheritance */}
      <section>
        <h3 className="section-heading">
          Multilevel Hierarchy
        </h3>

        <p className="p-text">
          In multilevel inheritance, a subclass becomes a superclass for another
          class. Java supports multilevel but not multiple inheritance of
          classes.
        </p>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg">
          <CodeBlock
            code={`class A { }

class B extends A { }

class C extends B { }   // A -> B -> C`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>multilevel-hierarchy.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Method Overriding */}
      <section>
        <h3 className="section-heading">
          Method Overriding
        </h3>

        <p className="p-text">
          When a subclass declares a method with the same name and signature as
          the superclass method, it is called{" "}
          <strong>overriding</strong>.
        </p>

        <ul className="section-list">
          <li>Used to provide specific implementation</li>
          <li>
            Must have same method name, return type and parameters
          </li>
          <li>Only instance methods can be overridden</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-4">
          <CodeBlock
            code={`class Shape {
  void draw() {
    System.out.println("drawing shape");
  }
}

class Circle extends Shape {
  void draw() {
    System.out.println("drawing circle");
  }
}`}
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Runtime Polymorphism */}
      <section>
        <h3 className="section-heading">
          Dynamic Method Dispatch
          (Run-time Polymorphism)
        </h3>

        <p className="p-text">
          Runtime polymorphism determines the method to execute based on the
          actual object type, not reference type.
        </p>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg">
          <CodeBlock
            code={`Shape s = new Circle();

s.draw();   // calls Circle's draw`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>dynamic-dispatch.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* final Keyword */}
      <section>
        <h3 className="section-heading">
          final Keyword with Inheritance
        </h3>

        <ul className="section-list">
          <li>
            <strong>final class</strong> – cannot be inherited
          </li>
          <li>
            <strong>final method</strong> – cannot be overridden
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-4">
          <CodeBlock
            code={`final class Constants { }

class A {
  final void show() {

  }
}`}
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Object Class */}
      <section>
        <h3 className="section-heading">
          The Object Class
        </h3>

        <p className="p-text">
          Every Java class implicitly extends{" "}
          <strong>Object</strong>, the root of the class hierarchy.
          Important methods include:
        </p>

        <ul className="section-list">
          <li>
            <strong>toString()</strong> – returns string representation
          </li>
          <li>
            <strong>equals()</strong> – compares two objects
          </li>
          <li><strong>hashCode()</strong></li>
          <li><strong>getClass()</strong></li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-4">
          <CodeBlock
            code={`class Demo { }

Demo d = new Demo();

System.out.println(d.toString());

System.out.println(d.getClass());`}
          />
        </div>
      </section>

    </div>
  );
};