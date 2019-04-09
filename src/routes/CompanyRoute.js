import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, isCompany } from "../services/auth";

const CompanyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        isCompany() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default CompanyRoute;
