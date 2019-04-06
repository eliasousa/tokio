import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTaxi, updateTaxi } from "../../actions/taxis";
import TaxiForm from "./TaxiForm";
import SectionHeader from "../layout/SectionHeader";

class TaxiEdit extends Component {
  componentDidMount() {
    this.props.fetchTaxi(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateTaxi(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Editar Taxi"
          subtitle="Gerenciamento dos Taxis"
          icon="taxi"
        />
        <TaxiForm initialValues={this.props.taxi} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { taxi: state.taxis[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTaxi, updateTaxi }
)(TaxiEdit);
