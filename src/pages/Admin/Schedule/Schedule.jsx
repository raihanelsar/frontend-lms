import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Calendar, PlusCircle, Trash2, Edit3 } from "lucide-react";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // Ambil jadwal dari localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("schedules")) || [];
    setSchedules(stored);
  }, []);

  // Simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  // Tambah / Edit jadwal
  const handleSubmit = (data) => {
    if (editData) {
      const updated = schedules.map((item) =>
        item.id === editData.id ? { ...item, ...data } : item
      );
      setSchedules(updated);
      setEditData(null);
      Swal.fire({
        icon: "success",
        title: "Jadwal berhasil diperbarui!",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      const newSchedule = {
        id: Date.now(),
        ...data,
      };
      setSchedules([newSchedule, ...schedules]);
      Swal.fire({
        icon: "success",
        title: "Jadwal berhasil ditambahkan!",
        timer: 1000,
        showConfirmButton: false,
      });
    }
    setIsModalOpen(false);
  };

  // Hapus jadwal
  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus jadwal ini?",
      text: "Tindakan ini tidak dapat dibatalkan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc2626",
    }).then((res) => {
      if (res.isConfirmed) {
        const updated = schedules.filter((s) => s.id !== id);
        setSchedules(updated);
        Swal.fire("Terhapus!", "Jadwal telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <Calendar size={22} /> Jadwal Kegiatan
        </h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Jadwal
        </button>
      </div>

      {/* Tabel Jadwal */}
      {schedules.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada jadwal yang ditambahkan.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border shadow-md rounded-xl">
            <thead className="text-gray-700 bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left">Kegiatan</th>
                <th className="px-4 py-2 text-left">Kelas</th>
                <th className="px-4 py-2 text-left">Guru</th>
                <th className="px-4 py-2 text-left">Tanggal</th>
                <th className="px-4 py-2 text-left">Waktu</th>
                <th className="px-4 py-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((s) => (
                <tr key={s.id} className="border-b last:border-none">
                  <td className="px-4 py-2">{s.title}</td>
                  <td className="px-4 py-2">{s.className}</td>
                  <td className="px-4 py-2">{s.teacher}</td>
                  <td className="px-4 py-2">{s.date}</td>
                  <td className="px-4 py-2">{s.time}</td>
                  <td className="flex justify-center gap-2 px-4 py-2 text-center">
                    <button
                      onClick={() => {
                        setEditData(s);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Tambah/Edit */}
      {isModalOpen && (
        <ModalForm
          title={editData ? "Edit Jadwal" : "Tambah Jadwal"}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editData || {}}
          fields={[
            { name: "title", label: "Nama Kegiatan", type: "text" },
            { name: "className", label: "Kelas", type: "text" },
            { name: "teacher", label: "Guru Pengampu", type: "text" },
            { name: "date", label: "Tanggal", type: "date" },
            { name: "time", label: "Waktu", type: "time" },
          ]}
        />
      )}
    </div>
  );
}
