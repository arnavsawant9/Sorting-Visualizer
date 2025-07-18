// src/algorithms/heapSort.js
export function getHeapSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  const n = arr.length;

  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      animations.push({ type: "compare", indices: [left, largest] });
      if (arr[left] > arr[largest]) {
        largest = left;
      }
      animations.push({ type: "reset", indices: [left, i] });
    }

    if (right < n) {
      animations.push({ type: "compare", indices: [right, largest] });
      if (arr[right] > arr[largest]) {
        largest = right;
      }
      animations.push({ type: "reset", indices: [right, i] });
    }

    if (largest !== i) {
      animations.push({ type: "swap", indices: [i, largest] });
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  };

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    animations.push({ type: "swap", indices: [0, i] });
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }

  return animations;
}
