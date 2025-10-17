import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, BookOpen, Users, FileText, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const [teacherName] = useState("Raihan Elsar Kusuma");

  const stats = [
    { id: 1, label: "Kursus Diampu", value: 3, icon: <BookOpen className="text-indigo-500" /> },
    { id: 2, label: "Siswa Aktif", value: 87, icon: <Users className="text-green-500" /> },
    { id: 3, label: "Tugas Belum Dinilai", value: 5, icon: <FileText className="text-orange-500" /> },
  ];

  const schedules = [
    { day: "Senin", time: "08:00 - 10:00", course: "Pemrograman Web" },
    { day: "Rabu", time: "10:00 - 12:00", course: "Desain UI/UX" },
    { day: "Jumat", time: "09:00 - 11:00", course: "Basis Data" },
  ];

  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      students: 32,
      desc: "Membuat website interaktif menggunakan HTML, CSS, dan JavaScript.",
    },
    {
      id: 2,
      title: "Desain UI/UX",
      students: 27,
      desc: "Merancang antarmuka yang menarik dan mudah digunakan.",
    },
    {
      id: 3,
      title: "Basis Data",
      students: 28,
      desc: "Konsep dasar database dan implementasi dengan MySQL.",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Guru</h1>
        <p className="text-gray-500">Selamat datang kembali, {teacherName} 👋</p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-3">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 p-4 bg-white border shadow-sm rounded-xl"
          >
            <div className="p-3 bg-gray-100 rounded-lg">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Jadwal Minggu Ini */}
      <motion.div
        whileHover={{ y: -3 }}
        className="p-5 mb-6 bg-white border border-gray-100 shadow-sm rounded-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Calendar className="w-5 h-5 text-purple-500" /> Jadwal Mengajar Minggu Ini
          </h2>
          <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 text-sm">
            <Plus size={16} /> Tambah Jadwal
          </button>
        </div>

        <div className="space-y-3">
          {schedules.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 border border-purple-200 rounded-lg bg-purple-50"
            >
              <div>
                <p className="font-medium text-gray-800">{s.course}</p>
                <p className="text-sm text-gray-500">{s.day} • {s.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Kursus Diampu */}
      <motion.div
        whileHover={{ y: -3 }}
        className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <BookOpen className="w-5 h-5 text-blue-500" /> Kursus yang Diampu
          </h2>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-sm">
            <Plus size={16} /> Tambah Kursus
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="p-4 transition border bg-gray-50 rounded-xl hover:border-blue-300 hover:shadow"
            >
              <h3 className="font-semibold text-gray-800">{course.title}</h3>
              <p className="mb-1 text-sm text-gray-500">{course.students} siswa terdaftar</p>
              <p className="mb-3 text-sm text-gray-600">{course.desc}</p>
              <Link
                to={`/courses/${course.id}`}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Lihat Detail →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
