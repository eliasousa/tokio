import React, { Component } from "react";
import { connect } from "react-redux";

import { createCompany } from "../../actions/companies";
import CompanyForm from "./CompanyForm";
import SectionHeader from "../layout/SectionHeader";

class CompanyCreate extends Component {
  onSubmit = formValues => {
    this.props.createCompany(formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Nova Empresa"
          subtitle="Gerenciamento das Empresas"
          icon="building outline"
        />
        <CompanyForm
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
  { createCompany }
)(CompanyCreate);
