import React from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar({ setIsOpen, isOpen }) {
  const { pathname } = useLocation();

  const pageTitle =
    {
      "/": "Dashboard",
      "/courses": "Courses",
      "/materials": "Materials",
      "/tasks": "Tasks",
      "/profile": "Profile",
    }[pathname] || "LMS";

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white text-gray-900 border-b border-gray-200 shadow-sm md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Tombol Sidebar */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle sidebar"
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <FaBars />
        </button>

        {/* Judul Halaman */}
        <h1 className="text-lg font-semibold">{pageTitle}</h1>

        {/* Placeholder agar simetris */}
        <div className="w-8"></div>
      </div>
    </header>
  );
}
