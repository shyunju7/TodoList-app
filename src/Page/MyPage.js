import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../reducer/user";
import { logout } from "../reducer/login";
import { Title } from "../Styled/todo/common-styled";
import {
  Button,
  SubTitle,
  UserInfo,
  UserInfoBox,
} from "../Styled/myPage/main-styled";
import ModifyMyInfo from "./ModifyMyInfo";

const MyPage = ({ history }) => {
  const users = useSelector((state) => state.userReducer.users);
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const [click, setClicked] = useState(false);
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

  const updatePw = () => {
    setClicked(true);
  };

  return (
    <div>
      <Title>MY PAGE</Title>
      <SubTitle> 회원 정보 </SubTitle>
      <UserInfoBox>
        <UserInfo name="userId"> 아이디 : {userId}</UserInfo>
        <UserInfo name="teamId"> 소속 : {findUser.teamId}</UserInfo>
      </UserInfoBox>

      <SubTitle> 비밀번호 변경하기 </SubTitle>
      <Button show={click} onClick={updatePw}>
        비밀번호 변경하기
      </Button>
      {click ? <ModifyMyInfo show={click} setShow={setClicked} /> : <div />}

      <SubTitle> 회원 탈퇴하기 </SubTitle>
      <Button onClick={unsubscribe}> 회원 탈퇴하기 </Button>
    </div>
  );
};

export default MyPage;
