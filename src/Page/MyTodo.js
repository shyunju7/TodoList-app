import React, { useState } from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { Title } from "../Styled/todo/common-styled";
import SubTodoTitle from "../Components/SubTitleBar";
const MyTodo = () => {
  return (
    <div>
      <Title>ToDo</Title>
      <TodoTemplate>
        <SubTodoTitle />
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default MyTodo;
