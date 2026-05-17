# Arrays in C

## Introduction

An array is a collection of elements of the same data type stored in contiguous memory locations.

Arrays allow multiple values to be stored using a single variable name, making programs easier to manage and organize.

Example:

Instead of writing:

```c
int a = 10;
int b = 20;
int c = 30;
```

We can use an array:

```c
int numbers[3] = {10, 20, 30};
```

---

## Syntax of Arrays

```c
datatype array_name[size];
```

Example:

```c
int marks[5];
```

This creates an integer array capable of storing 5 elements.

---

## Declaration and Initialization

```c
int numbers[5] = {1, 2, 3, 4, 5};
```

---

## Accessing Array Elements

Array elements are accessed using index values.

Indexing starts from `0`.

```c
#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};

    printf("%d\n", numbers[0]);
    printf("%d\n", numbers[1]);
    printf("%d\n", numbers[2]);

    return 0;
}
```

### Output

```text
10
20
30
```

---

## Taking Input in Arrays

```c
#include <stdio.h>

int main() {
    int numbers[5];

    for(int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    printf("Array elements are:\n");

    for(int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }

    return 0;
}
```

---

## Advantages of Arrays

- Easy storage of multiple values
- Fast access using index
- Simplifies code
- Useful in implementing other data structures

---

## Disadvantages of Arrays

- Fixed size
- Insertion and deletion operations can be costly
- Can only store same data type elements

---

## Time Complexity

| Operation | Time Complexity |
|------------|----------------|
| Access | O(1) |
| Search | O(n) |
| Insertion | O(n) |
| Deletion | O(n) |

---

## Applications of Arrays

- Storing marks of students
- Matrix representation
- Searching algorithms
- Sorting algorithms
- Implementing stacks and queues

---

## Basic Interview Questions

### 1. What is an array?

An array is a collection of elements of the same data type stored in contiguous memory locations.

### 2. What is the index of the first element in an array?

The first element is stored at index `0`.

### 3. What is the main limitation of arrays?

Arrays have a fixed size.

### 4. Can arrays store different data types together?

No, arrays can only store elements of the same data type.

---

## Practice Problems

1. Find the largest element in an array
2. Reverse an array
3. Find the sum of all array elements
4. Search for an element in an array

---

## Conclusion

Arrays are one of the most fundamental data structures in C programming. They provide an efficient way to store and access multiple values and are widely used in programming and problem solving.