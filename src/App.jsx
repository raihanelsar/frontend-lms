import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ===== GURU =====
import GuruLayout from "./layout/GuruLayout";
import Dashboard from "./pages/Guru/Dashboard/Dashboard";
import Courses from "./pages/Guru/Courses/Courses";
import CourseDetail from "./pages/Guru/Courses/Detail/CourseDetail";
import Schedule from "./pages/Guru/Schedule";
import Announcement from "./pages/Guru/Announcement";
import Profile from "./pages/Guru/Profile";

// ===== ADMIN =====
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/Admin/Dashboard/Dashboard";
import AnnouncementAdmin from "./pages/Admin/Announcement/Announcement";
import Classes from "./pages/Admin/Classes/Classes";
import ClassesDetail from "./pages/Admin/Classes/ClassesDetail";
import ScheduleAdmin from "./pages/Admin/Schedule/Schedule";
import Admins from "./pages/Admin/Users/Admins";
import Teachers from "./pages/Admin/Users/Teachers";
import Students from "./pages/Admin/Users/Students";

// ===== AUTH =====
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Logout from "./pages/Auth/Logout";

// ===== ROUTE GUARD =====
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==== AUTH PAGES ==== */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />

        {/* ==== GURU ROUTES ==== */}
        <Route
          path="/guru/*"
          element={
            <ProtectedRoute allowedRoles={["guru"]}>
              <GuruLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="announcement" element={<Announcement />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ==== ADMIN ROUTES ==== */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="announcement" element={<AnnouncementAdmin />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:id" element={<ClassesDetail />} />
          <Route path="schedule" element={<ScheduleAdmin />} />
          <Route path="users/admins" element={<Admins />} />
          <Route path="users/teachers" element={<Teachers />} />
          <Route path="users/students" element={<Students />} />
        </Route>

        {/* ==== FALLBACK ==== */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
