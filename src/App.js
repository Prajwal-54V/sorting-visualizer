import React from "react";
import Sorting from "./Components/Sorting";

export default function App() {
  return <Sorting></Sorting>;
}

// import React, { useState } from "react";
// function App() {
//   const [arr, setArr] = useState([]);
//   const [arrswap, setArrswap] = useState([]);
//   const [completed, setCompleted] = useState([]);
//   const [sorting, setSorting] = useState(false);
//   let speed = 250;
//   var itmd = [];
//   //    GENERATING RANDOM ARRAY

//   function generateArray() {
//     var maximum = 99;
//     var minimum = 10;
//     var l = [];
//     for (let i = 0; i < 25; i++) {
//       var randomnumber =
//         Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//       l.push(randomnumber);
//     }
//     setArr([...l]);
//     setArrswap([]);
//     setCompleted([]);
//   }

//   //          MERGE SORT              //

//   function mergeArray(start, end) {
//     let mid = parseInt((start + end) >> 1);
//     let start1 = start,
//       start2 = mid + 1;
//     let end1 = mid,
//       end2 = end;

//     // Initial index of merged subarray
//     let index = start;

//     while (start1 <= end1 && start2 <= end2) {
//       if (arr[start1] <= arr[start2]) {
//         itmd[index] = arr[start1];
//         index = index + 1;
//         start1 = start1 + 1;
//       } else if (arr[start1] > arr[start2]) {
//         itmd[index] = arr[start2];
//         index = index + 1;
//         start2 = start2 + 1;
//       }
//     }
//     while (start1 <= end1) {
//       itmd[index] = arr[start1];
//       index = index + 1;
//       start1 = start1 + 1;
//     }

//     while (start2 <= end2) {
//       itmd[index] = arr[start2];
//       index = index + 1;
//       start2 = start2 + 1;
//     }

//     index = start;
//     while (index <= end) {
//       arr[index] = itmd[index];
//       index++;
//     }
//   }

//   function timeout(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   // Merge Sorting
//   const mergeSort = async (start, end) => {
//     if (start < end) {
//       let mid = parseInt((start + end) >> 1);
//       await mergeSort(start, mid);
//       await mergeSort(mid + 1, end);
//       await mergeArray(start, end);
//       await setArr(arr);

//       // Waiting time is 800ms
//       await timeout(500);
//     }
//   };

//   const performer = async () => {
//     let l = arr.length;
//     if (l === 0) generateArray();
//     for (var i = 0; i < l; i++) {
//       itmd.push(0);
//     }

//     await mergeSort(0, l - 1);
//   };

//   //       BUBBLE SORT            //
//   function BubbleSort() {
//     let l = arr.length;
//     if (l === 0) generateArray();
//     let count = 250;

//     setSorting(true);
//     let temp = [...arr];
//     for (let i = 0; i < l - 1; i++) {
//       for (let j = 0; j < l - i - 1; j++) {
//         if (temp[j] > temp[j + 1]) {
//           let t = temp[j + 1];
//           temp[j + 1] = temp[j];
//           temp[j] = t;
//           let snapShot = [...temp];
//           setTimeout(() => {
//             setArrswap([j, j + 1]);
//             setArr([...snapShot]);
//           }, count);
//           count += 250;
//         }
//       }

//       setTimeout(() => {
//         let com = [];
//         for (let k = l; k >= l - i - 1; k--) {
//           com.push(k);
//         }
//         setCompleted([...com]);
//       }, count);
//     }
//     count += 250;
//     //after sorting
//     setTimeout(() => {
//       setCompleted([]);
//       setArrswap([]);
//       setSorting(false);
//     }, count);
//   }

//   return (
//     <div>
//       <center>
//         <h1 className="header">Sorting Visualizer</h1>

//         {sorting === false ? (
//           <>
//             <button className="header" onClick={() => generateArray()}>
//               GenerateArray()
//             </button>

//             <button className="header" onClick={() => performer()}>
//               Sort()
//             </button>
//           </>
//         ) : (
//           <>
//             <button className="header" disabled>
//               Sorting
//             </button>
//           </>
//         )}
//       </center>
//       <hr />

//       <div className="arrayContainer">
//         <center>
//           {arr.map((ele, id) => (
//             <div
//               className="arrayElement"
//               key={id}
//               style={{
//                 height: `${(80 / 100) * ele}vh`,
//                 width: `2 vw`,
//                 margin: `0 0.6vw`,
//                 backgroundColor: arrswap.includes(id)
//                   ? "red"
//                   : completed.includes(id)
//                   ? "green"
//                   : "white",
//               }}
//             >
//               {ele}
//             </div>
//           ))}
//         </center>
//       </div>
//     </div>
//   );
// }

// export default App;
