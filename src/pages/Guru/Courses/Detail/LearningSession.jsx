import React from "react";
import { Calendar, Construction, Clock } from "lucide-react";

export default function LearningSession() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Fitur Sesi Pembelajaran
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping"></div>
          <Construction className="relative z-10 w-16 h-16 text-indigo-600" />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          Sedang Dalam Pengembangan
        </h3>
        <p className="max-w-md mt-2 text-gray-500">
          Fitur ini masih dalam tahap pengembangan untuk mendukung aktivitas
          pembelajaran seperti pengaturan jadwal, sesi online, dan rekap kehadiran.
        </p>

        <div className="flex items-center gap-2 mt-6 text-sm font-medium text-indigo-600">
          <Clock className="w-4 h-4" />
          Harap bersabar — fitur ini segera hadir!
        </div>
      </div>
    </div>
  );
}
