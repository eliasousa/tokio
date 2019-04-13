import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEmployee, updateEmployee } from "../../actions/employees";
import EmployeeForm from "./EmployeeForm";
import SectionHeader from "../layout/SectionHeader";

class EmployeeEdit extends Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateEmployee(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Editar Funcionário"
          subtitle="Gerenciamento dos Funcionários"
          icon="users"
        />
        <EmployeeForm
          initialValues={this.props.employee}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const e = state.employees[ownProps.match.params.id];

  if (e && e.sector) {
    return { employee: { ..._.omit(e, "sector"), sector_id: e.sector.id } };
  }

  return { employee: e };
};

export default connect(
  mapStateToProps,
  { fetchEmployee, updateEmployee }
)(EmployeeEdit);
