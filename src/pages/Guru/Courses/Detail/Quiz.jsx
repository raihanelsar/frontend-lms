import React from "react";
import { FaRegClock } from "react-icons/fa";

export default function Quiz() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] p-6 text-center bg-white shadow rounded-2xl">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-6 bg-indigo-100 rounded-full">
          <FaRegClock className="text-5xl text-indigo-600 animate-pulse" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Fitur Kuis Akan Segera Hadir
        </h2>
        <p className="max-w-md text-gray-600">
          Tim pengembang sedang menyiapkan fitur kuis interaktif untuk kelas ini.  
          Nantikan pembaruan selanjutnya dan tetap semangat belajar! 🚀
        </p>

        <div className="mt-6">
          <button
            disabled
            className="px-5 py-2.5 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed shadow-sm"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
