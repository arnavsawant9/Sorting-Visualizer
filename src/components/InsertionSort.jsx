// src/components/InsertionSort.jsx
import React, { useState } from "react";
import { ALGORITHM_INFO } from "../algorithms/algorithmInfo";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import javascript from "../assets/javascript.png";
import { javascript_code, java_code, cpp_code } from "../code/insertionSort";

export default function InsertionSort() {
  const info = ALGORITHM_INFO.insertion;
  const [code, setCode] = useState(java_code);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border border-blue-200">
      <h2 className="text-4xl font-bold mb-6 text-center text-white bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl py-4 shadow-md tracking-wide">
        {info.name}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 bg-orange-50 text-gray-800 p-6 rounded-2xl shadow-sm leading-relaxed space-y-4 text-justify">
          {info.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="md:w-1/3 bg-orange-100 text-orange-900 rounded-2xl p-6 shadow-sm text-base space-y-5 font-medium">
          <div>
            <span className="text-gray-800">📊 Average Complexity:</span>
            <span className="ml-2">{info.time}</span>
          </div>
          <div>
            <span className="text-gray-800">⚡ Best Case:</span>
            <span className="ml-2">O(n)</span>
          </div>
          <div>
            <span className="text-gray-800">🔥 Worst Case:</span>
            <span className="ml-2">{info.time}</span>
          </div>
          <div>
            <span className="text-gray-800">💾 Space Complexity:</span>
            <span className="ml-2">{info.space}</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex mb-3 gap-4 items-center">
          <h3 className="text-xl font-semibold text-gray-700">
            💡 Implementation
          </h3>
          <button onClick={() => setCode(java_code)}>
            <img src={java} height={35} width={35} />
          </button>
          <button onClick={() => setCode(cpp_code)}>
            <img src={cpp} height={35} width={35} />
          </button>
          <button onClick={() => setCode(javascript_code)}>
            <img src={javascript} height={35} width={35} />
          </button>
        </div>

        <pre className="bg-gray-900 text-green-200 rounded-xl p-6 overflow-x-auto text-sm font-mono shadow-inner">
          {code}
        </pre>

        <div className="text-black text-sm mt-2">
          <button onClick={handleCopy} className="text-black">Copy</button>
        </div>
      </div>
    </div>
  );
}
