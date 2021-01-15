import React, { useState } from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { Date, SubTitle, Template, Title } from "../Styled/todo/common-styled";
import SubTodoTitle from "../Components/SubTitleBar";
import MyCalendar from "./MyCalendar";
import { useSelector } from "react-redux";
const MyTodo = ({ match }) => {
  const userId = useSelector((state) => state.loginReducer.loginUser);

  return (
    <div>
      <Title>ToDo</Title>

      <Date> Today </Date>
      <SubTitle>
        <MyCalendar />
      </SubTitle>
      <SubTodoTitle>title</SubTodoTitle>
      <TodoTemplate>
        <TodoInput todoTitleId={match.params.id} />
        <TodoList key={userId} todoTitleId={match.params.id} />
      </TodoTemplate>
    </div>
  );
};

export default MyTodo;
