import React from "react";
import { Switch } from "react-router";

import Login from "components/Auth";
import Blogs from "components/Blog";
import Profile from "components/Profile";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

const authRoutes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/login",
    component: Login
  }
];

const privateRoutes = [
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/blogs",
    component: Blogs
  }
];

function Router(props) {
  return (
    <Switch>
      {privateRoutes.map(route => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
      {authRoutes.map(route => (
        <AuthRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default Router;
