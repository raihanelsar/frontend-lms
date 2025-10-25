import React from "react";
import { FaUserTie, FaUsers, FaTools, FaSpinner } from "react-icons/fa";

export default function TeacherStudents() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10 bg-white border border-gray-100 shadow-sm rounded-2xl text-center">
      {/* 🔧 Ikon Utama */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping"></div>
        <FaTools className="relative z-10 text-6xl text-indigo-600" />
      </div>

      {/* Judul */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Fitur Pengajar & Peserta Akan Segera Hadir 🚀
      </h1>

      {/* Deskripsi */}
      <p className="max-w-md mt-3 leading-relaxed text-gray-600">
        Kami sedang menyiapkan fitur manajemen pengajar dan peserta, termasuk
        sistem presensi otomatis, laporan kehadiran, dan integrasi nilai.
        Fitur ini akan memudahkan guru dalam mengelola kelas secara digital.
      </p>

      {/* Status pengembangan */}
      <div className="flex items-center gap-2 mt-6 text-sm font-medium text-indigo-600">
        <FaSpinner className="animate-spin" />
        <span>Pengembangan fitur sedang berlangsung...</span>
      </div>

      {/* Preview fitur yang akan datang */}
      <div className="grid grid-cols-1 gap-4 mt-8 text-gray-700 md:grid-cols-2">
        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <FaUserTie className="text-xl text-blue-600" />
          <div className="text-left">
            <h3 className="font-semibold">Data Pengajar</h3>
            <p className="text-sm text-gray-500">
              Menampilkan profil dan jadwal pengajar kelas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-xl bg-gray-50">
          <FaUsers className="text-xl text-green-600" />
          <div className="text-left">
            <h3 className="font-semibold">Daftar Peserta</h3>
            <p className="text-sm text-gray-500">
              Mengelola daftar siswa dan status kehadiran mereka.
            </p>
          </div>
        </div>
      </div>

      {/* Catatan tambahan */}
      <p className="mt-6 text-xs italic text-gray-400">
        Nantikan versi beta-nya segera hadir di dashboard guru 🎯
      </p>
    </div>
  );
}
