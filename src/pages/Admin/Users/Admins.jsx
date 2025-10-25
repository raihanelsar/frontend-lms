import React, { useEffect, useState } from "react";
import { Shield, PlusCircle, Edit3, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ModalForm from "../../../components/Admin/ModalForm";

export default function Admins() {
  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("admins")) || [];
    setAdmins(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins));
  }, [admins]);

  const handleSubmit = (data) => {
    if (editData) {
      const updated = admins.map((a) => (a.id === editData.id ? { ...a, ...data } : a));
      setAdmins(updated);
      setEditData(null);
      Swal.fire({ icon: "success", title: "Data admin diperbarui!", timer: 1000, showConfirmButton: false });
    } else {
      const newAdmin = { id: Date.now(), ...data, role: "admin" };
      setAdmins([newAdmin, ...admins]);
      Swal.fire({ icon: "success", title: "Admin baru ditambahkan!", timer: 1000, showConfirmButton: false });
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        const updated = admins.filter((a) => a.id !== id);
        setAdmins(updated);
        Swal.fire("Dihapus!", "Data admin telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
          <Shield size={22} /> Daftar Admin
        </h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Admin
        </button>
      </div>

      {admins.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada admin yang ditambahkan.</p>
      ) : (
        <table className="w-full bg-white border shadow-md rounded-xl">
          <thead className="text-gray-700 bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id} className="border-b last:border-none">
                <td className="px-4 py-2">{a.name}</td>
                <td className="px-4 py-2">{a.email}</td>
                <td className="flex justify-center gap-2 px-4 py-2 text-center">
                  <button
                    onClick={() => {
                      setEditData(a);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && (
        <ModalForm
          title={editData ? "Edit Admin" : "Tambah Admin"}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editData || {}}
          fields={[
            { name: "name", label: "Nama Lengkap", type: "text" },
            { name: "email", label: "Email", type: "email" },
          ]}
        />
      )}
    </div>
  );
}
