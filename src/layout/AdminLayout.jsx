import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  User,
  Calendar,
  Megaphone,
  LogOut,
  Menu,
  X,
  Users,
} from "lucide-react";
import Swal from "sweetalert2";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "🏠 Dashboard", path: "/admin/dashboard"},
    { name: "🧑‍🏫 Guru", path: "/admin/users/teachers"},
    { name: "🧑‍🎓 Siswa", path: "/admin/users/students"},
    { name: "📚 Kelas", path: "/admin/classes"},
    { name: "📅 Jadwal", path: "/admin/schedule"},
    { name: "📢 Pengumuman", path: "/admin/announcement"},
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "Keluar dari akun?",
      text: "Anda akan kembali ke halaman login.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, keluar",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.removeItem("user");
        Swal.fire({
          icon: "success",
          title: "Berhasil keluar!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/login");
      }
    });
  };

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar Atas */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Learncord.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-lg font-bold text-blue-600">Learncord Admin</h1>
        </div>

        {/* Tombol Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigasi Desktop */}
        <nav className="items-center hidden gap-4 md:flex">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profil Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
              alt="Admin"
              className="w-8 h-8 border border-gray-200 rounded-full"
            />
            <span className="hidden text-sm font-medium text-gray-700 md:block">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <LogOut size={16} className="mr-2" /> Keluar
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Navigasi Mobile */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 px-4 py-3 bg-white border-b shadow-sm md:hidden">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      )}

      {/* Konten Halaman */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
