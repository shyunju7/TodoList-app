import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ todoTitleId }) => {
  const user = useSelector((state) => state.loginReducer.loginUser);
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <div>
      {todos.map((todo) =>
        todo.titleId === todoTitleId && todo.writer === user ? (
          <TodoItem key={todo.id} todo={todo} todoTitleId={todoTitleId}/>
        ) : null
      )}
    </div>
  );
};

export default TodoList;
