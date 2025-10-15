import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import UploadModal from "../components/UploadModal";
<<<<<<< HEAD

function CourseDetail() {
  const { id } = useParams();
  const [showUpload, setShowUpload] = useState(false);

  // Dummy data untuk contoh
  const course = {
    id,
    title: "Tugas 1: Analisis Topologi",
    description:
      "Kumpulkan hasil analisis topologi jaringan yang sudah dibuat. Pastikan file dalam format PDF.",
    type: "tugas",
    content:
      "Materi ini berisi tugas untuk menganalisis topologi jaringan komputer di lingkungan sekolah.",
  };

  return (
    <div className="p-6">
      <Link
        to="/courses"
        className="text-blue-600 hover:underline text-sm mb-4 inline-block"
      >
        ← Kembali ke Courses
      </Link>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <div className="bg-white shadow p-5 rounded-xl mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Isi Modul:</h3>
        <p className="text-gray-700 leading-relaxed">{course.content}</p>
      </div>

      {course.type === "tugas" && (
        <button
          onClick={() => setShowUpload(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upload Tugas
        </button>
      )}

      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </div>
  );
}

export default CourseDetail;
=======
import Swal from "sweetalert2";

export default function CourseDetail() {
  const { id } = useParams();
  const [showUpload, setShowUpload] = useState(false);

  // Dummy data (simulasi ambil data dari database)
  const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      desc: "Belajar HTML, CSS, dan JavaScript untuk membuat website interaktif.",
      teacher: "Raihan Elsar",
      category: "Frontend",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      schedule: "Senin, 08:00 - 10:00",
      discordLink: "https://discord.gg/classroom1",
      content:
        "Materi ini berisi pengenalan dasar HTML, CSS, dan JavaScript. Mahasiswa diminta membuat proyek web sederhana menggunakan struktur dan gaya dasar.",
      type: "tugas",
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
      content:
        "Materi ini membahas konsep dasar basis data, termasuk ERD, relasi, dan implementasi menggunakan MySQL. Mahasiswa akan diminta membuat laporan query SQL.",
      type: "materi",
    },
  ];

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    Swal.fire("Kursus tidak ditemukan", "", "error");
    return (
      <div className="p-6 text-center text-gray-600">
        <Link
          to="/courses"
          className="text-blue-600 hover:underline inline-block mb-4"
        >
          ← Kembali ke Courses
        </Link>
        <p>Kursus dengan ID {id} tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Banner / Header Kursus */}
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-sm opacity-90">{course.desc}</p>
        </div>
      </div>

      {/* Konten Kursus */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link
          to="/courses"
          className="text-blue-600 hover:underline text-sm mb-4 inline-block"
        >
          ← Kembali ke Courses
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <p className="text-gray-700 font-medium">
                👨‍🏫 Pengajar: {course.teacher}
              </p>
              <p className="text-gray-500 text-sm">🗓 {course.schedule}</p>
            </div>
            <span className="mt-3 md:mt-0 bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-lg">
              {course.category}
            </span>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Deskripsi Kursus
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{course.content}</p>

          {course.discordLink && (
            <a
              href={course.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
            >
              🔗 Bergabung ke Kelas Discord
            </a>
          )}
        </div>

        {/* Tugas Section */}
        {course.type === "tugas" && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📄 Tugas
            </h3>
            <p className="text-gray-700 mb-4">
              Kumpulkan hasil analisis proyek sesuai instruksi pada materi ini.
              File dikirim dalam format PDF atau ZIP.
            </p>
            <button
              onClick={() => setShowUpload(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Upload Tugas
            </button>
          </div>
        )}

        {/* Modal Upload */}
        {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
      </div>
    </div>
  );
}
>>>>>>> 8e2d8d9 (update dashboard)
