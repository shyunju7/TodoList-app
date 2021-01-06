import React from "react";
import {useSelector} from "react-redux";
import TodoTitleItem from "./TodoTitleItem";

const TodoTitleList = () => {

    const userId = useSelector((state) => state.loginReducer.loginUser);
    const todoTitles = useSelector((state) => state.todoTitleReducer.todoTitles);

    console.log(userId);
    console.log(todoTitles);

    return(
        <div>
            {todoTitles.map((todoTitle, index) =>
                todoTitle.writer === userId ? <TodoTitleItem key={index} todoTitleInfo={todoTitle}/> : null
            )}
        </div>
    );

};

export default TodoTitleList;