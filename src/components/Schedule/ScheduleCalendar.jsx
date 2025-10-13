import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ScheduleCalendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl">
      <Calendar
        onChange={(date) =>
          setSelectedDate(date.toISOString().split("T")[0])
        }
        value={new Date(selectedDate)}
      />
    </div>
  );
}
