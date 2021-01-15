import React from "react";
import { SubTitle, SubTitleBar } from "../Styled/todo/todolist-styled";

const SubTodoTitle = ({subTitle}) => {
  return <SubTitleBar><SubTitle>{subTitle}</SubTitle></SubTitleBar>;
};

export default SubTodoTitle;
