export const Ch4Content = () => {
    return (
        <div className="course-content">

            <p className="p-text">
                <span className="font-semibold">
                    Module IV: Queues.
                </span>
                In many real-world situations, tasks and requests need
                to be processed in the same order in which they arrive.
                A Queue is a linear data structure designed for such cases
                and follows the First In First Out (FIFO) principle.
            </p>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Introduction */}
            <section>
                <h3 className="section-heading">
                    Introduction to Queue
                </h3>

                <p className="p-text">
                    A Queue is a linear data structure that follows the
                    First In First Out (FIFO) principle. The element inserted
                    first into the queue is removed first.
                </p>

                <ul className="section-list">
                    <li>Follows First In First Out (FIFO)</li>
                    <li>Insertion occurs at REAR</li>
                    <li>Deletion occurs at FRONT</li>
                    <li>Processes elements in arrival order</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Characteristics */}
            <section>
                <h3 className="section-heading">
                    Characteristics of Queue
                </h3>

                <ul className="section-list">
                    <li>Follows FIFO principle</li>
                    <li>Insertion takes place at REAR</li>
                    <li>Deletion takes place at FRONT</li>
                    <li>Can be implemented using arrays or linked lists</li>
                    <li>Efficient for scheduling operations</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Components */}
            <section>
                <h3 className="section-heading">
                    Components of Queue
                </h3>

                <ul className="section-list">
                    <li>FRONT → Points to first element</li>
                    <li>REAR → Points to last element</li>
                    <li>Queue Array/Nodes → Stores elements</li>
                    <li>Size → Maximum queue capacity</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Queue Representation */}
            <section>
                <h3 className="section-heading">
                    Queue Representation
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {` FRONT                       REAR
   ↓                           ↓
 [10] → [20] → [30] → [40] → [50]`}
                    </pre>

                </div>

                <p className="p-text">
                    The FRONT pointer indicates the element to be removed,
                    while the REAR pointer indicates where new elements
                    are inserted.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Need */}
            <section>
                <h3 className="section-heading">
                    Need for Queue
                </h3>

                <p className="p-text">
                    Queues are useful when elements need to be processed
                    in the same order in which they arrive.
                </p>

                <ul className="section-list">
                    <li>CPU scheduling</li>
                    <li>Task management systems</li>
                    <li>Printer scheduling</li>
                    <li>Request processing</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Types */}
            <section>
                <h3 className="section-heading">
                    Types of Queues
                </h3>

                <p className="p-text">
                    Queues are classified into different types based on how
                    insertion and deletion operations are performed. Each type
                    is designed for specific requirements and applications.
                </p>

                {/* Simple Queue */}
                <h4 className="font-semibold text-lg mt-6">
                    1. Simple Queue
                </h4>

                <p className="p-text">
                    A Simple Queue follows the FIFO (First In First Out)
                    principle. Elements are inserted from the REAR and removed
                    from the FRONT.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`FRONT                REAR
 ↓                    ↓
[10] → [20] → [30] → [40]`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Characteristics
                </h5>

                <ul className="section-list">
                    <li>Insertion occurs at REAR</li>
                    <li>Deletion occurs at FRONT</li>
                    <li>Follows FIFO principle</li>
                </ul>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Printer scheduling</li>
                    <li>Ticket booking systems</li>
                    <li>CPU task scheduling</li>
                </ul>

                {/* Circular Queue */}
                <h4 className="font-semibold text-lg mt-8">
                    2. Circular Queue
                </h4>

                <p className="p-text">
                    Circular Queue is an improved version of a simple queue.
                    The last position connects back to the first position,
                    allowing efficient memory utilization.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`      FRONT
         ↓
 [10][20][30][40]
   ↑            ↓
   └────REAR────┘`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Advantages
                </h5>

                <ul className="section-list">
                    <li>Reduces memory wastage</li>
                    <li>Prevents false overflow</li>
                    <li>Reuses empty spaces</li>
                </ul>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>CPU scheduling</li>
                    <li>Circular buffers</li>
                    <li>Traffic control systems</li>
                </ul>

                {/* Priority Queue */}
                <h4 className="font-semibold text-lg mt-8">
                    3. Priority Queue
                </h4>

                <p className="p-text">
                    In a Priority Queue, elements are processed according
                    to their priority instead of arrival order.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Priority : 1  2  3
Queue    : A  B  C

Output : A → B → C`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Characteristics
                </h5>

                <ul className="section-list">
                    <li>Highest priority processed first</li>
                    <li>Priority can be ascending or descending</li>
                    <li>Does not strictly follow FIFO</li>
                </ul>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Operating system scheduling</li>
                    <li>Dijkstra&apos;s shortest path algorithm</li>
                    <li>Network routing</li>
                </ul>

                {/* Deque */}
                <h4 className="font-semibold text-lg mt-8">
                    4. Double Ended Queue (Deque)
                </h4>

                <p className="p-text">
                    Deque (Double Ended Queue) allows insertion and deletion
                    from both FRONT and REAR ends.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Insert ← [10][20][30][40] → Delete`}
                    </pre>

                </div>

                <h5 className="font-semibold mt-4">
                    Types of Deque
                </h5>

                <ul className="section-list">
                    <li>Input Restricted Deque</li>
                    <li>Output Restricted Deque</li>
                </ul>

                <h5 className="font-semibold mt-4">
                    Applications
                </h5>

                <ul className="section-list">
                    <li>Browser history management</li>
                    <li>Sliding window problems</li>
                    <li>Caching systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Operations */}
            <section>
                <h3 className="section-heading">
                    Queue Operations
                </h3>

                <p className="p-text">
                    Different operations are performed to insert,
                    remove, and access queue elements. The following examples demonstrate queue operations using
                    array implementation for simplicity. The same operations
                    can also be performed using linked lists, but the insertion
                    and deletion logic differs internally.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Enqueue Operation
                </h4>

                <p className="p-text">
                    Enqueue inserts a new element at the REAR of the queue.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`rear++;
queue[rear]=value;`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(1)
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    Dequeue Operation
                </h4>

                <p className="p-text">
                    Dequeue removes an element from the FRONT of the queue.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`front++;`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(1)
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    Peek / Front Operation
                </h4>

                <p className="p-text">
                    Displays the front element without removing it.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`printf("%d",queue[front]);`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(1)
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    isEmpty()
                </h4>

                <p className="p-text">
                    Checks whether the queue contains elements.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`if(front==-1 || front>rear)
 printf("Queue Empty");`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(1)
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    isFull()
                </h4>

                <p className="p-text">
                    Checks whether the queue has reached maximum capacity.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`if(rear==MAX-1)
 printf("Queue Full");`}
                    </pre>

                </div>

                <p className="p-text">
                    <strong>Time Complexity:</strong> O(1)
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    Operation Flow Example
                </h4>

                <p className="p-text">
                    The following example demonstrates how queue operations
                    change the queue step by step while maintaining FIFO
                    (First In First Out) order.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Initial Queue:

FRONT → 10 → 20 → 30 ← REAR


Step 1: Enqueue(40)

FRONT → 10 → 20 → 30 → 40 ← REAR


Step 2: Dequeue()

Removed Element: 10

FRONT → 20 → 30 → 40 ← REAR


Step 3: Peek()

Front Element: 20


Step 4: isEmpty()

False


Step 5: isFull()

False`}
                    </pre>

                </div>

                <p className="p-text">
                    This example shows that insertion always takes place at
                    the REAR and deletion always occurs at the FRONT.
                </p>
            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Overflow Underflow */}
            <section>

                <h3 className="section-heading">
                    Overflow and Underflow
                </h3>

                <p className="p-text">
                    Overflow occurs when insertion is attempted into a full queue.
                </p>

                <p className="p-text">
                    Underflow occurs when deletion is attempted from an empty queue.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`if(rear==MAX-1)
    printf("Queue Overflow");

if(front==-1 || front>rear)
    printf("Queue Underflow");`}
                    </pre>

                </div>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Queue Implementation */}
            <section>

                <h3 className="section-heading">
                    Queue Implementation in C
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    Array Implementation
                </h4>

                <p className="p-text">
                    In array implementation, queue elements are stored
                    in a fixed-size array using FRONT and REAR pointers.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>

int queue[5];
int front=-1;
int rear=-1;

void enqueue(int value){

 if(rear==4)
   printf("Overflow");

 else{

   if(front==-1)
      front=0;

   rear++;
   queue[rear]=value;
 }
}

void dequeue(){

 if(front==-1 || front>rear)
    printf("Underflow");

 else
    front++;
}

int peek(){
    if(front==-1 || front>rear)
        return -1;

    return queue[front];
}

int isEmpty(){
    if(front==-1 || front>rear)
        return 1;

    return 0;
}

int isFull(){
    if(rear==4)
        return 1;

    return 0;
}`
                        }
                    </pre>
                </div>
                <p className="p-text">
                    The array implementation uses FRONT and REAR indices.
                    Peek returns the front element, while isEmpty checks
                    whether the queue contains elements. The isFull
                    operation prevents overflow conditions.
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    Linked List Implementation
                </h4>

                <p className="p-text">
                    In linked list implementation, nodes are dynamically
                    created and linked together to avoid fixed-size limitations.
                </p>

                <ul className="section-list">
                    <li>Enqueue → Insert node at REAR</li>
                    <li>Dequeue → Remove node from FRONT</li>
                    <li>Peek → Access FRONT node data</li>
                    <li>isEmpty → Check whether FRONT is NULL</li>
                </ul>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>
#include<stdlib.h>

struct Node{
   int data;
   struct Node* next;
};

struct Node* front=NULL;
struct Node* rear=NULL;

void enqueue(int value){

 struct Node* newNode=
 (struct Node*)malloc(sizeof(struct Node));

 newNode->data=value;
 newNode->next=NULL;

 if(rear==NULL){

   front=rear=newNode;
 }

 else{

   rear->next=newNode;
   rear=newNode;
 }
}

void dequeue(){

 if(front==NULL)
   printf("Underflow");

 else{

   struct Node* temp=front;
   front=front->next;

   free(temp);

   if(front==NULL)
      rear=NULL;
 }
}
 
int peek(){
    if(front==NULL)
        return -1;

    return front->data;
}

int isEmpty(){
    if(front==NULL)
        return 1;

    return 0;
}`
                        }
                    </pre>

                </div>
                <p className="p-text">
                    Unlike arrays, linked list queues are dynamic in size and
                    generally become full only when system memory is exhausted.
                </p>
            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Complexity */}
            <section>

                <h3 className="section-heading">
                    Complexity Analysis (Array and Linked List Implementation)
                </h3>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Operation     Time Complexity

Enqueue         O(1)
Dequeue         O(1)
Peek            O(1)
isEmpty         O(1)
isFull          O(1)
Search          O(n)`}
                    </pre>

                </div>

                <p className="p-text">
                    The time complexity of most queue operations remains O(1)
                    for both array and linked list implementations. However,
                    arrays use fixed memory allocation, whereas linked lists
                    allocate memory dynamically.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Comparison */}
            <section>

                <h3 className="section-heading">
                    Comparison: Array vs Linked List Implementation
                </h3>

                <ul className="section-list">
                    <li>Arrays use fixed memory size</li>
                    <li>Linked Lists use dynamic memory allocation</li>
                    <li>Arrays are easier to implement</li>
                    <li>Linked Lists avoid fixed-size limitations</li>
                    <li>Linked Lists require extra memory for pointers</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Applications */}
            <section>

                <h3 className="section-heading">
                    Applications of Queue
                </h3>

                <ul className="section-list">
                    <li>CPU scheduling</li>
                    <li>Printer scheduling</li>
                    <li>Task management systems</li>
                    <li>Breadth First Search (BFS)</li>
                    <li>Network packet handling</li>
                    <li>Call center systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Real-life Examples */}
            <section>

                <h3 className="section-heading">
                    Real Life Examples of Queue
                </h3>

                <ul className="section-list">
                    <li>People standing in a ticket counter line</li>
                    <li>Waiting queue at supermarkets</li>
                    <li>Call center customer waiting systems</li>
                    <li>Printer job scheduling</li>
                    <li>Traffic signal vehicle processing</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Practical Example */}
            <section>

                <h3 className="section-heading">
                    Practical Example using Queue
                </h3>

                <p className="p-text">
                    Queues are commonly used in printer scheduling.
                    The first print request received is processed first.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Queue:

Enqueue Operations:

Insert Job A
Insert Job B
Insert Job C


Current Queue:

FRONT → A → B → C ← REAR


Step 1:

Dequeue Job A

Queue:
FRONT → B → C ← REAR


Step 2:

Enqueue Job D

Queue:
FRONT → B → C → D ← REAR


Step 3:

Dequeue Job B

Final Queue:
FRONT → C → D ← REAR`}
                    </pre>

                </div>

                <p className="p-text">
                    This example demonstrates FIFO behavior where the first
                    print request inserted into the queue is processed first.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Advantages */}
            <section>

                <h3 className="section-heading">
                    Advantages of Queue
                </h3>

                <ul className="section-list">
                    <li>Maintains processing order</li>
                    <li>Efficient scheduling mechanism</li>
                    <li>Easy implementation</li>
                    <li>Useful for resource sharing</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Limitations */}
            <section>

                <h3 className="section-heading">
                    Limitations of Queue
                </h3>

                <ul className="section-list">
                    <li>Only FRONT element can be accessed directly</li>
                    <li>Overflow and underflow may occur</li>
                    <li>Searching takes linear time</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />


            {/* Interview Questions */}
            <section>

                <h3 className="section-heading">
                    Interview Questions
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    1. What is FIFO?
                </h4>

                <p className="p-text">
                    FIFO stands for First In First Out.
                    The element inserted first is removed first.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Enqueue: 10 → 20 → 30

Dequeue removes: 10`}
                    </pre>

                </div>


                <h4 className="font-semibold text-lg mt-6">
                    2. What is the difference between Queue and Stack?
                </h4>

                <p className="p-text">
                    Queue follows FIFO whereas Stack follows LIFO.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Queue : FIFO (First In First Out)
Stack : LIFO (Last In First Out)`}
                    </pre>

                </div>


                <h4 className="font-semibold text-lg mt-6">
                    3. What causes Queue Overflow?
                </h4>

                <p className="p-text">
                    Queue Overflow occurs when insertion is attempted
                    on a full queue.
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    4. Why is Queue used in CPU scheduling?
                </h4>

                <p className="p-text">
                    CPU scheduling uses queues because processes
                    must be executed in the same order they arrive.
                </p>


                <h4 className="font-semibold text-lg mt-6">
                    5. How can queues be implemented?
                </h4>

                <p className="p-text">
                    Queues can be implemented using:
                </p>

                <ul className="section-list">
                    <li>Arrays</li>
                    <li>Linked Lists</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    6. Why is Circular Queue preferred over Simple Queue?
                </h4>

                <p className="p-text">
                    Circular Queue avoids memory wastage by reusing
                    empty spaces created after deletion operations.
                </p>
            </section>
        </div>
    );
};