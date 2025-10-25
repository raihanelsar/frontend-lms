import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Mencegah user yang sudah login mengakses halaman login/register lagi.
 */
const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.role === "guru") return <Navigate to="/guru/dashboard" replace />;
    if (user.role === "admin") return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
