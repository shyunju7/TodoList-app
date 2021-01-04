import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {SubTitle} from "../Styled/myPage/main-styled";

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const Input = ({ value, onClick }) => (
    <SubTitle className="example-custom-input" onClick={onClick}>
      {value}
    </SubTitle>
  );

  console.log("today : ", startDate.getMonth()+1, "월 ", startDate.getDate(),"일");
  console.log(startDate);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<Input />}
    />
  );
};



export default MyCalendar;