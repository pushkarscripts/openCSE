export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">Object-Oriented Programming in Java</span>.
        This course builds the foundations of modern programming using Java’s OOP model,
        covering data types, classes, inheritance, packages, exceptions, threads,
        generics, and the Java library with Swing GUI.
      </p>

      <section>
        <h3 className="section-heading">Module I: Introduction to Java</h3>
        <ul className="section-list">
          <li>Data types, variables, arrays, strings</li>
          <li>Operators and precedence</li>
          <li>Control statements (selection, iteration, jumps)</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module II: Classes and Objects</h3>
        <ul className="section-list">
          <li>OOP basics and principles</li>
          <li>Classes, objects, constructors, finalizer</li>
          <li>Access modifiers, methods, String & Character classes</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module III: Inheritance and Polymorphism</h3>
        <ul className="section-list">
          <li>Inheritance, super & subclass</li>
          <li>Overriding, dynamic method dispatch</li>
          <li>final keyword, Object class</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module IV: Packages and Interfaces</h3>
        <ul className="section-list">
          <li>Packages, importing</li>
          <li>Interfaces, default & static methods</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module V: Exception Handling</h3>
        <ul className="section-list">
          <li>Exception fundamentals, types of exceptions</li>
          <li>try, catch, throw, throws, finally</li>
          <li>Java built-in exceptions</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module VI: Threads</h3>
        <ul className="section-list">
          <li>Java thread model, creating threads</li>
          <li>Priorities, synchronization, inter-thread communication</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module VII: Generics</h3>
        <ul className="section-list">
          <li>Generic classes, methods, hierarchies</li>
          <li>Type inference and erasure</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module VIII: Java Library & Swing GUI</h3>
        <ul className="section-list">
          <li>String handling, Math, wrappers</li>
          <li>Collections framework</li>
          <li>Swing components and menus</li>
        </ul>
      </section>

    </div>
  );
};
