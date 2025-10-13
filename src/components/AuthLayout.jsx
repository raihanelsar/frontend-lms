// src/components/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h1>
        <p className="text-gray-500 text-sm text-center mb-6">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
