import React, { useState, useEffect } from "react";
import "./Sorting.css";
import { mergeSort } from "../Algorithms/MergeSort";
import { bubbleSort } from "../Algorithms/BubbleSort";
import { insertionSort } from "../Algorithms/InsertionSort";
import { selectionSort } from "../Algorithms/SelectionSort";

export default function Sorting() {
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [curSorting, setCurSorting] = useState("Merge Sort");
  const [curSpeed, setCurSpeed] = useState("1x");
  const [sortingCompOnes, setSortingCompOnes] = useState(false);

  //    RANDOM ARRAY GENERATING    //
  async function generateArray() {
    var maximum = 99;
    var minimum = 10;
    var l = [];
    for (let i = 0; i < 37; i++) {
      var randomnumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      l.push(randomnumber);
    }
    setArr([...l]);

    const bars = document.getElementsByClassName("arrayElement");
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = "white";
      bars[i].style.height = l[i];
      bars[i].style.color = "black";
    }
    setSortingCompOnes(false);

    return l;
  }

  useEffect(() => {
    generateArray();
  }, []);

  // const asyncSetTimeout = ({ timeout } = {}) => {
  //   return new Promise((resolve, reject) =>
  //     setTimeout(() => resolve(), timeout)
  //   );
  // };

  //////////////////////////////////////////////////////////////////////
  //          SELECTION SORT         //
  async function SelectionSort() {
    let ones = sortingCompOnes;
    let array;
    if (ones === true) {
      array = await generateArray();
    } else array = [...arr];
    setSorting(true);
    // let array = [...arr];
    let selectSpeed = 10;

    if (curSpeed === "1x") selectSpeed = 10;
    else if (curSpeed === "2x") selectSpeed = 5;
    else if (curSpeed === "0.5x") selectSpeed = 50;
    else if (curSpeed === "0.75x") selectSpeed = 25;
    else if (curSpeed === "0.25x") selectSpeed = 100;
    else selectSpeed = 10;

    let speed = selectSpeed;
    // console.log(selectSpeed, speed);
    const changeBars = selectionSort(array);
    let n = array.length;

    for (let i = 0; i < changeBars.length; i++) {
      if (changeBars[i].beforeSwap !== null) {
        const bars = document.getElementsByClassName("arrayElement");
        let bar = changeBars[i];
        setTimeout(() => {
          for (let j = bar.strtInd; j < n; j++) {
            bars[j].style.backgroundColor = "white";
            bars[j].style.color = "black";
          }
          bars[bar.minInd].style.backgroundColor = "green";
          bars[bar.minInd].style.color = "white";
          bars[bar.curInd].style.backgroundColor = "gray";
        }, selectSpeed);
        // await asyncSetTimeout(selectSpeed);
        selectSpeed += speed;
      } else {
        const bars = document.getElementsByClassName("arrayElement");
        let bar = changeBars[i];
        setTimeout(() => {
          bars[bar.minInd].style.height = `${
            (80 / 100) * bar.newArr[bar.minInd]
          }vh`;
          bars[bar.minInd].innerHTML = bar.newArr[bar.minInd];
          bars[bar.minInd].style.backgroundColor = "red";
          bars[bar.minInd].style.color = "white";

          bars[bar.startInd].style.height = `${
            (80 / 100) * bar.newArr[bar.startInd]
          }vh`;
          bars[bar.startInd].innerHTML = bar.newArr[bar.startInd];
          bars[bar.startInd].style.backgroundColor = "red";
          bars[bar.startInd].style.color = "white";
        }, selectSpeed);
        // await asyncSetTimeout(selectSpeed);

        selectSpeed += speed;
        setTimeout(() => {
          bars[bar.minInd].style.backgroundColor = "green";
          bars[bar.minInd].style.color = "white";
          bars[bar.startInd].style.backgroundColor = "green";
          bars[bar.startInd].style.color = "white";
        }, selectSpeed);
        // await asyncSetTimeout(selectSpeed);
        selectSpeed += speed;
      }
    }
    setTimeout(() => {
      document.getElementsByClassName("arrayElement")[
        n - 1
      ].style.backgroundColor = "green";
      document.getElementsByClassName("arrayElement")[n - 1].style.color =
        "white";
      setSorting(false);
      setSortingCompOnes(true);
      // await asyncSetTimeout(selectSpeed);
    }, selectSpeed);
  }

  ///////////////////////////////////////////////////////////////

  //         INSERTION SORT           //
  async function InsertionSort() {
    let ones = sortingCompOnes;
    let temp;
    if (ones === true) {
      temp = await generateArray();
    } else temp = [...arr];
    setSorting(true);
    // let temp = [...arr];
    let selectSpeed = 10;

    if (curSpeed === "1x") selectSpeed = 10;
    else if (curSpeed === "2x") selectSpeed = 5;
    else if (curSpeed === "0.5x") selectSpeed = 50;
    else if (curSpeed === "0.75x") selectSpeed = 25;
    else if (curSpeed === "0.25x") selectSpeed = 100;
    else selectSpeed = 10;

    let speed = selectSpeed;

    const changeBars = insertionSort(temp);

    for (let i = 0; i < changeBars.length; i++) {
      if (changeBars[i].swap !== null) {
        const bars = document.getElementsByClassName("arrayElement");
        let t = changeBars[i].newArr;

        setTimeout(() => {
          bars[changeBars[i].swap[0]].style.height = `${
            (80 / 100) * t[changeBars[i].swap[1]]
          }vh`;
          bars[changeBars[i].swap[0]].innerHTML = t[changeBars[i].swap[1]];
          bars[changeBars[i].swap[0]].style.backgroundColor = "red";
          bars[changeBars[i].swap[1]].style.backgroundColor = "red";
        }, selectSpeed);
        selectSpeed += speed;
        setTimeout(() => {
          bars[changeBars[i].swap[0]].style.backgroundColor = "green";
          bars[changeBars[i].swap[0]].style.color = "white";
          bars[changeBars[i].swap[1]].style.backgroundColor = "green";
          bars[changeBars[i].swap[1]].style.color = "white";
        }, selectSpeed);
        selectSpeed += speed;
      } else {
        const bars = document.getElementsByClassName("arrayElement");
        let bar = changeBars[i];
        let t = changeBars[i].newArr;

        setTimeout(() => {
          for (let j = 0; j <= bar.afrInd[1]; j++) {
            bars[j].style.height = `${(80 / 100) * t[j]}vh`;
            bars[j].style.backgroundColor = "green";
            bars[j].style.color = "white";
          }
        }, selectSpeed);
        selectSpeed += speed;
      }
    }
    setTimeout(() => {
      setSorting(false);

      setSortingCompOnes(true);
    }, selectSpeed);
  }

  //
  //
  /////////////////////////////////////////////////////////////////////////////
  //            BUBBLE SORT            //
  async function BubbleSort() {
    let ones = sortingCompOnes;
    let temp;
    if (ones === true) {
      temp = await generateArray();
    } else temp = [...arr];
    setSorting(true);
    // let temp = [...arr];
    let selectSpeed = 10;
    let cSpeed = curSpeed;
    if (cSpeed === "1x") selectSpeed = 10;
    else if (cSpeed === "2x") selectSpeed = 5;
    else if (cSpeed === "0.5x") selectSpeed = 50;
    else if (cSpeed === "0.75x") selectSpeed = 25;
    else if (cSpeed === "0.25x") selectSpeed = 100;
    else selectSpeed = 10;

    let speed = selectSpeed;

    const changBars = bubbleSort(temp);

    const l = temp.length;
    let k = 0;

    let sorted = [];
    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        const bars = document.getElementsByClassName("arrayElement");
        let bar = changBars[k++];
        if (bar.swapInd !== null) {
          let indOne = bar.swapInd[0];
          let indSec = bar.swapInd[1];
          let one = bars[indOne].style;
          let two = bars[indSec].style;
          let newArr = bar.newArr;

          setTimeout(() => {
            for (let p = 0; p < newArr.length; p++) {
              bars[p].style.height = `${(80 / 100) * newArr[p]}vh`;
              bars[p].innerHTML = newArr[p];
            }
            one.backgroundColor = "red";
            one.color = "white";
            two.backgroundColor = "red";
            two.color = "white";
          }, selectSpeed);
          selectSpeed += speed;
          setTimeout(() => {
            one.backgroundColor = "white";
            one.color = "black";
            two.backgroundColor = "white";
            two.color = "black";
          }, selectSpeed);
          selectSpeed += speed;
        }
      }

      const bar = changBars[k++];
      const bars = document.getElementsByClassName("arrayElement");

      setTimeout(() => {
        for (let q = l - bar.length + 1; q < l; q++) {
          bars[q].style.backgroundColor = "green";
          bars[q].style.color = "white";
        }
      }, selectSpeed);
      selectSpeed += speed;
    }
    sorted = changBars[k];
    setTimeout(() => {
      for (let p = 0; p < sorted.length; p++) {
        bars[p].style.height = `${(80 / 100) * sorted[p]}vh`;
        bars[p].innerHTML = temp[p];
      }
    }, selectSpeed);
    selectSpeed += speed;
    const bars = document.getElementsByClassName("arrayElement");
    setTimeout(() => {
      bars[0].style.backgroundColor = "green";
      bars[0].style.color = "white";
      setSorting(false);

      setSortingCompOnes(true);
    }, selectSpeed);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  //||            MERGE SORT             ||\\
  async function MergeSort() {
    let ones = sortingCompOnes;
    let temp;
    if (ones === true) {
      temp = await generateArray();
    } else temp = [...arr];
    setSorting(true);
    // let temp = [...arr];
    let selectSpeed = 10;
    let cSpeed = curSpeed;
    if (cSpeed === "1x") selectSpeed = 10;
    else if (cSpeed === "2x") selectSpeed = 5;
    else if (cSpeed === "0.5x") selectSpeed = 50;
    else if (cSpeed === "0.75x") selectSpeed = 25;
    else if (cSpeed === "0.25x") selectSpeed = 100;
    else selectSpeed = 10;

    let speed = selectSpeed;
    // if (temp.length === 0) generateArray();
    const changeBars = mergeSort(temp);
    let k = 0;

    for (let i = 0; i < changeBars.length; i++, k++) {
      const bars = document.getElementsByClassName("arrayElement");
      const colorChange = i % 3 !== 2;
      if (colorChange) {
        const [barOneIdx, barTwoIdx] = changeBars[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const curColor = i % 3 === 0 ? "red" : "green";

        setTimeout(() => {
          barOneStyle.backgroundColor = curColor;
          barOneStyle.color = "white";
          barTwoStyle.backgroundColor = curColor;
          barTwoStyle.color = "white";
        }, selectSpeed);
        selectSpeed += speed;
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = changeBars[i];
          const barOneStyle = bars[barOneIdx].style;
          barOneStyle.height = `${(80 / 100) * newHeight}vh`;
          bars[barOneIdx].innerHTML = newHeight;
        }, selectSpeed);
        selectSpeed += speed;
      }
    }

    setTimeout(() => {
      setSorting(false);

      setSortingCompOnes(true);
    }, selectSpeed);
  }

  function beforeSort() {
    // let temp = [...arr];
    // const bars = document.getElementsByClassName("arrayElement");
    // for (let i = 0; i < temp.length; i++) {
    //   bars[i].style.height = `${(80 / 100) * temp[i]}vh`;
    //   bars[i].style.backgroundColor = "white";
    //   bars[i].style.color = "black";
    //   bars.innerHTML = temp[i];
    // }

    if (curSorting === "Bubble Sort") {
      BubbleSort();
    } else if (curSorting === "Insertion Sort") {
      InsertionSort();
    } else if (curSorting === "Selection Sort") {
      SelectionSort();
    } else if (curSorting === "Merge Sort") {
      MergeSort();
    }
  }

  return (
    <div className="cont">
      <div className="headerCont">
        <h1 className="heading"> Sorting Visualizer </h1>
        {sorting === false ? (
          <div className="wrap">
            <button className="generateBtn" onClick={() => generateArray()}>
              Generate Array
            </button>
            <select
              className="algoList"
              value={curSorting}
              onChange={(e) => setCurSorting(e.target.value)}
            >
              <option>Bubble Sort</option>
              <option>Insertion Sort</option>
              <option>Selection Sort</option>
              <option>Merge Sort</option>
            </select>

            <select
              className="speedList"
              value={curSpeed}
              onChange={(e) => setCurSpeed(e.target.value)}
            >
              <option>2x</option>
              <option>1x</option>
              <option>0.75x</option>
              <option>0.5x</option>
              <option>0.25x</option>
            </select>
            <button className="sortBtn" onClick={beforeSort}>
              Sort
            </button>
          </div>
        ) : (
          <div className="sorting">
            Sorting elements using {curSorting} at {curSpeed} speed
          </div>
        )}
      </div>
      <div className="arrayContainer">
        {arr.map((ele, id) => (
          <div
            className="arrayElement"
            key={id}
            style={{
              height: `${(80 / 100) * ele}vh`,
              width: `1vw`,
              margin: `0 0.6vw 0`,
            }}
          >
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
