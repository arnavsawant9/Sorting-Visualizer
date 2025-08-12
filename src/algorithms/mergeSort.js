// // src/algorithms/mergeSort.js
// export function getMergeSortAnimations(originalArray) {
//   console.log("Merge Sort Animations");
//   const animations = [];
//   if (originalArray.length <= 1) return animations;

//   // Make deep copy so we don’t mutate original
//   const array = originalArray.slice();
//   const auxiliaryArray = array.slice();

//   mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  
//   return animations;
// }


// function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
  
//   // Recursively sort both halves
//   mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
//   mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
  
//   // Merge the sorted halves
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
//   // Copy the range into auxiliary array
//   for (let i = startIdx; i <= endIdx; i++) {
//     auxiliaryArray[i] = mainArray[i];
//   }
  
//   let k = startIdx; // Index for mainArray
//   let i = startIdx; // Index for left half
//   let j = middleIdx + 1; // Index for right half
  
//   while (i <= middleIdx && j <= endIdx) {
//     // Highlight the elements being compared
//     animations.push({ type: "compare", indices: [i, j] });
    
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       // Take from left half
//       animations.push({ type: "overwrite", index: k, value: auxiliaryArray[i] });
//       mainArray[k] = auxiliaryArray[i];
//       i++;
//     } else {
//       // Take from right half
//       animations.push({ type: "overwrite", index: k, value: auxiliaryArray[j] });
//       mainArray[k] = auxiliaryArray[j];
//       j++;
//     }
//     k++;
//   }
  
//   // Copy remaining elements from left half
//   while (i <= middleIdx) {
//     animations.push({ type: "compare", indices: [i, i] });
//     animations.push({ type: "overwrite", index: k, value: auxiliaryArray[i] });
//     mainArray[k] = auxiliaryArray[i];
//     i++;
//     k++;
//   }
  
//   // Copy remaining elements from right half
//   while (j <= endIdx) {
//     animations.push({ type: "compare", indices: [j, j] });
//     animations.push({ type: "overwrite", index: k, value: auxiliaryArray[j] });
//     mainArray[k] = auxiliaryArray[j];
//     j++;
//     k++;
//   }
  
//   // Add reset animation to clear highlights
//   animations.push({ type: "reset" });
// }












// src/algorithms/mergeSort.js
// src/algorithms/mergeSort.js
export function getMergeSortAnimations(originalArray) {
  console.log("Merge Sort Animations");
  const animations = [];
  if (originalArray.length <= 1) return animations;

  // Make deep copy so we don't changee the original 1.
  const array = originalArray.slice();
  const auxiliaryArray = array.slice();

  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  
  // Recursively sort both halves
  mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
  mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
  
  // Merge the sorted halves
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  // Copy the range into auxiliary array
  for (let i = startIdx; i <= endIdx; i++) {
    auxiliaryArray[i] = mainArray[i];
  }
  
  let k = startIdx; // Index for mainArray
  let i = startIdx; // Index for left half
  let j = middleIdx + 1; // Index for right half
  
  while (i <= middleIdx && j <= endIdx) {
    // Highlight the elements being compared
    animations.push({ type: "compare", indices: [i, j] });
    
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Take from left half
      animations.push({ type: "overwrite", index: k, value: auxiliaryArray[i] });
      mainArray[k] = auxiliaryArray[i];
      i++;
    } else {
      // Take from right half
      animations.push({ type: "overwrite", index: k, value: auxiliaryArray[j] });
      mainArray[k] = auxiliaryArray[j];
      j++;
    }
    k++;
  }
  
  // Copy remaining elements from left half
  while (i <= middleIdx) {
    animations.push({ type: "compare", indices: [i, i] });
    animations.push({ type: "overwrite", index: k, value: auxiliaryArray[i] });
    mainArray[k] = auxiliaryArray[i];
    i++;
    k++;
  }
  
  // Copy remaining elements from right half
  while (j <= endIdx) {
    animations.push({ type: "compare", indices: [j, j] });
    animations.push({ type: "overwrite", index: k, value: auxiliaryArray[j] });
    mainArray[k] = auxiliaryArray[j];
    j++;
    k++;
  }
  
  // Add reset animation to clear highlights
  animations.push({ type: "reset" });
}