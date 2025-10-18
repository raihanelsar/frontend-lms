export default function Grades() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Grades</h2>
      <p className="mb-4 text-gray-600">Nilai hasil evaluasi siswa.</p>

      <table className="w-full border border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Tugas</th>
            <th className="p-2 border">Kuis</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Ahmad F.</td>
            <td className="p-2 border">90</td>
            <td className="p-2 border">85</td>
            <td className="p-2 border">88</td>
          </tr>
          <tr>
            <td className="p-2 border">Bella N.</td>
            <td className="p-2 border">95</td>
            <td className="p-2 border">90</td>
            <td className="p-2 border">93</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
