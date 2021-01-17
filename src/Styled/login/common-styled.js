import styled from "styled-components";

export const Div = styled.div`
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  margin: 5% 30%;
  padding: 10%;
  font-weight: bold;
  color: #586da2;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  background: ${(props) => props.color || "#F9FAFE"};
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  width: 210px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  font-family: Consolas;
  padding: 10px 70px;
  background: #33364d;
  &:hover,
  &:active {
    background: #3b3e59;
  }
`;

export const Label = styled.label`
  text-align: center;
  display: block;
  margin-right: 10px;
  font-size: 10px;
  color: #000000;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  height: 25px;
  width: 200px;
`;

export const Text = styled.label`
  font-size: 12px;
  margin: 0 2rem;
`;
