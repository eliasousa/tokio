import React, { Component } from "react";
import { connect } from "react-redux";

import { createEmployee } from "../../actions/employees";
import EmployeeForm from "./EmployeeForm";
import SectionHeader from "../layout/SectionHeader";

class EmployeeCreate extends Component {
  onSubmit = formValues => {
    this.props.createEmployee(formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Novo Funcionário"
          subtitle="Gerenciamento dos Funcionários"
          icon="users"
        />
        <EmployeeForm
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
  { createEmployee }
)(EmployeeCreate);
