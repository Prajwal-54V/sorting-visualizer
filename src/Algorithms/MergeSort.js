function merge(arr, start, mid, end, tempArr, changeBars) {
  let k = start,
    i = start,
    j = mid + 1;

  while (i <= mid && j <= end) {
    changeBars.push([i, j]);
    changeBars.push([i, j]);

    if (tempArr[i] <= tempArr[j]) {
      changeBars.push([k, tempArr[i]]);
      arr[k++] = tempArr[i++];
    } else {
      changeBars.push([k, tempArr[j]]);
      arr[k++] = tempArr[j++];
    }
  }

  while (i <= mid) {
    changeBars.push([i, i]);
    changeBars.push([i, i]);
    changeBars.push([k, tempArr[i]]);
    arr[k++] = tempArr[i++];
  }

  while (j <= end) {
    changeBars.push([j, j]);
    changeBars.push([j, j]);
    changeBars.push([k, tempArr[j]]);
    arr[k++] = tempArr[j++];
  }
}

function mergeSortUtil(arr, start, end, tempArr, changeBars) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortUtil(tempArr, start, mid, arr, changeBars);
  mergeSortUtil(tempArr, mid + 1, end, arr, changeBars);
  merge(arr, start, mid, end, tempArr, changeBars);
}

export const mergeSort = (arr) => {
  const changeBars = [];
  if (arr.length <= 1) return arr;
  const tempArr = arr.slice();
  mergeSortUtil(arr, 0, arr.length - 1, tempArr, changeBars);
  return changeBars;
};
