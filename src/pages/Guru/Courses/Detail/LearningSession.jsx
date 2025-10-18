export default function LearningSession() {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Learning Sessions</h2>
      <p className="mb-4 text-gray-600">
        Sesi pembelajaran terjadwal, termasuk pertemuan online atau tatap muka.
      </p>

      <ul className="space-y-3">
        <li className="p-3 border rounded-lg hover:bg-gray-50">🕒 Senin, 10.00 - Pengenalan HTML</li>
        <li className="p-3 border rounded-lg hover:bg-gray-50">🕓 Rabu, 13.00 - Dasar CSS</li>
      </ul>
    </div>
  );
}
