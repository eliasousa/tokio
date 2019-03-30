import React, { Component } from "react";
import { connect } from "react-redux";
import { createAdmin } from "../../actions";
import AdminForm from "./AdminForm";

class AdminCreate extends Component {
  onSubmit = formValues => {
    this.props.createAdmin(formValues);
  };

  render() {
    return (
      <div>
        <h3>Novo Admin</h3>
        <AdminForm
          initialValues={{ active: "true" }}
          onSubmit={this.onSubmit}
          validatePassword={true}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createAdmin }
)(AdminCreate);
