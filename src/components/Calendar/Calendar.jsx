import { NavLink } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  return (
    <div>
      <NavLink to={"/"}>BACK</NavLink>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridWeek" />
    </div>
  );
}
