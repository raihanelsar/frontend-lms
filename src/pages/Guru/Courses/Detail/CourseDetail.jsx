import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

// Import sub-komponen (tab)
import ClassInfo from "./ClassInfo";
import Materials from "./Materials";
import Tasks from "./Tasks";
import Quiz from "./Quiz";
import LearningSession from "./LearningSession";
import Discussion from "./Discussion";
import TeacherStudents from "./TeacherStudents";
import Group from "./Group";
import Grades from "./Grades";

export default function CourseDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("classinfo");

  // Data kursus (dummy) — sama struktur seperti di Courses.jsx
  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      desc: "Belajar HTML, CSS, dan JavaScript untuk membuat website interaktif.",
      teacher: "Raihan Elsar",
      category: "Frontend",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      schedule: "Senin, 08:00 - 10:00",
      discordLink: "https://discord.gg/2FqtwpCT",
      progress: 60,
    },
    {
      id: 2,
      title: "Database",
      desc: "Mengenal konsep dan praktik SQL serta manajemen basis data.",
      teacher: "Raihan Elsar",
      category: "Backend",
      thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
      schedule: "Rabu, 10:00 - 12:00",
      discordLink: "",
      progress: 40,
    },
  ];

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
  Swal.fire("Kursus tidak ditemukan", "", "error");
  return (
    <div className="p-6 text-center text-gray-600">
      <Link
        to="/guru"
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        ← Kembali ke Dashboard
      </Link>
      <p>Kursus dengan ID {id} tidak ditemukan.</p>
    </div>
  );
}

  // Tabs navigasi
  const tabs = [
    { key: "classinfo", label: "Class Info" },
    { key: "materials", label: "Materials" },
    { key: "tasks", label: "Tasks" },
    { key: "quiz", label: "Quiz" },
    { key: "learningsession", label: "Learning Session" },
    { key: "discussion", label: "Discussion" },
    { key: "teacherstudents", label: "Teacher & Students" },
    { key: "group", label: "Group" },
    { key: "grades", label: "Grades" },
  ];

  // Konten tiap tab
  const renderContent = () => {
    switch (activeTab) {
      case "classinfo":
        return <ClassInfo course={course} />;
      case "materials":
        return <Materials course={course} />;
      case "tasks":
        return <Tasks course={course} />;
      case "quiz":
        return <Quiz course={course} />;
      case "learningsession":
        return <LearningSession course={course} />;
      case "discussion":
        return <Discussion course={course} />;
      case "teacherstudents":
        return <TeacherStudents course={course} />;
      case "group":
        return <Group course={course} />;
      case "grades":
        return <Grades course={course} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Header */}
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="object-cover w-full h-64"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
          <h1 className="mb-2 text-3xl font-bold">{course.title}</h1>
          <p className="text-sm opacity-90">{course.desc}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <Link
          to="/guru/courses"
          className="inline-block mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Kembali ke Courses
        </Link>

        {/* Info utama */}
        <div className="p-6 mb-6 bg-white shadow-sm rounded-xl">
          <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
            <div>
              <p className="font-medium text-gray-700">
                👨‍🏫 Pengajar: {course.teacher}
              </p>
              <p className="text-sm text-gray-500">🗓 {course.schedule}</p>
            </div>
            <span className="px-3 py-1 mt-3 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg md:mt-0">
              {course.category}
            </span>
          </div>

          {course.discordLink && (
            <a
              href={course.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              🔗 Bergabung ke Kelas Discord
            </a>
          )}
        </div>

        {/* Tabs Navigasi */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Konten Tab Aktif */}
        <div className="p-6 transition-all bg-white shadow-md rounded-2xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
