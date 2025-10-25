// src/pages/teacher/Tasks.jsx
import React from "react";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";

export default function Tasks() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10 bg-white border border-gray-100 shadow-sm rounded-2xl text-center">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping"></div>
        <FaClipboardList className="relative z-10 text-6xl text-blue-600" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Fitur Tugas Akan Segera Hadir 🚀
      </h1>

      {/* Description */}
      <p className="max-w-md mt-3 text-gray-600">
        Kami sedang menyiapkan fitur pengelolaan tugas untuk guru dan siswa,
        termasuk penilaian otomatis, pengumpulan tugas online, dan rekap nilai.
      </p>

      {/* Progress Info */}
      <div className="flex items-center gap-2 mt-6 text-sm font-medium text-blue-600">
        <FaHourglassHalf className="animate-spin-slow" />
        <span>Harap bersabar, fitur ini sedang dalam tahap pengembangan.</span>
      </div>
    </div>
  );
}
