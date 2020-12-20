import React from "react";
import { Template, Title } from "../Styled/todo/common-styled";

const TodoTemplate = ({ children }) => {

  return (
    <div>
      <Template>
        <Title> TODO </Title>
        {children}
      </Template>
    </div>
  );
};

export default TodoTemplate;
