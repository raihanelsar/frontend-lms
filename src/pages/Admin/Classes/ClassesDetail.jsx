import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ClassesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cls, setCls] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // 🔹 Ambil semua kelas dari localStorage
    const storedClasses = JSON.parse(localStorage.getItem("classes")) || [];
    const selected = storedClasses.find((c) => c.id === Number(id));
    setCls(selected);

    // 🔹 Ambil data siswa
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

    // 🔹 Filter siswa berdasarkan kelas
    if (selected && storedStudents.length > 0) {
      const classStudents = storedStudents.filter(
        (s) => s.kelas === selected.name
      );
      setStudents(classStudents);
    }
  }, [id]);

  if (!cls) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Kelas tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Tombol kembali & judul */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={18} /> Kembali
        </button>
        <h1 className="text-2xl font-bold text-gray-800">{cls.name}</h1>
      </div>

      {/* Info kelas */}
      <div className="p-5 bg-white border shadow-md rounded-xl">
        <p>
          <span className="font-semibold">Mata Pelajaran:</span> {cls.subject}
        </p>
        <p>
          <span className="font-semibold">Guru Pengampu:</span> {cls.teacher}
        </p>
        <p>
          <span className="font-semibold">Tanggal Dibuat:</span> {cls.createdAt}
        </p>
      </div>

      {/* Daftar siswa */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-gray-800">
          Daftar Siswa
        </h2>

        <div className="p-5 bg-white border shadow-md rounded-xl">
          {students.length === 0 ? (
            <p className="text-sm text-gray-500">
              Belum ada siswa di kelas ini.
            </p>
          ) : (
            <ul className="divide-y">
              {students.map((s, i) => (
                <li key={s.id} className="flex justify-between py-2">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.nis}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
