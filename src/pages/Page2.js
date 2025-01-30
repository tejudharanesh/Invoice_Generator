import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import rupee from "../rupee.png";

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
    width: "100%", // Adjust width as needed
  },
  table: {
    display: "table",
    width: "100%", // Table should take up 100% of its wrapper's width
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
  },
  tableCol: {
    width: "20%",
  },
  tableCell: {
    fontSize: 16,
  },
  rightAlignedCell: {
    textAlign: "right",
    fontSize: 16,
    borderBottom: "1px dashed black",
  },
  leftAlignedCell: {
    textAlign: "left",
    fontSize: 16,
    borderBottom: "1px dashed black",
  },
  totalCost: {
    fontWeight: "bold",
    marginTop: 20,
  },
});

// Create Document Component
const Page2 = () => (
  <Page size="A4" style={styles.page}>
    <View style={{ padding: 20, border: "1.5px dashed #c0c0c0" }}>
      <Text style={styles.header}>Cost Breakdown Details</Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Design Fees</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>1%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Excavation</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Sand</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>4%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Steel Reinforcement</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>14%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Cement</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>8%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Solid Blocks</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>9%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Stones</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>RMC</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>9%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Formwork</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Pointing</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>6%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Plumbing</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Electrical work</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Exterior Flooring</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>5%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Compound wall</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>4%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Doors & Windows</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>3%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Miscellaneous</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Internal Flooring</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>7%</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Floor Height Cost</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Sump Cost</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.leftAlignedCell)}>
              5000 Ltr
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={(styles.tableCell, styles.rightAlignedCell)}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              0.00
            </Text>
          </View>
        </View>

        <View style={[styles.tableRow, { marginTop: 10 }]}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text
              style={[styles.tableCell, { fontSize: 17, fontWeight: "bold" }]}
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
                { fontSize: 18, fontWeight: "bold" },
                { textAlign: "right" },
              ]}
            >
              <Image
                src={rupee}
                style={{ width: 14, height: 14, paddingTop: 2 }}
              />
              61,81,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  </Page>
);

export default Page2;
