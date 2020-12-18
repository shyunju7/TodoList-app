import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default MyCalendar;
