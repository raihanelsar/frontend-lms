import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Materials from "./pages/Materials";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="min-h-screen text-gray-900 transition-all duration-300 bg-gray-50">
        <Routes>
          {/* ======= Public Routes ======= */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ======= Protected/Layout Routes ======= */}
          <Route
            path="/*"
            element={
              <div className="flex">
                {/* Sidebar */}
                <Sidebar
                  isOpen={isSidebarOpen}
                  setIsOpen={setIsSidebarOpen}
                  isCollapsed={isCollapsed}
                  setIsCollapsed={setIsCollapsed}
                />

                {/* Main Area */}
                <div
                  className={`flex-1 transition-all duration-300 ${
                    isSidebarOpen
                      ? isCollapsed
                        ? "md:ml-20"
                        : "md:ml-64"
                      : "md:ml-0"
                  } pt-16 md:pt-6`}
                >
                  <Navbar
                    setIsOpen={setIsSidebarOpen}
                    isOpen={isSidebarOpen}
                  />

                  <main className="p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/courses" element={<Courses />} />
                      <Route path="/materials" element={<Materials />} />
                      <Route path="/tasks" element={<Tasks />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
