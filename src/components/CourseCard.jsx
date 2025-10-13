// src/components/CourseCard.jsx
import React from "react";

const CourseCard = ({ title, desc }) => (
  <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-500 mt-1">{desc}</p>
    <button className="mt-4 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition">
      Buka Kelas
    </button>
  </div>
);

export default CourseCard;
