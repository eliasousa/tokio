import React, { Component } from "react";
import { connect } from "react-redux";

import { createSector } from "../../actions/sectors";
import SectorForm from "./SectorForm";
import SectionHeader from "../layout/SectionHeader";

class CompanyCreate extends Component {
  onSubmit = formValues => {
    this.props.createSector(formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Novo Setor"
          subtitle="Gerenciamento dos Setores"
          icon="sitemap"
        />
        <SectorForm
          initialValues={{ active: "true" }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createSector }
)(CompanyCreate);
