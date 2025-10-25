import ScheduleCard from "./ScheduleCard";
import { Calendar } from "lucide-react";

export default function ScheduleList({ events, selectedDate }) {
  const filtered = events.filter((e) => e.date === selectedDate);

  return (
    <div className="mt-4 space-y-3">
      {filtered.length > 0 ? (
        filtered.map((item) => <ScheduleCard key={item.id} item={item} />)
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center border border-gray-200 border-dashed bg-gray-50 rounded-2xl">
          <Calendar className="w-10 h-10 mb-2 text-gray-400" />
          <p className="text-sm italic text-gray-500">
            Tidak ada jadwal pada tanggal{" "}
            <span className="font-medium text-gray-700">{selectedDate}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
