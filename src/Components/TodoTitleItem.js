import React from "react";
import todo from "../reducer/todo";
import {TodoTitleItemBox} from "../Styled/todoTitle/todoTitle-styled";

const TodoTitleItem = ({todoTitleInfo}) => {

    const { id, todoTitle, writer } = todoTitleInfo;
    return (
        <div>
            <TodoTitleItemBox>{todoTitle}</TodoTitleItemBox>
        </div>
    );
};

export default TodoTitleItem;