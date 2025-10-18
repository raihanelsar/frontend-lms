import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Megaphone,
  User,
  LogOut,
  Bell,
  CheckCircle,
} from "lucide-react";
import Swal from "sweetalert2";

const GuruLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [notifOpen, setNotifOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Tugas Baru", detail: "Tugas HTML untuk kelas X telah dikirim.", read: false },
    { id: 2, title: "Rapat Guru", detail: "Rapat bulanan pada 20 Okt 2025.", read: false },
  ]);

  const notifRef = useRef(null);
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: "🏠 Dashboard", path: "/guru/dashboard" },
    { name: "📚 Kelas", path: "/guru/courses" },
    { name: "📢 Pengumuman", path: "/guru/announcement" },
    { name: "📅 Jadwal", path: "/guru/schedule" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (notifRef.current && !notifRef.current.contains(e.target)) &&
        (dropdownRef.current && !dropdownRef.current.contains(e.target))
      ) {
        setNotifOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
  Swal.fire({
    title: "Logout?",
    text: "Apakah Anda yakin ingin keluar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, keluar",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("user"); // ← tambahkan ini
      Swal.fire("Berhasil keluar!", "", "success");
      navigate("/login");
    }
  });
};

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 🔹 Navbar Atas */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/guru/dashboard" className="flex items-center space-x-2">
            <img src="/Learncord.png" alt="Logo" className="w-10 h-10" />
            <span className="text-lg font-bold text-blue-600">Learncord</span>
          </Link>

          {/* Menu Navigasi */}
          <nav className="items-center hidden gap-6 md:flex">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Notifikasi & Profil */}
          <div className="flex items-center gap-4">
            {/* 🔔 Notifikasi */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 rounded-full hover:bg-gray-100"
              >
                <Bell size={20} className="text-gray-700" />
                {unreadCount > 0 && (
                  <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-lg shadow-lg w-80">
                  <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
                    <h3 className="text-sm font-semibold text-gray-700">Notifikasi</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Tandai dibaca
                      </button>
                    )}
                  </div>
                  <ul className="overflow-y-auto max-h-60">
                    {notifications.map((n) => (
                      <li
                        key={n.id}
                        className={`px-4 py-3 text-sm border-b ${
                          n.read ? "bg-white" : "bg-blue-50"
                        }`}
                      >
                        <p className="font-medium text-gray-800">{n.title}</p>
                        <p className="text-xs text-gray-600">{n.detail}</p>
                        {n.read && <CheckCircle size={12} className="inline ml-1 text-green-500" />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 👤 Profil */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100"
              >
                <img
                  src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                  alt="Guru"
                  className="w-8 h-8 border border-gray-200 rounded-full"
                />
                <span className="hidden text-sm font-medium text-gray-700 md:block">
                  Raihan Elsar
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/guru/profile"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User size={16} className="mr-2" /> Profil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="mr-2" /> Keluar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        <div className="flex justify-around py-2 text-sm bg-white border-t md:hidden">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* 🔹 Konten Halaman */}
      <main className="flex-1 mt-[72px] p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default GuruLayout;
