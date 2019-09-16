import React, { Component, Fragment } from "react";
import { Accordion, Icon, Table, Button, Checkbox } from "semantic-ui-react";

import { formatDatetime, formatCurrency } from "../../actions/utils";

export default class VoucherTaxiAccordions extends Component {
  state = { activeIndex: null };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderTable(vouchers, onChecked) {
    return vouchers.map(voucher => {
      return (
        <Table.Row key={voucher.id}>
          <Table.Cell collapsing>
            {voucher.paid_at === null && (
              <Checkbox
                id={`voucher_${voucher.id}`}
                value={voucher.id}
                onChange={onChecked}
              />
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
  }

  renderAccordions() {
    const { activeIndex } = this.state;

    return this.props.taxis.map(taxi => {
      return (
        <Fragment key={taxi.smtt}>
          <Accordion.Title
            active={activeIndex === taxi.smtt}
            index={taxi.smtt}
            onClick={this.handleClick}
          >
            <Icon name="taxi" />
            {taxi.smtt}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === taxi.smtt}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>Valor</Table.HeaderCell>
                  <Table.HeaderCell>Data da corrida</Table.HeaderCell>
                  <Table.HeaderCell>Origem</Table.HeaderCell>
                  <Table.HeaderCell>Destino</Table.HeaderCell>
                  <Table.HeaderCell>Empresa</Table.HeaderCell>
                  <Table.HeaderCell>Pago em</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.renderTable(taxi.vouchers, this.props.onChecked)}
              </Table.Body>
            </Table>
          </Accordion.Content>
        </Fragment>
      );
    });
  }

  render() {
    return (
      <>
        <Accordion styled fluid>
          {this.renderAccordions()}
        </Accordion>
        <br />
        <Button color="green" floated="right" onClick={this.props.onSubmit}>
          <Icon name="money" /> Pagar
        </Button>
      </>
    );
  }
}
