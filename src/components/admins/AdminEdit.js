import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAdmin, editAdmin } from "../../actions/admins";
import AdminForm from "./AdminForm";
import SectionHeader from "../layout/SectionHeader";

class AdminEdit extends Component {
  componentDidMount() {
    this.props.fetchAdmin(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editAdmin(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Editar Admin"
          subtitle="Gerenciamento dos Administradores"
          icon="address book outline"
        />
        <AdminForm initialValues={this.props.admin} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { admin: state.admins[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchAdmin, editAdmin }
)(AdminEdit);
