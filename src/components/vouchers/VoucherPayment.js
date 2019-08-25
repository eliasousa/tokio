import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Message } from "semantic-ui-react";

import { fetchVouchers, payVouchers } from "../../actions/vouchers";
import SectionHeader from "../layout/SectionHeader";
import VoucherTaxiAccordions from "./VoucherTaxiAccordions";
import { formatCurrency } from "../../actions/utils";

class VoucherPayment extends Component {
  state = { checkedIds: [] };

  componentDidMount() {
    this.props.fetchVouchers();
  }

  onChecked = e => {
    const ids = this.state.checkedIds;
    let index;

    if (e.target.checked) {
      ids.push(+e.target.id);
    } else {
      index = ids.indexOf(+e.target.id);
      ids.splice(index, 1);
    }

    this.setState({ checkedIds: ids });
  };

  onSubmit = e => {
    this.props.payVouchers(this.state.checkedIds);
  };

  totalToPay = () => {
    let total = _(this.props.vouchers)
      .filter(v => {
        return v.paid_at === null;
      })
      .sumBy(v => {
        return v.value;
      });

    return formatCurrency(total);
  };

  render() {
    const taxis = _(this.props.vouchers)
      .groupBy(x => x.taxi.smtt)
      .map((value, key) => ({ smtt: key, vouchers: value }))
      .value();

    return (
      <div>
        <SectionHeader
          title="Pagamento"
          subtitle="Gerenciamento de pagamento"
          icon="money"
        />
        <Message
          icon="dollar"
          color="blue"
          header="Total bruto a pagar:"
          content={this.totalToPay()}
        />
        <VoucherTaxiAccordions
          taxis={taxis}
          onChecked={this.onChecked}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vouchers: Object.values(state.vouchers)
  };
};

export default connect(
  mapStateToProps,
  { fetchVouchers, payVouchers }
)(VoucherPayment);
