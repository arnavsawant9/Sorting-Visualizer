export function getInsertionSortAnimations(array) {
  console.log("Insertion Sort Animations");
  const animations = [];
  const arr = array.slice(); // arr is what gets sorted

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Highlight the current element being inserted
    animations.push({ type: "compare", indices: [i] });

    while (j >= 0 && arr[j] > key) {
      // Compare current element with the key
      animations.push({ type: "compare", indices: [j, i] });
      
      // Shift element to the right
      animations.push({ type: "overwrite", index: j + 1, value: arr[j] });
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key at its correct position
    animations.push({ type: "overwrite", index: j + 1, value: key });
    arr[j + 1] = key;
    
    // Reset highlighting
    animations.push({ type: "reset" });
  }

  // Return just the animations array
  return animations;
}
