import React, { useState } from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import {
  Date,
  DateBox,
  DateText,
  SubTitle,
  Template,
  TemplateBox,
  Title,
} from "../Styled/todo/common-styled";
import SubTodoTitle from "../Components/SubTitleBar";
import MyCalendar from "./MyCalendar";
import { useSelector } from "react-redux";
import DoingList from "../Components/DoingList";
import DoneList from "../Components/DoneList";
const MyTodo = ({ match }) => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  return (
    <div>
      <Title>ToDo</Title>

      <Date> Today </Date>
      <DateText>
        <MyCalendar />
      </DateText>

      <TemplateBox>
        <TodoTemplate>
          <TodoInput todoTitleId={match.params.id} />
          <TodoList key={userId} todoTitleId={match.params.id} />
        </TodoTemplate>
        <TodoTemplate>
          <DoingList key={userId} todoTitleId={match.params.id} />
        </TodoTemplate>
        <TodoTemplate>
          <DoneList key={userId} todoTitleId={match.params.id} />
        </TodoTemplate>
      </TemplateBox>
    </div>
  );
};

export default MyTodo;
