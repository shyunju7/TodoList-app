import {
  AddBtn,
  IconBox,
  MenuBar,
  UserInfoBox,
  UserId,
} from "../Styled/header/header-styled";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styled/header/header-styled.css";
import { logout } from "../reducer/login";
import { CgGirl } from "react-icons/cg";
import TodoTitleInput from "./TodoTitleInput";
import TodoTitleList from "./TodoTitleList";

const MenuItem = ({ onClick, children, to }) => (
  <Link to={to} className="menu-item" onClick={onClick}>
    {children}
  </Link>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  const onClickAddBtn = () => {
    setShow(true);
  };

  return (
    <MenuBar>
      <UserInfoBox>
        <IconBox>
          <CgGirl size="60px" color="#343a40" />
        </IconBox>
        <UserId>{userId}</UserId>
      </UserInfoBox>

      <MenuItem to="/myPage">MyPage</MenuItem>
      <MenuItem to="/">
        MyTodo
        <AddBtn onClick={onClickAddBtn}>+</AddBtn>
      </MenuItem>

      <TodoTitleInput show={show} setShow={setShow} />
      <TodoTitleList />

      <div className="logout-box">
        <label className="logout" onClick={onClickLogout}>
          Logout
        </label>
      </div>
    </MenuBar>
  );
};

export default Header;
