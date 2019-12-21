import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import Login from "components/Auth";
import Blogs from "components/Blog";
import Profile from "components/Profile";
import * as AuthSelector from "store/auth/selector";
import PrivateRoute from "./PrivateRoute";

import { history } from "store";

const routes = [
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
  const isAuthenticated = useSelector(AuthSelector.getAuthToken);
  // console.log("----", history);
  return (
    <Switch>
      {privateRoutes.map(route => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
      {!isAuthenticated &&
        routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
    </Switch>
  );
}

export default Router;
