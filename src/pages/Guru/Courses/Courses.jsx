import React, { useState } from "react";
import Swal from "sweetalert2";
import CourseCard from "../../../components/Courses/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([
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
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    desc: "",
    teacher: "",
    category: "",
    thumbnail: "",
    schedule: "",
    discordLink: "",
  });

  const handleAddCourse = (e) => {
    e.preventDefault();

    if (!newCourse.title || !newCourse.teacher) {
      Swal.fire("Error", "Nama dan Pengajar harus diisi!", "error");
      return;
    }

    const newData = {
      id: courses.length + 1,
      ...newCourse,
      progress: 0,
    };

    setCourses([...courses, newData]);
    setNewCourse({
      title: "",
      desc: "",
      teacher: "",
      category: "",
      thumbnail: "",
      schedule: "",
      discordLink: "",
    });
    setIsModalOpen(false);

    Swal.fire("Berhasil!", "Kursus berhasil ditambahkan.", "success");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📘 Kelas Saya</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          + Tambah Kursus
        </button>
      </div>

      {/* Grid Kursus */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-sm italic text-gray-500">
            Belum ada kursus yang dibuat.
          </p>
        )}
      </div>

      {/* Modal Tambah Kursus */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Tambah Kursus Baru
            </h2>
            <form onSubmit={handleAddCourse} className="space-y-3">
              {[
                { name: "title", placeholder: "Judul Kursus" },
                { name: "desc", placeholder: "Deskripsi" },
                { name: "teacher", placeholder: "Nama Pengajar" },
                { name: "category", placeholder: "Kategori" },
                { name: "thumbnail", placeholder: "URL Gambar Thumbnail" },
                {
                  name: "schedule",
                  placeholder: "Jadwal (contoh: Selasa, 09:00 - 11:00)",
                },
                {
                  name: "discordLink",
                  placeholder: "Link Discord / VC (opsional)",
                },
              ].map((field) => (
                <input
                  key={field.name}
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  value={newCourse[field.name]}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, [field.name]: e.target.value })
                  }
                />
              ))}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
