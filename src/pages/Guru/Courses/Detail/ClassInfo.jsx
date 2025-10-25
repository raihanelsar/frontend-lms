export default function ClassInfo({ course }) {
  if (!course) {
    return (
      <div className="text-center text-gray-600">
        <p>Data kelas tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Info Kelas</h2>
      <p className="mb-4 text-gray-600">
        Informasi umum tentang kelas <span className="font-medium text-blue-600">{course.title}</span>, 
        termasuk deskripsi, jadwal, dan tujuan pembelajaran.
      </p>

      <ul className="pl-6 space-y-2 text-gray-700 list-disc">
        <li>
          <span className="font-semibold">Nama Kelas:</span> {course.title}
        </li>
        <li>
          <span className="font-semibold">Guru:</span> {course.teacher}
        </li>
        <li>
          <span className="font-semibold">Kategori:</span> {course.category}
        </li>
        <li>
          <span className="font-semibold">Durasi/Jadwal:</span> {course.schedule}
        </li>
        <li>
          <span className="font-semibold">Deskripsi:</span> {course.desc}
        </li>
      </ul>

      {course.discordLink ? (
        <div className="mt-4">
          <a
            href={course.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            🔗 Bergabung ke Kelas Discord
          </a>
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">
          🔕 Kelas ini belum memiliki link Discord.
        </p>
      )}
    </div>
  );
}
