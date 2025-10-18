export default function Quiz() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Quiz</h2>
      <p className="mb-4 text-gray-600">
        Kuis singkat untuk menguji pemahaman siswa terhadap materi yang telah diajarkan.
      </p>

      <div className="p-4 border rounded-lg">
        <p className="mb-2 font-medium">Kuis 1: Dasar HTML</p>
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
          Mulai Kuis
        </button>
      </div>
    </div>
  );
}
