const QUADRATIC_ALGORITHMS = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Insertion Sort", value: "insertion" },
  { label: "Selection Sort", value: "selection" },
  { label: "Shell Sort", value: "shell" },
  { label: "Counting Sort", value: "counting" },
  { label: "Radix Sort", value: "radix" },
  { label: "Bucket Sort", value: "bucket" },
  // Add more algorithms here as you implement them
];

const LOGARITHMIC_ALGORITHMS = [
  { label: "Merge Sort", value: "merge" },
  { label: "Quick Sort", value: "quick" },
  { label: "Heap Sort", value: "heap" },
  // Add more algorithms here as you implement them
];



export default function Sidebar({ selected, onSelect, disabled }) {
  return (
    <aside className="min-h-screen w-80 bg-[#1d3557] text-white flex flex-col py-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 px-6 bg-[#fb8500] p-2 rounded-4xl">Sorting Visualizer</h2>
      <div>
        <p className="px-3 text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">Logarithmic</p>
        <nav className="flex-1 flex flex-col gap-3 pt-3">
          {LOGARITHMIC_ALGORITHMS.map(algo => (
            <button
              key={algo.value}
              className={`text-left px-6 py-3 rounded-l-full transition-all font-medium
                ${selected === algo.value ? "bg-white text-indigo-700 shadow" : "hover:bg-indigo-600"}
              `}
              onClick={() => !disabled && onSelect(algo.value)}
              disabled={disabled}
            >
              {algo.label}
            </button>
          ))}
        </nav>
      </div>

      {/* for the quadratic algorithms here.... */}
      <div className="mt-4">
        <p className="px-3 text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">Quadratic</p>
        <nav className="flex-1 flex flex-col gap-3 pt-3">
          {QUADRATIC_ALGORITHMS.map(algo => (
            <button
              key={algo.value}
              className={`text-left px-6 py-3 rounded-l-full transition-all font-medium
                ${selected === algo.value ? "bg-white text-indigo-700 shadow" : "hover:bg-indigo-600"}
              `}
              onClick={() => !disabled && onSelect(algo.value)}
              disabled={disabled}
            >
              {algo.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}






















