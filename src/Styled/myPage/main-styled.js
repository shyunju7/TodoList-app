import styled from "styled-components";

export const UserInfoBox = styled.div`
  margin: 0 18%;
  width: 700px;
  height: 50pxs;
  background: #f0efeb;
  padding: 10px;
  align-items: left;
`;

export const UserInfo = styled.label`
  text-align: flex-start;
  display: block;
  margin-right: 10px;
  font-size: 20px;
  color: #000000;
`;

export const SubTitle = styled.h3`
  margin: 0 2rem;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  color: #000000;
`;

export const Button = styled.button`
  margin: 0 0 1rem 1rem;
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
`;
