import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import AdminList from "./admins/AdminList";
import AdminCreate from "./admins/AdminCreate";
import AdminEdit from "./admins/AdminEdit";
import AdminDelete from "./admins/AdminDelete";
import history from "../history";
import Header from "./Header";
import FlashMessage from "./FlashMessage";

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <FlashMessage />
            <Switch>
              <Route path="/admins" exact component={AdminList} />
              <Route path="/admins/new" exact component={AdminCreate} />
              <Route path="/admins/:id/edit" exact component={AdminEdit} />
              <Route path="/admins/:id/delete" exact component={AdminDelete} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
