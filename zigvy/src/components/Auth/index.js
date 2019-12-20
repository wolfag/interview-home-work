import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import * as AuthAction from "store/auth/action";

function Login(props) {
  const dispatch = useDispatch();

  const _onLogin = async values => {
    dispatch(AuthAction.loginAction(values));
  };

  return <LoginForm onSubmit={_onLogin} />;
}

export default Login;
