import React, { useState } from "react";
import Swal from "sweetalert2";

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
    <div className="min-h-screen bg-gray-50 pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Kursus</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            + Tambah Kursus
          </button>
        </div>

        {/* Grid Kursus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{course.desc}</p>
                <p className="text-sm text-gray-600 mb-2">👨‍🏫 {course.teacher}</p>
                <p className="text-sm text-gray-600 mb-3">🗓 {course.schedule}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  {course.discordLink && (
                    <a
                      href={course.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      🔗 Masuk Kelas
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Tambah Kursus */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Tambah Kursus Baru
            </h2>
            <form onSubmit={handleAddCourse} className="space-y-3">
              <input
                type="text"
                placeholder="Judul Kursus"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Deskripsi"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.desc}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, desc: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Nama Pengajar"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.teacher}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, teacher: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Kategori"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.category}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, category: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL Gambar Thumbnail"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.thumbnail}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, thumbnail: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Jadwal (contoh: Selasa, 09:00 - 11:00)"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.schedule}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, schedule: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Link Discord / VC (opsional)"
                className="w-full border px-3 py-2 rounded-lg"
                value={newCourse.discordLink}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, discordLink: e.target.value })
                }
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
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
