import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCompanies } from "../../actions/companies";
import SectionHeader from "../layout/SectionHeader";

class CompanyList extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  renderActions(company) {
    return (
      <div>
        <Link
          to={`/companies/${company.id}/edit`}
          className="ui button inverted primary"
        >
          <i className="edit icon" /> Editar
        </Link>
      </div>
    );
  }

  renderTable() {
    return this.props.companies.map(company => {
      return (
        <tr key={company.id}>
          <td>{company.name}</td>
          <td>{company.email}</td>
          <td>{company.active ? "Sim" : "Não"}</td>
          <td className="right aligned">{this.renderActions(company)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader
          title="Empresas"
          subtitle="Gerenciamento das Empresas"
          icon="building outline"
        />
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ativo</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th colSpan="4">
                <Link
                  to="/companies/new"
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
    companies: Object.values(state.companies)
  };
};

export default connect(
  mapStateToProps,
  { fetchCompanies }
)(CompanyList);
