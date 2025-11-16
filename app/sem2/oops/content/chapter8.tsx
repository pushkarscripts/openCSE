export const Ch8Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VIII: The Java Library and GUI Programming with Swing</span>.
        This module introduces essential parts of the Java Standard Library—string handling,
        math utilities, collections—and then provides a practical introduction to graphical
        programming using Swing components.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* String Handling */}
      <section>
        <h3 className="section-heading">String Handling in Java</h3>

        <p className="p-text">
          Java provides three main classes for working with textual data:
          <strong> String</strong> (immutable), <strong>StringBuffer</strong> (mutable, synchronized),
          and <strong>StringBuilder</strong> (mutable, unsynchronized).
        </p>

        <ul className="section-list">
          <li><strong>String</strong> objects cannot be changed once created</li>
          <li><strong>StringBuffer</strong> is used when thread-safety is required</li>
          <li><strong>StringBuilder</strong> is faster but not synchronized</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg mt-4">
          <pre className="code-block">
{`String s = "Hello";
String s2 = s.replace("H", "Y"); // new object

StringBuffer sb = new StringBuffer("Java");
sb.append(" Programming");

StringBuilder sb2 = new StringBuilder("Fast");
sb2.append(" Builder");`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>string-vs-stringbuffer.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Java Lang */}
      <section>
        <h3 className="section-heading">Exploring java.lang</h3>

        <p className="p-text">
          The <code className="inline-code">java.lang</code> package is automatically imported and contains
          core classes essential to Java programming.
        </p>

        <ul className="section-list">
          <li><strong>Math</strong> – mathematical functions</li>
          <li><strong>Object</strong> – root of all classes</li>
          <li><strong>System</strong> – standard I/O and environment</li>
          <li><strong>Wrapper classes</strong>: Integer, Double, Character</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
          <pre className="code-block">
{`double r = Math.sqrt(49);        // 7.0
int m = Math.max(5, 12);          // 12
char c = Character.toUpperCase('a');`}
          </pre>
        </div>

        <p className="p-text">
          Wrapper classes help convert between primitives and objects.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Collections Framework */}
      <section>
        <h3 className="section-heading">The Collections Framework</h3>

        <p className="p-text">
          The collections framework provides data structures like lists, sets,
          queues, and maps. Generics are heavily used here.
        </p>

        <ul className="section-list">
          <li><strong>ArrayList</strong> – dynamic array</li>
          <li><strong>LinkedList</strong> – doubly-linked list</li>
          <li><strong>HashSet</strong> – stores unique elements</li>
          <li><strong>HashMap</strong> – key-value storage</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-3">
          <pre className="code-block">
{`ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

HashMap<String, Integer> marks = new HashMap<>();
marks.put("Math", 95);
marks.put("Physics", 88);`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>collections-hierarchy.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Intro */}
      <section>
        <h3 className="section-heading">Introduction to Swing</h3>

        <p className="p-text">
          Swing is Java’s lightweight GUI toolkit built on top of AWT. Components are
          platform-independent and provide modern GUI widgets.
        </p>

        <ul className="section-list">
          <li><strong>JFrame</strong> – main window</li>
          <li><strong>JButton</strong> – clickable button</li>
          <li><strong>JLabel</strong> – display text</li>
          <li><strong>JTextField</strong> – input field</li>
        </ul>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14]">Simple Swing Program</div>
          <pre className="code-block mt-3">
{`import javax.swing.*;

public class FirstGUI {
  public static void main(String[] args) {
    JFrame f = new JFrame("Demo");
    JButton b = new JButton("Click");
    b.setBounds(50, 80, 100, 40);

    f.add(b);
    f.setSize(300, 200);
    f.setLayout(null);
    f.setVisible(true);
  }
}`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Each Swing program must run on the <strong>Event Dispatch Thread (EDT)</strong>.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Components */}
      <section>
        <h3 className="section-heading">Exploring Swing Components</h3>

        <ul className="section-list">
          <li><strong>JPanel</strong> – container for grouping components</li>
          <li><strong>JMenu</strong>, <strong>JMenuItem</strong> – for building menus</li>
          <li><strong>JTextArea</strong> – multi-line text box</li>
          <li><strong>JScrollPane</strong> – adds scrollbars</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] rounded-lg p-4 mt-4">
          <div className="font-semibold text-[#3a2a14]">Menu Example</div>
          <pre className="code-block mt-3">
{`JFrame f = new JFrame();
JMenuBar mb = new JMenuBar();
JMenu file = new JMenu("File");
JMenuItem exit = new JMenuItem("Exit");

file.add(exit);
mb.add(file);
f.setJMenuBar(mb);`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Diagram: <strong>swing-components-overview.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          This module introduces essential parts of the Java Standard Library and gives
          a practical foundation in GUI application development with Swing. Mastering
          strings, the math library, collections, and Swing provides the toolkit needed
          for building desktop applications and Core Java utilities.
        </p>

        <p className="p-text mt-4">
          Add diagrams: <strong>awt-vs-swing.png</strong>,
          <strong>swing-event-flow.png</strong>
        </p>
      </section>

    </div>
  );
};
