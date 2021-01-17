import React from "react";
import { TodoLi } from "../Styled/todo/todoItem-styled";

const List = ({ todoList, todoTitleId }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoLi key={todo.id} todo={todo} todoTitleId={todoTitleId}>
          {todo.text}
        </TodoLi>
      ))}
    </ul>
  );
};

export default List;
