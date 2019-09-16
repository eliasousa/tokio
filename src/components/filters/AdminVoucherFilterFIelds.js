import React, { Component } from "react";
import { Field } from "redux-form";

import TaxisSelect from "../vouchers/TaxisSelect";
import CompaniesSelect from "../vouchers/CompaniesSelect";
import { renderInput } from "../formHelpers";

export default class AdminVoucherFilterFields extends Component {
  render() {
    return (
      <>
        <Field
          name="voucher_id"
          component={renderInput}
          label="Voucher"
          type="number"
          fieldWidth="four"
        />
        <div className="four wide field">
          <CompaniesSelect />
        </div>
        <div className="four wide field">
          <TaxisSelect />
        </div>
      </>
    );
  }
}
