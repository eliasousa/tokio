import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchCompanies } from "../../actions/companies";

class CompaniesSelect extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    const { companies } = this.props;

    if (!companies) return "carregando...";

    return (
      <>
        <label>Empresa</label>
        <Field name="company_id" className="ui dropdown" component="select">
          <option value="">Selecione</option>
          {companies.map(company => {
            return (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            );
          })}
        </Field>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { companies: Object.values(state.companies) };
};

export default connect(
  mapStateToProps,
  { fetchCompanies }
)(CompaniesSelect);
