// src/pages/Profile.jsx
import React, { useState } from "react";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [profile, setProfile] = useState({
    name: "Raihan Elsar Kusuma",
    email: "raihanelsar@lms.com",
    institusi: "Universitas Muhammadiyah Jakarta",
    role: "Pengajar",
    desc: "Mahasiswa Teknologi Pendidikan",
  });

  // Statistik dummy
  const stats = [
    { label: "Kursus", value: 5 },
    { label: "Materi", value: 18 },
    { label: "Tugas", value: 12 },
  ];

  const handleSave = () => {
    setOpenModal(false);
    // Nanti bisa disambungkan ke API PUT /api/user
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">👤 Profil Pengguna</h2>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg">
        {/* --- Header Profil --- */}
        <div className="flex items-center gap-5 mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              profile.name
            )}&background=0D8ABC&color=fff&size=100`}
            alt="Profile"
            className="rounded-full w-20 h-20"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
            <p className="text-gray-500 text-sm">{profile.desc}</p>
          </div>
        </div>

        {/* --- Informasi Dasar --- */}
        <div className="space-y-3 text-gray-700">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Institusi:</strong> {profile.institusi}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>

        {/* --- Statistik Mini --- */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          {stats.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-3">
              <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* --- Tombol Edit --- */}
        <div className="mt-6 text-right">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profil
          </button>
        </div>
      </div>

      {/* === Modal Edit Profil === */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Edit Profil
            </h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Institusi
            </label>
            <input
              type="text"
              value={profile.institusi}
              onChange={(e) =>
                setProfile({ ...profile, institusi: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-4 focus:ring focus:ring-blue-200"
            >
              <option>Pengajar</option>
              <option>Siswa</option>
              <option>Admin</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
