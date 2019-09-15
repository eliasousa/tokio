import React, { Component } from "react";

import { formatCurrency, formatDatetime } from "../../actions/utils";

export default class VoucherListTable extends Component {
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

  render() {
    return (
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
    );
  }
}
