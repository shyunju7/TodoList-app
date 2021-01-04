import React from "react";
import { BiError } from "react-icons/bi";
import {Div} from "../Styled/login/common-styled";
const NotFound = () => {
  return (
    <Div>
      <h1>
        <BiError color="red" />
      </h1>
      <h3>NOT FOUND PAGE</h3>
    </Div>
  );
};
export default NotFound;
