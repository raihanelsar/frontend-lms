import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Email dan Password wajib diisi!",
      });
      return;
    }

    // Ambil data pengguna yang sudah terdaftar dari localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Cek apakah email sudah terdaftar
    const existingUser = registeredUsers.find((user) => user.email === email);

    if (!existingUser) {
      Swal.fire({
        icon: "error",
        title: "Email belum terdaftar!",
        text: "Silakan register terlebih dahulu.",
      });
      return;
    }

    // Cek password
    if (existingUser.password !== password) {
      Swal.fire({
        icon: "error",
        title: "Password salah!",
        text: "Periksa kembali password Anda.",
      });
      return;
    }

    // Jika lolos semua, simpan data login
    const userData = { name: existingUser.name, email: existingUser.email };
    localStorage.setItem("user", JSON.stringify(userData));

    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;