function Sort(temp, changeBars) {
  let l = temp.length;

  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      const b = [];
      let newA = [...temp];
      let swapped = 0;
      b.push(j);
      b.push(j + 1);
      if (temp[j] > temp[j + 1]) {
        let t = temp[j + 1];
        temp[j + 1] = temp[j];
        temp[j] = t;
        swapped = 1;
      }
      if (swapped === 1) {
        changeBars.push({
          swapInd: b,
          newArr: newA,
        });
      } else {
        changeBars.push({
          swapInd: null,
          newArr: null,
        });
      }
    }

    let com = [];
    for (let k = l; k >= l - i - 1; k--) {
      com.push(k);
    }
    changeBars.push(com);
  }
  changeBars.push(temp);
}

export const bubbleSort = (arr) => {
  const changeBars = [];
  if (arr.length <= 1) return changeBars;

  Sort(arr, changeBars);

  return changeBars;
};
