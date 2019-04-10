import React from "react";
import { Redirect } from "react-router-dom";

import { isAdmin } from "../services/auth";
import PrivateRoute from "./PrivateRoute";

const AdminRoute = ({ component: Component, ...rest }) => (
  <PrivateRoute
    {...rest}
    component={props =>
      isAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default AdminRoute;
