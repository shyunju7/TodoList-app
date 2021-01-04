import { IconBox, Label, MenuBar, UserBox } from "../Styled/todo/header-styled";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styled/todo/header-styled.css";
import {logout} from "../reducer/login";
import {CgGirl} from "react-icons/cg"
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
        <IconBox><CgGirl size="80px" color="#343a40"/></IconBox>
        <Label>{userId}</Label>
      </UserBox>
      <MenuItem to="/myPage">MyPage</MenuItem>
      <MenuItem to="/">MyTodo</MenuItem>
      <MenuItem to="/mycalendar">MyCalendar</MenuItem>
      <div className="logout-box">
        <label className="logout" onClick={onClickLogout}>Logout</label>
      </div>
    </MenuBar>
  );
};

export default Header;
