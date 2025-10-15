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

<<<<<<< HEAD
=======
  // Statistik dummy
>>>>>>> 8e2d8d9 (update dashboard)
  const stats = [
    { label: "Kursus", value: 5 },
    { label: "Materi", value: 18 },
    { label: "Tugas", value: 12 },
  ];

  const handleSave = () => {
    setOpenModal(false);
<<<<<<< HEAD
  };

  return (
    <div className="max-w-4xl p-4 mx-auto md:p-6">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 md:text-left">
        👤 Profil Pengguna
      </h2>

      <div className="p-6 bg-white shadow-md rounded-xl sm:p-8">
        {/* Header Profil */}
        <div className="flex flex-col items-center gap-4 mb-6 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
=======
    // Nanti bisa disambungkan ke API PUT /api/user
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">👤 Profil Pengguna</h2>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg">
        {/* --- Header Profil --- */}
        <div className="flex items-center gap-5 mb-6">
>>>>>>> 8e2d8d9 (update dashboard)
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              profile.name
            )}&background=0D8ABC&color=fff&size=100`}
            alt="Profile"
<<<<<<< HEAD
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {profile.name}
            </h3>
            <p className="text-sm text-gray-500">{profile.desc}</p>
          </div>
        </div>

        {/* Informasi Dasar */}
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Institusi:</strong> {profile.institusi}
          </p>
          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-3 gap-3 mt-6 text-center sm:gap-4">
          {stats.map((item, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-xl sm:p-4">
              <p className="text-xl font-bold text-blue-600 sm:text-2xl">
                {item.value}
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">{item.label}</p>
=======
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
>>>>>>> 8e2d8d9 (update dashboard)
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Tombol Edit */}
        <div className="mt-6 text-center sm:text-right">
          <button
            onClick={() => setOpenModal(true)}
            className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
=======
        {/* --- Tombol Edit --- */}
        <div className="mt-6 text-right">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>>>>>>> 8e2d8d9 (update dashboard)
          >
            Edit Profil
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Modal Edit */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
=======
      {/* === Modal Edit Profil === */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
>>>>>>> 8e2d8d9 (update dashboard)
              Edit Profil
            </h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={profile.name}
<<<<<<< HEAD
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
=======
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
>>>>>>> 8e2d8d9 (update dashboard)
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
<<<<<<< HEAD
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
=======
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
>>>>>>> 8e2d8d9 (update dashboard)
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
<<<<<<< HEAD
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
=======
              className="w-full border rounded-lg p-2 mb-3 focus:ring focus:ring-blue-200"
>>>>>>> 8e2d8d9 (update dashboard)
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
<<<<<<< HEAD
              className="w-full p-2 mb-4 border rounded-lg focus:ring focus:ring-blue-200"
=======
              className="w-full border rounded-lg p-2 mb-4 focus:ring focus:ring-blue-200"
>>>>>>> 8e2d8d9 (update dashboard)
            >
              <option>Pengajar</option>
              <option>Siswa</option>
              <option>Admin</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
<<<<<<< HEAD
                className="px-3 py-2 transition border border-gray-300 rounded-lg hover:bg-gray-100"
=======
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
>>>>>>> 8e2d8d9 (update dashboard)
              >
                Batal
              </button>
              <button
                onClick={handleSave}
<<<<<<< HEAD
                className="px-3 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
=======
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
>>>>>>> 8e2d8d9 (update dashboard)
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
