import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { todoTitleInsert } from "../reducer/todoTitle";
import {TitleBox, TitleInput} from "../Styled/todoTitle/todoTitle-styled";


const TodoTitleInput = ({show}) => {
  const [title, setTitle] = useState("");
  const [readOnly, setReadOnly] = useState(false);

  const userId = useSelector((state) => state.loginReducer.loginUser);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const modifyTodoTitle = () => {
    setReadOnly(false);
  };

  const onKeyHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      dispatch(todoTitleInsert("I3423", userId, title, false));
      setTitle("");
      show = !show;
      console.log(show);
    }
  };

  return (
    <TitleBox show={show}>
      <TitleInput
        onChange={onChange}
        value={title}
        readOnly={readOnly}
        onDoubleClick={modifyTodoTitle}
        onKeyPress={onKeyHandler}
      />
    </TitleBox>
  );
};

export default TodoTitleInput;
