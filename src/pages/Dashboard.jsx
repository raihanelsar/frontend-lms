import React from "react";

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      desc: "Belajar dasar HTML, CSS, dan JavaScript.",
      progress: 70,
    },
    {
      id: 2,
      title: "Database",
      desc: "Konsep dasar MySQL dan relasi antar tabel.",
      progress: 40,
    },
    {
      id: 3,
      title: "Python Dasar",
      desc: "Logika pemrograman dan algoritma dengan Python.",
      progress: 85,
    },
  ];

  return (
    <div className="space-y-6 transition-colors duration-300">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-gray-900">
          Selamat Datang, Elsar 👋
        </h1>
        <p className="text-gray-600">
          Senang bertemu lagi! Berikut ringkasan kegiatan belajarmu.
        </p>
      </header>

      {/* Statistik Singkat */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white rounded-2xl p-5 shadow transition">
          <h3 className="text-lg font-semibold">Total Course</h3>
          <p className="text-3xl font-bold mt-2">{courses.length}</p>
        </div>
        <div className="bg-green-500 text-white rounded-2xl p-5 shadow transition">
          <h3 className="text-lg font-semibold">Materi Selesai</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-orange-500 text-white rounded-2xl p-5 shadow transition">
          <h3 className="text-lg font-semibold">Tugas Aktif</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </section>

      {/* Daftar Course */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Kursus Aktif
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
            + Tambah Course
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg p-5 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 mb-4">
                {course.desc}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>{course.progress}% selesai</span>
                <button className="text-blue-600 hover:underline">
                  Buka Kelas
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
