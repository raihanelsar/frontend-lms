// src/components/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-2 text-2xl font-bold text-center text-gray-800">{title}</h1>
        <p className="mb-6 text-sm text-center text-gray-500">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
