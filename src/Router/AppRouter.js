import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MyPage from "../Page/MyPage";
import NotFound from "../Page/NotFound";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import ModifyMyInfo from "../Page/ModifyMyInfo";
import { useSelector } from "react-redux";
import TodoPage from "../Page/MyTodo";
import Header from "../Components/Header";
import TeamTodo from "../Page/TeamTodo";
import MyTodo from "../Page/MyTodo";
const AppRouter = () => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  if (isLogin) {
    return (
      <Router>
        <Header />
        <Switch>
          <Route component={MyTodo} path="/" exact={true} />
          <Route component={TeamTodo} path="/team/Todo"  />
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
