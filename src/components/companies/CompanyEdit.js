import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCompany, updateCompany } from "../../actions/companies";
import CompanyForm from "./CompanyForm";
import SectionHeader from "../layout/SectionHeader";

class CompanyEdit extends Component {
  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateCompany(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Editar Empresa"
          subtitle="Gerenciamento das Empresas"
          icon="building outline"
        />
        <CompanyForm
          initialValues={this.props.company}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { company: state.companies[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCompany, updateCompany }
)(CompanyEdit);
