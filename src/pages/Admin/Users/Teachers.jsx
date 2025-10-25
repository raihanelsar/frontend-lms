import React, { useState } from "react";
import { UserCog, PlusCircle, Edit3, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Teachers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // 🔹 Data dummy guru (tanpa localStorage)
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Budi Santoso", nip: "T1001", subject: "Matematika", phone: "081234567890" },
    { id: 2, name: "Siti Rahmawati", nip: "T1002", subject: "Bahasa Inggris", phone: "081298765432" },
    { id: 3, name: "Andi Pratama", nip: "T1003", subject: "Fisika", phone: "081277700099" },
    { id: 4, name: "Dewi Lestari", nip: "T1004", subject: "Kimia", phone: "081312345678" },
    { id: 5, name: "Rudi Hartono", nip: "T1005", subject: "Biologi", phone: "081355566677" },
  ]);

  // 🔹 Tambah / Edit data guru
  const handleSubmit = (data) => {
    if (editData) {
      // Edit mode
      const updated = teachers.map((t) =>
        t.id === editData.id ? { ...t, ...data } : t
      );
      setTeachers(updated);
      Swal.fire({
        icon: "success",
        title: "Data guru diperbarui!",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      // Tambah baru
      const newTeacher = { id: Date.now(), ...data };
      setTeachers([newTeacher, ...teachers]);
      Swal.fire({
        icon: "success",
        title: "Guru baru ditambahkan!",
        timer: 1000,
        showConfirmButton: false,
      });
    }
    setIsModalOpen(false);
    setEditData(null);
  };

  // 🔹 Hapus data guru
  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus guru ini?",
      text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonText: "Batal",
      confirmButtonText: "Ya, hapus",
    }).then((res) => {
      if (res.isConfirmed) {
        setTeachers(teachers.filter((t) => t.id !== id));
        Swal.fire("Dihapus!", "Data guru telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <UserCog size={22} /> Daftar Guru
        </h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Guru
        </button>
      </div>

      {/* 🔹 Tabel Guru */}
      <div className="overflow-x-auto bg-white border shadow-lg rounded-xl">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="font-semibold text-blue-900 bg-gradient-to-r from-blue-50 to-blue-100">
            <tr>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Nomor Induk Pegawai (NIP)</th>
              <th className="px-4 py-3">Mata Pelajaran</th>
              <th className="px-4 py-3">Nomor HP</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr
                key={t.id}
                className={`transition-all ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {t.name}
                </td>
                <td className="px-4 py-3">{t.nip}</td>
                <td className="px-4 py-3">{t.subject}</td>
                <td className="px-4 py-3">{t.phone}</td>
                <td className="flex justify-center gap-3 px-4 py-3">
                  <button
                    onClick={() => {
                      setEditData(t);
                      setIsModalOpen(true);
                    }}
                    className="p-2 text-blue-600 transition rounded-lg hover:bg-blue-100"
                    title="Edit Guru"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="p-2 text-red-600 transition rounded-lg hover:bg-red-100"
                    title="Hapus Guru"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Jika data kosong */}
        {teachers.length === 0 && (
          <div className="py-6 text-center text-gray-500">
            Belum ada data guru.
          </div>
        )}
      </div>

      {/* 🔹 Modal Tambah/Edit */}
      {isModalOpen && (
        <ModalForm
          title={editData ? "Edit Guru" : "Tambah Guru"}
          onClose={() => {
            setIsModalOpen(false);
            setEditData(null);
          }}
          onSubmit={handleSubmit}
          defaultValues={editData || {}}
          fields={[
            { name: "name", label: "Nama Lengkap", type: "text" },
            { name: "nip", label: "Nomor Induk Pegawai (NIP)", type: "text" },
            { name: "subject", label: "Mata Pelajaran", type: "text" },
            { name: "phone", label: "Nomor HP", type: "text" },
          ]}
        />
      )}
    </div>
  );
}
