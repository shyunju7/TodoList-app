import React from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import {Title} from "../Styled/todo/common-styled";

const TeamTodo = () => {
    return (
        <div>
            <Title>TEAM TODO</Title>
            <TodoTemplate>
                <TodoInput />
                <TodoList />
            </TodoTemplate>
        </div>
    );
};

export default TeamTodo;
