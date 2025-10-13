import React, { useState } from "react";
import { FaFileAlt, FaVideo, FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

export default function Materials() {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Pengenalan HTML",
      desc: "Dasar struktur HTML dan elemen penting dalam pembuatan website.",
      type: "video",
      course: "Pemrograman Web",
    },
    {
      id: 2,
      title: "Struktur Database",
      desc: "Konsep tabel, kolom, dan relasi dalam database MySQL.",
      type: "file",
      course: "Database",
    },
    {
      id: 3,
      title: "Variabel dan Tipe Data",
      desc: "Dasar penggunaan variabel di dalam Python.",
      type: "video",
      course: "Python Dasar",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMaterial, setEditMaterial] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    type: "video",
    course: "",
  });

  // Tambah atau Edit Materi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMaterial) {
      setMaterials(materials.map((m) => (m.id === editMaterial.id ? { ...m, ...formData } : m)));
    } else {
      setMaterials([...materials, { id: Date.now(), ...formData }]);
    }
    resetForm();
  };

  // Hapus Materi
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus materi ini?")) {
      setMaterials(materials.filter((m) => m.id !== id));
    }
  };

  // Edit Materi
  const handleEdit = (material) => {
    setEditMaterial(material);
    setFormData(material);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({ title: "", desc: "", type: "video", course: "" });
    setEditMaterial(null);
    setShowModal(false);
  };

  // Filter pencarian
  const filteredMaterials = materials.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Materi Pembelajaran</h1>
          <p className="text-gray-500">Kelola semua materi dari setiap kursus di sini.</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Cari materi..."
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            <FaPlus />
            Tambah Materi
          </button>
        </div>
      </div>

      {/* Grid Materials */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.type === "video" ? (
                  <FaVideo className="text-blue-500 text-2xl" />
                ) : (
                  <FaFileAlt className="text-green-500 text-2xl" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.course}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 flex-1">{item.desc}</p>

              <div className="flex justify-between items-center text-sm mt-auto">
                <span className="text-gray-500 capitalize">
                  📁 {item.type === "video" ? "Video" : "Dokumen"}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">Materi tidak ditemukan.</p>
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
              {editMaterial ? "Edit Materi" : "Tambah Materi"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Judul Materi"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Deskripsi Materi"
                className="w-full border px-3 py-2 rounded-lg"
                rows="3"
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Nama Kursus"
                className="w-full border px-3 py-2 rounded-lg"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                required
              />
              <div>
                <label className="text-sm text-gray-600">Tipe Materi:</label>
                <select
                  className="w-full border px-3 py-2 rounded-lg mt-1"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="video">Video</option>
                  <option value="file">Dokumen</option>
                </select>
              </div>

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
                  {editMaterial ? "Simpan Perubahan" : "Tambah"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
