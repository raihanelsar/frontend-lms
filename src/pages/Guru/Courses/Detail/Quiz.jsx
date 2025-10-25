import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams(); // contoh: "web" atau "database"

  // ===============================
  // Data Awal Kuis Berdasarkan Kelas
  // ===============================
  const initialQuizzes = {
    web: [
      {
        id: 1,
        title: "Kuis 1: Dasar HTML & CSS",
        questions: [
          {
            question: "Apa fungsi utama dari tag <div> dalam HTML?",
            options: [
              "Menampilkan teks tebal",
              "Mengelompokkan elemen menjadi satu bagian",
              "Membuat hyperlink",
              "Menambahkan gambar ke halaman",
            ],
            correct: 1,
          },
          {
            question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
            options: ["font-color", "text-style", "color", "font-weight"],
            correct: 2,
          },
        ],
      },
    ],
    database: [
      {
        id: 1,
        title: "Kuis 1: Dasar SQL",
        questions: [
          {
            question: "Perintah SQL apa yang digunakan untuk menampilkan data dari tabel?",
            options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
            correct: 2,
          },
          {
            question: "Apa fungsi utama dari PRIMARY KEY?",
            options: [
              "Menghubungkan dua tabel berbeda",
              "Mengidentifikasi setiap baris secara unik",
              "Menghapus data duplikat",
              "Menentukan tipe data kolom",
            ],
            correct: 1,
          },
        ],
      },
    ],
  };

  // ===============================
  // State
  // ===============================
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAddQuizForm, setShowAddQuizForm] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);
  const [targetQuiz, setTargetQuiz] = useState(null);

  // Input pertanyaan baru
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correct: 0,
  });

  const classQuizzes = quizzes[id] || [];

  // ===============================
  // Fungsi Tambah Kuis
  // ===============================
  const handleAddQuiz = () => {
    if (!newQuizTitle.trim()) return alert("Judul kuis tidak boleh kosong!");
    const newQuiz = {
      id: classQuizzes.length + 1,
      title: newQuizTitle,
      questions: [],
    };
    setQuizzes({
      ...quizzes,
      [id]: [...classQuizzes, newQuiz],
    });
    setNewQuizTitle("");
    setShowAddQuizForm(false);
  };

  // ===============================
  // Fungsi Tambah Pertanyaan ke Kuis
  // ===============================
  const handleAddQuestion = () => {
    if (
      !newQuestion.question.trim() ||
      newQuestion.options.some((opt) => !opt.trim())
    ) {
      return alert("Isi semua pertanyaan dan pilihan jawaban!");
    }

    const updatedQuizzes = { ...quizzes };
    const quizIndex = updatedQuizzes[id].findIndex((q) => q.id === targetQuiz.id);
    updatedQuizzes[id][quizIndex].questions.push(newQuestion);

    setQuizzes(updatedQuizzes);
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      correct: 0,
    });
    setShowAddQuestionForm(false);
    setTargetQuiz(null);
    alert("Pertanyaan berhasil ditambahkan!");
  };

  // ===============================
  // Fungsi Menjawab Kuis
  // ===============================
  const handleAnswer = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null) return alert("Pilih jawaban dulu!");
    if (selected === selectedQuiz.questions[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < selectedQuiz.questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setSelectedQuiz(null);
  };

  // ===============================
  // Tampilan
  // ===============================

  // 📘 Mode Kerjakan Kuis
  if (selectedQuiz && !showResult) {
    return (
      <div className="p-6 bg-white shadow rounded-xl">
        <h2 className="mb-3 text-xl font-semibold">{selectedQuiz.title}</h2>
        <p className="text-gray-600 mb-4">
          Soal {current + 1} dari {selectedQuiz.questions.length}
        </p>

        <div className="p-4 border rounded-lg mb-4">
          <p className="font-medium mb-3 text-gray-800">
            {selectedQuiz.questions[current].question}
          </p>

          <div className="space-y-2">
            {selectedQuiz.questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left px-4 py-2 border rounded-lg transition ${
                  selected === i ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          {current + 1 < selectedQuiz.questions.length ? "Selanjutnya" : "Lihat Hasil"}
        </button>
      </div>
    );
  }

  // 🎉 Mode Hasil Kuis
  if (showResult) {
    return (
      <div className="p-6 text-center bg-white rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎉 Kuis Selesai!</h2>
        <p className="text-lg mb-6 text-gray-700">
          Skor kamu: <span className="font-bold">{score}</span> dari{" "}
          {selectedQuiz.questions.length}
        </p>
        <button
          onClick={restartQuiz}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Kembali ke Daftar Kuis
        </button>
      </div>
    );
  }

  // 📋 Mode Daftar Kuis
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-3">
        Daftar Kuis {id === "database" ? "Database" : "Pemrograman Web"}
      </h2>

      <div className="space-y-3 mb-4">
        {classQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-800">{quiz.title}</p>
              <p className="text-sm text-gray-500">
                {quiz.questions.length} pertanyaan
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedQuiz(quiz)}
                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Kerjakan
              </button>
              <button
                onClick={() => {
                  setTargetQuiz(quiz);
                  setShowAddQuestionForm(true);
                }}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                + Pertanyaan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tambah Kuis Baru */}
      {showAddQuizForm ? (
        <div className="border-t pt-4">
          <input
            type="text"
            placeholder="Judul kuis baru..."
            value={newQuizTitle}
            onChange={(e) => setNewQuizTitle(e.target.value)}
            className="border px-3 py-2 rounded-lg w-full mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddQuiz}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Simpan
            </button>
            <button
              onClick={() => setShowAddQuizForm(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Batal
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAddQuizForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Tambah Kuis
        </button>
      )}

      {/* Form Tambah Pertanyaan */}
      {showAddQuestionForm && targetQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-[450px] shadow-lg">
            <h3 className="text-lg font-semibold mb-3">
              Tambah Pertanyaan ke {targetQuiz.title}
            </h3>

            <input
              type="text"
              placeholder="Tulis pertanyaan..."
              value={newQuestion.question}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, question: e.target.value })
              }
              className="border w-full px-3 py-2 rounded-lg mb-3"
            />

            {newQuestion.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Pilihan ${i + 1}`}
                value={opt}
                onChange={(e) => {
                  const updatedOptions = [...newQuestion.options];
                  updatedOptions[i] = e.target.value;
                  setNewQuestion({ ...newQuestion, options: updatedOptions });
                }}
                className="border w-full px-3 py-2 rounded-lg mb-2"
              />
            ))}

            <label className="block mb-3 text-sm">
              Jawaban benar:
              <select
                value={newQuestion.correct}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    correct: parseInt(e.target.value),
                  })
                }
                className="border ml-2 rounded px-2 py-1"
              >
                {newQuestion.options.map((_, i) => (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleAddQuestion}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowAddQuestionForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
