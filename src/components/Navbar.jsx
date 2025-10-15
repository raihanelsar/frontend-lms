import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBook,
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [user, setUser] = useState({ name: "Guest", photo: "https://i.pravatar.cc/40" });
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Ujian Tengah Semester", detail: "UTS dimulai 20 Okt 2025", read: false },
    { id: 2, title: "Tugas Baru", detail: "Tugas CSS Layout sudah tersedia", read: false },
    { id: 3, title: "Kelas Daring", detail: "Kelas Pemrograman Web akan dimulai pukul 09.00", read: true },
  ]);

  const dropdownRef = useRef(null);
  const notifRef = useRef(null);

  // Ambil data user dari localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        name: storedUser.name || "User",
        photo: "https://i.pravatar.cc/40?img=12",
      });
    }
  }, []);

  // Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(e.target)) &&
        (notifRef.current && !notifRef.current.contains(e.target))
      ) {
        setDropdownOpen(false);
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Apakah kamu yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        Swal.fire({
          icon: "success",
          title: "Berhasil logout!",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => navigate("/login"));
      }
    });
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold text-blue-600 flex items-center space-x-2"
        >
          <FaBook className="text-blue-600" />
          <span>EduLMS</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            🏠 Dashboard
          </Link>
          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            📚 Courses
          </Link>
          <Link
            to="/materials"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            📁 Materials
          </Link>
          <Link
            to="/tasks"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            ✅ Tasks
          </Link>
        </div>

        {/* Notifikasi + Profil */}
        <div className="flex items-center space-x-4">
          {/* Notifikasi */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative focus:outline-none"
            >
              <FaBell className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
                  <h3 className="text-sm font-semibold text-gray-700">Notifikasi</h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Tandai semua dibaca
                    </button>
                  )}
                </div>
                <ul className="max-h-60 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-gray-500 text-center">
                      Tidak ada notifikasi
                    </li>
                  ) : (
                    notifications.map((n) => (
                      <li
                        key={n.id}
                        className={`px-4 py-3 text-sm border-b hover:bg-gray-50 transition ${
                          n.read ? "text-gray-600" : "bg-blue-50 text-gray-800"
                        }`}
                      >
                        <p className="font-medium">{n.title}</p>
                        <p className="text-xs text-gray-500">{n.detail}</p>
                        {n.read && (
                          <FaCheckCircle className="text-green-500 text-xs inline ml-1" />
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Profil Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src={user.photo}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="hidden md:inline text-gray-800 font-medium">
                {user.name}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md py-2 animate-fadeIn">
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FaUserCircle />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
