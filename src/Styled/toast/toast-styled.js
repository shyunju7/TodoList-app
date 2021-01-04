import styled from "styled-components";

export const Snackbar = styled.div`
  z-index: 100;
  position: absolute;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;
 
  animation-fill-mode: forwards;
`;