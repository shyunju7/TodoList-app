import React from "react";
import { TodoTitleItemBox } from "../Styled/todoTitle/todoTitle-styled";
import { Link } from "react-router-dom";

const TodoTitleItem = ({ todoTitleInfo }) => {
  const { id, todoTitle, writer } = todoTitleInfo;

  let url = "/todo/" + id;
  return (
    <Link to={url}>
      <TodoTitleItemBox id={id} writer={writer}>
        {todoTitle}
      </TodoTitleItemBox>
    </Link>
  );
};

export default TodoTitleItem;
