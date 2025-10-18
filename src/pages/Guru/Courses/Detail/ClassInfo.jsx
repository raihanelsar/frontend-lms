export default function ClassInfo() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Class Information</h2>
      <p className="mb-4 text-gray-600">
        Informasi umum tentang kelas, seperti deskripsi, jadwal, dan tujuan
        pembelajaran.
      </p>

      <ul className="pl-6 space-y-2 text-gray-700 list-disc">
        <li>Nama Kelas: Pemrograman Web</li>
        <li>Guru: Raihan Elsar Kusuma</li>
        <li>Durasi: 6 Minggu</li>
        <li>Deskripsi: Belajar HTML, CSS, dan JavaScript untuk membangun website interaktif.</li>
      </ul>
    </div>
  );
}
