// import { useEffect, useState } from "react";
// import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
// import { getMergeSortAnimations } from "../algorithms/mergeSort";
// import { getQuickSortAnimations } from "../algorithms/quickSort";
// import { getHeapSortAnimations } from "../algorithms/heapSort";
// import { getInsertionSortAnimations } from "../algorithms/insertionSort";
// import { getSelectionSortAnimations } from "../algorithms/selectionSort"; 
// import { getShellSortAnimations } from "../algorithms/shellSort";
// import Sidebar from "./Sidebar";
// import BubbleSort from "./BubbleSort";
// import MergeSort from "./MergeSort";
// import QuickSort from "./QuickSort";
// import HeapSort from "./HeapSort";
// import InsertionSort from "./InsertionSort";
// import SelectionSort from "./SelectionSort"; 
// import ShellSort from "./ShellSort";

// export default function SortingVisualizer() {
//   const [array, setArray] = useState([]);
//   const [arraySize, setArraySize] = useState(40);
//   const [speed, setSpeed] = useState(50);
//   const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
//   const [isSorting, setIsSorting] = useState(false);
//   const [activeIndices, setActiveIndices] = useState([]);
//   const [sortedIndices, setSortedIndices] = useState([]);

//   // Generate random array when arraySize changes
//   useEffect(() => {
//     generateRandomArray(arraySize);
//     // eslint-disable-next-line
//   }, [arraySize]);

//   // Generate a random array
//   const generateRandomArray = (size = arraySize) => {
//     const arr = [];
//     for (let i = 0; i < size; i++) {
//       arr.push(Math.floor(Math.random() * 200) + 50);
//     }
//     setArray(arr);
//     setActiveIndices([]);
//     setSortedIndices([]);
//   };

//   // Handlers for controls
//   const handleArraySizeChange = (e) => setArraySize(Number(e.target.value));
//   const handleSpeedChange = (e) => setSpeed(Number(e.target.value));

//   // Main sort function
//   const handleSort = async () => {
//     setIsSorting(true);
//     setSortedIndices([]);
//     let animations;
//     if (selectedAlgorithm === "bubble") {
//       animations = getBubbleSortAnimations(array);
//     } else if (selectedAlgorithm === "merge") {
//       animations = getMergeSortAnimations(array);
//     } else if (selectedAlgorithm === "quick") {
//       animations = getQuickSortAnimations(array);
//     } else if (selectedAlgorithm === "heap") {
//       animations = getHeapSortAnimations(array);
//     } else if (selectedAlgorithm === "insertion") {
//       animations = getInsertionSortAnimations(array);
//     } else if (selectedAlgorithm === "selection") {
//       animations = getSelectionSortAnimations(array);
//     } else if (selectedAlgorithm === "shell") {
//       animations = getShellSortAnimations(array);
//     }

//     let arr = array.slice();
//     for (let i = 0; i < animations.length; i++) {
//       const action = animations[i];
//       if (action.type === "compare") {
//         setActiveIndices(action.indices);
//       }
//       if (action.type === "swap") {
//         arr = arr.slice();
//         const [a, b] = action.indices;
//         [arr[a], arr[b]] = [arr[b], arr[a]];
//         setArray(arr);
//         setActiveIndices(action.indices);
//       }
//       if (action.type === "overwrite") {
//         arr = arr.slice();
//         arr[action.index] = action.value;
//         setArray(arr);
//         setActiveIndices([action.index]);
//       }
//       if (action.type === "reset") {
//         setActiveIndices([]);
//       }
//       await new Promise((resolve) => setTimeout(resolve, 101 - speed));
//     }
//     setActiveIndices([]);
//     setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
//     setIsSorting(false);
//   };

//   // Get bar color based on state
//   const getBarColor = (idx) => {
//     if (sortedIndices.includes(idx)) return "bg-green-500";
//     if (activeIndices.includes(idx)) return "bg-yellow-400";
//     return "bg-gradient-to-t from-blue-400 to-blue-600";
//   };

//   // Render the info/code component for the selected algorithm
//   const renderAlgorithmInfo = () => {
//     switch (selectedAlgorithm) {
//       case "bubble":
//         return <BubbleSort />;
//       case "merge":
//         return <MergeSort />;
//       case "quick":
//         return <QuickSort />;
//       case "heap":
//         return <HeapSort />;
//       case "insertion":
//         return <InsertionSort />;
//       case "selection":
//         return <SelectionSort />;
//       case "shell":
//         return <ShellSort/>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Sidebar - Fixed height */}
//       <Sidebar
//         selected={selectedAlgorithm}
//         onSelect={setSelectedAlgorithm}
//         disabled={isSorting}
//       />

//       {/* Main Area - Scrollable */}
//       <main className="flex-1 flex flex-col overflow-y-auto">
//         <div className="flex-1 flex flex-col items-center justify-start py-8 px-4">

//           {/* from here the main part of the dynamic isSorting part is starting - like will show how many elements are being sorted */}
//           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-6 max-w-4xl w-full">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-2xl font-bold">{selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort</h1>
//                 <p className="text-blue-100 mt-1">Watch the algorithm sort {array.length} elements in real-time</p>
//               </div>
//               <div className="text-right">
//                 <div className="text-3xl">{isSorting ? "🔄" : "⚡"}</div>
//                 <div className="text-sm text-blue-200">Speed: {speed}%</div>
//               </div>
//             </div>
//             {/* Progress bar */}
//             <div className="mt-4">
//               <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
//                 <div 
//                   className="bg-white h-2 rounded-full transition-all duration-300"
//                   style={{ width: `${array.length > 0 ? (sortedIndices.length / array.length) * 100 : 0}%` }}
//                 ></div>
//               </div>
//               <div className="text-sm text-blue-200 mt-1">
//                 {sortedIndices.length} of {array.length} elements sorted
//               </div>
//             </div>
//           </div>

//           {/* Controls */}
//           <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
//             {/* Array Size Slider */}
//             <div className="flex flex-col items-center">
//               <label className="mb-1 font-medium text-gray-700">
//                 Array Size: <span className="text-indigo-600">{arraySize}</span>
//               </label>
//               <input
//                 type="range"
//                 min="10"
//                 max="100"
//                 value={arraySize}
//                 onChange={handleArraySizeChange}
//                 className="w-40 accent-indigo-500"
//                 disabled={isSorting}
//               />
//             </div>

//             {/* Speed Slider */}
//             <div className="flex flex-col items-center">
//               <label className="mb-1 font-medium text-gray-700">
//                 Speed: <span className="text-indigo-600">{speed}</span>
//               </label>
//               <input
//                 type="range"
//                 min="1"
//                 max="100"
//                 value={speed}
//                 onChange={handleSpeedChange}
//                 className="w-40 accent-purple-500"
//                 disabled={isSorting}
//               />
//             </div>

//             {/* Generate New Array Button */}
//             <button
//               onClick={() => generateRandomArray(arraySize)}
//               className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300"
//               disabled={isSorting}
//             >
//               Generate New Array
//             </button>

//             {/* Sort Button */}
//             <button
//               onClick={handleSort}
//               className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//               disabled={isSorting}
//             >
//               {isSorting ? "Sorting..." : "Sort"}
//             </button>
//           </div>

//           {/* Array Bars */}
//           <div className="flex justify-center items-end h-80 w-full max-w-5xl bg-white rounded-lg shadow-lg p-4">
//             <div className="flex items-end justify-center w-full">
//               {array.map((value, idx) => (
//                 <div
//                   key={idx}
//                   className={`${getBarColor(idx)} rounded-t mx-0.5`}
//                   style={{
//                     height: `${value}px`,
//                     width: `${Math.max(8, 320 / arraySize)}px`,
//                     transition: "height 0.3s, background-color 0.2s",
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Algorithm Info/Code Section */}
//           {renderAlgorithmInfo()}
//         </div>
//       </main>
//     </div>
//   );
// }




































import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import ShellSort from "./ShellSort";
import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { getQuickSortAnimations } from "../algorithms/quickSort";
import { getHeapSortAnimations } from "../algorithms/heapSort";
import { getInsertionSortAnimations } from "../algorithms/insertionSort";
import { getSelectionSortAnimations } from "../algorithms/selectionSort"; 
import { getShellSortAnimations } from "../algorithms/shellSort";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(40);
  const [speed, setSpeed] = useState(50);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    generateRandomArray(arraySize);
    // eslint-disable-next-line
  }, [arraySize]);

  const generateRandomArray = (size = arraySize) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 200) + 50);
    }
    setArray(arr);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  const handleArraySizeChange = (e) => setArraySize(Number(e.target.value));
  const handleSpeedChange = (e) => setSpeed(Number(e.target.value));

  const handleSort = async () => {
    setIsSorting(true);
    setSortedIndices([]);
    let animations;
    if (selectedAlgorithm === "bubble") {
      animations = getBubbleSortAnimations(array);
    } else if (selectedAlgorithm === "merge") {
      animations = getMergeSortAnimations(array);
    } else if (selectedAlgorithm === "quick") {
      animations = getQuickSortAnimations(array);
    } else if (selectedAlgorithm === "heap") {
      animations = getHeapSortAnimations(array);
    } else if (selectedAlgorithm === "insertion") {
      animations = getInsertionSortAnimations(array);
    } else if (selectedAlgorithm === "selection") {
      animations = getSelectionSortAnimations(array);
    } else if (selectedAlgorithm === "shell") {
      animations = getShellSortAnimations(array);
    }

    let arr = array.slice();
    for (let i = 0; i < animations.length; i++) {
      const action = animations[i];
      if (action.type === "compare") {
        setActiveIndices(action.indices);
      }
      if (action.type === "swap") {
        arr = arr.slice();
        const [a, b] = action.indices;
        [arr[a], arr[b]] = [arr[b], arr[a]];
        setArray(arr);
        setActiveIndices(action.indices);
      }
      if (action.type === "overwrite") {
        arr = arr.slice();
        arr[action.index] = action.value;
        setArray(arr);
        setActiveIndices([action.index]);
      }
      if (action.type === "reset") {
        setActiveIndices([]);
      }
      await new Promise((resolve) => setTimeout(resolve, 101 - speed));
    }
    setActiveIndices([]);
    setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
    setIsSorting(false);
  };

  const getBarColor = (idx) => {
    if (sortedIndices.includes(idx)) return "bg-green-500";
    if (activeIndices.includes(idx)) return "bg-yellow-400";
    return "bg-gradient-to-t from-blue-400 to-blue-600";
  };

  const renderAlgorithmInfo = () => {
    switch (selectedAlgorithm) {
      case "bubble":
        return <BubbleSort />;
      case "merge":
        return <MergeSort />;
      case "quick":
        return <QuickSort />;
      case "heap":
        return <HeapSort />;
      case "insertion":
        return <InsertionSort />;
      case "selection":
        return <SelectionSort />;
      case "shell":
        return <ShellSort />;
      default:
        return null;
    }
  };

  // Mobile drawer overlay
  const Overlay = () =>
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
      onClick={() => setSidebarOpen(false)}
      aria-label="Close Sidebar"
    />;

  // Hamburger for mobile
  const Hamburger = () => (
  <button
    className="fixed z-30 top-3 left-3 rounded-full p-2 
               bg-blue-700/70 text-white md:hidden focus:outline-none"
    onClick={() => setSidebarOpen(true)}
    aria-label="Open Sidebar"
    disabled={isSorting}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
);


  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      {/* Hamburger for mobile */}
      <Hamburger />

      {/* Sidebar Drawer for small screens */}
      {sidebarOpen && <Overlay />}
      <aside
        className={`
          fixed z-30 top-0 left-0 h-screen bg-[#1d3557] w-72 max-w-full md:static md:translate-x-0 md:w-80 md:block shadow-xl transition-transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
        style={{ transition: "transform 0.2s" }}
      >
        <Sidebar
          selected={selectedAlgorithm}
          onSelect={(algo) => { setSidebarOpen(false); setSelectedAlgorithm(algo); }}
          disabled={isSorting}
          onClose={() => setSidebarOpen(false)}
          mobile={true}
        />
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col overflow-y-auto relative">
        <div className="flex-1 flex flex-col items-center justify-start py-4 sm:py-8 px-2 sm:px-4">
          {/* Top info */}
          <div className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 rounded-xl shadow-lg mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">{selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort</h1>
                <p className="text-blue-100 mt-1">Watch the algorithm sort {array.length} elements in real-time</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl sm:text-3xl">{isSorting ? "🔄" : "⚡"}</div>
                <div className="text-sm text-blue-200">Speed: {speed}%</div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-3 sm:mt-4">
              <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-white h-1.5 sm:h-2 rounded-full transition-all duration-300"
                  style={{ width: `${array.length > 0 ? (sortedIndices.length / array.length) * 100 : 0}%` }}
                ></div>
              </div>
              <div className="text-xs sm:text-sm text-blue-200 mt-1">
                {sortedIndices.length} of {array.length} elements sorted
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mb-4 sm:mb-6 w-full max-w-4xl">
            {/* Array Size Slider */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <label className="mb-1 font-medium text-gray-700">
                Array Size: <span className="text-indigo-600">{arraySize}</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={arraySize}
                onChange={handleArraySizeChange}
                className="w-full sm:w-40 accent-indigo-500"
                disabled={isSorting}
              />
            </div>
            {/* Speed Slider */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <label className="mb-1 font-medium text-gray-700">
                Speed: <span className="text-indigo-600">{speed}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={speed}
                onChange={handleSpeedChange}
                className="w-full sm:w-40 accent-purple-500"
                disabled={isSorting}
              />
            </div>
            {/* Generate New Array Button */}
            <button
              onClick={() => generateRandomArray(arraySize)}
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300"
              disabled={isSorting}
            >
              Generate New Array
            </button>
            {/* Sort Button */}
            <button
              onClick={handleSort}
              className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              disabled={isSorting}
            >
              {isSorting ? "Sorting..." : "Sort"}
            </button>
          </div>

          {/* Array Bars */}
          <div className="flex justify-center items-end h-40 xs:h-56 sm:h-80 w-full max-w-5xl bg-white rounded-lg shadow-lg px-1 sm:p-4">
            <div className="flex items-end justify-center w-full h-full overflow-hidden">
              {array.map((value, idx) => (
                <div
                  key={idx}
                  className={`${getBarColor(idx)} rounded-t mx-0.5`}
                  style={{
                    height: `${(value / 250) * 100}%`,
                    width: `${Math.max(6, Math.floor(230 / arraySize))}px`,
                    minWidth: "3px",
                    transition: "height 0.3s, background-color 0.2s",
                    maxHeight: "100%",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Algorithm Info/Code Section */}
          <div className="w-full mt-2 sm:mt-6">
            {renderAlgorithmInfo()}
          </div>
        </div>
      </main>
    </div>
  );
}
