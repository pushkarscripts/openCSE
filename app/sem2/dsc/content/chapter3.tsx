export const Ch3Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        <span className="font-semibold">Module III: Stacks</span>.
        A Stack is a linear data structure that follows the
        Last In First Out (LIFO) principle. The element inserted
        last is removed first.
      </p>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Introduction */}
      <section>

        <h3 className="section-heading">
          Introduction to Stacks
        </h3>

        <p className="p-text">
          A Stack is a linear data structure in which insertion
          and deletion operations occur only from one end called TOP.
          The most recently added element is removed first.
        </p>

        <ul className="section-list">
          <li>Follows Last In First Out (LIFO)</li>
          <li>Insertion and deletion occur at TOP</li>
          <li>Simple linear structure</li>
          <li>Efficient operations</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Characteristics */}
      <section>

        <h3 className="section-heading">
          Characteristics of Stack
        </h3>

        <ul className="section-list">
          <li>Follows LIFO principle</li>
          <li>Insertion and deletion occur at one end</li>
          <li>Can be implemented using arrays or linked lists</li>
          <li>Fast push and pop operations</li>
          <li>Useful for temporary data storage</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Components */}
      <section>

        <h3 className="section-heading">
          Components of Stack
        </h3>

        <ul className="section-list">
          <li>TOP → Points to the topmost element</li>
          <li>Stack Array/Nodes → Stores data elements</li>
          <li>Size → Maximum capacity of stack</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Representation */}
      <section>

        <h3 className="section-heading">
          Stack Representation
        </h3>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`TOP
 |
30
20
10`}
</pre>

</div>

<p className="p-text">
The TOP pointer always indicates the most recently
inserted element in the stack.
</p>

</section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Need */}
      <section>

        <h3 className="section-heading">
          Need for Stack
        </h3>

        <p className="p-text">
          Stacks are useful when data needs to be processed
          in reverse order or when temporary storage is required.
        </p>

        <ul className="section-list">
          <li>Function call management</li>
          <li>Undo operations</li>
          <li>Expression evaluation</li>
          <li>Memory management</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Types */}
      <section>

        <h3 className="section-heading">
          Types of Stack
        </h3>

        <p className="p-text">
          Stacks can be implemented using different techniques.
        </p>

        <ul className="section-list">
          <li>Array Implementation</li>
          <li>Linked List Implementation</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Operations */}
      <section>

        <h3 className="section-heading">
          Basic Operations on Stack
        </h3>

        <p className="p-text">
          Different operations are performed to store,
          access, and manipulate elements in a stack.
        </p>

        <h4 className="font-semibold text-lg mt-6">
          Push Operation
        </h4>

        <p className="p-text">
          Push inserts a new element into the stack.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`top++;
stack[top]=value;`}
</pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(1)
        </p>


        <h4 className="font-semibold text-lg mt-6">
          Pop Operation
        </h4>

        <p className="p-text">
          Pop removes the topmost element from the stack.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`top--;`}
</pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(1)
        </p>


        <h4 className="font-semibold text-lg mt-6">
          Peek Operation
        </h4>

        <p className="p-text">
          Peek displays the top element without removing it.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`printf("%d",stack[top]);`}
</pre>

        </div>

        <p className="p-text">
          <strong>Time Complexity:</strong> O(1)
        </p>

<h4 className="font-semibold text-lg mt-6">
isEmpty()
</h4>

<p className="p-text">
Checks whether the stack contains any elements.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`if(top==-1)
 printf("Stack Empty");`}
</pre>

</div>

<p className="p-text">
<strong>Time Complexity:</strong> O(1)
</p>


<h4 className="font-semibold text-lg mt-6">
isFull()
</h4>

<p className="p-text">
Checks whether the stack has reached maximum capacity.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`if(top==MAX-1)
 printf("Stack Full");`}
</pre>

</div>

<p className="p-text">
<strong>Time Complexity:</strong> O(1)
</p>

      </section>


      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Overflow Underflow */}
      <section>

        <h3 className="section-heading">
          Overflow and Underflow
        </h3>

        <p className="p-text">
          Overflow occurs when inserting into a full stack.
        </p>

        <p className="p-text">
          Underflow occurs when removing from an empty stack.
        </p>

        <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`if(top==MAX-1)
 printf("Stack Overflow");

if(top==-1)
 printf("Stack Underflow");`}
</pre>

        </div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* C Implementation */}
      <section>

        <h3 className="section-heading">
  Stack Implementation in C
</h3>

<h4 className="font-semibold text-lg mt-6">
Array Implementation
</h4>

<p className="p-text">
In array implementation, elements are stored in a fixed-size
array and the TOP variable keeps track of the topmost element.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`#include<stdio.h>

int stack[5];
int top=-1;

void push(int value){

 if(top==4)
   printf("Overflow");

 else{
   top++;
   stack[top]=value;
 }
}

void pop(){

 if(top==-1)
   printf("Underflow");

 else
   top--;
}`}
</pre>

</div>

<h4 className="font-semibold text-lg mt-6">
Linked List Implementation
</h4>

<p className="p-text">
In linked list implementation, each node stores data
and a pointer to the next node. It avoids fixed-size
limitations present in array implementation.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
};

struct Node* top=NULL;

void push(int value){

    struct Node* newNode=
    (struct Node*)malloc(sizeof(struct Node));

    newNode->data=value;
    newNode->next=top;
    top=newNode;
}

void pop(){

    if(top==NULL)
        printf("Underflow");

    else{
        struct Node* temp=top;
        top=top->next;
        free(temp);
    }
}`}
</pre>

</div>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Complexity */}
      <section>

        <h3 className="section-heading">
          Complexity Analysis (Array and Linked List Implementation)
        </h3>
        
<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`Operation      Complexity

Push            O(1)
Pop             O(1)
Peek            O(1)
isEmpty         O(1)
isFull          O(1)
Search          O(n)`}
</pre>

</div>

<p className="p-text">
The time complexity remains the same for both array
and linked list implementations of stacks. The major
difference lies in memory allocation and storage.
</p>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Array vs Linked List */}

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
          Applications of Stack
        </h3>

        <ul className="section-list">
          <li>Undo and Redo operations</li>
          <li>Function call management</li>
          <li>Expression evaluation</li>
          <li>Browser back and forward history</li>
          <li>Backtracking algorithms</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

{/* Real Life Examples */}

<section>

<h3 className="section-heading">
Real Life Examples of Stack
</h3>

<ul className="section-list">
<li>Stack of plates in a cafeteria</li>
<li>Browser back button history</li>
<li>Undo and Redo operations in text editors</li>
<li>Function call management</li>
<li>Checking balanced parentheses</li>
</ul>

</section>

<hr className="my-6 border-[#c7a669] opacity-40" />

{/* Balanced Parentheses */}

<section>

<h3 className="section-heading">
Checking Balanced Parentheses using Stack
</h3>

<p className="p-text">
Stacks are commonly used to check whether brackets
in an expression are balanced.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`Expression: { [ ( ) ] }

Step 1: Push {
Stack: {

Step 2: Push [
Stack: { [

Step 3: Push (
Stack: { [ (

Step 4: Match ) with (
Stack: { [

Step 5: Match ] with [
Stack: {

Step 6: Match } with {
Stack: Empty

Result: Balanced`}
</pre>

</div>

</section>

<hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Advantages */}
      <section>

        <h3 className="section-heading">
          Advantages of Stack
        </h3>

        <ul className="section-list">
          <li>Easy implementation</li>
          <li>Fast push and pop operations</li>
          <li>Efficient memory usage</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

      {/* Limitations */}
      <section>

        <h3 className="section-heading">
          Limitations of Stack
        </h3>

        <ul className="section-list">
          <li>No random access</li>
          <li>Only the top element can be accessed directly</li>
          <li>Overflow and underflow possible</li>
        </ul>

      </section>

      <hr className="my-6 border-[#c7a669] opacity-40" />

{/* Interview Questions */}

<section>

<h3 className="section-heading">
Interview Questions
</h3>

<h4 className="font-semibold text-lg mt-6">
1. What is LIFO?
</h4>

<p className="p-text">
LIFO stands for Last In First Out. The element inserted
last into the stack is removed first.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`Push: 10 → 20 → 30

Pop removes: 30`}
</pre>

</div>


<h4 className="font-semibold text-lg mt-6">
2. What is the difference between Stack and Queue?
</h4>

<p className="p-text">
A Stack follows the LIFO principle whereas
a Queue follows the FIFO principle.
</p>

<div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

<pre className="code-block">
{`Stack : Last In First Out
Queue : First In First Out`}
</pre>

</div>


<h4 className="font-semibold text-lg mt-6">
3. What causes Stack Overflow?
</h4>

<p className="p-text">
Stack Overflow occurs when an insertion
operation is performed on a full stack.
</p>


<h4 className="font-semibold text-lg mt-6">
4. How are stacks used in function calls?
</h4>

<p className="p-text">
Function calls are managed using a call stack.
Whenever a function is called, its information
is pushed onto the stack and removed when execution finishes.
</p>


<h4 className="font-semibold text-lg mt-6">
5. How can stacks be implemented?
</h4>

<p className="p-text">
Stacks can be implemented using:
</p>

<ul className="section-list">
<li>Arrays</li>
<li>Linked Lists</li>
</ul>

<h4 className="font-semibold text-lg mt-6">
6. Why is stack preferred in recursion?
</h4>

<p className="p-text">
Recursion uses the call stack to store function calls.
Each recursive call is pushed into the stack and removed
after execution completes.
</p>

</section>

    </div>
  );
};