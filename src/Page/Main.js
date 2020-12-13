import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../Styled/CommonStyled";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducer/login";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { Menu, MenuItem, Title } from "../Styled/MainStyled";

const Main = () => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Menu>
        <MenuItem><Link to="/">MyTodo</Link></MenuItem>
        <MenuItem><Link to="/myPage">MyPage</Link></MenuItem>
        <MenuItem onClick={onClickLogout}> Logout</MenuItem>
      </Menu>

      <TodoTemplate>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default Main;
