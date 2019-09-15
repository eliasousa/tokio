import React, { Component } from "react";

import { formatCurrency, formatDatetime } from "../../actions/utils";

import "./voucher.css";

export default class VoucherPrint extends Component {
  setFilter() {
    const firstVoucher = this.props.vouchers[0];

    const {
      taxi_id,
      company_id,
      employee_id,
      created_start_at,
      created_end_at
    } = this.props.filterValues;

    let newHash = {};

    if (taxi_id !== undefined) {
      newHash = { ...newHash, taxi: firstVoucher.taxi.smtt };
    }

    if (company_id !== undefined) {
      newHash = { ...newHash, company: firstVoucher.company.name };
    }

    if (employee_id !== undefined) {
      newHash = { ...newHash, employee: firstVoucher.employee.name };
    }

    if (employee_id !== undefined) {
      newHash = { ...newHash, employee: firstVoucher.employee.name };
    }

    if (created_start_at !== undefined) {
      newHash = { ...newHash, created_start_at: created_start_at };
    }

    if (created_end_at !== undefined) {
      newHash = { ...newHash, created_end_at: created_end_at };
    }

    return newHash;
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

  renderTable() {
    return this.props.vouchers.map(voucher => {
      return (
        <tr key={voucher.id}>
          <td>{voucher.id}</td>
          <td>{formatDatetime(voucher.inserted_at)}</td>
          <td>{voucher.taxi.smtt}</td>
          <td>{voucher.company.name}</td>
          <td>{voucher.employee.name}</td>
          <td>{voucher.from}</td>
          <td>{voucher.to}</td>
          <td>{formatCurrency(voucher.value)}</td>
        </tr>
      );
    });
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
        <div className="print">
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
          {this.renderFilterHeader(this.setFilter())}
          <table className="ui black striped unstackable table">
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Taxi</th>
                <th>Empresa</th>
                <th>Funcionário</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
          {this.renderTotalValue()}
        </div>
      );
    } else {
      return null;
    }
  }
}
