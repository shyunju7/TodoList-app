import React from "react";
import { Date, SubTitle, Template, Title } from "../Styled/todo/common-styled";
import MyCalendar from "../Page/MyCalendar";

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <Date> Today </Date>
      <SubTitle>
        <MyCalendar />
      </SubTitle>
      {children}
    </div>
  );
};

export default TodoTemplate;
