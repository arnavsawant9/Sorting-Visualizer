// const QUADRATIC_ALGORITHMS = [
//   { label: "Bubble Sort", value: "bubble" },
//   { label: "Insertion Sort", value: "insertion" },
//   { label: "Selection Sort", value: "selection" },
//   { label: "Shell Sort", value: "shell" },
// ];

// const LOGARITHMIC_ALGORITHMS = [
//   { label: "Merge Sort", value: "merge" },
//   { label: "Quick Sort", value: "quick" },
//   { label: "Heap Sort", value: "heap" },
// ];

// export default function Sidebar({ selected, onSelect, disabled }) {
//   return (
//     <aside className="h-screen w-80 bg-[#1d3557] text-white flex flex-col py-6 shadow-lg overflow-y-auto">
//       <h2 className="text-xl font-bold mb-8 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-xl shadow-lg justify-center items-center">
//         Sorting Visualizer <span className="text-xl">⚡</span>
//       </h2>

//       <div>
//         <p className="px-3 text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">
//           Logarithmic
//         </p>
//         <nav className="flex-1 flex flex-col gap-3 pt-3">
//           {LOGARITHMIC_ALGORITHMS.map((algo) => (
//             <button
//               key={algo.value}
//               className={`text-left px-6 py-3 rounded-l-full transition-all font-medium
//                 ${
//                   selected === algo.value
//                     ? "bg-white text-indigo-700 shadow"
//                     : "hover:bg-indigo-600"
//                 }
//               `}
//               onClick={() => !disabled && onSelect(algo.value)}
//               disabled={disabled}
//             >
//               {algo.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* for the quadratic algorithms here.... */}
//       <div className="mt-4">
//         <p className="px-3 text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">
//           Quadratic
//         </p>
//         <nav className="flex-1 flex flex-col gap-3 pt-3">
//           {QUADRATIC_ALGORITHMS.map((algo) => (
//             <button
//               key={algo.value}
//               className={`text-left px-6 py-3 rounded-l-full transition-all font-medium
//                 ${
//                   selected === algo.value
//                     ? "bg-white text-indigo-700 shadow"
//                     : "hover:bg-indigo-600"
//                 }
//               `}
//               onClick={() => !disabled && onSelect(algo.value)}
//               disabled={disabled}
//             >
//               {algo.label}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   );
// }

















const QUADRATIC_ALGORITHMS = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Insertion Sort", value: "insertion" },
  { label: "Selection Sort", value: "selection" },
  { label: "Shell Sort", value: "shell" },
];

const LOGARITHMIC_ALGORITHMS = [
  { label: "Merge Sort", value: "merge" },
  { label: "Quick Sort", value: "quick" },
];

// Props: mobile (bool), onClose (function)
export default function Sidebar({ selected, onSelect, disabled, mobile = false, onClose }) {
  return (
    <aside className="h-full w-full md:w-80 bg-[#1d3557] text-white flex flex-col py-6 shadow-lg overflow-y-auto">
      <div className="flex items-center px-6 justify-between mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-xl shadow-lg flex-1">
          Sorting Visualizer <span className="text-xl">⚡</span>
        </h2>
        {/* "X" Close for mobile */}
        {mobile && onClose && (
          <button
            className="ml-3 block md:hidden rounded-full text-white bg-blue-600 p-1.5 hover:bg-blue-700 transition"
            onClick={onClose}
            aria-label="Close Sidebar"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <div>
        <p className="px-3 text-2xl sm:text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">
          Logarithmic
        </p>
        <nav className="flex-1 flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
          {LOGARITHMIC_ALGORITHMS.map((algo) => (
            <button
              key={algo.value}
              className={`text-left px-6 py-2 sm:py-3 rounded-l-full transition-all font-medium
                ${selected === algo.value
                  ? "bg-white text-indigo-700 shadow"
                  : "hover:bg-indigo-600"}
              `}
              onClick={() => !disabled && onSelect(algo.value)}
              disabled={disabled}
            >
              {algo.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Quadratic algorithms */}
      <div className="mt-2 sm:mt-4">
        <p className="px-3 text-2xl sm:text-3xl text-black font-bold p-2 pb-3 bg-[#457b9d]">
          Quadratic
        </p>
        <nav className="flex-1 flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
          {QUADRATIC_ALGORITHMS.map((algo) => (
            <button
              key={algo.value}
              className={`text-left px-6 py-2 sm:py-3 rounded-l-full transition-all font-medium
                ${selected === algo.value
                  ? "bg-white text-indigo-700 shadow"
                  : "hover:bg-indigo-600"}
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

