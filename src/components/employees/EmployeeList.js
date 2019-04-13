import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEmployees } from "../../actions/employees";
import SectionHeader from "../layout/SectionHeader";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  renderActions(employee) {
    return (
      <div>
        <Link
          to={`/employees/${employee.id}/edit`}
          className="ui button inverted primary"
        >
          <i className="edit icon" /> Editar
        </Link>
      </div>
    );
  }

  renderTable() {
    return this.props.employees.map(employee => {
      return (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.sector && employee.sector.name}</td>
          <td>{employee.active ? "Sim" : "Não"}</td>
          <td className="right aligned">{this.renderActions(employee)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader
          title="Funcionários"
          subtitle="Gerenciamento dos Funcionários"
          icon="users"
        />
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Setor</th>
              <th>Ativo</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th colSpan="6">
                <Link
                  to="/employees/new"
                  className="ui right floated blue button"
                >
                  <i className="plus icon" /> Novo
                </Link>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: Object.values(state.employees)
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
