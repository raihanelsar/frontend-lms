import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Melindungi route agar hanya bisa diakses oleh role tertentu.
 * @param {React.ReactNode} children - Komponen yang dilindungi
 * @param {string|string[]} allowedRoles - Role yang diizinkan
 */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Belum login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles) {
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (!roles.includes(user.role)) {
      // Role tidak diizinkan
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
