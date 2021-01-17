import React, { useCallback, useState } from "react";
import { Text } from "../Styled/login/common-styled";
import { useSelector, useDispatch } from "react-redux";
import { modifyPw } from "../reducer/user";
import { UserInfoBox } from "../Styled/myPage/main-styled";

const ModifyMyInfo = ({ show, setShow }) => {
  const users = useSelector((state) => state.userReducer.users);
  const userId = useSelector((state) => state.loginReducer.loginUser);

  const dispatch = useDispatch();

  const findUser = users.find((u) => u.userId === userId);
  const [userPw, setUserPw] = useState(findUser.userPw);

  const onChange = useCallback(
    (e) => {
      setUserPw(e.target.value);
    },
    [userPw]
  );
  const modifyUserInfo = () => {
    dispatch(modifyPw(userId, userPw));
    alert("정상적으로 수정되었습니다.");
    setShow(!show);
  };

  return (
    <UserInfoBox>
      <Text>PASSWORD: </Text>
      <input
        name="userPw"
        type="password"
        value={userPw}
        onChange={onChange}
      ></input>
      <button onClick={modifyUserInfo}> 저장 </button>
    </UserInfoBox>
  );
};

export default ModifyMyInfo;
