"use client";

import { CodeBlock } from "../../../components/CodeBlock";

export const Ch7Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VII: Generics</span>.
        Generics allow you to create classes, methods, and interfaces that operate on
        data of specific types while ensuring type-safety at compile time. They are
        widely used in Java Collections, utility classes, and reusable APIs.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Basics */}
      <section>
        <h3 className="section-heading">Basics of Generics</h3>

        <p className="p-text">
          Generics enable writing type-independent code.  
          Instead of using <code className="inline-code">Object</code> or casting manually,
          generics ensure compile-time checking.
        </p>

        <ul className="section-list">
          <li>Eliminates unsafe explicit type casting</li>
          <li>Enables strong compile-time type-checking</li>
          <li>Allows highly reusable, flexible classes and methods</li>
        </ul>

        <CodeBlock 
          title="COMPILE-TIME TYPE PROTECTION"
          code={`ArrayList<String> list = new ArrayList<>();
list.add("hello");
// list.add(10);   // Compile-Time Error: strong type safety prevents mixing types`}
        />

        {/* ✅ FIXED: Replaced broken generic-type-parameter.png reference with ASCII diagram */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Generic Type Parameter Anatomy ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`   ArrayList < String >  list  =  new  ArrayList <> ();
     │          │                                 │
Class Type   Type Argument                Diamond Operator
(Container)  (Enforces Type)             (Infers Type automatically)`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Generic Class */}
      <section>
        <h3 className="section-heading">Generic Class</h3>

        <p className="p-text">
          A generic class defines one or more type parameters to be used throughout its properties and signatures.
        </p>

        <CodeBlock 
          title="GENERIC CLASS TYPE CONTAINER"
          code={`class Box<T> {
  private T value;

  public Box(T value) {
    this.value = value;
  }

  public T get() { 
    return value; 
  }
}

// Usage with Integer wrappers
Box<Integer> b = new Box<>(100);
System.out.println(b.get());`}
        />

        <ul className="section-list mt-3">
          <li><code className="inline-code">T</code> (Type), <code className="inline-code">E</code> (Element), <code className="inline-code">K</code> (Key), <code className="inline-code">V</code> (Value) are standard naming conventions.</li>
          <li>You can define multiple type parameters inside a single diamond schema, e.g., <code className="inline-code">Box&lt;T, U&gt;</code>.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Two Type Parameters */}
      <section>
        <h3 className="section-heading">Generic Class with Two Type Parameters</h3>

        <p className="p-text">
          Useful for multi-value architectural data storage like mappings and tuple containers.
        </p>

        <CodeBlock 
          title="MULTI-TYPE SCHEMA PARAMETERS"
          code={`class Pair<K, V> {
  private K key;
  private V value;

  public Pair(K key, V value) {
    this.key = key;
    this.value = value;
  }

  public K getKey() { return key; }
  public V getValue() { return value; }
}

Pair<String, Integer> p = new Pair<>("age", 20);`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Generic Methods */}
      <section>
        <h3 className="section-heading">Generic Methods</h3>

        <p className="p-text">
          A method can declare its own independent type parameters, scope-locked inside its own signature regardless of whether the enclosing class is generic or not.
        </p>

        <CodeBlock 
          title="STANDALONE GENERIC METHOD DISPATCHER"
          code={`class Utils {
  // Type parameter declared right before the return type
  public static <T> void print(T value) {
    System.out.println(value);
  }
}

// Runtime automated inference
Utils.print("hello");
Utils.print(123);`}
        />

        {/* ✅ FIXED: Replaced broken generic-method-flow.png with clean signature map */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Generic Method Signature Analysis ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`public static   <T>   void   print (  T value  )
                 │              │       │
          Type Parameter    Return Type  Parameter Type Scope`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Bounded Type Parameters */}
      <section>
        <h3 className="section-heading">Bounded Type Parameters</h3>

        <p className="p-text">
          Bounds place upper limits on type parameters, restricting the family of classes that can be supplied to a generic argument.
        </p>

        <CodeBlock 
          title="UPPER BOUND RESTRICTIONS"
          code={`class Numbers<T extends Number> {   // restricts types to Number or its subclasses
  private T num;
  
  public Numbers(T num) { 
    this.num = num; 
  }
}

Numbers<Integer> n1 = new Numbers<>(10);       // Compiles fine
// Numbers<String> n2 = new Numbers<>("hi"); // Compile-Time Error: String does not extend Number`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Wildcards */}
      <section>
        <h3 className="section-heading">Wildcards</h3>

        <p className="p-text">
          Wildcards represented by the question mark symbol (<code>?</code>) offer polymorphic argument compatibility when dealing with unknown or collections of partially known families.
        </p>

        <ul className="section-list">
          <li><strong><code>List&lt;?&gt;</code></strong> – Unbounded wildcard. Accepts list collections of any arbitrary element type.</li>
          <li><strong><code>List&lt;? extends T&gt;</code></strong> – Upper bounded wildcard. Restricts to families extending type <code>T</code> (Safe for reading operations).</li>
          <li><strong><code>List&lt;? super T&gt;</code></strong> – Lower bounded wildcard. Restricts to superclasses above type <code>T</code> (Safe for writing operations).</li>
        </ul>

        <CodeBlock 
          title="WILDCARD METHOD PARSING ROUTINES"
          code={`import java.util.List;

class WildcardDemo {
  // Unbounded: Accepts any type list configuration
  void show(List<?> list) { }           

  // Upper Bounded: Accepts lists of Number, Integer, Double, etc.
  void showNum(List<? extends Number> l) { } 
}`}
        />

        {/* ✅ FIXED: Replaced broken wildcards-hierarchy.png with bounded tree chart */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Wildcard Bounds Structural Hierarchy ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`         [ Object ]
             ▲
             │  (? super Number) ── Lower bound limit includes ancestors
        [ Number ]
             ▲
             │  (? extends Number) ── Upper bound limit includes descendants
    ┌────────┴────────┐
[ Integer ]       [ Double ]`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Erasure */}
      <section>
        <h3 className="section-heading">Type Erasure</h3>

        <p className="p-text">
          Java implements generics strictly at compile time through a compiler technique called <strong>type erasure</strong>. 
          To ensure backward compatibility with older legacy codebases, all generic tokens are completely stripped off and replaced with raw types (usually <code>Object</code> or the bound limit) during execution compilation.
        </p>

        <ul className="section-list">
          <li>Generic parameters exist exclusively for compile-time structural validation checks.</li>
          <li><strong>Restrictions:</strong> You cannot instantiate generics with primitives (e.g., <code>List&lt;int&gt;</code> is invalid) or carry out runtime type evaluations like <code>instanceof T</code>.</li>
        </ul>

        <CodeBlock 
          title="RUNTIME ERASURE TRACE COMPARISON"
          code={`ArrayList<Integer> a1 = new ArrayList<>();
ArrayList<String> a2 = new ArrayList<>();

// Both instances evaluate to the identical underlying raw class at runtime
System.out.println(a1.getClass() == a2.getClass());   // Outputs: true`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Generics eliminate unsafe casting errors and enforce robust static types over decoupled abstract code structures. 
          Grasping generic class configurations, bounds, wildcards, and compiler type erasure patterns forms the foundation for writing high-performance frameworks and managing the Java Collections API effectively.
        </p>
      </section>

    </div>
  );
};