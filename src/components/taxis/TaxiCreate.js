import React, { Component } from "react";
import { connect } from "react-redux";
import { createTaxi } from "../../actions/taxis";
import TaxiForm from "./TaxiForm";

class TaxiCreate extends Component {
  onSubmit = formValues => {
    this.props.createTaxi(formValues);
  };

  render() {
    return (
      <div>
        <h2 className="ui header">
          <i className="taxi icon" />
          <div className="content">
            Novo Taxi
            <div className="sub header">Gerenciamento dos Taxis</div>
          </div>
        </h2>
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
