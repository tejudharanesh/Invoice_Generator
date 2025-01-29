import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "33%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  totalCost: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
  },
});

// Create Document Component
const Page2 = () => (
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Cost Breakdown Details</Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Design Fees</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Excavation</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Sand</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>4%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Steel Reinforcement</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>14%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Cement</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>8%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Solid Blocks</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>9%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Stones</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>RMC</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>9%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Formwork</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Pointing</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>6%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Plumbing</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Electrical work</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Exterior Flooring</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Compound wall</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>4%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Doors & Windows</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Miscellaneous</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Internal Flooring</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Floor Height Cost</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Sump Cost</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5000 Ltr</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>₹0.00</Text>
          </View>
        </View>
      </View>

      <Text style={styles.totalCost}>Total Estimated Cost* ₹ 61,81,000</Text>
    </Page>
);

export default Page2;
