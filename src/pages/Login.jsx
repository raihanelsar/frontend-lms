import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

<<<<<<< HEAD
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
=======
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Validasi input
    if (!email || !password) {
      return Swal.fire({
        icon: "error",
        title: "Email dan Password wajib diisi!",
      });
    }

    if (!registeredUser) {
      return Swal.fire({
        icon: "error",
        title: "Belum ada akun terdaftar!",
        text: "Silakan lakukan registrasi terlebih dahulu.",
      });
    }

    // Cek email dan password
    if (
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      const userData = { name: registeredUser.name, email };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        showConfirmButton: false,
        timer: 1200,
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Email atau Password salah!",
      });
    }
>>>>>>> 8e2d8d9 (update dashboard)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
<<<<<<< HEAD
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
=======
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
>>>>>>> 8e2d8d9 (update dashboard)
          >
            Login
          </button>
        </form>

<<<<<<< HEAD
        <p className="mt-4 text-sm text-center text-gray-500">
=======
        <p className="text-center text-sm text-gray-500 mt-4">
>>>>>>> 8e2d8d9 (update dashboard)
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 8e2d8d9 (update dashboard)
