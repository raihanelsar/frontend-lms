export default function Discussion() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Discussions</h2>
      <p className="mb-4 text-gray-600">
        Forum diskusi antara guru dan siswa untuk membahas materi atau tugas.
      </p>

      <div className="space-y-4">
        <div className="p-3 border rounded-lg bg-gray-50">
          <p className="font-medium">Siswa A:</p>
          <p>Apa perbedaan antara tag div dan section?</p>
        </div>

        <textarea
          placeholder="Tulis komentar..."
          className="w-full p-2 border rounded-lg"
        />
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Kirim
        </button>
      </div>
    </div>
  );
}
