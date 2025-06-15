// src/algorithms/quickSort.js
export function getQuickSortAnimations(array) {
    console.log("Quick Sort Animations");
  const animations = [];
  if (array.length <= 1) return animations;

  const auxArray = array.slice();
  quickSortHelper(auxArray, 0, auxArray.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;

  const pivotIdx = partition(array, startIdx, endIdx, animations);
  quickSortHelper(array, startIdx, pivotIdx - 1, animations);
  quickSortHelper(array, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  const pivotValue = array[endIdx];
  let i = startIdx - 1;

  for (let j = startIdx; j < endIdx; j++) {
    animations.push({ type: "compare", indices: [j, endIdx] });

    if (array[j] <= pivotValue) {
      i++;
      animations.push({ type: "swap", indices: [i, j], values: [array[j], array[i]] });
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  animations.push({ type: "swap", indices: [i + 1, endIdx], values: [array[endIdx], array[i + 1]] });
  [array[i + 1], array[endIdx]] = [array[endIdx], array[i + 1]];

  return i + 1;
}
