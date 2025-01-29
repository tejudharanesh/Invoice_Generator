import React from "react";
import {
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../Logo1.png"; // Ensure you have the logo image in your project

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
  logo: {
    width: 100,
    marginBottom: 20,
  },
  divider: {
    borderBottom: "1px solid black",
    marginBottom: 20,
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
      <Image src={logo} style={styles.logo} />
      <Text style={styles.header}>QUOTATION</Text>
      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.subHeader}>Package - Essential</Text>
        <Text style={styles.text}>Name - Balaji Naik</Text>
        <Text style={styles.text}>Phone number - +91 9380032186</Text>
        <Text style={styles.text}>Land type - Regular</Text>
        <Text style={styles.text}>Land dimension - 30x40</Text>
        <Text style={styles.text}>No. of Floors - 3</Text>
        <Text style={styles.text}>Floor height - 10</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>- Site area - 1200 sq ft</Text>
        <Text style={styles.text}>- Built-up area - 1080 sq ft</Text>
        <Text style={styles.text}>- Sump capacity - 5000 liters</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.subHeader}>Estimated Cost</Text>
        <Text style={styles.text}>¥ 26,83,800</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text>Call us</Text>
        <Text>9606210818</Text>
        <Text>NEXT PAGE ➤</Text>
      </View>
    </Page>
);

export default Page1;
