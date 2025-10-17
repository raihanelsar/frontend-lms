// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBook,
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaCheckCircle,
  FaCalendarAlt,
  FaBullhorn,
  FaTasks,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Guest",
    photo: "https://i.pravatar.cc/40",
  });
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

  // Tutup dropdown saat klik di luar
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
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const menuItems = [
    { name: "🏠 Dashboard", path: "/" },
    { name: "📚 Courses", path: "/courses" },
    { name: "📂 Materials", path: "/materials" },
    { name: "📝 Tasks", path: "/tasks" },
    { name: "📢 Announcement", path: "/announcement" },
    { name: "🎓 Grades", path: "/grades" },
    { name: "📅 Schedule", path: "/schedule" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold text-blue-600">
          <img
            src="/Learncord.png"
            alt="Learncord Logo"
            className="object-contain w-10 h-10"
          />
          <span>Learncord</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden space-x-4 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 text-gray-700 font-medium transition px-2 py-1 rounded-md hover:text-blue-600 ${
                location.pathname === item.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Notifikasi & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifikasi */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative focus:outline-none"
            >
              <FaBell className="w-6 h-6 text-gray-700 transition hover:text-blue-600" />
              {unreadCount > 0 && (
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                  {unreadCount}
                </span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-3 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg w-80 animate-fadeIn">
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
                <ul className="overflow-y-auto max-h-60">
                  {notifications.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-center text-gray-500">
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
                          <FaCheckCircle className="inline ml-1 text-xs text-green-500" />
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src={user.photo}
                alt="Profile"
                className="w-8 h-8 border border-gray-300 rounded-full"
              />
              <span className="hidden font-medium text-gray-800 md:inline">
                {user.name}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 w-48 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md animate-fadeIn">
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center px-4 py-2 space-x-2 text-gray-700 transition hover:bg-gray-100"
                >
                  <FaUserCircle />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 space-x-2 text-left text-red-600 transition hover:bg-gray-100"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex flex-wrap justify-around px-4 py-2 text-sm bg-white border-t md:hidden">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center py-1 ${
              location.pathname === item.path ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
