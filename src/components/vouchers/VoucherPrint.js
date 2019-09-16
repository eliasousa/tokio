import React, { Component } from "react";

import { formatCurrency } from "../../actions/utils";
import VoucherListTable from "./VoucherListTable";

export default class VoucherPrint extends Component {
  translateFilter() {
    const firstVoucher = this.props.vouchers[0];

    const {
      taxi_id,
      company_id,
      employee_id,
      created_start_at,
      created_end_at
    } = this.props.filterValues;

    return {
      ...(taxi_id && { taxi: firstVoucher.taxi.smtt }),
      ...(company_id && { company: firstVoucher.company.name }),
      ...(employee_id && { employee: firstVoucher.employee.name }),
      ...(created_start_at && { created_start_at }),
      ...(created_end_at && { created_end_at })
    };
  }

  renderFilterHeader(filterParams) {
    return (
      <div className="ui medium labels">
        {filterParams.created_start_at && (
          <div className="ui label">
            <i className="calendar alternate icon"></i>
            Data Inicio:
            <span className="detail">{filterParams.created_start_at}</span>
          </div>
        )}
        {filterParams.created_end_at && (
          <div className="ui label">
            <i className="calendar alternate icon"></i>
            Data Fim:
            <span className="detail">{filterParams.created_end_at}</span>
          </div>
        )}
        {filterParams.taxi && (
          <div className="ui label">
            <i className="taxi icon"></i>
            Taxi:
            <span className="detail">{filterParams.taxi}</span>
          </div>
        )}
        {filterParams.company && (
          <div className="ui label">
            <i className="building icon"></i>
            Empresa:
            <span className="detail">{filterParams.company}</span>
          </div>
        )}
        {filterParams.employee && (
          <div className="ui label">
            <i className="users icon"></i>
            Funcionário:
            <span className="detail">{filterParams.employee}</span>
          </div>
        )}
      </div>
    );
  }

  renderTotalValue() {
    const totalValues = this.props.vouchers.reduce(
      (totalValues, voucher) => totalValues + parseInt(voucher.value, 10),
      0
    );

    return (
      <div className="ui label big">
        <i className="dollar icon"></i>
        Valor Total:
        <span className="detail">{formatCurrency(totalValues)}</span>
      </div>
    );
  }

  render() {
    if (this.props.vouchers && this.props.vouchers.length > 0) {
      return (
        <>
          <div className="ui grid middle aligned">
            <div className="eight wide column">
              <img
                className="ui small image"
                src="/logo_voo.png"
                alt="Voo de Taxi logo"
              ></img>
            </div>
            <div className="eight wide column">
              <p className="ui right floated header">Relatório de Vouchers</p>
            </div>
          </div>
          {this.renderFilterHeader(this.translateFilter())}

          <VoucherListTable vouchers={this.props.vouchers} />

          {this.renderTotalValue()}
        </>
      );
    } else {
      return null;
    }
  }
}
