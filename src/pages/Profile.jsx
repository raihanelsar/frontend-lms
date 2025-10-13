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

  const stats = [
    { label: "Kursus", value: 5 },
    { label: "Materi", value: 18 },
    { label: "Tugas", value: 12 },
  ];

  const handleSave = () => {
    setOpenModal(false);
  };

  return (
    <div className="max-w-4xl p-4 mx-auto md:p-6">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 md:text-left">
        👤 Profil Pengguna
      </h2>

      <div className="p-6 bg-white shadow-md rounded-xl sm:p-8">
        {/* Header Profil */}
        <div className="flex flex-col items-center gap-4 mb-6 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              profile.name
            )}&background=0D8ABC&color=fff&size=100`}
            alt="Profile"
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
            </div>
          ))}
        </div>

        {/* Tombol Edit */}
        <div className="mt-6 text-center sm:text-right">
          <button
            onClick={() => setOpenModal(true)}
            className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Edit Profil
          </button>
        </div>
      </div>

      {/* Modal Edit */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Edit Profil
            </h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
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
              className="w-full p-2 mb-3 border rounded-lg focus:ring focus:ring-blue-200"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded-lg focus:ring focus:ring-blue-200"
            >
              <option>Pengajar</option>
              <option>Siswa</option>
              <option>Admin</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-2 transition border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
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
