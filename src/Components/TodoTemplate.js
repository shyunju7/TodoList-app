import React from "react";
import { Date, SubTitle, Template, Title } from "../Styled/todo/common-styled";
import MyCalendar from "../Page/MyCalendar";

const TodoTemplate = ({ children }) => {
  return (
    <Template>

      {children}
    </Template>
  );
};

export default TodoTemplate;
