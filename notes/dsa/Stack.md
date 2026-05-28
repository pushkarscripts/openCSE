# Stack Data Structure - Complete Notes

# 1\. Introduction to Stack

A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.

This means:

- The element inserted last is removed first.
- Operations are performed only at one end called the **TOP**.

# 2\. Real-Life Examples of Stack

- Stack of plates
- Browser history
- Undo/Redo operations
- Function call stack
- Backtracking algorithms

# 3\. LIFO Principle

Example:

Push: 10 → 20 → 30  
<br/>Stack:  
| 30 |  
| 20 |  
| 10 |  
<br/>Pop:  
30 removed first

# 4\. Basic Stack Operations

| Operation | Description             |
| --------- | ----------------------- |
| Push      | Insert element          |
| Pop       | Remove top element      |
| Peek/Top  | View top element        |
| isEmpty   | Check if stack is empty |
| isFull    | Check if stack is full  |

# 5\. Stack Representation

## Stack Using Array

TOP  
↓  
| 30 |  
| 20 |  
| 10 |

# 6\. Push Operation

## Definition

Adds an element to the top of the stack.

## Algorithm

- Check overflow
- Increment TOP
- Insert element

## Java Code

class Stack {  
int top = -1;  
int size = 5;  
int\[\] arr = new int\[size\];  
<br/>void push(int data) {  
if(top == size - 1) {  
System.out.println("Stack Overflow");  
return;  
}  
<br/>arr\[++top\] = data;  
}  
}

## Time Complexity

genui{"math_block_widget_always_prefetch_v2":{"content":"O(1)"}}

# 7\. Pop Operation

## Definition

Removes the top element from the stack.

## Algorithm

- Check underflow
- Return top element
- Decrement TOP

## Java Code

int pop() {  
if(top == -1) {  
System.out.println("Stack Underflow");  
return -1;  
}  
<br/>return arr\[top--\];  
}

## Time Complexity

genui{"math_block_widget_always_prefetch_v2":{"content":"O(1)"}}

# 8\. Peek Operation

## Definition

Returns the top element without removing it.

## Java Code

int peek() {  
if(top == -1) {  
return -1;  
}  
<br/>return arr\[top\];  
}

## Time Complexity

genui{"math_block_widget_always_prefetch_v2":{"content":"O(1)"}}

# 9\. Stack Overflow and Underflow

## Stack Overflow

Occurs when inserting into a full stack.

Condition:

TOP == SIZE - 1

## Stack Underflow

Occurs when deleting from an empty stack.

Condition:

TOP == -1

# 10\. Stack Using Linked List

## Node Structure

class Node {  
int data;  
Node next;  
<br/>Node(int data) {  
this.data = data;  
}  
}

## Stack Implementation

class Stack {  
Node top;  
<br/>void push(int data) {  
Node newNode = new Node(data);  
<br/>newNode.next = top;  
top = newNode;  
}  
<br/>int pop() {  
if(top == null) {  
return -1;  
}  
<br/>int value = top.data;  
top = top.next;  
<br/>return value;  
}  
}

# 11\. Advantages of Linked List Stack

- Dynamic size
- No fixed capacity
- Efficient memory utilization

# 12\. Applications of Stack

## 1\. Function Call Stack

Stores function calls during recursion.

## 2\. Parentheses Matching

Used in compiler design.

## 3\. Expression Evaluation

- Infix
- Prefix
- Postfix

## 4\. Undo/Redo Operations

Used in editors.

## 5\. Backtracking

Used in:

- Maze problems
- Sudoku
- DFS

# 13\. Infix, Prefix, and Postfix

| Type    | Example |
| ------- | ------- |
| Infix   | A + B   |
| Prefix  | +AB     |
| Postfix | AB+     |

# 14\. Balanced Parentheses Problem

## Problem

Check whether brackets are balanced.

Example:

({\[\]}) → Balanced  
({\[}) → Not Balanced

## Approach

- Push opening brackets
- Pop matching closing brackets

## Time Complexity

genui{"math_block_widget_always_prefetch_v2":{"content":"O(n)"}}

# 15\. Next Greater Element

## Problem

Find next greater element for every array element.

Example:

Input:  
4 5 2 25  
<br/>Output:  
5 25 25 -1

## Approach

Use Monotonic Stack.

# 16\. Monotonic Stack

A stack that maintains elements in:

- increasing order or
- decreasing order

Used in:

- histogram problems
- stock span
- next greater element

# 17\. Reverse a Stack

## Methods

- Using recursion
- Using another stack

# 18\. Stack Using Queue

## Approaches

- Costly Push
- Costly Pop

# 19\. Min Stack

## Definition

A special stack supporting:

- push()
- pop()
- getMin()

in constant time.

# 20\. Time Complexity Table

| Operation | Complexity |
| --------- | ---------- |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |
| Search    | O(n)       |

# 21\. Advantages of Stack

- Easy implementation
- Fast operations
- Useful in recursion
- Efficient memory management

# 22\. Disadvantages of Stack

- Limited access
- Overflow in fixed stack
- Cannot access middle elements directly

# 23\. Important Interview Questions

## Easy

- Implement Stack using Array
- Implement Stack using Linked List
- Reverse a String using Stack

## Medium

- Valid Parentheses
- Min Stack
- Next Greater Element
- Stock Span Problem

## Hard

- Largest Rectangle in Histogram
- Trapping Rain Water
- Evaluate Reverse Polish Notation

# 24\. Stack vs Queue

| Feature   | Stack | Queue |
| --------- | ----- | ----- |
| Principle | LIFO  | FIFO  |
| Insertion | Top   | Rear  |
| Deletion  | Top   | Front |

# 25\. Quick Revision Notes

## LIFO Principle

Last In First Out

## Main Operations

- Push
- Pop
- Peek

## Overflow Condition

TOP == SIZE - 1

## Underflow Condition

TOP == -1

## Applications

- Recursion
- DFS
- Undo/Redo
- Expression evaluation

# 26\. Conclusion

Stack is one of the most fundamental linear data structures in DSA. Understanding:

- stack operations
- implementations
- complexity analysis
- applications
- interview problems

is essential for coding interviews, competitive programming, and software development.
