import React, { useState } from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { AddBtn, Title } from "../Styled/todo/common-styled";
import MyCalendar from "./MyCalendar";
import { CgAdd } from "react-icons/cg";
import InputModal from "../Components/InputModal";
import SubTodoTitle from "../Components/SubTitleBar";
const MyTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
