import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({ events, selectedDate }) {
  const filtered = events.filter(e => e.date === selectedDate);

  return (
    <div className="mt-4">
      {filtered.length > 0 ? (
        filtered.map((item) => <ScheduleCard key={item.id} item={item} />)
      ) : (
        <p className="text-sm italic text-gray-500">Tidak ada jadwal hari ini.</p>
      )}
    </div>
  );
}
