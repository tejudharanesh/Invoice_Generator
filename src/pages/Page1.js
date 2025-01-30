import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../Logo1.png"; // Ensure you have the logo image in your project
import rupee from "../rupee.png";
import plot from "../plot.png";
import water from "../Water.png";
import home from "../home.png";
import arrow from "../downarrow.png";

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
    fontSize: 14,
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
            borderLeft: "1.5px dashed #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
            borderDashArray: "10,10",
          },
        ]}
      >
        <Image src={logo} style={styles.logo} />
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
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
          { paddingBottom: 25, paddingLeft: 15, paddingTop: 25 },
          {
            borderLeft: "1.5px solid #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
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
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 25, paddingLeft: 15, paddingTop: 25 },
          {
            borderLeft: "1.5px dashed #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px solid #c0c0c0",
          },
        ]}
      >
        {[
          { src: plot, text: "Site area - 1200 sq ft" },
          { src: home, text: "Built-up area - 1080 sq ft" },
          { src: water, text: "Sump capacity - 5000 liters" },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Image
              src={item.src}
              style={{
                width: 15,
                height: 15,
                marginRight: 8,
                paddingBottom: 4,
              }}
            />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>

      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 25, paddingLeft: 15, paddingTop: 25 },
          {
            borderLeft: "1.5px solid #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text style={styles.subHeader}>Estimated Cost</Text>
        <Text style={[styles.text, { fontSize: 22 }]}>
          <Image src={rupee} style={{ width: 15, height: 15 }} />
          26,83,800
        </Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
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
            borderLeft: "1.5px dashed #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text>Call us</Text>
        <Text>9606210818</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={styles.text}>NEXT PAGE</Text>
        <Image
          src={arrow}
          style={{
            width: 20,
            height: 20,
            marginRight: 8,
            paddingBottom: 4,
          }}
        />
      </View>
    </View>
  </Page>
);

export default Page1;
