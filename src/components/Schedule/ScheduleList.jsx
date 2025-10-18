import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({ events, selectedDate }) {
  const filtered = events.filter((e) => e.date === selectedDate);

  return (
    <div className="mt-4 space-y-3">
      {filtered.length > 0 ? (
        filtered.map((item) => <ScheduleCard key={item.id} item={item} />)
      ) : (
        <div className="p-4 text-center border border-gray-200 border-dashed bg-gray-50 rounded-xl">
          <p className="text-sm italic text-gray-500">
            Tidak ada jadwal pada tanggal <span className="font-medium text-gray-700">{selectedDate}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
