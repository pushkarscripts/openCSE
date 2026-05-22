export const Ch2Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module II: Linked Lists</span>.
        Linked Lists are dynamic data structures where elements are stored
        as nodes connected through pointers. Unlike arrays, elements do not
        need to be stored in contiguous memory locations.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Introduction */}
      <section>
        <h3 className="section-heading">
          Introduction to Linked Lists
        </h3>

        <p className="p-text">
          A linked list is a linear data structure made up of nodes.
          Each node contains data and a pointer that connects it to
          another node. Linked lists allow dynamic memory allocation
          and can grow or shrink during program execution.
        </p>

        <ul className="section-list">
          <li>Dynamic size</li>
          <li>Nodes connected using pointers</li>
          <li>Efficient insertion and deletion</li>
          <li>Memory allocated at runtime</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Node Structure */}
      <section>
        <h3 className="section-heading">
          Node Structure
        </h3>

        <div className="example-box p-4 rounded-lg mt-4 bg-[#f0ddb6] border border-[#c7a669]">

          <div className="font-semibold text-[#3a2a14] mb-1">
            Code Example
          </div>

          <pre className="code-block">
{`struct Node{
   int data;
   struct Node* next;
};`}
          </pre>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Components */}
      <section>
        <h3 className="section-heading">
          Components of a Linked List
        </h3>

        <ul className="section-list">
          <li>Node → Basic unit of linked list</li>
          <li>Data Field → Stores information</li>
          <li>Pointer Field → Stores next node address</li>
          <li>Head → Starting node</li>
          <li>Tail → Last node</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Memory Representation */}
      <section>
        <h3 className="section-heading">
          Memory Representation
        </h3>

        <p className="p-text">
          Unlike arrays, linked list nodes are stored in different
          memory locations and connected through pointers.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`Address     Data     Next
1000         10       2000
2000         20       3000
3000         30       NULL`}
          </pre>

        </div>
      </section>
<hr className="my-6 border-[#c7a669] opacity-40" />

{/* Need for Linked Lists */}
<section>

  <h3 className="section-heading">
    Need for Linked Lists
  </h3>

  <p className="p-text">
    Arrays have a fixed size and require contiguous memory locations.
    If more elements need to be stored than initially allocated,
    resizing becomes difficult and expensive.
  </p>

  <p className="p-text">
    Linked lists solve these problems by allowing memory allocation
    during runtime. New nodes can easily be inserted or deleted
    without shifting all existing elements.
  </p>

  <ul className="section-list">
    <li>Dynamic memory allocation</li>
    <li>Flexible size</li>
    <li>Efficient insertion and deletion</li>
    <li>Better memory utilization</li>
  </ul>

</section>
      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Node Creation */}
      <section>
        <h3 className="section-heading">
          Creating a Node
        </h3>

        <p className="p-text">
          Nodes are usually created dynamically using malloc().
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`struct Node* newNode;

newNode=(struct Node*)
malloc(sizeof(struct Node));

newNode->data=10;
newNode->next=NULL;`}
          </pre>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types */}
      <section>
        <h3 className="section-heading">
          Types of Linked Lists
        </h3>

        <ul className="section-list">
          <li>Singly Linked List</li>
          <li>Doubly Linked List</li>
          <li>Circular Linked List</li>
        </ul>
      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Singly */}
      <section>
        <h3 className="section-heading">
          Singly Linked List
        </h3>

        <p className="p-text">
  A Singly Linked List is the simplest type of linked list where
  each node contains data and a pointer to the next node only.
  Traversal is possible only in the forward direction because there
  is no link to previous nodes.
</p>

<p className="p-text">
  Singly linked lists are commonly used when memory efficiency is
  important because only one pointer field is stored per node.
</p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <pre className="code-block">
{`10 -> 20 -> 30 -> NULL`}
          </pre>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Doubly */}
      <section>
        <h3 className="section-heading">
          Doubly Linked List
        </h3>

        <p className="p-text">
  A Doubly Linked List stores two pointers in each node:
  one pointer stores the address of the next node and another
  stores the address of the previous node.
</p>

<p className="p-text">
  Since nodes can be traversed in both forward and backward
  directions, insertion and deletion operations become easier.
  However, additional memory is required because of the extra pointer.
</p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <pre className="code-block">
{`NULL <- 10 <-> 20 <-> 30 -> NULL`}
          </pre>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Circular */}
      <section>
        <h3 className="section-heading">
          Circular Linked List
        </h3>

        <p className="p-text">
  In a Circular Linked List, the last node does not contain NULL.
  Instead, the last node points back to the first node, forming
  a circular chain structure.
</p>

<p className="p-text">
  Circular linked lists are useful in applications involving cyclic
  processing such as CPU scheduling, multiplayer games, and
  round-robin algorithms.
</p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">
          <pre className="code-block">
{`10 -> 20 -> 30
^            |
|____________|`}
          </pre>
        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Complexity */}
      <section>
        <h3 className="section-heading">
          Complexity Analysis
        </h3>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

          <pre className="code-block">
{`Operation        Complexity

Access            O(n)
Search            O(n)
Insertion         O(1)
Deletion          O(1)`}
          </pre>

        </div>

      </section>

<hr className="my-6 border-[#c7a669] opacity-40" />

{/* Basic Operations */}
<section>

  <h3 className="section-heading">
    Basic Operations on Linked Lists
  </h3>

  <p className="p-text">
    Various operations can be performed on linked lists for storing,
    accessing, and modifying data. These operations are essential
    for maintaining the linked list structure.
  </p>

  <ul className="section-list">
    <li>Creation of nodes</li>
    <li>Insertion of nodes</li>
    <li>Deletion of nodes</li>
    <li>Traversal of nodes</li>
    <li>Searching for elements</li>
    <li>Updating node values</li>
    <li>Sorting linked lists</li>
  </ul>

<p className="p-text mt-4">
  The basic operations such as traversal, insertion,
  deletion, searching, and updating are common for all
  linked list types. However, the implementation of these
  operations differs depending on whether the linked list
  is singly, doubly, or circular.
</p>

<p className="p-text">
  The examples below mainly use a Singly Linked List
  because it is the simplest and most commonly used
  implementation for understanding linked list concepts.
</p>

  <h4 className="font-semibold text-lg mt-6">
    Traversal
  </h4>

  <p className="p-text">
    Traversal means visiting each node one by one from the head node
    until the end of the linked list is reached.
  </p>

  <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

    <pre className="code-block">
{`while(temp!=NULL){
   printf("%d",temp->data);
   temp=temp->next;
}`}
    </pre>

  </div>

  <p className="p-text">
    <strong>Time Complexity:</strong> O(n)
  </p>


  <h4 className="font-semibold text-lg mt-6">
    Searching
  </h4>

  <p className="p-text">
    Searching is used to locate a particular element in a linked list.
    Since direct indexing is not available, nodes must be checked one
    by one.
  </p>

  <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

    <pre className="code-block">
{`while(temp!=NULL){

   if(temp->data==key)
      printf("Found");

   temp=temp->next;
}`}
    </pre>

  </div>

  <p className="p-text">
    <strong>Time Complexity:</strong> O(n)
  </p>


  <h4 className="font-semibold text-lg mt-6">
    Insertion
  </h4>

  <p className="p-text">
    Insertion adds a new node into the linked list. It can be performed
    at the beginning, end, or any specified position.
  </p>

  <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

    <pre className="code-block">
{`newNode->next=head;
head=newNode;`}
    </pre>

  </div>

  <p className="p-text">
    <strong>Time Complexity:</strong> O(1)
  </p>


  <h4 className="font-semibold text-lg mt-6">
    Deletion
  </h4>

  <p className="p-text">
    Deletion removes a node from the linked list by changing pointer
    connections between nodes.
  </p>

  <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

    <pre className="code-block">
{`head=head->next;`}
    </pre>

  </div>

  <p className="p-text">
    <strong>Time Complexity:</strong> O(1)
  </p>


  <h4 className="font-semibold text-lg mt-6">
    Updating
  </h4>

  <p className="p-text">
    Updating changes the value stored in an existing node.
  </p>

  <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

    <pre className="code-block">
{`temp->data=50;`}
    </pre>

  </div>

</section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Comparison */}
      <section>
        <h3 className="section-heading">
          Arrays vs Linked Lists
        </h3>

        <ul className="section-list">
          <li>Arrays use contiguous memory</li>
          <li>Linked lists use non-contiguous memory</li>
          <li>Arrays have fixed size</li>
          <li>Linked lists are dynamic</li>
          <li>Arrays provide direct access</li>
          <li>Linked lists require traversal</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Applications */}
      <section>
        <h3 className="section-heading">
          Applications of Linked Lists
        </h3>

        <ul className="section-list">
          <li>Stacks and queues</li>
          <li>Browser navigation systems</li>
          <li>Music playlists</li>
          <li>Graph representation</li>
          <li>Dynamic memory allocation</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>
        <h3 className="section-heading">
          Advantages of Linked Lists
        </h3>

        <ul className="section-list">
          <li>Dynamic memory allocation</li>
          <li>Efficient insertion and deletion</li>
          <li>No fixed size limitation</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Limitations */}
      <section>
        <h3 className="section-heading">
          Limitations of Linked Lists
        </h3>

        <ul className="section-list">
          <li>No direct access by index</li>
          <li>Extra memory required for pointers</li>
          <li>Traversal is slower than arrays</li>
        </ul>

      </section>

    </div>
  );
};