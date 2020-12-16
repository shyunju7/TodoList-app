import { IconBox, Label, MenuBar, UserBox } from "../Styled/todo/header-styled";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styled/todo/header.css";
import {logout} from "../reducer/login";
import {Router} from "@material-ui/icons";

const MenuItem = ({onClick, children, to }) => (
  <Link to={to} className='menu-item' onClick={onClick}>
    {children}
  </Link>
);

const Header = () => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
      dispatch(logout());
  };


  return (
    <MenuBar>
      <UserBox>
        <IconBox></IconBox>
        <Label>{userId}</Label>
      </UserBox>
      <MenuItem to="/myPage">MyPage</MenuItem>
      <MenuItem to="/">MyTodo</MenuItem>
      <MenuItem to="/team/todo">TeamTodo</MenuItem>
      <div className="logout-box">
        <label className="logout" onClick={onClickLogout}>Logout</label>
      </div>
    </MenuBar>
  );
};

export default Header;
