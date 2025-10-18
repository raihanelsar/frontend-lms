import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!email || !password) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Email dan Password wajib diisi!",
        confirmButtonColor: "#2563eb",
      });
    }

    if (!registeredUser) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Belum ada akun terdaftar!",
        text: "Silakan lakukan registrasi terlebih dahulu.",
        confirmButtonColor: "#2563eb",
      });
    }

    // Validasi kredensial
    if (
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      const userData = {
        name: registeredUser.name,
        email,
        role: registeredUser.role || "guru", // bisa disesuaikan nanti
      };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        showConfirmButton: false,
        timer: 1200,
      }).then(() => {
        navigate("/dashboard"); // arahkan ke dashboard guru
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Email atau Password salah!",
        confirmButtonColor: "#2563eb",
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="w-full max-w-sm p-8 bg-white shadow-xl rounded-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Learncord.png"
            alt="LearnCord Logo"
            className="w-20 h-20 mb-2"
          />
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Masuk ke LearnCord
          </h2>
          <p className="mt-1 text-sm text-center text-gray-500">
            Learning Management System berbasis Discord
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 flex items-center text-gray-500 right-3 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-2 rounded-lg transition font-medium ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 text-sm text-center text-gray-500">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
