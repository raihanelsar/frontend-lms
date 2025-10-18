// src/pages/Auth/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simpan dummy user, biasanya pakai API
    localStorage.setItem(
      "user",
      JSON.stringify({ role: "guru", name: "Raihan Elsar" })
    );
    alert("Registrasi berhasil!");
    navigate("/login");
  };

  return (
    <AuthLayout title="Daftar Guru" subtitle="Buat akun baru">
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="py-2 text-white transition bg-green-500 rounded-lg hover:bg-green-600"
        >
          Daftar
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">
        Sudah punya akun?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </AuthLayout>
  );
};

export default Register;
