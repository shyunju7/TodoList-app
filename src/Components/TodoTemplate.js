import React from "react";
import {Date, SubTitle, Template, Title} from "../Styled/todo/common-styled";

const TodoTemplate = ({ children }) => {

  return (
    <div>
      <Template>
        <Date> Today </Date>
        <SubTitle>2021/01/10</SubTitle>

        {children}
      </Template>
    </div>
  );
};

export default TodoTemplate;
