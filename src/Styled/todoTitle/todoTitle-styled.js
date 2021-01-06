import styled from "styled-components";

export const TitleBox = styled.div`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const TodoTitleItemBox = styled.div`
  display: block;
  width: 185px;
  background: transparent;
  align-items: center;
  font-size: 10px;
  font-family: Consolas;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 0 0 15px;
  &:hover,
  &:active {
   background: #3b3e59;
  }
}
`;

export const TitleInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-top: 1px solid #eddcd2;
  border-bottom: 1px solid #eddcd2;
  background: #ffffff;
`;
