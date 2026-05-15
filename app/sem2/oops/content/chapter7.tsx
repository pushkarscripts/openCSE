import { CodeBlock } from "../../../components/CodeBlock";

export const Ch7Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">
          Module VII: Generics
        </span>.
        Generics allow you to create classes, methods, and interfaces
        that operate on specific types while ensuring type-safety at
        compile time.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Basics */}
      <section>
        <h3 className="section-heading">
          Basics of Generics
        </h3>

        <p className="p-text">
          Generics enable writing type-independent code.
          Instead of using{" "}
          <code className="inline-code">Object</code>,
          generics provide compile-time checking.
        </p>

        <ul className="section-list">
          <li>Eliminates unsafe type casting</li>
          <li>Enables strong type-checking</li>
          <li>
            Allows reusable and flexible classes and methods
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-4">
          <CodeBlock
            code={`ArrayList<String> list = new ArrayList<>();

list.add("hello");

// list.add(10); // compile-time error`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>generic-type-parameter.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Generic Class */}
      <section>
        <h3 className="section-heading">
          Generic Class
        </h3>

        <p className="p-text">
          A generic class defines one or more type parameters
          to be used in the class.
        </p>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg">
          <div className="font-semibold text-[#3a2a14] mb-2">
            Example: A Simple Generic Box
          </div>

          <CodeBlock
            code={`class Box<T> {

  T value;

  Box(T value) {

    this.value = value;
  }

  T get() {

    return value;
  }
}

Box<Integer> b = new Box<>(100);

System.out.println(b.get());`}
          />
        </div>

        <ul className="section-list mt-3">
          <li>
            <code className="inline-code">T</code>,
            <code className="inline-code"> E</code>,
            <code className="inline-code"> K</code>,
            <code className="inline-code"> V</code>
            are common type parameter names
          </li>

          <li>
            Multiple type parameters can be used like{" "}
            <code className="inline-code">
              Box&lt;T, U&gt;
            </code>
          </li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Two Type Parameters */}
      <section>
        <h3 className="section-heading">
          Generic Class with Two Type Parameters
        </h3>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg">
          <CodeBlock
            code={`class Pair<K, V> {

  K key;

  V value;

  Pair(K key, V value) {

    this.key = key;

    this.value = value;
  }
}

Pair<String, Integer> p =
  new Pair<>("age", 20);`}
          />
        </div>

        <p className="p-text">
          Useful in maps, key-value storage,
          and utility methods.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Generic Methods */}
      <section>
        <h3 className="section-heading">
          Generic Methods
        </h3>

        <p className="p-text">
          A method can declare its own type parameter
          independent of the class.
        </p>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-3">
          <CodeBlock
            code={`class Utils {

  static <T> void print(T value) {

    System.out.println(value);
  }
}

Utils.print("hello");

Utils.print(123);`}
          />
        </div>

        <p className="p-text">
          Diagram: <strong>generic-method-flow.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Bounded Type Parameters */}
      <section>
        <h3 className="section-heading">
          Bounded Type Parameters
        </h3>

        <p className="p-text">
          Bounds restrict the types that can be passed to generics.
        </p>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4">
          <CodeBlock
            code={`class Numbers<T extends Number> {

  T num;

  Numbers(T num) {

    this.num = num;
  }
}

Numbers<Integer> n1 =
  new Numbers<>(10);

// error
Numbers<String> n2 =
  new Numbers<>("hi");`}
          />
        </div>

        <p className="p-text">
          Bounded generics are widely used in sorting,
          comparisons, and collections.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Wildcards */}
      <section>
        <h3 className="section-heading">
          Wildcards
        </h3>

        <p className="p-text">
          Wildcards allow flexibility when working
          with unknown or partially known types.
        </p>

        <ul className="section-list">
          <li><strong>?</strong> – unknown type</li>

          <li>
            <strong>? extends T</strong> – upper bounded
          </li>

          <li>
            <strong>? super T</strong> – lower bounded
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg">
          <CodeBlock
            code={`void show(List<?> list) {

}

void showNum(
  List<? extends Number> l
) {

}`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>wildcards-hierarchy.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Type Erasure */}
      <section>
        <h3 className="section-heading">
          Type Erasure
        </h3>

        <p className="p-text">
          Java implements generics using{" "}
          <strong>type erasure</strong>.
          After compilation, generic type information
          is removed and replaced with raw types.
        </p>

        <ul className="section-list">
          <li>
            Generic type parameters exist only at compile time
          </li>

          <li>
            Ensures backward compatibility
          </li>

          <li>
            Restrictions include no primitive generics
            and no runtime checking of generic types
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg mt-3">
          <CodeBlock
            code={`ArrayList<Integer> a1 =
  new ArrayList<>();

ArrayList<String> a2 =
  new ArrayList<>();

// at runtime
a1.getClass() ==
a2.getClass(); // true`}
          />
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          Generics help ensure type-safety and reusable code.
          Understanding generic classes, methods, wildcards,
          and type erasure prepares you for Java Collections,
          frameworks, and enterprise-level development.
        </p>

        <p className="p-text mt-4">
          Diagrams to insert:
          <strong> generic-class-diagram.png</strong>,
          <strong> wildcard-usage.png</strong>
        </p>
      </section>

    </div>
  );
};