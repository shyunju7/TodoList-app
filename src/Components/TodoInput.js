import React, { useRef, useState } from "react";
import {
  AddButton,
  Input,
  TodoInputBox,
} from "../Styled/todo/todoInput-styled";
import { useDispatch, useSelector } from "react-redux";
import { todoInsert } from "../reducer/todo";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const userId = useSelector((state) => state.loginReducer.loginUser);
  let nextId = useRef(2);
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

    dispatch(todoInsert(userId, nextId.current, todoInput));
    nextId.current += 1;
    onRemove();
  };

  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="할 일을 입력하세요!"
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;
