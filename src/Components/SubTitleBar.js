import React from "react";
import { SubTitle, SubTitleBar } from "../Styled/todo/todolist-styled";

const SubTodoTitle = () => {
  return (
    <SubTitleBar>
      <SubTitle>My Todo</SubTitle>
      <SubTitle>Team Todo</SubTitle>
      <SubTitle>All Todo</SubTitle>
    </SubTitleBar>
  );
};

export default SubTodoTitle;
