import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const Sidebar = ({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  const { pathname } = useLocation();

  const links = [
  { name: "🏠 Dashboard", path: "/" },
  { name: "📚 Courses", path: "/courses" },
  { name: "📂 Materials", path: "/materials" },
  { name: "📝 Tasks", path: "/tasks" },
  { name: "📅 Schedule", path: "/schedule" },
  { name: "🎓 Grades", path: "/grades" },
  { name: "📢 Announcements", path: "/announcements" },
  { name: "👤 Profile", path: "/profile" },
];


  const handleLogout = () => {
    Swal.fire({
      title: "Yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        Swal.fire({
          icon: "success",
          title: "Logout Berhasil",
          showConfirmButton: false,
          timer: 800,
        }).then(() => (window.location.href = "/login"));
      }
    });
  };

  return (
    <>
      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 h-screen z-40 flex flex-col justify-between
          bg-white text-gray-900 border-r border-gray-200 shadow-sm
          transition-all duration-300
          ${isOpen ? (isCollapsed ? "w-20" : "w-64") : "-translate-x-full md:translate-x-0 md:w-0"}
        `}
      >
        {/* Header: Brand + Collapse Button */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {!isCollapsed && <h2 className="text-xl font-bold">LMS</h2>}
          </div>

          <button
            onClick={() => setIsCollapsed((s) => !s)}
            className="p-2 transition rounded-md hover:bg-gray-100"
            aria-label="Toggle collapse"
          >
            <FaChevronLeft className={`${isCollapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm transition
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                }}
              >
                <span className="whitespace-nowrap">
                  {isCollapsed ? link.name.split(" ")[0] : link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer: Logout */}
        <div className="px-4 py-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full py-2 text-white transition bg-red-600 rounded-md hover:bg-red-700"
          >
            {isCollapsed ? "🚪" : "🚪 Logout"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
