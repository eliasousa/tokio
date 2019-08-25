import React from "react";

import { Checkbox, Table } from "semantic-ui-react";
import { formatDatetime, formatCurrency } from "../../actions/utils";

const VouchersTable = ({ vouchers, onChecked }) => {
  return vouchers.map(voucher => {
    return (
      <Table.Row key={voucher.id}>
        <Table.Cell collapsing>
          {voucher.paid_at === null && (
            <Checkbox id={voucher.id} onChange={onChecked} />
          )}
        </Table.Cell>
        <Table.Cell>{voucher.id}</Table.Cell>
        <Table.Cell>{formatCurrency(voucher.value)}</Table.Cell>
        <Table.Cell>{formatDatetime(voucher.inserted_at)}</Table.Cell>
        <Table.Cell>{voucher.from}</Table.Cell>
        <Table.Cell>{voucher.to}</Table.Cell>
        <Table.Cell>{voucher.company.name}</Table.Cell>
        <Table.Cell>
          {voucher.paid_at !== null ? formatDatetime(voucher.paid_at) : "-"}
        </Table.Cell>
      </Table.Row>
    );
  });
};

export default VouchersTable;
