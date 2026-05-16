import { CodeBlock } from "../../../components/CodeBlock";

export const Ch8Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">
          Module VIII: The Java Library and GUI Programming with Swing
        </span>.
        This module introduces important parts of the Java Standard
        Library and provides a practical introduction to GUI
        programming using Swing.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* String Handling */}
      <section>
        <h3 className="section-heading">
          String Handling in Java
        </h3>

        <p className="p-text">
          Java provides three important classes for text handling:
          <strong> String</strong>,
          <strong> StringBuffer</strong>, and
          <strong> StringBuilder</strong>.
        </p>

        <ul className="section-list">
          <li>
            <strong>String</strong> objects are immutable
          </li>

          <li>
            <strong>StringBuffer</strong> is mutable and synchronized
          </li>

          <li>
            <strong>StringBuilder</strong> is mutable and faster
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg mt-4">
          <CodeBlock
            code={`String s = "Hello";

String s2 =
  s.replace("H", "Y");

StringBuffer sb =
  new StringBuffer("Java");

sb.append(" Programming");

StringBuilder sb2 =
  new StringBuilder("Fast");

sb2.append(" Builder");`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram:
          <strong> string-vs-stringbuffer.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* java.lang */}
      <section>
        <h3 className="section-heading">
          Exploring java.lang
        </h3>

        <p className="p-text">
          The{" "}
          <code className="inline-code">java.lang</code>
          package is automatically imported and contains
          core Java classes.
        </p>

        <ul className="section-list">
          <li><strong>Math</strong> – mathematical functions</li>

          <li><strong>Object</strong> – root of all classes</li>

          <li>
            <strong>System</strong> – standard I/O and environment
          </li>

          <li>
            <strong>Wrapper classes</strong> –
            Integer, Double, Character
          </li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
          <CodeBlock
            code={`double r = Math.sqrt(49);

int m = Math.max(5, 12);

char c =
  Character.toUpperCase('a');`}
          />
        </div>

        <p className="p-text">
          Wrapper classes help convert primitives into objects.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Collections */}
      <section>
        <h3 className="section-heading">
          The Collections Framework
        </h3>

        <p className="p-text">
          The collections framework provides useful
          data structures like lists, sets, queues,
          and maps.
        </p>

        <ul className="section-list">
          <li><strong>ArrayList</strong> – dynamic array</li>

          <li>
            <strong>LinkedList</strong> – linked list
          </li>

          <li>
            <strong>HashSet</strong> – unique elements
          </li>

          <li>
            <strong>HashMap</strong> – key-value storage
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-3">
          <CodeBlock
            code={`ArrayList<String> names =
  new ArrayList<>();

names.add("Alice");

names.add("Bob");

HashMap<String, Integer> marks =
  new HashMap<>();

marks.put("Math", 95);

marks.put("Physics", 88);`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram:
          <strong> collections-hierarchy.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Intro */}
      <section>
        <h3 className="section-heading">
          Introduction to Swing
        </h3>

        <p className="p-text">
          Swing is Java’s lightweight GUI toolkit built
          on top of AWT.
        </p>

        <ul className="section-list">
          <li><strong>JFrame</strong> – main window</li>

          <li><strong>JButton</strong> – clickable button</li>

          <li><strong>JLabel</strong> – text display</li>

          <li><strong>JTextField</strong> – input field</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14] mb-2">
            Simple Swing Program
          </div>

          <CodeBlock
            code={`import javax.swing.*;

public class FirstGUI {

  public static void main(String[] args) {

    JFrame f =
      new JFrame("Demo");

    JButton b =
      new JButton("Click");

    b.setBounds(50, 80, 100, 40);

    f.add(b);

    f.setSize(300, 200);

    f.setLayout(null);

    f.setVisible(true);
  }
}`}
          />
        </div>

        <p className="p-text mt-3">
          Swing applications should run on the
          <strong> Event Dispatch Thread (EDT)</strong>.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Components */}
      <section>
        <h3 className="section-heading">
          Exploring Swing Components
        </h3>

        <ul className="section-list">
          <li>
            <strong>JPanel</strong> – groups components
          </li>

          <li>
            <strong>JMenu</strong> and
            <strong> JMenuItem</strong> – menus
          </li>

          <li>
            <strong>JTextArea</strong> – multiline text
          </li>

          <li>
            <strong>JScrollPane</strong> – adds scrolling
          </li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4 mt-4">
          <div className="font-semibold text-[#3a2a14] mb-2">
            Menu Example
          </div>

          <CodeBlock
            code={`JFrame f = new JFrame();

JMenuBar mb =
  new JMenuBar();

JMenu file =
  new JMenu("File");

JMenuItem exit =
  new JMenuItem("Exit");

file.add(exit);

mb.add(file);

f.setJMenuBar(mb);`}
          />
        </div>

        <p className="p-text mt-3">
          Diagram:
          <strong> swing-components-overview.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">
          Summary
        </h3>

        <p className="p-text">
          This module introduces important parts of the Java
          Standard Library and provides a foundation for
          GUI application development using Swing.
        </p>

        <p className="p-text mt-4">
          Add diagrams:
          <strong> awt-vs-swing.png</strong>,
          <strong> swing-event-flow.png</strong>
        </p>
      </section>

    </div>
  );
};