import React from "react";

export default function StatsCard({ title, value, icon: Icon, color }) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-2xl shadow-md border bg-white hover:shadow-lg transition`}
    >
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-1 text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div
        className={`p-3 rounded-full ${color} text-white flex items-center justify-center`}
      >
        {Icon && <Icon size={22} />}
      </div>
    </div>
  );
}
