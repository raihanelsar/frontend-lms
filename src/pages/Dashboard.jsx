import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Calendar as CalendarIcon, Video, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  const [selectedDate, setSelectedDate] = useState(today);

  // Jadwal Kelas
  const schedules = [
    {
      date: weekDays[0],
      class: "Pemrograman Web",
      time: "08:00 - 10:00",
      link: "https://discord.gg/2FqtwpCT",
      platform: "discord",
    },
    {
      date: weekDays[2],
      class: "Desain UI/UX",
      time: "10:00 - 12:00",
      link: "https://meet.google.com/abc-defg-hij",
      platform: "video",
    },
    {
      date: weekDays[4],
      class: "Basis Data",
      time: "09:00 - 11:00",
      link: null,
      platform: null,
    },
  ];

  const formatDate = (d) =>
    d.toLocaleDateString("id-ID", { weekday: "short", day: "numeric" });

  const getScheduleForDate = (date) =>
    schedules.filter((s) => s.date.toDateString() === date.toDateString());

  // Notifikasi otomatis kelas yang akan dimulai
  useEffect(() => {
    const checkUpcomingClasses = () => {
      const now = new Date();

      schedules.forEach((s) => {
        const [startHour, startMinute] = s.time.split(" - ")[0].split(":");
        const classTime = new Date(s.date);
        classTime.setHours(startHour, startMinute, 0, 0);

        const diff = (classTime - now) / (1000 * 60);
        if (diff > 0 && diff <= 10) {
          Swal.fire({
            title: "Kelas akan segera dimulai!",
            html: `
              <p><strong>${s.class}</strong></p>
              <p>Pukul <b>${s.time}</b></p>
              ${
                s.link
                  ? `<a href="${s.link}" target="_blank" class="text-purple-600 underline">Buka Link Kelas</a>`
                  : "<p><i>Belum ada link kelas</i></p>"
              }
            `,
            icon: "info",
            confirmButtonText: "Tutup",
            confirmButtonColor: "#7c3aed",
          });
        }
      });
    };

    const interval = setInterval(checkUpcomingClasses, 60 * 1000);
    checkUpcomingClasses();
    return () => clearInterval(interval);
  }, [schedules]);

  // Daftar Kursus
  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      teacher: "Raihan Elsar",
      desc: "Belajar membuat website interaktif dengan HTML, CSS, dan JS.",
    },
    {
      id: 2,
      title: "Desain UI/UX",
      teacher: "Raihan Elsar",
      desc: "Pelajari dasar desain antarmuka yang menarik dan efektif.",
    },
    {
      id: 3,
      title: "Basis Data",
      teacher: "Raihan Elsar",
      desc: "Mengenal konsep database dan implementasinya dengan MySQL.",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Selamat datang kembali, Raihan Elsar 👋</p>
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kalender Minggu Ini */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-purple-500" /> Jadwal Minggu Ini
          </h2>

          {/* Hari Minggu */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map((day, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(day)}
                className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDate?.toDateString() === day.toDateString()
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                }`}
              >
                {formatDate(day)}
              </motion.button>
            ))}
          </div>

          {/* Jadwal Detail */}
          <div className="space-y-3">
            {getScheduleForDate(selectedDate).length > 0 ? (
              getScheduleForDate(selectedDate).map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-purple-50 border border-purple-200 p-3 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-800">{s.class}</p>
                    <p className="text-sm text-gray-500">{s.time}</p>
                  </div>
                  {s.link && (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800"
                    >
                      {s.platform === "discord" ? (
                        <MessageCircle size={20} />
                      ) : (
                        <Video size={20} />
                      )}
                    </a>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic text-center">
                Tidak ada jadwal pada hari ini
              </p>
            )}
          </div>
        </motion.div>

        {/* Daftar Kursus */}
        <motion.div
          whileHover={{ y: -3 }}
          className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" /> Daftar Kursus
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gray-50 rounded-xl border hover:border-blue-300 hover:shadow transition"
              >
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Oleh {course.teacher}</p>
                <p className="text-sm text-gray-600 mb-3">{course.desc}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Lihat Detail →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
