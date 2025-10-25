import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuruLayout from "./layout/GuruLayout";
import Dashboard from "./pages/Guru/Dashboard/Dashboard";
import Courses from "./pages/Guru/Courses/Courses";
import CourseDetail from "./pages/Guru/Courses/Detail/CourseDetail";
import Schedule from "./pages/Guru/Schedule";
import Announcement from "./pages/Guru/Announcement";
import Profile from "./pages/Guru/Profile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Logout from "./pages/Auth/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === Auth Pages === */}
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

        {/* === Guru Pages (Protected) === */}
        <Route
          path="/guru"
          element={
            <ProtectedRoute>
              <GuruLayout />
            </ProtectedRoute>
          }
        >
          {/* Redirect default /guru ke dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
          
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="announcement" element={<Announcement />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Fallback untuk route yang tidak dikenal */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
