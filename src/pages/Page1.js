import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../Logo1.png"; // Ensure you have the logo image in your project

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    width: 140, // Adjust size as needed
    height: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },

  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});

// Create Document Component
const Page1 = () => (
  <Page size="A4" style={styles.page}>
    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 15, paddingLeft: 15 },
          {
            borderLeft: "1px dashed #000000",
            borderBottom: "1px solid #000000",
            borderRight: "1px dashed #000000",
          },
        ]}
      >
        <Image src={logo} style={styles.logo} />
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1px dashed #000000",
          },
        ]}
      >
        <Text style={styles.header}>QUOTATION</Text>
      </View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 15, paddingLeft: 15, paddingTop: 15 },
          {
            borderLeft: "1px solid #000000",
            borderBottom: "1px solid #000000",
            borderRight: "1px dashed #000000",
          },
        ]}
      >
        <Text style={styles.subHeader}>Package - Essential</Text>
        <Text style={styles.text}>Name - Balaji Naik</Text>
        <Text style={styles.text}>Phone number - +91 9380032186</Text>
        <Text style={styles.text}>Land type - Regular</Text>
        <Text style={styles.text}>Land dimension - 30x40</Text>
        <Text style={styles.text}>No. of Floors - 3</Text>
        <Text style={styles.text}>Floor height - 10</Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1px dashed #000000",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 15, paddingLeft: 15, paddingTop: 15 },
          {
            borderLeft: "1px dashed #000000",
            borderBottom: "1px solid #000000",
            borderRight: "1px solid #000000",
          },
        ]}
      >
        <Text style={styles.text}>Site area - 1200 sq ft</Text>
        <Text style={styles.text}>Built-up area - 1080 sq ft</Text>
        <Text style={styles.text}>Sump capacity - 5000 liters</Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1px dashed #000000",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 15, paddingLeft: 15, paddingTop: 15 },
          {
            borderLeft: "1px solid #000000",
            borderBottom: "1px solid #000000",
            borderRight: "1px dashed #000000",
          },
        ]}
      >
        <Text style={styles.subHeader}>Estimated Cost</Text>
        <Text style={styles.text}>26,83,800</Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1px dashed #000000",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 15, paddingLeft: 15, paddingTop: 15 },
          {
            borderLeft: "1px dashed #000000",
            borderRight: "1px dashed #000000",
          },
        ]}
      >
        <Text>Call us</Text>
        <Text>9606210818</Text>
      </View>
      <View>
        <Text style={{ paddingTop: 10, fontSize: 10, paddingTop: 50 }}>
          NEXT PAGE
        </Text>
      </View>
    </View>
  </Page>
);

export default Page1;
