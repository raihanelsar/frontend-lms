import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Courses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Pemrograman Web",
      desc: "Belajar HTML, CSS, dan JavaScript untuk membuat website interaktif.",
      teacher: "Raihan Elsar",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Database",
      desc: "Mengenal MySQL, relasi tabel, dan query dasar.",
      teacher: "Raihan Elsar",
      category: "Database",
    },
    {
      id: 3,
      title: "Python Dasar",
      desc: "Dasar logika pemrograman dan algoritma menggunakan Python.",
      teacher: "Raihan Elsar",
      category: "Programming",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    teacher: "",
    category: "",
  });

  // Handle Tambah/Edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editCourse) {
      setCourses(
        courses.map((c) =>
          c.id === editCourse.id ? { ...c, ...formData } : c
        )
      );
    } else {
      setCourses([
        ...courses,
        { id: Date.now(), ...formData },
      ]);
    }
    resetForm();
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setFormData(course);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus kursus ini?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ title: "", desc: "", teacher: "", category: "" });
    setEditCourse(null);
    setShowModal(false);
  };

  // Filter berdasarkan pencarian
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Daftar Kursus</h1>
          <p className="text-gray-500">
            Kelola semua kursus pembelajaran di sini.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Cari kursus..."
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            <FaPlus />
            Tambah Kursus
          </button>
        </div>
      </div>

      {/* Grid Course Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2 mb-4">{course.desc}</p>
              </div>

              <div className="flex justify-between items-center text-sm mt-auto">
                <span className="text-gray-600">👨‍🏫 {course.teacher}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(course)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Kursus tidak ditemukan.
          </p>
        )}
      </div>

      {/* Modal Tambah/Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            <button
              onClick={resetForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <FaTimes />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {editCourse ? "Edit Kursus" : "Tambah Kursus"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Judul Kursus"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Deskripsi"
                className="w-full border px-3 py-2 rounded-lg"
                rows="3"
                value={formData.desc}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Nama Pengajar"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.teacher}
                onChange={(e) =>
                  setFormData({ ...formData, teacher: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Kategori (misal: Frontend, Database)"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  {editCourse ? "Simpan Perubahan" : "Tambah"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
