import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Login from "../components/auth/Login";
import AdminList from "../components/admins/AdminList";
import AdminCreate from "../components/admins/AdminCreate";
import AdminEdit from "../components/admins/AdminEdit";
import AdminDelete from "../components/admins/AdminDelete";
import Header from "../components/Header";
import FlashMessage from "../components/FlashMessage";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const Routes = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <FlashMessage />
        <Switch>
          <PrivateRoute exact path="/" component={() => <h1>Dashboard</h1>} />

          <AdminRoute exact path="/admins" component={AdminList} />
          <AdminRoute exact path="/admins/new" component={AdminCreate} />
          <AdminRoute exact path="/admins/:id/edit" component={AdminEdit} />
          <AdminRoute exact path="/admins/:id/delete" component={AdminDelete} />

          <Route exact path="/login" component={Login} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Routes;
