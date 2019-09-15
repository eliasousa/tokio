import React, { Component } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink
} from "@react-pdf/renderer";

import { formatCurrency, formatDatetime } from "../../actions/utils";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "solid";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  logoVoo: {
    width: "150px"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },
  filterHeader: {
    marginBottom: 5
  },
  filterText: {
    fontSize: 12
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "10%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol: {
    width: "10%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  }
});

const renderTable = vouchers => {
  return vouchers.map(voucher => {
    return (
      <View style={styles.tableRow} key={voucher.id}>
        <View style={{ ...styles.tableCol, width: "5%" }}>
          <Text style={styles.tableCell}>{voucher.id}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "15%" }}>
          <Text style={styles.tableCell}>
            {formatDatetime(voucher.inserted_at)}
          </Text>
        </View>
        <View style={{ ...styles.tableCol, width: "5%" }}>
          <Text style={styles.tableCell}>{voucher.taxi.smtt}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "14%" }}>
          <Text style={styles.tableCell}>{voucher.company.name}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "13%" }}>
          <Text style={styles.tableCell}>{voucher.employee.name}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "15%" }}>
          <Text style={styles.tableCell}>{voucher.from}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "15%" }}>
          <Text style={styles.tableCell}>{voucher.to}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{voucher.note}</Text>
        </View>
        <View style={{ ...styles.tableCol, width: "8%" }}>
          <Text style={styles.tableCell}>{formatCurrency(voucher.value)}</Text>
        </View>
      </View>
    );
  });
};

const renderFilterHeader = filterParams => {
  return (
    <View style={styles.filterHeader}>
      {filterParams.created_start_at && (
        <Text style={styles.filterText}>
          Data Inicio: {filterParams.created_start_at}
        </Text>
      )}
      {filterParams.created_end_at && (
        <Text style={styles.filterText}>
          Data Fim: {filterParams.created_end_at}
        </Text>
      )}
      {filterParams.taxi && (
        <Text style={styles.filterText}>Taxi: {filterParams.taxi}</Text>
      )}
      {filterParams.company && (
        <Text style={styles.filterText}>Empresa: {filterParams.company}</Text>
      )}
      {filterParams.employee && (
        <Text style={styles.filterText}>
          Funcionário: {filterParams.employee}
        </Text>
      )}
    </View>
  );
};

const renderTotalValue = vouchers => {
  const totalValues = vouchers.reduce(
    (totalValues, voucher) => totalValues + parseInt(voucher.value, 10),
    0
  );

  return <Text>Valor Total: {formatCurrency(totalValues)}</Text>;
};

const Pdf = ({ vouchers, filterParams }) => {
  return (
    <Document>
      <Page style={styles.body} orientation="landscape">
        <Image style={styles.logoVoo} src="/logo_voo.png" />
        <Text style={styles.title}>Relatório de Vouchers</Text>
        {renderFilterHeader(filterParams)}
        <View style={styles.table}>
          {/* TableHeader */}
          <View style={styles.tableRow}>
            <View style={{ ...styles.tableColHeader, width: "5%" }}>
              <Text style={styles.tableCellHeader}>#</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "15%" }}>
              <Text style={styles.tableCellHeader}>Data</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "5%" }}>
              <Text style={styles.tableCellHeader}>Taxi</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "14%" }}>
              <Text style={styles.tableCellHeader}>Empresa</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "13%" }}>
              <Text style={styles.tableCellHeader}>Funcionário</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "15%" }}>
              <Text style={styles.tableCellHeader}>Origem</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "15%" }}>
              <Text style={styles.tableCellHeader}>Destino</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Obs.</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "8%" }}>
              <Text style={styles.tableCellHeader}>Valor</Text>
            </View>
          </View>
          {/* TableContent */}
          {renderTable(vouchers)}
        </View>
        {renderTotalValue(vouchers)}
      </Page>
    </Document>
  );
};

export default class VouchersPdf extends Component {
  state = {
    ready: true
  };

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

  componentDidMount() {
    this.setState({ ready: false });
    setTimeout(() => {
      this.setState({ ready: true });
    }, 1);
  }

  render() {
    if (this.state.ready && this.props.vouchers.length > 0) {
      return (
        <>
          <PDFDownloadLink
            document={
              <Pdf
                vouchers={this.props.vouchers}
                filterParams={this.setFilter()}
              />
            }
            fileName="relatorio_vouchers.pdf"
            className="ui basic button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Carregando Pdf..." : "Download"
            }
          </PDFDownloadLink>
        </>
      );
    } else {
      return "Carregando Pdf...";
    }
  }
}
