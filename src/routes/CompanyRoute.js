import React from "react";
import { Redirect } from "react-router-dom";

import { isCompany } from "../services/auth";
import PrivateRoute from "./PrivateRoute";

const CompanyRoute = ({ component: Component, ...rest }) => (
  <PrivateRoute
    {...rest}
    component={props =>
      isCompany() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default CompanyRoute;
