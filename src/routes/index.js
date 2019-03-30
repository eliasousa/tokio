import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "../components/auth/Login";
import AdminList from "../components/admins/AdminList";
import AdminCreate from "../components/admins/AdminCreate";
import AdminEdit from "../components/admins/AdminEdit";
import AdminDelete from "../components/admins/AdminDelete";
import history from "../history";
import Header from "../components/Header";
import FlashMessage from "../components/FlashMessage";
import { isAuthenticated } from "../apis/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <FlashMessage />
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute exact path="/" component={() => <h1>Dashboard</h1>} />
          <PrivateRoute path="/admins" exact component={AdminList} />
          <PrivateRoute path="/admins/new" exact component={AdminCreate} />
          <PrivateRoute path="/admins/:id/edit" exact component={AdminEdit} />
          <PrivateRoute
            path="/admins/:id/delete"
            exact
            component={AdminDelete}
          />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Routes;
