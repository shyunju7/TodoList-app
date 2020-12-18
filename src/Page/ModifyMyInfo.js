import React, { useCallback, useState } from "react";
import { Button, Text } from "../Styled/login/commonStyled";
import { useSelector, useDispatch } from "react-redux";
import { modifyPw } from "../reducer/user";
import {withRouter} from "react-router-dom";

const ModifyMyInfo = ({history}) => {
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

  };

  return (
    <div>
      <Text>PASSWORD: </Text>
      <input name="userPw" value={userPw} onChange={onChange}></input>
      <Button onClick={modifyUserInfo}> 저장 </Button>
    </div>
  );
};

export default ModifyMyInfo;
