import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, Users } from "lucide-react";

// Komponen kecil untuk Statistik
const StatCard = ({ label, value }) => (
  <div className="p-4 text-center transition bg-white border shadow-sm rounded-xl hover:shadow-md">
    <p className="text-lg font-semibold text-indigo-600">{value}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

// Komponen untuk Item Jadwal
const ScheduleItem = ({ subject, day, time }) => (
  <li className="flex items-center justify-between pb-2 border-b border-gray-100">
    <div>
      <p className="font-medium text-gray-700">{subject}</p>
      <p className="text-xs text-gray-500">{day}</p>
    </div>
    <span className="px-2 py-1 text-xs text-indigo-600 rounded-md bg-indigo-50">
      {time}
    </span>
  </li>
);

// Komponen untuk Card Kelas
const CourseCard = ({ course }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="p-5 transition bg-white border border-gray-100 rounded-xl hover:shadow-md"
  >
    <div className="flex items-center gap-2 mb-2">
      <BookOpen className="w-5 h-5 text-indigo-500" />
      <h3 className="text-sm font-semibold text-gray-800">{course.title}</h3>
    </div>
    <p className="mb-2 text-xs text-gray-500">{course.desc}</p>
    <p className="mb-1 text-xs text-gray-600">👨‍🏫 {course.teacher}</p>
    <p className="mb-3 text-xs text-gray-500">{course.time}</p>

    {/* Progress Bar */}
    <div className="w-full h-1.5 bg-gray-200 rounded-full">
      <div
        className="h-1.5 bg-indigo-500 rounded-full"
        style={{ width: `${course.progress}%` }}
      ></div>
    </div>

    <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
      <span>Kemajuan: {course.progress}%</span>
      <Link
        to={`/guru/courses/${course.id}`} // <== arahkan ke halaman detail sesuai ID
        className="text-indigo-600 hover:underline"
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
      <div className="mx-auto mb-6 max-w-7xl">
        <h1 className="text-xl font-semibold text-gray-800">
          Selamat Datang, Raihan Elsar Kusuma 👋
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Berikut ringkasan aktivitas Anda minggu ini.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl lg:grid-cols-3">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          {/* Statistik */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2">
            {stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} />
            ))}
          </div>

          {/* Jadwal */}
          <div className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h2 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800">
              <Calendar className="w-4 h-4 text-indigo-500" />
              Jadwal Minggu Ini
            </h2>
            <ul className="space-y-3 text-sm">
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
          {/* Daftar Kelas */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800">Kelas Diampu</h2>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Cari kelas..."
                  className="text-sm border rounded-lg px-3 py-1.5 focus:ring-indigo-200 focus:outline-none"
                />
                <select className="text-sm border rounded-lg px-2 py-1.5 text-gray-600">
                  <option>2025/2026 Ganjil</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Aktivitas Terbaru */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h2 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-800">
              <Users className="w-4 h-4 text-indigo-500" />
              Aktivitas Terbaru
            </h2>
            <div className="py-6 text-sm text-center text-gray-500 border-t border-gray-100">
              Belum ada aktivitas terbaru dari kelas atau Discord.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
