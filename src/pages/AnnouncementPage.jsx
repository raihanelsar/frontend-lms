import React, { useEffect, useState } from "react";

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Contoh data dummy (nanti bisa diganti fetch API)
    setAnnouncements([
      {
        id: 1,
        title: "Jadwal Ujian Tengah Semester",
        date: "2025-10-15",
        content: "UTS akan dimulai pada tanggal 20 Oktober. Pastikan sudah mempersiapkan diri.",
      },
      {
        id: 2,
        title: "Perubahan Jadwal Kelas",
        date: "2025-10-10",
        content: "Kelas Pemrograman Web dipindahkan ke hari Jumat pukul 10.00.",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">📢 Announcements</h1>

      {announcements.length > 0 ? (
        <div className="space-y-4">
          {announcements.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="mt-2 text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada pengumuman.</p>
      )}
    </div>
  );
};

export default AnnouncementPage;
