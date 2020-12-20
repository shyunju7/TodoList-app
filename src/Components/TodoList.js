import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const userId = useSelector((state) => state.loginReducer.loginUser);

  return (
    <div>
      {todos.map((todo) =>
        todo.userId === userId ? (
          <TodoItem key={todo.id} todo={todo} />
        ) : (
          <div />
        )
      )}
    </div>
  );
};

export default TodoList;
