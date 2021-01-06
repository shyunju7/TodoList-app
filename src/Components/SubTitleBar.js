import React, { useState } from "react";
import {
    AddSubTitle,
    SubTitle,
    SubTitleBar,
} from "../Styled/todo/todolist-styled";

const SubTodoTitle = () => {
  const [subTitle, setSubTitle] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const onChange = (e) => {
    setSubTitle(e.target.value);
  };

  const modifySubTitle = (e) => {
    setReadOnly(false);
  };

  return (
    <SubTitleBar>
      <SubTitle
        onChange={onChange}
        readOnly={readOnly}
        onDoubleClick={modifySubTitle}
        value={subTitle}
        onBlur={() => setReadOnly(true)}
      />
    </SubTitleBar>
  );
};

export default SubTodoTitle;
