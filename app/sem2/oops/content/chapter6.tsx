export const Ch6Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module VI: Threads</span>.
        This module explains Java’s multithreading model, how threads work,
        how to create and manage threads, and how to safely share resources.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Java Thread Model */}
      <section>
        <h3 className="section-heading">The Java Thread Model</h3>

        <p className="p-text">
          Multithreading allows multiple parts of a program to run concurrently.
          Each part runs in a separate <strong>thread</strong>. Java provides built-in
          support for threading at the language level.
        </p>

        <ul className="section-list">
          <li><strong>Thread</strong> – a lightweight process</li>
          <li><strong>Multithreading</strong> – executing multiple threads</li>
          <li><strong>Context switching</strong> – CPU switching between threads</li>
        </ul>

        <p className="p-text mt-2">
          Diagram: <strong>thread-life-cycle.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Main thread */}
      <section>
        <h3 className="section-heading">The Main Thread</h3>

        <p className="p-text">
          Every Java program starts with one thread: the <strong>main thread</strong>.
        </p>

        <div className="example-box bg-[#f0ddb6] border border-[#c7a669] p-4 rounded-lg">
          <pre className="code-block">
{`public class MainThreadDemo {
  public static void main(String[] args) {
    Thread t = Thread.currentThread();
    System.out.println(t.getName());      // main
    System.out.println(t.getPriority());  // default = 5
  }
}`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Creating Threads */}
      <section>
        <h3 className="section-heading">Creating Threads</h3>

        <p className="p-text">
          Java supports two ways to create threads:
        </p>

        <ul className="section-list">
          <li>Extending the <strong>Thread</strong> class</li>
          <li>Implementing the <strong>Runnable</strong> interface</li>
        </ul>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg mt-4">
          <div className="font-semibold">Method 1: Extending Thread</div>
          <pre className="code-block mt-3">
{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread running");
  }
}

MyThread t = new MyThread();
t.start();`}
          </pre>
        </div>

        <div className="example-box bg-[#f0ddb6] p-4 border border-[#c7a669] rounded-lg mt-4">
          <div className="font-semibold">Method 2: Implementing Runnable</div>
          <pre className="code-block mt-3">
{`class MyTask implements Runnable {
  public void run() {
    System.out.println("Runnable running");
  }
}

Thread t = new Thread(new MyTask());
t.start();`}
          </pre>
        </div>

        <p className="p-text mt-3">
          Runnable is preferred when a class must extend another class.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multiple Threads */}
      <section>
        <h3 className="section-heading">Creating Multiple Threads</h3>

        <div className="example-box bg-[#f3e7c2] p-4 border border-[#c7a669] rounded-lg">
          <pre className="code-block">
{`for (int i = 1; i <= 3; i++) {
  Thread t = new Thread(() -> {
    System.out.println("Running: " + Thread.currentThread().getName());
  });
  t.start();
}`}
          </pre>
        </div>

        <p className="p-text">
          Each thread runs independently. Order of execution is not guaranteed.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Thread Priorities */}
      <section>
        <h3 className="section-heading">Thread Priorities</h3>

        <p className="p-text">
          Every thread has a priority (1 to 10). Higher priority increases the chance
          of being scheduled first.
        </p>

        <pre className="code-block bg-[#f0ddb6] p-3 border border-[#c7a669] rounded-lg mt-3">
{`Thread t = new Thread(new MyTask());
t.setPriority(Thread.MAX_PRIORITY);  // 10`}
        </pre>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Synchronization */}
      <section>
        <h3 className="section-heading">Synchronization</h3>

        <p className="p-text">
          When multiple threads access shared data, race conditions may occur.
          Synchronization ensures only one thread accesses critical code at a time.
        </p>

        <pre className="code-block bg-[#f3e7c2] p-3 border border-[#c7a669] rounded-lg mt-3">
{`class Counter {
  private int count = 0;

  synchronized void increment() { count++; }
}`}
        </pre>

        <p className="p-text">
          Only one thread can execute a synchronized method or block on an object at once.
        </p>

        <p className="p-text mt-2">
          Diagram: <strong>synchronization-lock.png</strong>
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Interthread Communication */}
      <section>
        <h3 className="section-heading">Interthread Communication</h3>

        <p className="p-text">
          Java provides <strong>wait()</strong>, <strong>notify()</strong>, and <strong>notifyAll()</strong>
          for threads to communicate inside synchronized blocks.
        </p>

        <pre className="code-block bg-[#f0ddb6] p-3 border border-[#c7a669] rounded-lg mt-3">
{`synchronized(obj) {
  obj.wait();       // thread waits
  obj.notify();     // wakes one thread
}`}
        </pre>

        <p className="p-text">Used in producer-consumer problems and buffering.</p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multithreading use */}
      <section>
        <h3 className="section-heading">Using Multithreading</h3>

        <ul className="section-list">
          <li>Parallel computation</li>
          <li>Animations and background tasks</li>
          <li>Real-time systems</li>
          <li>Servers handling multiple clients</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Threads enable concurrent execution in Java. Learning how to create threads,
          synchronize them, and manage communication is essential for advanced Java
          programming and real-world applications such as GUI programming, networking,
          and server-side processing.
        </p>

        <p className="p-text mt-4">
          Add diagrams: <strong>thread-cycle.png</strong>, <strong>synchronization-flow.png</strong>
        </p>
      </section>

    </div>
  );
};
