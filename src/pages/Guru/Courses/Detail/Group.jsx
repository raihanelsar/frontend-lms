export default function Group() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Groups</h2>
      <p className="mb-4 text-gray-600">
        Kelompok belajar siswa untuk proyek atau diskusi kolaboratif.
      </p>

      <ul className="space-y-3">
        <li className="p-3 border rounded-lg hover:bg-gray-50">
          <p className="font-medium">Kelompok 1</p>
          <p className="text-sm text-gray-500">Ahmad, Bella, Citra</p>
        </li>
        <li className="p-3 border rounded-lg hover:bg-gray-50">
          <p className="font-medium">Kelompok 2</p>
          <p className="text-sm text-gray-500">Dina, Eko, Farhan</p>
        </li>
      </ul>
    </div>
  );
}
