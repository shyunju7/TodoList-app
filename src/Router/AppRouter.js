import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../Page/Main";
import MyPage from "../Page/MyPage";
import NotFound from "../Page/NotFound";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import ModifyMyInfo from "../Page/ModifyMyInfo";
import { useSelector } from "react-redux";
const AppRouter = () => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  if (isLogin) {
    return (
      <Router>
        <Switch>
          <Route component={Main} path="/" exact={true} />
          <Route component={MyPage} path="/mypage" />
          <Route component={ModifyMyInfo} path="/modifymyinfo" />
          <Route component={NotFound} path="/404" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/" exact={true} />
        <Route component={SignUp} path="/signup" />
        <Route component={NotFound} path="/404" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
