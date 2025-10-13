export default function ScheduleCard({ item }) {
  return (
    <div className="p-4 mb-3 bg-white border-l-4 border-blue-500 shadow-md rounded-2xl">
      <h4 className="font-semibold text-gray-800">{item.title}</h4>
      <p className="text-sm text-gray-500">{item.time}</p>
      <p className="text-sm text-gray-600">
        📍 {item.location} • 🗓️ {item.date}
      </p>
      <span className="text-xs font-medium text-blue-600">{item.type}</span>
    </div>
  );
}
