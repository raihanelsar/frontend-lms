import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { scheduleData } from "../../data/scheduleData";
import ScheduleCalendar from "../../components/Schedule/ScheduleCalendar";
import ScheduleList from "../../components/Schedule/ScheduleList";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("2025-10-14");

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 text-blue-600 bg-blue-100 rounded-xl">
          <CalendarDays size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Jadwal Kegiatan</h2>
      </div>

      {/* Kontainer utama */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Kalender */}
        <div className="p-5 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-center text-gray-700">
            Pilih Tanggal
          </h3>
          <ScheduleCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        {/* Daftar jadwal */}
        <div className="p-5 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-lg">
          <h3 className="pb-2 mb-4 text-lg font-semibold text-gray-700 border-b">
            Jadwal pada <span className="text-blue-600">{selectedDate}</span>
          </h3>
          <ScheduleList events={scheduleData} selectedDate={selectedDate} />
        </div>
      </div>

      {/* Catatan kecil */}
      <p className="mt-10 text-sm italic text-center text-gray-500">
        Klik tanggal pada kalender untuk melihat kegiatan pada hari tersebut.
      </p>
    </div>
  );
}
