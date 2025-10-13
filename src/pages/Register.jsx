import React, { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Semua field wajib diisi!",
      });
      return;
    }

    // Ambil daftar user yang sudah terdaftar
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Cek apakah email sudah digunakan
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      Swal.fire({
        icon: "warning",
        title: "Email sudah terdaftar!",
        text: "Gunakan email lain atau login dengan akun tersebut.",
      });
      return;
    }

    // Simpan user baru ke localStorage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

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
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
};

export default Register;
