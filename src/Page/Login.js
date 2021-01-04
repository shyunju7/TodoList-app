import React, { useCallback, useState } from "react";
import { Div, Button } from "../Styled/login/commonStyled";
import { Link } from "react-router-dom";
import { Input, Label } from "../Styled/login/commonStyled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducer/login";
import "../Styled/login/login.css";
import {Title} from "../Styled/todo/common-styled";
import {todoCall} from "../reducer/todo";
const Login = () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onReset = useCallback(() => {
    setUserId("");
    setUserPw("");
  }, [setUserId, setUserPw]);

  const checkSpace = (value) => {
    const space = /\s/;
    if (space.exec(value)) {
      alert("공백은 입력할 수 없습니다.");
      value.replace(space, "");
      return;
    }
  };

  const onChangeInput = useCallback(
    (e) => {
      const { value, name } = e.target;

      checkSpace(value);

      if (name === "userId") setUserId(value);
      else if (name === "userPw") setUserPw(value);
    },
    [userId, userPw]
  );

  const validationCheck = () => {
    if (userId.length == 0 || userPw.length == 0) {
      alert("모든 값을 입력해주세요!");
      return false;
    }
    return true;
  };

  const onLogin = () => {
    if (validationCheck()) {
      const findUser = users.find((user) => user.userId === userId);

      if (!findUser) {
        alert("가입된 정보가 없습니다.");
        onReset();
        return;
      } else if (findUser.userPw !== userPw) {
        alert("입력하신 비밀번호가 일치하지 않습니다.");
        setUserPw("");
      } else if (findUser.userPw === userPw) {
        alert("로그인 성공!");
        dispatch(login(userId));
        //dispatch(todoCall(userId));
      }
    }
  };

  return (
    <Div>
      <Title>LOGIN</Title>
      <Label>아이디</Label>
      <Input
        name="userId"
        value={userId}
        placeholder="아이디 입력"
        onChange={onChangeInput}
        required
      />
      <br />
      <br />
      <Label>비밀번호</Label>
      <Input
        name="userPw"
        type="password"
        placeholder="비밀번호 입력"
        value={userPw}
        onChange={onChangeInput}
        required
      />
      <br />
      <br />
      <Button onClick={onLogin}> 로그인 </Button>
      <br />
      <br />
      <Link to="/signup" className="signup">회원가입하기</Link>
    </Div>
  );
};
export default Login;
