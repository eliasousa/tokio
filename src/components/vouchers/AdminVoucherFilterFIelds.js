import React, { Component } from "react";
import { Field } from "redux-form";

import TaxisSelect from "./TaxisSelect";
import CompaniesSelect from "./CompaniesSelect";
import { renderInput, renderDatePicker } from "../formHelpers";

export default class AdminVoucherFilterFields extends Component {
  render() {
    return (
      <>
        <div className="fields">
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
          <div className="four wide field">
            <label>Data Inicio</label>
            <Field name="created_start_at" component={renderDatePicker} />
          </div>
          <div className="four wide field">
            <label>Data Fim</label>
            <Field name="created_end_at" component={renderDatePicker} />
          </div>
        </div>
      </>
    );
  }
}
