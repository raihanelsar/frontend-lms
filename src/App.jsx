<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

=======
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
>>>>>>> 8e2d8d9 (update dashboard)
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Materials from "./pages/Materials";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
<<<<<<< HEAD
import SchedulePage from "./pages/SchedulePage";
import GradesPage from "./pages/GradesPage";
import AnnouncementPage from "./pages/AnnouncementPage";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { pathname } = useLocation();

  // Tutup sidebar otomatis saat navigasi di mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen text-gray-900 transition-all duration-300 md:flex-row bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Konten utama */}
      <div
        className={`flex-1 transition-all duration-300 pt-16 md:pt-6 ${
          isSidebarOpen
            ? isCollapsed
              ? "md:ml-20"
              : "md:ml-64"
            : "md:ml-0"
        }`}
      >
        {/* Navbar */}
        <Navbar setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />

        {/* Main Content */}
        <main className="p-4 sm:p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/announcements" element={<AnnouncementPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
=======

// Komponen wrapper untuk proteksi halaman
function PrivateRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
}

// Komponen untuk menyembunyikan Navbar di halaman tertentu
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {!hideNavbar && <Navbar />}
      <main className={`${!hideNavbar ? "pt-16 px-4 md:px-6" : ""}`}>{children}</main>
>>>>>>> 8e2d8d9 (update dashboard)
    </div>
  );
}

export default function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        {/* Halaman publik */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman utama */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
=======
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <PrivateRoute>
                <Courses />
              </PrivateRoute>
            }
          />
          <Route
            path="/materials"
            element={
              <PrivateRoute>
                <Materials />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
>>>>>>> 8e2d8d9 (update dashboard)
    </Router>
  );
}
