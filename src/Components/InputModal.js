import React, { useState } from "react";
import "../Styled/modal/modals.scss";
import { Input } from "../Styled/todo/todoInput-styled";
import { useDispatch, useSelector } from "react-redux";
import { todoInsert } from "../reducer/todo";

const InputModal = ({ isOpen, close }) => {
  const [input, setInput] = useState("");
  const [radioValue, setRadioValue] = useState("I");
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const randomNum = Math.random().toString(36).substr(2, 11).toUpperCase();
  let id = "";
  const dispatch = useDispatch();

  const checkedRadioBtn = (e) => {
    setRadioValue(e.target.value);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onRemove = () => {
    setInput("");
  };

  const addTodo = () => {
    if (input.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    id = radioValue + randomNum;
    dispatch(todoInsert(userId, id, "2021/01/10", input));
    onRemove();
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className="Modal-overlay" />
          <div className="Modal">
            <p className="title">NEW Todo</p>
            <div className="content">
              <p> 공 유 </p>
              <label>
                <input type="radio" name="share" id="individual" value="I" defaultChecked onChange={checkedRadioBtn}/>
                개인
              </label>
              <label>
                <input type="radio" name="share" id="team" value="T" onChange={checkedRadioBtn}/> 팀
              </label>
              <p>내 용 </p>
              <Input
                placeholder="할 일을 입력하세요.. "
                onChange={onChangeInput}
                value={input}
              />
            </div>
            <div className="button-wrap">
              <button className="cancelBtn" onClick={close}>
                취소
              </button>
              <button className="confirmBtn" onClick={addTodo}>
                확인
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InputModal;
