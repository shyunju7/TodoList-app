import styled from "styled-components";

export const MenuBar = styled.div`
  width: 200px;
  height: 100vh;
  margin-right: 2rem;
  float: left;
  background: #33364d;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
`;

export const UserInfoBox = styled.div`
  width: 100px;
  margin: 30px auto;
  justify-contents: center;
  text-align: center;
`;

export const IconBox = styled.div`
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 1);
  margin: 5px auto;
  align-items: center;
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #ffffff;
`;

export const UserId = styled.label`
  color: #ffffff;
  font-size: 15px;
  font-family: Consolas;
`;

export const AddBtn = styled.button`
  margin-left: 100px;
`;
