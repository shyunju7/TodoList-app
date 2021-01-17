import React from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import {
  Date,
  DateText,
  TemplateBox,
  Title,
} from "../Styled/todo/common-styled";
import MyCalendar from "./MyCalendar";
import { useSelector } from "react-redux";
import List from "../Components/List";

const useMyTodo = (todoTitleId) => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const todos = useSelector((state) => state.todoReducer.todos);

  const newTodo = todos.filter(
    (todo) => todo.titleId === todoTitleId && todo.writer === userId
  );

  return newTodo;
};

const MyTodo = ({ match }) => {
  const titleId = match.params.id;
  const myTodoList = useMyTodo(titleId);
  const DoingList = myTodoList.filter((todo) => !todo.isCompleted);
  const DoneList = myTodoList.filter((todo) => todo.isCompleted);

  return (
    <div>
      <Title>ToDo</Title>

      <Date> Today </Date>
      <DateText>
        <MyCalendar />
      </DateText>

      <TemplateBox>
        <TodoTemplate>
          <TodoInput todoTitleId={titleId} />
          <TodoList todoList={myTodoList} todoTitleId={titleId} />
        </TodoTemplate>

        <TodoTemplate>
          <List todoList={DoingList} todoTitleId={titleId} />
        </TodoTemplate>

        <TodoTemplate>
          <List todoList={DoneList} todoTitleId={titleId} />
        </TodoTemplate>
      </TemplateBox>
    </div>
  );
};

export default MyTodo;
