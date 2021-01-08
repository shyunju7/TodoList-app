import React, { useState } from "react";
import {
  AddButton,
  Input,
  TodoInputBox,
} from "../Styled/todo/todoInput-styled";
import { useDispatch, useSelector } from "react-redux";
import {todoInsert, todoLoad} from "../reducer/todo";
import { VscAdd } from "react-icons/vsc";

const TodoInput = ({todoTitleId}) => {
  const [todoInput, setTodoInput] = useState("");
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const randomNum = Math.random().toString(36).substr(2, 5).toUpperCase();
  let id = todoTitleId + randomNum;
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onRemove = () => {
    setTodoInput("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    console.log(todoTitleId,userId,id,todoInput);
    dispatch(todoInsert(todoTitleId, userId, id, "2021/01/01", todoInput));
    onRemove();
  };

  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="new Todo"
      />
      <AddButton onClick={addTodo}>
        <VscAdd />
      </AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;



