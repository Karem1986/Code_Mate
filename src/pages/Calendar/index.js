import React, { useState } from "react";
import Calendar from "react-calendar";

import CalendarTile from "../../components/CalendarTile";

export default function BookSession() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const onChange = (date) => setCurrentDate(date);

  return (
    <div>
      <h2 className="h2-book-session">Book your session here</h2>

      <Calendar
        onChange={onChange}
        tileContent={({ view }) => <CalendarTile view={view} />}
        value={currentDate}
      />
    </div>
  );
}
