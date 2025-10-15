<<<<<<< HEAD
function UploadModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
=======
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

export default function UploadModal({ onClose }) {
  const [file, setFile] = useState(null);
  const [note, setNote] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire("Pilih file terlebih dahulu!", "", "warning");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Tugas berhasil dikirim!",
      text: "File kamu telah diunggah dengan sukses.",
      showConfirmButton: false,
      timer: 2000,
    });

    setFile(null);
    setNote("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative animate-slideUp">
        {/* Tombol Tutup */}
>>>>>>> 8e2d8d9 (update dashboard)
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
<<<<<<< HEAD
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Upload Tugas</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Pilih File</label>
            <input
              type="file"
              className="block w-full mt-2 text-sm border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Catatan</label>
            <textarea
              className="w-full mt-2 border rounded-lg p-2 text-sm"
              placeholder="Tambahkan catatan untuk guru..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
=======
          <FaTimes size={18} />
        </button>

        {/* Judul Modal */}
        <h2 className="text-xl font-semibold mb-5 text-gray-800">
          Upload Tugas
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Dropzone */}
          <label
            htmlFor="fileInput"
            className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer text-center"
          >
            <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
            <p className="text-gray-600 text-sm">
              {file
                ? `${file.name} (${(file.size / 1024).toFixed(1)} KB)`
                : "Klik atau seret file ke sini untuk mengunggah"}
            </p>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Catatan */}
          <div>
            <label className="text-sm text-gray-700">Catatan</label>
            <textarea
              className="w-full mt-2 border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tambahkan catatan untuk guru..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            ></textarea>
          </div>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg w-full transition"
>>>>>>> 8e2d8d9 (update dashboard)
          >
            Kirim Tugas
          </button>
        </form>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default UploadModal;
=======
/* Animasi tambahan (masukkan ke global CSS misal index.css)
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 0.2s ease-in-out; }
.animate-slideUp { animation: slideUp 0.3s ease-in-out; }
*/
>>>>>>> 8e2d8d9 (update dashboard)
