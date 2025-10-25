import React, { useEffect, useState } from "react";
import { PlusCircle, Users, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  // 🔹 Dummy data awal
  useEffect(() => {
    const defaultClasses = [
      { id: 1, name: "X IPA 1", subject: "Matematika", teacher: "Budi Santoso", createdAt: "01 Okt 2025" },
      { id: 2, name: "X IPA 2", subject: "Bahasa Inggris", teacher: "Siti Rahmawati", createdAt: "02 Okt 2025" },
      { id: 3, name: "X IPS 1", subject: "Ekonomi", teacher: "Ahmad Fauzan", createdAt: "03 Okt 2025" },
      { id: 4, name: "X IPS 2", subject: "Sosiologi", teacher: "Lina Mulyani", createdAt: "04 Okt 2025" },
      { id: 5, name: "X Bahasa", subject: "Bahasa Indonesia", teacher: "Rahmat Hidayat", createdAt: "05 Okt 2025" },
    ];

    const dummyStudents = [
      // X IPA 1
      ...[
        "Rafi Ahmad","Dina Lestari","Reza Maulana","Putri Aulia","Galih Saputra",
        "Intan Permata","Arif Setiawan","Maya Sari","Budi Rahman","Salsa Putri",
      ].map((name, i) => ({
        id: i + 1,
        name,
        nis: `100${i + 1}`,
        kelas: "X IPA 1",
        phone: `0812310000${i + 1}`,
      })),

      // X IPA 2
      ...[
        "Andi Saputra","Lina Marlina","Rizky Fadillah","Nanda Putra","Tasya Amelia",
        "Fahmi Zulkifli","Dea Kartika","Gilang Ramadhan","Nur Aini","Yudha Pratama",
      ].map((name, i) => ({
        id: 100 + i + 1,
        name,
        nis: `200${i + 1}`,
        kelas: "X IPA 2",
        phone: `0812410000${i + 1}`,
      })),

      // X IPS 1
      ...[
        "Rama Dwi","Citra Dewi","Hendra Kusuma","Santi Lestari","Yoga Prasetyo",
        "Tika Wulandari","Fadil Ramli","Reni Agustina","Dafa Nugraha","Anisa Putri",
      ].map((name, i) => ({
        id: 200 + i + 1,
        name,
        nis: `300${i + 1}`,
        kelas: "X IPS 1",
        phone: `0812510000${i + 1}`,
      })),

      // X IPS 2
      ...[
        "Adit Firmansyah","Lala Syafira","Rian Kurniawan","Sinta Rahma","Eko Wijaya",
        "Tari Melati","Bayu Seto","Rizka Ayu","Iqbal Maulana","Mega Sari",
      ].map((name, i) => ({
        id: 300 + i + 1,
        name,
        nis: `400${i + 1}`,
        kelas: "X IPS 2",
        phone: `0812610000${i + 1}`,
      })),

      // X Bahasa
      ...[
        "Nadia Rahman","Rafiq Hidayat","Tia Andriani","Bagus Prakoso","Mira Oktaviani",
        "Rehan Putra","Cici Marlina","Dimas Ardi","Sarah Amelia","Zaki Ramadhan",
      ].map((name, i) => ({
        id: 400 + i + 1,
        name,
        nis: `500${i + 1}`,
        kelas: "X Bahasa",
        phone: `0812710000${i + 1}`,
      })),
    ];

    setClasses(defaultClasses);
    setStudents(dummyStudents);
  }, []);

  // 🔹 Ambil siswa berdasarkan kelas
  const getStudentsByClass = (className) =>
    students.filter((s) => s.kelas === className);

  // 🔹 Tambah kelas baru
  const handleAddClass = (data) => {
    const exists = classes.find(
      (cls) => cls.name.toLowerCase() === data.name.toLowerCase()
    );
    if (exists) {
      Swal.fire({
        icon: "warning",
        title: "Nama kelas sudah ada!",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    const newClass = {
      id: Date.now(),
      name: data.name,
      subject: data.subject,
      teacher: data.teacher,
      createdAt: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setClasses([newClass, ...classes]);
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Kelas berhasil ditambahkan!",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  // 🔹 Hapus kelas
  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus kelas ini?",
      text: "Data akan hilang secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc2626",
    }).then((res) => {
      if (res.isConfirmed) {
        setClasses(classes.filter((cls) => cls.id !== id));
        Swal.fire("Terhapus!", "Kelas telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">📚 Daftar Kelas</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Kelas
        </button>
      </div>

      {/* Daftar kelas */}
      {classes.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada kelas yang ditambahkan.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => {
            const studentCount = getStudentsByClass(cls.name).length;
            return (
              <div
                key={cls.id}
                className="p-5 transition-all duration-200 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {cls.name}
                  </h2>
                  <span className="px-2 py-1 text-xs text-blue-600 rounded-md bg-blue-50">
                    {cls.subject}
                  </span>
                </div>

                <p className="text-sm text-gray-600">👨‍🏫 {cls.teacher}</p>
                <p className="mt-1 text-xs text-gray-400">📅 {cls.createdAt}</p>

                <div className="flex items-center justify-between mt-5">
                  <p className="text-sm font-medium text-gray-700">
                    👥 {studentCount} siswa
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedClass(cls)}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <Users size={16} /> Detail
                    </button>
                    <button
                      onClick={() => handleDelete(cls.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Tambah Kelas */}
      {isModalOpen && (
        <ModalForm
          title="Tambah Kelas"
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddClass}
          fields={[
            { name: "name", label: "Nama Kelas", type: "text" },
            { name: "subject", label: "Mata Pelajaran", type: "text" },
            { name: "teacher", label: "Guru Pengampu", type: "text" },
          ]}
        />
      )}

      {/* Modal Detail Kelas */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
            <h2 className="mb-3 text-xl font-bold text-gray-800">
              {selectedClass.name} — {selectedClass.subject}
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              👨‍🏫 {selectedClass.teacher} <br /> 📅 {selectedClass.createdAt}
            </p>

            {getStudentsByClass(selectedClass.name).length === 0 ? (
              <p className="text-center text-gray-500">
                Belum ada siswa dalam kelas ini.
              </p>
            ) : (
              <div className="overflow-y-auto border border-gray-100 rounded-lg max-h-64">
                <table className="w-full text-sm">
                  <thead className="text-gray-700 bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left">Nama</th>
                      <th className="px-3 py-2 text-left">NIS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getStudentsByClass(selectedClass.name).map((s) => (
                      <tr
                        key={s.id}
                        className="transition border-t hover:bg-gray-50"
                      >
                        <td className="px-3 py-2">{s.name}</td>
                        <td className="px-3 py-2">{s.nis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex justify-end mt-5">
              <button
                onClick={() => setSelectedClass(null)}
                className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
