function UploadModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
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
          >
            Kirim Tugas
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;
