import styled from "styled-components";

export const TodoItemBox = styled.div`
  display: flex;
  outline: none;
  border: none;
  margin: 0 1rem;
  border-bottom: 1px solid #eddcd2;
  width: 250px;
  align-items: center;
  
`;

export const CheckBox = styled.div`
  display: inline;
  margin: 0 0.5rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: ${(props) => props.color || "gray"};
`;

export const TextBox = styled.input`
  flex: 1;
  display: inline;
  border: none;
  outline: none;
  background-color: transparent;
  width: 250px;
  font-size: 10px;
  cursor: default;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "black")};
`;

export const Button = styled.div`
  display: inline;
  width: 30px;
  background-color: none;
  border: none;
  cursor: pointer;
`;
