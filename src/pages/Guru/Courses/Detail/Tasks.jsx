import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Membuat Modul Laravel", description: "Menyelesaikan modul backend LMS", due: "2025-10-20" },
    { id: 2, title: "Membuat Komponen React", description: "Menyempurnakan halaman Tasks dengan React", due: "2025-10-25" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due: "",
  });

  // Tambah/Edit Task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === editTask.id ? { ...t, ...formData } : t)));
    } else {
      setTasks([...tasks, { id: Date.now(), ...formData }]);
    }
    resetForm();
  };

  // Hapus Task
  const deleteTask = (id) => {
    if (window.confirm("Yakin ingin menghapus tugas ini?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    setEditTask(task);
    setFormData(task);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({ title: "", description: "", due: "" });
    setEditTask(null);
    setShowModal(false);
  };

  // Filter pencarian
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Daftar Tugas</h1>
          <p className="text-gray-500">Kelola tugas dan kegiatan pembelajaran di sini.</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Cari tugas..."
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
          >
            <FaPlus />
            Tambah Tugas
          </button>
        </div>
      </div>

      {/* Task Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                <p className="mt-2 mb-4 text-sm text-gray-500">{task.description}</p>
              </div>

              <div className="flex items-center justify-between mt-auto text-sm">
                <span className="text-gray-600">🗓️ {task.due || "Tidak ada tenggat"}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Tidak ada tugas yang ditemukan.
          </p>
        )}
      </div>

      {/* Modal Tambah/Edit */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
            <button
              onClick={resetForm}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-800"
            >
              <FaTimes />
            </button>

            <h2 className="mb-4 text-xl font-semibold">
              {editTask ? "Edit Tugas" : "Tambah Tugas"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Judul Tugas"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Deskripsi"
                className="w-full px-3 py-2 border rounded-lg"
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <div>
                <label className="text-sm text-gray-600">Tenggat Waktu:</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 mt-1 border rounded-lg"
                  value={formData.due}
                  onChange={(e) => setFormData({ ...formData, due: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  {editTask ? "Simpan Perubahan" : "Tambah"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
