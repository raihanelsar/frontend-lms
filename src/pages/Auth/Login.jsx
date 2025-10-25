import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../components/AuthLayout";

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
        text: "Silakan registrasi terlebih dahulu.",
        confirmButtonColor: "#2563eb",
      });
    }

    if (
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      const userData = {
        name: registeredUser.name,
        email,
        role: registeredUser.role || "guru",
      };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        showConfirmButton: false,
        timer: 1200,
      }).then(() => {
        navigate(
          userData.role === "guru" ? "/guru/dashboard" : "/admin/dashboard"
        );
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
    <AuthLayout
      title="Masuk ke LearnCord"
      subtitle="Learning Management System berbasis Discord"
    >
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
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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

      <p className="mt-5 text-sm text-center text-gray-500">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Daftar sekarang
        </Link>
      </p>
    </AuthLayout>
  );
}
