import { useEffect, useState } from "react";
import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { getQuickSortAnimations } from "../algorithms/quickSort";
import Sidebar from "./Sidebar";
import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
//import HeapSort from "./HeapSort"; // If you implement it

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(40);
  const [speed, setSpeed] = useState(50);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);

  // Generate random array when arraySize changes
  useEffect(() => {
    generateRandomArray(arraySize);
    // eslint-disable-next-line
  }, [arraySize]);

  // Generate a random array
  const generateRandomArray = (size = arraySize) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 200) + 50);
    }
    setArray(arr);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  // Handlers for controls
  const handleArraySizeChange = (e) => setArraySize(Number(e.target.value));
  const handleSpeedChange = (e) => setSpeed(Number(e.target.value));

  // Main sort function
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
    }
    // Add more as you implement

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

  // Get bar color based on state
  const getBarColor = (idx) => {
    if (sortedIndices.includes(idx)) return "bg-green-500";
    if (activeIndices.includes(idx)) return "bg-yellow-400";
    return "bg-gradient-to-t from-blue-400 to-blue-600";
  };

  // Render the info/code component for the selected algorithm
  const renderAlgorithmInfo = () => {
    switch (selectedAlgorithm) {
      case "bubble":
        return <BubbleSort />;
      case "merge":
        return <MergeSort />;
      case "quick":
        return <QuickSort />;
      // case "heap":
      //   return <HeapSort />;
      // Add more as you implement
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        selected={selectedAlgorithm}
        onSelect={setSelectedAlgorithm}
        disabled={isSorting}
      />

      {/* Main Area */}
      <main className="flex-1 flex flex-col items-center justify-start py-8 px-4">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Sorting Visualizer</h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
          {/* Array Size Slider */}
          <div className="flex flex-col items-center">
            <label className="mb-1 font-medium text-gray-700">
              Array Size: <span className="text-indigo-600">{arraySize}</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={arraySize}
              onChange={handleArraySizeChange}
              className="w-40 accent-indigo-500"
              disabled={isSorting}
            />
          </div>

          {/* Speed Slider */}
          <div className="flex flex-col items-center">
            <label className="mb-1 font-medium text-gray-700">
              Speed: <span className="text-indigo-600">{speed}</span>
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={handleSpeedChange}
              className="w-40 accent-purple-500"
              disabled={isSorting}
            />
          </div>

          {/* Generate New Array Button */}
          <button
            onClick={() => generateRandomArray(arraySize)}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300"
            disabled={isSorting}
          >
            Generate New Array
          </button>

          {/* Sort Button */}
          <button
            onClick={handleSort}
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            disabled={isSorting}
          >
            {isSorting ? "Sorting..." : "Sort"}
          </button>
        </div>

        {/* Array Bars */}
        <div className="flex justify-center items-end h-100 w-full max-w-5xl bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-end justify-center w-full">
            {array.map((value, idx) => (
              <div
                key={idx}
                className={`${getBarColor(idx)} rounded-t mx-0.5`}
                style={{
                  height: `${value}px`,
                  width: `${Math.max(8, 320 / arraySize)}px`,
                  transition: "height 0.3s, background-color 0.2s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Algorithm Info/Code Section */}
        {renderAlgorithmInfo()}
      </main>
    </div>
  );
}
