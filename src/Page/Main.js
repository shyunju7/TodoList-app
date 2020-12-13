import React from "react";
import { Link } from "react-router-dom";
import { Button, Text, Title, TitleBox } from "../Styled/CommonStyled";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducer/login";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

const Main = () => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header>
        <Title>MAIN</Title>
        <TitleBox>
          <Text> {userId}님, 환영합니다.</Text>
          <Link to="/myPage">
            <button> 마이페이지 </button>
          </Link>
          <button onClick={onClickLogout}> 로그아웃 </button>
        </TitleBox>
      </header>

      <TodoTemplate>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default Main;
