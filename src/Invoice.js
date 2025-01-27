import React from "react";
import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "./Logo1.png";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 90,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  section: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#ddd",
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "5px",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 2,
  },
  // New Style for the side-by-side layout
  fromToContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fromToColumn: {
    width: "48%", // Adjust the width of each column
    fontSize: 10, // Reduced font size
  },
});

const Invoice = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.title}>Quotation</Text>
      </View>

      <View style={[styles.fromToContainer]}>
        <View style={styles.fromToColumn}>
          <Text style={styles.sectionHeader}>FROM</Text>
          <View style={styles.row}>
            <Text>DESIGNASM TECHNOLOGIES PVT. LTD.</Text>
          </View>
          <View style={styles.row}>
            <Text>115, 4th E Cross Rd, kasturi nagar</Text>
          </View>
          <View style={styles.row}>
            <Text>Bengaluru, Karnataka 560043</Text>
          </View>
          <View style={styles.row}>
            <Text>Phone: 9606210818</Text>
          </View>
          <View style={styles.row}>
            <Text>Mail: hello@habi.one</Text>
          </View>
          <View style={[styles.row, { marginTop: 10 }]}>
            <Text>GSTIN: 29AAKCD4656J1Z4</Text>
          </View>
          <View style={styles.row}>
            <Text>TAN: BLRD20700B</Text>
          </View>
        </View>

        <View style={styles.fromToColumn}>
          <Text style={styles.sectionHeader}>TO</Text>
          <View style={styles.row}>
            <Text>Mr. Kaushik Datta</Text>
          </View>
          <View style={styles.row}>
            <Text>D49, Sycon Maitri, Chikkabanahalli Main Road, Bengaluru</Text>
          </View>
          <View style={styles.row}>
            <Text>Bengaluru - 560067</Text>
          </View>
          <View style={styles.row}>
            <Text>Phone: 8861408080</Text>
          </View>
          <View style={styles.row}>
            <Text>Mail: kdattanerist@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* <View>
        <Text style={styles.sectionHeader}>INVOICE DETAILS</Text>

        <View style={styles.row}>
          <Text>INVOICE DATE - 08/07/2024</Text>
        </View>
        <View style={styles.row}>
          <Text>DUE DATE -</Text>
        </View>
      </View> */}

      {/* Table Section */}
      <View style={[styles.section, { marginBottom: 20 }]}>
        {/* Table Header */}
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingBottom: 3 },
          ]}
        >
          <Text style={[styles.label, { flex: 2 }]}>Project Brief</Text>
        </View>
        {/* Table Row */}
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Project package</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Land type</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Land Dimension</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>No of Floors</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Floor Height</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Site Area</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Built-up area</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 1 }}>Sump Capacity</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>N/A</Text>
        </View>
      </View>

      <View style={[styles.section, { marginBottom: 20 }]}>
        {/* Table Header */}
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingBottom: 3 },
          ]}
        >
          <Text style={[styles.label, { flex: 2 }]}>Description</Text>
          <Text style={[styles.label, { flex: 1 }]}>Built-up Area</Text>
          <Text style={[styles.label, { flex: 1 }]}>Package</Text>
          <Text style={[styles.label, { flex: 1 }]}>Total</Text>
        </View>
        {/* Table Row */}
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={{ flex: 2 }}>G + 1 Construction</Text>
          <Text style={{ flex: 1 }}>1200</Text>
          <Text style={{ flex: 1 }}>Essentials</Text>
          <Text style={{ flex: 1 }}>1000000</Text>
        </View>
      </View>

      <View style={[{ marginBottom: 20 }]}>
        {/* Table Header */}
        <View style={[styles.row, { paddingBottom: 3 }]}></View>

        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>SUBTOTAL</Text>
          <Text style={{ flex: 1 }}>1000000</Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>ROUND OFF</Text>
          <Text style={{ flex: 1 }}>1000000</Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>IGST(18%)</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>CGST(9%)</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>SGST(9%)</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>Total Tax:</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
        <View
          style={[styles.row, { borderBottomWidth: 1, borderColor: "#ddd" }]}
        >
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>SHIPPING/HANDLING</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
        <View
          style={[styles.row, { borderBottomWidth: 1, borderColor: "#ddd" }]}
        >
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>NET TOTAL:</Text>
          <Text style={{ flex: 1 }}>00</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Terms & Instructions</Text>
        <Text>
          All Bank transaction to be done in favor of "DESIGNASM TECHNOLOGIES
          PVT. LTD."
        </Text>
        <Text>Bank Axis Bank: Indiranagar</Text>
        <Text>Account no. 923020061276769</Text>
        <Text>IFSC UTIB0000114</Text>
      </View>
    </Page>
  </Document>
);

export default Invoice;
