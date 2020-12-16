import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducer/login";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

import { MainView } from "../Styled/todo/main-styled";
import Header from "../Components/Header";

const Main = ({ children }) => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Header />
      <MainView>{children}</MainView>
    </div>
  );
};

export default Main;
