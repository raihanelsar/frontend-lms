import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, Users } from "lucide-react";

// ========== Komponen Statistik ==========
const StatCard = ({ label, value }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col items-center justify-center p-5 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
  >
    <p className="text-2xl font-bold text-indigo-600">{value}</p>
    <p className="mt-1 text-xs font-medium text-gray-500">{label}</p>
  </motion.div>
);

// ========== Komponen Jadwal ==========
const ScheduleItem = ({ subject, day, time }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <div>
      <p className="text-sm font-medium text-gray-700">{subject}</p>
      <p className="text-xs text-gray-500">{day}</p>
    </div>
    <span className="px-2.5 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg">
      {time}
    </span>
  </li>
);

// ========== Komponen Kelas ==========
const CourseCard = ({ course }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.01 }}
    transition={{ duration: 0.2 }}
    className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
  >
    <div className="flex items-center gap-2 mb-2">
      <BookOpen className="w-5 h-5 text-indigo-500" />
      <h3 className="text-sm font-semibold text-gray-800">{course.title}</h3>
    </div>

    <p className="mb-2 text-xs text-gray-500">{course.desc}</p>
    <p className="mb-1 text-xs text-gray-600">👨‍🏫 {course.teacher}</p>
    <p className="mb-3 text-xs text-gray-500">{course.time}</p>

    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-3">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${course.progress}%` }}
        transition={{ duration: 0.8 }}
        className="h-1.5 bg-indigo-500 rounded-full"
      />
    </div>

    <div className="flex items-center justify-between text-xs text-gray-500">
      <span>Kemajuan: {course.progress}%</span>
      <Link
        to={`/guru/courses/${course.id}`}
        className="font-medium text-indigo-600 hover:underline"
      >
        Detail →
      </Link>
    </div>
  </motion.div>
);

// ========== DASHBOARD GURU ==========
export default function TeacherDashboard() {
  const stats = [
    { label: "Total Kelas", value: 3 },
    { label: "Tugas Aktif", value: 2 },
    { label: "Kuis Aktif", value: 1 },
    { label: "Peserta", value: 85 },
  ];

  const schedule = [
    { day: "Senin", subject: "Pemrograman Web", time: "08:00 - 10:00" },
    { day: "Rabu", subject: "Desain UI/UX", time: "10:00 - 12:00" },
    { day: "Jumat", subject: "Basis Data", time: "09:00 - 11:00" },
  ];

  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      desc: "Membuat website interaktif menggunakan HTML, CSS, dan JS.",
      teacher: "Raihan Elsar Kusuma",
      time: "Senin, 08:00 - 10:00",
      progress: 75,
    },
    {
      id: 2,
      title: "Desain UI/UX",
      desc: "Merancang antarmuka menarik dan mudah digunakan.",
      teacher: "Raihan Elsar Kusuma",
      time: "Rabu, 10:00 - 12:00",
      progress: 60,
    },
    {
      id: 3,
      title: "Basis Data",
      desc: "Konsep dasar database dan implementasi MySQL.",
      teacher: "Raihan Elsar Kusuma",
      time: "Jumat, 09:00 - 11:00",
      progress: 40,
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mx-auto mb-8 max-w-7xl">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Selamat Datang, Raihan Elsar Kusuma 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Berikut ringkasan aktivitas Anda minggu ini.
          </p>
        </div>
      </div>

      {/* Grid Utama */}
      <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3 max-w-7xl">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          {/* Statistik */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {stats.map((s, i) => (
              <StatCard key={i} label={s.label} value={s.value} />
            ))}
          </div>

          {/* Jadwal */}
          <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h2 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800">
              <Calendar className="w-4 h-4 text-indigo-500" />
              Jadwal Minggu Ini
            </h2>
            <ul className="space-y-1">
              {schedule.map((item, i) => (
                <ScheduleItem
                  key={i}
                  subject={item.subject}
                  day={item.day}
                  time={item.time}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6 lg:col-span-2">
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex flex-col items-start justify-between gap-3 pb-4 mb-4 border-b border-gray-100 sm:flex-row sm:items-center">
              <h2 className="text-sm font-semibold text-gray-800">
                📚 Kelas yang Anda Ampu
              </h2>
              <div className="flex items-center w-full gap-2 sm:w-auto">
                <input
                  type="text"
                  placeholder="Cari kelas..."
                  className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-indigo-100 focus:outline-none w-full sm:w-auto"
                />
                <select className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 text-gray-600 focus:ring-2 focus:ring-indigo-100 focus:outline-none">
                  <option>2025/2026 Ganjil</option>
                  <option>2024/2025 Genap</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
