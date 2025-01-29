import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
    borderWidth: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tableWrapper: {
    width: "90%", // Adjust width as needed
    marginLeft: "auto",
    marginRight: "auto",
  },
  table: {
    display: "table",
    width: "100%", // Table should take up 100% of its wrapper's width
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "33%",
  },
  tableCell: {
    marginTop: 5,
    fontSize: 10,
  },
  rightAlignedCell: {
    textAlign: "right",
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
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>1%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Excavation</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>3%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Sand</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>4%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Steel Reinforcement</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>14%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Cement</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>8%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Solid Blocks</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>9%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Stones</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>5%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>RMC</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>9%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Formwork</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>3%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Pointing</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>6%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Plumbing</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>7%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Electrical work</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>5%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Exterior Flooring</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>5%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Compound wall</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>4%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Doors & Windows</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>3%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Miscellaneous</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>7%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Internal Flooring</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>7%</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
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
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Sump Cost</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>
            5000 Ltr
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={(styles.tableCell, styles.rightAlignedCell)}>0.00</Text>
        </View>
      </View>

      <View style={[styles.tableRow, { marginTop: 10 }]}>
        <View style={styles.tableCol}>
          <Text
            style={[styles.tableCell, { fontSize: 15, fontWeight: "bold" }]}
          >
            Total Estimated Cost*
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text
            style={[
              styles.tableCell,
              { fontSize: 15, fontWeight: "bold" },
              { textAlign: "right" },
            ]}
          >
            61,81,000
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default Page2;
