import React, { Component } from "react";
import { connect } from "react-redux";
import { createAdmin } from "../../actions/admins";
import AdminForm from "./AdminForm";

class AdminCreate extends Component {
  onSubmit = formValues => {
    this.props.createAdmin(formValues);
  };

  render() {
    return (
      <div>
        <h2 className="ui header">
          <i className="address book outline icon" />
          <div className="content">
            Novo Admin
            <div className="sub header">Gerenciamento dos Administradores</div>
          </div>
        </h2>
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
