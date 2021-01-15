import React from "react";
import { useSelector } from "react-redux";
import {TodoLi} from "../Styled/todo/todoItem-styled";

const DoingList = ({ todoTitleId }) => {
    const user = useSelector((state) => state.loginReducer.loginUser);
    const todos = useSelector((state) => state.todoReducer.todos);

    return (
        <ul>
            {todos.map((todo) =>
                todo.titleId === todoTitleId && todo.writer === user && !todo.isCompleted ? (
                    <TodoLi key={todo.id} todo={todo} todoTitleId={todoTitleId}>{todo.text}</TodoLi>
                ) : null
            )}
        </ul>
    );
};

export default DoingList;
