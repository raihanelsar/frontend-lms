import { useState } from "react";
import { scheduleData } from "../../data/scheduleData";
import ScheduleCalendar from "../../components/Schedule/ScheduleCalendar";
import ScheduleList from "../../components/Schedule/ScheduleList";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("2025-10-14");

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">📅 Jadwal Kegiatan</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ScheduleCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Jadwal pada {selectedDate}
          </h3>
          <ScheduleList events={scheduleData} selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}
