import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, todoTitleId }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoTitleId={todoTitleId} />
      ))}
    </div>
  );
};

export default TodoList;
