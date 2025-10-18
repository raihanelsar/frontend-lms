import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/guru/courses/${course.id}`}
      className="block overflow-hidden transition-transform bg-white shadow rounded-xl hover:shadow-lg hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="object-cover w-full h-40"
      />

      {/* Info */}
      <div className="p-4">
        <h3 className="mb-1 text-lg font-bold text-gray-800">
          {course.title}
        </h3>
        <p className="mb-2 text-sm text-gray-600 line-clamp-2">{course.desc}</p>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
          <span>👨‍🏫 {course.teacher}</span>
          <span className="font-medium text-blue-600">{course.category}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 mt-3 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
    </Link>
  );
}
