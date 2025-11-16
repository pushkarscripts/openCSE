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
          <li><strong>Exception</strong> – indicates runtime errors that can be handled</li>
          <li><strong>Error</strong> – serious issues not expected to be handled (e.g. OutOfMemoryError)</li>
          <li>All exceptions derive from the class <code className="inline-code">Throwable</code></li>
        </ul>

        <p className="p-text">
          The main advantage of Java&apos;s exception system is **separation of error-handling code from normal logic**.
        </p>

        <p className="p-text mt-2">Diagram: <strong>exception-hierarchy.png</strong></p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Exception Types */}
      <section>
        <h3 className="section-heading">Types of Exceptions</h3>

        <ul className="section-list">
          <li><strong>Checked exceptions</strong> – must be caught or declared (IOException, SQLException)</li>
          <li><strong>Unchecked exceptions</strong> – inherit from RuntimeException (ArithmeticException, NullPointerException)</li>
          <li><strong>Errors</strong> – not meant to be handled (StackOverflowError)</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14]">Unchecked Exception Example</div>
          <pre className="code-block mt-3">
{`int x = 10 / 0;   // ArithmeticException`}
          </pre>
        </div>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg mt-4">
          <div className="font-semibold text-[#3a2a14]">Checked Exception Example</div>
          <pre className="code-block mt-3">
{`FileReader fr = new FileReader("abc.txt");   // must be handled`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Try Catch */}
      <section>
        <h3 className="section-heading">Using try, catch, and finally</h3>

        <p className="p-text">
          A <strong>try block</strong> contains statements that may throw an exception.
          <strong>catch blocks</strong> handle the specific exception types.
          The <strong>finally block</strong> executes whether or not an exception occurs.
        </p>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-3">
          <pre className="code-block">
{`try {
  int a = 5 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
} finally {
  System.out.println("Cleanup operations");
}`}
          </pre>
        </div>

        <ul className="section-list mt-4">
          <li>Use multiple catch blocks for multiple exception types</li>
          <li><code className="inline-code">finally</code> is often used to close files, connections, or release resources</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Throw and Throws */}
      <section>
        <h3 className="section-heading">throw and throws</h3>

        <p className="p-text">
          <strong>throw</strong> explicitly throws an exception.  
          <strong>throws</strong> declares that a method may throw an exception.
        </p>

        <div className="example-box bg-[#f3e7c2] border border-[#c7a669] p-4 rounded-lg">
          <pre className="code-block">
{`void checkAge(int age) {
  if(age < 18)
    throw new IllegalArgumentException("Too young");
}

void readFile() throws IOException {
  FileReader f = new FileReader("data.txt");
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Built-in Exceptions */}
      <section>
        <h3 className="section-heading">Java’s Built-in Exceptions</h3>

        <p className="p-text">Commonly asked in exams:</p>

        <ul className="section-list">
          <li><strong>ArithmeticException</strong></li>
          <li><strong>ArrayIndexOutOfBoundsException</strong></li>
          <li><strong>NullPointerException</strong></li>
          <li><strong>NumberFormatException</strong></li>
          <li><strong>IOException</strong></li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Custom Exceptions */}
      <section>
        <h3 className="section-heading">Creating Custom Exceptions</h3>

        <p className="p-text">
          User-defined exceptions extend the <code className="inline-code">Exception</code> class.
        </p>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] rounded-lg p-4">
          <pre className="code-block">
{`class InvalidMarksException extends Exception {
  InvalidMarksException(String msg) {
    super(msg);
  }
}

void check(int m) throws InvalidMarksException {
  if(m < 0 || m > 100)
    throw new InvalidMarksException("Invalid marks");
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Exception handling improves program reliability by allowing controlled
          error management. Using <strong>try-catch-finally</strong>, throwing exceptions,
          and understanding the exception class hierarchy are essential skills for
          robust Java development.
        </p>

        <p className="p-text mt-4">
          Diagrams to insert: <strong>try-catch-flowchart.png</strong>, <strong>exception-types-table.png</strong>
        </p>
      </section>

    </div>
  );
};
