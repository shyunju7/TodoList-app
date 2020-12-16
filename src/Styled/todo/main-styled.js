import styled from "styled-components";

export const MenuBar = styled.div`
  width: 300px;
  height: 600px;
  float: left;
  background: #33364d;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
`;

export const MainView = styled.div`
  margin-left: 200px;
  height: 700px;
  background: #f4f1de;
  text-align : center;
`;

export const UserBox = styled.div`
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
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #ffffff;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 20px;
  font-family: Consolas;
`;
