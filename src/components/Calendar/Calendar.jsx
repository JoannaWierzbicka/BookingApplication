import { NavLink } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid"

const header = {
  left: "prev,next today",
  center: "title",
  right: "dayGridMonth,timeGridWeek",
};

export default function Calendar() {
  return (
    <div>
      <NavLink to={"/"}>BACK</NavLink>
      <FullCalendar
        headerToolbar={header}
        plugins={[dayGridPlugin]}
        views={{
          timeGridWeek: {
            type: "dayGridWeek",
            duration: { days: 7 },
            buttonText: "week",
          },
      
        }}
        initialView="dayGridMonth"
        editable={true}
        droppable={true}
      />
    </div>
  );
}
