import React from "react";
import { Button, Text } from "../Styled/login/commonStyled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../reducer/user";
import {logout} from "../reducer/login";
import {Title} from "../Styled/todo/common-styled";
import {Label} from "../Styled/todo/header-styled";

const MyPage = ({ history }) => {
  const users = useSelector((state) => state.userReducer.users);
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const findUser = users.find((u) => u.userId === userId);

  const dispatch = useDispatch();

  const unsubscribe = () => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      dispatch(deleteUser(userId));
      dispatch(logout());
      alert("회원탈퇴 완료!");
      history.push("/");
    }
  };

  return (
    <div>
      <Title>MY PAGE</Title>
      <h3 name="userId">ID: {userId}</h3>
      <br />
      <Text name="userPw">PASSWORD:{findUser.userPw} </Text>
      <br />
      <br />
      <Link to="/modifymyinfo">
        <Button> 비밀번호 변경하기 </Button>
        <Button onClick={unsubscribe}> 회원 탈퇴하기 </Button>
      </Link>
    </div>
  );
};

export default MyPage;
