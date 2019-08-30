import React, { Component } from "react";
import { reduxForm } from "redux-form";

import PaymentFilterFields from "./PaymentFilterFields";
import { isAdmin, isTaxi, isCompany } from "../../services/auth";
import AdminVoucherFilterFields from "./AdminVoucherFilterFIelds";
import CompanyVoucherFilterFields from "./CompanyVoucherFilterFields";
import TaxiVoucherFilterFields from "./TaxiVoucherFilterFields";

class VouchersFilter extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="ui piled segment">
        <h4 className="ui header">Filtros</h4>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          {isAdmin() ? (
            this.props.payment ? (
              <PaymentFilterFields />
            ) : (
              <AdminVoucherFilterFields />
            )
          ) : (
            ""
          )}

          {isCompany() && <CompanyVoucherFilterFields />}

          {isTaxi() && <TaxiVoucherFilterFields />}

          <div className="ui right floated">
            <button
              type="submit"
              className="ui button blue"
              disabled={this.props.submitting}
            >
              <i className="filter icon" /> Filtrar
            </button>
            <button
              type="button"
              className="ui button"
              disabled={this.props.submitting}
              onClick={this.props.reset}
            >
              <i className="magic icon" /> Limpar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "vouchersFilter"
})(VouchersFilter);
