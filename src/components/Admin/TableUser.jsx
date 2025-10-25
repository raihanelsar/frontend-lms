import React from "react";
import { Edit3, Trash2 } from "lucide-react";

export default function TableUser({ data, onEdit, onDelete }) {
  if (!data || data.length === 0)
    return (
      <p className="py-6 text-center text-gray-500">
        Tidak ada data yang ditampilkan.
      </p>
    );

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="w-full border-collapse">
        <thead className="text-gray-700 bg-blue-100">
          <tr>
            <th className="px-4 py-2 text-left">Nama</th>
            <th className="px-4 py-2 text-left">NIS / Email</th>
            <th className="px-4 py-2 text-left">Kelas / Role</th>
            <th className="px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="transition-colors border-b hover:bg-gray-50"
            >
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.nis || user.email || "-"}</td>
              <td className="px-4 py-2">{user.kelas || user.role}</td>
              <td className="flex justify-center gap-2 px-4 py-2 text-center">
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
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
  );
}
