import styled from "styled-components";

export const TodoInputBox = styled.div`
  outline: none;
  border: none;
  display: flex;
  margin: 0 2rem;
`;

export const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-top: 1px solid #eddcd2;
  border-bottom: 1px solid #eddcd2;
  background: transparent;
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  border-radius: 1%;
  background-color: #F28366;
  padding: 1rem 1rem;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #E67C60;
    color: #ffffff;
  }
  &:active {
    background-color: #E67C60;
    color: #ffffff;
  }
`;
