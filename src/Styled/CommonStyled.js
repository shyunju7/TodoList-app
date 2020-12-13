import styled from "styled-components";

export const Div = styled.div`
  text-align: center;
  border: none;
  border-radius: 4px;
  margin: 5% 30%;
  padding: 10%;
  font-weight: bold;
  color: #586da2;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  background: ${(props) => props.color || "#F9FAFE"};
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  margin-left: 10px;
  padding: 10px 70px;
  background: #2a3f75;

  &:hover,
  &:active {
    background: #8496c3;
  }
`;

export const Text = styled.label`
  font-size: 12px;
`;



