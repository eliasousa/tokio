import React, { Component } from "react";
import { connect } from "react-redux";

import { createTaxi } from "../../actions/taxis";
import TaxiForm from "./TaxiForm";
import SectionHeader from "../layout/SectionHeader";

class TaxiCreate extends Component {
  onSubmit = formValues => {
    this.props.createTaxi(formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Novo Taxi"
          subtitle="Gerenciamento dos Taxis"
          icon="taxi"
        />
        <TaxiForm
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
  { createTaxi }
)(TaxiCreate);
