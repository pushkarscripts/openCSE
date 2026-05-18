"use client";

import { CodeBlock } from "../../../components/CodeBlock";

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
          <li><strong>Thread</strong> – a lightweight process with its own call stack</li>
          <li><strong>Multithreading</strong> – executing multiple tasks concurrently within the same program space</li>
          <li><strong>Context switching</strong> – the CPU scheduling mechanism shifting between active threads</li>
        </ul>

        {/* ✅ FIXED: Replaced broken thread-life-cycle.png with ASCII State Machine */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Java Thread Life Cycle States ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`  [ New ] ─── start() ───► [ Runnable ] ◄───(Scheduled)───► [ Running ]
                               ▲                                 │
                               │                                 ▼
                        Object.notify()                   Object.wait() / sleep()
                               │                                 │
                               └─────────── [ Blocked ] ◄────────┘
                                                │
                                         (Task Completes)
                                                ▼
                                          [ Terminated ]`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Main thread */}
      <section>
        <h3 className="section-heading">The Main Thread</h3>

        <p className="p-text">
          Every Java program starts with one default execution point: the <strong>main thread</strong>, spawned automatically by the JVM.
        </p>

        <CodeBlock 
          title="INSPECTING THE IMPLICIT MAIN THREAD"
          code={`public class MainThreadDemo {
  public static void main(String[] args) {
    Thread t = Thread.currentThread();
    System.out.println("Thread Name: " + t.getName());      // Outputs: main
    System.out.println("Default Priority: " + t.getPriority());  // Outputs: 5
  }
}`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Creating Threads */}
      <section>
        <h3 className="section-heading">Creating Threads</h3>

        <p className="p-text">
          Java supports two distinct structural implementations to instantiate a custom execution path:
        </p>

        <ul className="section-list">
          <li>Extending the foundational <strong>Thread</strong> class directly</li>
          <li>Implementing the functional <strong>Runnable</strong> interface wrapper</li>
        </ul>

        <CodeBlock 
          title="METHOD 1: EXTENDING THE THREAD CLASS CONTAINER"
          code={`class MyThread extends Thread {
  @Override
  public void run() {
    System.out.println("Execution logic running inside sub-thread routine.");
  }
}

// Spawning execution route
MyThread t = new MyThread();
t.start(); // Allocates machine registers and schedules the run() method`}
        />

        <CodeBlock 
          title="METHOD 2: IMPLEMENTING THE RUNNABLE INTERFACE CONTRACT"
          code={`class MyTask implements Runnable {
  @Override
  public void run() {
    System.out.println("Execution code running from decoupled Runnable task implementation.");
  }
}

// Coupling interface instance inside a standalone Thread worker pipeline
Thread t = new Thread(new MyTask());
t.start();`}
        />

        <p className="p-text mt-3">
          <strong>Design Note:</strong> Implementing <code>Runnable</code> is highly preferred in enterprise systems because it saves your single class inheritance slot from being locked down.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multiple Threads */}
      <section>
        <h3 className="section-heading">Creating Multiple Threads</h3>

        <CodeBlock 
          title="PARALLEL RUNTIME LAMBDA DISPATCHERS"
          code={`for (int i = 1; i <= 3; i++) {
  Thread t = new Thread(() -> {
    System.out.println("Active Target Workspace: " + Thread.currentThread().getName());
  });
  t.start();
}`}
        />

        <p className="p-text">
          Each thread spins up as an isolated execution trace. The exact processing order is entirely governed by the underlying OS thread scheduler.
        </p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Thread Priorities */}
      <section>
        <h3 className="section-heading">Thread Priorities</h3>

        <p className="p-text">
          Threads carry scheduling weights ranking from 1 up to 10. Higher ranks inform the system to favor allocating CPU slices to these nodes whenever possible.
        </p>

        <CodeBlock 
          title="ADJUSTING SCHEDULING WEIGHT METRICS"
          code={`Thread t = new Thread(() -> System.out.println("High priority stream task."));
t.setPriority(Thread.MAX_PRIORITY);  // Assigns maximum weight threshold = 10
t.start();`}
        />
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Synchronization */}
      <section>
        <h3 className="section-heading">Synchronization</h3>

        <p className="p-text">
          When overlapping threads mutating shared variables cause race conditions, the <code>synchronized</code> keyword serializes access to critical segments.
        </p>

        <CodeBlock 
          title="THREAD SAFE RESOURCE LOCKING ROUTINES"
          code={`class Counter {
  private int count = 0;

  // Acquires an implicit object monitor lock before allowing entry
  public synchronized void increment() { 
    count++; 
  }
  
  public int getCount() { 
    return count; 
  }
}`}
        />

        {/* ✅ FIXED: Replaced broken synchronization-lock.png with an ASCII monitor map */}
        <div className="my-6 p-4 rounded-lg bg-[#2a1b10] border border-[#c7a669] border-dashed">
          <p className="text-[#c7a669] font-mono text-sm mb-2 text-center">[ Intrinsic Object Monitor Lock Mechanics ]</p>
          <pre className="text-xs text-[#ac9e91] font-mono whitespace-pre text-center">
{`Thread A ───(Acquires Lock)───► [ Critical Method Scope ] ───(Releases Lock)───► Complete
                                          ▲
Thread B ───(Lock Occupied)───────► [ Blocked Queue ] (Waits till object monitor drops)`}
          </pre>
        </div>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Interthread Communication */}
      <section>
        <h3 className="section-heading">Interthread Communication</h3>

        <p className="p-text">
          Java facilitates cross-thread signaling loops using <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> inside monitor scopes.
        </p>

        <CodeBlock 
          title="PRODUCER-CONSUMER GATEWAY SIGNALS"
          code={`synchronized(obj) {
  // Yields current processor control and goes into an idle wait pool state
  obj.wait();       
  
  // Wakes up a single thread currently pending inside the target monitor pool
  obj.notify();     
}`}
        />

        <p className="p-text">These routines provide low-level synchronization blocks for Producer-Consumer algorithms and concurrent ring buffers.</p>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Multithreading use */}
      <section>
        <h3 className="section-heading">Using Multithreading</h3>

        <ul className="section-list">
          <li>Asynchronous parallel matrix and batch algorithms</li>
          <li>Preventing frame rate drops by isolating UI render threads from heavy disk I/O operations</li>
          <li>Distributed server systems spinning up separate request handlers for independent remote sockets</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Summary */}
      <section>
        <h3 className="section-heading">Summary</h3>

        <p className="p-text">
          Threads form the backbone of highly performant, responsive systems in Java. 
          Mastering lifecycle transitions, implementing concurrent task structures, and resolving resource race conditions are vital steps for enterprise framework engineering.
        </p>
      </section>

    </div>
  );
};