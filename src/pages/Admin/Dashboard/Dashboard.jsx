import React, { useEffect, useState } from "react";
import { Users, UserCheck, BookOpen, CalendarDays } from "lucide-react";
import StatsCard from "../../../components/Admin/StatsCard";

export default function Dashboard() {
  const [today, setToday] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // 🔹 Data dummy sementara
  useEffect(() => {
    const date = new Date();
    const formatted = date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setToday(formatted);

    // 🔹 Data guru
    const dummyTeachers = [
      { id: 1, name: "Budi Santoso", subject: "Matematika" },
      { id: 2, name: "Siti Rahmawati", subject: "Bahasa Inggris" },
      { id: 3, name: "Andi Pratama", subject: "Fisika" },
      { id: 4, name: "Dewi Lestari", subject: "Kimia" },
      { id: 5, name: "Rudi Hartono", subject: "Biologi" },
    ];

    // 🔹 Data siswa
    const dummyStudents = [
      { id: 1, name: "Rafi Ahmad", nis: "1001", kelas: "X IPA 1" },
      { id: 2, name: "Dina Lestari", nis: "1002", kelas: "X IPA 1" },
      { id: 3, name: "Andi Saputra", nis: "2001", kelas: "X IPA 2" },
      { id: 4, name: "Salsa Putri", nis: "2002", kelas: "X IPA 2" },
      { id: 5, name: "Rizky Pratama", nis: "3001", kelas: "XI IPS 1" },
    ];

    // 🔹 Data kelas
    const dummyClasses = [
      { id: 1, name: "X IPA 1", teacher: "Budi Santoso" },
      { id: 2, name: "X IPA 2", teacher: "Siti Rahmawati" },
      { id: 3, name: "XI IPS 1", teacher: "Rina Kartika" },
    ];

    // 🔹 Jadwal
    const dummySchedule = [
      {
        id: 1,
        subject: "Matematika",
        teacher: "Budi Santoso",
        date: "Senin, 27 Okt",
        time: "08:00 - 09:30",
      },
      {
        id: 2,
        subject: "Bahasa Inggris",
        teacher: "Siti Rahmawati",
        date: "Selasa, 28 Okt",
        time: "09:45 - 11:15",
      },
      {
        id: 3,
        subject: "IPA",
        teacher: "Dimas Aditya",
        date: "Rabu, 29 Okt",
        time: "10:00 - 11:30",
      },
    ];

    setTeachers(dummyTeachers);
    setStudents(dummyStudents);
    setClasses(dummyClasses);
    setSchedule(dummySchedule);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* ===== Header ===== */}
      <div className="flex flex-col justify-between mb-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📊 Dashboard Admin</h1>
          <p className="mt-1 text-gray-500">
            Selamat datang kembali, <span className="font-semibold">Admin</span> 👋
          </p>
        </div>
        <div className="flex items-center gap-2 mt-3 text-sm text-gray-600 sm:mt-0">
          <CalendarDays size={18} className="text-blue-600" />
          <span>{today}</span>
        </div>
      </div>

      {/* ===== Statistik ===== */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Guru"
          value={teachers.length}
          icon={UserCheck}
          color="bg-blue-600"
        />
        <StatsCard
          title="Total Siswa"
          value={students.length}
          icon={Users}
          color="bg-green-600"
        />
        <StatsCard
          title="Total Kelas"
          value={classes.length}
          icon={BookOpen}
          color="bg-purple-600"
        />
      </div>

      {/* ===== Jadwal Hari Ini ===== */}
      <div className="mt-10">
        <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
          🗓️ Jadwal Pelajaran
        </h3>

        {schedule.length === 0 ? (
          <p className="text-gray-500">Belum ada jadwal untuk hari ini.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item) => (
              <div
                key={item.id}
                className="p-5 transition-all duration-200 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-800">
                    {item.subject}
                  </h4>
                  <span className="px-2 py-1 text-xs font-medium text-blue-600 rounded-md bg-blue-50">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600">👨‍🏫 {item.teacher}</p>
                <p className="mt-1 text-sm text-gray-500">🕒 {item.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== Daftar Kelas Singkat ===== */}
      <div className="mt-12">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">🏫 Daftar Kelas</h3>
        <div className="overflow-x-auto bg-white border shadow-sm rounded-xl">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-gray-700 bg-gray-100">
              <tr>
                <th className="px-4 py-3">Nama Kelas</th>
                <th className="px-4 py-3">Guru Pengampu</th>
                <th className="px-4 py-3">Jumlah Siswa</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => {
                const total = students.filter((s) => s.kelas === cls.name).length;
                return (
                  <tr
                    key={cls.id}
                    className="transition-colors border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">{cls.name}</td>
                    <td className="px-4 py-3 text-gray-600">{cls.teacher}</td>
                    <td className="px-4 py-3 text-gray-600">{total} siswa</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
