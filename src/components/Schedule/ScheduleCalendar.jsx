import { Clock, MapPin, Info } from "lucide-react";

export default function ScheduleList({ events, selectedDate }) {
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl">
      {filteredEvents.length > 0 ? (
        <ul className="space-y-4">
          {filteredEvents.map((event) => (
            <li
              key={event.id}
              className="p-4 transition-all duration-300 border rounded-xl hover:shadow-md bg-gradient-to-br from-white to-gray-50"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-base font-semibold text-gray-800">
                  {event.title}
                </h4>
                <div className="flex items-center gap-1 px-2 py-1 text-xs text-indigo-600 bg-indigo-100 rounded-lg">
                  <Clock size={12} />
                  <span>{event.time}</span>
                </div>
              </div>

              {event.room && (
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={12} /> {event.room}
                </p>
              )}

              {event.description && (
                <p className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                  <Info size={12} /> {event.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 italic text-center text-gray-500">
          <Clock className="w-8 h-8 mb-2 text-gray-400" />
          <p>Tidak ada jadwal untuk tanggal ini 📅</p>
        </div>
      )}
    </div>
  );
}
