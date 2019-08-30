import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchEmployees } from "../../actions/employees";

class EmployeesSelect extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees } = this.props;

    if (!employees) return "carregando...";

    return (
      <>
        <label>Funcionário</label>
        <Field name="employee_id" className="ui dropdown" component="select">
          <option value="">Selecione</option>
          {employees.map(employee => {
            return (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            );
          })}
        </Field>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { employees: Object.values(state.employees) };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeesSelect);
