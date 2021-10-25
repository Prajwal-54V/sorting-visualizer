function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function sort(arr, changBars) {
  let n = arr.length;
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;
      changBars.push({ beforeSwap: 1, minInd: min_idx, curInd: j, strtInd: i });
    }

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
    let temp = [...arr];
    changBars.push({
      beforeSwap: null,
      newArr: temp,
      startInd: i,
      minInd: min_idx,
    });
  }
}

export const selectionSort = (arr) => {
  const changeBars = [];
  if (arr.length <= 1) return changeBars;

  sort(arr, changeBars);

  return changeBars;
};
