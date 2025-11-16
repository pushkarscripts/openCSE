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

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg">
          <div className="font-semibold text-[#3a2a14]">Example: Defining and Using a Class</div>
          <pre className="code-block mt-3">
{`class Student {
  int roll;
  String name;

  void show() {
    System.out.println(roll + " - " + name);
  }
}

Student s = new Student();
s.roll = 101;
s.name = "Pushkar";
s.show();`}
          </pre>
        </div>

        <p className="p-text mt-3">Diagram: <strong>class-object-diagram.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Constructors */}
      <section>
        <h3 className="section-heading">Constructors and Finalizer</h3>

        <p className="p-text">
          A constructor initializes an object at creation. It has no return type, not even void.
          Java supports constructor overloading.
        </p>

        <div className="example-box p-4 bg-[#f3e7c2] border border-[#c7a669] rounded-lg">
          <pre className="code-block">
{`class Point {
  int x, y;

  Point() {        // default constructor
    x = 0; y = 0;
  }

  Point(int x, int y) {   // parameterized constructor
    this.x = x;
    this.y = y;
  }
}

Point p1 = new Point();
Point p2 = new Point(5, 8);`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Java no longer recommends using finalizers. Modern Java uses <strong>try-with-resources</strong> and
          garbage collection.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Access Modifiers */}
      <section>
        <h3 className="section-heading">Visibility and Access Modifiers</h3>

        <p className="p-text">Java provides four levels of access control:</p>

        <ul className="section-list">
          <li><strong>public</strong> – accessible everywhere</li>
          <li><strong>private</strong> – accessible only inside class</li>
          <li><strong>protected</strong> – class + subclasses + same package</li>
          <li><strong>default</strong> – class + same package</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 mt-4 border border-[#c7a669] rounded-lg">
          <pre className="code-block">
{`class Employee {
  private int id;
  public String name;

  public void setId(int id) {  // encapsulation
    this.id = id;
  }

  public int getId() {
    return id;
  }
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Methods & this */}
      <section>
        <h3 className="section-heading">Methods and the this Reference</h3>

        <p className="p-text">
          Methods operate on object data. The <code className="inline-code">this</code> keyword refers to
          the current object and resolves naming conflicts.
        </p>

        <div className="example-box bg-[#f3e7c2] p-4 rounded-lg border border-[#c7a669]">
          <pre className="code-block">
{`class Box {
  private int side;

  Box(int side) {
    this.side = side;    // resolves shadowing
  }

  int area() {
    return side * side;
  }
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Built-in classes */}
      <section>
        <h3 className="section-heading">Useful Built-in Classes (String, Character, StringBuffer)</h3>

        <p className="p-text">
          Java provides several commonly used classes for text processing.
        </p>

        <ul className="section-list">
          <li><strong>String</strong> – immutable text</li>
          <li><strong>Character</strong> – wrapper for char type</li>
          <li><strong>StringBuffer</strong> – mutable and thread-safe</li>
        </ul>

        <div className="example-box p-4 bg-[#f0ddb6] border border-[#c7a669] rounded-lg mt-4">
          <pre className="code-block">
{`String name = "Pushkar";
String upper = name.toUpperCase();

Character ch = 'A';
boolean isDigit = Character.isDigit('5');

StringBuffer sb = new StringBuffer("open");
sb.append("CSE");  // openCSE`}
          </pre>
        </div>

        <p className="p-text mt-3">Diagram: <strong>string-immutability.png</strong></p>
      </section>

    </div>
  );
};
