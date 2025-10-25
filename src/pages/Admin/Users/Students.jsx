import React, { useState } from "react";
import { Users, PlusCircle, Edit3, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Students() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // 🔹 Data dummy siswa (5 kelas × 10 siswa)
  const [students, setStudents] = useState([
  // X IPA 1
  ...[
    "Rafi Ahmad",
    "Dina Lestari",
    "Reza Maulana",
    "Putri Aulia",
    "Galih Saputra",
  ].map((name, i) => ({
    id: i + 1,
    name,
    nis: `100${i + 1}`,
    kelas: "X IPA 1",
    phone: `0812310000${i + 1}`,
  })),

  // X IPA 2
  ...[
    "Andi Saputra",
    "Lina Marlina",
    "Rizky Fadillah",
    "Nanda Putra",
    "Tasya Amelia",
  ].map((name, i) => ({
    id: 100 + i + 1,
    name,
    nis: `200${i + 1}`,
    kelas: "X IPA 2",
    phone: `0812410000${i + 1}`,
  })),

  // X IPS 1
  ...[
    "Rama Dwi",
    "Citra Dewi",
    "Hendra Kusuma",
    "Santi Lestari",
    "Yoga Prasetyo",
  ].map((name, i) => ({
    id: 200 + i + 1,
    name,
    nis: `300${i + 1}`,
    kelas: "X IPS 1",
    phone: `0812510000${i + 1}`,
  })),

  // X IPS 2
  ...[
    "Adit Firmansyah",
    "Lala Syafira",
    "Rian Kurniawan",
    "Sinta Rahma",
    "Eko Wijaya",
  ].map((name, i) => ({
    id: 300 + i + 1,
    name,
    nis: `400${i + 1}`,
    kelas: "X IPS 2",
    phone: `0812610000${i + 1}`,
  })),

  // X Bahasa
  ...[
    "Nadia Rahman",
    "Rafiq Hidayat",
    "Tia Andriani",
    "Bagus Prakoso",
    "Mira Oktaviani",
  ].map((name, i) => ({
    id: 400 + i + 1,
    name,
    nis: `500${i + 1}`,
    kelas: "X Bahasa",
    phone: `0812710000${i + 1}`,
  })),
]);


  // 🔹 Tambah / Edit data siswa
  const handleSubmit = (data) => {
    if (editData) {
      const updated = students.map((s) =>
        s.id === editData.id ? { ...s, ...data } : s
      );
      setStudents(updated);
      Swal.fire({
        icon: "success",
        title: "Data siswa diperbarui!",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      const newStudent = { id: Date.now(), ...data };
      setStudents([newStudent, ...students]);
      Swal.fire({
        icon: "success",
        title: "Siswa baru ditambahkan!",
        timer: 1000,
        showConfirmButton: false,
      });
    }
    setIsModalOpen(false);
    setEditData(null);
  };

  // 🔹 Hapus siswa
  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus siswa ini?",
      text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonText: "Batal",
      confirmButtonText: "Ya, hapus",
    }).then((res) => {
      if (res.isConfirmed) {
        setStudents(students.filter((s) => s.id !== id));
        Swal.fire("Dihapus!", "Data siswa telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <Users size={22} /> Daftar Siswa
        </h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700"
        >
          <PlusCircle size={18} /> Tambah Siswa
        </button>
      </div>

      {/* 🔹 Tabel Siswa */}
      <div className="overflow-x-auto bg-white border shadow-lg rounded-xl">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="font-semibold text-green-900 bg-gradient-to-r from-green-50 to-green-100">
            <tr>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Nomor Induk Siswa (NIS)</th>
              <th className="px-4 py-3">Kelas</th>
              <th className="px-4 py-3">Nomor HP</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.id}
                className={`transition-all ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-green-50`}
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {s.name}
                </td>
                <td className="px-4 py-3">{s.nis}</td>
                <td className="px-4 py-3">{s.kelas}</td>
                <td className="px-4 py-3">{s.phone}</td>
                <td className="flex justify-center gap-3 px-4 py-3">
                  <button
                    onClick={() => {
                      setEditData(s);
                      setIsModalOpen(true);
                    }}
                    className="p-2 text-green-600 transition rounded-lg hover:bg-green-100"
                    title="Edit Siswa"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="p-2 text-red-600 transition rounded-lg hover:bg-red-100"
                    title="Hapus Siswa"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Jika data kosong */}
        {students.length === 0 && (
          <div className="py-6 text-center text-gray-500">
            Belum ada data siswa.
          </div>
        )}
      </div>

      {/* 🔹 Modal Tambah/Edit */}
      {isModalOpen && (
        <ModalForm
          title={editData ? "Edit Siswa" : "Tambah Siswa"}
          onClose={() => {
            setIsModalOpen(false);
            setEditData(null);
          }}
          onSubmit={handleSubmit}
          defaultValues={editData || {}}
          fields={[
            { name: "name", label: "Nama Lengkap", type: "text" },
            { name: "nis", label: "Nomor Induk Siswa (NIS)", type: "text" },
            { name: "kelas", label: "Kelas", type: "text" },
            { name: "phone", label: "Nomor HP", type: "text" },
          ]}
        />
      )}
    </div>
  );
}
