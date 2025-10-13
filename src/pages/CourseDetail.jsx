import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import UploadModal from "../components/UploadModal";

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
