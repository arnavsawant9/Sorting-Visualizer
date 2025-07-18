// src/algorithms/algorithmInfo.js
export const ALGORITHM_INFO = {
  bubble: {
    name: "Bubble Sort",
    description: [
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.",
      "This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.",
      "After the first pass, the maximum element moves to the end (its correct position)."
    ],
    time: "O(n²)",
    space: "O(1)",
  },

  selection: {
    name: "Selection Sort",
    description: [
      "Selection Sort divides the input into a sorted and unsorted region and repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region.",
      "It has a time complexity of O(n²) because of the two nested loops, making it inefficient on large lists.",
      "However, Selection Sort is in-place and does not require extra space."
    ],
    time: "O(n²)",
    space: "O(1)",
  },

  insertion: {
    name: "Insertion Sort",
    description: [
      "Insertion Sort builds the final sorted array one item at a time by picking elements from the input and inserting them into the correct position in the already sorted part.",
      "It works well for small datasets and is adaptive, meaning it performs better for partially sorted arrays.",
      "Best case is O(n) when the array is already sorted."
    ],
    time: "O(n²)",
    space: "O(1)",
  },

  merge: {
    name: "Merge Sort",
    description: [
      "Merge Sort is a divide and conquer algorithm that splits the input array into two halves, recursively sorts each half, and then merges the sorted halves back together.",
      "It guarantees O(n log n) performance in all cases, making it suitable for large datasets.",
      "Requires additional O(n) space for merging."
    ],
    time: "O(n log n)",
    space: "O(n)",
  },

  quick: {
    name: "Quick Sort",
    description: [
      "Quick Sort picks a pivot element and partitions the array around the pivot, recursively applying the same strategy to subarrays.",
      "On average, it runs in O(n log n), but in the worst case (already sorted or bad pivot selection), it can degrade to O(n²).",
      "It is an in-place sorting algorithm, making it memory efficient."
    ],
    time: "O(n log n)",
    space: "O(log n)",
  },

  heap: {
    name: "Heap Sort",
    description: [
      "Heap Sort converts the array into a binary heap and then repeatedly extracts the maximum (or minimum) element and rebuilds the heap.",
      "Its time complexity is O(n log n) in all cases, and it does not require extra space.",
      "Heap Sort is not a stable algorithm."
    ],
    time: "O(n log n)",
    space: "O(1)",
  },

  shell: {
    name: "Shell Sort",
    description: [
      "Shell Sort is an optimization of Insertion Sort that allows the exchange of far apart elements to reduce the number of shifts required.",
      "It uses a gap sequence to compare and swap elements and gradually reduces the gap until it becomes 1 (standard insertion sort).",
      "Its time complexity depends on the gap sequence but is generally better than O(n²)."
    ],
    time: "O(n log² n) (approx)",
    space: "O(1)",
  },

  radix: {
    name: "Radix Sort",
    description: [
      "Radix Sort is a non-comparative sorting algorithm that sorts numbers digit by digit, starting from the least significant digit to the most significant.",
      "It uses a stable sorting algorithm (like Counting Sort) as a subroutine.",
      "Radix Sort runs in O(nk), where n is the number of elements and k is the number of digits in the largest number."
    ],
    time: "O(nk)",
    space: "O(n + k)",
  }
};
