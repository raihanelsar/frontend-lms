import React from "react";
import { FaChartLine, FaHourglassHalf } from "react-icons/fa";

export default function Grades() {
  return (
    <div className="p-8 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Ikon utama */}
        <div className="p-4 rounded-full bg-indigo-50 w-fit">
          <FaChartLine className="text-4xl text-indigo-600" />
        </div>

        {/* Judul dan deskripsi */}
        <h2 className="text-2xl font-semibold text-gray-800">Nilai Siswa</h2>
        <p className="max-w-md text-gray-600">
          Fitur penilaian untuk tugas, kuis, dan total nilai siswa sedang dalam
          tahap pengembangan.
        </p>

        {/* Status pengembangan */}
        <div className="flex items-center gap-2 px-4 py-2 mt-3 text-indigo-700 bg-indigo-100 rounded-full w-fit">
          <FaHourglassHalf />
          <span className="font-medium">Fitur penilaian akan segera hadir</span>
        </div>
      </div>
    </div>
  );
}
