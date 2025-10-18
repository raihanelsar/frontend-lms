export default function ScheduleList({ events, selectedDate }) {
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl">
      {filteredEvents.length > 0 ? (
        <ul className="space-y-3">
          {filteredEvents.map((event) => (
            <li
              key={event.id}
              className="p-3 transition border rounded-lg hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-800">
                  {event.title}
                </h4>
                <span className="px-2 py-1 text-xs text-indigo-600 bg-indigo-100 rounded-md">
                  {event.time}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{event.room}</p>
              <p className="mt-1 text-xs text-gray-600">{event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-8 text-sm text-center text-gray-500">
          Tidak ada jadwal untuk tanggal ini 📅
        </p>
      )}
    </div>
  );
}
