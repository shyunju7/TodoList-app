import React, { useCallback, useState } from "react";
import {
  AddButton,
  Input,
  TodoInputBox,
} from "../Styled/todo/todoInput-styled";
import { useDispatch, useSelector } from "react-redux";
import { todoInsert } from "../reducer/todo";
import { VscAdd } from "react-icons/vsc";

const TodoInput = ({ todoTitleId }) => {
  const [todoInput, setTodoInput] = useState("");
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const randomNum = Math.random().toString(36).substr(2, 5).toUpperCase();
  let id = todoTitleId + randomNum;
  const dispatch = useDispatch();

  const today = new Date();
  const registrationDate =
    today.getFullYear() + "/" + today.getMonth() + 1 + "/" + today.getDate();

  const onChangeInput = useCallback(
    (e) => {
      setTodoInput(e.target.value);
    },
    [todoInput]
  );

  const onRemove = useCallback(() => {
    setTodoInput("");
  }, [setTodoInput]);

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

    dispatch(todoInsert(todoTitleId, userId, id, registrationDate, todoInput));
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
