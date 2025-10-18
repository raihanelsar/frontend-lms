export default function TeacherStudents() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Teacher & Students</h2>
      <p className="mb-4 text-gray-600">
        Daftar pengajar dan peserta kelas.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 border rounded-lg">
          <h3 className="font-medium">👩‍🏫 Guru</h3>
          <p>Raihan Elsar Kusuma</p>
        </div>
        <div className="p-3 border rounded-lg">
          <h3 className="font-medium">👨‍🎓 Peserta</h3>
          <ul className="pl-5 list-disc">
            <li>Ahmad F.</li>
            <li>Bella N.</li>
            <li>Citra L.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
