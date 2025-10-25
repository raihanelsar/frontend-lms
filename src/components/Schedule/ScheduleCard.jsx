import { Calendar, MapPin, Clock } from "lucide-react";

export default function ScheduleCard({ item }) {
  const typeColors = {
    Kelas: "bg-blue-50 text-blue-600",
    Ujian: "bg-red-50 text-red-600",
    Workshop: "bg-green-50 text-green-600",
    Default: "bg-gray-50 text-gray-600",
  };

  const typeClass = typeColors[item.type] || typeColors.Default;

  return (
    <div className="p-4 mb-3 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:scale-[1.01]">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-semibold text-gray-800">{item.title}</h4>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${typeClass}`}>
          {item.type || "Kelas"}
        </span>
      </div>
      <p className="flex items-center gap-1 text-sm text-gray-600">
        <Clock size={14} className="text-gray-400" /> {item.time || "Belum ditentukan"}
      </p>
      <p className="flex items-center gap-1 text-sm text-gray-600">
        <MapPin size={14} className="text-gray-400" /> {item.location || "Belum ditentukan"}
      </p>
      <p className="flex items-center gap-1 mt-1 text-sm text-gray-500">
        <Calendar size={14} className="text-gray-400" /> {item.date || "Belum ditentukan"}
      </p>
    </div>
  );
}
