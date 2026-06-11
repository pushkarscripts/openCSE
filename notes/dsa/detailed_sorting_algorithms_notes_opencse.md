# Sorting Algorithms – Detailed Notes

# 1. Introduction to Sorting

Sorting is the process of arranging data in a specific order, usually:
- Ascending Order
- Descending Order

Sorting is one of the most important concepts in Data Structures and Algorithms because it improves:
- searching efficiency
- data organization
- optimization problems
- database indexing
- competitive programming performance

---

# 2. Classification of Sorting Algorithms

## Based on Memory Usage

### In-Place Sorting
Uses constant extra memory.

Examples:
- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Heap Sort

### Out-Place Sorting
Requires extra memory.

Examples:
- Merge Sort
- Counting Sort

---

## Based on Stability

### Stable Sorting
Maintains relative order of equal elements.

Examples:
- Bubble Sort
- Insertion Sort
- Merge Sort
- Counting Sort

### Unstable Sorting
Does not maintain order of equal elements.

Examples:
- Quick Sort
- Heap Sort
- Selection Sort

---

# 3. Bubble Sort

## Definition
Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.

## Working
Largest element moves to the end after each pass.

## Algorithm
1. Compare adjacent elements
2. Swap if left element > right element
3. Repeat for all elements
4. Continue until array becomes sorted

## Example
Array:

```text
5 1 4 2 8
```

Pass 1:

```text
1 4 2 5 8
```

Pass 2:

```text
1 2 4 5 8
```

## Java Code

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
```

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n) |
| Average | O(n²) |
| Worst | O(n²) |

## Space Complexity

```text
O(1)
```

## Advantages
- Easy to understand
- Stable sorting
- In-place sorting

## Disadvantages
- Very slow for large datasets
- High number of swaps

---

# 4. Selection Sort

## Definition
Selection Sort repeatedly selects the minimum element and places it at the correct position.

## Working
1. Find minimum element
2. Swap with first unsorted position
3. Repeat for remaining array

## Example

```text
64 25 12 22 11
```

After sorting:

```text
11 12 22 25 64
```

## Java Code

```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}
```

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n²) |
| Average | O(n²) |
| Worst | O(n²) |

## Space Complexity

```text
O(1)
```

## Advantages
- Performs fewer swaps
- Easy implementation

## Disadvantages
- Inefficient for large arrays
- Unstable sorting

---

# 5. Insertion Sort

## Definition
Insertion Sort inserts each element into its proper position.

## Working
Works similar to arranging playing cards.

## Example

```text
5 2 4 6 1 3
```

Sorted Array:

```text
1 2 3 4 5 6
```

## Java Code

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }
}
```

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n) |
| Average | O(n²) |
| Worst | O(n²) |

## Advantages
- Efficient for small arrays
- Stable sorting
- Adaptive algorithm

## Disadvantages
- Slow for large datasets

---

# 6. Merge Sort

## Definition
Merge Sort uses Divide and Conquer technique.

## Working
1. Divide array into halves
2. Sort both halves recursively
3. Merge sorted halves

## Divide and Conquer

genui{"math_block_widget_always_prefetch_v2":{"content":"T(n)=2T(n/2)+O(n)"}}

## Java Code

```java
public class MergeSort {

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];

        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1)
            arr[k++] = L[i++];

        while (j < n2)
            arr[k++] = R[j++];
    }
}
```

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

## Space Complexity

```text
O(n)
```

## Advantages
- Very efficient
- Stable sorting
- Good for linked lists

## Disadvantages
- Requires extra memory

---

# 7. Quick Sort

## Definition
Quick Sort selects a pivot and partitions array around it.

## Working
1. Select pivot
2. Place pivot correctly
3. Partition smaller/larger elements
4. Recursively sort partitions

## Partition Formula

genui{"math_block_widget_always_prefetch_v2":{"content":"T(n)=T(k)+T(n-k-1)+O(n)"}}

## Java Code

```java
public class QuickSort {

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
}
```

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n²) |

## Space Complexity

```text
O(log n)
```

## Advantages
- Fast in practice
- Cache efficient
- In-place sorting

## Disadvantages
- Worst case O(n²)
- Unstable sorting

---

# 8. Heap Sort

## Definition
Heap Sort uses Binary Heap data structure.

## Working
1. Build max heap
2. Swap root with last element
3. Heapify remaining heap

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

## Space Complexity

```text
O(1)
```

## Advantages
- No extra memory
- Guaranteed O(n log n)

## Disadvantages
- Not stable
- Slower than Quick Sort in practice

---

# 9. Counting Sort

## Definition
Non-comparison sorting algorithm used for integers.

## Working
Counts frequency of elements.

## Complexity

| Case | Complexity |
|---|---|
| Time | O(n + k) |
| Space | O(k) |

Where:

```text
k = range of input
```

## Advantages
- Extremely fast for small ranges

## Disadvantages
- Not suitable for large ranges
- Only works for integers

---

# 10. Radix Sort

## Definition
Sorts numbers digit by digit.

## Complexity

| Case | Complexity |
|---|---|
| Time | O(d × (n + k)) |
| Space | O(n + k) |

Where:
- d = digits
- k = range

## Advantages
- Fast for fixed-length integers

## Disadvantages
- Extra memory required

---

# 11. Bucket Sort

## Definition
Distributes elements into buckets and sorts them individually.

## Complexity

| Case | Complexity |
|---|---|
| Best | O(n + k) |
| Worst | O(n²) |

## Advantages
- Efficient for uniformly distributed data

## Disadvantages
- Depends on distribution quality

---

# 12. Comparison Table

| Algorithm | Best | Average | Worst | Stable | In-Place |
|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | No | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | Yes | No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | No | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | No | Yes |
| Counting Sort | O(n+k) | O(n+k) | O(n+k) | Yes | No |
| Radix Sort | O(d(n+k)) | O(d(n+k)) | O(d(n+k)) | Yes | No |

---

# 13. Important Interview Questions

## Easy
- Bubble Sort implementation
- Selection Sort implementation
- Insertion Sort implementation

## Medium
- Merge two sorted arrays
- Sort Colors
- Kth Largest Element
- Merge Intervals

## Hard
- Inversion Count
- External Sorting
- Median of Two Sorted Arrays

---

# 14. Sorting Algorithm Selection Guide

| Situation | Best Choice |
|---|---|
| Small dataset | Insertion Sort |
| Stable sorting needed | Merge Sort |
| Fast practical sorting | Quick Sort |
| Memory constrained | Heap Sort |
| Integer range small | Counting Sort |
| Linked List sorting | Merge Sort |

---

# 15. Applications of Sorting

- Database indexing
- Searching optimization
- Leaderboards
- E-commerce product listings
- File systems
- Data analytics
- Scheduling algorithms
- Machine learning preprocessing

---

# 16. Quick Revision Notes

## Stable Algorithms
- Bubble Sort
- Insertion Sort
- Merge Sort
- Counting Sort

## Unstable Algorithms
- Quick Sort
- Heap Sort
- Selection Sort

## Divide and Conquer Algorithms
- Merge Sort
- Quick Sort

## Non-Comparison Sorting
- Counting Sort
- Radix Sort
- Bucket Sort

---

# 17. Conclusion

Sorting algorithms are one of the core foundations of DSA. Understanding their:
- working principles
- complexity analysis
- use cases
- advantages/disadvantages

is essential for coding interviews, competitive programming, and software development.

