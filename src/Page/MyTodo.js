import React, { useState } from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { AddBtn, Title } from "../Styled/todo/common-styled";
import MyCalendar from "./MyCalendar";
import { CgAdd } from "react-icons/cg";
import InputModal from "../Components/Modal";
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
      <Title>MY TODO</Title>
      <MyCalendar />
      <AddBtn>
        <CgAdd onClick={openModal} size="20px" />
      </AddBtn>
        {isOpen ? <InputModal isOpen={openModal} close={closeModal} /> : null}
      <TodoTemplate>

        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default MyTodo;
