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
import Header from "../Components/Header";
import MyCalendar from "../Page/MyCalendar";
import MyTodo from "../Page/MyTodo";
import TeamTodo from "../Page/TeamTodo";
const AppRouter = () => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  if (isLogin) {
    return (
      <Router>
        <Header />
        <Switch>
          <Route component={MyTodo} path="/" exact={true} />
          <Route component={TeamTodo} path="/teamTodo" />
          <Route component={MyCalendar} path="/mycalendar"  />
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
