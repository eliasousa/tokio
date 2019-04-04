import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaxi, editTaxi } from "../../actions/taxis";
import TaxiForm from "./TaxiForm";

class TaxiEdit extends Component {
  componentDidMount() {
    this.props.fetchTaxi(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editTaxi(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h2 className="ui header">
          <i className="taxi icon" />
          <div className="content">
            Editar Taxi
            <div className="sub header">Gerenciamento dos Taxis</div>
          </div>
        </h2>
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
  { fetchTaxi, editTaxi }
)(TaxiEdit);
