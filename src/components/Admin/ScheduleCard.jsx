import React from "react";
import { Calendar, Clock, User } from "lucide-react";

export default function ScheduleCard({ schedule }) {
  if (!schedule || schedule.length === 0)
    return (
      <p className="py-4 text-center text-gray-500">
        Belum ada jadwal kegiatan.
      </p>
    );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {schedule.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 p-4 transition bg-white border shadow-md rounded-2xl hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">{item.subject}</h3>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar size={14} /> {item.date}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {item.time}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} /> {item.teacher}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
