function sort(inputArr, changeBars) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];

    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      let t = [...inputArr];
      changeBars.push({
        swap: [j + 1, j],
        newArr: t,
      });
      j--;
    }

    inputArr[j + 1] = current;
    let t = [...inputArr];
    changeBars.push({
      swap: null,
      afrInd: [0, j + 1, current],
      newArr: t,
    });
  }
}

export const insertionSort = (arr) => {
  const changeBars = [];
  if (arr.length <= 1) return changeBars;

  sort(arr, changeBars);

  return changeBars;
};
