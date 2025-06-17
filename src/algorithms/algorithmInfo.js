// src/algorithms/algorithmInfo.js
export const ALGORITHM_INFO = {
  bubble: {
    name: "Bubble Sort",
    description: [
    "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.",
    "This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high. We sort the array using multiple passes...",
    "After the first pass, the maximum element goes to end (its correct position)..."
    ],

    time: "O(n²)",
    space: "O(1)",
  },
  merge: {
    name: "Merge Sort",
    description: [
    "Merge Sort is a divide and conquer algorithm that splits the input array into two halves, recursively sorts each half, and then merges the sorted halves back together.",
    "It works by continuously dividing the array into subarrays until each subarray has one element, and then merges them in a way that results in a sorted array.",
    "Merge Sort has a stable sorting mechanism and guarantees O(n log n) time complexity in all cases, making it suitable for large datasets.",
    "However, it requires additional space for temporary arrays during merging, which leads to a space complexity of O(n)."
    ],
    time: "O(n log n)",
    space: "O(n)",
    code: `function mergeSort(arr) { /* ... */ }`
  },
  quick: {
    name: "Quick Sort",
    description: [
    "Quick Sort is a highly efficient divide and conquer algorithm that picks a pivot element and partitions the array around the pivot, placing smaller elements before it and larger ones after.",
    "This process is then recursively applied to the subarrays on both sides of the pivot until the array is fully sorted.",
    "The choice of pivot and partitioning strategy significantly affect performance. On average, Quick Sort performs well with a time complexity of O(n log n).",
    "In the worst case (e.g., already sorted or all elements equal), the time complexity can degrade to O(n²), but this is rare with good pivot selection (like using randomized or median-of-three).",
    "It is an in-place sorting algorithm and requires only O(log n) space for the recursion stack."
    ],
    time: "O(n log n)",
    space: "O(log n)",
    code: `function quickSort(arr) { /* ... */ }`
  },
  heap: {
    name: "Heap Sort",
    description: "Heap Sort builds a heap and repeatedly extracts the max...",
    time: "O(n log n)",
    space: "O(1)",
    code: `function heapSort(arr) { /* ... */ }`
  }
};
