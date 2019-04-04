import React, { Component } from "react";
import { connect } from "react-redux";

import { createAdmin } from "../../actions/admins";
import AdminForm from "./AdminForm";
import SectionHeader from "../layout/SectionHeader";

class AdminCreate extends Component {
  onSubmit = formValues => {
    this.props.createAdmin(formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Novo Admin"
          subtitle="Gerenciamento dos Administradores"
          icon="address book outline"
        />
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
