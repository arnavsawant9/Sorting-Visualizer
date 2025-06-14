export default function Controls({
  arraySize, onArraySizeChange,
  speed, onSpeedChange,
  onGenerate, onSort, isSorting
}) {
  return (
    <div className="flex flex-wrap gap-6 mb-8 items-center">
      {/* Array Size Slider */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Array Size: <span className="text-indigo-600">{arraySize}</span>
        </label>
        <input
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={onArraySizeChange}
          className="w-40 accent-indigo-500"
          disabled={isSorting}
        />
      </div>
      {/* Speed Slider */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Speed: <span className="text-indigo-600">{speed}</span>
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={onSpeedChange}
          className="w-40 accent-purple-500"
          disabled={isSorting}
        />
      </div>
      {/* Buttons */}
      <button
        onClick={onGenerate}
        className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition"
        disabled={isSorting}
      >
        Generate New Array
      </button>
      <button
        onClick={onSort}
        className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
        disabled={isSorting}
      >
        {isSorting ? "Sorting..." : "Sort"}
      </button>
    </div>
  );
}
