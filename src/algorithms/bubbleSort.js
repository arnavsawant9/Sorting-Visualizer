// src/algorithms/bubbleSort.js
export function getBubbleSortAnimations(array) {
  console.log("Bubble Sort Animations");
  const arr = array.slice();
  const animations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      animations.push({ type: "compare", indices: [j, j + 1] });
      if (arr[j] > arr[j + 1]) {
        animations.push({ type: "swap", indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      animations.push({ type: "reset", indices: [j, j + 1] });
    }
  }
  return animations;
}
