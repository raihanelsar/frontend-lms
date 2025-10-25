import React from "react";
import { Megaphone, Clock } from "lucide-react";

export default function AnnouncementPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10 bg-white border border-gray-100 shadow-sm rounded-2xl text-center">
      {/* Ikon utama */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-yellow-100 rounded-full animate-ping"></div>
        <Megaphone className="relative z-10 text-6xl text-yellow-500" />
      </div>

      {/* Judul */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Fitur Pengumuman Akan Segera Hadir 📢
      </h1>

      {/* Deskripsi */}
      <p className="max-w-md mt-3 leading-relaxed text-gray-600">
        Kami sedang mengembangkan fitur pengumuman yang memungkinkan guru untuk 
        membagikan informasi penting seperti jadwal, tugas, dan kegiatan kelas 
        secara real-time kepada seluruh peserta.
      </p>

      {/* Status pengembangan */}
      <div className="flex items-center gap-2 mt-6 text-sm font-medium text-yellow-600">
        <Clock className="animate-pulse" />
        <span>Pengembangan fitur sedang berlangsung...</span>
      </div>

      {/* Preview fitur yang akan datang */}
      <div className="grid grid-cols-1 gap-4 mt-8 text-gray-700 md:grid-cols-2">
        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <Megaphone className="text-xl text-blue-600" />
          <div className="text-left">
            <h3 className="font-semibold">Pengumuman Kelas</h3>
            <p className="text-sm text-gray-500">
              Guru dapat memposting pengumuman langsung ke halaman kelas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <Megaphone className="text-xl text-green-600" />
          <div className="text-left">
            <h3 className="font-semibold">Notifikasi Real-Time</h3>
            <p className="text-sm text-gray-500">
              Siswa akan mendapat notifikasi saat pengumuman baru diterbitkan.
            </p>
          </div>
        </div>
      </div>

      {/* Catatan tambahan */}
      <p className="mt-6 text-xs italic text-gray-400">
        Nantikan fitur pengumuman ini di pembaruan berikutnya 🚀
      </p>
    </div>
  );
}
