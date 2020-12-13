import styled from "styled-components";

export const InputDiv = styled.div`
    text-align : center;
`;

export const Label = styled.label`
    text-align : center;
    display : block;
    margin-right : 10px;
    font-size : 10px;
`;

export const Input = styled.input`
    margin-bottom : 10px;
    height : 25px;
    width : 200px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  padding: 10px 70px;
  background: #2a3f75;

  &:hover,
  &:active {
    background: #8496c3;
  }
`;

export const ErrorMsg = styled.p`
  
  color: red;
  font-size: 5px;
`;

export const Msg = styled.p`
  color: green;
  font-size: 5px;
`;
