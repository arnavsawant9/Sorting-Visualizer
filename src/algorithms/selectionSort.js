// src/algorithms/selectionSort.js
export function getSelectionSortAnimations(array) {
  const animations = [];
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: "compare", indices: [minIndex, j] });
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      animations.push({ type: "reset", indices: [minIndex, j] });
    }
    if (minIndex !== i) {
      animations.push({ type: "swap", indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return animations;
}
