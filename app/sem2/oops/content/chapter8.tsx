"use client";

import { CodeBlock } from "../../../components/CodeBlock";

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
          <li><strong>String</strong> – Content cannot be modified post-allocation (Stored inside String Constant Pool).</li>
          <li><strong>StringBuffer</strong> – Thread-safe, synchronized buffer mutable allocation (Safe for multi-threaded setups).</li>
          <li><strong>StringBuilder</strong> – Non-synchronized, faster mutable buffer (Preferred for single-threaded sequential routines).</li>
        </ul>

        <CodeBlock 
          title="TEXTUAL WRAPPER RUNTIMES"
          code={`String s = "Hello";
String s2 = s.replace("H", "Y"); // Spawns a brand new instance on heap

StringBuffer sb = new StringBuffer("Java");
sb.append(" Programming");       // Modifies internal memory buffer directly

StringBuilder sb2 = new StringBuilder("Fast");
sb2.append(" Builder");          // Performs high-speed, non-blocking modification`}
        />

        {/* ✅ FIXED: Replaced broken string-vs-stringbuffer.png with safe matrix representation */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ String Sequence Specifications ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Feature         │ String           │ StringBuffer     │ StringBuilder
────────────────┼──────────────────┼──────────────────┼──────────────────
Immutability    │ Immutable        │ Mutable          │ Mutable
Thread Safety   │ Yes (Constant)   │ Yes (Synchronized)│ No (Unsafe)
Performance     │ Slow on edits    │ Medium (Locks)   │ Fast (No Locks)`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Java Lang */}
      <section>
        <h3 className="section-heading">Exploring java.lang</h3>

        <p className="p-text">
          The <code className="inline-code">java.lang</code> package is automatically imported into every compilation unit and contains
          core classes essential to the system runtime.
        </p>

        <ul className="section-list">
          <li><strong>Math</strong> – Final utility class housing high-performance algebraic and trigonometric static functions.</li>
          <li><strong>Object</strong> – Root ancestor anchoring every single class tree.</li>
          <li><strong>System</strong> – Interface connecting the code execution logic to host environment streams (stdin, stdout, stderr).</li>
          <li><strong>Wrapper classes</strong> – Object wrappers (Integer, Double, Character) enabling primitive binding to Object references.</li>
        </ul>

        <CodeBlock 
          title="CORE UTILITIES DEPLOYMENT"
          code={`double r = Math.sqrt(49);        // Returns: 7.0
int m = Math.max(5, 12);          // Returns: 12
char c = Character.toUpperCase('a'); // Returns: 'A'

// Autoboxing primitives into reference containers
Integer boundValue = 57; // Automatic wrap`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Collections Framework */}
      <section>
        <h3 className="section-heading">The Collections Framework</h3>

        <p className="p-text">
          The collections framework offers structured data engines (lists, sets, queues, maps) leveraging strict type safety through Generics parameters.
        </p>

        <ul className="section-list">
          <li><strong>ArrayList</strong> – Dynamic array backed layout (Excellent for fast random index lookup via O(1) ops).</li>
          <li><strong>LinkedList</strong> – Doubly-linked pointer layout (Optimized for quick nodes injection/extraction).</li>
          <li><strong>HashSet</strong> – Backed by hashing tables, blocking duplicate items to maintain unique item listings.</li>
          <li><strong>HashMap</strong> – Map configuration mapping distinct unique keys directly onto individual values.</li>
        </ul>

        <CodeBlock 
          title="COLLECTIONS DATA INSTANTIATION"
          code={`import java.util.ArrayList;
import java.util.HashMap;

ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

HashMap<String, Integer> marks = new HashMap<>();
marks.put("Math", 95);
marks.put("Physics", 88);`}
        />

        {/* ✅ FIXED: Replaced broken collections-hierarchy.png with accurate structural map */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Core Collections Framework Blueprint ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`                  Iterable
                     │
                 Collection               Map (Isolated Interface)
         ┌───────────┼───────────┐           │
         ▼           ▼           ▼           ▼
       List         Set        Queue      HashMap
         │           │
     ArrayList    HashSet`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Intro */}
      <section>
        <h3 className="section-heading">Introduction to Swing</h3>

        <p className="p-text">
          Swing is Java’s lightweight, platform-independent GUI toolkit built on top of the Abstract Window Toolkit (AWT). 
          It implements a completely pluggable look-and-feel architecture across execution setups.
        </p>

        <ul className="section-list">
          <li><strong>JFrame</strong> – Top-level standalone display window shell with borders and close decorations.</li>
          <li><strong>JButton</strong> – Standard interactive button dispatch node triggering user actions.</li>
          <li><strong>JLabel</strong> – Static read-only string display block for UI feedback labels.</li>
          <li><strong>JTextField</strong> – Single-line editable input field capturing text inputs.</li>
        </ul>

        <CodeBlock 
          title="STANDALONE SWING FRAME DEPLOYMENT"
          code={`import javax.swing.JFrame;
import javax.swing.JButton;

public class FirstGUI {
  public static void main(String[] args) {
    JFrame f = new JFrame("Demo Portal");
    JButton b = new JButton("Click Me");
    
    b.setBounds(50, 80, 100, 40); // Exact pixel coordinate plotting x, y, width, height

    f.add(b);
    f.setSize(300, 200);
    f.setLayout(null);           // Disabling layout engines to enforce absolute boundary mappings
    f.setVisible(true);          // Paints frame window on screen
  }
}`}
        />

        <p className="p-text mt-3">
          <strong>Important Runtime Constraint:</strong> All graphics updates and interactive layout modifications must execute safely within the isolated scope of the <strong>Event Dispatch Thread (EDT)</strong> to prevent multi-threaded UI corruption bugs.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Swing Components */}
      <section>
        <h3 className="section-heading">Exploring Swing Components</h3>

        <ul className="section-list">
          <li><strong>JPanel</strong> – Multi-purpose intermediate container grouping individual components within modular sub-layouts.</li>
          <li><strong>JMenuBar, JMenu, JMenuItem</strong> – Hierarchical cascading menu trees pinned across frame window headers.</li>
          <li><strong>JTextArea</strong> – Multi-line dedicated text console canvas capable of processing lengthy textual sequences.</li>
          <li><strong>JScrollPane</strong> – Wrapper module overlaying targeted display canvases with horizontal/vertical scroll trackers.</li>
        </ul>

        <CodeBlock 
          title="MENU STRIP ASSEMBLY SEQUENCE"
          code={`import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JMenu;
import javax.swing.JMenuItem;

class MenuBuilder {
  void buildMenu(JFrame f) {
    JMenuBar mb = new JMenuBar();
    JMenu fileMenu = new JMenu("File");
    JMenuItem exitItem = new JMenuItem("Exit");

    fileMenu.add(exitItem);
    mb.add(fileMenu);
    f.setJMenuBar(mb); // Mounts the complete menu strip shell to frame header
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          This module wraps up Core Java topics by exploring the Standard API and setting a base for desktop graphical interfaces. 
          Grasping the differences between standard utility pools, Collections pipelines, and Swing widgets finishes the full toolkit needed to develop robust tools.
        </p>

        {/* ✅ FIXED: Replaced broken awt-vs-swing.png / swing-event-flow.png with clean visual trace */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Architectural Engine Breakdown ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`AWT Components   ───► Heavyweight, depends on native OS peer graphics engines
Swing Components ───► Lightweight, painted entirely in Java code (Platform Independent)

[ Interaction Flow ]
User clicks Button ───► Event captured by OS ───► Pushed to JVM EDT Queue ───► ActionEvent runs`}
          </pre>
        </div>
      </section>

    </div>
  );
};