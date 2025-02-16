import React from "react";
import { Image, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import logo from "../Logo1.png";
import rupee from "../rupee.png";

const styles = StyleSheet.create({
  page: {
    padding: 40,
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
    fontSize: 12,
  },
  footer: {
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
    width: "50%", // Adjust the width of each column
    fontSize: 10, // Reduced font size
  },

  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  divider: {
    borderBottom: "1px solid black",
    marginBottom: 20,
  },
});

const Page4 = () => (
  <Page size="A4" style={styles.page}>
    <View style={{ padding: 20, border: "1.5px dashed #c0c0c0" }}>
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
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

        <View style={{}}>
          <Text style={styles.sectionHeader}>TO</Text>
          <View style={styles.row}>
            <Text>Mr. Kaushik Datta</Text>
          </View>
          <View style={styles.row}>
            <Text>Phone: 8861408080</Text>
          </View>
          <View style={styles.row}>
            <Text>Mail: kdattanerist@gmail.com</Text>
          </View>
        </View>
      </View>

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
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Project package</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Land type</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Land Dimension</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>No of Floors</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Floor Height</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Site Area</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Built-up area</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
        <View
          style={[
            styles.row,
            { borderBottomWidth: 1, borderColor: "#ddd", paddingVertical: 2 },
          ]}
        >
          <Text style={[{ flex: 1 }, { fontSize: 11 }]}>Sump Capacity</Text>
          <Text
            style={[{ flex: 1 }, { fontSize: 11 }, { textAlign: "center" }]}
          >
            N/A
          </Text>
        </View>
      </View>

      <View style={[styles.section, { marginBottom: 5 }]}>
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
          <Text style={{ flex: 1 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
      </View>

      <View style={[{ marginBottom: 20 }]}>
        {/* Table Header */}
        <View style={[styles.row, { paddingBottom: 3 }]}></View>

        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>SUBTOTAL</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>ROUND OFF</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>IGST(18%)</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}

          </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>CGST(9%)</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>SGST(9%)</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
        <View
          style={[styles.row, { borderBottomWidth: 1, borderColor: "#ddd" }]}
        >
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>Total Tax:</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>

        <View
          style={[styles.row, { borderBottomWidth: 1, borderColor: "#ddd" }]}
        >
          <Text style={{ flex: 2 }}></Text>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ flex: 1 }}>NET TOTAL:</Text>
          <Text style={{ flex: 1, textAlign: "right", paddingRight: 40 }}>
            <Image src={rupee} style={{ width: 8, height: 8 }} />
            {(2683800).toLocaleString("en-IN")}
            </Text>
        </View>
      </View>

      <View style={[styles.footer, { textAlign: "left", width: "50%" }]}>
        <Text>Terms & Instructions</Text>
        <Text>
          All Bank transaction to be done in favor of "DESIGNASM TECHNOLOGIES
          PVT. LTD."
        </Text>
        <Text>Bank: Axis Bank Indiranagar</Text>
        <Text>Account no: 923020061276769</Text>
        <Text>IFSC: UTIB0000114</Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 8, marginTop: 2 }}>
        This is a computer-generated invoice
      </Text>
    </View>
  </Page>
);

export default Page4;
