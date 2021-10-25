// export function getQuickSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
// }

// function quickSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations
// ) {
//   var l = startIdx;
//   var r = endIdx - 1;
//   var size = endIdx - startIdx;

//   if (size > 1) {
//     var pivot = mainArray[Math.floor((Math.random() % size) + l)];
//     while (l < r) {
//       while (mainArray[r] > pivot && r > l) {
//         r--;
//       }
//       while (mainArray[l] < pivot && l <= r) {
//         l++;
//       }
//       if (l < r) {
//         swap(mainArray[l], mainArray[r]);
//         l++;
//       }
//       if (l < r) {
//         swap(mainArray[l], mainArray[r]);
//         l++;
//       }
//     }
//     quickSortHelper(mainArray, startIdx, l);
//     quickSortHelper(mainArray, r, right);
//   }
//if(startIdx === endIdx) return; // If we have same index, that means only one array, return the function
//const middleIdx = Math.floor((startIdx + endIdx) / 2); // Our pivot

//quickSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//quickSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
// }
