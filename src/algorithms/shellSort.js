// src/algorithms/shellSort.js
export function getShellSortAnimations(array) {
    console.log("Shell Sort Animations");
  const animations = [];
  const arr = array.slice();
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        animations.push({ type: "compare", indices: [j, j - gap] });
        animations.push({ type: "swap", indices: [j, j - gap] });
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }

  return animations;
}
