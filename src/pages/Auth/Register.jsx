import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "guru", // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;

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

    const userData = { name, email, password, role };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    Swal.fire({
      icon: "success",
      title: "Registrasi berhasil!",
      text: `Akun ${role === "admin" ? "Admin" : "Guru"} berhasil dibuat.`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => navigate("/login"));
  };

  return (
    <AuthLayout
      title="Daftar Akun"
      subtitle="Buat akun untuk mengakses LearnCord"
    >
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

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Pilih Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="guru">Guru</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-500">
        Sudah punya akun?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </AuthLayout>
  );
}
