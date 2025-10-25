import React, { useEffect, useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ambil data dari localStorage saat pertama kali render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedData);
  }, []);

  // Simpan ke localStorage setiap kali ada perubahan data
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  const handleAddAnnouncement = (newData) => {
    const newAnnouncement = {
      id: Date.now(),
      title: newData.title,
      content: newData.content,
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setIsModalOpen(false);

    Swal.fire({
      icon: "success",
      title: "Pengumuman ditambahkan!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus pengumuman ini?",
      text: "Tindakan ini tidak bisa dibatalkan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = announcements.filter((a) => a.id !== id);
        setAnnouncements(updatedData);
        Swal.fire("Terhapus!", "Pengumuman telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Daftar Pengumuman</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Pengumuman
        </button>
      </div>

      {/* List Announcement */}
      {announcements.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          Belum ada pengumuman yang ditambahkan.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="p-5 transition bg-white border shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-600"
                  title="Hapus pengumuman"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.content}</p>
              <p className="mt-3 text-xs text-gray-400">📅 {item.date}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal Tambah Pengumuman */}
      {isModalOpen && (
        <ModalForm
          title="Tambah Pengumuman"
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddAnnouncement}
          fields={[
            { name: "title", label: "Judul Pengumuman", type: "text" },
            { name: "content", label: "Isi Pengumuman", type: "textarea" },
          ]}
        />
      )}
    </div>
  );
}
