import React from "react";
import { MessageCircle, Clock } from "lucide-react";

export default function Discussion() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10 bg-white border border-gray-100 shadow-sm rounded-2xl text-center">
      {/* Ikon utama */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping"></div>
        <MessageCircle className="relative z-10 text-6xl text-indigo-600" />
      </div>

      {/* Judul */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Fitur Forum Diskusi Akan Segera Hadir 💬
      </h1>

      {/* Deskripsi */}
      <p className="max-w-md mt-3 leading-relaxed text-gray-600">
        Kami sedang menyiapkan fitur forum interaktif yang memungkinkan guru dan siswa 
        untuk berdiskusi secara real-time, berbagi ide, serta memberikan umpan balik 
        langsung di dalam platform pembelajaran.
      </p>

      {/* Status pengembangan */}
      <div className="flex items-center gap-2 mt-6 text-sm font-medium text-indigo-600">
        <Clock className="animate-pulse" />
        <span>Pengembangan fitur sedang berlangsung...</span>
      </div>

      {/* Preview fitur yang akan datang */}
      <div className="grid grid-cols-1 gap-4 mt-8 text-gray-700 md:grid-cols-2">
        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <MessageCircle className="text-xl text-blue-600" />
          <div className="text-left">
            <h3 className="font-semibold">Diskusi Kelas</h3>
            <p className="text-sm text-gray-500">
              Tempat bertukar pendapat antar siswa dan guru.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <MessageCircle className="text-xl text-green-600" />
          <div className="text-left">
            <h3 className="font-semibold">Balasan Cepat</h3>
            <p className="text-sm text-gray-500">
              Guru dapat menjawab pertanyaan siswa secara instan.
            </p>
          </div>
        </div>
      </div>

      {/* Catatan tambahan */}
      <p className="mt-6 text-xs italic text-gray-400">
        Nantikan fitur diskusi versi beta di pembaruan berikutnya 🚀
      </p>
    </div>
  );
}
