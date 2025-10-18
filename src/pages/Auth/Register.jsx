import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Validasi input dasar
    if (!name || !email || !password) {
      return Swal.fire({
        icon: "error",
        title: "Semua kolom wajib diisi!",
      });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Format email tidak valid!",
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        icon: "warning",
        title: "Password minimal 6 karakter!",
      });
    }

    // Simulasi penyimpanan (akan diganti dengan API call ke Laravel nantinya)
    const userData = { name, email, password, role: "guru" };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    Swal.fire({
      icon: "success",
      title: "Registrasi berhasil!",
      text: "Silakan login menggunakan akun Anda.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Learncord.png"
            alt="LearnCord Logo"
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-2xl font-bold text-blue-600">Daftar Akun</h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Kata Sandi"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
