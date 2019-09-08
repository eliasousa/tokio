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
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{voucher.taxi.smtt}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{voucher.company.name}</Text>
        </View>
        <View style={styles.tableCol}>
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
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{formatCurrency(voucher.value)}</Text>
        </View>
      </View>
    );
  });
};

const Pdf = ({ vouchers }) => {
  return (
    <Document>
      <Page style={styles.body} orientation="landscape">
        <Image style={styles.logoVoo} src="/logo_voo.png" />
        <Text style={styles.title}>Relatório de Vouchers</Text>
        <View style={styles.table}>
          {/* TableHeader */}
          <View style={styles.tableRow}>
            <View style={{ ...styles.tableColHeader, width: "5%" }}>
              <Text style={styles.tableCellHeader}>#</Text>
            </View>
            <View style={{ ...styles.tableColHeader, width: "15%" }}>
              <Text style={styles.tableCellHeader}>Data</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Taxi</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Empresa</Text>
            </View>
            <View style={styles.tableColHeader}>
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
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Valor</Text>
            </View>
          </View>
          {/* TableContent */}
          {renderTable(vouchers)}
        </View>
      </Page>
    </Document>
  );
};

export default class VouchersPdf extends Component {
  state = {
    ready: true
  };

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
            document={<Pdf vouchers={this.props.vouchers} />}
            fileName="somename.pdf"
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
