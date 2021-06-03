import React from "react";
import {CheckBox, TodoLi} from "../Styled/todo/todoItem-styled";
import {FaRegCheckSquare} from "react-icons/fa";
import {RiFileList3Line} from "react-icons/ri";
const List = ({todoList, todoTitleId, isCompleted}) => {

    return (
        <ul>
            {todoList.map((todo) => (
                <TodoLi key={todo.id} todo={todo} todoTitleId={todoTitleId}>
                    <CheckBox>
                        {isCompleted ? (
                            <FaRegCheckSquare size="20px" color="#84a98c"/>
                        ) : (
                            <RiFileList3Line size="20px"/>
                        )}
                    </CheckBox>
                    {todo.text}
                </TodoLi>
            ))}
        </ul>
    );
};

export default List;
