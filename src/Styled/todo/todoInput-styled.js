import styled from "styled-components";

export const TodoInputBox = styled.div`
  outline: none;
  border: none;
  display: flex;
  margin: 0 1rem;
  width: 250px;
  height: 25px;
  margin-bottom: 1px;
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
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  
  outline: none;
  border: none;
  background-color: #F28366;
  color: #ffffff;
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