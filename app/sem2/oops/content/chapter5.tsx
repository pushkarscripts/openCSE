"use client";

import { CodeBlock } from "../../../components/CodeBlock";

export const Ch5Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module V: Exception Handling</span>.
        This module explains how Java deals with unexpected conditions during runtime.
        Exception handling ensures that programs do not crash when errors occur and
        instead allow controlled recovery.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Fundamentals */}
      <section>
        <h3 className="section-heading">Exception Handling Fundamentals</h3>

        <p className="p-text">
          An exception is an event that disrupts the normal flow of the program.
          Java uses a robust, object-oriented model for error handling.
        </p>

        <ul className="section-list">
          <li><strong>Exception</strong> – indicates runtime conditions that a reasonable application might want to catch</li>
          <li><strong>Error</strong> – indicates serious problems that a reasonable application should not try to catch (e.g., OutOfMemoryError)</li>
          <li>All exception and error types derive from the root class <code className="inline-code">Throwable</code></li>
        </ul>

        <p className="p-text">
          The main advantage of Java&apos;s exception system is <strong>separation of error-handling code from normal execution logic</strong>.
        </p>

        {/* ✅ FIXED: Replaced broken exception-hierarchy.png with precise ASCII tree */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Throwable Class Hierarchy Structure ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`                  [ Throwable ]
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
   [ Exception ]                  [ Error ]
        │                             │
  ┌─────┴──────────────┐              ├── StackOverflowError
  ▼                    ▼              └── OutOfMemoryError
[ Checked ]     [ RuntimeException ] (Unchecked)
(IOException)   (NullPointerException, ArithmeticException)`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Exception Types */}
      <section>
        <h3 className="section-heading">Types of Exceptions</h3>

        <ul className="section-list">
          <li><strong>Checked exceptions</strong> – Evaluated at compile-time. The compiler forces the code to either catch or declare them using throws (e.g., IOException,編SQLException).</li>
          <li><strong>Unchecked exceptions</strong> – Evaluated at runtime. They inherit from RuntimeException and usually imply programmatic or logical bugs (e.g., ArithmeticException, NullPointerException).</li>
          <li><strong>Errors</strong> – Fatal system failures that are external to the application control and not meant to be intercepted or handled.</li>
        </ul>

        <CodeBlock 
          title="UNCHECKED EXCEPTION LOGIC BREAKDOWN"
          code={`// Throws ArithmeticException at runtime due to mathematical limits
int x = 10 / 0;`}
        />

        <CodeBlock 
          title="CHECKED EXCEPTION COMPLIANCE DECLARATION"
          code={`import java.io.FileReader;
import java.io.FileNotFoundException;

// Must be enclosed inside a validation routine or declared via throws declaration
void openResource() throws FileNotFoundException {
    FileReader fr = new FileReader("abc.txt");
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Try Catch */}
      <section>
        <h3 className="section-heading">Using try, catch, and finally</h3>

        <p className="p-text">
          A <strong>try block</strong> isolates statements that may throw an anomaly. 
          <strong>catch blocks</strong> intercept specific matched exception instances, while the 
          <strong>finally block</strong> executes unconditionally, making it ideal for deterministic cleanup steps.
        </p>

        <CodeBlock 
          title="FAULT ISOLATION METRIC BLOCKS"
          code={`try {
  int a = 5 / 0;
} catch (ArithmeticException e) {
  System.out.println("Intercepted system boundary failure: Cannot divide by zero.");
} finally {
  System.out.println("Executing explicit resource cleanup workflows.");
}`}
        />

        <ul className="section-list mt-4">
          <li>Multiple catch blocks must be ordered from specific subclasses to broad superclasses to avoid compilation blocking.</li>
          <li>The <code className="inline-code">finally</code> block executes even if a catch block contains a return instruction, ensuring deterministic release of system socket descriptors or file buffers.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Throw and Throws */}
      <section>
        <h3 className="section-heading">throw and throws</h3>

        <p className="p-text">
          The <strong>throw</strong> keyword manually triggers an exception instance down the execution thread pipeline. 
          The <strong>throws</strong> keyword acts as a method signature contract, signaling callers to handle potential checked exceptions.
        </p>

        <CodeBlock 
          title="EXPLICIT ERROR SIGNALING PROTOCOLS"
          code={`import java.io.FileReader;
import java.io.IOException;

class OperationalGate {
    void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age restriction thresholds triggered.");
        }
    }

    void readFile() throws IOException {
        // Postponing error tracking mechanics up the call stack hierarchy
        FileReader f = new FileReader("data.txt");
    }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Built-in Exceptions */}
      <section>
        <h3 className="section-heading">Java’s Built-in Exceptions</h3>

        <p className="p-text">Frequently encountered runtime anomalies in core frameworks and examinations:</p>

        <ul className="section-list">
          <li><strong>ArithmeticException</strong> – Division operations involving invalid fractional steps or zero dividers.</li>
          <li><strong>ArrayIndexOutOfBoundsException</strong> – Attempting to reference index boundaries beyond an array bounds configuration.</li>
          <li><strong>NullPointerException</strong> – Triggering instance methods or reading variable fields over an unallocated null pointer.</li>
          <li><strong>NumberFormatException</strong> – Failure parsing alphanumeric string inputs into numeric variable containers.</li>
          <li><strong>IOException</strong> – Unresolved terminal interface drops or failed physical storage device streams.</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Custom Exceptions */}
      <section>
        <h3 className="section-heading">Creating Custom Exceptions</h3>

        <p className="p-text">
          User-defined exceptions extend the foundational <code className="inline-code">Exception</code> class to represent explicit domain boundary failures.
        </p>

        <CodeBlock 
          title="CUSTOM EXCEPTION SCHEMAS DEPLOYMENT"
          code={`class InvalidMarksException extends Exception {
  public InvalidMarksException(String msg) {
    super(msg); // Preserves message detail inside Throwable context
  }
}

class EvaluationEngine {
  void check(int m) throws InvalidMarksException {
    if (m < 0 || m > 100) {
      throw new InvalidMarksException("Provided metric evaluates out of standardized scoring scales.");
    }
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Exception handling enhances program resilience by separating error recovery routines from core business operations. 
          Mastering <strong>try-catch-finally</strong> gating, structured exception propagation, and custom class extensions prevents ungraceful process terminations.
        </p>

        {/* ✅ FIXED: Replaced p-text reminders and broken flowchart links with a clean ASCII lifecycle flow chart */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Try-Catch-Finally Execution Pipeline ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{` [ Try Block Starts ] ─── Anomaly Occurs? ───► (Yes) ───► [ Catch Block Handles Anomaly ]
          │                                                               │
         (No)                                                             │
          ▼                                                               ▼
   [ Completes Try ] ───────────────────────────────────────────► [ Finally Block Executes ]
                                                                          │
                                                                          ▼
                                                                [ Normal Flow Resumes ]`}
          </pre>
        </div>
      </section>

    </div>
  );
};