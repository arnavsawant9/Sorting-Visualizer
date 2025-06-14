const ALGORITHMS = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Merge Sort", value: "merge" },
  // Add more algorithms here as you implement them
];

export default function Sidebar({ selected, onSelect, disabled }) {
  return (
    <aside className="h-screen w-56 bg-gradient-to-b from-indigo-700 to-purple-700 text-white flex flex-col py-6 shadow-lg">
      <h2 className="text-xl font-bold mb-8 px-6">Algorithms</h2>
      <nav className="flex-1 flex flex-col gap-2">
        {ALGORITHMS.map(algo => (
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
    </aside>
  );
}
