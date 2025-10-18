import { Calendar, MapPin, Clock } from "lucide-react";

export default function ScheduleCard({ item }) {
  return (
    <div className="p-4 mb-3 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-semibold text-gray-800">{item.title}</h4>
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
          {item.type || "Kelas"}
        </span>
      </div>
      <p className="flex items-center gap-1 text-sm text-gray-600">
        <Clock size={14} className="text-gray-400" /> {item.time}
      </p>
      <p className="flex items-center gap-1 text-sm text-gray-600">
        <MapPin size={14} className="text-gray-400" /> {item.location || "Belum ditentukan"}
      </p>
      <p className="flex items-center gap-1 mt-1 text-sm text-gray-500">
        <Calendar size={14} className="text-gray-400" /> {item.date}
      </p>
    </div>
  );
}
